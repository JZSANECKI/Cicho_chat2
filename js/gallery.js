const galeria = [
'./img/salon1.webp','./img/salon2.webp','./img/salon3.webp','./img/kuchnia1.webp','./img/kuchnia2.webp','./img/kuchnia3.webp','./img/kuchnia4.webp','./img/kuchnia5.webp','./img/kuchnia6.webp','./img/poddasze1.webp','./img/poddasze2.webp','./img/dom1.webp','./img/dom2.webp','./img/dom3.webp','./img/dom4.webp','./img/dom5.webp','./img/dom6.webp','./img/kuchnia_letnia1.webp','./img/kuchnia_letnia2.webp','./img/kuchnia_letnia3.webp','./img/kuchnia_letnia4.webp','./img/kuchnia_letnia5.webp','./img/lazienka1.webp','./img/ogrod1.webp','./img/ogrod2.webp','./img/ogrod3.webp','./img/ogrod4.webp','./img/ogrod5.webp','./img/ogrod6.webp','./img/ogrod7.webp','./img/ogrod8.webp','./img/okolica1.webp','./img/okolica2.webp','./img/okolica3.webp','./img/okolica4.webp','./img/okolica5.webp','./img/okolica6.webp','./img/okolica7.webp','./img/rozne2.webp','./img/rozne3.webp','./img/rozne4.webp','./img/rozne5.webp','./img/rozne6.webp','./img/wspolne1.webp','./img/wspolne2.webp','./img/wspolne3.webp','./img/wspolne4.webp','./img/wspolne5.webp','./img/wspolne6.webp'
];
const lawendowy = [
  './img/lawendowy1.webp','./img/lawendowy2.webp','./img/lawendowy3.webp','./img/lawendowy4.webp','./img/lawendowy5.webp'
];
const bialy = [
  './img/bialy1.webp','./img/bialy2.webp','./img/bialy3.webp','./img/bialy4.webp','./img/bialy5.webp','./img/bialy6.webp','./img/bialy9.webp','./img/bialy10.webp'
];

const zielony = [
'./img/zielony1.webp','./img/zielony2.webp','./img/zielony3.webp','./img/zielony4.webp','./img/zielony5.webp'

]

const siteId=document.querySelector('span')
const tableId=siteId.getAttribute("id")

const nextBtn=document.querySelector('.next-icon');
const prevBtn=document.querySelector('.prev-icon');
const closeBtn=document.querySelector('.close-icon');
const row = document.querySelector('#gallery');



const makeImg = (x) => {
  const div = document.createElement('div');
  row.appendChild(div);
  div.classList.add('col-md-3', 'col-sm-4', 'gallery', 'gal');
  div.setAttribute('style', `background-image: url(${x});`);

}
if(tableId==="lawendowy"){
  lawendowy.forEach((picture) => makeImg(picture));
}else{
  if(tableId==="bialy"){
  bialy.forEach((picture) => makeImg(picture));
  }else{
    if(tableId==="galeria"){
      galeria.forEach((picture) => makeImg(picture)); 
    }else{
  zielony.forEach((picture) => makeImg(picture));}
  }
}


const gal = document.querySelectorAll('.gal');
const pop = document.querySelector('.popup-image');
const img = document.querySelector('.gal-img');

// aktualnie wyświetlane zdjęcie
let currentTarget = null;

const showImg = (target) => {
  currentTarget = target;
  img.setAttribute('src', target.getAttribute('style').slice(22, -2));
}

const clickEventGallery = (e) => {
  pop.classList.add('popup-image-active');
  showImg(e.currentTarget);
};

// nawigacja
nextBtn.addEventListener("click", () => {
  if (currentTarget && currentTarget.nextElementSibling) {
    showImg(currentTarget.nextElementSibling);
  }
});
prevBtn.addEventListener("click", () => {
  if (currentTarget && currentTarget.previousElementSibling) {
    showImg(currentTarget.previousElementSibling);
  }
});
closeBtn.addEventListener("click", () => {
  pop.classList.remove('popup-image-active');
});

const width = window.innerWidth

if(width > 576){
  gal.forEach((item) => item.addEventListener("click", clickEventGallery));
}
