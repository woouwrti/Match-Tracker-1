import { useState } from "react";
import BottomInfo from "../BottomInfo/BottomInfo";
import TeamIcon from "../../assets/TeamIcon";
import Arrow from "../../assets/Arrow";

import "./MatchCard.css";

import getMatchStatus from "./getMatchStatus";

const MatchCard = ({ match }) => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDropClick = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div className={`MainBox${isDropped ? " MainBox-dropped" : ""}`}>
      <div className="TopBox">
        <div className="TopInfo">
          <div className="TeamBoxRight">
            <div className="TeamIconBox">
              <TeamIcon />
            </div>
            <h3 className="CommandText">{match.homeTeam.name}</h3>
          </div>
          <div className="ScoreBox">
            <p className="ScoreText">
              {match.homeScore} : {match.awayScore}
            </p>
            <div className={`MatchStatusBox MatchStatusBox${match.status}`}>
              <p className="StatusText">{getMatchStatus(match.status)}</p>
            </div>
          </div>
          <div className="TeamBoxLeft">
            <h3 className="CommandText">{match.awayTeam.name}</h3>
            <div className="TeamIconBox">
              <TeamIcon />
            </div>
          </div>
        </div>
        <button
          onClick={handleDropClick}
          className={`DropdownButton${
            isDropped ? " DropdownButton-dropped" : ""
          }`}
        >
          <div className="DropdownButtonImg">
            <Arrow />
          </div>
        </button>
      </div>
      <div className={`BottomBox${isDropped ? " BottomBox-dropped" : ""}`}>
        <BottomInfo
          players={match.homeTeam.players}
          points={match.homeTeam.points}
          place={match.homeTeam.place}
          total_kills={match.homeTeam.total_kills}
        />
        <BottomInfo
          players={match.awayTeam.players}
          points={match.awayTeam.points}
          place={match.awayTeam.place}
          total_kills={match.awayTeam.total_kills}
        />
      </div>
    </div>
  );
};

export default MatchCard;
