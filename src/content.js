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
        button.id = 'bannerCTA';

        mainBody.appendChild(bannerDiv);
        bannerDiv.appendChild(button);

    };

    function createInfoContent(){

        const restarauntInfo = document.createElement('section');
        restarauntInfo.id = 'restarauntInfo';
        mainBody.appendChild(restarauntInfo);

        function createRestarauntText () {

            const info = document.createElement('section');
            const heading = document.createElement('h3');
            const paragraph = document.createElement('p');

            info.id = 'textInfo'

            heading.innerHTML = 'The Ivy In The Park, Canary Wharf';
            paragraph.innerHTML = `The Ivy in the Park View brings friendly, sophisticated all-day dining to the heart of Canary Wharf. From modern British classics to Asian-inspired cuisine and fantastic vegan and vegetarian dishes, you’ll find something for everyone to love. Located in one of Canary Wharf’s most sustainable buildings, the restaurant is set across two floors. As well as the main dining area and bar, there are two outdoor terraces overlooking a vibrant green space, and offering those working, living and visiting the area a perfect spot to relax and unwind in the warmer months.`

            restarauntInfo.appendChild(info);
            info.appendChild(heading);
            info.appendChild(paragraph);

        };

        function createMenuListing(){

            const menus = document.createElement('section');
            const heading = document.createElement('h3');
            const menuListings = document.createElement('section');
            const button = document.createElement('button');

            menus.id = 'menuContainer';
            menuListings.id = 'menuListings';

            heading.innerHTML = 'Menus';
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

                restarauntInfo.appendChild(menus);
                menuListings.appendChild(contentDiv);
                contentDiv.appendChild(titleElement);
                contentDiv.appendChild(textElement);

            };

            mainBody.appendChild(menus);
            menus.appendChild(heading);
            menus.appendChild(menuListings);
            menus.appendChild(button);

            createComponent('A La Carte', 'Available Everyday');
            createComponent('$19.50 Two-Course Menu', 'Available Monday - Friday, 11:30am - 6:30pm');
            createComponent('Breakfast', 'Available Everyday');

        };

    createRestarauntText();
    createMenuListing();

    };

    createBanner();
    createInfoContent();

};