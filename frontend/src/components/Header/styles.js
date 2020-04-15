import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background: #C61111;

  header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a{
      color: #FFF;
    }

    a:hover{
      color: #e9e9e9;
    }

    .top{
      display: flex;
      flex-direction: column;

      a{
        margin: 20px 0;
      }
    }

    .bottom{
      transform: rotate(-180deg);
      margin-bottom: 20px;

      button{
        border: none;
        background: transparent;
        cursor: pointer;
        color: #FFF;

        &:hover{
          color: #e9e9e9;
        }
      }
    }
  }
`;