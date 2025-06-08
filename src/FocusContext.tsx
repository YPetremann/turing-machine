import React from 'react'

const FocusContext = React.createContext()

export function FocusProvider({ children }) {
  const [active, setActive] = React.useState(null)
  const onFocus = (e) => {
    console.log('FocusContext onFocus', e)
    //setActive((s) => s === e ? s : e)
  }
  const onBlur = (e) => {
    console.log('FocusContext onBlur', e)
    //setActive((s) => s === e ? null : s)
  }
  return (
    <FocusContext.Provider value={[ active, onFocus, onBlur ]}>
      {children}
    </FocusContext.Provider>
  )
}

export function useFocus() {
  return React.useContext(FocusContext)
}