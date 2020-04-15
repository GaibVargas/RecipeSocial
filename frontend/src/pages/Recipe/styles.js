import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 100px);
  margin-left: 100px !important;
  min-height: 100vh;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 25px 25px 30px;

  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
      height: 150px;
    }

    .title{
      display: flex;
      align-items: center;

      h1{
        margin-right: 20px;
        text-transform: capitalize;
      }
    }

    span, a{
      color: #C61111;
      text-decoration: none;
    }
  }

  .content{
    margin-top: 25px;

    .recipe{
      margin-bottom: 45px;

      h3{
        margin-bottom: 10px;
      }

      p{
        font-size: 18px;
      }
    }
  }
`;
