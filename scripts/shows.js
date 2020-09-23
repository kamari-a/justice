let showsListings = document.querySelector('.shows__listings');

// Creates the heading section for tablet and desktop formats
let headingContainer = document.createElement('div');
headingContainer.classList.add('shows__heading-container');
showsListings.appendChild(headingContainer);

let mainDate = document.createElement('h3');
mainDate.classList.add('shows__table-heading');
mainDate.innerText = 'DATES';
headingContainer.appendChild(mainDate);

let mainVenue = document.createElement('h3');
mainVenue.classList.add('shows__table-heading');
mainVenue.innerText = 'VENUE';
headingContainer.appendChild(mainVenue);

let mainLocation = document.createElement('h3');
mainLocation.classList.add('shows__table-heading');
mainLocation.innerText = 'LOCATION';
headingContainer.appendChild(mainLocation);

let mainButton = document.createElement('h3');
mainButton.classList.add('shows__table-heading--button');
mainButton.innerText = '';
headingContainer.appendChild(mainButton);


let showsSection = [
    {
        "date": "Mon Dec 17 2018",
        "venue": "Ronald Lane",
        "location": "San Francisco, CA",
        "button": "BUY TICKETS",
    },
    {
        "date": "Tue Jul 18 2019",
        "venue": "Pier 3 East",
        "location": "San Francisco, CA",
        "button": "BUY TICKETS",
    },
    {
        "date": "Fri Jul 22 2019",
        "venue": "View Lounge",
        "location": "San Francisco, CA",
        "button": "BUY TICKETS",
    },
    {
        "date": "Sat Aug 12 2019",
        "venue": "Hyatt Agency",
        "location": "San Francisco, CA",
        "button": "BUY TICKETS",
    },
    {
        "date": "Fri Sep 05 2019",
        "venue": "Moscow Center",
        "location": "San Francisco, CA",
        "button": "BUY TICKETS",
    },
    {
        "date": "Wed Aug 11 2019",
        "venue": "Pres Club",
        "location": "San Francisco, CA",
        "button": "BUY TICKETS",
    }
]


//SHOWS
const displayShows = () => {
    for (var i = 0; i < showsSection.length; i++) {
        let showsContainer = document.createElement('div');
        showsContainer.classList.add('shows__shows-container');
        showsListings.appendChild(showsContainer);

        let headingDate = document.createElement('h3');
        headingDate.classList.add('shows__heading-date');
        headingDate.innerText = 'DATE';
        showsContainer.appendChild(headingDate);

        let showsDate = document.createElement('h3');
        showsDate.classList.add('shows__shows-date');
        showsDate.innerText = showsSection[i].date;
        showsContainer.appendChild(showsDate);

        let headingVenue = document.createElement('h3');
        headingVenue.classList.add('shows__heading-venue');
        headingVenue.innerText = 'VENUE';
        showsContainer.appendChild(headingVenue);

        let showsVenue = document.createElement('p');
        showsVenue.classList.add('shows__shows-venue');
        showsVenue.innerText = showsSection[i].venue;
        showsContainer.appendChild(showsVenue);

        let headingLocation = document.createElement('h3');
        headingLocation.classList.add('shows__heading-location');
        headingLocation.innerText = 'LOCATION';
        showsContainer.appendChild(headingLocation);

        let showsLocation = document.createElement('p');
        showsLocation.classList.add('shows__shows-location');
        showsLocation.innerText = showsSection[i].location;
        showsContainer.appendChild(showsLocation);

        let buyTickets = document.createElement('button');
        buyTickets.classList.add('shows__button');
        buyTickets.innerText = showsSection[i].button;
        showsContainer.appendChild(buyTickets);
    }
}

displayShows(showsSection);







