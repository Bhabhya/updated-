
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
  navigate('/mens')
    }
  const handleClick2=()=>{
    navigate('/women')
  }

  const handleClick3=()=>{
    navigate('/')
  }

  const handleClick4=()=>{
    navigate('/kids')
  }
    


  return (
    <Nav>
        <div>
            <div className="heading">
                <div className="logo">
                <img src="/images/logo.webp"></img>
                </div>
            <ul>
            <li onClick={handleClick3}>HOME</li>
            <li onClick={handleClick}>MENS</li>
            <li onClick={handleClick2}>WOMEN</li>
            <li onClick={handleClick4}>KIDS</li>

            </ul>

            </div>
        </div>
    </Nav>
  )
}
  

export default Navbar

const Nav=styled.div`
//background-color: yellow;//
box-shadow: 1px 1px 3px black;

.heading{
    display: flex;
    justify-content: space-between;
}

.logo img{
    width: 200px;
    height: 100px;
}

.heading ul{
    display: flex;
    list-style: none;
    gap: 24px;
    margin-right: 30px;
    padding-bottom: 40px;
    padding-top: 20px;

}

.heading li{
    font-size: 20px;
    cursor: pointer;
}

`;