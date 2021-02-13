import {auth} from '../firebase'
const TOKEN_KEY = 'jwt';

export const logout = (history) => {
    
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("usuario");

    auth.signOut().then(() => {
        history.push("/login");
    }).catch((error) => {
        // An error happened.
    });
    
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}