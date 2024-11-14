import { createStore } from 'redux';

// Initial state with an empty list of tasks
const initialState = {
  tasks: []
};

// Action types
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';

// Reducer function to handle state changes
function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task, index) => index !== action.payload) };
    default:
      return state;
  }
}

// Action creators
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const deleteTask = (index) => ({ type: DELETE_TASK, payload: index });

// Create and export the store
const store = createStore(taskReducer);
export default store;
