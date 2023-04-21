import styles from './Login.module.scss'

function Login() {
    return(
        <div className={styles}>
            <form>
                <div>
                    <label>Email</label>
                    <input/>
                </div>
                <div>
                    <label>Password</label>
                    <input/>
                </div>
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login