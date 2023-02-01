import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/"><img src="https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png" alt="logo"/></Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                             <BsFillBagFill className="cart-icon" />
    <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
