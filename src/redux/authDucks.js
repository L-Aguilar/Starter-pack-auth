import {auth, db} from '../firebase'

//Data Inicial
const dataInicial = {
    loading: false, 
    activo: false
}

//Types
const LOADING = 'LOADING'
const USUARIO_EXITO = 'USUARIO_EXITO'
const USUARIO_ERROR = 'USUARIO_ERROR'
const CERRAR_SESION = 'CERRAR_SESION'

//Reducer
export default function usuarioReducer(state = dataInicial, action){
    switch(action.type){
        case LOADING:
            return {...state, loading: true} 
        case USUARIO_EXITO:
            return {...state, loading: false, user: action.payload, activo: true}
        case USUARIO_ERROR:
            return {...dataInicial}
        case CERRAR_SESION:
            return {...dataInicial}
        default:
            return {...state}
    }
}

//Acciones
export const crearUsuarioAccion = (email, password, history) => async (dispatch) => {
    
    dispatch({
        type:LOADING
    })

    console.log(email, password)
    await auth.createUserWithEmailAndPassword(email, password)
    .then((data) => {

        const usuario = {
            uid: data.user.uid,
            email: data.user.email,
            displayName: data.user.displayName,
            photoURL: data.user.photoURL
        }

        db.collection('usuarios').doc(usuario.email).set(usuario)
        dispatch({
            type: USUARIO_EXITO,
            payload: usuario
        })
        localStorage.setItem('usuario', JSON.stringify(usuario))
        localStorage.setItem('jwt', 'wwwww')
        history.push("/dashboard");

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
    });

}

export const iniciarSesionAccion = (email, password, history) => async (dispatch) => {
    console.log(email, password)
    auth.signInWithEmailAndPassword(email, password)
    .then((data) => {
        console.log(data.user)
        localStorage.setItem('usuario', JSON.stringify(data.user))
        localStorage.setItem('jwt', 'wwwww')
        history.push("/dashboard");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
}

export const leerUsuarioActivoAccion = () => (dispatch) => {
    if(localStorage.getItem('usuario')){
        dispatch({
            type:USUARIO_EXITO,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}