import { useRef } from 'react';
import cx from 'classnames';
import Card from '../ui/Card';
import styles from './LoginPage.module.css'


function LoginPage(props) {

    const usernameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
    
        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        const loginData = {
          username: enteredUsername,
          password: enteredPassword,
        };
    
        props.onLogin(loginData);
      }

  return (
    <Card>
        <main className={cx(styles["formLogin"], "text-center","mt-5")}>
            <form onSubmit={submitHandler}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" ref={usernameInputRef} />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" ref={passwordInputRef}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className={cx(styles.checkbox,"mb-3")}>
                <label>
                <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </main>
    </Card>
  )
}

export default LoginPage;