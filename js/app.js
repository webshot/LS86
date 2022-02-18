$(window).on('load', function () {
    $('#hello_menu_text').delay(17500);

    $('#hello_menu_text_text').typeIt({
        strings: ["Los Santos '86 - это UCP проект на платформе SA:MP 0.3.7,", "который позволит игрокам прочувствовать атмосферу 80-ых годов в любимой игре", "и вновь оказаться на стороне криминала или полиции,", "начинающих IT-шников из гаража", "или коммерсантов, музыкантов или реднеков в Лос-Сантосе."],
        speed: 50,
        autoStart: true,
        instant: true,
        loop: true
    });
});

//window.addEventListener("scroll", function(){
//    let scrolPos = window.scrollY;
//  
//   if(scrolPos > 0){
//     nav.classList.add('bgcolor');
//   }else{
 //    nav.classList.remove('bgcolor');
//   }
//  })

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

$(".nav_hamb").on('click',function(){
  $(".menu_block").show();
})

$(".nav_hamb_block").on('click',function(){
  $(".menu_block").hide();
})