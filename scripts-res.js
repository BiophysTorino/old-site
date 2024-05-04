document.addEventListener('DOMContentLoaded', () => {
    const researchersListContainer = document.getElementById('researchersList');

    // Fetch JSON data and render researchers
    fetch('files/researchers.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(researcher => {
                const researcherDiv = document.createElement('div');
                researcherDiv.classList.add('researcher');

                const socialLinks = Object.entries(researcher.socials).map(([platform, url]) => {
                    return `<a href="${url}" target="_blank"><img src="images/${platform}.svg" alt="${platform}"></a>`;
                }).join('');

                researcherDiv.innerHTML = `
                    <div class="profile-img">
                        <img src="${researcher.image}" alt="${researcher.name}">
                    </div>
                    <div class="profile-details">
                        <h2>${researcher.name}</h2>
                        <p class="title">${researcher.title}</p>
                        <p class="description">${researcher.description}</p>
                        <div class="social-links">${socialLinks}</div>
                    </div>
                `;

                researchersListContainer.appendChild(researcherDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching researchers:', error);
        });
});
