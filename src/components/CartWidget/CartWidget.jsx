import { useContext } from 'react'
import { CartFill } from 'react-bootstrap-icons'
import { CartContext } from '../../context/cartContext'
import styles from './CartWidget.module.scss'
import { Link } from 'react-router-dom'

function CartWidget() {

 // Este componente muestra un ícono de carrito, toma el valor de cartWidgetAmount de cartContext.jsx y lo renderiza

  const { cartWidgetAmount } = useContext(CartContext)

  if (cartWidgetAmount > 0) {
    return (
      <Link to='/cart' className={styles.cartWidgetContainer}>
        <div className={styles.cartWidgetAmount}>
          {cartWidgetAmount}
        </div>
        <div>
          <CartFill className='fs-4' />
        </div>
      </Link >
    )
  }

}

export default CartWidget

