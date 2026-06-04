import React, { createContext } from 'react'

export const Theme = createContext()

function Themecontaxt({children}) {

const [theme, settheme] = useState("halka")
    

  return (
    <Theme.Provider value={{theme,settheme}}>
    {children}
    </Theme.Provider>
  )
}

export default Themecontaxt