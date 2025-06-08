import type React from "react";
import { memo } from "react";
import { useFocus } from "./FocusContext";

interface Props {
  children: React.ReactNode;
  text: string;
}

export const Insert = memo(({ children, text }: Props) => {
  const [active] = useFocus();
  const insertText = (text: string) => {
    if (!active) return;
    console.info(text);
    /*
    const textarea = active;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    const newValue = value.slice(0, start) + text + value.slice(end);
    textarea.value = newValue;

    const newPos = start + text.length;
    textarea.setSelectionRange(newPos, newPos);
    textarea.focus();
    */
  };
  return (
    <button type="button" onClick={() => insertText(text)}>
      {children}
    </button>
  );
});
