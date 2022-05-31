import React from 'react'

function About() {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>About Us</h3>
                        <h1> Welcome To My PIZZA PLAZA</h1>
                        <p>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some
                            combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other
                            ingredients, baked quickly—usually, in a commercial setting,
                            using a wood-fired oven heated to a very high temperature—and served hot ...</p>

                        <div className='banner-btn'>
                            <a href='' className='btn-btn'>Read more</a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='about-img'>
                            <img src='./pic4.jpg' className='img'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About