import GenreList from "./GenreList";
import { useState, useEffect } from "react";
const Browse = () => {

    const [dataSongs, setDataSongs] = useState()

    useEffect(() => {
        fetch("/songs").then(
            response => response.json()
        ).then(
            data => {
                setDataSongs(data)
            }
        )
    }, [])

    return ( 
        <div>
            <h2>Browse all genre</h2>
            <div className="scrolling-cards">
                {dataSongs && <GenreList songs={dataSongs} />}
            </div>
        </div>
     );
}
 
export default Browse;