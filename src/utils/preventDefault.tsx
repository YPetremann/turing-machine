import type React from "react";

export function preventDefault<E extends React.BaseSyntheticEvent, R>(
  fn: (e: E) => R,
): (e: E) => R {
  return (e: E) => {
    e.preventDefault();
    return fn(e);
  };
}
