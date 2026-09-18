// ব্রেকিং নিউজ অটো চেঞ্জ করার ডেমো কোড
const newsHeadlines = [
    "সব জায়গায় সংবাদ সাইটে আপনাকে স্বাগতম!",
    "আজকের সেরা খবরের আপডেট দেখতে চোখ রাখুন।",
    "খেলাধুলো ও বিনোদনের নতুন সব খবর প্রকাশিত হয়েছে।"
];

let index = 0;
const tickerElement = document.getElementById("ticker");

setInterval(() => {
    index = (index + 1) % newsHeadlines.length;
    tickerElement.innerHTML = `<span>${newsHeadlines[index]}</span>`;
}, 4000);