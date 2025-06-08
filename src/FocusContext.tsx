import React from "react";

const nop = () => {
  /*nop*/
};

const FocusContext = React.createContext<
  [string | null, (name: string) => void, (name: string) => void]
>([null, nop, nop]);

interface Props {
  children: React.ReactNode;
}
export function FocusProvider({ children }: Props) {
  const [active, setActive] = React.useState<string | null>(null);
  const onFocus = (name: string) => setActive(name);
  const onBlur = (name: string) =>
    setActive((prev) => (prev === name ? null : prev));

  return (
    <FocusContext.Provider value={[active, onFocus, onBlur]}>
      {children}
    </FocusContext.Provider>
  );
}

export function useFocus() {
  return React.useContext(FocusContext);
}
