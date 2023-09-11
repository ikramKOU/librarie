import React from 'react'
import App from '../App'
import Landing_pg from './Landing_pg'; 



function Register() {
  return (
  
	<>
  	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<h1>this is sample for github </h1>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">regsiteration</label>
					<h1>Registration</h1>
					<input type="name" name="email" placeholder="full name" required=""/>
					<input type="name" name="pswd" placeholder="last name" required=""/>
                    <input type="email" name="BBBBBB" placeholder="email" required=""/>
					<input type=" name" name="pswd" placeholder="phone" required=""/>
					
					<input type="name " name="pswd" placeholder="address" required=""/>
                    <input type="name" name="email" placeholder="cost" required=""/>
					<input type="name " name="pswd" placeholder="seat NO" required=""/>
                    <input type="password" name="email" placeholder="password Confirmed" required=""/>
					

					
					 
			
					<a href="">
					<button>Login</button>
                  </a>
					  
                       <button>sign up</button>
				</form>
			</div>
	</div>





  
  </>
  );
}

export default Register;
