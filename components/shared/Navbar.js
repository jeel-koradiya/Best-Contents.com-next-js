
import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from 'stores/authContext';










const navbar = () => {
  const { user, login, logout, authReady } = useContext(AuthContext)
  console.log(user)
  return (
    <>
      <div className="topnav" id="myTopnav">
        <section id="abcd">
          <a href="/" className="abcd1 abl">
            <span className="topnav_0">

              <h2 className="green">Best</h2>
              <h2 className="content">Content.com</h2>
            </span></a></section>


        <div className="topnav_1">

          <Link href="/" ><a className="abl">Home</a></Link>

          <div className="dropdown1">
            <button className="dropbtn1">Computer science
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content1">
              <Link href="/languages"><a className="abl">Languages</a></Link>
              <Link href="/Subject"><a className="abl">Subjects</a></Link>
            </div>
          </div>

          <Link href="/about_main"><a className="abl">About</a></Link>

         
          {!user && <li onClick={login} className="abl">Login/Signup</li>}
          {user && <li className="abll">{user.email}</li>}
          {user && <li onClick={logout} className="abl">Logout</li>}
         

          <span className="navbtn"><Link href="/signin"><i className="fa fa-sign-in"></i></Link></span>

        </div>

      </div>
      <style jsx>
        {
          `
                body {
                  margin: 0px;
                  padding: 0px;
                }
                
                /* NAVBAR */
                .topnav {
                  overflow: hidden;
                  background-color: #4c4c55;
                  /* position: sticky;
                top:0; */
                }

                .idemail{


                }
                
                
                
                .green {
                  font-family: Old English Text MT;
                  margin-top: 8px;
                  margin-left: 10px;
                  color: #1BC787;
                }
                
                .content {
                  font-family: Old English Text MT;
                  margin-top: 8px;
                  margin-left: 10px;
                  color: white;
                }
                
                .topnav_0 {
                  display: flex;
                  float: left;
                  margin-left: 5%;
                }
                
                .topnav_1 {
                  display: flex;
                  float: right;
                  margin-right: 1%;
                }
                
                .topnav .abl {
                  float: left;
                  display: block;
                  color: white;
                  text-align: center;
                  padding: 14px 16px;
                  text-decoration: none;
                  font-size: 17px;
                  cursor: pointer;
                }
                /* 
                .active {
                  background-color: #04AA6D;
                  color: white;
                } */
                
                .topnav .icon {
                  display: none;
                }
                
                .dropdown1 {
                  float: left;
                  overflow: hidden;
                }
                
                .dropdown1 .dropbtn1 {
                  font-size: 17px;
                  border: none;
                  outline: none;
                  color: white;
                  padding: 14px 16px;
                  background-color: inherit;
                  font-family: inherit;
                  margin: 0;
                }
                
                .dropdown-content1 {
                  display: none;
                  position: absolute;
                  background-color: #f9f9f9;
                  min-width: 160px;
                  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                  z-index: 1;
                }
                
                .dropdown-content1 .abl {
                  float: none;
                  color: black;
                  padding: 12px 16px;
                  text-decoration: none;
                  display: block;
                  text-align: left;
                }
                
                .topnav .abl:hover,
                .dropdown1:hover .dropbtn1 {
                  background-color: #555;
                  color: white;
                }
                
                .dropdown-content1 .abl:hover {
                  background-color: #ddd;
                  color: black;
                }
                
                .dropdown1:hover .dropdown-content1 {
                  display: block;
                }
                
                @media screen and (max-width: 600px) {
                
                  .topnav .abl:not(:first-child),
                  .dropdown1 .dropbtn1 {
                      display: none;
                  }
                
                  .topnav .abl.icon {
                      float: right;
                      display: block;
                  }
                }
                
                @media screen and (max-width: 600px) {
                  .topnav.responsive {
                      position: relative;
                  }
                
                  .topnav.responsive .icon {
                      position: absolute;
                      right: 0;
                      top: 0;
                  }
                
                  .topnav.responsive .abl {
                      float: none;
                      display: block;
                      text-align: left;
                  }
                
                  .topnav.responsive .dropdown1 {
                      float: none;
                  }
                
                  .topnav.responsive .dropdown-content1 {
                      position: relative;
                  }
                
                  .topnav.responsive .dropdown1 .dropbtn1 {
                      display: block;
                      width: 100%;
                      text-align: left;
                  }
                
                }
                
                #abcd .abl{
                 padding: 0px;
                 margin-left: 20px;
                }
                #abcd .abl:hover{
                 padding: 0px;
                 background:#4c4c55;
                }
                .abll{
                  float: left;
                  display: block;
                  color: white;
                  text-align: center;
                  padding: 14px 16px;
                  text-decoration: none;
                  font-size: 17px;
                }
                .abll:hover{
                  cursor:no-drop;
                }
                
                
                
                `
        }
      </style>
    </>
  )
}

export default navbar;



