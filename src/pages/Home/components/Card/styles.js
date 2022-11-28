import styled from "styled-components";

export const CardsContainer = styled.main`
  margin-top: 5rem;

  section {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .coffeeCard {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F3F2F2;
    border-radius: 6px 36px;
    width: 250px;
    height: 290px;

    img {
      width: 100px;
      margin-top: -2rem;
    };

    .tags {
      display: flex;
      align-items: center;
      gap: 4px;

      h3 {
        margin-block: 0.5rem;
        padding: 4px 8px;
        border-radius: 100px;
        font-size: 0.6rem;
        background: #F1E9C9;
        color: #C47F17;
      }
    }

    h2 {
      font-size: 20px;
    }

    p {
      padding: 0 1rem;
      text-align: center;
      color: #8D8686;
      font-size: 0.9rem;
    }
  }

  .buy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2.5rem;
    gap: 16px;

    strong {
      color: #574F4D;
      font-size: 1.3rem;
      
    }
    
    .action {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #E6E5E5;
      width: 72px;
      height: 38px;
      border-radius: 6px;


      p {
        width: 38px;
      }

      button {
        border-radius: 6px;
        border: none;
        color: #8047F8;
        background: #E6E5E5;
        cursor: pointer;
        height: 38px;
        width: 38px;
      }
    }
  }

`