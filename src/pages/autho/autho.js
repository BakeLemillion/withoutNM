import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import userIcon from './img/user-icon.svg'
import lock from './img/lock.svg'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './autho.css'

import {CurrentUserContext} from '../../contex/currentUser.js'

const Authoriz = () => {

    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [submit, setSubmit] = useState(false)

    const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)

    const [open, setOpen] = useState(false);

    console.log(currentUserState.isLogin)

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault()
        if(email === 'admin@iot.kz' && password === '12345') {
            setSubmit(true)
        } else {
            handleClick()
        }
    }

    const wayToMain = () => {
       history.push("/");
    }

    const handleClick = () => {
        setOpen(true);
      };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

    useEffect(()=> {
        if(!submit) {
            return
        }
        wayToMain()
        setCurrentUserState(state => ({
            ...state,
            isLogin: true,
        }))
    }, [submit])

    return(
        <div className='authoriz'>
            <form className="authorize_form" onSubmit={handleSubmit}>
                <h2 className="autho-h2">Вход</h2>

                <div className="autho_input-row-box">
                    <div className="autho_input-col">
                        <p className="autho_input-col-p"></p>
                        <img src={userIcon} alt="user-icon" className="autho_input-col-img"/>
                    </div>

                    <div className="autho_input-col">
                        <p className="autho_input-col-p">Email или номер телефона</p>
                        <input  type="email" placeholder=""
                                className="autho_input-col-inp" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}  />
                    </div>
                </div>

                <div className="autho_input-row-box">
                    <div className="autho_input-col">
                        <p className="autho_input-col-p"></p>
                        <img src={lock} alt="user-icon" className="autho_input-col-img"/>
                    </div>

                    <div className="autho_input-col">
                        <p className="autho_input-col-p">Пароль</p>
                        <input  type="password" placeholder=""
                                className="autho_input-col-inp" 
                                value={password} 
                                onChange={e => setPass(e.target.value)}  />
                    </div>
                </div>

                <button className="autho_btn" >Вход</button>
                <p className="autho_forgot">Забыли пароль?</p>

            </form>

            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Логин или пароль введен не правльно !"
                action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleClose}>
                    Ошибка
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
                }
            />
            
        </div>
    )
}

export default Authoriz