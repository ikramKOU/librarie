import { useState } from "react";

const Login = () => {


  const [activeTab, setActiveTab] = useState('link');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <>
      <div class="card mb-3" style={{ maxWidth: "540px;" }}>
        <div class="row g-0">
          <div class="col-md-6">
            <img src='/img/login.jpeg' class="img-fluid rounded-start w-100" alt=" login" />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">USER : </h5>
              {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}

              {/* <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Email</label>
    <input type="text" class="form-control" id="validationCustom01"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Password </label>
    <input type="Password" class="form-control" id="validationCustom02"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>  */}

              {/* <div class="card text-center">
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <a class="nav-link " aria-current="true" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="#">Link</a>
                    </li>
                    
                  </ul>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div> */}


              <div className="card text-center">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
                        href="#"
                        onClick={() => handleTabClick('login')}
                      >
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTab === 'link' ? 'active' : ''}`}
                        href="#"
                        onClick={() => handleTabClick('link')}
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {/* <h5 className="card-title">Special title treatment</h5> */}
                  {activeTab === 'login' && (
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-md-6">
                        <label htmlFor="validationCustom01" className="form-label">Email</label>
                        <input type="text" className="form-control" id="validationCustom01" required />
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="validationCustom02" className="form-label">Password</label>
                        <input type="password" className="form-control" id="validationCustom02" required />
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">Submit</button>
                      </div>
                    </form>
                  )}
                  {activeTab === 'link' && (
                    // <p className="card-text">Content for Link tab</p>

                    <form class="row g-3">
                       <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">First Name</label>
                      <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Last Name</label>
                      <input type="password" class="form-control" id="inputPassword4"/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail4"/>
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Password</label>
                      <input type="password" class="form-control" id="inputPassword4"/>
                    </div>

                    <div class="col-md-4">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity"/>
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">State</label>
                      <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <label for="inputZip" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="inputZip"/>
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Address</label>
                      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    {/* <div class="col-12">
                      <label for="inputAddress2" class="form-label">Address 2</label>
                      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                    </div> */}
                   
                    {/* <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div> */}
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                  </form>
                    
                  )}
                  {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;