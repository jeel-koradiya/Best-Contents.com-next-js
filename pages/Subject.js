import Link from 'next/link';
import { Footer } from 'components/shared';

const Subject = () => {
    return (
        <>
      <div className="s_part_1_a">
        <p className="s_p1">
          <span className="s_span1">
            Subjects
          </span>

        </p>
      </div>

      
      <div className="s_mainbox">
        <div className="s_border1">
          <section id="anima">
            <div className="s_box">
              <div className="s_box1">
                <a href="/iot" className="s_card iot">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="IOT.png" alt="" /></div>
                  <p>Internet of Things</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/os" className="s_card os">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="OS.png" alt="" /></div>
                  <p>Operating System</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/cao" className="s_card cao">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="CAO.png" alt="" /></div>
                  <p className="s_p11">Computer Architecture</p>
                  <p className="s_p12">Organization</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/adt" className="s_card adt">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="ADT.png" alt="" /></div>
                  <p className="s_p11">Android</p>
                  <p className="s_p12">Development Tools</p>
                </a>
              </div>
            </div>
            <div className="s_box">
              <div className="s_box1">
                <a href="/ds" className="s_card ds">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="DS.png" alt="" /></div>
                  <p>Data Structure</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/wd" className="s_card wd">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="WD.png" alt="" /></div>
                  <p>Web Design</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/cn" className="s_card cn">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="CN.png" alt="" /></div>
                  <p>Computer Network</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/se" className="s_card se">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="SE.png" alt="" /></div>
                  <p>Software Engineering</p>
                </a>
              </div>
            </div>

            <div className="s_box">
              <div className="s_box1">
                <a href="/ai" className="s_card ai">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="AI.png" alt="" /></div>
                  <p>Artificial Intelligence</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/ml" className="s_card ml">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="ML.png" alt="" /></div>
                  <p>Machine Learning</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/cc" className="s_card cc">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="CC.png" alt="" /></div>
                  <p>Cloud Computing</p>
                </a>
              </div>
              <div className="s_box1">
                <a href="/toc" className="s_card toc">
                  <div className="s_overlay"></div>
                  <div className="s_circle"><img src="TOC.png" alt="" /></div>
                  <p>Theory of Computation</p>
                </a>
              </div>
            </div>

            </section>
            </div>
            </div>

            <Footer/>

            <style jsx>
                {
                    `
                    
                    body {
                        margin: 0px;
                        padding: 0px;
                    }
                    
                    
                    
                    /* PART_1 */
                    
                    .m_part_1_a {
                        background-color: #2D2D37;
                        height: 100%;
                        width: 100%;
                        justify-content: center;
                        align-items: center;
                        flex-direction: row;
                    
                    }
                    
                    .m_line_1 {
                        color: white;
                        text-align: center;
                        padding-top: 2%;
                        font-family: 'Times New Roman';
                        font-size: 50px;
                        font-style: bold;
                    
                    }
                    
                    .m_line_2 {
                        text-align: center;
                    
                    
                    }
                    
                    .m_line_3 {
                        color: white;
                        text-align: center;
                        padding-bottom: 2%;
                        font-family: Segoe UI;
                        font-size: 22px;
                        font-style: semibold;
                    
                    }
                    
                    img{
                        z-index: 1;
                    }
                    
                     .m_img{
                        width: 100px;
                        height:110px;
                    } 
                    
                    /* SPECIAL_TEXT_ANIMATION */
                    
                    .m_p1 {
                        font: 400 1em/1.5 'Times New Roman';
                        background: #2D2D37;
                        color: rgba(255, 255, 255, 1);
                        text-align: center;
                        margin: 0;
                        text-align: center;
                    
                        text-transform: uppercase;
                        letter-spacing: 0.5em;
                        display: inline-block;
                        /* border: 4px double rgba(255, 255, 255, 0.25); */
                        /* border-width: 4px 0; */
                        padding: 1.5em 0em;
                        position: relative;
                        top: 18%;
                        left: 50%;
                        width: 40em;
                        margin: 0 0 0 -20em;
                    
                    }
                    
                    
                    @media screen and (max-width:658px) {
                        .m_p1 {
                            left: 20em;
                            width: 100%;
                    
                        }
                    
                    }
                    
                    
                    .m_p1 .m_span1 {
                        font: 700 3em/1 'Times New Roman';
                        letter-spacing: 0;
                        padding: 0.25em 0 0.325em;
                        display: block;
                        margin: 0;
                        text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
                        /* Clip Background Image */
                        /* background: url(symbols/line_xyz.png) repeat-y; */
                        /* -webkit-background-clip: text; */
                        /* background-clip: text; */
                        /* Animate Background Image */
                        /* -webkit-text-fill-color: transparent; */
                        /* -webkit-animation: aitf 80s linear infinite; */
                        /* Activate hardware acceleration for smoother animations */
                        /* -webkit-transform: translate3d(0, 0, 0); */
                        /* -webkit-backface-visibility: hidden; */
                    }
                    
                    /* Animate Background Image */
                    /* @-webkit-keyframes aitf {
                        0% {
                            background-position: 0% 50%;
                        }
                    
                        100% {
                            background-position: 100% 50%;
                        }
                    } */
                    
                    
                    /* BODY_PART */
                    
                    .m_mainbox {
                        height: 1185px;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    
                    }
                    
                    .m_border1 {
                        border: 4px double #1BC787;
                        border-width: 4px 0;
                        border-radius: 20px;
                        width: 100%;
                    }
                    
                    .m_textname {
                        font-size: 20px;
                        color: #1BC787;
                        margin-bottom: 10px;
                        margin-top: 20px
                    }
                    
                    
                    #anima .m_box {
                        height: 250px;
                        width: 100%;
                        /* background-color: aqua; */
                    
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-evenly;
                    }
                    
                    @media screen and (max-width:768px) {
                    
                        .m_mainbox {
                            height: 2045px;
                        }
                    
                        #anima .m_box {
                            display: grid;
                            width: 100%;
                            height: 470px;
                            grid-gap: 0px;
                            grid-template-columns: repeat(2, 200px);
                    
                        }
                    
                    
                    }
                    
                    @media screen and (max-width:480px) {
                    
                        .m_mainbox {
                            height: 4054px;
                        }
                    
                        #anima .m_box {
                            display: grid;
                            width: 100%;
                            height: 970px;
                            grid-gap: 0px;
                            grid-template-columns: repeat(1, 200px);
                    
                        }
                    
                        .m_p1 {
                            width: 100%;
                            font: 400 1em/1 "Neuton";
                            /* left: 70%; */
                        }
                    
                        .m_p1 .m_span1 {
                            font: 700 2em/1 "Oswald", sans-serif;
                    
                        }
                    
                    
                    
                    }
                    
                    #anima .m_box1 {
                        min-height: 200px;
                        min-width: 200px;
                        /* background-color: brown; */
                        border-radius: 20px;
                    
                    }
                    
                    
                    
                    
                    /* Treading and latest */
                    
                    .iot {
                        --bg-color: #ec7234;
                        --bg-color-light: #ffebdb;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .os {
                        --bg-color: #5e99e4;
                        --bg-color-light: #c1e4f6;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .cao {
                        --bg-color: #f8cc4f;
                        --bg-color-light: #ffebb2;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .adt {
                        --bg-color: #e96d6f;
                        --bg-color-light: #b9d4e6;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .ds {
                        --bg-color: #8993be;
                        --bg-color-light: #ccccdf;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .wd {
                        --bg-color: #f8cc4f;
                        --bg-color-light: #ffebb2;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .cn {
                        --bg-color: #ed6830;
                        --bg-color-light: #f1b394;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .se {
                        --bg-color: #bcc3f3;
                        --bg-color-light: #e3e6f9;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .ai {
                        --bg-color: #e6892e;
                        --bg-color-light: #b7cbdb;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .ml {
                        --bg-color: #5c6abf;
                        --bg-color-light: #c5cae7;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .cc {
                        --bg-color: #a279dd;
                        --bg-color-light: #ceb9e9;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .toc {
                        --bg-color: #649ad2;
                        --bg-color-light: #bbd3eb;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .js {
                        --bg-color: #f8cc4f;
                        --bg-color-light: #ffebb2;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .java {
                        --bg-color: #e96d6f;
                        --bg-color-light: #b9d4e6;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .php {
                        --bg-color: #8993be;
                        --bg-color-light: #ccccdf;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .python {
                        --bg-color: #f8cc4f;
                        --bg-color-light: #ffebb2;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .swift {
                        --bg-color: #ed6830;
                        --bg-color-light: #f1b394;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    
                    
                    .clanguage {
                        --bg-color: #5c6abf;
                        --bg-color-light: #c5cae7;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .csharp {
                        --bg-color: #a279dd;
                        --bg-color-light: #ceb9e9;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    .cplusplus {
                        --bg-color: #649ad2;
                        --bg-color-light: #bbd3eb;
                        --text-color-hover: #4C5656;
                        --box-shadow-color: rgba(220, 233, 255, 0.48);
                    }
                    
                    
                    #anima .m_card {
                        width: 200px;
                        height: 200px;
                        background: #fff;
                        border-radius: 10px;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: relative;
                        box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
                        transition: all 0.3s ease-out;
                        text-decoration: none;
                        padding-top: 10px;
                    }
                    .m_img{
                        width: 60px;
                        height:65px;
                    }
                    /* PART_1 */

                    .s_part_1_a {
                       background-color: #2D2D37;
                       height: 100%;
                       width: 100%;
                       justify-content: center;
                       align-items: center;
                       flex-direction: row;
                   
                   }
                   
                   
                   
                   .s_line_1 {
                       color: white;
                       text-align: center;
                       padding-top: 2%;
                       font-family: Segoe UI;
                       font-size: 50px;
                       font-style: bold;
                   
                   }
                   
                   .s_line_2 {
                       text-align: center;
                   
                   
                   }
                   
                   .s_line_3 {
                       color: white;
                       text-align: center;
                       padding-bottom: 2%;
                       font-family: Segoe UI;
                       font-size: 22px;
                       font-style: semibold;
                   
                   }
                   
                   .s_p11{
                       margin-top: 0px;
                       margin-bottom: -40px;
                   }
                   
                   .s_p12{
                       margin-top: 0px;
                       margin-bottom: 3px;
                   }
                   
                   /* SPECIAL_TEXT_ANIMATION */
                   
                   .s_p1 {
                       font: 400 1em/1.5 "Neuton";
                       background: #2D2D37;
                       color: rgba(255, 255, 255, 1);
                       text-align: center;
                       margin: 0;
                       text-align: center;
                   
                       text-transform: uppercase;
                       letter-spacing: 0.5em;
                       display: inline-block;
                       /* border: 4px double rgba(255, 255, 255, 0.25); */
                       /* border-width: 4px 0; */
                       padding: 1.5em 0em;
                       position: relative;
                       top: 18%;
                       left: 50%;
                       width: 40em;
                       margin: 0 0 0 -20em;
                   
                   }
                   
                   
                   @media screen and (max-width:658px) {
                       .s_p1 {
                           left: 20em;
                           width: 100%;
                   
                       }
                   
                   }
                   
                   
                   .s_p1 .s_span1 {
                       font: 700 3em/1 "Oswald", sans-serif;
                       letter-spacing: 0;
                       padding: 0.25em 0 0.325em;
                       display: block;
                       margin: 0 auto;
                       text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
                       /* Clip Background Image */
                       /* background: url(symbols/line_xyz.s_png) repeat-y;
                       -webkit-background-clip: text;
                       background-clip: text; */
                       /* Animate Background Image */
                       /* -webkit-text-fill-color: transparent;
                       -webkit-animation: aitf 80s linear infinite; */
                       /* Activate hardware acceleration for smoother animations */
                       /* -webkit-transform: translate3d(0, 0, 0);
                       -webkit-backface-visibility: hidden; */
                   }
                   
                   /* Animate Background Image */
                   /* @-webkit-keyframes aitf {
                       0% {
                           background-position: 0% 50%;
                       }
                   
                       100% {
                           background-position: 100% 50%;
                       }
                   } */
                   
                   
                   /* BODY_PART */
                   
                   .s_mainbox {
                       height: 900px;
                       width: 100%;
                       display: flex;
                       flex-direction: column;
                       align-items: center;
                       justify-content: center;
                   
                   }
                   
                   .s_border1 {
                       /* border: 2px double #1BC787; */
                       /* border: 4px double #1BC787; */
                       border-width: 4px 0;
                       border-radius: 20px;
                       width: 100%;
                   
                   
                   }
                   
                   .s_textname {
                       font-size: 20px;
                       color: #1BC787;
                       margin-bottom: 10px;
                       margin-top: 20px
                   }
                   
                   
                   .s_box {
                       height: 250px;
                       width: 100%;
                       /* background-color: aqua; */
                   
                   
                       display: flex;
                       flex-direction: row;
                       align-items: center;
                       justify-content: space-evenly;
                   }
                   
                   @media screen and (max-width:768px) {
                   
                       .s_mainbox {
                           height: 1500px;
                       }
                   
                       .s_box {
                           display: grid;
                           width: 100%;
                           height: 470px;
                           grid-gap: 0px;
                           grid-template-columns: repeat(2, 200px);
                   
                       }
                   
                   
                   }
                   
                   @media screen and (max-width:480px) {
                   
                       .s_mainbox {
                           height: 3000px;
                       }
                   
                       .s_box {
                           display: grid;
                           width: 100%;
                           height: 970px;
                           grid-gap: 0px;
                           grid-template-columns: repeat(1, 200px);
                   
                       }
                   
                       .s_p1 {
                           width: 100%;
                           font: 400 1em/1 "Neuton";
                           /* left: 70%; */
                       }
                   
                       .s_p1 .s_span1 {
                           font: 700 2em/1 "Oswald", sans-serif;
                   
                       }
                   
                   
                   
                   }
                   
                   .s_box1 {
                       min-height: 200px;
                       min-width: 200px;
                       background-color: white;
                       border-radius: 20px;
                       display: flex;
                       /* border: 2px black solid; */
                       flex-direction: column;
                       align-items: center;
                       justify-content: center;
                   
                   }
                   
                   .s_lname {
                       font-size: 20px;
                   }
                   
                   
                   
                   /* Languages */
                   
                   
                   .iot {
                       --bg-color: #ec7234;
                       --bg-color-light: #ffebdb;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .os {
                       --bg-color: #5e99e4;
                       --bg-color-light: #c1e4f6;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .cao {
                       --bg-color: #f8cc4f;
                       --bg-color-light: #ffebb2;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .adt {
                       --bg-color: #e96d6f;
                       --bg-color-light: #b9d4e6;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .ds {
                       --bg-color: #8993be;
                       --bg-color-light: #ccccdf;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .wd {
                       --bg-color: #f8cc4f;
                       --bg-color-light: #ffebb2;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .cn {
                       --bg-color: #ed6830;
                       --bg-color-light: #f1b394;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .se {
                       --bg-color: #bcc3f3;
                       --bg-color-light: #e3e6f9;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .ai {
                       --bg-color: #e6892e;
                       --bg-color-light: #b7cbdb;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .ml {
                       --bg-color: #5c6abf;
                       --bg-color-light: #c5cae7;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .cc {
                       --bg-color: #a279dd;
                       --bg-color-light: #ceb9e9;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .toc {
                       --bg-color: #649ad2;
                       --bg-color-light: #bbd3eb;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .js {
                       --bg-color: #f8cc4f;
                       --bg-color-light: #ffebb2;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .java {
                       --bg-color: #e96d6f;
                       --bg-color-light: #b9d4e6;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .php {
                       --bg-color: #8993be;
                       --bg-color-light: #ccccdf;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .python {
                       --bg-color: #f8cc4f;
                       --bg-color-light: #ffebb2;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .swift {
                       --bg-color: #ed6830;
                       --bg-color-light: #f1b394;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   
                   
                   .clanguage {
                       --bg-color: #5c6abf;
                       --bg-color-light: #c5cae7;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .csharp {
                       --bg-color: #a279dd;
                       --bg-color-light: #ceb9e9;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   .cplusplus {
                       --bg-color: #649ad2;
                       --bg-color-light: #bbd3eb;
                       --text-color-hover: #4C5656;
                       --box-shadow-color: rgba(220, 233, 255, 0.48);
                   }
                   
                   
                   #anima .s_card {
                       width: 200px;
                       height: 200px;
                       background: #fff;
                       border-radius: 10px;
                       overflow: hidden;
                       display: flex;
                       flex-direction: column;
                       justify-content: center;
                       align-items: center;
                       position: relative;
                       box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
                       transition: all 0.3s ease-out;
                       text-decoration: none;
                       padding-top: 10px;
                   }
                   
                   #anima .s_card:hover {
                       transform: translateY(-5px) scale(1.005) translateZ(0);
                       box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
                           0 24px 46px var(--box-shadow-color);
                   }
                   
                   #anima .s_card:hover .s_overlay {
                       transform: scale(4) translateZ(0);
                   }
                   
                   #anima .s_card:hover .s_circle {
                       border-color: var(--bg-color-light);
                       background: var(--bg-color);
                   }
                   
                   #anima .s_card:hover .s_circle:after {
                       background: var(--bg-color-light);
                   }
                   
                   #anima .s_card:hover p {
                       color: var(--text-color-hover);
                   }
                   
                   #anima .s_card:active {
                       transform: scale(1) translateZ(0);
                       box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
                           0 15px 24px var(--box-shadow-color);
                   }
                   
                   #anima .s_card p {
                       font-size: 17px;
                       color: #4C5656;
                       margin-top: 30px;
                       z-index: 1000;
                       transition: color 0.3s ease-out;
                   }
                   
                   #anima .s_circle {
                       width: 123px;
                       height: 133px;
                       border-radius: 50%;
                       background: #fff;
                       border: 2px solid var(--bg-color);
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       position: relative;
                       /* z-index: 1; */
                       transition: all 0.3s ease-out;
                   }
                   
                   #anima .s_circle:after {
                       content: "";
                       width: 113px;
                       height: 107px;
                       display: block;
                       position: absolute;
                       background: var(--bg-color);
                       border-radius: 50%;
                       top: 3px;
                       left: 3px;
                       transition: opacity 0.3s ease-out;
                   }
                   
                   /* .s_circle svg {
                       z-index: 10000;
                       transform: translateZ(0);
                   } */
                   
                   #anima .s_overlay {
                       width: 118px;
                       position: absolute;
                       height: 118px;
                       border-radius: 50%;
                       background: var(--bg-color);
                       top: 10px;
                       left: 40px;
                       z-index: 0;
                       transition: transform 0.3s ease-out;
                   }
                   
                   #anima .s_card .s_ppp {
                       font-size: 17px;
                       color: #4C5656;
                       margin-top: 30px;
                       z-index: 1000;
                       transition: color 0.3s ease-out;
                   }
                   
                   #anima .s_card:hover p {
                       color: var(--text-color-hover);
                   }
                   
                   
                
                   `

                }
            </style>
        </>
    );
};

export default Subject;