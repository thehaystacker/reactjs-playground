// import {delay} from 'redux-saga';
import {all} from 'redux-saga/effects'
// import axios from 'axios'

const testingOne = function* () {
    yield 'Testing one';
    
}

const testingTwo = function* () {
    yield 'Testing two';
}

export default function* rootSaga() {
    yield all([
        testingOne(),
        testingTwo(),
    ])
}