import './App.css'
import CheckoutStepper from './components/stepper';

const CONFIG_STEPS = [
  {
    name: 'Contacts',
    component: () => <div>Please provide cotact details</div>
  },{
    name: 'Shipping',
    component: () => <div>Please provide Shipping address</div>
  },{
    name: 'Payment',
    component: () => <div>Please add Payment details</div>
  },{
    name: 'Delivered',
    component: () => <div>Your order is delivered</div>
  },
]

function App() {

  return (
    <div>
      <h2>CheckOut Stepper Function</h2>
      <CheckoutStepper stepsConfig={CONFIG_STEPS}/>
    </div>
  )
}

export default App
