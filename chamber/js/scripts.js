async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const container = document.getElementById('members-container');
    container.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}

document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('grid');
    document.getElementById('members-container').classList.remove('list');
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('members-container').classList.add('list');
    document.getElementById('members-container').classList.remove('grid');
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

fetchMembers();
