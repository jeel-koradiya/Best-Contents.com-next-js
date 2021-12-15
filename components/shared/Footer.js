


// const Footer = () =>
// <>
//   <footer id="sticky-footer" className="py-4 bg-black text-white-50 py-3">
//     <div className="container text-center">
//       <small>Copyright &copy; Your Website</small>
//     </div>
//   </footer>
// </>
// export default Footer;


import Link from 'next/link';
// import { Footer } from 'react-bootstrap/lib/Modal';

const footer = () => {
    return (
        <>
  <section id="footer">
        <div className="foot">
            <div className="foot1">
                <div className="foot2">
                    <h5>|| Quick links ||</h5>
                    <ul className="list-unstyled quick-links">
                        <li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
                        <li><a href="/languages"><i className="fa fa-angle-double-right"></i>Languages</a></li>
                        <li><a href="/Subject"><i className="fa fa-angle-double-right"></i>Subjects</a></li>
                        <li><a href="/about_main"><i className="fa fa-angle-double-right"></i>About</a></li>
                    </ul>
                </div>

                <div className="foot2">
                    <h5>|| Languages ||</h5>
                    <ul className="list-unstyled quick-links">
                        <li><a href="/html"><i className="fa fa-angle-double-right"></i>HTML</a></li>
                        <li><a href="/javascript"><i className="fa fa-angle-double-right"></i>JavaScript</a></li>
                        <li><a href="/php"><i className="fa fa-angle-double-right"></i>PHP</a></li>
                        <li><a href="/python"><i className="fa fa-angle-double-right"></i>Python</a></li>
                        <li><a href="/csharp"><i className="fa fa-angle-double-right"></i>C#</a></li>
                    </ul>
                </div>

                <div className="foot2">
                    <h5>|| Subjects ||</h5>
                    <ul className="list-unstyled quick-links">
                        <li><a href="/iot"><i className="fa fa-angle-double-right"></i>IOT</a></li>
                        <li><a href="/os"><i className="fa fa-angle-double-right"></i>OS</a></li>
                        <li><a href="/ds"><i className="fa fa-angle-double-right"></i>DS</a></li>
                        <li><a href="/ai"><i className="fa fa-angle-double-right"></i>AI</a></li>
                        <li><a href="/ml"><i className="fa fa-angle-double-right"></i>ML</a></li>
                    </ul>
                </div>

            </div>
            <div className="foot3">
               
                <div className="foot5">
                    <p className="c_w"><b>Copyright 2021 BestContent.com, Inc. All rights reserved</b></p>
                    
                </div>
            </div>
        </div>
    </section>

            <style jsx>
                {
                    `
                    .foot {
                        width: 100%;
                        height: 300px;
                        background: #4c4c55;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .foot1 {
                        width: 100%;
                        height: 250px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-evenly;
                    }
                    
                    .foot2 {
                        height: 200px;
                        text-align: center;
                    }
                    
                    .foot3 {
                        width: 100%;
                        height: 60px;
                        display: flex;
                        text-align: center;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-evenly;
                    }
                    
                    .foot4 {
                        width: 100%;
                        height: 80px;
                        display: flex;
                        flex-direction: row;
                        text-align: center;
                        align-items: center;
                        justify-content: space-evenly;
                    
                    
                    }
                    
                    .foot5 {
                        width: 100%;
                        height: 80px;
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                        align-items: center;
                        justify-content: space-evenly;
                    }
                    
                    
                    /* Footer */
                    
                    
                    #footer h5 {
                        padding-left: 10px;
                        padding-bottom: 6px;
                        margin-bottom: 20px;
                        font-family: inherit;
                        font-size: 1.25em;
                        font-weight: 500;
                        line-height: 1.2;
                        color: #ffffff;
                    }
                    
                    #footer a {
                        color: #ffffff;
                        text-decoration: none !important;
                        background-color: transparent;
                        -webkit-text-decoration-skip: objects;
                    }
                    #footer .c_w{
                        color: #fff;
                    }
                    .anima:hover {
                        transform: translateY(-4px);
                        transition: 0.3s;
                    }
                    
                    ul {
                        list-style-type: none;
                        overflow: hidden;
                    }
                    
                    #footer ul.social li {
                        padding: 3px 0;
                    }
                    
                    #footer ul.social li a i {
                        margin-right: 5px;
                        font-size: 25px;
                        -webkit-transition: .5s all ease;
                        -moz-transition: .5s all ease;
                        transition: .5s all ease;
                    }
                    
                    #footer ul.social li:hover a i {
                        font-size: 30px;
                        margin-top: -10px;
                    }
                    
                    #footer ul.social li a,
                    #footer ul.quick-links li a {
                        color: #ffffff;
                    }
                    
                    #footer ul.social li a:hover {
                        color: #eeeeee;
                    }
                    
                    #footer ul.quick-links li {
                        padding: 3px 0;
                        -webkit-transition: .5s all ease;
                        -moz-transition: .5s all ease;
                        transition: .5s all ease;
                    }
                    
                    #footer ul.quick-links li:hover {
                        padding: 3px 0;
                        margin-left: 5px;
                        font-weight: 700;
                    }
                    
                    #footer ul.quick-links li a i {
                        margin-right: 5px;
                    }
                    
                    #footer ul.quick-links li:hover a i {
                        font-weight: 700;
                    }
                    
                    @media (max-width:767px) {
                        #footer h5 {
                            padding-left: 0;
                            border-left: transparent;
                            padding-bottom: 0px;
                            margin-bottom: 10px;
                        }
                    }
                    
                    @media screen and (max-width:480px) {
                        .foot1 {
                            display: grid;
                            width: 100%;
                            height: 700px;
                            grid-template-columns: repeat(1);
                        }
                    
                        .foot {
                            height: 800px;
                            width: 100%;
                        }
                    }
                   `

                }
            </style>
        </>
    );
};

export default footer;