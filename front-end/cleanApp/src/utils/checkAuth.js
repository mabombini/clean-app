export const checkAuth = async () => 
{
            const token = localStorage.getItem('token_cleanapp');
            if (!token) 
                {
                    navigate('/login');
                    return;
                }
            try
            {
                const response = await fetch('http://localhost:3000/auth/authenticate', {
                    headers:{ Authorization: `Bearer ${token}` }
            })

            const data = await response.json();
            
            if (response.status === 401 || response.status === 403) {
                navigate('/login');
                return;
            }
            return data;
            } 
            catch (error)
            {
                console.error("Error during authentication check:", error);
            } 
}