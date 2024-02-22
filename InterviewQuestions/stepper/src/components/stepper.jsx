import { useRef, useEffect } from "react"
import { useState } from "react"

const CheckoutStepper = ({ stepsConfig = [] }) => {

    const [currentStep, SetCurrentStep] = useState(1)
    const [isComplete, SetIsComplete] = useState(false)
    const [margin, SetMargin] = useState({
        marginLeft: 0,
        marginRight: 0
    })
    const stepRef = useRef([])

    useEffect(() => {
      SetMargin({
        marginLeft: stepRef.current[0].offsetWidth/2,
        marginRight: stepRef.current[stepsConfig.length - 1].offsetWidth/2
      })
    }, [stepRef])
    

    const ActiveComponent = stepsConfig[currentStep-1]?.component

    const handleClick = () => {
        SetCurrentStep(currStep => {
            // console.log("Previous step:", prevStep, " -- ", stepsConfig.length)
            if(currStep === stepsConfig.length){
                SetIsComplete(true)
                return currStep
            } else {
                return currStep+1;
            }
        })
        
    }
    
    const calculateProgressBarWidth = () => {
        console.log("Calcu progress bar width :: ", ((currentStep-1) / (stepsConfig.length-1)) * 100);
        return ((currentStep-1) / (stepsConfig.length-1)) * 100;
    }

    return (
        <>
            <div className="stepper">
                {stepsConfig.map((step, index) => {
                    // console.log("Current step: ", currentStep, " -- ", index+1)
                    return (
                        <div key={step.name} 
                        ref={(el)=>{stepRef.current[index] = el}}
                        className={`step ${currentStep>index+1 || isComplete? "complete":""}  ${currentStep===index+1 ? "active":""}`}>
                            <div className="step-number">{currentStep>index+1 || isComplete?(<span>&#10003;</span>):(index + 1)}</div>
                            <div className="step-name">{step.name}</div>
                        </div>
                    )
                })}
                <div className="progress-bar"
                style={{
                    width: `calc(77% - ${margin.marginLeft + margin.marginRight}px)`,
                    marginLeft: margin.marginLeft,
                    marginRight: margin.marginRight
                }}>
                    <div className="progress" style={{width: `${calculateProgressBarWidth()}%`}}></div>
                </div>
            </div>
            <div className="componentInfo">
                <ActiveComponent />
                {!isComplete? <button className="btn btn-primary" onClick={handleClick}>{currentStep===stepsConfig.length?"Finnish": "Next"}</button>: <></>}
            </div>
        </>
    )
}

export default CheckoutStepper
