document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.querySelector('.news-container');

    // Fetch news data from JSON file
    fetch('files/news.json')
        .then(response => response.json())
        .then(newsData => {
            // Loop through each news article in the JSON data
            newsData.forEach(article => {
                // Create a new div element for the news article
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('news-item');

                // Populate the div with article data (title, date, summary)
                articleDiv.innerHTML = `
                    <h2>${article.title}</h2>
                    <p class="date">${article.date}</p>
                    <hr>
                    <p class="summary">${article.summary}</p>
                `;

                // Check if the article has a link field
                if (article.link) {
                    // Create a link element with the external link icon
                    const linkElement = document.createElement('a');
                    linkElement.href = article.link;
                    linkElement.target = '_blank'; // Open link in a new tab

                    // Create an icon element for the external link
                    const externalLinkIcon = document.createElement('img');
                    externalLinkIcon.src = 'images/icons/external-link.svg';
                    externalLinkIcon.alt = 'External Link';

                    // Append the icon to the link element
                    linkElement.appendChild(externalLinkIcon);

                    // Append the link element to the articleDiv
                    articleDiv.appendChild(linkElement);
                }

                // Append the populated div to the newsContainer
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
