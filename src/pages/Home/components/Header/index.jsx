import { HeaderContainer } from "./styles";
import Artheader from '../../../../assets/Artheader.svg'
import Compra from '../../../../assets/Compra.svg'
import Embalagem from '../../../../assets/Embalagem.svg'
import Entrega from '../../../../assets/Entrega.svg'
import Cafe from '../../../../assets/Cafe.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="infos">
        <div className="letreiro">
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <div className="details">
          <div>
            <span>
              <img src={Compra} />
              <p>Compra simples e segura</p>
            </span>
            <span>
              <img src={Entrega} />
              <p>Entrega rápida e rastreada</p>
            </span>

          </div>
          <div>
            <span>
              <img src={Embalagem} />

              <p>Embalagem mantém o café intacto</p>
            </span>
            <span>
              <img src={Cafe} />

              <p>O café chega fresquinho até você</p>
            </span>
          </div>
        </div>
      </div>
      <img src={Artheader} className="art" />
    </HeaderContainer>
  )
}