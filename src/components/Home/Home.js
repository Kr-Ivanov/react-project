import React from 'react'
import Category from './Categories/Category';
import "./Home.css";
import CATEGORIES from './Categories/CategoriesConstant';

function Home() {

    return (
        <div className="home">
            {CATEGORIES.map(x =>
                <Category key={x.id} title={x.title} img={x.img} />
            )}
        </div>
    )
}

export default Home
