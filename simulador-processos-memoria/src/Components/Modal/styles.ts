import styled from 'styled-components';

export const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    top: 0;
    left: 0;
    z-index: 10;
`
export const Container = styled.div`
    position: fixed;
    background-color: #fff;
    width: 50%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    .modalTitle {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #022F40;
        padding: 20px;
        border-bottom: 1px solid gray;
    }
    .modalTitle button {
        background-color: transparent;
        border: none;
    }

    .modalTitle button:hover {
        cursor: pointer;
    }
`

