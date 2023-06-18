
export default function Menu() {
    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(route);
    }

    return (
        <div>
            <div>
                <button  onClick={() => navigateTo("/partie")} >Commencer une partie</button>
                <button  onClick={() => navigateTo("/quizzs")} >Carte Quizz</button>
                <button onClick={() => navigateTo("/galerie")} >Galerie</button>
            </div>
        </div>
    )
}