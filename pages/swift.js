import React, { Component } from 'react';
import Link from 'next/link';
import { Footer } from 'components/shared';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faTv, faVideo, faList, faBook, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHome, falistdropdown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class swift extends Component {

    render() {
        return (
            <>

                {/* <script type="text/javascript" src="app.js"></script> */}
                <div className="cn_view">

                    <img src="swift.png" className="cn_subsymbol" />
                    <h1 className="cn_subname">Swift</h1>
                    <h4 className="cn_subdis">Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community. First released in 2014, Swift was developed as a replacement for Apple's earlier programming language Objective-C, as Objective-C had been largely unchanged since the early 1980s and lacked modern language features. Swift works with Apple's Cocoa and Cocoa Touch frameworks, and a key aspect of Swift's design was the ability to interoperate with the huge body of existing Objective-C code developed for Apple products over the previous decades. It is built with the open source LLVM compiler framework and has been included in Xcode since version 6, released in 2014. On Apple platforms,it uses the Objective-C runtime library, which allows C, Objective-C, C++ and Swift code to run within one program.</h4>
                </div>





                <div className="cn_mainbox">

                    <div className="cn_border1">
                        <div className="cn_boxs">

                            <div className="cn_icons1"><FontAwesomeIcon icon={faList} /></div>
                            <h3 className="cn_iconname">Playlist</h3>

                        </div>
                        <div className="cn_box">

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLMRqhzcHGw1b89DXHOVA77ozWXWmuBkWX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Swift Tutorials for Beginners (2019)
                                        <br /><b>CodeWithChris</b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Swift 5 for Beginners (2021)<br />
                                        <b>
                                            iOS Academy
                                        </b>
                                    </div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLb5R4QC2DtFv3MvfG42Cd5La34Hwj4pY6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Swift programming hindi tutorial for beginners<br /><b>

                                        Code Cat
                                    </b></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>





                <div className="cn_mainbox">

                    <div className="cn_border1">
                        <div className="cn_boxs">

                            <div className="cn_icons1"><FontAwesomeIcon icon={faVideo} /></div>
                            <h3 className="cn_iconname">In One Video</h3>

                        </div>
                        <div className="cn_box">

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/comQ1-x2a1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Swift Tutorial - Full Course for Beginners<br /><b>


                                        freeCodeCamp.org


                                    </b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/FcsY1YPBwzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Learn Swift Fast (2020) - Full Course For Beginners <br /><b>CodeWithChris

                                    </b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/Ulp1Kimblg0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Swift Programming Tutorial for Beginners (Full Tutorial)
                                        <br /><b>
                                            CodeWithChris




                                        </b></div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>










                <div className="cn_mainbox">

                    <div className="cn_border1">
                        <div className="cn_boxs">

                            <div className="cn_icons1"><FontAwesomeIcon icon={faBook} /></div>
                            <h3 className="cn_iconname">Books</h3>

                        </div>
                        <div className="cn_box">

                            <div className="cn_box1">

                                <div className="cn_box2"> <a href="https://www.amazon.in/Mastering-Swift-latest-programming-language/dp/1789139864/ref=sr_1_2?keywords=swift+book&qid=1636717956&qsid=258-7668028-2250051&sr=8-2&sres=B07G6VTYDX%2C1789139864%2C1839211199%2C9381607702%2C1617292621%2C0007544219%2C9391258689%2CB08FJ77RFL%2CB08L3RWQKF%2C8175993251%2C9380005865%2C817379751X%2C9390742641%2CB08KH3R4MN%2CB09LJSB9T3%2C9390602440&srpt=ABIS_BOOK">
                                    <img src="swifta.jpg" alt="" className="cn_img_book" /></a>

                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">HTML and CSS: Design and Build Websites</div>
                                    {/* <div className="cn_box122_b">
                   <a href="https://www.amazon.in/Computer-Networks-Andrew-S-Tanenbaum/dp/0132126958"><i
                           className="cn_fab fa-amazon cn_box1221_b"></i></a>
                  
               </div> */}
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">  <a href="https://www.amazon.in/Swift-Cookbook-recipes-developing-applications/dp/1839211199/ref=sr_1_3?keywords=swift+book&qid=1636717956&qsid=258-7668028-2250051&sr=8-3&sres=B07G6VTYDX%2C1789139864%2C1839211199%2C9381607702%2C1617292621%2C0007544219%2C9391258689%2CB08FJ77RFL%2CB08L3RWQKF%2C8175993251%2C9380005865%2C817379751X%2C9390742641%2CB08KH3R4MN%2CB09LJSB9T3%2C9390602440&srpt=ABIS_BOOK">
                                    <img src="swiftb.jpg" alt="" className="cn_img_book" /></a>

                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">HTML & CSS: The Complete Reference, Fifth Edition </div>
                                    {/* <div className="cn_box122_b">
                   <a href="https://www.amazon.in/Data-Computer-Communications-8-Stallings/dp/8120330781"><i
                           className="cn_fab fa-amazon cn_box1221_b"></i></a>
              
               </div> */}
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2"><a href="https://www.amazon.in/Mastering-Swift-5-3-knowledge-programming/dp/1800562152/ref=sr_1_5?crid=33LDFV0ERXEIR&keywords=swift+books+programming&qid=1636717992&qsid=258-7668028-2250051&sprefix=swift++book%2Caps%2C333&sr=8-5&sres=8126559888%2C1786460890%2C1800562152%2C9355421303%2C1789349028%2C1617292621%2CB09KN2PB9X%2C9385889419%2CB096VZ7WBW%2C9389949181%2CB07HM3QPTT%2CB08PVXFKFN%2CB00WO7FVDS%2C8129141841%2C8171673406%2C8172234988&srpt=ABIS_BOOK">
                                    <img src="swiftc.webp" alt="" className="cn_img_book" />  </a>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Mastering Html, Css & Javascript Web Publishing
                                    </div>
                                    {/* <div className="cn_box122_b">
                   <a href="https://www.amazon.in/Introduction-Wireless-Mobile-Systems-Agrawal/dp/1439062072">
                      </a>
                  
               </div> */}
                                </div>
                            </div>


                        </div>


                    </div>
                </div>





                <div className="cn_mainbox1">

                    <div className="cn_border1">
                        <div className="cn_boxs">

                            <div className="cn_icons1"><FontAwesomeIcon icon={faTv} /></div>
                            <h3 className="cn_iconname">Online compiler</h3>

                        </div>
                        <div className="j_compiler">

                            <iframe src="https://www.jdoodle.com/execute-swift-online/" width="100%" height="394" frameBorder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

                        </div>

                    </div>
                </div>

                <Footer />
                <style jsx>
                    {
                        `
                  

  
 


  * {
    margin: 0px;
    padding: 0px;
}

body {
    margin: 0px;
    padding: 0px;
}

textarea {
    width: 33.33%;
    /* float: top; */
    min-height: 250px;
    overflow: scroll;
    margin: auto;
    display: inline-block;
    background: #F4F4F9;
    outline: none;
    font-family: Courier, sans-serif;
    font-size: 14px;
  }
  
  .if1 {
    background-color: #1BC787;
    width: 100%;
    height: 100%;
  }

  .j_compiler{
    width: 100%;
    height: 400px;
    border-radius: 0px 0px 15px 15px;
    overflow: auto;
}
.j_compiler1{
    width: 100%;
    height: 400px;
    border-radius: 0px 0px 15px 15px;
}
 
  
  #iframeout {
    bottom: 0;
    position: relative;
    width: 100%;
    height: 15em;
    /* overflow: scroll; */
  }

/*  icon style */
  .cn_icons1{
      margin-top: 6px;
      width:20px;
      margin-left:20px;
      
  }


/* subject name */

.cn_subsymbol {
    margin: 25px auto;
    display: flex;
}

.cn_subname {
    text-align: center;
}

.cn_subdis {
    margin: 0px 14%;
    text-align: justify;
}

h1 {
    margin-top: 0.7%;
    margin-bottom: 1.5%;

}

h4 {
    color: #828282;

    margin-left: 2px;
}


/* PLAYLIST */

.cn_mainbox {
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.cn_mainbox1 {
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.cn_border1 {
    border: 2px solid #1BC787;
    border-radius: 20px;
    width: 75%;

}

.cn_textname {
    font-size: 20px;
    color: #1BC787;
    margin-bottom: 10px;
    margin-top: 20px
}


.cn_box {
    height: 400px;
    width: 100%;
    /* background-color: #828282; */

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

/* rect1==box */
.cn_rect1 {
    height: 350px;
    width: 100%;
    /* background-color: #828282; */

    display: grid;
    /* flex-direction: row; */
    align-items: center;
    justify-content: space-evenly;
    grid-template-columns: repeat(2, 400px);
}

/* rect2==box1 */


.cn_rect2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 120px;
    margin: 30px;
    background-color: brown;
    border-radius: 20px;
}

.cn_rect2_text{
    font-size:25px;
    text-decoration: none;
    
    /* color:#9ba19f; */
}
.cn_rect2_text:hover{
    text-decoration: none;
    color:#1BC787;
}



@media screen and (max-width:1010px) {

    .cn_mainbox {
        height: 1100px;
    }

    .cn_mainbox1 {
        height: 900px;
    }

    .cn_box {
        display: grid;
        width: 100%;
        height: 1000px;
        grid-gap: 0px;
        grid-template-columns: repeat(1, 250px);

    }

    .cn_rect1 {
        display: grid;
        height: 800px;
        width: 100%;
        grid-gap: 0px;
        grid-template-columns: repeat(1, 400px);
    }



}

@media screen and (max-width:480px) {

    .cn_mainbox {
        height: 1100px;
    }

    .cn_mainbox1 {
        height: 600px;
    }

    .cn_box {
        display: grid;
        width: 100%;
        height: 1000px;
        grid-gap: 0px;
        grid-template-columns: repeat(1, 250px);

    }

    .cn_border1 {
        width: 95%;
    }

    .cn_p1 {
        left: 70%
    }

    .cn_rect1 {
        display: grid;
        height: 800px;
        width: 100%;
        grid-gap: 0px;

        grid-template-columns: repeat(1, 300px);
    }

    .cn_rect2 {
        height: 120px;
        width: 250px;
    }




}

.cn_boxs {
    display: flex;
    background-color: #1BC787;
    /* border: 2px solid #707070; */
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    height: 30px;
    margin: auto;

}

.cn_icon1 {
    margin-left: 20px;
    margin-top: 5px;
    font-size: 22px;
}

.cn_iconname {
    font-size: 20px;
    margin-left: 12px;
    margin-top: 5px;
}

.cn_box1 {
    height: 300px;
    width: 250px;
    /* background-color: brown; */
    border-radius: 20px;

}

.cn_box2 {
    height: 200px;
    width: 250px;
    /* background-color:aquamarine; */
    border-radius: 20px 20px 0px 0px;
}

.cn_box3 {
    height: 100px;
    width: 250px;
    background-color: #828282;
    border-radius: 0px 0px 20px 20px;
    padding-top: 10px;
    padding-left: 20px;
    font-size: 14px;
    color: white;
}

.iframe_html {
    width: 250px;
    height: 200px;
    border-radius: 15px 15px 0px 0px;
}

.cn_box4 {
    width: 220px;
    height: 87px;
    /* background-color: brown; */
    /* border-radius: 20px; */
}





.cn_box122_b {
    width: 31px;
    height: 26px;
    background-color: white;
    margin-left: 0px;
    margin-top: -30px;
    border: 2px solid black;
    flex-direction: row;
    border-radius: 8px;
}

.cn_box1221_b {
    display: flexbox;
    margin-left: 5px;
    margin-right: 2px;
    margin-top: 1px;
    justify-content: center;
    font-size:20px;
    color: black;
}

.cn_img_book {
    width: 250px;
    height: 200px;
    border-radius: 15px 15px 0px 0px;
}

                   
       

        `
                    }
                </style>

            </>
        )
    }
}
export default swift;