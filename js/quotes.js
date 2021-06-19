const quotes = [

   {
    quote: "삶이 있는 한 희망은 있다",
    author:"키케로",
   },
   {
    quote: "산다는것 그것은 치열한 전투이다",
    author:"로망로랑",
   },
   {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author:"사무엘존슨",
   },
   {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다",
    author:"파울로 코엘료",
   },
   {
    quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
    author:"찰리채플린",
   },
   {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author:"엘버트 허버드",
   },
   {
    quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author:"이드리스 샤흐",
   },
   {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다",
    author:"마르쿠스 아우렐리우스 안토니우스",
   },
   {
    quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author:"L.론허버드",
   },
   {
    quote: "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다",
    author:"랄프 왈도 에머슨",
   },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = " - "+todaysQuote.author;