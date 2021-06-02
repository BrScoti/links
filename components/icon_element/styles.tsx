import styled from 'styled-components'

export const IconContainer = styled.div`
 max-width: 85px;
 max-height: 85px;
 justify-content: center;
 background-color: #d4145a;
 padding: .7em;
 border-radius: 50%;
 font-size: 33px;
 img{
  fill:#fff;
  width: 1em;
  height: 1em;
  filter: brightness(0) invert(1);
 }
 border: 3px solid #fff;
`;

export const IconBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 0px;
`

export const Title = styled.h3`
font-size:21px;
text-transform: uppercase;
`

export const Description = styled.p`
font-size:17px;
font-weight: 300;
`;