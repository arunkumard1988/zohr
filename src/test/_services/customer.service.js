export const customerService = {
    register,
	getAll	
};

function register(username) {
		//static for testing 
		 return fetch('https://facebook.github.io/react-native/movies.json')
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        }) 
 
}

function getAll() {
  /*   const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }; */

    return fetch('https://facebook.github.io/react-native/movies.json').then(handleResponse);
}
 
 function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
	let responseJson = {
	id: "adfsdfdsf",
	username: "arun",
	firstName: "arun",
	lastName: "kumar",
	token: 'fake-jwt-token'
};
    //return response.json();
    return responseJson;
}