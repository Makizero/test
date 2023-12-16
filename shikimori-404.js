var func = function() {
  const error404Element = document.querySelector("p.error-404");
  if (error404Element) {
    const url = window.location.href;
    if (url.includes('/mangas/')) {
      const mangaId = url.match(/mangas\/[a-z]*(\d+)-/)[1];
      const newUrl = `https://myanimelist.net/manga/${mangaId}`;
      window.location.href = newUrl;
    } else if (url.includes('/animes/')) {
      const animeId = url.match(/animes\/[a-z]*(\d+)-/)[1];
      const newUrl = `https://myanimelist.net/anime/${animeId}`;
      window.location.href = newUrl;
    }
  }
};
func();
