import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  gap: 20px;
  
  h4 {
    color: #F0F7F4;
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    align-self: center;
  }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const List = styled.div`
    display:flex;
    background-color: #345366;
    height: 60px;
    align-items: center;
    gap: 15px;
    padding: 0 30px;
    border-radius: 20px;

`;

export const ColorComponent = styled.div`
    background-color: ${(props) => props.color};
    width: 40px;
    height: 40px;
    border-radius: 10px;
`