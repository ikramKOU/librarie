import React, { useState } from 'react'
import Edit from './edit/Edit';


function Landing() {


  const [showUpdate, setShowUpdate] =useState(false);

 function toggleEditComponet() {
  setShowUpdate(!showUpdate);
alert('Pleasessaasas')
  console.log("toggleEditComponet here.........................")
}
//   function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             $('#imagUePreview').css('background-image', 'url('+e.target.result +')');
//             $('#imagePreview').hide();
//             $('#imagePreview').fadeIn(650);
//         }
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// $("#imageUpload").change(function() {
//     readURL(this);
// });
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li>
                  <button onClick={toggleEditComponet} >
                  <a class="dropdown-item"  >Edit Profile</a>
                  </button>
              
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
            </ul>

{showUpdate && <Edit/>}
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" style={{ marginLeft: "-1rem" }}>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" >Profile</a></li>
                {/* <li><hr class="dropdown-divider" /></li> */}
                <li><a class="dropdown-item" href="#">Edit Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>



      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Profile</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="card" style={{ width: "18rem;" }}>
                {/* <div style={{width:'50px',height:'50px'}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAYFBMVEUAAAD////6+vpTU1Po6Ojc3NzS0tLr6+vAwMDx8fGbm5ssLCxqamr09PTj4+OqqqoRERHLy8uTk5NZWVmzs7N9fX1ycnI9PT0hISE3NzccHBxCQkJOTk6EhIRgYGBHR0dTs2ZpAAAD+ElEQVRoge2b2ZLiMAxFTTaykJUkDXQI//+XAzVNdWLL1pK4mIe5792n7MiSfGXUQaAorYepaFRTfI95H0v+xeGg2H+R3C9qreaUBt7JQf+lIBXd0S/Zwn3p0pX+yNXZyn3pK/VF7p3cl+5+yAMKVuqa7U8OQgL4qWpvcvlNAytFPt00MnXFT92oaBp5JoOf3zrakdwxwEqd9yO3LDD1cFHITLBSyU7kO5tc7EOu2GCl6l3Io4Dc7EGWLFmpfgcy70S9NW0nB+S0uRaeTjByLAOrbjM5F5LnzeRJSG7Qvgwhl1chGc9jCDlupGT0XCFkbrH4FRpiCBnv+mwaPkY+bSTXYjJ6rLyR0c7EG3nrbsu/87iRLD9VaDOGZRIxGW1LEPKxkJLbjeSDsDwrtbViCBrPvwpR/wIjS0MM7/Yxcib80Hizj3aAlAu7qQI3i1ByIiLjbRih03fbMhYRfCKcLIkxym2ScKPjXNt/RLEECWT+/YZyoSPdn7k9d0gB09wKXpAVNAuURC51d9cptFYwyKy2m3CBZZAZ+YQUXQwyedXUFTMc14hUOhhGM93rDXDD5Jsz0uA46/XNDR5Yrj5rmhC5lj2R/Dch+RnjJwuXOUrgk5/rzoEovxOzxybyU1U9/Lak11PO3GYi+Zikdd71pslURnGSVCVQD+O6y/s0wcLNSU66x0/Gbu7USVj8joQirJ1DDTs5SFe+0IWUnYK1ZTg7vr+VnD70MJrxZcfGDG+2JhcLuQRPLlINAtAjtbWhMPloyVaT68u1lsz+gLsykOy4uw42dmJvXG7g5A4iuy/NMzBsznrnnRMcGgJktB5e7u0y2KJ2xLqlM7DhAJnS7xXhUKdt26b5MFGaNKD1N8lSX9kts6AYZLkz4lRhJFODTJ998mTst06W21CY9KKjk8WODCp90RrZ35INt0gj+/rKL3UucuYRrJSL7Ocsv9U6yOJJDUmjnSybftIVWMl+N1uz51ZkWxu/lzobOROPxYhaFcsl2VOxWCizkOXjEqpiC1nyooCnGiYzHgdJNcLkI8t7EukMk/0H2KoJXZB9Vsi3KpDsP7RXWWxBlr0c4SkFyf4PlVI5SPZ/qFaZe0GWPuDgaITI0nc6LM0QWf50hKEQIsvHrv/JfDLNwN6o6d8if263s4+dqs/lMMnkky24Yvi+YbzUgmTZdJ2nCCRLHzMwtHy69U/02/6bz8Z2u/Ee3da7pO9F30or2XP7ufY+NcPG/lui7dJeyWnkwN/J0h9D6u7j0RjZ7CTjRaLh9ZZ+zBJzggN4+tiYWaArMKmFJijRsK9Vc8mhGSU8r4ry/dqERw/PRq3TwSrNx8dty+KbSzjkqfVXZn8AcrkxhYPP/4YAAAAASUVORK5CYII=" class="card-img-top" alt="..."  />
                </div> */}

                {/* profile pic here */}
                <div class="container">

                  <div class="avatar-upload">
                    <div class="avatar-edit">
                      <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                      <label for="imageUpload"></label>
                    </div>
                    <div class="avatar-preview">
                      <div id="imagePreview" style= {{backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAYFBMVEUAAAD////6+vpTU1Po6Ojc3NzS0tLr6+vAwMDx8fGbm5ssLCxqamr09PTj4+OqqqoRERHLy8uTk5NZWVmzs7N9fX1ycnI9PT0hISE3NzccHBxCQkJOTk6EhIRgYGBHR0dTs2ZpAAAD+ElEQVRoge2b2ZLiMAxFTTaykJUkDXQI//+XAzVNdWLL1pK4mIe5792n7MiSfGXUQaAorYepaFRTfI95H0v+xeGg2H+R3C9qreaUBt7JQf+lIBXd0S/Zwn3p0pX+yNXZyn3pK/VF7p3cl+5+yAMKVuqa7U8OQgL4qWpvcvlNAytFPt00MnXFT92oaBp5JoOf3zrakdwxwEqd9yO3LDD1cFHITLBSyU7kO5tc7EOu2GCl6l3Io4Dc7EGWLFmpfgcy70S9NW0nB+S0uRaeTjByLAOrbjM5F5LnzeRJSG7Qvgwhl1chGc9jCDlupGT0XCFkbrH4FRpiCBnv+mwaPkY+bSTXYjJ6rLyR0c7EG3nrbsu/87iRLD9VaDOGZRIxGW1LEPKxkJLbjeSDsDwrtbViCBrPvwpR/wIjS0MM7/Yxcib80Hizj3aAlAu7qQI3i1ByIiLjbRih03fbMhYRfCKcLIkxym2ScKPjXNt/RLEECWT+/YZyoSPdn7k9d0gB09wKXpAVNAuURC51d9cptFYwyKy2m3CBZZAZ+YQUXQwyedXUFTMc14hUOhhGM93rDXDD5Jsz0uA46/XNDR5Yrj5rmhC5lj2R/Dch+RnjJwuXOUrgk5/rzoEovxOzxybyU1U9/Lak11PO3GYi+Zikdd71pslURnGSVCVQD+O6y/s0wcLNSU66x0/Gbu7USVj8joQirJ1DDTs5SFe+0IWUnYK1ZTg7vr+VnD70MJrxZcfGDG+2JhcLuQRPLlINAtAjtbWhMPloyVaT68u1lsz+gLsykOy4uw42dmJvXG7g5A4iuy/NMzBsznrnnRMcGgJktB5e7u0y2KJ2xLqlM7DhAJnS7xXhUKdt26b5MFGaNKD1N8lSX9kts6AYZLkz4lRhJFODTJ998mTst06W21CY9KKjk8WODCp90RrZ35INt0gj+/rKL3UucuYRrJSL7Ocsv9U6yOJJDUmjnSybftIVWMl+N1uz51ZkWxu/lzobOROPxYhaFcsl2VOxWCizkOXjEqpiC1nyooCnGiYzHgdJNcLkI8t7EukMk/0H2KoJXZB9Vsi3KpDsP7RXWWxBlr0c4SkFyf4PlVI5SPZ/qFaZe0GWPuDgaITI0nc6LM0QWf50hKEQIsvHrv/JfDLNwN6o6d8if263s4+dqs/lMMnkky24Yvi+YbzUgmTZdJ2nCCRLHzMwtHy69U/02/6bz8Z2u/Ee3da7pO9F30or2XP7ufY+NcPG/lui7dJeyWnkwN/J0h9D6u7j0RjZ7CTjRaLh9ZZ+zBJzggN4+tiYWaArMKmFJijRsK9Vc8mhGSU8r4ry/dqERw/PRq3TwSrNx8dty+KbSzjkqfVXZn8AcrkxhYPP/4YAAAAASUVORK5CYII=');"}}>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end here */}
                <div class="card-body">
                  <h5 class="card-title">Sadanand</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Landing;
