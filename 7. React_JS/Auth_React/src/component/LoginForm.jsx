import { useState } from 'react';
import { authenticateUser } from '../api/Authapi.jsx';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await authenticateUser(username, password);
            if (data.success) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/dashboard');
            } else {
                throw new Error(data.message || 'Login failed');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
                <h1 className="text-2xl mb-4">Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 mb-4 w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white py-2 w-full rounded">
                    Login
                </button>
            </form>
            {error && <Modal message={error} onClose={() => setError(null)} />} {/* Modal for error */}
        </div>
    );
};

export default Login;
