import { Link } from 'react-router-dom';

import './productItem.scss'

const ProductItem = ({productData, isCartItem, onDeleteItem}) => {

    let productImage = null;
    let colorItem = [];

    if (typeof productData.colors != 'undefined' && productData.colors.length > 0) {
        colorItem = productData.colors[0]
    } else if (typeof productData.color != 'undefined') {
        colorItem = productData.color
    }

    if (colorItem['images'].length > 0) {
        productImage = colorItem['images'][0];
    }

    const name = isCartItem ? productData.color.name : productData.name

    return (
        <Link to={`/${productData.id}`} className="product">
            <div className='product__image-box'>
                <img className='product__image' src={productImage} alt={name} />
            </div>
            <span className="product__name">
                {name}
            </span>
            {isCartItem &&
            <>
                <div>Цвет: {productData.color.name}</div>
                <div>Размер: {productData.size.name}</div>
                <div>Цена: {productData.color.price}</div>
                <div className='product__delete-block'>
                    <span onClick={(e) => {
                        e.preventDefault();
                        onDeleteItem();
                    }}>&times; Удалить</span>
                </div>
            </>
            }
        </Link>
    )

}

export default ProductItem;