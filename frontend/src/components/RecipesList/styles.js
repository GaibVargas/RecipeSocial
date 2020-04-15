import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 100px);
  margin-left: 100px !important;

  .recipes-list{
    width: 100%;
    max-width: 1000px;
    margin-bottom: 25px;
  }

  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;

    li{
      background: #FFF;
      list-style: none;
      width: 85%;
      justify-self: center;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .recipe-header{
        display: flex;
        padding: 10px 25px;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
      }

      button{
        padding: 8px;
        border: none;
        background: transparent;
        cursor: pointer;
      }

      strong{
        text-transform: capitalize;
      }

      img{
        height: 180px;
        width: 100%;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`;