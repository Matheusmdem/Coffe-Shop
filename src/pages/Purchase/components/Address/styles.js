import styled from "styled-components";

export const FormContainer = styled.div`
  background: #F3F2F2;
  border-radius: 6px;
  padding: 40px;
  width: 640px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;

    img {
      margin-top: 0.2rem;
    }

    .infos {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      
      p:first-child {
        color: #403937;
        font-size: 1rem;
      }
      
      p:last-child {
        font-size: 0.8rem;
        color: #574F4D;
      }
    }
  }

  section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 200px 7fr 1fr;
    grid-template-areas:
              "cep . ."
              "rua rua rua"
              "numero complemento complemento"
              "bairro cidade uf";
    gap: 0.5rem;

    input {
      background: #EEEDED;
      border: 1px solid #E6E5E5;
      border-radius: 4px;
      padding: 12px;
      height: 42px;
      width: 100%;
    }

    .Cep {
      grid-area: cep;
    }
    .Rua {
      grid-area: rua;
    }
    .Numero {
      grid-area: numero;
    }
    .Complemento {
      grid-area: complemento;
    }
    .Bairro {
      grid-area: bairro;
    }
    .Cidade {
      grid-area: cidade;
    }
    .Uf {
      grid-area: uf;
    }
  }
`