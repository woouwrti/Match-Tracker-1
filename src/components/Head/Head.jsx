import ReloadButton from "../ReloadButton/ReloadButton";
import MatchTracker from "../../assets/MatchTracker";
import Alert from "../../assets/Alert";

import "./Head.css";

const Head = ({ isLoading, error, refetch }) => {
  const handleClick = () => {
    refetch();
  };

  return (
    <div className="HeadBox">
      <div>
        <MatchTracker />
      </div>
      <div className="ReloadBox">
        {error && (
          <div className="ErrorBox">
            <Alert />
            <p className="ErrorText">Ошибка: не удалось загрузить информацию</p>
          </div>
        )}
        <ReloadButton isLoading={isLoading} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Head;
