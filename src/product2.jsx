import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product2.css'

const Product2 = (props) => {
    const [products, setProducts] = useState([]);
    const [sortByPriceLow, setSortByPriceLow] = useState(false);
    const [sortByPriceHigh, setSortByPriceHigh] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((response) => {
            setProducts(response.data.products);
        });
    }, []);

    const handleSortByPricelow = () => {
        setSortByPriceLow(!sortByPriceLow);
    };

    const handleSortByPricehigh = () => {
        setSortByPriceHigh(!sortByPriceHigh);
    };

    const handleBrandFilter = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter((selectedBrand) => selectedBrand !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    };

    const filteredProducts = products.filter((product) =>
        product.category.toLowerCase().includes(props.searchTerm.toLowerCase())
    );

    const filteredByBrand = selectedBrands.length > 0
        ? filteredProducts.filter((product) => selectedBrands.includes(product.brand))
        : filteredProducts;

    if (sortByPriceLow) {
        filteredByBrand.sort((a, b) => a.price - b.price);
    }
    if (sortByPriceHigh) {
        filteredByBrand.sort((a, b) => b.price - a.price);
    }

    return (
        <section id="section">
            <div className='div1'>
                <div className='div2'>
                    <div>
                        <h4>Filter by price</h4>
                        <label>
                            <input
                                type="checkbox"
                                checked={sortByPriceLow}
                                onChange={handleSortByPricelow}
                            />
                            low to high
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={sortByPriceHigh}
                                onChange={handleSortByPricehigh}
                            />
                            high to low
                        </label>
                    </div>

                    <div>
                        <h4>Filter by brand</h4>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Apple')}
                                checked={selectedBrands.includes('Apple')}
                            />
                            Apple
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('OPPO')}
                                checked={selectedBrands.includes('OPPO')}
                            />
                            OPPO
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Samsung')}
                                checked={selectedBrands.includes('Samsung')}
                            />
                            Samsung
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Huawei')}
                                checked={selectedBrands.includes('Huawei')}
                            />
                            Huawei
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Microsoft Surface')}
                                checked={selectedBrands.includes('Microsoft Surface')}
                            />
                            Microsoft Surface
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Infinix')}
                                checked={selectedBrands.includes('Infinix')}
                            />
                            Infinix
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('HP Pavilion')}
                                checked={selectedBrands.includes('HP Pavilion')}
                            />
                            HP Pavilion
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Impression of Acqua Di Gio')}
                                checked={selectedBrands.includes('Impression of Acqua Di Gio')}
                            />
                            Acqua Di Gio
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Royal_Mirage')}
                                checked={selectedBrands.includes('Royal_Mirage')}
                            />
                            Royal_Mirage
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Fog Scent')}
                                checked={selectedBrands.includes('Fog Scent')}
                            />
                            Fog Scent
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Al Munakh')}
                                checked={selectedBrands.includes('Al Munakh')}
                            />
                            Al Munakh
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Lord - Al-Rehab')}
                                checked={selectedBrands.includes('Lord - Al-Rehab')}
                            />
                            Lord - Al-Rehab
                        </label>
                    </div>

                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Hemani Tea')}
                                checked={selectedBrands.includes('Hemani Tea')}
                            />
                            Hemani Tea
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Dermive')}
                                checked={selectedBrands.includes('Dermive')}
                            />
                            Dermive
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Boho Decor')}
                                checked={selectedBrands.includes('Boho Decor')}
                            />
                            Boho Decor
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Flying Wooden')}
                                checked={selectedBrands.includes('Flying Wooden')}
                            />
                            Flying Wooden
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('fauji')}
                                checked={selectedBrands.includes('fauji')}
                            />
                            fauji
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Baking Food Items')}
                                checked={selectedBrands.includes('Baking Food Items')}
                            />
                            Baking Food
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('Golden')}
                                checked={selectedBrands.includes('Golden')}
                            />
                            Golden
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => handleBrandFilter('LED Lights')}
                                checked={selectedBrands.includes('LED Lights')}
                            />
                            LED Lights
                        </label>
                    </div>

                </div>

                <div className='product-render'>
                    {filteredByBrand.map((product) => (
                        <div style={{ width: '25%', marginBottom: '10px', border: '1px solid rgb(139, 244, 244)', padding: '10px', backgroundColor: '#FFECEC' }} key={product.id}>
                            <img className='img-response' src={product.images[0]} />
                            <h5 style={{ color: '#E1AEFF', textAlign: 'center' }}>{product.title}</h5>
                            <p style={{ color: 'rgb(252, 78, 78)', textAlign: 'center' }}>Price: ₹ {product.price * 80}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Product2;