import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #C61111;

  form{
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;
    justify-content: center;
    align-items: center;
    background: #EDEDED;
    border-radius: 8px;
    padding: 35px;

    h1{
      margin-bottom: 45px;
    }

    button{
      background: #C61111;
      color: #FFF;
      box-shadow: 0 4px #810303;
      margin-top: 20px;
    }

    button:hover{
      background: #b61010;
    }

    input{
      border: none;
    }

    input:focus{
      border: 1px solid #d1d1d1;
    }
  }
`;