const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}


// $('.header-mobile-icon-search')?.onclick = () => {
//     $('.header-mobile-search')?.classList?.toggle('active')
// }


// lskhjdaslkjdlaks
const minminmin = setInterval(() => {
    $$("#service .carousel-item").forEach((item) => {
        let url = ""
        if(item.classList[1]==="active"){
            // console.log(item.querySelector(".service-item-title").innerText);
            const title = item.querySelector(".service-item-title").innerText

            if(title ==="TRAVEL"){
                url = "./assets/images/service-bg-dulich.png";
            }
            if(title ==="FASHION AND BEAUTY"){
                url = "./assets/images/thoi trang.png";
            }
            if(title ==="JEWELRY AND GEMS"){
                url = "./assets/images/trang suc.png";
            }
            if(title ==="REAL ESTATE"){
                url = "./assets/images/bat dong san.png";
            }
            
            $('#service').style.backgroundImage = 'url("' + url + '")';
        }
    })
},100)