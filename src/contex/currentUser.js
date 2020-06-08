import React from 'react'
import {createContext, useState} from 'react'

const CurrentUserContext = createContext([{}, ()=>{}])

const CurrentUserProvider = ({children}) => {

    const [ state, setState] = useState({
        isLogin: false,
    }) 

    return  (
            <CurrentUserContext.Provider value={[state, setState]}>
                {children}
            </CurrentUserContext.Provider>
    )
}

export {CurrentUserContext, CurrentUserProvider}
