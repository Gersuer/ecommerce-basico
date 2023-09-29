import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
    return (
        <div className={styles.container} >
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout