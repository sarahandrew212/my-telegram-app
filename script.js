let coinCount = 0;

document.getElementById("sagittariusIcon").addEventListener("click", function() {
    coinCount++;
    document.getElementById("coinCount").innerText = "Coins: " + coinCount;
});

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
            content = "Your wallet holds all your earned coins.";
            break;
    }

    sectionDiv.innerHTML = content;
}
