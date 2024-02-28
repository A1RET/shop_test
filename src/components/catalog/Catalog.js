import { useSelector } from 'react-redux';

import ProductItem from "../productItem/ProductItem";
import ProductsList from '../productsList/ProductsList';

import './catalog.scss'

const Catalog = () => {
    const products = useSelector(state => state.products.products);
    const productsStatus = useSelector(state => state.products.productsStatus);

    if (productsStatus !== 'loaded') {
        return <h2>Список товаров пуст</h2>
    }

    const renderProducts = () => {
        return products.map(product => {
            return (
                <li className="products-list-item" key={product.id}>
                    <ProductItem productData={product}/>
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

export default Catalog;