import restarauntImage from './RImage.jpg';
import bannerImage from './bannerImg.png';

export function createContent(){

const mainBody = document.getElementById('content');

function createBanner () {

const bannerDiv = document.createElement('div');
const button = document.createElement('button');

button.innerHTML = 'Book A Table';

bannerDiv.id = 'bannerDiv';
button.className = 'button';

mainBody.appendChild(bannerDiv);
bannerDiv.appendChild(button);

};

function createInfoContent(){

const secondDiv = document.createElement('div');
mainBody.appendChild(secondDiv);

function createLeftText () {

const textDiv = document.createElement('div');
const subTitle = document.createElement('h3');
const paragraph = document.createElement('p');

textDiv.id = 'leftContainer';
subTitle.id = 'leftHeading';
paragraph.id = 'leftText';

subTitle.innerHTML = 'The Ivy In The Park, Canary Wharf';
paragraph.innerHTML = `The Ivy in the Park View brings friendly, sophisticated all-day dining to the heart of Canary Wharf. From modern British classics to Asian-inspired cuisine and fantastic vegan and vegetarian dishes, you’ll find something for everyone to love. Located in one of Canary Wharf’s most sustainable buildings, the restaurant is set across two floors. As well as the main dining area and bar, there are two outdoor terraces overlooking a vibrant green space, and offering those working, living and visiting the area a perfect spot to relax and unwind in the warmer months.`

secondDiv.appendChild(textDiv);
textDiv.appendChild(subTitle);
textDiv.appendChild(paragraph);

};

function createRightContent(){

    const mainDiv = document.createElement('div');
    const title = document.createElement('h3');
    const menuDiv = document.createElement('div');
    const button = document.createElement('button');

    button.innerHTML = 'View All Menus';
    button.className = 'button';
    
    function createComponent(title, text){

        const contentDiv = document.createElement('div');
        const titleElement = document.createElement('h5');
        const textElement = document.createElement('p');

        contentDiv.className = 'menuConent';
        titleElement.className = 'menuTitle';
        textElement.className = 'menuText';

        titleElement.innerHTML = title;
        textElement.innerHTML = text;

        secondDiv.appendChild(contentDiv);
        contentDiv.appendChild(titleElement);
        contentDiv.appendChild(textElement);

    };

    mainBody.appendChild(mainDiv);
    mainDiv.appendChild(title);
    mainDiv.appendChild(menuDiv);
    mainDiv.appendChild(button);

    createComponent('A La Carte', 'Available Everyday');
    createComponent('$19.50 Two-Course Menu', 'Available Monday - Friday, 11:30am - 6:30pm');
    createComponent('Breakfast', 'Available Everyday');

};

createLeftText();
createRightContent();

};

createBanner();
createInfoContent();

};