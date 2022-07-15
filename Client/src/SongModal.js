import React from "react";

function SongModal({ closeModal, song }) {
    return (
        <div className="song">
            
            <button onClick={() => {
                closeModal(false)
            }}>X</button>
        </div>


    )
}

export default SongModal;