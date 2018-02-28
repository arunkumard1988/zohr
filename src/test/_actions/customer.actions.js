import { userConstants } from '../_constants';
import { customerService } from '../_services';
//import { alertActions } from './';
import { history } from '../_helpers';

export const customerActions = {
    register,
	getAll	
};

function register(username) {
    return dispatch => {
        dispatch(request({ username }));

        customerService.register(username)
            .then(
                user => { 				 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
 
function getAll() {
    return dispatch => {
        dispatch(request());

        customerService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}