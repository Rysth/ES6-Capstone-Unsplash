import brandURL from '../assets/images/logo.png';

const logoElement = document.querySelector('#header-logo');
logoElement.src = brandURL;

const faviconElement = document.querySelector('#favicon');
faviconElement.href = brandURL;
