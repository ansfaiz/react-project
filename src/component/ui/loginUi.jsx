import { memo } from 'react'; 

const LoginUi = () => {
  return (
    <div>
      <h2>LoginUi</h2>
      <form action="#" method="post"> 
        <label for="username">Username:</label><br />
        <input type="text" id="username" name="username" required /><br /><br /> 

        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" required /><br/><br/> 

        <input type="checkbox" id="remember" name="remember" />
        <label for="remember">Remember Me</label><br /><br /> 

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default memo(LoginUi);