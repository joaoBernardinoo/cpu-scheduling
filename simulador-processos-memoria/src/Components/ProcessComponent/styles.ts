import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`

export const ColorCell = styled.div`
    background-color: ${(props) => props.color};
    width: 80%;
    height: 70%;
    border-radius: 30px;
`
