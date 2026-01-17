import './Navbar.css'
const Navbar = () => {
    
    return (
        <nav className="nav-container">
            <div className="logo">
                Tegabyte
            </div>
            <ul className="link-container">
                <li><a href="/" className="link">Home</a></li>
                <li><a href="/about" className="link">About</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;