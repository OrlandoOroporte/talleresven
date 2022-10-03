const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || "",
      // urlBase:"https://talleresvenapp.herokuapp.com/",
      //  urlBase:process.env.BACKEND_URL,

      urlBase:"https://3001-orlandoorop-talleresven-0y7bdtxya6x.ws-us69.gitpod.io",


      taller: [],
      service: [],
      user:[]
    },
    actions: {
      userRegister: async (user) => {
        let store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/api/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // "Authorization": `Bearer ${store.token}`,
            },
            body: JSON.stringify(user),
          });
          if (response.ok) {
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

      userRegisterTaller: async (taller) => {
        let store = getStore();
        console.log(taller,"desde el actions")
        try {
          let response = await fetch(`${store.urlBase}/api/taller`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${store.token}`,
            },
            body: JSON.stringify(taller),
          });
          if (response.ok) {
            return true;  
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

      ///funcion para actualziar taller///
      updateTaller : async (taller) =>{
        let store = getStore();
        try {
          let response = await fetch (`${store.urlBase}/api/taller/${taller.taller_id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${store.token}`,
            },
            body: JSON.stringify(taller),
          });
          if (response.ok){
             //getActions().getTaller()
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      },

      ////funcion para registrar un servicio///
      registerService : async (service) =>{
        let store = getStore();
        try {
          let response = await fetch (`${store.urlBase}/api/service`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${store.token}`,
            },
            body: JSON.stringify(service),
          });
          if (response.ok){
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      },
      
      ///funcion para actualziar servicio///
      updateService : async (service) =>{
        let store = getStore();
        try {
          let response = await fetch (`${store.urlBase}/api/service/update`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${store.token}`,
            },
            body: JSON.stringify(service),
          });
          if (response.ok){
             getActions().getTaller()
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      },

      ///funcion para actualziar servicio///
      deleteService : async (service) =>{
        let store = getStore();
        console.log(service)
        try {
          let response = await fetch (`${store.urlBase}/api/services/${service}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${store.token}`,
            },
            // body: JSON.stringify(service),
          });
          if (response.ok){
             getActions().getService()
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      },

      getUserToke: async()=>{
        let store = getStore();
        try{
          let response = await fetch(`${store.urlBase}/api/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${store.token}`,
          },
        });
        let data = await response.json();
        console.log(response)
        if (response.ok){
          setStore ({
            ...store,
            user: data
          })
        }
        }catch{console.log (error)}
      
      },

      login: async (user) => {
        let store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
          if (response.ok) {
            let data = await response.json();
            setStore({ token: data.token });
            localStorage.setItem("token", data.token);
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },
      logout: () => {
        let store = getStore()
        localStorage.removeItem("token");

        setStore({ ...store, token: "" });
      },

      ////lo que agregue:
      getService: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/api/services`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              ...store,
              service: data,
            });
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

      getTaller: async () => {
        let store = getStore();
        try {
          let response = await fetch(`${store.urlBase}/api/talleres`);
          let data = await response.json();
          if (response.ok) {
            setStore({
              ...store,
              taller: data,
            });
          }
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },

     
    },
  };
};

export default getState;
