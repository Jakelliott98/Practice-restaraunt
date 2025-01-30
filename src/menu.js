export function menuPage(){

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

    createBanner();

};

