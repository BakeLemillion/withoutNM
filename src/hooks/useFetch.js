import { useState } from "react"

export default () => {
    const [isLogin, setLogin] = useState(false)

    if(email === 'admin@iot.kz' && pass === '12345') {
        setLogin(true)
    }

    const doFetch = () => {

    }

    return[{isLogin}]
}