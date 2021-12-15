import React, { Component } from 'react';
import Link from 'next/link';
import { Footer } from 'components/shared';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faTv, faVideo, faList, faBook, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHome, falistdropdown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class css extends Component {

    render() {
        return (
            <>

                {/* <script type="text/javascript" src="app.js"></script> */}
                <div className="cn_view">

                    <img src="CSS.png" className="cn_subsymbol" />
                    <h1 className="cn_subname">CSS</h1>
                    <h4 className="cn_subdis">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
                        CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.</h4>
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
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript & More
                                        <br /><b>CodeWithHarry</b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL0b6OzIxLPbzDsI5YXUa01QzxOWyqmrWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">CSS Tutorial in Hindi / Urdu<br />
                                        <b>Yahoo Baba
                                        </b>
                                    </div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">CSS Tutorial for Beginners<br /><b>
                                        EJ Media
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
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/Edsxf_NBFrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">CSS Tutorial In Hindi(With Notes)🔥<br /><b>

                                        CodeWithHarry

                                    </b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/hkQv0NIxKQY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Learn Complete CSS In One Video In Hindi <br /><b>Thapa Technical
                                    </b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/1Rs2ND1ryYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">CSS Tutorial - Zero to Hero (Complete Course)
                                        <br /><b>
                                            freeCodeCamp.org



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

                                <div className="cn_box2"> <a href="https://www.amazon.in/HTML-CSS-Design-Build-Websites/dp/1118871642/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1636709156&sr=1-1-61f4c597-7a45-4a97-bd75-c52903f8ee93">
                                    <img src="htmla.jpg" alt="" className="cn_img_book" /></a>

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

                                <div className="cn_box2">  <a href="https://www.amazon.in/HTML-CSS-Complete-Reference-Fifth/dp/0070701946/ref=sr_1_5?crid=3K2FMF19L65BQ&keywords=css+book&qid=1636709156&qsid=258-7668028-2250051&sprefix=css%2Caps%2C428&sr=8-5&sres=1118907442%2C8183335152%2CB07DQMNHF5%2C0070701946%2C1118008189%2C8131786978%2C1406366846%2CB00JUI6LQU%2C1636699049%2C9389686962%2CB07BFTJQB1%2C9389552419%2CB08Y9N57QT%2CB09C4T141S%2CB07TWXMLX3%2CB07CBZRFTD&srpt=ABIS_BOOK">
                                    <img src="htmlb.jpg" alt="" className="cn_img_book" /></a>

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

                                <div className="cn_box2"><a href="https://www.amazon.in/Mastering-HTML-CSS-Javascript-Publishing/dp/8183335152/ref=sr_1_3?crid=3K2FMF19L65BQ&keywords=css+book&qid=1636709156&qsid=258-7668028-2250051&sprefix=css%2Caps%2C428&sr=8-3&sres=1118907442%2C8183335152%2CB07DQMNHF5%2C0070701946%2C1118008189%2C8131786978%2C1406366846%2CB00JUI6LQU%2C1636699049%2C9389686962%2CB07BFTJQB1%2C9389552419%2CB08Y9N57QT%2CB09C4T141S%2CB07TWXMLX3%2CB07CBZRFTD&srpt=ABIS_BOOK">
                                    <img src="cssc.jpg" alt="" className="cn_img_book" />  </a>
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

                            <iframe src="https://trinket.io/embed/html/352bc08aa4?runMode=autorun" width="100%" height="394" frameBorder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

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
export default css;