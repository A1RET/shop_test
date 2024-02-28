import { Helmet } from 'react-helmet';

import Catalog from "../catalog/Catalog"

const CatalogPage = () => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="shop"
                />
                <title>Shop</title>
            </Helmet>
            <Catalog/>
        </>
    )
}

export default CatalogPage;