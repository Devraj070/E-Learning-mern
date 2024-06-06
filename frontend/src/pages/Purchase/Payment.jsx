import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const Payment = () => {
    const { id } = useParams();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate()


    const handleCardNumberChange = (e) => setCardNumber(e.target.value);
    const handleExpiryDateChange = (e) => setExpiryDate(e.target.value);
    const handleCvvChange = (e) => setCvv(e.target.value);
    const handleCardHolderNameChange = (e) => setCardHolderName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        toast.success('Payment successful!');
        navigate(`/courses/${id}/videos`);


    };

    return (
        <div className="max-w-lg mx-auto mt-40 p-6 bg-white rounded-lg shadow-lg">
            <Toaster />
            <h2 className="text-2xl font-bold mb-4 text-center">Payment for Course ID: {id}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="cardNumber">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="1234 5678 9012 3456"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="expiryDate">
                        Expiry Date
                    </label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
                        CVV
                    </label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="123"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="cardHolderName">
                        Cardholder Name
                    </label>
                    <input
                        type="text"
                        id="cardHolderName"
                        value={cardHolderName}
                        onChange={handleCardHolderNameChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="John Doe"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
