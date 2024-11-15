document.getElementById('search-button').addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value;
    // Save the search query (or handle it as needed)
    localStorage.setItem('searchQuery', searchInput);

    // Navigate to the results page with a fade-in effect
    window.location.href = 'results.html';
});
