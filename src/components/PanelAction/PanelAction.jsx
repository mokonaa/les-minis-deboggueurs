import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function PanelAction() {

    const [showPopInQuestion,setShowPopInQuestion] = useState(false);
    const navigate = useNavigate();
    const navigateTo = (route) => {
        navigate(route);
    }

    const displayPopIn = () => {
        console.log('display pop in ');
        setShowPopInQuestion(true);
        console.log(showPopInQuestion);
    }

    return (
        <div className="panelActions">
            <div>
                {/* <div>Peut relancer un dé par tour</div> */}
                <button onClick={() => displayPopIn()}>Question Quizz</button>
                {/* <div>Acces après avoir débloquer la cave</div> */}
            </div>

            {showPopInQuestion &&
                <Modal setShowModal={setShowPopInQuestion}>
                    <p>CHOISSISEZ L'ANIMATEUR QUE VOUS SOUHAITEZ GUÉRIR</p>
                    <p>À noter que la question quizz n’est disponible que lors de la récupération d‘un point </p>

                    <div className="listAnimateurChoisis">
                        
                    </div>

                    <button>Super !</button>
                </Modal>
            }
        
        </div>
    )
}