import React from 'react'
// import './Header.css';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='banner'>
             <Navbar />
            <div className='banner-content'>
                <div className='container'>
                    <div className='banner-test'>
                        <h3>Pizza delivery</h3>
                        <h1>PIZZA PLAZA</h1>
                        <p>One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes
                            or tomato sauce, mozzarella, and basil.</p>
                               <div className='banner-btn'>
                            < a  href=" " className='btn-btn'>DELEVERY NOW</a>
                            </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header;