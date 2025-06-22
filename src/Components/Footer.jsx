import './footer.css';
import footerContact from "../api/footerapi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from 'react-router';

function Footer() {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <footer className="footer-section">
            <div className="container grid-three-cols">
                {footerContact.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">{footerIcon[icon]}</div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="bottom-footer">
                <div className="copyright">
                    <h4>Copyright &copy; 2025, All Right Reserved <a href='#'>DEEPU</a></h4>
                </div>

                <div className="footer-navigation">
                    <NavLink to="/"><h1>Home</h1></NavLink>
                    <NavLink to="/about"><h1>About</h1></NavLink>
                    <NavLink to="/"><h1>Social</h1></NavLink>
                    <NavLink to="/contact"><h1>Contact</h1></NavLink>
                </div>
            </div>
        </footer>
    );
}

export default Footer;