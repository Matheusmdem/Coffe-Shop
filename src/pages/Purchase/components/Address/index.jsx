import { FormContainer } from "./styles";
import { useFormContext } from 'react-hook-form'
import Placeholder from '../../../../assets/Placeholder.svg'

export function Address() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <header>
        <img src={Placeholder} />
        <span className="infos">
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </span>
      </header>
      <section>
        <input
          type="text"
          placeholder="CEP"
          className="Cep"
          name="Cep"
          id="Cep"
          mask="000.000.000-00"
          {...register("Cep")}
        />
        <input
          type="text"
          placeholder="Rua"
          className="Rua"
          name="Rua"
          {...register("Rua")}
        />
        <input
          type="text"
          placeholder="Número"
          className="Numero"
          name="Numero"
          {...register("Numero")}
        />
        <input
          type="text"
          placeholder="Bairro"
          className="Bairro"
          name="Bairro"
          {...register("Bairro")}
        />
        <input
          type="text"
          placeholder="Complemento"
          className="Complemento"
          name="Complemento"
          {...register("Complemento")}
        />
        <input
          type="text"
          placeholder="Cidade"
          className="Cidade"
          name="Cidade"
          {...register("Cidade")}
        />
        <input
          type="text"
          placeholder="UF"
          className="Uf"
          name="Uf"
          {...register("Uf")}
        />
      </section>
    </FormContainer>
  )
}