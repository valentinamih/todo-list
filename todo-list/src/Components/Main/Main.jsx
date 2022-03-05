import style from './Main.module.css'
import logo from '../../assets/logo.png'

export const Main = (props) => {
    return <div className={style.main}>
        <h1>ToDo</h1>
        <main>
            <img src={logo} alt={'logo'} className={style.logo}/>
            <section>
                In this application you can create, update and delete tasks. Technologies used: React, redux, react-router, redux-form, react-router-dom.
                For code visit <a href={'https://github.com/valentinamih/todo-list'}>my github :)</a>
            </section>
        </main>
    </div>
}