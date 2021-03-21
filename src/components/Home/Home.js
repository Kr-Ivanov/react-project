import React from 'react'
import Category from './Categories/Category';
import "./Home.css";
import CATEGORIES from './Categories/CategoriesConstant';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home">
            <div className="home__row">
                {CATEGORIES.slice(0, 3).map(x =>

                    <Category key={x.id} title={x.title} img={x.img} />



                )}
            </div>

            <div className="home__row">
                {CATEGORIES.slice(3, 6).map(x =>
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
