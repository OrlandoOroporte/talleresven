const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token:localStorage.getItem("token") || "",
      urlBase:"https://talleresvenapp.herokuapp.com/"

      // message: null,
      // demo: [
      // 	{
      // 		title: "FIRST",
      // 		background: "white",
      // 		initial: "white"
      // 	},
      // 	{
      // 		title: "SECOND",
      // 		background: "white",
      // 		initial: "white"
      // 	}
      // ]
    },
    actions: {
      userRegister: async (user) => {
        let store = getStore();
        try {
          let response = await fetch(
            `${store.urlBase}/api/user`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${store.token}`,
              },
              body: JSON.stringify(user),
            }
          );
          if (response.ok) {
            return true;
          }
          return false;
        } catch (error) {
          console.log(`Error: ${error}`);
        }
      },
      login: async (user) => {
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
        localStorage.removeItem("token");

        setStore({ token: "" });
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
