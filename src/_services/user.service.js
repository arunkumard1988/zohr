export const userService = {
    login    
};

function login(username) {
		//static for testing 
		 return fetch('https://facebook.github.io/react-native/movies.json')
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        }) 
 
}
 