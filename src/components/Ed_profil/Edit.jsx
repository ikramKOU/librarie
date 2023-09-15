import { useState } from 'react';
import React from 'react'
import App from '../../App'
import './edit_profile.css'


function Edit() {
	const [readonly, setReadonly] = useState(true);
	const [saveButtonText, setSaveButtonText] = useState('edit');
  
	const handleSaveButtonClick = () => {
	  const inputs = document.querySelectorAll('input[type="text"]');
	  inputs.forEach((input) => {
		input.toggleAttribute('readonly');
	  });
  
	  if (saveButtonText === 'edit') {
		setSaveButtonText('save');
	  } else {
		setSaveButtonText('edit');
	  }
	};
	return (

		<>

			<div class="container">
				<div class="card">
					<div class="info">
						<span>Edit Profile</span>
					</div> <div class="forms">
						<div class="inputs">
							<span>First Name</span>
							<input type="text"  value="IKRAM"/>
						</div>
						<div class="inputs">
							<span>Last Name</span>
							<input type="text"  value="KOURTASS"/>
						</div> <div class="inputs">
							<span>Email</span>
							<input type="text"  value="IKRAMkourtass@gmail.com"/>
						</div> <div class="inputs">
							<span>UserName</span>
							<input type="text"  value="AZEDSZ"/>
						</div>
						<div class="inputs">
							<span>Country</span>
							<input type="text"  value="MORROCO"/>
						</div>
						<button id="savebutton">edit</button>

					</div>
				</div>
			</div>


     


		</>
	);
}

export default Edit;
