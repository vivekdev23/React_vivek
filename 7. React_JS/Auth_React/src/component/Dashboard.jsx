

import { useState, useEffect } from 'react';
import { getDashboardData } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
            return;
        }
        const fetchData = async () => {
            try {
                const response = await getDashboardData(token); // Fetch dashboard data
                if (response) {
                    setData(response);
                } else {
                    setData([]);
                }
            } catch (error) {
                console.error('Error fetching dashboard data', error);
                setError('Failed to fetch dashboard data');
            }
        };
        fetchData();
    }, [navigate]);


    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">Dashboard</h1>
            <button
                onClick={handleLogout} // Handle logout
                className="mb-4 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
            >
                Logout
            </button>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error message display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.slice(0, 9).map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>
                        <p className="text-gray-700">Email: <span className="font-medium">{item.email}</span></p>
                        <p className="text-gray-700">Phone: <span className="font-medium">{item.phone}</span></p>
                        <p className="text-gray-600 mb-4">Website: <span className="font-medium">{item.website}</span></p>
                        <button
                            onClick={() => navigate(`/dashboard/${item.id}`)}
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        >
                            Preview
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;


export const logoutUser = () => {
    localStorage.removeItem('token');

};
