fetch('data/items.json')
    .then(response => response.json())
    .then(data => {
        const discoverSection = document.querySelector('.discover');
        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.gridArea = `item${index + 1}`;
            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;
            discoverSection.appendChild(card);
        });
    });

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lastModified').textContent = document.lastModified;

    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    localStorage.setItem('lastVisit', currentDate);

    if (!lastVisit) {
        alert("Welcome! Let us know if you have any questions.");
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            alert("Back so soon! Awesome!");
        } else {
            alert(`You last visited ${daysSinceLastVisit} day${daysSinceLastVisit > 1 ? 's' : ''} ago.`);
        }
    }
});
