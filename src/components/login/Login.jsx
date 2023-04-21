import styles from './Login.module.scss'

function Login() {
    return(
        <div className={styles.Login}>
            <form>
                <label>Email</label>
                <input type='email'/>
                <label>Password</label>
                <input type='password'/>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login