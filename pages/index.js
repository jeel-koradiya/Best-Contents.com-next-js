
// import { PageTitle, CardList, Section } from 'components/shared';
import Link from 'next/link';
// import NotUsed from 'components/NotUsedPart';

const Home = () => (
    <>

        <div className="m_part_1_a">
            <p className="m_p1">
                Free and Best Content Curation
                <span className="m_span1">
                    Best Content.Com
                </span>
                &mdash; Read ON and Move ON &mdash;
            </p>
        </div>



        <div className="m_mainbox">
            <div className="m_textname"><b>Trending</b></div>
            <div className="m_border1">
                <section id="anima">
                    <div className="m_box">
                        <div className="m_box1">
                            <a href="/python" className="m_card python">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/Python.png" className="m_img" alt="" />

                                </div>
                                <p>Python</p>
                            </a>
                        </div>
                        <div className="m_box1">
                            <a href="/java" className="m_card java">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/JAVA.png" className="m_img" alt="" /></div>
                                <p>Java</p>
                            </a>
                        </div>
                        <div className="m_box1">
                            <a href="/javascript" className="m_card js">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/JS.png" className="m_img" alt="" /></div>
                                <p>JavaScript</p>
                            </a>
                        </div>
                        <div className="m_box1">
                            <a href="/csharp" className="m_card csharp">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/Csharp.png" className="m_img" alt="" /></div>
                                <p>C#</p>
                            </a>
                        </div>
                    </div>
                    <div className="m_box">
                        <div className="m_box1">
                            <a href="/ds" className="m_card ds">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/DS.png" className="m_img" alt="" /></div>
                                <p>Data Science</p>
                            </a>
                        </div>
                        <div className="m_box1">
                            <a href="/wd" className="m_card wd">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/WD.png" className="m_img" alt="" /></div>
                                <p>Web Design</p>
                            </a>
                        </div>
                        <div className="m_box1">
                            <a href="/ai" className="m_card ai">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/AI.png" className="m_img" alt="" /></div>
                                <p>Artificial Intelligence</p>
                            </a>
                        </div>
                        <div className="m_box1">
                            <a href="/ml" className="m_card ml">
                                <div className="m_overlay"></div>
                                <div className="m_circle"><img src="/ML.png" className="m_img" alt="" /></div>
                                <p>Machine Learning</p>
                            </a></div>
                    </div>

                </section>

            </div>

            <div className="m_mainbox">
                <div className="m_textname"><b>Latest</b></div>
                <div className="m_border1">
                    <section id="anima">
                        <div className="m_box">
                            <div className="m_box1">
                                <a href="/c" className="m_card clanguage">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/CLan.png" className="m_img" alt="" /></div>
                                    <p>C Language</p>
                                </a>
                            </div>
                            <div className="m_box1">
                                <a href="/swift" className="m_card swift">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/Swift.png" className="m_img" alt="" /></div>
                                    <p>Swift</p>
                                </a>
                            </div>
                            <div className="m_box1">
                                <a href="/cplus" className="m_card cplusplus">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/C++.png" className="m_img" alt="" /></div>
                                    <p>C++</p>
                                </a>
                            </div>
                            <div className="m_box1">
                                <a href="/php" className="m_card php">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/PHP.png" className="m_img" alt="" /></div>
                                    <p>PHP</p>
                                </a>
                            </div>
                        </div>
                        <div className="m_box">
                            <div className="m_box1">
                                <a href="/cn" className="m_card cn">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/CN.png" className="m_img" alt="" /></div>
                                    <p>Computer Network</p>
                                </a>
                            </div>
                            <div className="m_box1">
                                <a href="/os" className="m_card os">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/OS.png" className="m_img" alt="" /></div>
                                    <p>Operating System</p>
                                </a>
                            </div>
                            <div className="m_box1">
                                <a href="/iot" className="m_card iot">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/IOT.png" className="m_img" alt="" /></div>
                                    <p>Internet Of Things</p>
                                </a>
                            </div>
                            <div className="m_box1">
                                <a href="/cc" className="m_card cc">
                                    <div className="m_overlay"></div>
                                    <div className="m_circle"><img src="/CC.png" className="m_img" alt="" /></div>
                                    <p>Cloud Computing</p>
                                </a></div>
                        </div>

                    </section>

                </div>
            </div>


        </div>

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
                #anima .m_card:hover {
                    transform: translateY(-5px) scale(1.005) translateZ(0);
                    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
                        0 24px 46px var(--box-shadow-color);
                }
                
                #anima .m_card:hover .m_overlay {
                    transform: scale(4) translateZ(0);
                }
                
                #anima .m_card:hover .m_circle {
                    border-color: var(--bg-color-light);
                    background: var(--bg-color);
                }
                
                #anima .m_card:hover .m_circle:after {
                    background: var(--bg-color-light);
                }
                
                #anima .m_card:hover p {
                    color: var(--text-color-hover);
                }
                
                #anima .m_card:active {
                    transform: scale(1) translateZ(0);
                    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
                        0 15px 24px var(--box-shadow-color);
                }
                
                #anima .m_card p {
                    font-size: 17px;
                    color: #4C5656;
                    margin-top: 30px;
                    z-index: 1000;
                    transition: color 0.3s ease-out;
                }
                
                #anima .m_circle {
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
                
                #anima .m_circle:after {
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
                
                
                
                #anima .m_overlay {
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
                
                   `

            }
        </style>
    </>
)

export default Home
