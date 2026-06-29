export async function submitContactForm(data) {
    try {
        console.log('Sending data to Google Sheet...');

        const response = await fetch('https://script.google.com/macros/s/AKfycbwPmaSR9N7_H5BM03Or2W3VUO3-qO_Sypl-phzUBB7O1EQd7xVxwiHGEUZ35xWiWYjAhw/exec', {
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