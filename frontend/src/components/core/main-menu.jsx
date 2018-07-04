import Link from 'next/link'
import {ART_PAGE, MAIN_PAGE, NATIVE_PAGE, SETS_PAGE} from '../../messages/core'
import LoginLogoutButton from '../core/menu-components/login-logout-button'
// import SearchIcon from '../../static/img/64/search-icon.png'
import styles from '../../../res/styles/navigation.scss'
import searchStyles from '../../../res/styles/search-post.scss'

const DesktopMenu = () => (
    <div>
        <style jsx>{styles}</style>
        <style jsx>{searchStyles}</style>
        <ul className="navigation">
            <li>
                <Link href='/'><a>Zoo</a></Link>
            </li>
            <li>
                <Link href='/native'><a>Vega Demos</a></Link>
            </li>
            <li>
                <Link href='/sets'><a>D3 Demos</a></Link>
            </li>
            <li>
            </li>
            {/*<LoginLogoutButton/>*/}
        </ul>
    </div>
);

export default DesktopMenu;
