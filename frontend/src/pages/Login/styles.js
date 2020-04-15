import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  justify-content: center;
  align-items: center;

  .register{
    width: 100%;
    padding: 0 30px;
    height: 100%;
    background: #C61111;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .title{
      position: absolute;
      top: 0;
      right: 0;
      margin: 20px 5px 0 0;
      font-size: 50px;
    }

    .register-title{
      font-weight: bold;
      margin-bottom: 45px;
    }

    p{
      line-height: 25px;
      font-size: 18px;
      text-align: center;
    }

    a{
      margin-top: 45px;
      width: 50%;
      color: #C61111;
      background: #F1F1F1;
      box-shadow: 0 4px #a8a8a8;
    }

    a:hover{
      background: #dbdbdb;
    }
  }

  .login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .title2{
      position: absolute;
      top: 0;
      left: 0;
      margin: 20px 0 0 5px;
      font-size: 50px;
      color: #C61111;
    }

    .login-title{
      font-weight: bold;
      margin-bottom: 45px;
      color: #C61111;
    }

    form{
      display: flex;
      flex-direction: column;
      width: 50%;

      button{
        background: #C61111;
        color: #FFF;
        box-shadow: 0 4px #810303;
        margin-top: 20px;
      }

      button:hover{
      background: #b61010;
    }
    }
  }
`;
