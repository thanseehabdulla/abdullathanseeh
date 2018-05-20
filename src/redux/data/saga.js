import { takeLatest, call, put, all, takeEvery, fork } from "redux-saga/effects";
import {DATA_ACTIONS} from './actions';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
    yield takeLatest(DATA_ACTIONS.API_FOR_MAILSERVICE, workerSaga);
}





// function that makes the api request and returns a Promise for response
function fetchData() {
    if(DATA_ACTIONS.API_FOR_MAILSERVICE === 'API_FOR_MAILSERVICE'){


    }

}



// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
   if(DATA_ACTIONS.API_FOR_MAILSERVICE === 'API_FOR_MAILSERVICE'){

   }else {
       try {
           const response = yield call(fetchData);
           const data = response.data.message;

           // dispatch a success action to the store with the new dog
           yield put({type: "API_CALL_SUCCESS", data});

       } catch (error) {
           // dispatch a failure action to the store with the error
           yield put({type: "API_CALL_FAILURE", error});
       }
   }
}







export default function* rootSaga() {
    yield all([
        fork(watcherSaga)
    ]);
}