// Function to add CSS styles
const addCSS = () => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    .campspace-widget {
        font-family: 'Rubik', sans-serif;
        font-size: 18px;
        margin: 0;
        padding: 0;
    
        --csGreen: #00B189;
        --csGreenShaded: #27634D;
        --csYellow: #FFB100;
        --csYellowShaded: #D99D26;
        --csBlue: #4074BC;
        --csBlueShaded: #234063;
    
        --csBlack: #000000;
        --csWhite: #FFFFFF;
        --csDarkGrey: #32322E;
        --csDarkGreyShaded: #191917;
        --csMediumGrey: #9D9D95;
        --csMediumGreyShaded: #6E6E68;
        --csLightGrey: #F5F5F1;
        --csLightGreyShaded: #DDDDD9;

        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;

        min-height: 50vh;
    }
    
    .campspace_widget {
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    
        width: 60%;
    
        border: 3px solid;
        border-radius: 2.4vw;
        
        background-color: var(--csWhite);
    }
    
    .campspace_widget__image img {
        width: 100%;
        height: 100%;
        border-bottom-left-radius: 2.2vw;
        border-top-left-radius: 2.2vw;
        object-fit: cover;
    }
    
    .campspace_widget__info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 12%;
        max-width: 80%;
    }
    
    .campspace_widget__info_logo {
        max-width: 90%;
    }
    
    .campspace_widget__info_title {
        color: var(--csMediumGreyShaded);
        font-size: 1.2vw;
        font-weight: 500;
        max-width: 100%;
    }
    
    .campspace_widget__info_book {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .campspace_widget__info_price {
        color: var(--csMediumGreyShaded);
        font-size: 0.7vw;
        font-weight: 500;
    }
    
    .campspace_widget__info_book a {
        text-decoration: none;
        width: 80%;
    }
    
    .campspace_widget__info_button {
        background-color: var(--csGreen);
        color: var(--csWhite);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.7vh 0;
        border-radius: 1.5vw;
        font-size: 1vw;
    }
`;
    document.head.appendChild(styleElement);
};

console.log("test");

// Function to create and append the widget to the body
const createWidget = (data) => {
    const section = document.createElement("section");
    section.className = "campspace-widget";
    // I want to load data from the api json file
    const widgetContent = `
    <article class="campspace_widget">
        <section class="campspace_widget__image">
            <img src="https://campspace.com/media/detail/uploads/space/hc/_2/73/hc_2739426a1a6d37b13fe8e2ae837ad324.jpeg" alt="example of accomodation" loading="lazy">
        </section>
        <section class="campspace_widget__info">
            <img class="campspace_widget__info_logo" src="assets/campspace-logo.png" alt="campspace logo">
            <span class="campspace_widget__info_title">Glamping Sandkjærgård</span>
            <div class="campspace_widget__info_book">
                <span class="campspace_widget__info_price">starting from €${data[1].price} a night</span>
                <a href="${data[1].booking_url}">
                    <div class="campspace_widget__info_button">
                        Book now
                    </div>
                </a>
            </div>
        </section>
    </article>
`;

    section.innerHTML = widgetContent;
    document.body.appendChild(section);

    addCSS();
};

// Fetch the data from the API
fetch("https://campspace-dummy-data-bb26a5c22467.herokuapp.com/hosts")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        createWidget(data);
    });