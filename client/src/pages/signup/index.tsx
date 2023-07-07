import styles from './signup.module.scss';

const Signup = () => {
  return (
    <section className={styles.signup}>
      <h1>Sign up</h1>
      <div className={styles.signupBlocks}>
        <label htmlFor="username" className={styles.labels}>
          Username:
        </label>
        <input type="text" name="username" id="username" className={styles.inputs} />
      </div>
      <div className={styles.signupBlocks}>
        <label htmlFor="password" className={styles.labels}>
          Password:
        </label>
        <input type="password" name="password" id="password" className={styles.inputs} />
      </div>
      <button type="submit" className={styles.signupBtn}>
        Sign up
      </button>
    </section>
  );
};

export default Signup;
