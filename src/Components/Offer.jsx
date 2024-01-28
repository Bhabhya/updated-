import styled from "styled-components"

const Offer = () => {
  return (
    <Section>
        <div>

        <div className="toy">
        <div className="sale">
            <img src="/images/sale.jpg"></img>
        </div>
        <div className="coin">
        <h1>EXCLUSIVE OFFER FOR YOU</h1>
        <p>Only on Best Seller Products</p>
        <button>CHECK NOW</button>
        </div>
        </div>
        

        </div>
    </Section>

  )
}

export default Offer

const Section=styled.div`

background-color: #e8e5e5f8;

p{
    font-weight: 500;
    font-size: 25px;
}

.coin h1{
    color: #134b79;
}

.coin p{
    color: #134b79;
}

.toy{
    display: flex;
    justify-content: space-between;
}

.sale{
    width: 30%;
    //background-color: orange;//
}

.sale img{
    margin-left: 20%;

}

.coin{
    //background-color: green;//
    width: 70%;
    text-align: center;
    margin-top: 50px;
}

button{
    background-color: white;
    font-size: 20px;
    border-radius: 30px;
    border-color:  #134b79;
    margin-top: 30px;

    &:hover{
        background-color: #134b79;
        color: whitesmoke;
        cursor: pointer;
    }
}

`;