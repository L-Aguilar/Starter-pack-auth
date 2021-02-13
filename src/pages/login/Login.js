import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {iniciarSesionAccion} from '../../redux/authDucks'
import { useHistory } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory();

    const iniciarSesion = (e) => {
        e.preventDefault()
        if(!email.trim()){
            console.log("Escribe tu email...")
            return
        }

        if(!password.trim()){
            console.log("Contraseña esta vacia...")
            return
        }

        dispatch(iniciarSesionAccion(email, password, history))
    }
        
    return (
        <div className="offset">
            <div className="min-vh-100 py-5 d-flex align-items-center">
                <div className="w-100">
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-lg-4">
                            <div className="card shadow zindex-100 mb-0">
                                <div className="card-body px-md-4 py-4">
                                    <div className="">
                                        <h3>Login</h3>
                                        <p className="text-muted mb-0">Sign in to your account to continue.</p>
                                            <form className="form mt-5">
                                                <div className="form-group mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                                    <div className="input-group input-group-merge">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <input type="email" className="form-control"
                                                        id="input-email" placeholder="name@example.com"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group my-4">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <label className="form-control-label">Password</label>
                                                        </div>
                                                        <div className="mb-2">
                                                            <a className="small text-muted text-underline--dashed border-primary">Lost password?</a>
                                                        </div>
                                                    </div>
                                                    <div className="input-group input-group-merge">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                                                                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                                                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <input type="password" className="form-control"
                                                        id="input-password" placeholder="Password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                            <a href="#" data-toggle="password-text" data-target="#input-password">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                                </svg>
                                                            </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3 form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                </div>
                                                <button className="button-accent block mt-4"  onClick={(e) => iniciarSesion(e)}>
                                                    <i className="bi bi-arrow-right"></i>
                                                    <span>Iniciar sesión</span>
                                                </button>
                                            </form>
                                    </div>
                                </div>

                                <div className="card-footer px-md-5"><small>Aún no tienes cuenta? </small>
                                    <a href="/register" className="small font-weight-bold">Registrate</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
