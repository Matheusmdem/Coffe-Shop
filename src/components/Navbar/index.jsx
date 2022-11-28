import logo from '../../assets/Logo.svg'
import { NavContainer } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CycleContext } from '../../context/context'

export function Navbar() {
  const { productsCart = [] } = useContext(CycleContext)

  return (
    <NavContainer>
      <div className='main'>
        <NavLink to="/" title="Logo" end>
          <img src={logo} />
        </NavLink>
        <div className='userInfo'>
          <div className='location'>
            <p>Curitba, PR</p>
          </div>
          <NavLink to="/purchase" title="Compra">
            <div className='purchaseIcon'>
              <button className="cartButton">
                <ShoppingCartSimple size={24} />
              </button>
              <span className='ball'>{productsCart.length}</span>
            </div>
          </NavLink>
        </div>
      </div>
    </NavContainer>
  )
}