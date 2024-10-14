import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/LoginForm.jsx';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './component/ProtectedRoute';
import DashboardDetails from "./component/DashboardDetails.jsx";

function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard/:id"
                    element={
                        <ProtectedRoute>
                            <DashboardDetails />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
