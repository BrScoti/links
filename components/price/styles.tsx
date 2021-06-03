import styled from "styled-components";
import { Container } from "../container";

export const PriceContainer = styled(Container)`
padding: 50px 0;
`

export const PriceTable = styled.div`
border: 1px solid ${({ theme }) => theme.colors.black};
padding: 50px 0;
border-radius: 35px;
`

export const PriceTitle = styled.div`
display:flex;
align-items: center;
text-align: center;
justify-content: center;
font-size: 85px;
font-weight: 900;
margin: 0 0 40px 0;
color: ${({ theme }) => theme.colors.black};

.original-price{
  font-size:medium;
  font-weight: 400;
  text-decoration:line-through;
  align-self: flex-end;
  color: #000000ba;

}

.currency{
  font-size: calc(35em/100);
  align-self: flex-start;
}
`


export const ItemsList = styled.div`
ul{
  list-style: none;
  li{
    display: flex;
    align-items: center;
    gap:10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    padding:10px;
  }

}
display: flex;
flex-direction: column;
align-items: center;
`