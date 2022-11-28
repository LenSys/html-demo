// Async / Await / Fetch
async function fetchUsers() {
    // wait until async fetch function gets the json response
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // transform json response data to json object
    const usersData = await res.json();

    // log users data
    console.log(usersData);

    let usersHtml = '';
    usersHtml += '<ol>';
    usersData.forEach(user => {
            usersHtml += '<li>' + user.username + ': ' + user.name + ' (' + user.email + ')</li>'
        });
    usersHtml += '</ol>';

    document.getElementById('users').innerHTML = usersHtml;
}

fetchUsers();


function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({ userEmail: email });
        }, 3000);
    });
}

function getUserVideos(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['video1', 'video2', 'video3']);
        }, 2000);
    });
}

function videoDetails(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video");
        }, 2000);
    });
}

loginUser('demouser@gmail.com', "123456")
    .then(user => getUserVideos(user.email))
    .then(videos => videoDetails(videos[0]))
    .then(detail => console.log(detail));