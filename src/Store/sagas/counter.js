import { takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions/counter";
import axios from 'axios';

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const fetchAnime = function () {
  return new Promise((resolve, reject) => {
    axios.get('https://api.jikan.moe/v3/search/anime?q=naruto&limit=16').then(response => {

      console.log(' [response] ', response);

      if (response.status === 200) {
        resolve(response.data.results)
      } else {
        resolve(null)
      }
      
    }).catch(error => {
      console.log(' [error] ', error);
      
      reject({error: true})
    });
  })
}

const cbIncrementCounter = function* () {
  console.log("[cbIncrementCounter]");
  
  const animes = yield call(fetchAnime);
  
  yield put(actions.cbIncrementCounterSuccess());
};

export const counterSaga = [takeEvery("INCREMENT_COUNTER", cbIncrementCounter)];
