const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white shadow-lg flex flex-col md:flex-row h-auto md:h-3/4 border-t border-l border-b-12 border-r-0 rounded-lg p-4 m-4 relative w-full md:w-3/4 lg:w-1/2">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className="w-full md:w-3/4 p-6">
                <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
                <form className="space-y-4">
                <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input type="text" className="mt-1 block w-full border border-gray-300 p-4 text-2xl rounded-lg  focus:outline-none focus:ring-1 focus:border-gray-300" required />
                    </div>
                    <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input type="email" className="mt-1 flex gap-2 w-full border border-gray-300 p-4 text-2xl rounded-lg  focus:outline-none focus:ring-1 focus:border-gray-300" required />
                    </div>
                    <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input type="text" className="mt-1 flex gap-2 w-full border border-gray-300 p-4 text-2xl rounded-lg  focus:outline-none focus:ring-1 focus:border-gray-300" required />
                    </div>
                    <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Business/Organization <span className="text-red-500">*</span>
                        </label>
                        <input type="text" className="mt-1 flex gap-2 w-full border border-gray-300 p-4 text-2xl rounded-lg  focus:outline-none focus:ring-1 focus:border-gray-300" required />
                    </div>
                    <div className="mb-4">
                        <label className="flex gap-2 text-2xl font-medium text-gray-700">
                            Select Product <span className="text-red-500">*</span>
                        </label>
                        <select className="mt-1 block w-full border border-gray-300 p-4 text-2xl rounded-lg  focus:outline-none focus:ring-1 focus:border-gray-300" required>
                            <option value="" disabled selected>Select a product</option>
                            <option value="product1">Dropshipping</option>
                            <option value="product2">Website Development</option>
                            <option value="product3">Professional Voiceover</option>
                            <option value="product3">Netflix Account</option>
                        </select>
                    </div>
                    <button type="submit" className=" mt-10 w-full bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 ">
                        Submit
                    </button>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex justify-end call-bg">
            </div>
        </div>
    </div>
    );
  };

  export default Modal