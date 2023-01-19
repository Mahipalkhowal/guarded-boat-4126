let img=document.getElementById("slider");


let imgarr=[
    "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_2x_1601_ND.jpg",
    "https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_1.jpg",
    "https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_2.jpg",
    "https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section2_web_04012023_3.jpg"
];
let currentIndex=1;
// function display(){
//     img.setAttribute("src",imgarr[currentIndex]);
// }
// display();



setInterval(function(){
    img.src=imgarr[currentIndex];
    currentIndex++;
    if(currentIndex>imgarr.length-1)
        currentIndex=0;
    
},3000);

