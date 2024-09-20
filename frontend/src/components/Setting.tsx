import { useRef } from "react";
import { Shortcut } from "../types";
const Setting = ({
  id,
  keyValue,
  args,
  shortcut,
  shortcuts,
}: {
  id: number;
  keyValue: string;
  args: string[];
  shortcut: Shortcut;
  shortcuts: Shortcut[];
}) => {
  const keyRef = useRef<HTMLInputElement | null>(null);
  const argOne = useRef<HTMLInputElement | null>(null);
  const argTwo = useRef<HTMLInputElement | null>(null);

  const edit = () => {
    const index = shortcuts.findIndex((shortcut) => shortcut.id === id);
    const item = shortcuts[index];
    item.keyValue = keyRef.current?.value;
    if (argOne.current?.value) {
      item.args.push(argOne.current?.value);
    }
    if (argTwo.current?.value) {
      item.args.push(argTwo.current?.value);
    }
  };
  return (
    <>
      <div>
        <div id="inputs">
          <input ref={keyRef} defaultValue={keyValue} />
          <input ref={argOne} defaultValue={args[0]} />
          <input ref={argTwo} defaultValue={args[1]} />
          <button onClick={edit}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Setting;
