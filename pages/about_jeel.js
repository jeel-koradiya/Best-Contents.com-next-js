import Link from 'next/link';


const about_jeel = () => {
    return (
        <>
        
            <div className="ad_mainbox">
                <div className="ad_box_0">
                    <div className="ad_box2_0"></div>
                    <div className="ad_box1_0"><b>
                        <div className="ad_text1_0">Hello</div>
                        <div className="ad_text2_0">I'm Jeel</div>
                        <div className="ad_text1_0">Web designer and developer</div>
                    </b>
                    </div>

                </div>
                <div className="ad_box3">
                    <div className="ad_box4">
                        <div className="ad_rect1"></div>
                        <div className="ad_rect2"><img src="jeel_img1.jpeg" className="jeel_image" /></div>
                    </div>
                    <div className="ad_box5"><b>
                        <div className="ad_text3">About Me</div>
                        <hr className="ad_line1_0" />
                        <div className="ad_text4">My name is Jeel Koradiya and I am founder of BestContent.com. I am a Web
                            Developer and Designer. I have completed my internship of Web development. We have worked on
                            JSON handling with PHP and logic development with JavaScript. I want to use my skills, my
                            experiences, and my own journey to help
                            others.



                        </div>
                        {/* <div className="ad_space1"> <button className="ad_button button2">Download Resume</button></div> */}
                    </b>

                    </div>
                </div>
                <div className="ad_box6">
                    <div className="ad_box7">
                        <div className="ad_text5"><b>Services</b></div>
                        <hr className="ad_line1_0" />
                        <div className="ad_text6"><b>This website has been created by us(me and my friend darshan).I have also created an
                            e-commerce project in Android and also created project in python. I also re-design many
                            websites. I am a good designer and developer.
                        </b></div>
                    </div>
                    <div className="ad_mainbox0">

                        <div className="ad_box8">
                            <div className="ad_box9">
                                <div className="ad_">
                                    <a href="#" className="ad_card html">
                                        <div className="ad_overlay"></div>
                                        <div className="ad_circle"><img src="/WebDevelopment.png" alt="hii"
                                            className="ad_img_01" /></div>

                                    </a>

                                </div>

                                <div className="ad_">
                                    <a href="#" className="ad_card css">
                                        <div className="ad_overlay"></div>
                                        <div className="ad_circle"><img src="/WebDesign.png" alt="hii"
                                            className="ad_img_01" /></div>

                                    </a>

                                </div>

                            </div>
                            <div className="ad_box9">
                                <div className="ad_">
                                    <a href="#" className="ad_card java">
                                        <div className="ad_overlay"></div>
                                        <div className="ad_circle"><img src="/Android.png" alt="hii" className="ad_img_02" /></div>

                                    </a>

                                </div>

                                <div className="ad_">
                                    <a href="#" className="ad_card js">
                                        <div className="ad_overlay"></div>
                                        <div className="ad_circle"><img src="/Python1.png" alt="hii" className="ad_img_02" /></div>

                                    </a>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <style jsx>
                {
                    `
                    * {
                    margin: 0px;
                    padding: 0px;
                }
                
                .ad_mainbox {
                    width: 100%;
                    height: 1950px;
                    background-color: #2C2C2C;
                }
                .jeel_image{
                    width:250px;
                    height:350px;
                }
                
                .ad_box_0{
                    width: 100%;
                    height: 700px;
                    /* background: cyan; */
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    justify-content: center;
                }
                
                .ad_box1_0{
                    width: 70%;
                    height: 700px;
                    background: #474747;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    align-items: center;
                    justify-content: center;
                
                    color: white;
                }
                
                .ad_box2_0{
                    width: 30%;
                    height: 700px;
                    background: #1BC787;
                }
                
                .ad_text1_0{
                    width: 410px;
                    height: 30px;
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 25px;
                    /* background-color: brown; */
                    /* border-radius: 20px; */
                }
                
                .ad_text2_0{
                    width: 410px;
                    height: 70px;
                    color: #1BC787;
                    font-size: 50px;
                    font-family: 'Times New Roman', Times, serif;
                    /* background-color: brown; */
                    /* border-radius: 20px; */
                }
                
                .ad_text4 {
                    /* margin: 50px 14%; */
                    /* text-align: justify; */
                    width: 80%;
                    /* height: 40%; */
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 20px;
                    margin-left: 15%;
                    color: #828282;
                    justify-content: center;
                    align-items: center;
                    /* margin-bottom: 500px; */
                    /* background-color: brown; */
                    /* border-radius: 20px; */
                }
                
                .ad_text3 {
                    width: 80%;
                    height: 70px;
                    color: white;
                    font-size: 50px;
                    font-family: 'Times New Roman', Times, serif;
                    margin-top: 10%;
                    margin-left: 15%;
                    /* background-color: brown; */
                    /* border-radius: 20px; */
                }
                
                .ad_box3 {
                    height: 500px;
                    width: 100%;
                    background-color: #313131;
                    display: flex;
                    flex-direction: row;
                    text-align: left;
                    align-items: center;
                    justify-content: center;
                }
                
                .ad_box4 {
                    height: 500px;
                    width: 40%;
                    background: #313131;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-end;
                
                }
                
                .ad_box5 {
                    height: 500px;
                    width: 60%;
                    background-color: #313131;
                    display: flex;
                    flex-direction: row;
                    text-align: left;
                    /* align-items: center; */
                    justify-content: flex-start;
                
                    color: white;
                
                }
                
                .ad_rect1 {
                    height: 348px;
                    width: 250px;
                    border: 2px double #1BC787;
                    display: inline-block;
                    margin: 40px 5% 10px 10%;
                
                }
                
                .ad_rect2 {
                    height: 350px;
                    width: 250px;
                    background: #fff;
                    display: inline-block;
                    margin: 20px 5% 40px -266px;
                
                }
                
                hr:not([size]){
                    height:5px;
                }
                .ad_line1_0 {
                    height: 5px;
                    width: 200px;
                    margin-top: 10px;
                    border: none;
                    margin-bottom: 10px;
                    margin-left: 15%;
                    background-color: #1BC787;
                }
                
                .ad_space1 {
                    margin-top: 30px;
                    margin-left: 15%;
                
                }
                
                .ad_button {
                    background-color: #313131;
                    /* Green */
                    border: 4px double #1BC787;
                    color: rgb(255, 255, 255);
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    /* margin: 4px 2px; */
                    cursor: pointer;
                    -webkit-transition-duration: 0.4s;
                    /* Safari */
                    transition-duration: 0.4s;
                }
                
                .ad_button2:hover {
                    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
                }
                
                
                .ad_box6 {
                    width: 100%;
                    height: 700px;
                    background: #2C2C2C;
                }
                
                .ad_text5 {
                    width: 80%;
                    height: 100px;
                    color: white;
                    font-size: 50px;
                    font-family: 'Times New Roman', Times, serif;
                    padding-top: 2%;
                    margin-left: 15%;
                    /* background-color: brown; */
                    /* border-radius: 20px; */
                }
                
                .ad_text6 {
                    /* margin: 50px 14%; */
                    /* text-align: justify; */
                    width: 80%;
                    /* height: 40%; */
                    font-family: 'Times New Roman', Times, serif;
                    font-size: 20px;
                    margin-left: 15%;
                    margin-right: 15%;
                    justify-content: center;
                    align-items: center;
                    color: #828282;
                    /* margin-bottom: 500px; */
                    /* background-color: brown; */
                    /* border-radius: 20px; */
                }
                
                .ad_box7 {
                    /* height: 220px; */
                    width: 100%;
                    background: #2C2C2C;
                
                }
                
                .ad_mainbox0 {
                    height: 500px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                
                }
                
                .ad_box8 {
                    /* border: 2px double #1BC787; */
                    /* border: 4px double #1BC787; */
                    border-width: 4px 0;
                    border-radius: 20px;
                    width: 50%;
                
                
                }
                
                .ad_box9 {
                    height: 250px;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-evenly;
                }
                
                .ad_box10 {
                    min-height: 200px;
                    min-width: 300px;
                    background-color: white;
                    border-radius: 20px;
                
                }
                
                
                /* service card */
                
                
                .html {
                    --bg-color: #ec7234;
                    --bg-color-light: #ffebdb;
                    --text-color-hover: #4C5656;
                    --box-shadow-color: rgba(220, 233, 255, 0.48);
                }
                
                .css {
                    --bg-color: #5e99e4;
                    --bg-color-light: #c1e4f6;
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
                
                
                .ad_card {
                    min-width: 300px;
                    min-height: 200px;
                    background: var(--bg-color);
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
                    /* padding-top: 10px; */
                }
                
                .ad_card:hover {
                    transform: translateY(-5px) scale(1.005) translateZ(0);
                    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11),
                    0 24px 46px var(--box-shadow-color);
                }
                
                .ad_card:hover .ad_overlay {
                    transform: scale(4) translateZ(0);
                }
                
                .ad_card:hover .ad_circle {
                    border-color: var(--bg-color-light);
                    background: var(--bg-color);
                }
                
                .ad_card:hover .ad_circle:after {
                    background: var(--bg-color-light);
                }
                
                .ad_card:hover p {
                    color: var(--text-color-hover);
                }
                
                .ad_card:active {
                    transform: scale(1) translateZ(0);
                    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
                        0 15px 24px var(--box-shadow-color);
                }
                
                .ad_card p {
                    font-size: 17px;
                    color: #4C5656;
                    margin-top: 30px;
                    z-index: 1000;
                    transition: color 0.3s ease-out;
                }
                
                .ad_circle {
                    width: 261px;
                    height: 131px;
                    border-radius: 15px;
                    background: #fff;
                    border: 2px solid var(--bg-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    /* z-index: 1; */
                    transition: all 0.3s ease-out;
                }
                
                .ad_circle:after {
                    content: "";
                    width: 245px;
                    height: 117px;
                    display: block;
                    position: absolute;
                    background: var(--bg-color);
                    border-radius: 15px;
                    top: 5px;
                    left: 6px;
                    transition: opacity 0.3s ease-out;
                }
                
                /* .ad_circle svg {
                    z-index: 10000;
                    transform: translateZ(0);
                } */
                
                .ad_overlay {
                    width: 220px;
                    position: absolute;
                    height: 130px;
                    border-radius: 15px;
                    background: var(--bg-color);
                    top: 35px;
                    left: 40px;
                    z-index: 0;
                    transition: transform 0.3s ease-out;
                }
                
                .ad_img_01{
                    z-index: 1; 
                    height: 100px;
                    display: flex;
                    margin-top: 0px;
                }
                
                .ad_img_02{
                    z-index: 1;
                }
                /* complete service card */
                
                
                @media screen and (max-width:870px) {
                
                    .ad_mainbox {
                        height: 2400px;
                    }
                
                    .ad_mainbox0 {
                        height: 950px;
                    }
                
                    .ad_box9 {
                        display: grid;
                        width: 100%;
                        height: 470px;
                        grid-gap: 0px;
                        grid-template-columns: repeat(1);
                
                    }
                }
                
                
                
                
                @media (max-width:767px) {
                    .ad_mainbox {
                        height: 2800px;
                    }
                
                    .ad_box_0{
                        height: 700px;
                        flex-direction: column;
                
                    }
                
                    .ad_box1_0{
                        width: 100%;
                        height: 200px;
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        align-items: center;
                        justify-content: center;
                
                        color: white;
                    }
                
                    .ad_box2_0{
                        width: 100%;
                        height: 500px;
                        background: #1BC787;
                    }
                
                    .ad_box3 {
                        height: 800px;
                        flex-direction: column;
                
                    }
                
                    .ad_box4 {
                        width: 100%;
                        height: 400px;
                        align-items: center;
                        justify-content: center;
                
                    }
                
                    .ad_box5 {
                        width: 100%;
                        height: 600px;
                        justify-content: center;
                
                    }
                
                    .ad_rect1 {
                        display: inline-block;
                        margin: 0px;
                        align-items: center;
                
                    }
                
                    .ad_rect2 {
                        display: inline-block;
                        margin: 15px 0px 40px -226px;
                
                    }
                
                
                
                    .ad_box6 {
                        width: 100%;
                        height: 800px;
                        background: #2C2C2C;
                    }
                
                }
                
                @media screen and (max-width:480px) {
                
                    .ad_mainbox {
                        height: 2900px;
                    }
                
                    .ad_box1_0{
                        width: 100%;
                        height: 150px;
                        padding-top: 20px;
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        align-items: center;
                        justify-content: flex-start;
                
                        color: white;
                    }
                
                    .ad_text1_0{
                        width: 100%;
                        height: 20px;
                        font-size: 20px;
                        /* margin-top: -20px; */
                    }
                
                    .ad_box4 {
                        padding-top: 20px;
                    }
                
                    .ad_text2_0{
                        width: 100%;
                        font-size: 40px;
                        height: 50px;
                    }
                
                    .ad_text3 {
                        width: 80%;
                        font-size: 40px;
                        height: 50px;
                    }
                
                    .ad_box7 {
                        margin-top: 30px;
                    }
                
                    .ad_space1 {
                        margin-bottom: 10px;
                    }
                
                    .ad_box6 {
                        width: 100%;
                        height: 900px;
                        background: #2C2C2C;
                    }
                
                }
                
                @media screen and (max-width:480px) {
                
                    .ad_mainbox {
                        height: 3020px;
                    }
                
                    .ad_text5 {
                        margin-top: 30%;
                    }
                
                    .ad_box4 {
                
                
                        justify-content: center;
                        align-items: center;
                
                    }
                
                    .ad_rect2 {
                        width: 80%;
                        margin: auto;
                
                    }
                
                    .ad_rect1 {
                        display: none;
                    }
                
                    .ad_text1_0{
                        font-size: 15px;
                        height: 15px;
                    }
                
                    .ad_text2_0{
                        font-size: 18px;
                        height: 20px;
                    }
                
                
                    .ad_box10 {
                        min-width: 250px;
                    }
                
                    .ad_card {
                        min-width: 250px;
                    }
                }
                
       

        `
                }
            </style>

        </>
    )
}
export default about_jeel;