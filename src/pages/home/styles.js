import styled from "styled-components";

export const Container = styled.div`
  background: #000000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aviso = styled.h1`
  margin-top: 40px;
  padding: 10px;
  display: flex;
  width: 100%;
  height: 92px;
  flex-direction: column;
  color: #FFFFFF;
  span {
    font-size: 12px;
    color: #fff;
    margin-top: 5px;
    font-weight: bold;
  }
`;