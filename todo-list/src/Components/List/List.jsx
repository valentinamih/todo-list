import style from './List.module.css'
import {Item} from "./Item";
import {Paginator} from "../../common/Paginator";
import {Field, reduxForm} from "redux-form";
import {useState} from "react";
import addTodoPic from '../../assets/addTodo.png'
import deleteTodo from '../../assets/deleteTodo.png'
import submitAddTodo from '../../assets/submitAddTodo.png'
import {required} from "../../common/validator";
import {renderField} from "../../common/forms";

export const List = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [currentPage, setCurrentPage] = (useState(1))
    let [todosPerPage, setTodosPerPage] = useState(10)
    const lastTodoIndex = currentPage * todosPerPage
    const firstTodoIndex = lastTodoIndex - todosPerPage
    let currentTodos = props.todos.slice(firstTodoIndex, lastTodoIndex)
    let pagination = pageNumber => setCurrentPage(pageNumber)
    let todos = currentTodos.map(todo => <Item key={todo.id}
                                              title={todo.title}
                                              completed={todo.completed}
                                              toggleComplete={props.toggleComplete}
                                              id={todo.id}
                                              updateTodo={props.updateTodo}
                                              deleteTodo={props.deleteTodo}
    />)


    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
    }
    let addTodo = (values) => {
        props.addTodo(values.newTask)
        deactivateEditMode()
    }
    return <div className={style.list}>
        <div className={style.heading} >
            <span>Todos: </span>
            <img src={addTodoPic}
                 alt={'addTodo'}
                 onClick={activateEditMode}
                 className={style.icon}/>
            <div>
                {editMode ? <img src={deleteTodo}
                             className={style.icon}
                             onClick={() => setEditMode(false)}/> : null}
            </div>
        </div>
        {editMode ? <AddTaskReduxForm onSubmit={addTodo}/> : null}
        <div className={style.itemsContainer}>{todos} </div>
        <Paginator todosPerPage={todosPerPage}
                   todosCount={props.todos.length}
                   pagination={pagination}
                   currentPage={currentPage}
        />
        <div className={style.paginationOptions}>
            <p className={style.optionsHeading}>Show per: </p>
            <span onClick={() => setTodosPerPage(5)}>5 </span>
            <span onClick={() => setTodosPerPage(10)}>10 </span>
            <span onClick={() => setTodosPerPage(20)}>20</span>
        </div>
    </div>
}

export const AddTaskForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div >
            {props.error}
        </div>}
        <div className={style.addTaskForm}>
            <Field name="newTask"
                   component={renderField}
                   validate={[required]}
            />
            <img src={submitAddTodo} alt={'submit'} onClick={props.handleSubmit} className={style.icon}/>
        </div>
    </form>
}

const AddTaskReduxForm = reduxForm({
    form: 'newTask'
})(AddTaskForm)