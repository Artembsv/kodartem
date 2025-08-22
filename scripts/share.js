(function () {
    document.addEventListener('DOMContentLoaded', function insertDesignedByWatermark() {
        const shareKey = window.shareKey;
        const host = window.host;
        const apiUrl = `https://${host}/api/public/user/is_free`;
        const readdyLogo = '';
        // const watermarkUrl = 'https://public.readdy.ai/gen_page/watermark.png';
        posthog.capture('sharePageVisited', { shareKey })
        function checkIfPaidUser(shareKey) {
            return fetch(`${apiUrl}?shareKey=${shareKey}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(res => {
                    return !res.data.is_free;
                })
                .catch(error => {
                    return false;
                });
        }

        function setFavicon() {
            var existingFavicon = document.querySelector('link[rel="icon"]');
            if (existingFavicon) {
                document.head.removeChild(existingFavicon);
            }
            var link = document.createElement('link');
            link.type = 'image/png';
            link.rel = 'icon';
            link.href = readdyLogo;
            document.head.appendChild(link);
            var fontLink = document.createElement('link');
            fontLink.rel = 'stylesheet';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Secular+One&display=swap';
            document.head.appendChild(fontLink);
        }

        function createWatermark() {
            
        }
        let paidUser = true;
        setFavicon();
        function handleWaterMark(isPay) {

        }
        checkIfPaidUser(shareKey).then(isPaidUser => {
            paidUser = isPaidUser;
            handleWaterMark(isPaidUser);
        });
        const observer = new MutationObserver(() => {
            handleWaterMark(paidUser);
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
})();