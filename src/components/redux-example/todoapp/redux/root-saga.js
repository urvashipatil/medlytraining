import * as actions from "./todo-actions";
import { takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";

//watcher saga
function* watchGetTodos() {
  yield takeEvery(actions.GET_TODOS, workerGetTodos);
}

//workersaga
function* workerGetTodos() {
  let todos = yield call(getTodos);
  yield put({ type: actions.GET_TODOS_SUCCESS, payload: todos });
}

async function getTodos() {
  let response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  return response.data;
}

export default function* rootSaga() {
  yield all([watchGetTodos()]);
}
