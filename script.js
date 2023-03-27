const userName = document.querySelectorAll('.user--name'),
    userPic = document.querySelectorAll('.user--pic');

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