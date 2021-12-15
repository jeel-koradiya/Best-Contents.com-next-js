import React, { Component } from 'react';
import Link from 'next/link';
import { Footer } from 'components/shared';
import Head from 'next/head';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faTv, faVideo, faList, faBook, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faHome, falistdropdown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class adt extends Component {

    render() {
        return (
            <>

                {/* <script type="text/javascript" src="app.js"></script> */}
                <div className="cn_view">

                    <img src="adt.png" className="cn_subsymbol" />
                    <h1 className="cn_subname">Android Development Tools</h1>
                    <h4 className="cn_subdis">Android software development is the process by which applications are created for devices running the Android operating system. Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible. All non-Java virtual machine (JVM) languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. Some programming languages and tools allow cross-platform app support (i.e. for both Android and iOS). Third party tools, development environments, and language support have also continued to evolve and expand since the initial SDK was released in 2008. The official Android app distribution mechanism to end users is Google Play; it also allows staged gradual app release, as well as distribution of pre-release app versions to testers.</h4>
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
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Development Tutorials in Hindi

                                        <br /><b>CodeWithHarry</b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLUcsbZa0qzu3Mri2tL1FzZy-5SX75UJfb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Development Tutorial for Beginners<br />
                                        <b>Anuj Bhaiya
                                        </b>
                                    </div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLlyCyjh2pUe9wv-hU4my-Nen_SvXIzxGB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Developer Fundamentals<br /><b>
                                        Google Developers India
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
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube-nocookie.com/embed/mXjZQX3UzOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Development Tutorial For Beginners In Hindi (With Notes) 🔥<br /><b>

                                        CodeWithHarry

                                    </b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube-nocookie.com/embed/fis26HvvDII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Development for Beginners - Full Course <br /><b>freeCodeCamp.org

                                    </b></div>
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">
                                    <iframe className="iframe_html" width="560" height="315" src="https://www.youtube-nocookie.com/embed/aS__9RbCyHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Full Course - Learn Android in 9 Hours
                                        <br /><b>

                                            edureka!




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

                                <div className="cn_box2"> <a href="https://www.amazon.in/Android-Development-Cookbook-solutions-developers-ebook/dp/B07J664P3D/ref=sr_1_14?keywords=android+books&qid=1637123951&qsid=258-7668028-2250051&sr=8-14&sres=9352136063%2C8126557869%2C9352135555%2C9388176235%2C9389845203%2C9354245781%2C9389423503%2CB07BL2YS4T%2C9332523878%2CB098XV3LGZ%2CB07J664P3D%2C1645461998%2CB07BL14ZVF%2CB01D11BG8Y%2CB09C6RYHQ4%2CB014PWF9GS&srpt=ABIS_BOOK">
                                    <img src="adta.jpg" alt="" className="cn_img_book" /></a>

                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android 9 Development Cookbook 3rd Edition</div>
                                    {/* <div className="cn_box122_b">
                   <a href="https://www.amazon.in/Computer-Networks-Andrew-S-Tanenbaum/dp/0132126958"><i
                           className="cn_fab fa-amazon cn_box1221_b"></i></a>
                  
               </div> */}
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2">  <a href="https://www.amazon.in/Fundamentals-Android-App-Development-Technology/dp/9389845203/ref=sr_1_6?keywords=android+books&qid=1637123951&qsid=258-7668028-2250051&sr=8-6&sres=9352136063%2C8126557869%2C9352135555%2C9388176235%2C9389845203%2C9354245781%2C9389423503%2CB07BL2YS4T%2C9332523878%2CB098XV3LGZ%2CB07J664P3D%2C1645461998%2CB07BL14ZVF%2CB01D11BG8Y%2CB09C6RYHQ4%2CB014PWF9GS&srpt=ABIS_BOOK">
                                    <img src="adtb.jpg" alt="" className="cn_img_book" /></a>

                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Fundamentals Of Android App Development: Android  SQLite, Firebase and Unity (English Edition) </div>
                                    {/* <div className="cn_box122_b">
                   <a href="https://www.amazon.in/Data-Computer-Communications-8-Stallings/dp/8120330781"><i
                           className="cn_fab fa-amazon cn_box1221_b"></i></a>
              
               </div> */}
                                </div>
                            </div>

                            <div className="cn_box1">

                                <div className="cn_box2"><a href="https://www.amazon.in/Android-Cookbook-Problems-Solutions-Developers/dp/9352135555/ref=sr_1_4?keywords=android+books&qid=1637123951&qsid=258-7668028-2250051&sr=8-4&sres=9352136063%2C8126557869%2C9352135555%2C9388176235%2C9389845203%2C9354245781%2C9389423503%2CB07BL2YS4T%2C9332523878%2CB098XV3LGZ%2CB07J664P3D%2C1645461998%2CB07BL14ZVF%2CB01D11BG8Y%2CB09C6RYHQ4%2CB014PWF9GS&srpt=ABIS_BOOK">
                                    <img src="adtc.jpg" alt="" className="cn_img_book" />  </a>
                                </div>

                                <div className="cn_box3">
                                    <div className="cn_box4">Android Cookbook: Problems and Solutions for Android Developers
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





              
                <div className="cn_mainbox2">

<div className="cn_border1_link">
    <div className="cn_boxss">

        <div className="cn_icons1"><FontAwesomeIcon icon={faTv} /></div>
        <h3 className="cn_iconname">Online compiler</h3>

    </div>
    <div className="j_compiler_link">
        
    <a href="https://developer.android.com/courses" target="_blank" className="link_m"><div className="m_link">developer android</div></a>
    <a href="https://www.udemy.com/course/learn-android-application-development-y/" target="_blank" className="link_m"><div className="m_link1">udemy</div></a>
    <a href="https://www.tutorialspoint.com/android/index.htm" target="_blank" className="link_m"><div className="m_link2">tutorialspoint</div></a>
    <a href="https://www.coursera.org/specializations/android-app-development" target="_blank" className="link_m"><div className="m_link3">coursera</div></a>
    



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


.cn_border1_link {
    border: 2px solid #1BC787;
    border-radius: 20px;
    width: 75%;

}

.m_link{
   
    color:white;
    font-size:24px;
    text-align: center; 
    margin-right:30px;
    float:right;
    padding:0px;
    height:80px;
    width:500px;
    background:gray;
}
.m_link1{
    color:white;
    font-size:24px;
    text-align: center; 
    margin-left:30px;
    padding:0px;
    height:80px;
    width:500px;
    background:gray;
}
.m_link2{
    color:white;
    font-size:24px;
    text-align: center; 
    margin-top:30px;
    margin-right:30px;
    float:right;
    padding:0px;
    height:80px;
    width:500px;
    background:gray;
}
.m_link3{
    color:white;
    font-size:24px;
    text-align: center; 
    margin-top:30px;
    margin-left:30px;
    padding:0px;
    height:80px;
    width:500px;
    background:gray;
}
.link_m{
    text-decoration: none;
    
 
   
}
@media screen and (max-width:1500px) {
    .m_link1{
        width:40%;
        font-size:18px;
    }.m_link2{
        width:40%;font-size:18px;
    }.m_link3{
        width:40%;font-size:18px;
    }.m_link{
        width:40%;font-size:18px;
    }
}

.cn_mainbox2 {
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.cn_boxss {
    display: flex;
    background-color: #1BC787;
    width: 100%;
    border-radius: 15px 15px 0px 0px;
    height: 30px;
    margin: auto;
    margin-bottom:30px;

}
.j_compiler_link{
   
    width: 100%;
    height: 100%;
    margin-bottom:30px;
    border-radius: 0px 0px 15px 15px;
    overflow: auto;
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
export default adt;