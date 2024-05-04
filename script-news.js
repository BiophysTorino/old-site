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
                    <p class="summary">${article.summary}</p>
                `;

                // Append the populated div to the newsContainer
                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
