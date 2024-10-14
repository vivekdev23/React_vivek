import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { getDashboardDetails } from '../api/authApi';

const DashboardDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location = '/';
            return;
        }

        const fetchDetails = async () => {
            try {
                const data = await getDashboardDetails(id, token);
                setDetails(data);
            } catch (error) {
                setError('Failed to fetch details: ' + error.message);
            }
        };

        fetchDetails();
    }, [id]);

    // Error handling
    if (error) {
        return <div className="p-6 text-red-500">{error}</div>;
    }

    if (!details) {
        return (
            <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="loader"></div>
                <p className="text-gray-700 ml-2">Loading...</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{details.name}</h2>
                <p className="text-lg text-gray-700 mb-2"><strong>Email:</strong> {details.email}</p>
                <p className="text-lg text-gray-700 mb-2"><strong>Phone:</strong> {details.phone}</p>
                <p className="text-lg text-gray-700 mb-4"><strong>Website:</strong> {details.website}</p>
                <button
                    onClick={() => navigate(`/dashboard`)}
                    className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default DashboardDetails;
