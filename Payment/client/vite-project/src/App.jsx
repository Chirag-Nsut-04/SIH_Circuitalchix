import { useState } from 'react';
import axios from 'axios';
import { load } from '@cashfreepayments/cashfree-js';

function PaymentPage() {
  let cashfree;

  const initializeSDK = async () => {
    cashfree = await load({
      mode: 'sandbox',
    });
  };

  initializeSDK();

  const [orderId, setOrderId] = useState('');

  const getSessionId = async () => {
    try {
      const res = await axios.get('http://localhost:8000/payment');
      if (res.data && res.data.payment_session_id) {
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async () => {
    try {
      const res = await axios.post('http://localhost:8000/verify', {
        orderId: orderId,
      });
      if (res && res.data) {
        alert('Payment verified');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const sessionId = await getSessionId();
      const checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: '_modal',
      };

      cashfree.checkout(checkoutOptions).then(() => {
        verifyPayment(orderId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Inline styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh', // Full viewport height
    background: 'url("https://cdn.dribbble.com/users/743233/screenshots/4496769/dribbble_shot_2_final.gif") no-repeat center center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#f4a261', // Light orange
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#e76f51', // Darker orange
    transform: 'scale(1.05)',
  };

  const buttonActiveStyle = {
    backgroundColor: '#d65a3c', // Even darker orange
  };

  // Handle hover and active states with event handlers
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div style={containerStyle}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={{
          ...buttonStyle,
          ...(isHovered ? buttonHoverStyle : {}),
          ...(isActive ? buttonActiveStyle : {}),
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default PaymentPage;
