const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: localStorage.getItem("token") || "",
      // urlBase:"https://talleresvenapp.herokuapp.com/",
      urlBase:
        "https://3001-orlandoorop-talleresven-2jweznl2afk.ws-us67.gitpod.io",

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

      // // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },

      // getMessage: async () => {
      // 	try{
      // 		// fetching data from the backend
      // 		const resp = await fetch("http://" + process.env.BACKEND_URL + "/api/hello")
      // 		const data = await resp.json()
      // 		setStore({ message: data.message })
      // 		// don't forget to return something, that is how the async resolves
      // 		return data;
      // 	}catch(error){
      // 		console.log("Error loading message from backend", error)
      // 	}
      // },
      // changeColor: (index, color) => {
      // 	//get the store
      // 	const store = getStore();

      // 	//we have to loop the entire demo array to look for the respective index
      // 	//and change its color
      // 	const demo = store.demo.map((elm, i) => {
      // 		if (i === index) elm.background = color;
      // 		return elm;
      // 	});

      // 	//reset the global store
      // 	setStore({ demo: demo });
      // }
    },
  };
};

export default getState;
