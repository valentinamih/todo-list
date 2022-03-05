import React from "react";
import {connect} from "react-redux";
import {
    addTodo,
    deleteTodo,
    getTodos,
    setCurrentPage,
    setUserId,
    toggleComplete,
    updateTodo
} from "../../redux/todo-reducer";
import {List} from "./List";
import style from './List.module.css'



class ListContainer extends React.Component {
    componentDidMount() {
        this.props.getTodos()
    }
    onPageChanged = () => {
        this.props.getTodos()
    }
    render() {
        return <div className={style.listWrapper}>
            <List todos={this.props.todos}
                  pageSize={this.props.pageSize}
                  totalTodosCount={this.props.totalTodosCount}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  addTodo={this.props.addTodo}
                  setCurrentPage={this.props.setCurrentPage}
                  toggleComplete={this.props.toggleComplete}
                  updateTodo={this.props.updateTodo}
                  deleteTodo={this.props.deleteTodo}
                  setUserId={this.props.setUserId}
                  availableUserIds={this.props.availableUserIds}
                  getTodos={this.props.getTodos}
            />
        </div>

    }
}
let mapStateToProps = (state) => {
    return {
        todos: state.todo.allTodos,
        pageSize: state.todo.pageSize,
        totalTodosCount: state.todo.totalTodosCount,
        currentPage: state.todo.currentPage,
        availableUserIds: state.todo.availableUserIds
    }
}
export default connect(mapStateToProps, {
    setCurrentPage,
    getTodos,
    addTodo,
    toggleComplete,
    updateTodo,
    deleteTodo,
    setUserId
})(ListContainer);