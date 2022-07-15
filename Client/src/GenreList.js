const GenreList = ({ songs }) => {

    var genres = songs.map(function (e) { return e.genre; });
    var genreList = [...new Set(genres.join().split(','))];
    const colorList = ['#5BC1D7', '#56C271', '#D2D755', '#F0B323', '#FF8A3D', '#E40046', '#C137A2', '#694ED6', '#d4142a', '#e8600a', '#06b66c', '#009bcb', '#2b3cbb', '#5a5e9a', '#b80979']
    return (
        <div className="genrelist">
            {genreList.map((genre) => (
            <div className="genrecard" key={genre} style={{backgroundColor: colorList[Math.floor(Math.random() * colorList.length)]}}>
                <h5>{genre}</h5>
            </div>
            ))}
        </div>
    );
}

export default GenreList;