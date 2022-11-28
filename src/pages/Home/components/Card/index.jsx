import { CardsContainer } from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { data } from '../../../../data'
import { useContext, useState } from "react";
import { CycleContext } from "../../../../context/context";

export function Card() {
  const [products] = useState(data)

  const {
    productsCart = [],
    addProductToCart,
    removeProductFromCart
  } = useContext(CycleContext)

  return (
    <CardsContainer>
      <h1>Nossos cafés</h1>

      <section>
        {products.map((product) => (
          <div className="coffeeCard" key={product.id}>
            <img src={product.image} />
            <div className="tags">
              {product.tag.map((tags) => (
                <h3>{tags}</h3>
              ))}
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="buy">
              <strong>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
              <div className="action">
                <button onClick={() => removeProductFromCart(product.id)} >
                  <Minus size={10} />
                </button>
                <p>{productsCart.find((item) => item.id === product.id)?.qtd ? productsCart.find((item) => item.id === product.id)?.qtd : 0}
                </p>
                <button onClick={() => addProductToCart(product.id, product.name, product.image, product.price)} >
                  <Plus size={10} />
                </button>
              </div>
            </div>
          </div>
        ))}


      </section>

    </CardsContainer>
  )
}