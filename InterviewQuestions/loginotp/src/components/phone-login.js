import React, { useState } from 'react'
import OtpInput from './otp-input';

const PhoneOtpLogin = () => {

    const [phoneNumber, SetPhoneNumber] = useState("");
    const [showOtp, SetShowOtp] = useState(false);

    const handlePhoneNumber = (e) => {
        SetPhoneNumber(e.target.value);
    }

    const handleGetMobileOtp = (e) => {
        e.preventDefault();
        const regex = /[^0-9]/g;
        if(phoneNumber.length > 10 || regex.test(phoneNumber)){
            SetShowOtp(false)
            alert("Please enter valid phone number")
            return
        }
        SetShowOtp(true)
    }

    const onOtpSubmit = (otp) => {
        console.log("Login Successfull with otp : ", otp)
    }
 
    return (
        <div className='d-flex justify-content-center'>
            {/* <form className='d-flex flex-column'>
                <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
                <button className="btn btn-sm btn-primary">Get OTP</button>
            </form> */}
            <div className="card" style={{"width":"20rem"}}>
            {!showOtp ? <div className="card-body">
                    <p className="card-text">
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
                    </p>
                    <button disabled={phoneNumber.length<10} href="#" className="btn btn-primary" onClick={handleGetMobileOtp}>Get OTP</button>
                </div>: <div className="card-body">
                 <OtpInput length={4} onOtpSubmit={onOtpSubmit} phoneNumber={phoneNumber} />
                </div>}
            </div>
        </div>
    )
}

export default PhoneOtpLogin
