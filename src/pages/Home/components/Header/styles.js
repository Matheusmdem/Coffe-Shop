import styled from 'styled-components'
import background from '../../../../assets/Background.svg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Baloo 2', cursive;
  margin-top: 5rem;
  background-image: url(${background});
  background-size: contain;

  .art {
    margin-top: 2rem;
  }

  .infos {
    width: 36.75rem;
  }

  .letreiro {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 66px;

    strong {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-block: 8px;
  }
`