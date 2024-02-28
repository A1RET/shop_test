import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

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
        </>
    );
};

export default ProductPage;
