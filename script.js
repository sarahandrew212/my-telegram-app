<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coin Collector</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 id="coinCount">Coins: 0</h1>
        <div class="icon-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sagittarius_icon.svg/1024px-Sagittarius_icon.svg.png" 
                 alt="Sagittarius" id="sagittariusIcon" />
        </div>
        <div class="menu">
            <button class="menu-button" onclick="showSection('earn')">Earn</button>
            <button class="menu-button" onclick="showSection('mine')">Mine</button>
            <button class="menu-button" onclick="showSection('referral')">Referral</button>
            <button class="menu-button" onclick="showSection('wallet')">Wallet</button>
        </div>
        <div id="section" class="section"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
