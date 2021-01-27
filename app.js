// Тоглогчийн ээлжийг хадгалах хувьсагч 1 тоглогчийг 0 2 дугаар тоглогчийг 1 тэмдэгдэе
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгадах хувьсагч
var scores = [0, 0];

// Тоглогчдын ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;


// Програм эхлэхэд бэлдэе
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener('click', function () {
    // Шооны аль талаара буусныг хадгалах хувьсагч, 1-6 тооны санамсаргүй 
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber);
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + diceNumber + '.png';
});


