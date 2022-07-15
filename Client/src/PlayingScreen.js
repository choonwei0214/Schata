const PlayingScreen = () => {
    return (
        <div className="playing">
            <div className="playingsongimg">
                <img src="/Images/asitwas.png" alt="playingsong"></img>
            </div>
            <div className="playingsongname">
                <h4>As It Was</h4>
                <h5>Harry Styles</h5>
            </div>
            <div className="progressbar">
                <div className="progressbtn">
                    <i className="fa fa-circle-o" aria-hidden="true"></i>
                </div>
                <div className="progress-duration">
                    <span className="duration">
                        1:56
                    </span>
                    <span className="duration">
                        2:45
                    </span>
                </div>
            </div>
            <div className="playstop">
                <i className="fa fa-random gray" aria-hidden="true"></i>
                <i className="fa fa-step-backward" aria-hidden="true"></i>
                <i className="fa fa-play big" aria-hidden="true"></i>
                <i className="fa fa-step-forward" aria-hidden="true"></i>
                <i className="fa fa-repeat gray" aria-hidden="true"></i>
            </div>

        </div>
    );
}

export default PlayingScreen;