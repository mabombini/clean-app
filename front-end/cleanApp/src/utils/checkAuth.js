export const checkAuth = async () => {
    const token = localStorage.getItem('token_cleanapp');

    if (!token) {
        return { authenticated: false };
    }

    try {
        const response = await fetch('http://localhost:3000/auth/authenticate', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (response.status === 401 || response.status === 403) {
            return { authenticated: false };
        }

        return { authenticated: true, user: data.user };

    } catch (error) {
        console.error("Error during authentication check:", error);
        return { authenticated: false };
    }
};