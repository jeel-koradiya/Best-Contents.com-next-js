import Link from 'next/link';
import { Footer } from 'components/shared';


const about_main = () => {
    return (
        <>

            <div className="part_1_a">
                <p className="p1">
                    <span className="span1">
                        About
                    </span>

                </p>
            </div>





            <div className="mainbox">
                <div className="border1">

                    <div className="a_box">

                        <div className="a_box1">
                            <a href="/about_darshan">

                                <div className="a_box2">

                                </div>
                            </a>

                            <div className="a_box3"><b>
                                <div className="a_box4">Hello</div>
                                <div className="a_box5">I'm Darshan</div>
                                <div className="a_box4">Web designer and developer</div>
                            </b>
                            </div>
                        </div>

                        <div className="a_box1">
                            <a href="/about_jeel">

                                <div className="a_box2">

                                </div>
                            </a>

                            <div className="a_box3"><b>
                                <div className="a_box4">Hello</div>
                                <div className="a_box5">I'm Jeel</div>
                                <div className="a_box4">Web designer and developer</div>
                            </b>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
            <Footer/>
            <style jsx>
                {
                    `
        
        * {
        margin: 0px;
        padding: 0px;
    }
    

  
    /* PART_1 */

    .part_1_a {
        background-color: #2D2D37;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: row;

    }

    .line_1 {
        color: white;
        text-align: center;
        padding-top: 2%;
        font-family: 'Times New Roman';
        font-size: 50px;
        font-style: bold;

    }

    .line_2 {
        text-align: center;


    }

    .line_3 {
        color: white;
        text-align: center;
        padding-bottom: 2%;
        font-family: 'Times New Roman';
        font-size: 22px;
        font-style: semibold;

    }

    /* SPECIAL_TEXT_ANIMATION */

    .p1 {
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
        .p1 {
            left: 20em;
            width: 100%;

        }

    }


    .p1 .span1 {
        font: 700 3em/1 'Times New Roman';
        letter-spacing: 0;
        padding: 0.25em 0 0.325em;
        display: block;
        margin: 0 auto;
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

    /* PART_2 */

    .mainbox {
        height: 700px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .border1 {
        /* border: 2px solid #1BC787; */
        border-radius: 20px;
        width: 90%;

    }


    .a_box {
        height: 700px;
        width: 100%;
        /* background-color: #828282; */
        /* margin-top: 5%; */

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .a_box1 {
        height: 600px;
        width: 450px;
        /* background-color: brown; */
        border-radius: 20px;

    }

    .a_box2 {
        height: 400px;
        width: 450px;
        background-color: #1BC787;
        border-radius: 20px 20px 0px 0px;
    }

    .a_box3 {
        display: flex;
        flex-direction: column;
        height: 200px;
        width: 450px;
        background-color: #828282;
        border-radius: 0px 0px 20px 20px;
        /* padding-top: 10px;
        padding-left: 20px; */
        text-align: left;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        color: white;
    }

    /* .box3:hover{
        text-decoration:none;
    } */

    .a_box4 {
        width: 210px;
        height: 20px;
        font-family: 'Times New Roman';
        font-size: 15px;
        /* background-color: brown; */
        /* border-radius: 20px; */
    }

    /* .box4:hover{
        text-decoration: none;
    } */

    .a_box5 {
        width: 210px;
        height: 40px;
        color: #1BC787;
        font-size: 30px;
        font-family: 'Times New Roman';
        /* background-color: brown; */
        /* border-radius: 20px; */
    }

    .a_box5:hover {
        text-decoration: none;
    }

    /* .noanima{
        text-decoration: none;
        text-decoration-style: none;
    } */

    @media screen and (max-width:1010px) {

        .mainbox {
            height: 1400px;
        }

        .a_box {
            display: grid;
            width: 100%;
            height: 1300px;
            grid-gap: 0px;
            grid-template-columns: repeat(1);

        }



    }

    @media screen and (max-width:480px) {

        .mainbox {
            height: 1400px;
        }



        .a_box {
            display: grid;
            width: 100%;
            height: 1300px;
            grid-gap: 0px;
            grid-template-columns: repeat(1, 250px);

        }

        .border1 {
            width: 95%;
        }

        .a_box1 {
            width: 100%;
        }

        .a_box2 {
            width: 100%;

        }

        .a_box3 {
            width: 100%;


        }
    }


        `
                }
            </style>

        </>
    )
}
export default about_main;