import indonesianCuisine from './indonesian-cuisine-barcelo-com.jpg'; //import Indonesian cuisine image
import { homeBtn, menuBtn, aboutBtn } from '.';

function homePage() {
    console.log(content);
    content.textContent = '';
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    homeBtn.classList.add('active');

    //home page container
    const home = document.createElement('div');
    content.appendChild(home);
    home.classList.add('home');

    //render nasi goreng image to home page
    const indonesianCuisineImage = document.createElement('img'); 
    indonesianCuisineImage.src = indonesianCuisine;
    indonesianCuisineImage.alt = 'Indonesian cuisine image from Barcelo';
    indonesianCuisineImage.style.borderRadius = '15px';
    indonesianCuisineImage.style.boxShadow = '0 4px 4px grey';
    home.appendChild(indonesianCuisineImage);
    indonesianCuisineImage.classList.add('home-content');

    //render text to home page
    const restaurantTagLine = document.createElement('div');
    restaurantTagLine.style.fontFamily = 'cursive', 'Helvetica';
    restaurantTagLine.textContent = 'Taste the pleasure of authentic Indonesian cuisine, with ingredients and spices that can only be obtained in Indonesia, only at Sumber Barokah restaurant.';
    home.appendChild(restaurantTagLine);
    restaurantTagLine.classList.add('home-content');
}

export { homePage };