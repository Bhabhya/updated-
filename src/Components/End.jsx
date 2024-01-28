import styled from "styled-components"

const End = () => {
  return (
    <Footer>
        <div>

            <div className="list">
                <ul>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </div>
    </Footer>
  )
}

export default End

const Footer=styled.div`

margin-bottom: 20px;

.list ul{
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 25px;
}

.list li{
    font-size: 20px;
    font-weight: 700;
}

.list li{
    &:hover{
        cursor: pointer;
        text-decoration: underline solid #134b79;
    }
}

`;