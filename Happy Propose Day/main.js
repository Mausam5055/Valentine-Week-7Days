let noButtonMoved = false;

document.getElementById('yesButton').onclick = handleClick;
document.getElementById('noButton').onclick = handleClick;

function handleClick(event) {
    event.preventDefault(); // Prevent the default action (navigation)

    if (event.target.id === 'yesButton') {
        window.location.href = 'yes.html'; // Redirect to yes.html
    } else if (event.target.id === 'noButton') {
        moveNoButton(); // Move the noButton to a random position
        noButtonMoved = true; // Set the flag to true
    }

    if (!noButtonMoved) {
        swapButtons(); // Swap the buttons only if noButton is not moved
    }

    showHeart(event.clientX, event.clientY); // Show heart animation at the click position
}

function swapButtons() {
    let yesButton = document.getElementById('yesButton');
    let noButton = document.getElementById('noButton');

    // Swap the text
    let tempText = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = tempText;

    // Swap the links
    let tempHref = yesButton.href;
    yesButton.href = noButton.href;
    noButton.href = tempHref;
}

function moveNoButton() {
    let noButton = document.getElementById('noButton');
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function showHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    // Remove the heart after the animation ends
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}