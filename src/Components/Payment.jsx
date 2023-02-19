import { useState } from 'react';


const  Payment = () => {
  const [cash, setCash] = useState(40);
  const [card, setCard] = useState(60);
  
  const handleCashChange = (event) => {
    setCash(event.target.value);
  };
  
  const handleCardChange = (event) => {
    setCard(event.target.value);
  };
  
  const handleSubmit = () => {
    // handle submission of payment data here
    console.log(`Cash: ${cash} Rs`);
    console.log(`Card: ${card} Rs`);

  };
  
  return (
    <div className="payment-container">
      <h2>Total Bill: 100 Rs</h2>
      <div className="cash-container">
        <label htmlFor="cash-input">Pay via Cash</label>
        <input type="number" id="cash-input" value={cash} onChange={handleCashChange} />
      </div>
      <div className="card-container">
        <label htmlFor="card-input">Pay via Online/Credit Card</label>
        <input type="number" id="card-input" value={card} onChange={handleCardChange} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Payment;

