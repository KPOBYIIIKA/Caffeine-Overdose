import styles from "./Signup.module.scss";

function Signup() {
  return (
    <div className={styles.Signup}>
      <form>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <label>Repeat Password</label>
        <input type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
