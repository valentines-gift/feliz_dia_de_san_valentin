// Wait for the page to load
window.onload = function() {
    document.getElementById('modal').classList.add('active'); 
};

// Function to play the song and close the modal
document.getElementById('yesBtn').onclick = function() {
    var modal = document.getElementById('modal');
    modal.classList.remove('active');

    var audio = document.getElementById('audioPlayer');
    var songSource = document.getElementById('songSource');

    // URL of the song 
    songSource.src = 'musica/Paz en Cristo.mp3';

    audio.load(); 
    audio.currentTime = 7; // sets the time where the song starts
    audio.play(); 
};

// Function to close the modal without playing
document.getElementById('noBtn').onclick = function() {
    document.getElementById('modal').classList.remove('active');
};
