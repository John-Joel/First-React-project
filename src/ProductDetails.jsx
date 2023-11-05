import React, { useEffect, useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsFillXCircleFill } from "react-icons/bs";
import "./ProductDetail.css"
import { FaStar } from "react-icons/fa";

const ProductDetails = ({ product, onClose, handleAddProduct, convertToINR }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => {
        if (currentImageIndex === product.images.length - 1) {
            setCurrentImageIndex((0) % product.images.length);
        } else {
            setCurrentImageIndex((currentImageIndex + 1) % product.images.length);
        }
        product.images.forEach((element, index) => {
            element.style.transform = `translateX(${index === currentImageIndex ? '0%' : '100%'})`;
        });
    };
    console.log(product.images[currentImageIndex])

    const prevImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex((product.images.length - 1) % product.images.length);
        } else {
            setCurrentImageIndex((currentImageIndex - 1) % product.images.length);
        }
        product.images.forEach((element, index) => {
            element.style.transform = `translateX(${index === currentImageIndex ? '0' : '-100%'})`;
        });
    };
    // const currentImage = product.images[currentImageIndex];
    // useEffect(() => {
    //     const timer = setInterval(nextImage, 3000);
    //     return () => clearInterval(timer);
    // }, []);

    return (
        <div>
            <div className="productDisplaySection">
                <div className="productDisplayInfo">
                    <div className="imgContainer">
                        <h1><BsChevronDoubleLeft onClick={prevImage} className="chevronLeft" /></h1>
                        {/* {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.title} - Image ${index + 1}`}
                                className={`productDisplayimg
                            ${index === currentImageIndex ? 'active' : ''}`}
                            />
                        ))} */}

                        <img src={product.images[currentImageIndex]} alt={`${product.title} - Image ${currentImageIndex + 1}`}
                            className="productDisplayimg" />
                        <h1><BsChevronDoubleRight onClick={nextImage} className="chevronRight" /></h1>
                    </div>
                    <div className="productImgInfo">
                        <div className="productTitle">Title: {product.title}</div>
                        <div className="priceContainer">
                            <div className="productDisplayDiscount">&#8377;{((convertToINR(product.price)) *
                                (1 - (product.discountPercentage / 100))).toFixed(2)}</div>
                            <div className="productDisplayPrice"><del>&#8377;{convertToINR(product.price)}</del></div>
                            <div className="productDisplayPercent">({product.discountPercentage}% off)</div>
                        </div>
                        <div>Brand: {product.brand}</div>
                        <button className='productDisplayRatings'>{product.rating}
                            <FaStar className='productDisplayStarIcon' /></button>
                        <button className="buttonAddCart" onClick={() => handleAddProduct(product)}>Add to Cart</button>
                    </div>
                </div>
                <p className="productDescription">Description: {product.description}</p>
            </div >
            <h1><BsFillXCircleFill onClick={onClose} className="closeIcon" /></h1>
        </div >
    );

};

export default ProductDetails;
