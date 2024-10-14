const Modal = ({ message, onClose }) => (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Notification</h2>
            <p className="text-gray-700 mb-4">{message}</p>
            <div className="flex justify-end">
                <button
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    </div>
);

export default Modal;
