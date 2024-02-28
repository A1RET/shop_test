import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <header className="header container">
            <h1 className="header__title">
                <Link to="/">
                    Shop
                </Link>
            </h1>
            <div className="header__cart">
                <Link to="/cart">
                    Корзина {`(${cartItems.length})`}
                </Link>
            </div>
        </header>
    )
}

export default Header;