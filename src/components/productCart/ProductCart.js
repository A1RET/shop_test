import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSizes } from "../../services/api";
import { nanoid } from "@reduxjs/toolkit";

import { addToCart } from '../cart/cartSlice';

import Slider from "../Slider/Slider";

import './productCart.scss'

const ProductCart = ({product}) => {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const [formData, setData] = useState({
        color: {},
        size: ''
    });
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        setData({...formData, color: product.colors[0]});
    }, [product]);


    useEffect(() => {
        getSizes().then(data => {
            setSizes(data);
        });
    }, []);

    function changeData(data) {
        const newData = {...formData, ...data};
        const isSizeAvailable = newData.color.sizes.indexOf(Number(newData.size.id)) !== -1;

        if (!isSizeAvailable) {
            newData.size = ''
        }


        setData(newData)
    }

    const setActiveColor = (id) => {
        changeData({color: product.colors.find(color => color.id === id)})
    }


    const submitForm = (e) => {
        e.preventDefault();
        
        if (!formData.size) {
            return;
        }

        const productData = {
            id: product.id,
            ...formData
        }
        const productDataJSON = JSON.stringify(productData);

        const isProductInCart = cartItems.findIndex(item => JSON.stringify(item.product) === productDataJSON);

        if (isProductInCart !== -1) {
            window.alert("Товар уже в корзине!");
            return false;
        }

        const cartItem = {
            id: nanoid(),
            product: productData
        }

        dispatch(addToCart(cartItem));

        window.alert('Товар добавлен!');
    }

    const sizesOptions = sizes.map(size => {
            const isAvailable = formData.color.sizes.indexOf(size.id) !== -1;
            return (<option value={size.id} key={size.id} disabled={!isAvailable}>{size.label} - {size.number}</option>)
        }
    )

    const getProductImages = useCallback(() => {
        return product.colors.reduce((imagesList, color) => {
            color.images.forEach((imageUrl, i) => {
                imagesList.push({
                    url: imageUrl,
                    desc: color.name || '',
                    colorId: color.id,
                    isMain: i === 0
                })
            });
    
            return imagesList;
        }, [])
    }, [])

    return (
        <div className="product-cart">
            <h1>{product.name}</h1>

            <div className='product-cart__container'>
                <div className='product-cart__images'>
                    <Slider activeColorId={formData.color.id} getImages={getProductImages} setActiveColor={setActiveColor}/>
                </div>
                <form className='product-cart__form' onSubmit={submitForm}>
                    <div className='product-cart__colors'>
                        <div className="product-cart__title">Цвет:</div>
                        {product.colors.map(colorData => {
                            return (
                                <label className='product-cart__color' key={colorData.id}>
                                    <input
                                        type="radio"
                                        name="color"
                                        value={colorData.id}
                                        checked={colorData.id === formData.color.id}
                                        onChange={() => setActiveColor(colorData.id)}
                                    />
                                    <span>{colorData.name}</span>
                                </label>
                            )
                        })}
                    </div>

                    <div className='product-cart__sizes'>
                        <div className="product-cart__title">Размер:</div>
                        <select 
                            required
                            className="product-cart__size" 
                            name="size"
                            value={formData.size.id}
                            onChange={(e) => {
                                const sizeInfo = {
                                    id: e.target.value,
                                    name: e.target.options[e.target.selectedIndex].text
                                }

                                changeData({size: sizeInfo})
                            }}
                        >
                            <option value="">Размер</option>
                            {sizesOptions}
                        </select>
                    </div>

                    <div className="product-cart__price">
                        Цена: {formData.price}
                    </div>

                    <div className="product-cart__button container">
                        <button>Добавить в корзину</button>
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default ProductCart;