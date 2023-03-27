const userName = document.querySelectorAll('.user--name'),
    userPic = document.querySelectorAll('.user--pic'),
    loggedInUser = document.querySelector('.logged--in__username'),
    loggedInUserPic = document.querySelector('.logged--in__userpic');

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then((data) => {
        const firstName = data.results[0].name.first
        const lastName = data.results[0].name.last
        const photo = data.results[0].picture.large

        loggedInUserPic.src = photo
        loggedInUser.textContent = `${firstName} ${lastName}`
    });

userName.forEach((user) => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((data) => {
            user.textContent = data.results[0].login.username
        })
});

userPic.forEach((user) => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then((data) => {
            user.src = data.results[0].picture.thumbnail
        })
});