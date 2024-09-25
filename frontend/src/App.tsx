import "./App.css";

import unmuted from "./assets/PhMicrophone.svg";
import mutedIcon from "./assets/PhMicrophoneSlash.svg";
import { useEffect, useState } from "react";
import Setting from "./components/Setting";
import { Shortcut } from "./types";

import {
  ToggleShortcut,
  CheckShortcuts,
  AppendShortcut,
  RemoveByID,
} from "../wailsjs/go/main/App";

function App() {
  const [muted, setMuted] = useState<Boolean>(false);
  const [showSettings, setShowSettings] = useState(false);
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);

  async function readShortCuts() {
    // const shortcuts = await ReadJson();
    // console.log(shortcuts);

    const shortcuts = await CheckShortcuts();

    setShortcuts(shortcuts);
  }
  // Disabled while trying to get friends to build for mac
  // useEffect(() => {
  //   readShortCuts();
  // }, []);
  useEffect(() => {
    console.log(shortcuts);
  }, [showSettings]);

  function toggleShortcut(shortcut: Shortcut) {
    ToggleShortcut(shortcut.keyValue, shortcut.ctrl, shortcut.shift);
  }

  return (
    <div id="app">
      <div id="menu">
        <div id="menu-left">
          <div
            id="settings-icon"
            onClick={() => {
              setShowSettings((prev) => !prev);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <g fill="#888888">
                <path
                  d="m207.86 123.18l16.78-21a99 99 0 0 0-10.07-24.29l-26.7-3a81 81 0 0 0-6.81-6.81l-3-26.71a99.4 99.4 0 0 0-24.3-10l-21 16.77a82 82 0 0 0-9.64 0l-21-16.78a99 99 0 0 0-24.21 10.07l-3 26.7a81 81 0 0 0-6.81 6.81l-26.71 3a99.4 99.4 0 0 0-10 24.3l16.77 21a82 82 0 0 0 0 9.64l-16.78 21a99 99 0 0 0 10.07 24.29l26.7 3a81 81 0 0 0 6.81 6.81l3 26.71a99.4 99.4 0 0 0 24.3 10l21-16.77a82 82 0 0 0 9.64 0l21 16.78a99 99 0 0 0 24.29-10.07l3-26.7a81 81 0 0 0 6.81-6.81l26.71-3a99.4 99.4 0 0 0 10-24.3l-16.77-21a82 82 0 0 0-.08-9.64M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40"
                  opacity=".2"
                />
                <path d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m88-29.84q.06-2.16 0-4.32l14.92-18.64a8 8 0 0 0 1.48-7.06a107.6 107.6 0 0 0-10.88-26.25a8 8 0 0 0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186 40.54a8 8 0 0 0-3.94-6a107.3 107.3 0 0 0-26.25-10.86a8 8 0 0 0-7.06 1.48L130.16 40h-4.32L107.2 25.11a8 8 0 0 0-7.06-1.48a107.6 107.6 0 0 0-26.25 10.88a8 8 0 0 0-3.93 6l-2.64 23.76q-1.56 1.49-3 3L40.54 70a8 8 0 0 0-6 3.94a107.7 107.7 0 0 0-10.87 26.25a8 8 0 0 0 1.49 7.06L40 125.84v4.32L25.11 148.8a8 8 0 0 0-1.48 7.06a107.6 107.6 0 0 0 10.88 26.25a8 8 0 0 0 6 3.93l23.72 2.64q1.49 1.56 3 3L70 215.46a8 8 0 0 0 3.94 6a107.7 107.7 0 0 0 26.25 10.87a8 8 0 0 0 7.06-1.49L125.84 216q2.16.06 4.32 0l18.64 14.92a8 8 0 0 0 7.06 1.48a107.2 107.2 0 0 0 26.25-10.88a8 8 0 0 0 3.93-6l2.64-23.72q1.56-1.48 3-3l23.78-2.8a8 8 0 0 0 6-3.94a107.7 107.7 0 0 0 10.87-26.25a8 8 0 0 0-1.49-7.06Zm-16.1-6.5a74 74 0 0 1 0 8.68a8 8 0 0 0 1.74 5.48l14.19 17.73a91.6 91.6 0 0 1-6.23 15l-22.6 2.56a8 8 0 0 0-5.1 2.64a74 74 0 0 1-6.14 6.14a8 8 0 0 0-2.64 5.1l-2.51 22.58a91.3 91.3 0 0 1-15 6.23l-17.74-14.19a8 8 0 0 0-5-1.75h-.48a74 74 0 0 1-8.68 0a8.06 8.06 0 0 0-5.48 1.74l-17.78 14.2a91.6 91.6 0 0 1-15-6.23L82.89 187a8 8 0 0 0-2.64-5.1a74 74 0 0 1-6.14-6.14a8 8 0 0 0-5.1-2.64l-22.58-2.52a91.3 91.3 0 0 1-6.23-15l14.19-17.74a8 8 0 0 0 1.74-5.48a74 74 0 0 1 0-8.68a8 8 0 0 0-1.74-5.48L40.2 100.45a91.6 91.6 0 0 1 6.23-15L69 82.89a8 8 0 0 0 5.1-2.64a74 74 0 0 1 6.14-6.14A8 8 0 0 0 82.89 69l2.51-22.57a91.3 91.3 0 0 1 15-6.23l17.74 14.19a8 8 0 0 0 5.48 1.74a74 74 0 0 1 8.68 0a8.06 8.06 0 0 0 5.48-1.74l17.77-14.19a91.6 91.6 0 0 1 15 6.23L173.11 69a8 8 0 0 0 2.64 5.1a74 74 0 0 1 6.14 6.14a8 8 0 0 0 5.1 2.64l22.58 2.51a91.3 91.3 0 0 1 6.23 15l-14.19 17.74a8 8 0 0 0-1.74 5.53Z" />
              </g>
            </svg>
          </div>
        </div>
        <div id="menu-right">Right</div>
      </div>
      <div id="shortcut-bar">
        {shortcuts.map((shortcut) => (
          <button onClick={() => toggleShortcut(shortcut)} key={shortcut.id}>
            {shortcut.id}
          </button>
        ))}
      </div>
      <button onClick={() => AppendShortcut()}>Append</button>
      <button
        onClick={async () => {
          const shortcuts = await RemoveByID(2);
          console.log(shortcuts);
        }}
      >
        Remove ID 2
      </button>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {showSettings && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "5px",
            }}
          >
            <span>Settings</span>
            <button
              onClick={() => {
                const shortcut: Shortcut = {
                  id: shortcuts.length + 1,
                  keyValue: "",
                  ctrl: true,
                  shift: true,
                };

                setShortcuts([...shortcuts, shortcut]);
              }}
            >
              Add Shortcut
            </button>
          </div>
        )}
      </div>
      <div>
        {showSettings &&
          shortcuts.length > 0 &&
          shortcuts.map((shortcut) => (
            <Setting
              key={shortcut.id}
              id={shortcut.id}
              keyValue={shortcut.keyValue}
              shortcut={shortcut}
              shortcuts={shortcuts}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
