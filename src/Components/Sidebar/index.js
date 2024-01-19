import './index.scss';

import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faDiagramProject, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (

    <div className='nav-bar'>
        <Link className="logo" to="/">
            <p class="_letterD_logo">D</p>
            <h2 className='sub-logo'>Dorisa</h2>
        </Link>
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>
        <ul>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/dorisa-shehi" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/dorisashehi" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar;
