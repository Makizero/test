(function() {
    function replaceSelector() {
        const elements = document.querySelectorAll('.mv_box._has_playlist._hide_recomms');
        elements.forEach(element => {
          element.classList.remove('_hide_recomms');
          element.classList.add('_hide_playlist');
        });
    }

    setInterval(() => {
        if (document.querySelectorAll('.mv_box._has_playlist._hide_recomms').length > 0) {
            replaceSelector();
        }
    }, 10);
})();
