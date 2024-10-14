export const authenticateUser = async (username, password) => {
    if (username === "vivek" && password === "vivek@2002") {
        const token = "fake-jwt-token";
        localStorage.setItem('token', token);
        return { success: true, token };
    } else {
        return { success: false };
    }
};


export const getDashboardData = async (token) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json();
};

export const getDashboardDetails = async (id, token) => {
    if (token === "fake-jwt-token") {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch dashboard details');
        }
        return response.json();
    } else {
        throw new Error('Invalid token');
    }
};


