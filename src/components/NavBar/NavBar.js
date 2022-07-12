// UpperCamelCase
import './NavBar.scss'

const NavBar = () => {
    return(
        // Fragment
        <div className='navbar-primary'>
            <h1>Logo</h1>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>About Us</button></li>
                <li><button>Contacto</button></li>
            </ul>
        </div>
    )
}

export default NavBar