const SongList = ( {songs} ) => {
    return (
        <div className="songlist">
            {songs.map((song) => (
                    <div className="songscard" key={song.id}>
                        <div className="card-img">
                            <img src={song.image} alt="song"></img>
                        </div>
                        <button className="playBtn"><i className="fa fa-play" aria-hidden="true"></i></button>
                        <h3>{song.title}</h3>
                        <h5>{song.author}</h5>
                    </div>
                ))}
        </div>
    );
}
 
export default SongList;