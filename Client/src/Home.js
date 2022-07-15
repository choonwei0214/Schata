import { useEffect, useState } from "react";
import SongList from "./SongList";

const Home = () => {

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
            <div className="menu">
                <button className="backbtn"><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <div className="signuplogin"><button className="signup">Sign up</button>
                    <button type="button" className="loginbtn">Log in</button>
                </div>
            </div>
            <div className="section"><h2>Popular</h2><div className="viewall">View All</div></div>
            <div className="scrolling-cards">
                {dataSongs && <SongList songs={dataSongs} />}
            </div>
            <div className="section"><h2>New Releases</h2><div className="viewall">View All</div></div>
            <div className="scrolling-cards">
                {dataSongs && <SongList songs={dataSongs} />}
            </div>
            <div className="section"><h2>Recommendations</h2><div className="viewall">View All</div></div>
            <div className="scrolling-cards">
                {dataSongs && <SongList songs={dataSongs} />}
            </div>
            <div className="section"><h2>Best Songs</h2><div className="viewall">View All</div></div>
            <div className="scrolling-cards">
                {dataSongs && <SongList songs={dataSongs} />}
            </div>

        </div>

    );
}

export default Home;