export async function submitContactForm(data) {
    try {
        console.log('Sending data to API...');

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to submit the form.');
        }

        const result = await response.json();

        console.log('API Response:', result);

        return result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}