import React, { useEffect, useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsFillXCircleFill } from "react-icons/bs";
import "./ProductDetail.css"

const ProductDetails = ({ product, onClose, AddToCart }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [cartAddedProduct, setCartAddedProduct] = useState(0)

    const nextImage = () => {
        if (currentImageIndex === product.images.length - 1) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const prevImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(product.images.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const handleAddCart = (product) => {
        setCartAddedProduct(product);
    }

    useEffect(() => {
        const timer = setInterval(nextImage, 3000);
        return () => clearInterval(timer);
    }, []);

    function convertToINR(price) {
        const conversionRate = 80;
        const inrPrice = price * conversionRate;
        return inrPrice.toFixed(2);
    }
    return (
        <div>
            {/* {cartAddedProduct ? (
                <AddToCart product={cartAddedProduct} price={convertToINR} />
            ) : ( */}
            <div className="productDisplaySection">
                <div className="productDisplayInfo">
                    <div id="imgContainer">
                        <h1><BsChevronDoubleLeft onClick={prevImage} className="chevronLeft" /></h1>
                        <img src={product.images[currentImageIndex]} alt={`${product.title} - Image ${currentImageIndex + 1}`}
                            className="productDisplayimg" />
                        <h1><BsChevronDoubleRight onClick={nextImage} className="chevronRight" /></h1>
                    </div>
                    <div className="productImgInfo">
                        <p>Title: {product.title}</p>
                        <p>Price: 	&#8377;{convertToINR(product.price)}</p>
                        <p>Brand: {product.brand}</p>
                        <h1><BsFillXCircleFill onClick={onClose} className="closeIcon" /></h1>
                        <button className="buttonAddCart" onClick={() => AddToCart(product)}>Add to Cart</button>
                    </div>
                </div>
                <p className="productDescription">Description: {product.description}<>. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quod laboriosam distinctio deleniti, voluptatem pariatur magnam repellendus id eaque
                    praesentium! Molestias facilis, quo, quisquam modi laboriosam veniam pariatur dolores nemo
                    numquam ab, corporis delectus voluptatum harum. Expedita unde laboriosam non quisquam,
                    cupiditate recusandae nihil consectetur a animi. Recusandae adipisci nam illo.</></p>
            </div >
        </div>
    );

};

export default ProductDetails;
