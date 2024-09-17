import "./App.css";
import { ToggleMute } from "../wailsjs/go/main/App";
import unmuted from "./assets/PhMicrophone.svg";
import mutedIcon from "./assets/PhMicrophoneSlash.svg";
import { useState } from "react";

function App() {
  const [muted, setMuted] = useState<Boolean>(false);
  function toggleMute() {
    ToggleMute();
    setMuted((prev) => !prev);
  }

  return (
    <div id="app">
      <div onClick={toggleMute} className="mute-btn">
        {!muted && (
          <img
            src={unmuted}
            alt="mute icon"
            width="32"
            height="32"
            className="mute-icon"
          />
        )}
        {muted && (
          <img
            src={mutedIcon}
            alt="mute icon"
            width="32"
            height="32"
            className="mute-icon"
          />
        )}
      </div>
    </div>
  );
}

export default App;
