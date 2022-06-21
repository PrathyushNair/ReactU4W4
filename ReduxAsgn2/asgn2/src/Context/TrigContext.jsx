import React from "react"
export const TrigContext=React.createContext()
export const TrigProvider=({children})=>{
    let [trig,setTrig]=React.useState(false)
    return (<TrigContext.Provider value={{trig,setTrig}}>{children}</TrigContext.Provider>)
}