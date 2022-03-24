const $images = document.querySelector('.carousel__images').children
const $leftBtn = document.querySelector('.carousel__left')
const $rightBtn = document.querySelector('.carousel__right')
const $pipsWrapper = document.querySelector('.carousel__pips')

let active = 0
let timer = null
let slideshowInterval = 5

for (let i = 0; i < $images.length; i++) {
    let $pip = document.createElement('button')
    $pip.classList.add('carousel__pip')
    $pip.setAttribute('data-index', i)
    $pipsWrapper.appendChild($pip)
}

$pipsWrapper.addEventListener('click', function (e) {
    if (e.target.classList.contains('carousel__pip')) {
        jumpTo(parseInt(e.target.dataset.index))
    }
})

const $pips = $pipsWrapper.children

$images[active].classList.add('carousel--show')
$pips[active].classList.add('carousel--active')

$leftBtn.addEventListener('click', function () {
    jumpTo(active-1)
})

$rightBtn.addEventListener('click', function () {
    jumpTo()
})

function jumpTo(_index) {
    if (_index === undefined) _index = active + 1
    
    $images[active].classList.remove('carousel--show')
    $pips[active].classList.remove('carousel--active')

    active = _index
    if (active >= $images.length) active = 0
    else if (active < 0) active = $images.length - 1
    
    $images[active].classList.add('carousel--show')
    $pips[active].classList.add('carousel--active')

    if (timer !== null) clearTimeout(timer)
    timer = setTimeout(jumpTo, slideshowInterval * 1000)
}

timer = setTimeout(jumpTo, slideshowInterval * 1000)