let coinCount = 0;

const tg = window.Telegram.WebApp;

// Fetch and display the username
document.addEventListener("DOMContentLoaded", () => {
    const usernameDiv = document.getElementById("username");
    if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
        const username = tg.initDataUnsafe.user.username || "Unknown User";
        usernameDiv.innerText = "Welcome, @" + username;
    } else {
        usernameDiv.innerText = "Welcome, guest!";
    }
});

// Increment coin count when the Sagittarius logo is clicked
document.getElementById("sagittariusIcon").addEventListener("click", function() {
    coinCount++;
    document.getElementById("coinCount").innerText = "Coins: " + coinCount;
});

// Function to show different sections based on the menu button clicked
function showSection(section) {
    const sectionDiv = document.getElementById("section");
    sectionDiv.style.display = "block";
    sectionDiv.innerHTML = ""; // Clear previous content

    let content = "";

    switch (section) {
        case 'earn':
            content = `
                <h2>Earn Coins</h2>
                <p>Watch our YouTube channel and earn coins!</p>
                <a href="https://www.youtube.com/channel/UCXXXXXXXXX" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" width="50" height="50" />
                    Visit YouTube Channel
                </a>
            `;
            break;
        case 'mine':
            content = "Mining coins will take time and effort.";
            break;
        case 'referral':
            content = "Refer friends to earn bonus coins!";
            break;
        case 'wallet':
            content = `
                <h2>Your Wallet</h2>
                <p>You have earned a total of ${coinCount} coins!</p>
            `;
            break;
    }

    sectionDiv.innerHTML = content;
}
