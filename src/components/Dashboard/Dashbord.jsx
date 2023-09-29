import React from 'react';

import './dashb.css' ;
function Dashbord() {

    return (
    <>

<div>
            <input type="checkbox" name="" id="menu-toggle"/>
                <div class="overlay"><label for="menu-toggle">
                </label></div>
                <div class="sidebar">
                    <div class="sidebar-container">
                       
                        <div class="sidebar-avatar">
                            <div>
                                <img src="https://i.pinimg.com/236x/0a/cd/50/0acd5002683fbcf2b720004f201ee530--library-logo-library-design.jpg" alt="avatar"  />
                            </div>
                            <div class="avatar-info">
                                <div class="avatar-text">
                                    <h1>IKram's Liberary</h1>
                                    {/* <small>14-10-69</small> */}
                                </div>
                                <span class="las la-angle-double-down"></span>
                            </div>
                        </div>
                        <div class="sidebar-menu">
                            <ul>
                                <li><a href="#" class="active"><span class="las la-adjust"></span><span>Dashboard</span></a></li>
                                <li><a href="#"><span class="las la-video"></span><span>Employees</span></a></li>
                                <li><a href="#"><span class="las la-chart-bar"></span><span>Books</span></a></li>
                                <li><a href="#"><span class="las la-calendar"></span><span>Student</span></a></li>
                                <li><a href="#"><span class="las la-user"></span><span>offers</span></a></li>
                            </ul>
                        </div>
                        <div class="sidebar-card">
                            <div class="side-card-icon">
                                <span class="lab la-codiepie"></span>
                            </div>
                            <div>
                                <h4>Products</h4>
                                <p>see available books</p>
                            </div>
                            <button class="btn btn-main btn-block">buy now</button>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <header>
                        <div class="header-wrapper">
                            <label for="menu-toggle">
                                <span class="las la-bars"></span>
                            </label>
                            <div class="header-title">
                                <h1>Liberary management </h1>
                                <p> welcome to our service liberary<span class="las la-chart-line"></span></p>
                            </div>
                  
                        </div>

                        <div class="header-action">
                            <button class="btn btn-main">
                                <span class="las la-video"></span>
                               Log out
                            </button>
                        </div>
                    </header>

                    <div class="dashboard">
        <h1>/Students</h1>
        <table class="dashboard-table">
            <thead>
                <tr>
                    <th>id_student</th>
                    <th>Student_Name</th>
                    <th>Student_Email</th>
                    <th>Phone</th>
                    <th>Field</th>
                    <th>book token</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>IKRAM KOURTASS</td>
                    <td>IKRAMKOURTASSE@Gmail.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jihan</td>
                    <td>jihan@gmail.com</td>
                </tr>
             
            </tbody>
        </table>
    </div>
                  
                </div>
</div>

            </>
            );
}

            export default Dashbord;
