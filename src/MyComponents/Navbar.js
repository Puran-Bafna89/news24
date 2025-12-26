import { NavLink } from 'react-router-dom';


export default function Navbar() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid d-flex">
                    <NavLink className="navbar-brand" style={{width: "25%"}} to="/">News24x7</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/general">General</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/health">Health</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Technology">Technology</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Science">Science</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Sports">Sports</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Business">Business</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
}
