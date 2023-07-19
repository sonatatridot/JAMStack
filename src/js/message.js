const messages = [
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Good Night"
]

var msg = messages[Math.floor(Math.random() * Math.floor(messages.length))];

document.querySelector('.message').append(msg);