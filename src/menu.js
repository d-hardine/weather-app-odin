import restaurantMenu from './menu-cropped.jpg'; //import restaurant menu image
import { homeBtn, menuBtn, aboutBtn } from '.';

function menuPage() {
    content.textContent = '';
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    menuBtn.classList.add('active');

    //menu page container
    const menu = document.createElement('div');
    content.appendChild(menu);
    menu.classList.add('menu');

    //render menu image
    const restaurantMenuImage = document.createElement('img');
    restaurantMenuImage.src = restaurantMenu;
    restaurantMenuImage.style.borderRadius = '15px';
    restaurantMenuImage.style.boxShadow = '0 4px 4px grey';
    menu.appendChild(restaurantMenuImage);
}

export { menuPage };