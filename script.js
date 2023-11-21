const ProfileCard = (() => {
    return {
        setData: (cardIndex, data) => {
            const profile = document.querySelectorAll('.profile-img')[cardIndex];
            const name = document.querySelectorAll('.name')[cardIndex];
            const phone = document.querySelectorAll('.phone')[cardIndex];
            const location = document.querySelectorAll('.location')[cardIndex];
            const country = document.querySelectorAll('.country')[cardIndex];

            let fullname = `${data.name.first} ${data.name.last}`;
            let address = `${data.location.street.number}, ${data.location.street.name}, ${data.location.city}, ${data.location.state}`;

            profile.src = data.picture.large;
            name.textContent = fullname;
            phone.textContent = data.phone;
            location.textContent = address;
            country.textContent = data.location.country;
        }
    };
})();

fetch('https://randomuser.me/api/?results=3')
.then((resp) => resp.json())
.then((data) => {
    for (let i = 0; i < 3; i++) {
        ProfileCard.setData(i, data.results[i]);
    }
});
