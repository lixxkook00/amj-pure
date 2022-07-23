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

            if(title ==="DU LỊCH"){
                url = "./assets/images/service-bg-dulich.png";
            }
            if(title ==="THỜI TRANG, LÀM ĐẸP"){
                url = "./assets/images/thoi trang.png";
            }
            if(title ==="TRANG SỨC, ĐÁ QUÝ"){
                url = "./assets/images/trang suc.png";
            }
            if(title ==="BẤT ĐỘNG SẢN"){
                url = "./assets/images/bat dong san.png";
            }
            
            $('#service').style.backgroundImage = 'url("' + url + '")';
        }
    })
},500)