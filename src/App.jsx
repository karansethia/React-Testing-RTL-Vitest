import {useState} from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label htmlFor="disable-btn">Disable Button</label>
      <input
        type="checkbox"
        name="disable button"
        id="disable-btn"
        value={checked}
        onChange={(e) => {
          if (e.target.checked) {
            setChecked(true);
          } else {
            if (!e.target.checked) {
              setChecked(false);
            }
          }
        }}
      />
      <button
        className={buttonColor}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
