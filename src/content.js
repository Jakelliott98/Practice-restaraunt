import restarauntImage from './RImage.jpg';
import bannerImage from './bannerImg.png';

export function createContent(){

const mainBody = document.getElementById('content');

// Banner and button CTA
const bannerDiv = document.createElement('div');
const ctaButton = document.createElement('button');
ctaButton.innerHTML = 'Book A Table';
bannerDiv.id = 'bannerDiv';
ctaButton.id = 'ctaButton';
mainBody.appendChild(bannerDiv);
mainBody.appendChild(ctaButton);

// Sub-header positioned to the left in a div with paragraph


// Menus title and 3 options to the right
/*
const header = document.createElement('h3');
header.innerHTML = 'The Ivy In The Park, Canary Wharf';
const mainParagraph = document.createElement('p');
mainParagraph.innerHTML = `The Ivy in the Park View brings friendly, sophisticated all-day dining to the heart of Canary Wharf. From modern British classics to Asian-inspired cuisine and fantastic vegan and vegetarian dishes, you’ll find something for everyone to love. Located in one of Canary Wharf's most sustainable buildings, the restaurant is set across two floors. As well as the main dining area and bar, there are two outdoor terraces overlooking a vibrant green space, and offering those working, living and visiting the area a perfect spot to relax and unwind in the warmer months.`;
const ctaButton = document.createElement('button');
ctaButton.innerHTML = 'Order now!';
const image = document.createElement('img');
image.src = restarauntImage;
image.style.height = '400px';

// Appending elemments
mainBody.appendChild(ctaButton);
mainBody.appendChild(header);
mainBody.appendChild(mainParagraph);
mainBody.appendChild(image);
mainBody.appendChild(ctaButton);
*/
};