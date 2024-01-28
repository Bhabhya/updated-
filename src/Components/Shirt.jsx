import styled from "styled-components"


function Shirt() {
  return (
    <Main>
        <div>
            <h1>Mens Section</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sed excepturi. Sint esse inventore, harum, reiciendis placeat iure sunt explicabo ipsam nam quisquam commodi consequatur quis. In iusto error numquam.
            Asperiores dignissimos voluptatibus laudantium optio pariatur error architecto ratione distinctio labore unde in, fugiat dolores, qui aperiam voluptatem fugit earum provident facere, reprehenderit corporis fuga. Nisi ab hic laudantium veniam.</p>

            <div>
                <img src="/images/logo.webp"></img>
            </div>
        </div>
    </Main>
  )
}

export default Shirt

const Main=styled.div`
div{
background: linear-gradient(#737DFE , #FFCAC9);
}
h1{
    text-align: center;
    color: salmon;
    //background-color: goldenrod;//
    font-size: 2rem;
    font-weight: 700;
    
}
`;
