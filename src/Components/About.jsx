import styled from "styled-components"

const About = () => {
  return (
    <Main>
        <div>

          
            <div className="pic">
              <div className="top">
                <h1>WINTER COLLECTION 2023</h1>
                <p>Stay Cozy and Warm with our new Winter Colection</p>
                <button>SHOP NOW</button>
              </div>

              
              <img src="/images/here.avif"></img>
            </div>
        </div>
    </Main>
  )
}

export default About

const Main=styled.div`
background-color: whitesmoke;
margin-top: 50px;

.top h1{
  margin-top: 100px;
  font-size: 3rem;
}

button{
font-size: 20px;
margin-left: 100px;
border-radius: 24px solid black;

&:hover{
  color: goldenrod;
  cursor: pointer;
}
}

p{
  font-weight: 700;
  font-size: 20px;
}

.pic{
  display: flex;
  justify-content: right;
}

.pic img{
  background-color: yellow;
  width: 50%;
  height: 350px;
  
}
`;