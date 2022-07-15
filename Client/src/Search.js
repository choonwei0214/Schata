import { useState, useEffect } from "react";
import FilterSongList from "./FilterSongList";

const Search = () => {

    const [searchTitle, setsearchTitle] = useState("")
    const [dataSongs, setDataSongs] = useState()

    useEffect(() => {
        fetch(`/songs`).then(
            response => response.json()
        ).then(
            data => {
                setDataSongs(data)
            }
        )
    }, [])

    return (
        <div className="search">
            <form>
                <input className="searchBox" type="text" placeholder="Songs, artists or albums" onChange={(e) => setsearchTitle(e.target.value)}></input>
            </form>
            <div className="scrolling-cards">
                {dataSongs && <FilterSongList searchTitle={searchTitle} songs={dataSongs} />}
            </div>
        </div>
    );
}

export default Search;