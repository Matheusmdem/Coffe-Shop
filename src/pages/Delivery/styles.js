import styled from "styled-components";

export const DeliverySection = styled.section`

  .firstDiv {
    h1 {
      color: #C47F17;
    }
  }

  .secondDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    .linearDiv {
      border-radius: 6px 36px;
      padding: 0.1rem;
      position: relative;
      background: linear-gradient(to right, red, purple);

      
      .borderDiv {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        background: #FAFAFA;
        gap: 1.5rem;
        padding: 2rem 5rem 2rem 2rem;
        border-radius: 6px 36px;


        div {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
          
          div{
            display: block;
            line-height: 1.1;
          }
        }
      }
    }
  }
`