import { Helmet } from 'react-helmet';

import Cart from "../cart/Cart"

const CartPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="cart"
                />
                <title>Cart</title>
            </Helmet>
            <Cart/>
        </>
    )
}

export default CartPage;