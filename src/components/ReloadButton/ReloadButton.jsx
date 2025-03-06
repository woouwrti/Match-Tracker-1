import "./ReloadButton.css";
import Spinner from "../../assets/Spinner";

const ReloadButton = ({ isLoading, handleClick }) => {
  return (
    <button disabled={isLoading} onClick={handleClick} className="ReloadButton">
      Обновить
      <div className={`Icon${isLoading ? " Icon-spin" : ""}`}>
        <Spinner />
      </div>
    </button>
  );
};

export default ReloadButton;
