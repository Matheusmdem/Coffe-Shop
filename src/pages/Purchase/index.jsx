import * as yup from 'yup'
import { Address } from "./components/Address";
import { Orders } from "./components/Orders";
import { PurchaseContainer } from "./styles";
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from "react";
import { CycleContext } from "../../context/context";
import { useNavigate } from 'react-router-dom';

const validationAddress = yup.object().shape({
  Cep: yup.number().required(),
  Rua: yup.string().required(),
  Numero: yup.string().required(),
  Bairro: yup.string().required(),
  Complemento: yup.string().required(),
  Cidade: yup.string().required(),
  Uf: yup.string().required()
})

export function Purchase() {
  const newAddressForm = useForm({
    resolver: yupResolver(validationAddress)
  })

  const { handleSubmit } = newAddressForm
  const { addressData } = useContext(CycleContext)
  const navigate = useNavigate()

  function fillAddress(data) {
    addressData(data)
    navigate('/purchase/success')
  }

  return (
    <PurchaseContainer>
      <form action="" onSubmit={handleSubmit(fillAddress)}>
        <FormProvider {...newAddressForm}>
          <div className="Purchase">
            <Address />
          </div>
          <Orders />
        </FormProvider>
      </form>
    </PurchaseContainer>
  )
}