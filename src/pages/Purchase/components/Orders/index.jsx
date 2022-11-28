import { OrdersContainer } from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { CycleContext } from "../../../../context/context"
import { NavLink } from "react-router-dom"
import { useFormContext } from "react-hook-form"

export function Orders() {
  const {
    sum,
    productsCart = [],
    addProductToCart,
    removeProductFromCart,
    deleteItemFromCart,
  } = useContext(CycleContext)

  const { watch } = useFormContext()

  const names = Object.values(watch())
  const addressEmpty = !names.length ? 0 : names.indexOf('')
  const isCartEmpty = productsCart.length > 0 && addressEmpty < 0

  function decreaseQtdFromCart(id) {

    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item.qtd !== 1) {
      removeProductFromCart(id)
    }
  }

  return (
    <OrdersContainer>
      {productsCart.map((product) => (
        <div className="cardOrder" key={product.id}>
          <img src={product.image} />
          <div className="actionOrder">
            <p>{product.name}</p>
            <div className="buttons">
              <div className="qtdButton">
                <button onClick={() => decreaseQtdFromCart(product.id)}>
                  <Minus size={10} />
                </button>
                <p>{product.qtd}</p>
                <button onClick={() => addProductToCart(product.id)}>
                  <Plus size={10} />
                </button>
              </div>
              <button onClick={() => deleteItemFromCart(product.id)} className="trashButton">
                <Trash size={10} />
                <span> Remover </span>
              </button>
            </div>
          </div>

          <strong>{product.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
        </div>
      ))}

      <div className="total">
        <div><p>Total de itens</p><span>{sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>
        <div><p>Entrega </p><span>R$ 3,50</span></div>
        <div><p>Total </p><span>{(sum + 3.5).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></div>

        {isCartEmpty ? (
          <button type="submit" className="confirmOrder">
            CONFIRMAR PEDIDO
          </button>
        ) : (
          <button type="button" className="notConfirmOrder">
            CONFIRMAR PEDIDO
          </button>
        )}
      </div>
    </OrdersContainer>
  )
}