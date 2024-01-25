import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreaters} from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreaters, dispatch);

    const handleWithdrawMoney = ()  => {
        withdrawMoney(100)
    }

    const handleDepositMoney = () => {
        depositeMoney(100)
    }

    return (
        <>
            <div className='container'>
                <h2>Buy Shoes @50rs</h2>
                <div className="card" style={{ "width": "18rem" }}>
                    {/* <img src="shoe.jpg" className="card-img-top" alt="ShoeImage" /> */}
                    <div className="card-body">
                        <h5 className="card-title">Deposit/Withdraw Money</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <div className='d-flex justify-content-between'>
                            <button className="btn btn-sm btn-primary mx-2" onClick={handleWithdrawMoney}>-</button>
                            Add to cart
                            <button className="btn btn-sm btn-primary mx-2" onClick={handleDepositMoney}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
