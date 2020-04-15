import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 100px);
  margin-left: 100px !important;
  min-height: 100vh;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 25px;
  align-items: center;

  h1{
    text-align: center;
  }

  form {
    width: 90%;
    max-width: 900px;
    margin: 50px 0;

    input, textarea{
      margin: 10px 0;
      border: none;
    }

    input[type="file"]{
      background: #FFF;
      padding: 10px;
      align-items: center;
      margin: 10px 0;
    }

    input:focus, textarea:focus, input[type="file"]:focus {
      border: 1px solid #d1d1d1;
    }

    .margin-bottom{
      margin-bottom: 0;
    }

    span{
      font-size: 12px;
      margin-bottom: 10px;
    }

    .image{
      width: 100%;
      display: flex;
      justify-content: center;

      img{
        height: 150px;
      }
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
  }
`;
