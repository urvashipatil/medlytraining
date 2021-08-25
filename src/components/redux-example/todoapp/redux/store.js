import { createStore, applyMiddleware } from "redux";
import * as actions from "./todo-actions";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

function todoReducer(state = [], action) {
  switch (action.type) {
    // case actions.GET_TODOS:
    //   return [
    //     { id: 1, title: "my Task1", completed: true },
    //     { id: 2, title: "my Task2", completed: false },
    //     { id: 3, title: "my Task3", completed: false },
    //     { id: 4, title: "my Task4", completed: false },
    //   ];

    case actions.GET_TODOS_SUCCESS:
      return [...action.payload];

    case actions.ADD_TODOS:
      let updatedTodo = { ...action.payload };
      updatedTodo.id = state.length + 1;
      return [updatedTodo, ...state];

    case actions.DELETE_TODOS:
      let updatedTodos = state.filter((t) => t.id != action.paylod);
      return updatedTodos;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  todoReducer,
  applyMiddleware(sagaMiddleware)
  // [{ id: 1, title: "my Task1", completed: true }],
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);
