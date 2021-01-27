// Тоглогчийн ээлжийг хадгалах хувьсагч 1 тоглогчийг 0 2 дугаар тоглогчийг 1 тэмдэгдэе
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгадах хувьсагч
var scores = [0, 0];

// Тоглогчдын ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаара буусныг хадгалах хувьсагч, 1-6 тооны санамсаргүй
var dice = Math.floor(Math.random() * 6) + 1;
// Програм эхлэхэд бэлдэе
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;

document.querySelector('.dice').style.display = "none";

// console.log('Шоо:' + dice);