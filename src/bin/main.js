(function main() {
    var imgs = document.querySelectorAll('img');
    var wc = new Wc(imgs.length, start);

    [].forEach.call(imgs, function (img) {
        img.onload = wc.trigger();
    });

    function start() {
        var container = document.querySelector('#container');
        if (container) {
            container.classList.remove('hidden');
        }
    }
})();
