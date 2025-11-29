window.onload = function() {
    tarteaucitron.init({
        "privacyUrl": "",
        "hashtag": "#tarteaucitron",
        "cookieName": "tarteaucitron",
        "orientation": "bottom",
        "showAlertSmall": true,
        "cookieslist": true,
        "adblocker": false,
        "AcceptAllCta": true,
        "highPrivacy": true,
        "handleBrowserDNTRequest": false,
        "googleConsentMode": true
    });

    tarteaucitron.user.gtagUa = 'G-4WC1W6F4MT';
    tarteaucitron.user.gtagMore = function () {};
    (tarteaucitron.job = tarteaucitron.job || []).push('gtag');
};
