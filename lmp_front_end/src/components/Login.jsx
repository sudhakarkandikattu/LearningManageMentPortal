import React from "react"
import { axiosInstance } from '../utils/axios';
export default function Login() {
    const handleLoginUser = (e) => {
        e.preventDefault();
        console.log('eventObj', e.target.password.value);
        const userEmail = e.target.email.value;
        const userPass = e.target.password.value;

        axiosInstance.post('/login', {email: userEmail, password: userPass}).then((response) => {
            if(response.status = 200){
            }
            console.log('Login Data', response);
        }).catch((err) => {
            console.log('Login Data Failure', err);
        })
    }
    return (
        <form onSubmit={handleLoginUser}>
            <fieldset aria-busy={false} disabled={false}>
                <label for='email'>Email</label>
                <input type='text' id='email' name='email' />
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' />
                <input type="submit" value="submit"/>
            </fieldset>
        </form>
    )
}