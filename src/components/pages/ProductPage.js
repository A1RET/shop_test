import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";

import ProductCart from "../productCart/ProductCart";

const ProductPage = () => {
    const { productId } = useParams();
    const products = useSelector(state => state.products.products);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const product = products.find(p => p.id === Number(productId));

        setProduct(product);
    }, [productId, products]);

    return (
        <div className="product-page">
            {product ? View(product) : "loading"}
        </div>
    );
};

const View = (product) => {
    return (
        <>
            <Helmet>
                <title>{product.name}</title>
                <meta name="description" content={`${product.name}`} />
            </Helmet>
            <ProductCart product={product} />
        </>
    );
};

export default ProductPage;
