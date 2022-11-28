import { DeliverySection } from "./styles";
import moto from '../../../src/assets/illustration.svg'
import pinIcon from './../../assets/pinIcon.svg'
import clockIcon from './../../assets/clockIcon.svg'
import dollarIcon from './../../assets/dollarIcon.svg'
import { useContext } from "react";
import { CycleContext } from "../../context/context";

export function Delivery() {
  const { addressFill } = useContext(CycleContext)

  return (
    <DeliverySection>

      <div className="firstDiv">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div className="secondDiv">
        <div className="linearDiv">
          <div className="borderDiv">
            <div>
              <img src={pinIcon} alt="" />
              <div>
                <p>Entrega em <strong>Rua {addressFill.Rua}, {addressFill.Numero}</strong></p>
                <p>{addressFill.Cidade} - {addressFill.Uf}</p>
              </div>
            </div>
            <div>
              <img src={clockIcon} alt="" />
              <div>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min </p>
              </div>
            </div>
            <div>
              <img src={dollarIcon} alt="" />
              <p>Pagamento na entrega</p>
            </div>
          </div>
        </div>
        <img src={moto} alt="" />
      </div>
    </DeliverySection>
  )
}