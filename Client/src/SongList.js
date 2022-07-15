import SongModal from "./SongModal";
import { useState, useEffect } from "react";

const SongList = ({ songs }) => {

    const [openModal, setOpenModal] = useState(false);
    const [dataSong, setDataSong] = useState();

    useEffect(() => {
        fetch("/song/:id").then(
            response => response.json()
        ).then(
            data => {
                setDataSong(data)
            }
        )
    }, [])

    return (
        <div className="songlist">
            {songs.map((song) => (
                <div className="songscard" key={song.id}>
                    <div className="card-img">
                        <img src={song.image} alt="song"></img>
                    </div>
                    <button className="playBtn" id={`${song.id}`} onClick={(e) => { 
                        setOpenModal(true);
                     }}><i className="fa fa-play" aria-hidden="true"></i></button>
                    <h3>{song.title}</h3>
                    <h5>{song.author}</h5>
                </div>
            ))}
            {openModal && <SongModal closeModal={setOpenModal} song={dataSong}/>}
        </div>
    );
}

export default SongList;