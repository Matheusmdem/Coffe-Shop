import { createContext, useState, useEffect } from 'react'

export const CycleContext = createContext();

export function CycleContextProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);
  const [sum, setSum] = useState(0)
  const [addressFill, setAddressFill] = useState({})

  useEffect(() => {
    const copyProductsCart = [...productsCart];

    const sum = copyProductsCart.reduce((acc, cur) => acc + cur.total, 0)

    setSum(sum)
  }, [productsCart])

  function addProductToCart(id, name, image, price) {
    event.preventDefault()

    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (!item) {
      copyProductsCart.push({ id: id, name: name, image: image, price: price, qtd: 1, total: price })
    } else {
      item.qtd += 1

      item.total = item.price * item.qtd
    }

    setProductsCart(copyProductsCart)
  }

  function removeProductFromCart(id) {
    event.preventDefault()

    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === id);

    if (item && item.qtd > 1) {
      item.qtd -= 1
      item.total = item.price * item.qtd
      setProductsCart(copyProductsCart)
    } else {
      deleteItemFromCart(id)
    }
  }

  function deleteItemFromCart(id) {
    const copyProductsCart = [...productsCart];

    const arrayFiltered = copyProductsCart.filter((product) => product.id !== id)
    setProductsCart(arrayFiltered)
  }

  function addressData(data) {
    setAddressFill(data)
  }

  return (
    <CycleContext.Provider
      value={{
        sum,
        productsCart,
        addressFill,
        addressData,
        addProductToCart,
        removeProductFromCart,
        deleteItemFromCart
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}