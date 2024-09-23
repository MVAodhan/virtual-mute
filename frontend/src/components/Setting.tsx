import { useRef } from "react";
import { Shortcut } from "../types";
const Setting = ({
  id,
  keyValue,
  shortcut,
  shortcuts,
}: {
  id: number;
  keyValue: string;

  shortcut: Shortcut;
  shortcuts: Shortcut[];
}) => {
  const keyRef = useRef<HTMLInputElement | null>(null);
  const ctrlRef = useRef<HTMLInputElement | null>(null);
  const shiftRef = useRef<HTMLInputElement | null>(null);

  const save = () => {
    const index = shortcuts.findIndex((shortcut) => shortcut.id === id);
    const item = shortcuts[index];

    item.keyValue = keyRef.current?.value as string;

    if (ctrlRef.current?.value) {
      item.ctrl = ctrlRef.current.checked;
    }
    if (shiftRef.current?.value) {
      item.shift = shiftRef.current.checked;
    }
  };

  function log() {
    console.log(keyRef.current?.value);
    console.log(ctrlRef.current?.checked);
    console.log(shiftRef.current?.checked);
  }
  return (
    <>
      <div>
        <div id="inputs">
          <input ref={keyRef} defaultValue={keyValue} />
          <input ref={ctrlRef} type="checkbox" defaultChecked={shortcut.ctrl} />
          <input
            ref={shiftRef}
            type="checkbox"
            defaultChecked={shortcut.shift}
          />
          <button onClick={save}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Setting;
