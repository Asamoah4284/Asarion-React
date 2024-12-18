import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const URL = ""
  
    const [formData, setFormData] = useState({

        email: '',
        phoneNumber: '',
     
    });
  
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Submitting form data:', formData);
        setEmailError('');
        setPhoneError('');
        try {
            const response = await fetch('http://localhost:5000/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Form submitted successfully');
                onClose();
            } else {
                const errorData = await response.json();
                console.error('Error submitting form:', errorData);
                if (errorData.message.includes('duplicate email')) {
                    setEmailError('This email is already in use. Please use a different email.');
                } else if (errorData.message.includes('duplicate phone number')) {
                    setPhoneError('This phone number is already in use. Please input a different number.');
                }
            }
        } catch (error) {
            console.error('Network error:', error);
        } finally {
            setIsLoading(false);
        }
    };
  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white shadow-xl flex flex-col md:flex-row h-auto md:h-[300px] border-t border-l border-b-12 border-r-0 rounded-lg p-4 m-4 relative w-3/4 md:w-3/4 lg:w-[500px] z-50">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-red-700 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="w-full md:w-3/4 p-6">
                <h2 className="text-2xl font-bold mb-4">Submit your details for 1GB Data</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
               
                    <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 flex gap-2 w-full border border-gray-300 p-2 text-2xl rounded-lg focus:outline-none focus:ring-1 focus:border-gray-300" required />
                        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    </div>
                  
                    <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 flex gap-2 w-full border border-gray-300 p-2 text-2xl rounded-lg focus:outline-none focus:ring-1 focus:border-gray-300" required />
                        {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                    </div>
                   
                    <button type="submit" className="mt-10 w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600">
                        {isLoading ? (
                            <>
                                <span className="loader"></span>
                                Submitting
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex justify-end one-bg">

            </div>
        </div>
    </div>
    );
  };

  export default Modal
