import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 100px);
  margin-left: 100px !important;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;

  h1{
    margin: 25px 0 5px 30px;
  }

  h2{
    margin: 50px 0 20px 30px;
  }

  span{
    margin: 5px 0 5px 30px;
  }
`;