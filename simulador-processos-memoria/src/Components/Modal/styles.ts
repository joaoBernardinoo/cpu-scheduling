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
    min-width: 50%;
    min-height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding-bottom: 20px;

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
        margin-bottom: 20px;
    }
    .modalTitle button {
        background-color: transparent;
        border: none;
    }

    .modalTitle button:hover {
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    form label {
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #022F40;
        display: flex;
        gap: 10px;
    }
    form span {
        width: 100px;
        display: flex;
        justify-content: flex-end;
    }

    form select {
        width: 50%;
        height: 25px;
        border: 1px solid #022F40;
        border-radius: 5px;
        color: #022F40;
        background-color: #fff; 
    }

    form input {
        width: 50%;
        height: 25px;
        border: 1px solid #022F40;
        border-radius: 5px;
        color: #022F40;
        background-color: #fff;
    }

    .sectionSubmit {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .submit {
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .submit:hover {
        cursor: pointer;
        background-color: #022F40;
        color: #fff;
    }
`

