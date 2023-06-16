import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    const navigateTo = (route) => {
        console.log('navigate to');
        navigate(route);
    }

    return (
        <>
            <div>
                Home
                <button  onClick={() => navigateTo("/partie")} >Commencer une partie</button>
                <button  onClick={() => navigateTo("/quizzs")} >Carte Quizz</button>
                <button onClick={() => navigateTo("/galerie")} >Galerie</button>
            </div>
        </>
    )
}