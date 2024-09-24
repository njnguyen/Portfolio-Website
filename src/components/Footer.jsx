import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className="foot-container">
            <p className="foot-title">Let&#39;s chat!</p>
            <div className="foot-icons">
                <a href="mailto:nj.nguyen0205@gmail.com" target="_blank"><FiMail size={20} /></a>
                <a href="https://www.linkedin.com/in/njnguyen/" target="_blank"><FaLinkedinIn size={20} /></a>
                <a href="https://github.com/njnguyen" target="_blank"><FaGithub size={20} /></a>
            </div>
            <p className="copyright">Copyright &copy; 2024 Jackie Nguyen</p>
        </div>
    )
}

export default Footer;