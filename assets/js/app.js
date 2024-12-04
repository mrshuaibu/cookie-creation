'use strict';

const firstDialog = document.getElementById('first-dialog');
const secondDialog = document.getElementById('second-dialog');
const acceptAllButton = document.getElementById('accept-all');
const settingsButton = document.getElementById('settings-btn');
const saveSettingsButton = document.getElementById('save-settings');
const browserCheckbox = document.getElementById('browser');
const osCheckbox = document.getElementById('os');
const screenWidthCheckbox = document.getElementById('screen-width');
const screenHeightCheckbox = document.getElementById('screen-height');
const overlay = document.getElementById('overlay');

setTimeout(() => {
    if (!getCookie('cookiesAccepted')) {
        overlay.style.display = 'block';
    }
}, 1000);

function closeDialogs() {
    firstDialog.style.display = 'none';
    secondDialog.style.display = 'none';
    overlay.style.display = 'none';
}

settingsButton.addEventListener('click', () => {
    firstDialog.style.display = 'none';
    secondDialog.style.display = 'block';
});

acceptAllButton.addEventListener('click', () => {
    setCookie('cookiesAccepted', true, 1);
    setCookie('browser', getBrowser(), 1);
    setCookie('os', getOS(), 1);
    setCookie('screenWidth', screen.width, 1);
    setCookie('screenHeight', screen.height, 1);
    closeDialogs();
});

saveSettingsButton.addEventListener('click', () => {
    setCookie('cookiesAccepted', true, 1);
    setCookie('browser', browserCheckbox.checked ? getBrowser() : '', 1);
    setCookie('os', osCheckbox.checked ? getOS() : '', 1);
    setCookie('screenWidth', screenWidthCheckbox.checked ? screen.width : '', 1);
    setCookie('screenHeight', screenHeightCheckbox.checked ? screen.height : '', 1);
    closeDialogs();
});

overlay.addEventListener('click', closeDialogs);

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=None;Secure`;
    console.log('Set Cookie: ', name, value); 
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function getBrowser() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
    if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
    if (userAgent.indexOf('Safari') > -1) return 'Safari';
    if (userAgent.indexOf('Edge') > -1) return 'Edge';
    if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) return 'Internet Explorer';
    return 'Unknown';
}

function getOS() {
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('Win') > -1) return 'Windows';
    if (userAgent.indexOf('Mac') > -1) return 'MacOS';
    if (userAgent.indexOf('Linux') > -1) return 'Linux';
    if (userAgent.indexOf('Android') > -1) return 'Android';
    if (userAgent.indexOf('like Mac') > -1) return 'iOS';
    return 'Unknown';
}
