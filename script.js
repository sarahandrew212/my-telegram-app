let coinCount = 0;

document.getElementById("sagittariusIcon").addEventListener("click", function() {
    coinCount++;
    document.getElementById("coinCount").innerText = "Coins: " + coinCount;
});

function showSection(section) {
    const sections = ['earn', 'mine', 'referral', 'wallet'];
    const sectionDiv = document.getElementById("section");
    sectionDiv.style.display = "block";
    sectionDiv.innerHTML = "";

    let content = "";

    switch (section) {
        case 'earn':
            content = "You can earn coins by completing tasks!";
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

    sectionDiv.innerText = content;
}
