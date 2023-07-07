import styles from './login.module.scss';

const Login = () => {
  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <div className={styles.loginBlocks}>
        <label htmlFor="username" className={styles.labels}>
          Username:
        </label>
        <input type="text" name="username" id="username" className={styles.inputs} />
      </div>
      <div className={styles.loginBlocks}>
        <label htmlFor="password" className={styles.labels}>
          Password:
        </label>
        <input type="password" name="password" id="password" className={styles.inputs} />
      </div>
      <button type="submit" className={styles.loginBtn}>
        Login
      </button>
    </section>
  );
};

export default Login;
