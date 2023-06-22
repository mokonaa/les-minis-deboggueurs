import { useRef, useEffect } from 'react';

export default function Modal({ setShowModal, children }) {
    const modal = useRef();
    const overlay = useRef();

    const hideModal = () => {
        overlay.current.classList.add("modal-overlay--hidden");
        modal.current.classList.add("modal--hidden");
        setTimeout(() => {
            setShowModal(false)
        }, 550);
    }



    return (
        <>
            <div ref={overlay} onClick={hideModal} className="modal-overlay"></div>
            <div ref={modal} className="modal">
                <div onClick={hideModal} className="close-icon">
                    x
                </div>
                {children}
            </div>
        </>
    )
}