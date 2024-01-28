import styled from "styled-components"

const Subscribe = () => {
  return (
    <Section>
        
<div>
        <div className="mail">
            <h1>Get Exclusive Offer On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
        </div>
        <div className="form">
        <form>
            <label>Email-id: </label>
            <input type="email" placeholder="enter your email"></input>
        </form>
        <button>Subscribe</button>
        </div>

        <div className="last">
            <img src="/images/logo.webp"></img>
        </div>

        </div> 
    </Section>
  )
}

export default Subscribe

const Section= styled.div`

margin-top: 10px;
background-image: url("/images/light.jpg");
margin-bottom: 20px;


.mail{
    text-align: center;
    padding-top: 20px;
}

.form{
    //background-color: yellow;//
    margin-top: 50px;
    font-size: 22px;
    display: flex;
    justify-content: center;
}

input{
    font-size: 20px;
    border-radius: 30px;
    border: 1px solid black;
    text-align: center;
}

button{
    font-size: 18px;
    background-color: black;
    color: whitesmoke;
    border-radius: 30px;
}

.last{
    //background-color: orange;//
}

.last img{
    width: 100px;
    height: 100px;
    margin: 20px 600px;
}


`;