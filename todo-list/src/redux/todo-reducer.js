import {getTasks} from "../api";

const SET_TODOS = 'todo/SET_TODOS'
const SET_CURRENT_PAGE = 'todo/SET_CURRENT_PAGE'
const ADD_TODO = 'todo/ADD_TODO'
const TOGGLE_COMPLETE_SUCCESS = 'todo/TOGGLE_COMPLETE_SUCCESS'
const UPDATE_TODO = 'todo/UPDATE_TODO'
const DELETE_TODO = 'todo/DELETE_TODO'

let initialStore = {
    pageSize: 10,
    totalTodosCount: 199,
    currentPage: 1,
    isFetching: false,
    allTodos: []
}

export let todoReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_TODOS: {
                return { ...state, allTodos: action.todos}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case ADD_TODO: {
            let title = action.title
            return {...state,
                allTodos: [ ...state.allTodos , {id: ++state.totalTodosCount, userId: 7, title:title, completed:false}],
            totalTodosCount: ++state.totalTodosCount}
        }
        case TOGGLE_COMPLETE_SUCCESS: {
            for (let i in state.allTodos) {
                if (state.allTodos[i].id === action.id) {
                    state.allTodos[i].completed = !state.allTodos[i].completed;
                    break;
                }
            }
                return {
                    ...state, allTodos: [...state.allTodos]
                }
        }
        case UPDATE_TODO: {
            for (let i in state.allTodos) {
                if (state.allTodos[i].id === action.id) {
                    state.allTodos[i].title = action.title;
                    break;
                }
            }
            return {
                ...state, allTodos: [...state.allTodos]
            }
        }
        case DELETE_TODO: {
            return {...state, allTodos: state.allTodos.filter(todo => todo.id !== action.id)}
        }
        default: return state
    }
}
export const updateTodo = (id, title) => (dispatch) => {
    dispatch(updateTodoSuccess(id, title))
}
export const deleteTodo = (id) => (dispatch) => {
    dispatch(deleteTodoSuccess(id))
}
export const getTodos = () => async (dispatch) => {
        let data = await getTasks()
        dispatch(setTodos(data))
}
export const toggleComplete = (id) => (dispatch) => {
    dispatch(toggleCompleteSuccess(id))
}
export const deleteTodoSuccess = (id) => ({type: DELETE_TODO, id})
export const updateTodoSuccess = (id, title) => ({type: UPDATE_TODO, id, title})
export const toggleCompleteSuccess = (id) => ({type: TOGGLE_COMPLETE_SUCCESS, id})
export const addTodo = (title) => ({type: ADD_TODO, title})
export const setTodos = (todos) => ({type: SET_TODOS, todos})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})