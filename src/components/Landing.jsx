import React, { useState } from 'react'
import Edit from './edit/Edit';


function Landing() {


  const [showUpdate, setShowUpdate] =useState(false);

 function toggleEditComponet() {
  setShowUpdate(!showUpdate);
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

const modalStyle = {
  backgroundColor: '#BAC7C7C7BFF8', // Change this to your desired background color
};
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
             
              <li class="nav-item">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
            </ul>


            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" style={{ marginLeft: "-1rem" }}>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" >Profile</a></li>
                {/* <li><hr class="dropdown-divider" /></li> */}
                <li>
            
                  <button onClick={toggleEditComponet} >
                  <a class="dropdown-item"  >Edit Profile</a>
                  </button>

                  </li>
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


     
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content" style={modalStyle}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Profile</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-4">
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                    <label htmlFor="imageUpload"></label>
                  </div>
                  <div className="avatar-preview" style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}></div>
                </div>
              </div>
              <div className="col-md-8">
                <h5 className="card-title">Sadanand</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    {showUpdate && <Edit/>}
    </>
  );
}

export default Landing;
