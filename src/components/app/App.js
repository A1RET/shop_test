import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../header/Header";

import "./app.scss";

const Page404 = lazy(() => import("../pages/404"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CartPage = lazy(() => import("../pages/CartPage"));

export default function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main className="content">
                    <div className="container">
                        <Suspense fallback={<div>Loading....</div>}>
                            <Routes>
                                <Route path="/" element={<CatalogPage />} />
                                <Route
                                    path="/:productId"
                                    element={<ProductPage />}
                                />
                                <Route
                                    path="/cart"
                                    element={<CartPage />}
                                />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </Suspense>
                    </div>
                </main>
            </div>
        </Router>
    );
}
