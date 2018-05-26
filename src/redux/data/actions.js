export const DATA_ACTIONS = {

// action types
    API_CALL_REQUEST: "API_CALL_REQUEST",
    API_CALL_SUCCESS: "API_CALL_SUCCESS",
    API_CALL_FAILURE: "API_CALL_FAILURE",
    API_FOR_MAILSERVICE:"API_FOR_MAILSERVICE",


    send_Mail:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_MAILSERVICE,
            data
        }
    },

}
