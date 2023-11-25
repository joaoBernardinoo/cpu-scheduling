import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Line = styled.div`
`;

export const Column = styled.div`
    border: 1px solid black;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.color};
`;