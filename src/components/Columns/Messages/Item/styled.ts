import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    color: #111;
    padding: 10px;
    border-radius: 6px;
    margin: 15px 0;

    > p {
        width: 80%;
        overflow: auto;
    }
`

export const Clear = styled.div`
    display: flex;
    width: 20%;
    justify-content: flex-end;
    align-items: flex-end;
`
