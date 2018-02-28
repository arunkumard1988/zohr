import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
		//mode: 'cors',
        body: JSON.stringify({ username })
    };
	//alert(JSON.stringify(requestOptions));
/*      return fetch('/users/authenticate', requestOptions)
        .then(response => {
			//alert(response);
            if (!response.ok) { 
			
                return Promise.reject(response.statusText);
            }
			console.log(response.json());
            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });  */
					let responseJson = {
					id: "adfsdfdsf",
					username: "arun",
					firstName: "arun",
					lastName: "kumar",
					token: 'fake-jwt-token'
				};
				console.log(responseJson);
				return fetch('https://facebook.github.io/react-native/movies.json')
				.then((response) => responseJson)
				.then((responseJson) => {
				  return responseJson;
				})		
				.then(user => {
					// login successful if there's a jwt token in the response
					if (user && user.token) {
						// store user details and jwt token in local storage to keep user logged in between page refreshes
						localStorage.setItem('user', JSON.stringify(user));
					}

					return user;
				})				
				.catch((error) => {
				  console.error(error);
				}); 
		
		/* return fetch('https://facebook.github.io/react-native/movies.json', requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        }) */
 
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers:{AuthorizationBearer:"fake-jwt-token"}
    };

    return fetch('/users', requestOptions).then(handleResponse);
}


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users/' , requestOptions).then(handleResponse);
}

function register(user) {
	 
    const requestOptions = {
        method: 'GET',
        headers:{AuthorizationBearer:"fake-jwt-token"}
    };

    return fetch('/users', requestOptions).then(handleResponses);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/', requestOptions).then(handleResponse);;
}

function handleResponse(response) {
	//console.log("testing");
	//console.log(response);
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }
	//console.log(response);
    return response.json();
}

function handleResponses(response) {

	let responseJson = {
	id: "adfsdfdsf",
	username: "arun",
	firstName: "arun",
	lastName: "kumar",
	token: 'fake-jwt-token'
	};	
    if (!response.ok) { 
		 
        return Promise.reject(response.statusText);
    }
	 

    return responseJson;
}