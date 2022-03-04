import style from './List.module.css'
import done from '../../assets/done.png'
import todo from '../../assets/todo.png'
import {useState} from "react";
import {Field, reduxForm} from "redux-form";
import deleteTodoPic from '../../assets/deleteTodo.png'
import editTodo from '../../assets/editTodo.png'
import {required} from '../../common/validator'
import {renderField} from "../../common/forms";

export const Item  =  (props) => {
    let [editMode, setEditMode] = useState(false)
    let onSubmit = (formData) => {
        props.updateTodo(props.id, formData.updateTask)
        setEditMode(false)
    }
    let deleteTodo = (id) => {
        props.deleteTodo(id)
    }
    return (
            <div className={style.item}>
            <img src={props.completed ? done : todo} onClick={() => {props.toggleComplete(props.id)}} className={style.checkbox} alt={'checkbox'}/>
                {editMode ? <UpdateTaskReduxForm onSubmit={onSubmit} title={props.title}/> :
                    <div className={style.itemTitle}>
                        <span> {props.title} </span>
                        <img src={editTodo} onClick={() => {setEditMode(true)}} alt={'editTodo'} className={style.todoIcons}/>
                        <img src={deleteTodoPic} onClick={() => {deleteTodo(props.id)}} alt={'deleteTodo'} className={style.todoIcons}/>
                    </div>}
            </div>
        )
}
export const UpdateTaskForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.updateTaskForm}>
            <Field name="updateTask"
                   component={renderField}
                   validate={[required]}
                   placeholder={props.title}
            />
            <button className={style.button}>Update task</button>
        </div>
    </form>
}

const UpdateTaskReduxForm = reduxForm({
    form: 'updateTask'
})(UpdateTaskForm)