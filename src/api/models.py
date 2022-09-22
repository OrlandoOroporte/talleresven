from collections import UserList
from enum import unique
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=False, nullable=True )
    email = db.Column(db.String(120), unique=True, nullable=False)
    numero = db.Column(db.String(20), unique=False, nullable=True)
    avatar = db.Column(db.String(150), unique=False, nullable=True)
    password = db.Column(db.String(150), unique=False, nullable=False)
    salt = db.Column(db.String(80), unique=False, nullable=False)        # declaro el atributo salt que me va a ayudar a encriptar mi password
    
    taller_id = db.relationship('Taller', backref ='user', uselist=True)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "numero":self.numero,
            "avatar":self.avatar,
            "taller_id":[element.serialize() for element in  self.taller_id ]
            # do not serialize the password, its a security breach
        }

##### Creando la tabla para taller####

class Taller(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    direccion = db.Column(db.String(150), unique=False, nullable=True)
    rif = db.Column(db.String(80), unique=True, nullable=True)
    razon_social = db.Column(db.String, unique=False, nullable=True)
    activo = db.Column(db.Boolean, default=True)                           # cuando se cree el taller por defaul vendra activo y con permiso para publicar

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    servicio = db.relationship('Servicio', backref = 'taller', uselist=True)  # backref = relacion bidirecional, uselist = relacion 1 a muchos

    def __repr__(self):
        return f'<User {self.razon_social}>'

    def serialize(self):
        return {
            "id": self.id,
            "direccion": self.direccion,
            "rif": self.rif,
            "razon_social":self.razon_social,
            # do not serialize the password, its a security breach
        }
        
#########Creando la tabla para Servicios###########

class Servicio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(200),unique=False, nullable=False)
    name = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(200), unique=False, nullable=False)
    precio = db.Column(db.Integer, unique=False, nullable=False)
    
    taller_id = db.Column(db.Integer, db.ForeignKey('taller.id'))

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "image": self.image,
            "name": self.name,
            "descripcion": self.descripcion,
            "precio": self.precio,
            "taller_id": self.taller_id
        }
