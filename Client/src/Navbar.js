import { NavLink } from 'react-router-dom';
import PlayingScreen from './PlayingScreen';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>SCHATA<span className="crlogo">©</span></h1>
            <div className="links">
                <span>Menu</span>
                <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "white" : "#9CA3AF" })}><i className="fa fa-home" aria-hidden="true"></i> Home</NavLink>
                <NavLink to="/search" style={({ isActive }) => ({ color: isActive ? "white" : "#9CA3AF" })}><i className="fa fa-search" aria-hidden="true"></i> Search</NavLink>
                <NavLink to="/browse" style={({ isActive }) => ({ color: isActive ? "white" : "#9CA3AF" })}><i className="fa fa-align-justify" aria-hidden="true"></i> Browse</NavLink>
                <span>My library</span>
                <NavLink to="/a" style={({ isActive }) => ({ color: isActive ? "white" : "#9CA3AF" })}><i className="fa fa-history" aria-hidden="true"></i> Recently Played</NavLink>
                <NavLink to="/b" style={({ isActive }) => ({ color: isActive ? "white" : "#9CA3AF" })}><i className="fa fa-heart" aria-hidden="true"></i> Liked Songs</NavLink>
                <NavLink to="/c" style={({ isActive }) => ({ color: isActive ? "white" : "#9CA3AF" })}><i className="fa fa-music" aria-hidden="true"></i> My Playlists</NavLink>
            </div>
            <div>
                <PlayingScreen />
            </div>
        </nav>
    );
}

export default Navbar;