import { Link } from 'react-router-dom';

import './productItem.scss'

const ProductItem = ({productData}) => {

    let productImage = null;
    let colorItem = [];

    if (typeof productData.colors != 'undefined' && productData.colors.length > 0) {
        colorItem = productData.colors[0]
    }
    if (colorItem['images'].length > 0) {
        productImage = colorItem['images'][0];
    }

    const name = productData.name

    return (
        <Link to={`/${productData.id}`} className="product">
            <div className='product__image-box'>
                <img className='product__image' src={productImage} alt={name} />
            </div>
            <span className="product__name">
                {name}
            </span>
        </Link>
    )

}

export default ProductItem;