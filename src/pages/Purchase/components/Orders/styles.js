import styled from "styled-components";

export const OrdersContainer = styled.section`
  background: #F3F2F2;
  border-radius: 6px 44px;
  padding: 40px;
  width: 368px;

  .cardOrder {
    display: flex;
    gap: 0.4rem;
    padding: 8px 4px;
    height: 80px;
    border-bottom: 1px solid #E6E5E5;

    img {
      margin-right: 0.5rem;
      width: 64px
    }

    .actionOredr {
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        font-size: 1rem;
      }
    }

    .qtdButton {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #E6E5E5;
      border-radius: 6px;
      width: 72px;
      height: 32px;
      padding: 0 0.5rem;

      button {
        border: none;
        color: #8047F8;
        background: #E6E5E5;
        cursor: pointer;
        height: 32px;
      }
    }

    .trashButton {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #E6E5E5;
      border-radius: 6px;
      width: 72px;
      height: 32px;
      padding: 0 0.5rem;
      font-size: 0.7rem;
      border: none;
      color: #8047F8;
      cursor: pointer;

      span {
        color: #574F4D;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

  }

  .total {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.8rem;
    }

    div:nth-child(3) {
      font-weight: bold;
      font-size: 1rem;

    }
  }

  .confirmOrder {
    background: #DBAC2C;
    border-radius: 6px;
    padding: 12px 8px;
    border: none;
    color: #FFFFFF;
    width: 288px;
    height: 46px;
    margin-top: 0.5rem;
    cursor: pointer;
  }

  .notConfirmOrder {
    background: #DBAC2C;
    border-radius: 6px;
    padding: 12px 8px;
    border: none;
    color: #FFFFFF;
    width: 288px;
    height: 46px;
    margin-top: 0.5rem;
    cursor: not-allowed;
    opacity: 0.7;
  }
`