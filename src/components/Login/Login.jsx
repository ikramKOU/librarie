import React from 'react'
import App from '../../App'
import Register from '../Register/Register';

function Login() {
  return (
  
	<>
  

  	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Admin</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button >Login</button>

          <a href="register">
 <button>Register </button>
</a>
				</form>
			</div>
	</div>





  
  </>
  );
}

export default Login;
