import React from 'react'
import { Link } from 'react-router-dom';
import './Category.css';



function Category({ title, img }) {
    return (
        <div className="category">

            <Link to={`/categories/${title}`}>
                <img src={img} alt="" />
            </Link>
            <div className="category__title">
                <p><strong>{title}</strong></p>
            </div>

        </div>
    )
}

export default Category
