const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,

        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 700,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 100,
        get calcSum() {
            return this.price * this.amount
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
}
let btn = [...document.querySelectorAll('.main__product-btn')];

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function () {
        prepare(this)
    })

}

function prepare(item) {
    let parent = item.closest(".main__product")
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    // console.log(parent)
    // console.log(parentId)
    console.log(sym)
    let count = foods[parentId].amount
    console.log(count)
    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    foods[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].kcallSum
}




let level = document.querySelector('.header__timer-extra');
let sum = 0;


function UppingLevel(sum) {
    level.innerHTML = sum++;
    if (sum <= 70) {
        sttop = setTimeout(() => {
            UppingLevel(sum)
            if (sum <= 70) {
                clearInterval(stop)
            }
        }, 10)
    } else if (70 < sum && sum < 91) {
        stop_1 = setTimeout(() => {
            UppingLevel(sum)
            if (sum <= 70) {
                clearInterval(stop)
            }
        }, 100)
    } else if (90 < sum && sum < 101) {
        stop_1 = setTimeout(() => {
            UppingLevel(sum)
            if (sum <= 100) {
                clearInterval(stop)
            }
        }, 300)
    }
}

UppingLevel(sum)

// delivery

let receipt = document.querySelector('.receipt');
let receiptWindow = document.querySelector('.receipt__window')
let receiptWindowOut = document.querySelector('.receipt__window-out')
let addCart = document.querySelector('.addCart')

addCart.addEventListener('click', function(){
    receipt.style.display = "block"
    setTimeout(() => {
        receipt.style.opacity = 1
        receiptWindow.style.top = "20%"
    }, 100);

    let menu = "Sizning chekingiz: \n\n"
    let totalPrice = 0
    let totalKcall = 0

    for (const key in foods) {
        if(foods[key].amount){
            menu+= `${foods[key].name} ${foods[key].amount} ${foods[key].price} = ${foods[key].calcSum} \n\n`
            totalPrice += foods[key].calcSum
            totalKcall += foods[key].kcallSum
        }
    }

    receiptWindowOut.innerHTML = `${menu} \n ${totalKcall} kaloriya \n\n Jami summa: ${totalPrice}`
})

let receiptWindowBtn = document.querySelector('.receipt__window-btn')

receiptWindowBtn.addEventListener('click', function(event){
    if (event.target == event.currentTarget) {
        receipt.style.opacity = 0
        receiptWindow.style.top = "-100%"

        setTimeout(() => {
            receipt.style.display = "none"
            location.reload
        }, 200);
    }
    
})



let mainProductInfo = [...document.querySelectorAll('.main__product-info')] // array

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener('click', function(){
        showImage(this)
    })
}

function showImage (viewImage) {
    let parent = viewImage.closest('.main__product')
    let proImage = parent.querySelector('.main__product img')
    let view = document.querySelector('.view')
    let image = document.querySelector('.view img')
    let viewClose = document.querySelector('.view__close')

    view.classList.add('active')

    let x = proImage.getAttribute('src')

    if (proImage.hasAttribure("src")) {
        image.setAttribute("src",x)
    }

    view.addEventListener('click', function(e){
        if (e,target == e.currentTarget) {
            view.classList.remove('active')
        }
    })

    viewClose.addEventListener('click',function (e){
        view.classList.remove('active')
    })
}