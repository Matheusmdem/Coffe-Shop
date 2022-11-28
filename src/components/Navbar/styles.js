import styled from 'styled-components'


export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #FAFAFA;
  width: 100%;
  height: 6.5rem;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 10px -5px #000000;
  z-index: 100;

  .main{
    margin: auto;
    width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-top: 1rem;
    }
    
    .userInfo {
      display: flex;
      align-items: center;
      gap: 1rem;
      
      .location {
        display: flex;
        align-items: center;
        background: #EBE5F9;
        color: #4B2995;
        padding: 0.5rem;
        width: 6rem;
        height: 2.2rem;
        border-radius: 6px;
        font-size: 1rem;
      }
      
      .purchaseIcon {
        display: flex;
        
        .cartButton {
          border: none;
          background: #F1E9C9;
          border-radius: 6px;
          padding: 8px;
          color: #C47F17;
          width: 38px;
          height: 38px;
          cursor: pointer;
        }
      
        .ball {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: #C47F17;
          border-radius: 1000px;
          width: 1.3rem;
          height: 1.3rem;
          margin-left: -0.5rem;
          margin-top: -0.5rem;
        }
      }
    }
  }
`