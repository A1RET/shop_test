import './productsList.scss'

const ProductsList = ({children}) => {

    return (
        <ul className="products-list">
            {children}
        </ul>
    )
}

export default ProductsList;