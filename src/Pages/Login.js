const Login = () => {

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
                    <input type="password" name="password" id="password" />
                </div>
                <button type="button">Login</button>
            </form>
        </div>
    );
}

export default Login;