import Link from 'next/link';
import { Footer } from 'components/shared';


const contact = () => {
    return (
        <>
        <div className="c_box">
        <div className="c_box1">
          <hr className="c_hr" />
          <h1>Contact Us</h1>
          {/* <h1>{ userData.name }</h1> */}
          <h4 className="c_h41">Feel free to contat us and we will get back
            to you as soon as it possible
          </h4>

          <form method="GET">

            <input type="text" className="c_fbox" id="name" name="name"  placeholder="Enter your name" /><br />
            {/* value={userData.name} */}
            <input type="text" className="c_fbox" id="email" name="email"  placeholder="Enter your email" /><br />
            {/* value={userData.email} */}
            <textarea type="text" rows="6" className="c_fbox"  id="message" name="message">Enter your message</textarea><br />


            <input type="submit" id="btn" value="Submit" /><br />
          </form>
        </div>

        <div className="c_box2">
          <img src="/bg.png" className="c_bg" alt="" />
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
                
                  .c_main_1 {
                    flex-direction: row;
                    align-items: stretch;
                  }
                
                 
                
                  .c_box {
                    width: 100%;
                    height: 600px;
                    /* background:#04AA6D; */
                    display: flex;
                    flex-direction: row;
                    /* align-items: center;
                    justify-content: center; */
                  }
                
                  .c_box2 {
                    width: 50%;
                    height: 600px;
                    display: flex;
                    align-items: flex-end;
                    /* background-color: aqua; */
                    justify-content: center;
                
                  }
                
                  .c_box1 {
                    height: 600px;
                    width: 50%;
                    display: flex;
                    /* background-color: blue; */
                    flex-direction: column;
                    padding-left: 10%;
                    align-items: flex-start;
                    justify-content: center;
                  }
                
                  hr {
                    border: 4px solid #1BC787;
                    margin-top: 10px;
                    color: #1BC787;
                    width: 10%;
                    margin-left: 2px;
                  }
                
                 
                
                  h1 {
                    color: #000000;
                    margin-top: 0.7%;
                    margin-bottom: 1.5%;
                
                  }
                
                  h4 {
                    color: #828282;
                    margin-left: 2px;
                  }
                
                  form {
                    margin-top: 3%;
                  }
                
                  .c_fbox {
                    color: #828282;
                    border: none;
                    background-color: #e6f9f2;
                    margin-top: 15px;
                    width: 100%;
                    border-radius: 5px;
                    padding: 10px 5px 10px 10px;
                  }
                
                  #btn {
                    margin-left: 305px;
                    margin-top: 15px;
                    background: #1BC787;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 8px 25px;
                  }
                
                .c_h41{font-size: 20px;}
                
                  .c_bg {
                    width: 65%;
                
                
                    float: right;
                    
                  }
                
                
                  @media screen and (max-width:1100px) {
                
                    .c_box {
                      width: 100%;
                      height: 100%;
                      /* background:#04AA6D; */
                      display: flex;
                      flex-direction: column-reverse;
                      align-items: center;
                      justify-content: center;
                    }
                
                    .c_box2 {
                      width: 100%;
                      height: 500px;
                      /* display: flex;
                    align-items: flex-end;
                    background-color: aqua;
                    justify-content: center; */
                
                    }
                
                    .c_bg{
                      align-items: flex-start;
                      justify-content:center;
                    }
                
                    h4 {
                      width: 80%;
                    }
                
                
                    .c_box1 {
                      height: 500px;
                      width: 100%;
                      padding-left: 0%;
                      align-items: center;
                      justify-content: center;
                    }
                
                    /* .c_bg{
                    width: 100%;
                  } */
                
                    .c_fbox {
                      width: 100%;
                    }
                
                    form {
                      width: 80%;
                    }
                
                    #btn {
                      margin-left: 0px;
                      margin-top: 15px;
                      justify-content: right;
                      background: #1BC787;
                      color: white;
                      border: none;
                      border-radius: 5px;
                      padding: 8px 25px;
                    }
                
                  }
                
                
                
                  @media screen and (max-width:600px) {
                
                    .c_box2 {
                      height: 100%;
                      align-items: flex-start;
                      /* margin-left: 15%; */
                
                    }
                
                    .c_bg {
                      
                      /* width: 80%; */
                      margin-left: 14%;
                    }
                
                    #btn {
                      justify-content: center;
                    }
                
                
                  }
       

        `
                }
            </style>

        </>
    )
}
export default contact;