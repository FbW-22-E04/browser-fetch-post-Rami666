// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// import "babel-polyfill";


// \/ All of your javascript should go here \/

// const form = document.getElementById("submit-form");
// const formInput = document.querySelectorAll("input");

// //get data
// async function submitData() {
//     const inputs = [];
//     formInput.forEach(input => {
//         inputs.push(`${input.id}: ${input.value}`);
//     });
//     const jsonData = JSON.stringify(inputs);

//     const settings = {
//         method: 'POST',
//         body: jsonData
//     }

//     //send data
//     const fetchResponse = await fetch(`https://my-json-server.typicode.com/typicode/demo/posts`, settings);
//     const data = await fetchResponse.json();
//     console.log(jsonData);
//     console.log(data)
//     return data;
// }

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     submitData().then(data => alert(`Thank you for submitting your details. 
// User ID: ${data.id}`));
// });

const form = document.getElementById("submit-form");

const name = document.getElementById("#name");
const email = document.getElementById("#email");
const message = document.getElementById("#message");
const checkbox = document.getElementById("#checkbox");
const password = document.getElementById("#password");



form.addEventListener('submit', (e) => {
    console.log('submitted');

    const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        password: password.value,
        checked: checkbox.checked

    }

    console.log(data);
    const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1', settings).then(data => {
        // console.log(data);
        if (data.status === 201) alert('success');
        return data.json();
    }).then(data => console.log(data))
        .catch(err => console.log(err));

    e.preventDefault();
});

