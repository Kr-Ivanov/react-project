import React from 'react'
import Category from './Categories/Category';
import "./Home.css";
import CATEGORIES from './Categories/CategoriesConstant';


function Home() {
    return (
        <div className="home">
            <div className="home__row">
                {CATEGORIES.map(x =>
                    <Category
                        key={x.id}
                        title={x.title}
                        img={x.img} />

                )}
            </div>


        </div>
    )
}

export default Home
