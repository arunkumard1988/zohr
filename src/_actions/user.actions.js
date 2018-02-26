import { userConstants } from '../_constants';
import { userService } from '../_services';
//import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login   
};

function login(username) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username)
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

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
 