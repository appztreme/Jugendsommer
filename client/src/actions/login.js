// import * as consts from './../constants';
// import fetch from 'isomorphic-fetch';
//
// function requestLogin(creds) {
//   console.log("REQUEST LOGIN TRIGGERED");
//   return {
//     type: consts.LOGIN_REQUEST,
//     isFetching: true,
//     isAuthenticated: false,
//     credentials: creds
//   };
// }
//
// function receiveLogin(user) {
//     console.log("RECEIVE LOGIN TRIGGERED: " + user);
//     return {
//         type: consts.LOGIN_SUCCESS,
//         isFetching: false,
//         isAuthenticated: true,
//         user: user
//     };
// }
//
// function errorLogin(message) {
//     return {
//         type: consts.LOGIN_FAILURE,
//         isFetching: false,
//         isAuthenticated: false,
//         message: message
//     };
// }
//
// export function checkHttpStatus(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return response
//     } else {
//         var error = new Error(response.statusText)
//         error.response = response
//         throw error
//     }
// }
//
// export function loginUser(creds) {
//     console.log(creds);
//     let config = {
//         method: 'POST',
//         headers: { 'Content-Type':'application/x-www-form-urlencoded'},
//         body: `username=${creds.username}&password=${creds.password}`
//     };
//     return (dispatch) => {
//         dispatch(requestLogin(creds));
//
//         return fetch('http://localhost:2000/api/login', config)
//             .then(checkHttpStatus)
//             .then(response => response.json())
//             .then(response => {
//               console.log(response);
//               dispatch(receiveLogin(response.user));
//             })
//             .catch(err => console.log("ERROR: ", err));
//     }
// }
