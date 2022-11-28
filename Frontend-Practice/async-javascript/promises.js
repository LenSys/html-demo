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