// Hozircha shartli kurslar (keyin API dan olamiz)
const kurslar = {
    usdt: { usdt: 1, btc: 0.000026, ton: 0.22, uzs: 12800 },
    btc: { usdt: 38500, btc: 1, ton: 8460, uzs: 492000000 },
    ton: { usdt: 4.55, btc: 0.000118, ton: 1, uzs: 58200 },
    uzs: { usdt: 0.000078, btc: 0.00000000203, ton: 0.0000172, uzs: 1 }
};

document.getElementById('give-amount').addEventListener('input', calculate);
document.getElementById('give-currency').addEventListener('change', calculate);
document.getElementById('get-currency').addEventListener('change', calculate);
document.getElementById('exchange-btn').addEventListener('click', calculate);
document.getElementById('submit-btn').addEventListener('click', submitExchange);

function calculate() {
    let giveAmount = parseFloat(document.getElementById('give-amount').value);
    let giveCurr = document.getElementById('give-currency').value;
    let getCurr = document.getElementById('get-currency').value;

    if (isNaN(giveAmount) || giveAmount <= 0) {
        document.getElementById('get-amount').value = '';
        return;
    }

    let kurs = kurslar[giveCurr][getCurr];
    let result = giveAmount * kurs;
    
    if (getCurr === 'uzs') {
        result = Math.floor(result).toLocaleString();
    } else {
        result = result.toFixed(6);
    }
    
    document.getElementById('get-amount').value = result;
}

function submitExchange() {
    let giveAmount = document.getElementById('give-amount').value;
    let giveCurr = document.getElementById('give-currency').value;
    let getCurr = document.getElementById('get-currency').value;
    let getAmount = document.getElementById('get-amount').value;

    if (!giveAmount || giveAmount <= 0) {
        showMessage("❌ Iltimos, summani kiriting!", "red");
        return;
    }

    showMessage(`✅ So'rov yuborildi! Siz ${giveAmount} ${giveCurr.toUpperCase()} berib, ${getAmount} ${getCurr.toUpperCase()} olasiz. Admin tez orada bog'lanadi.`, "green");
}
function showMessage(msg, color) {
    let msgDiv = document.getElementById('message');
    msgDiv.innerHTML = msg;
    msgDiv.style.backgroundColor = color === "red" ? "#fee" : "#e6fffa";
    msgDiv.style.color = color === "red" ? "red" : "green";
    setTimeout(() => {
        msgDiv.innerHTML = '';
        msgDiv.style.backgroundColor = '';
    }, 5000);
}
