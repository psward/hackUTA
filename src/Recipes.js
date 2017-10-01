import React from  'react';
import SearchField from './SearchField';
import './styles/Recipes.css';

const Recipes = () => (
    <div>
    <SearchField
       handleButtonClick = {this.handleButtonClick}
       handleUserInput = {this.handleUserInput}/>
        <h2>Recipes</h2>
        <div>
            <h3>Chicken Alfredo</h3>
            <img src="https://www.cscassets.com/recipes/wide_cknew/wide_62233.jpg"
            alt="Chicken Alfredo Img"/>
            <p>
                Instructions to make Chicken alfredo with item list.
            </p>
        </div>
        <div>
            <h3>Beef Stroganoff</h3>
            <img src="https://www.cscassets.com/recipes/wide_cknew/wide_5042601.jpg"
            alt="Beef Stroganoff Img"/>
            <p>
                Instructions to make Beef Stroganoff with item list.
            </p>
        </div>
        <div>
            <h3>Apple Pie</h3>
            <img src="http://assets.marthastewart.com/styles/wmax-1500/d17/apple-pie-d102471/apple-pie-d102471_horiz.jpg?itok=dS_mH4uP"
            alt="Applie Pie Img"/>
            <p>
                Instructions to make Apple Pie.
            </p>
        </div>
    </div>
)

export default Recipes;
