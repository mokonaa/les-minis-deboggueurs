import { useNavigate } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import logoNav from '../../assets/img/logo-nav.svg';

export default function Nav() {
    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(route);
    }
    return (
        <nav>
            <img src={logoNav} />
            <Menu right>
                <a  onClick={() => navigateTo("/")} >Accueil</a>
                <a  onClick={() => navigateTo("/partie")} >Commencer une partie</a>
                <a  onClick={() => navigateTo("/quizzs")} >Carte Quizz</a>
                <a onClick={() => navigateTo("/galerie")} >Galerie</a>
            </Menu>
        </nav>
    )
}