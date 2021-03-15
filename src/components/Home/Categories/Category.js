import React from 'react'
import './Category.css';



function Category({ title, img }) {
    return (
        <div className="category">


            <img src={img} alt="Some photo" />
            <div className="category__title">
                <p><strong>{title}</strong></p>
            </div>

        </div>
    )
}

export default Category
