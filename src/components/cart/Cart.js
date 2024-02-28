import { useSelector, useDispatch } from 'react-redux';

import ProductsList from '../productsList/ProductsList';
import ProductItem from "../productItem/ProductItem";

import { deleteItem } from '../cart/cartSlice';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    if (cartItems.length === 0) {
        return <h2>Корзина пуста</h2>
    }

    const onDeleteItem = (id) => {
        dispatch(deleteItem(id))
    }

    const renderProducts = () => {
        return cartItems.map(item => {
            return (
                <li className="products-list-item" key={item.id}>
                    <ProductItem productData={item.product} isCartItem={true} onDeleteItem={() => onDeleteItem(item.id)}/>
                </li>
            )
        })
    }

    return (
        <ProductsList>
            {renderProducts()}
        </ProductsList>
    )
}

export default Cart;