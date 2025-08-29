import "./css/PageSearch.css";
import traduction from "./traduction";
import idPage from "./idPage";
export default function PageSearch({language, handleChange,hashGame,changePage}) {
  return (
    <div className="mainTab pageSearch">
      <h2>{traduction[language].SEARCH}</h2>
      <p>{traduction[language].INPUTGAMECODE}</p>
      <input
        type="text"
        className="bigInput"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        type="button"
        className="fullgreen"
        onClick={() => hashGame()}
      >
        {traduction[language].LOAD}
      </button>
      <div className="footer">
        <button
          className="backlink"
          type="submit"
          onClick={() => changePage(idPage.P_MAIN)}
        >
          {traduction[language].BACKHOME}
        </button>
      </div>
    </div>
  );
}
