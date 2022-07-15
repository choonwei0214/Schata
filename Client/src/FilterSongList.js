const FilterSongList = ({ searchTitle, songs }) => {
    console.log(searchTitle)
    return (
        <div className="songlist">
            {songs.filter((song) => {
                if (searchTitle === "") {
                    return song
                }
                else if (song.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                    return song
                }
                return false;
            }).map((song) => (
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

export default FilterSongList;