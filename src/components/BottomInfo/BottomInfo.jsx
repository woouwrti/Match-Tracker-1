import playerLogo from "../../images/avatar_global.png";

import "./BottomInfo.css";

const BottomInfo = ({ players, points, place, total_kills }) => {
  return (
    <div className="BottomInfo">
      <div className="PlayersInfo">
        {players.map((player) => (
          <div className="PlayerInfo">
            <div className="PlayerBox">
              <img className="PlayerLogo" src={playerLogo} alt="Player" />
              <h4 className="TeamInfoCommonText">{player.username}</h4>
            </div>
            <p className="TeamInfoCommonText">
              <span className="TeamInfoCommonTextDark">Убийств: </span>
              {player.kills}
            </p>
          </div>
        ))}
      </div>
      <div className="TeamInfo">
        <p className="TeamInfoCommonText">
          <span className="TeamInfoCommonTextDark">Points: </span>
          {points}
        </p>
        <p className="TeamInfoCommonText">
          <span className="TeamInfoCommonTextDark">Место: </span>
          {place}
        </p>
        <p className="TeamInfoCommonText">
          <span className="TeamInfoCommonTextDark">Всего убийств: </span>
          {total_kills}
        </p>
      </div>
    </div>
  );
};

export default BottomInfo;
