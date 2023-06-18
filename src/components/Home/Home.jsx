import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(route);
    }

    return (
        <div id="">
            <div className='accueilBtns'>
                <button  onClick={() => navigateTo("/partie")} >Commencer une partie</button>
                <button  onClick={() => navigateTo("/quizzs")} >Carte Quizz</button>
                <button onClick={() => navigateTo("/galerie")} >Galerie</button>
            </div>
        </div>
    )
}