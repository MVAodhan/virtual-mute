import { useRef } from "react";
import { Shortcut } from "../types";
const Setting = ({
  id,
  keyValue,
  shortcut,
  shortcuts,
  setShortcuts,
}: {
  id: string;
  keyValue: string;
  shortcut: Shortcut;
  shortcuts: Shortcut[];
  setShortcuts: any;
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

  const remove = () => {
    const index = shortcuts.findIndex((shortcut) => shortcut.id === id);

    shortcuts.splice(index, 1);

    console.log(shortcuts);
    setShortcuts(shortcuts);
  };

  return (
    <>
      <div id="shortcut-option">
        <div className="w-1/2 flex items-end">
          <input
            ref={keyRef}
            defaultValue={keyValue}
            style={{ width: "20px" }}
            className="bg-transparent text-center"
          />
          <input
            ref={ctrlRef}
            type="checkbox"
            defaultChecked={shortcut.ctrl}
            style={{ width: "20px" }}
          />
          <input
            ref={shiftRef}
            type="checkbox"
            defaultChecked={shortcut.shift}
            style={{ width: "20px" }}
          />
        </div>
        <div className="w-1/2 flex justify-around">
          <div onClick={save} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="#888888"
                d="m229.66 77.66l-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69L218.34 66.34a8 8 0 0 1 11.32 11.32"
              />
            </svg>
          </div>
          <div className="cursor-pointer" onClick={remove}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 256"
            >
              <path
                fill="#888888"
                d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
