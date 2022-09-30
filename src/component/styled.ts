import styled from "styled-components";

export const UserStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .info {
    display: flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 48px;
  }
  img {
    width: 300px;
    height: 300px;
  }
`;
