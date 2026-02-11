document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const question = document.getElementById('question');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');
    const celebrationGif = document.getElementById('celebration-gif');
    const noSound = document.getElementById('no-sound');

    const phrases = [
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Don't do this!",
        "You might regret this!",
        "Give it another thought!",
        "Press Yes!",
        "What about a puppy?",
        "Please say yes!",
        "I'm going to cry...",
        "My heart will break!",
        "Don't be shy!",
        "Come on, you know you want to!",
        "I'm adorable, aren't I?"
    ];

    let phraseIndex = 0;

    noBtn.addEventListener('mouseover', () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        // Calculate maximum allowed movement within the viewport and away from the "Yes" button
        const maxLeft = viewportWidth - noBtnRect.width - 20; // 20px padding from right
        const maxTop = viewportHeight - noBtnRect.height - 20; // 20px padding from bottom

        // Ensure button stays somewhat near the container, but also moves around playfully
        // Aim for a range that is within the viewport but doesn't overlap the "Yes" button too much

        const newX = Math.random() * (maxLeft - 20) + 10; // Keep it within bounds
        const newY = Math.random() * (maxTop - 20) + 10; // Keep it within bounds

        // Update phrase on button - Removed as per user request
        // noBtn.textContent = phrases[phraseIndex];
        // phraseIndex = (phraseIndex + 1) % phrases.length;

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    noBtn.addEventListener('click', () => {
        if (noSound) {
            noSound.currentTime = 0; // Rewind to the start
            noSound.play();
        }
        noBtn.style.display = 'none'; // Hide the no button
        // You might want to display a message or do something else here
        // if the 'No' button is actually clicked.
    });

    yesBtn.addEventListener('click', () => {
        question.textContent = "Iloveyouuu tara PLP";
        message.textContent = "💖 Happy Valentine's Day! 💖";
        message.classList.remove('hidden');
        noBtn.style.display = 'none'; // Hide the no button
        yesBtn.style.display = 'none'; // Hide the yes button
        container.querySelector('.buttons').style.display = 'none'; // Hide buttons container
        celebrationGif.classList.remove('hidden'); // Show the celebration GIF

        // Create hearts animation
        for (let i = 0; i < 50; i++) {
            createHeart();
        }
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // 3-5 seconds
        heart.style.opacity = Math.random();
        heart.style.fontSize = Math.random() * 10 + 10 + 'px'; // 10-20px
    
        // Remove heart after animation to prevent DOM bloat
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
});