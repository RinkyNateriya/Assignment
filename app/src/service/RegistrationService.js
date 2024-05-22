
const apiUrl = 'http://localhost:8010/api/user/userdata';

async function RegistrationService(user) {
    // debugger
    console.log(user);
    try {
        const response = await fetch("http://localhost:8010/api/user/userdata", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('Response data:', responseData);
        return user;
        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error to the caller if needed
    }
}

async function AdminLoginService(user) {
    // debugger
    console.log(user);
    try {
        const response = await fetch("http://localhost:8010/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log('Response data:', responseData);
        return responseData;
        
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error to the caller if needed
    }
}

export {  RegistrationService, AdminLoginService };
