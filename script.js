window.onload = loadBookmarks;

function addBookmark() {
    const name = document.getElementById('siteName').value;
    const url = document.getElementById('siteURL').value;

    if (!name || !url) {
        alert("Please fill in both fields.");
        return;
    }

    const bookmark = { name, url };
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    document.getElementById('siteName').value = '';
    document.getElementById('siteURL').value = '';

    loadBookmarks();
}

function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const list = document.getElementById('bookmarksList');
    list.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        const div = document.createElement('div');
        div.className = 'bookmark';
        div.innerHTML = `
          <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          <button onclick="deleteBookmark(${index})" style="float:right;">❌</button>
        `;
        list.appendChild(div);
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    loadBookmarks();
}