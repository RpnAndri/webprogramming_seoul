// Using fetch API to get data from a placeholder API
async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (response.status != 200) {
            throw new Error('Error');
        }
        const data = await response.json();
        displayUserData(data);
    } catch (err) {
        document.getElementById('userData').innerText = 'Fetch error: ' + err;
    }
}

function displayUserData(user) {
    // console.log(user);
    const name = user.name;
    const email = user.email;
    const city = user.address.city;
    document.getElementById("userData").innerHTML = `
        <p> Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>City: ${city}</p>
    `
}

document.getElementById("fetchUser").addEventListener("click", fetchUserData);