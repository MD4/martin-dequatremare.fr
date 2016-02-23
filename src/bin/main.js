(function main() {
    var imgs = document.querySelectorAll('img');
    var wc = new Wc(imgs.length, function() {
        setTimeout(start, 500);
    });

    [].forEach.call(imgs, function (img) {
        img.onload = wc.trigger();
    });

    function start() {
        hideMainLoader();
        initGA();
    }

    function hideMainLoader() {
        var container = document.querySelector('#container');
        if (container) {
            container.classList.remove('hidden');
        }
    }

    function initGA() {
        if (isProduction()) {
            ga('create', 'UA-55779062-1', 'auto');
            ga('send', 'pageview');
        }
    }

    function isProduction() {
        return window.location.host === "martin-dequatremare.fr";
    }

})();
