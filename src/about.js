import warteg from './warteg.jpg'; //import warteg image
import nasiGoreng from './nasi-goreng-kitchen-stories-small.jpg';
import { homeBtn, menuBtn, aboutBtn } from '.';

function aboutPage() {
    content.textContent = '';
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    aboutBtn.classList.add('active');

    //about page container
    const about = document.createElement('div');
    content.appendChild(about);
    about.classList.add('about');

    //render warteg image to about page
    const wartegImage = document.createElement('img'); 
    wartegImage.src = warteg;
    wartegImage.style.borderRadius = '15px';
    wartegImage.style.width = '35vw';
    wartegImage.style.boxShadow = '0 4px 4px grey';
    about.appendChild(wartegImage);
    wartegImage.classList.add('about-content');

    //add about info stuff
    const aboutContainer = document.createElement('div'); //create about container
    about.appendChild(aboutContainer);

    const aboutTitle = document.createElement('div');
    const aboutContent = document.createElement('div');
    aboutTitle.textContent = 'About';
    aboutTitle.style.fontFamily = 'cursive';
    aboutTitle.style.fontSize = '3em';
    aboutContent.textContent = 'Sumber Barokah restaurant is an authentic Indonesian cuisine restaurant and the one and only Indonesian restaurant that you can find in the Shadow Realm.';
    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutContent);
    aboutContainer.classList.add('about-content');

    //add open hours in info container
    const infoContainer = document.createElement('div'); //create about container
    about.appendChild(infoContainer);

    const infoHours = document.createElement('div');
    infoHours.textContent = 'Hours';
    infoHours.style.fontFamily = 'cursive';
    infoHours.style.fontSize = '3em';
    infoContainer.appendChild(infoHours);
    const infoHoursContent1 = document.createElement('div');
    const infoHoursContent2 = document.createElement('div');
    infoHoursContent1.textContent = 'Mon - Fri: 10am - 9pm';
    infoHoursContent2.textContent = 'Sat - Sun: 12am - 11pm';
    infoContainer.appendChild(infoHoursContent1);
    infoContainer.appendChild(infoHoursContent2);
    infoContainer.classList.add('about-content');

    //add location in info container
    const locationTitle = document.createElement('div');
    locationTitle.textContent = 'Location';
    locationTitle.style.fontFamily = 'cursive';
    locationTitle.style.fontSize = '3em';
    infoContainer.appendChild(locationTitle);
    const LocationContent = document.createElement('div');
    LocationContent.textContent = 'Next to the 7th division Orc Recruitment office, Shadow Realm';
    infoContainer.appendChild(LocationContent);

    //render nasi goreng to about page
    const nasiGorengImage = document.createElement('img'); 
    nasiGorengImage.src = nasiGoreng;
    nasiGorengImage.style.borderRadius = '15px';
    nasiGorengImage.style.width = '35vw';
    nasiGorengImage.style.boxShadow = '0 4px 4px grey';
    nasiGorengImage.alt = 'Nasi Goreng image from kitchenstories.com';
    about.appendChild(nasiGorengImage);
    nasiGorengImage.classList.add('about-content');
}

export {aboutPage}