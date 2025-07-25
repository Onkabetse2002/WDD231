document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
    loadSpotlights();
});

function fetchWeatherData() {
    const apiKey = 'YOUR_API_KEY';
    const city = 'KURUMAN'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('weather-data').innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function loadSpotlights() {
    const members = [
        {
            name: 'Kuruman Manganese Mine',
            logo: 'https://placehold.co/200x100?text=Manganese+Mine',
            phone: '053 712 9600',
            address: 'Hotazel, Kuruman',
            website: 'https://www.south32.net',
            level: 'Gold'
        },
        {
            name: 'The Eye of Kuruman Lodge',
            logo: 'https://placehold.co/200x100?text=Eye+Lodge',
            phone: '053 712 1138', 
            address: '100 Lerato St, Kuruman',
            website: 'http://eyeofkuruman.co.za',
            level: 'Silver'
        },
        {
            name: 'Kuruman Meat Market',
            logo: 'https://placehold.co/200x100?text=Meat+Market',
            phone: '053 712 2045',
            address: '23 Market St, Kuruman',
            website: 'http://kurumanmeats.co.za',
            level: 'Silver'
        }
    ];

    const spotlightsContainer = document.getElementById('spotlights');
    const randomMembers = members.sort(() => 0.5 - Math.random()).slice(0, 3); 

    randomMembers.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.classList.add('spotlight-card');
        spotlightCard.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo" />
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.level}</p>
        `;
        spotlightsContainer.appendChild(spotlightCard);
    });
}
