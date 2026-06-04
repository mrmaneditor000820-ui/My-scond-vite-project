import React, { useContext } from 'react'

export const Theme = useContext()

function Themecontaxt({children}) {

const [theme, settheme] = useState("halka")
    

  return (
    <Theme.Provider value={{theme,settheme}}>
    {children}
    </Theme.Provider>
  )
}

export default Themecontaxt