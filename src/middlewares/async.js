export default function ({ dispatch }) {
    return next => action => {
        //console.log(action);
        //If action does not have payload or the payload does not have a .then property we dont care about it, send it on
        if (!action.payload || !action.payload.then){
            return next(action);
        }
        //console.log('we dont have a promise', action);
        //next(action);

        //Make sure promise is resolved
        action.payload
            .then(function (res) {
                //create new action with the old type, but replace the promise with the response data
                const newAction = { ...action, payload: res };
                dispatch(newAction);
            })
    }
}
//dispatch means take this action and send it to top most 
//reducer again

//next means go to next middleware

//es5
// export default function ({ dispatch }) {
//     return function(next) {
//         return function(action){
//             console.log(action);
            
//             next(action);
//         }
//     }
// }
