import style from './Header.module.css'
import logo from '../../assets/logo.png'

export const Header = (props) => {
    return <div className={style.header}>
        <img src={logo} className={style.logo} alt={'logo'} />
        Todo list
    </div>
}