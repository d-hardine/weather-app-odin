import './styles.css';
import { homePage } from './home.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';

const content = document.querySelector('#content'); //content container

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

homeBtn.addEventListener('click', homePage);
menuBtn.addEventListener('click', menuPage);
aboutBtn.addEventListener('click', aboutPage);

homePage();

export { homeBtn, menuBtn, aboutBtn}