import React, { useContext } from 'react'

export const Theme = useContext()

function Themecontaxt({children}) {

const [first, setfirst] = useState(second)
    

  return (
    <Theme.Provider >
    {children}
    </Theme.Provider>
  )
}

export default Themecontaxt