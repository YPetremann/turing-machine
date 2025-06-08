import React from "react";
import { useFocus } from "./FocusContext"

type InsertProps = {
  children: React.ReactNode;
  text:string
};



export default function Insert({ children, text }) {
  const [active]=useFocus();
  const insertText = (text) => {
    if (!active) return;

    const textarea = active;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    const newValue = value.slice(0, start) + text + value.slice(end);
    textarea.value = newValue;

    const newPos = start + text.length;
    textarea.setSelectionRange(newPos, newPos);
    textarea.focus();

    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  };
  return <button type="button" onClick={()=>insertText(text)}>
    {children}
  </button>
};
