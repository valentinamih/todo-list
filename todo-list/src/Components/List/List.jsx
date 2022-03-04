import style from './List.module.css'
import {Item} from "./Item";
import {Paginator} from "../../common/Paginator";
import {Field, reduxForm} from "redux-form";
import {useState} from "react";
import addTodoPic from '../../assets/addTodo.png'
import {required} from "../../common/validator";
import {renderField} from "../../common/forms";

export const List = (props) => {
    let [editMode, setEditMode] = useState(false)
    let todos = props.todos.map(todo => <Item key={todo.id}
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
            <span >Todos: </span>
            <img src={addTodoPic} alt={'addTodo'} onClick={activateEditMode}/>
        </div>
        {editMode ? <AddTaskReduxForm onSubmit={addTodo}/> : null}
        <div className={style.itemsContainer}>{todos} </div>
        <Paginator currentPage={props.currentPage}
                   totalTodosCount={props.totalTodosCount}
                   pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged}
                   setCurrentPage={props.setCurrentPage}
        />
    </div>
}

export const AddTaskForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {props.error && <div >
            {props.error}
        </div>}
        <div className={style.addPostForm}>
            <Field name="newTask"
                   component={renderField} label="Your todo"
                   validate={[required]}
            />
            <button className={style.button}>Add new task</button>
        </div>
    </form>
}

const AddTaskReduxForm = reduxForm({
    form: 'newTask'
})(AddTaskForm)