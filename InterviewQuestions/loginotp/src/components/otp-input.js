import React, { useRef, useState, useEffect } from 'react'

const OtpInput = ({length, onOtpSubmit, phoneNumber}) => {
    const [otp, SetOtp] = useState(new Array(length).fill(""))
    const inputref = useRef([]);

    useEffect(() => {
        if(inputref.current[0]){
            inputref.current[0].focus()
        }
    }, [])
    

    const handleOtpchange = (index, e) => {
        const value = e.target.value;
        if(isNaN(value)) return
        const newOtp = [...otp]

        //Take only one value which is at the last position
        newOtp[index] = value.substring(value.length - 1)
        SetOtp(newOtp)
        const combinedOtp = newOtp.join("");

        if(combinedOtp.length === length) onOtpSubmit(combinedOtp)

        //Move foxcus to next position after inserting value in previous position
        if(value && index < length - 1 && inputref.current[index+1]){
            inputref.current[index+1].focus();
        }
    }
    const handleClick = (index) => {
        inputref.current[index].setSelectionRange(1,1);

        //Move focus to the first empty position
        if(index>0 && !otp[index-1]){
            inputref.current[otp.indexOf("")].focus();
        }
    }

    const handleKeyDown = (index, e) => { 
        if(e.key === "Backspace" && index>0  && !otp[index] && inputref.current[index-1]){
            inputref.current[index-1].focus();
        }
    }
  return (
    <div>
        <h5>Enter OTP sent to {phoneNumber} </h5>
        {
            otp.map((value, index) => {
                return (
                    <input type="text" 
                    value={value} 
                    key={index}
                    ref={(input) => (inputref.current[index]=input)}
                    onChange={(e)=>handleOtpchange(index, e)}
                    onClick={()=> handleClick(index)}
                    onKeyDown={(e)=> handleKeyDown(index, e)}
                    className='otpInput'
                    />
                )
            })
        }
    </div>
  )
}

export default OtpInput
