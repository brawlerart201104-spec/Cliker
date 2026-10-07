import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  function plus() {
    setCount(count + 1);
    setClicks(clicks + 1);
  }

  function minus() {
    setCount(count - 1);
    setClicks(clicks + 1);
  }

  function reset() {
    setCount(0);
    setClicks(0);
  }

  function changeTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className="page">
      <div className={darkTheme ? "counter dark" : "counter"}>
        <div className="top">
          <div className="theme-name">
            Тема: {darkTheme ? "Тёмная" : "Светлая"}
          </div>

          <button className="theme-button" onClick={changeTheme}>
            {darkTheme ? "☀️ Светлая" : "🌙 Тёмная"}
          </button>
        </div>

        <div className="number">{count}</div>

        <div className="buttons">
          <button className="minus" onClick={minus}>
            −
          </button>

          <button className="plus" onClick={plus}>
            +
          </button>
        </div>

        <button className="reset" onClick={reset}>
          Reset
        </button>

        <div className="clicks">
          Нажатие кнопок: <b>{clicks}</b>
        </div>

        {/* Лимит от -10 до 10 */}
        {(count >= 10 || count <= -10) && (
          <div className="limit">⚠️ Лимит превышен!</div>
        )}
      </div>
    </div>
  );
}

export default App;
