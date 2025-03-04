import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Login = () => {

    const [visiblePassword, setVisiblePassword] = useState(false);

    const handlePasswordVisibility = () => {
        setVisiblePassword(!visiblePassword);
    }

    return(
        <div className="login-page">
            <h1>Login Page</h1>
            <form>
                <div className="input-holder">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="usename" id="username" />
                </div>
                <div className="input-holder">
                    <label htmlFor="password">Password</label>
                    <div className="password-input-holder">
                        <input type={visiblePassword ? "text" : "password"} name="password" id="password" />
                        <span className="icon-holder" onClick={() => handlePasswordVisibility()}>
                            <FontAwesomeIcon icon={visiblePassword ?faEye : faEyeSlash} />
                        </span>
                    </div>
                </div>
                <button type="button">Login</button>
            </form>
        </div>
    );
}

export default Login;