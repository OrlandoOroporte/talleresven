"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""


from email.mime import image
import os                                                                     # importo os para trabajar con cosas del sistema operativo 
from ast import Try
import email
from shutil import ExecError
from venv import create
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Taller, Servicio
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash      # importo generate y cheack de la libreria werkzeug.security
from base64 import b64encode                                                   # importo b64encode desde la libreria base64
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import cloudinary.uploader as uploader 

api = Blueprint('api', __name__)               

VALID_FORMATS = ["image/png", "image/jpg", "image/jpeg"]

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

def set_password(password, salt):                                  # Declaro una funcion que me recibe mi contrase;a y el salt
    return generate_password_hash(f"{password}{salt}")             # y me devuelve la contrase;a contatenado con el salt y hasheada 

def check_password(hash_password, password, salt):                   # Declaro una funcion que recibe mi contrase;a hasheada y mi contrase;a sin hashear
    return check_password_hash(hash_password, f"{password}{salt}")   # y me dice si las contrase;a coinciden

############ Creando la ruta para registrar usuarios##########

@api.route('/user', methods=['POST'])           # creo mi ruta para user
def add_user():                                 # declaro mi funcion para agregar el usuario
    if request.method == 'POST':                # pregunto si el metodo es POST
        body = request.json                     # guardo el cuerpo de la solicitud en la variable body
        email = body.get('email', None)         # declaro una variable email, y guardo el emial en ella y en caso de no conseguirla la creo en None    
        password = body.get('password', None)   # declaro una variable password, y guardo la contraseña en ella y en caso de no conseguirla la creo en None
        name = body.get('name', None)           # declaro una variable name, y guarde el nombre de usuario y en caso de no conseguirla la creo en None
        numero = body.get('numero', None)       # declaro una variable numero, y guarde el nombre de usuario y en caso de no conseguirla la creo en None
        avatar = body.get('avatar', None)       # declaro una variable avatar, y guarde el nombre de usuario y en caso de no conseguirla la creo en None

                                                # hacemos las Validaciones
        if email is None or password is None:               # verifico si existe una propiedad email 
            return jsonify('debe enviar el payload completo'), 400  # en caso de dar error imprimo el mensaje y paso el codigo (400 Bad Request)
        else:
            salt = b64encode(os.urandom(32)).decode('utf-8')                       # creo el salt en base a b64code aleatorio
            password = set_password(password, salt)                                # antes de registrar el usuario, hasheo mi contrase;a 
            print (f"debo guardar al usuario con el pass: ${password}")            # imprimo el mensaje y paso el codigo 200 (Ok)
            request_user = User(name = name, email=email, numero=numero, avatar=avatar, password=password, salt=salt)   # Instancio mi variable request_user
            db.session.add(request_user)                                           # inicio la session en BD con los datos de usuario
            
            try:                                    # realizo un try except            
                db.session.commit()                 # subo los cambios en BD
                return jsonify("Todo bien"), 200    # retorno un mensaje "Todo bien" con el codigo 200(ok)
            except ExecError as error:
                db.session.rollback                 # en caso de error, regreso todos los cambios
                print(error.args)
                return jsonify('algo salio mal')
    return jsonify(), 201                           # retorno vacio con el codigo 201 (Created)

############ Creando la ruta para actualizar usuarios##########

@api.route('/user/update', methods=['PUT'])                 # creo mi ruta para actualizar  
@jwt_required()
def update_user():                                   # declaro la funcion para actulizar el usuario 
    user_id = get_jwt_identity()                     # declaro user_id para extraer del token el id del usuario que hace la solicitud   
    if request.method == 'PUT':                      # valido si el metodo es PUT
        
        if user_id is None:                                      # verifico si el ID de usuario es valido   
            return jsonify("Verifica el ID del usuario"), 400    # retorno un mensaje de error y el codigo 400 (Bad request)  

        if user_id is not None:
            update_user = User.query.get(user_id)                # consulto en bd y me traigo el usuario por el id   
            if update_user is None:                              # verifico si el usuario llego vacio
                return jsonify("No se consiguio informacio de ese user"), 404  # retorno un mensaje de error con el codigo 404 (Not found)
            else:
                if request.form.get("name"):
                    update_user.name =  request.form.get("name")        # accedo a la propiedad name y le asigno el name que vino en la solicitud
                
                if request.form.get("numero") is not "":
                    update_user.numero = request.form.get("numero")      # accedo a la propiedad numero y le asigno el numero que vino en la solicitud
                if request.files["avatar"] is not "":
                    cloudinary_image = uploader.upload(request.files["avatar"])
                    update_user.avatar=cloudinary_image["url"]
                try:
                    db.session.commit()                  # guardo los cambios en BD
                    return jsonify(update_user.serialize()), 201  # retorno el usuario modificado con el codigo 201
                except Exception as error:               # en caso de error 
                    print(error.args)                    # imprimo el error 
                    return jsonify(f"Error interno del servidor{error.args}"), 500    # imprimo el error con el codigo 500 (Internal server error) 
        return jsonify([]), 200                          # retorno un jsonify 200 Ok   ?????
    return jsonify ([]), 405                             # retorno un jsonify vacio con el codigo 405 (metodo no permitido)


#####consulta de usuarios#####

@api.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    user = User.query.get(get_jwt_identity())
    if user is not None:
        print(user.serialize())
        return jsonify(user.serialize()), 200
    else: 
        return jsonify("user not found"), 404 


######### Creando la ruta para hacer Login##########

@api.route('/login', methods=['POST'])              # declaro mi ruta para el hacer login con un metodo POST
def login():                                        # defino mi funcion llamada login
    if request.method == 'POST':                    # verifico si el metodo a implementar es POST
        body = request.json                         # en caso de serlo, guardo lo que me envian en la variable body
        email = body.get('email', None)             # declaro mi variable email y guardo el email del usuario que intenta logearse alli
        password = body.get('password', None)       # declaro mi variable password y guardo la contrase;a de quien intenta logearse alli
    
        login_user = User.query.filter_by(email=email).one_or_none()       # hago una consulta a la BD y me traigo el usuario que corresponda al emial y usuario
        if login_user:                                           # en caso de exisitir el usuario      
            if check_password(login_user.password, password, login_user.salt):    # verifico si la contrase;a que me pasaron coincide con el hash
                print("este pana tiene permiso")                 # imprimo un mensaje que se tiene permiso
                ###CREAR Y RESPONDER EL TOKEN###   
                created_token = create_access_token(identity= login_user.id)
                return jsonify({'token': created_token}), 200    # y retorno un mensaje usted esta logeado con el codigo 200 ok
            else:
                return jsonify("Bad credentials"),    400        # en caso de no coincidir retorno un mensaje de error con el codigo 400 (Bad reques)
        else:                                                    # en caso de no traer nada
            return jsonify('bad credencial'), 400                # respondo con mensaje de error y con el codigo 400(Bad request)

    return jsonify('todo bien'),201                     


############ Creando la ruta para registrar talleres##########

@api.route('/taller', methods=['POST'])         # creo mi ruta para user
@jwt_required()
def add_taller():                               # declaro mi funcion para agregar el taller
    if request.method == 'POST':                # pregunto si el metodo es POST
        body = request.json                     # guardo el cuerpo de la solicitud en la variable body
        direccion = body.get('direccion', None)         # declaro una variable email, y guardo el emial en ella y en caso de no conseguirla la creo en None    
        rif = body.get('rif', None)
        razon_social = body.get('razon_social', None)   # declaro una variable password, y guardo la contraseña en ella y en caso de no conseguirla la creo en None
        logo = body.get('logo', None)
        user_id = get_jwt_identity()                    # guardo el id del usuario en la variable user_id
        # hacemos las Validaciones 
        if direccion is None or rif is None or razon_social is None:   
                   return('debe enviar el payload completo'), 400  # en caso de dar error imprimo el mensaje y paso el codigo (400 Bad Request)
        else:
            print (f"debo guardar al taller")     # imprimo el mensaje y paso el codigo 200 (Ok)
            request_taller = Taller(direccion = direccion, rif=rif, razon_social=razon_social, logo = logo, user_id=user_id)   # Instancio mi variable request_user
            db.session.add(request_taller)                                            # inicio la session en BD con los datos de usuario
            
            try:                                    # realizo un try except            
                db.session.commit()                 # subo los cambios en BD
                return jsonify({"Taller":request_taller.serialize()}), 200    # retorno un mensaje "Todo bien" con el codigo 200(ok)
            except ExecError as error:
                db.session.rollback                 # en caso de error, regreso todos los cambios
                print(error.args)
                return jsonify('algo salio mal'),500
    return jsonify(), 201                           # retorno vacio con el codigo 201 (Created)


############# creando la ruta para actualizar un taller##########

@api.route('/taller', methods=['PUT'])                  
@api.route('taller/<int:taller_id>', methods=['PUT'])  # creo mi ruta para actualizar mi id
@jwt_required()                                        # protego mi ruta para que solo el usuario pued modificar los datos del taller
def update_taller(taller_id=None):                     # declaro una funcion para tomar el taller id y hacer validaciones
    if request.method == 'PUT':                        # valido si el metodo es PUT (actualizar)
        form = request.form                         # guardo en la variable body el cuerpo de la solicitud

        if taller_id is None:                                     # valido si colocaron el id en la ruta 
            return jsonify("Debe colocar el id en ruta"),404      # en ese caso retorno un mensaje de error con el codigo 404 (Bad request)
        
        if taller_id is not None: 
            update_taller = Taller.query.get(taller_id)    # consulto la base de datos y me traigo el taller con el id solicitado  
            if update_taller is None:                      # valido si me traje alguna informacion
                return jsonify("No se encontro datos con ese ID"), 404   # en caso de no encontrar nada retorno un error 404 (not found)
            elif update_taller.user_id != get_jwt_identity():            # en caso de que el id de usuario no coincida le digo que no tiene permiso
                return jsonify('Unautorizate user'), 401   # retorno un mensaje de error usuario no autorizado 

            else:
                update_taller.direccion = form.get("direccion")             # guardo en la direccion nueva 
                if update_taller.rif != form.get('rif'):                # si el rif del taller es diferente guardo el rif
                   update_taller.rif = form.get("rif")                      # guardo el nuevo rif 
                update_taller.razon_social = form.get("razon_social")       # guardo la nueva razon social 
                if request.files['logo'] is not None: 
                    update_taller.logo = request.files["logo"]                    # guardo el nuevo logo

                try:
                    db.session.commit()                                 # guardo los cambios en BD
                    return jsonify(update_taller.serialize()), 202      # retorno lo que se esta guardando con el codigo 202 (acepted)             
                except Exception as error:                                          
                    return jsonify(f"Error al actualizar el taller{error.args}"), 500    # Error interno del servidor 500 (Internal error server) 
       
        return jsonify ([]), 201                                          # error 201  ???? el 201 no es un error
    return jsonify ([]), 405                                              # metodo no permitido     


######### Creando la ruta para traerme todos los talleres#########

@api.route('/talleres', methods=['GET'])                    # creo la ruta que usare para traer todos los talleres disponibles
@api.route('/talleres/<int:taller_id>')                     # creo la ruta que usare para traerme un taller en especifico
def get_talleres(taller_id=None):                           # declaro la funcion que me ayudara a ejecutar mi logica
                                                            
    if request.method == 'GET':                             # pregunto si el metodo es GET 

        if taller_id is None:                               # valido si taller_id fue incluido por el usuario
            talleres = Taller.query.all()                         # en caso de no ser incluido me traigo todos los talleres de mi BD                       
            return jsonify(list(map(lambda item : item.serialize(), talleres ))),200        
        
        elif taller_id is not None:
                taller = Taller.query.get(taller_id)
                if taller is None:
                    return jsonify("No se consigio ningun taller por ese id"), 404    
                else:    
                    return jsonify(taller.serialize()),200    
    return jsonify ([]), 401                  

############ Creando la ruta para registrar servicio##########

@api.route('/service', methods=['POST'])          # creo mi ruta para user
@jwt_required()
def add_service():                                  # declaro mi funcion para agregar el taller
    if request.method == 'POST':                  # pregunto si el metodo es POST
        body = request.json                       # guardo el cuerpo de la solicitud en la variable body
        name = body.get('name', None)             # declaro una variable email, y guardo el emial en ella y en caso de no conseguirla la creo en None    
        price = body.get('price', None)
        descripcion = body.get('descripcion', None)
        image = body.get('image', None)
        taller_id = body.get('taller_id', None)
        

        user_id = get_jwt_identity()              # extraigo el id del usuario y lo guardo en user_id
        # user = User.query.filter_by(id=user_id).one_or_none()
        taller = Taller.query.get(taller_id)      # consulto la bd y me traigo la informacion del taller y la guardo en taller
        if taller.user_id != user_id:             # pregunto si el taller pertenece al usario actual
            return jsonify('usted no tiene permiso becerro'), 401     # retorno un mensaje de error "sin autorizacion"
    
        # hacemos las Validaciones 
        if name is None or price is None or taller_id is None:               # verifico si existe una propiedad email, price o taller_id
            return jsonify('debe enviar el payload completo'), 400           # en caso de dar error imprimo el mensaje y paso el codigo (400 Bad Request)
        else:
            print (f"debo guardar al servicio")        
            request_service = Servicio(name = name, precio=price, descripcion=descripcion, image=image, taller_id=taller_id)   # Instancio mi variable request_user
            db.session.add(request_service)                                              # inicio la session en BD con los datos de usuario
            
            try:                                    # realizo un try except            
                db.session.commit()                 # subo los cambios en BD
                return jsonify("Todo bien"), 200    # retorno un mensaje "Todo bien" con el codigo 200(ok)
            except ExecError as error:
                db.session.rollback                 # en caso de error, regreso todos los cambios
                print(error.args)
                return jsonify('algo salio mal')
    return jsonify(), 405                           # retorno vacio con el codigo 405 (Metodo no permitido)



###### creando la ruta para actualizar el servicio###########

@api.route('/service/update', methods=['PUT'])              # creo el endpoint que se utilizara para actualizar el servico 
@jwt_required()                                             # protejo mi ruta para que solo el usuario dueno del taller pueda actualizar su servicio
def update_service():                                       # defino la funcion que puede actualizar el servicio
    if request.method == 'PUT':                             # valido si el metodo utilizado es PUT
        body = request.json                                 # declaro mi variable body y le guardo el cuerpo json de la solicitud
 
        service_id = body.get('service_id')                 # declaro una variable service_id y guardo el id del servicio

        if service_id is None:                                           # verifico si el usuario coloco el id del servicio
            return jsonify("Debe indicar el id del servicio"), 400       # en el caso que no, retorno un mensaje de error con el codigo 400 (Bad request)
        if service_id is not None:
            user_id = get_jwt_identity()                                 # guardo el id de mi usuario en la variable user_id         
            update_service = Servicio.query.get(service_id)              # consulto la BD y me traigo el servicio por el ID
            taller = Taller.query.get(update_service.taller_id)          # consulto la BD y me traigo la informacion del taller
            if taller.user_id != user_id:                                # verifico si el id de usuario coincide
                return jsonify('usted no tiene permiso becerro'), 401    # en caso de no coincidir, retorno un mensaje de erro con el codigo 401 (Unauthorized)

            if update_service is None:                                   # valido si la busqueda trajo algo por el id recibido
                return jsonify("No se encontro el taller"), 404          # en caso de no traer nada, se retorno un mensaje de error con el codigo 404
            else:
                
                if "" != body.get('name'):                              # verifico si el nombre vino vacio no hagas nada
                   update_service.name = body.get('name')
                update_service.precio = body.get('price')
                update_service.descripcion = body.get('descripcion')
                if "" != body.get('image'):
                    update_service.image = body.get('image')

                try:
                    db.session.commit()                                  # subo los cambios a BD
                    return jsonify (update_service.serialize()), 200     # retorno el codigo 200 con los datos actualizados
                except ExecError as error:
                    db.session.rollback()                                # en caso de error devuelvo todos los cambios
                    return jsonify (f"Ocurrio un error mientras se guardaban los cambios: {error}"), 500       # retorno un error 500 (Internal server error)
    return jsonify([]), 405                                              # en caso de no ser PUT retorno vacio y devuelvo el codigo 405 (Metodo no permitido )        


##### creando la ruta para consultar todos los servicios####

@api.route('/services', methods = ['GET'])
@api.route('services/<int:service_id>', methods=['GET'])
def get_services(service_id = None):
    
    if request.method == 'GET':
        if service_id == None:
           services = Servicio.query.all()
           return jsonify(list(map(lambda item : item.serialize() , services))), 200
        
        elif service_id is not None:
            service = Servicio.query.get(service_id)
            if service is None:
                return jsonify("No se puedo encontrar un servicio con ese id"), 404
            else:
                return jsonify(service.serialize()), 200
    return jsonify([]), 405

###### Creando la ruta para eliminar los servicios #####

@api.route('/services/<int:service_id>', methods=['DELETE'])
@jwt_required()
def deleteService(service_id = None):

    if request.method == 'DELETE':
        if service_id is None:
            return jsonify({"Error":"Debes especificar el id"}), 400
              
        if service_id is not None:
            user_id = get_jwt_identity()                                 # guardo el id de mi usuario en la variable user_id         
            delete_service = Servicio.query.get(service_id)              # consulto la BD y me traigo el servicio por el ID
            taller = Taller.query.get(delete_service.taller_id)          # consulto la BD y me traigo la informacion del taller
            if taller.user_id != user_id:                                # verifico si el id de usuario coincide con id de usuario del taller
                return jsonify('usted no tiene permiso becerro'), 401    # en caso de no coincidir, retorno un mensaje de error con el codigo 401 (Unauthorized)
            
            if delete_service is None:
                return jsonify({"Error":"No se consiguio el servicio"}), 404
            else:
                db.session.delete(delete_service)

            try:
                db.session.commit()
                return jsonify([]), 202
            except Exception as error:
                print(error.args)
                db.session.rollback()
                return jsonify({"message":f"Error:{error.args}"}),500
    
    return jsonify([]),405

###### Creando la ruta para eliminar los servicios #####

@api.route('/talleres/<int:taller_id>', methods=['DELETE'])
@jwt_required()
def deleteTaller(taller_id = None):

    if request.method == 'DELETE':
        if taller_id is None:
            return jsonify({"Error":"Debes especificar el id"}), 400
              
        if taller_id is not None:
            user_id = get_jwt_identity()                                 # guardo el id de mi usuario en la variable user_id         
            delete_taller = Taller.query.get(taller_id)                  # consulto la BD y me traigo el taller por el ID
            # taller = Taller.query.get(delete_taller.taller_id)           # consulto la BD y me traigo la informacion del taller
            if delete_taller.user_id != user_id:                                # verifico si el id de usuario coincide con id de usuario del taller
                return jsonify('usted no tiene permiso becerro'), 401    # en caso de no coincidir, retorno un mensaje de error con el codigo 401 (Unauthorized)
            
            if delete_taller is None:
                return jsonify({"Error":"No se consiguio el servicio"}), 404
            else:
                db.session.delete(delete_taller)

            try:
                db.session.commit()
                return jsonify([]), 202
            except Exception as error:
                print(error.args)
                db.session.rollback()
                return jsonify({"message":f"Error:{error.args}"}),500
    
    return jsonify([]),405