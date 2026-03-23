import {Link} from 'react-router';
// import './Navbar.css';

const NavBar = () => {
    return (
        <nav style={styles.nav}>
            <Link style={styles.link} to ="/home">Home</Link>
            <Link style={styles.link} to ="/signup">Signup</Link>
            <Link style={styles.link} to ="/success">Success</Link>
            <Link style={styles.link} to ="/profile">Profile</Link>
    
        </nav>
    );
}

const styles = {
  nav: {
    padding: "15px",
    background: "#333",
    display: "flex",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};
export default NavBar