import React from  'react';
import SearchField from './SearchField';
import './styles/Recipes.css';

const Recipes = () => (
    <body className="recipes">
    <SearchField
       handleButtonClick = {this.handleButtonClick}
       handleUserInput = {this.handleUserInput}/>
        <h2>Recipes</h2>
        <div>
            <h3>Chicken Alfredo</h3>
            <img src="https://www.cscassets.com/recipes/wide_cknew/wide_62233.jpg"
            alt="Chicken Alfredo Img"/>
            <p>
                <li>1. Cut chicken in strips. Season with salt and white pepper and saute in butter. Meanwhile in a separate pot, simmer garlic cloves in cream for 10 minutes.
                    Watch: How to Peel A Head Of Garlic</li>

                <li>2. Pour cream into pan with chicken, removing garlic cloves. Stir in Parmesan. Cook pasta according to package instructions.
                    Watch: How to Cook Pasta</li>

                <li>3. Toss pasta with sauce and serve with extra Parmesan.</li>

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
    </body>
)

export default Recipes;
