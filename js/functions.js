function toggleLamp (id){
    let ctx = document.getElementById(id)
    if(ctx.classList.contains('bi-lightbulb-fill')){
        ctx.classList.replace('bi-lightbulb-fill', 'bi-lightbulb')
        ctx.classList.replace('text-warning', 'text-secondary')
    } else if (ctx.classList.contains('bi-lightbulb')){
        ctx.classList.replace('bi-lightbulb', 'bi-lightbulb-fill')
        ctx.classList.replace('text-secondary', 'text-warning')
    }
}

function toggleSwing (id) {
    let ctx = document.getElementById(id)
    if(ctx.classList.contains('bi-toggle-off')){
        ctx.classList.replace('bi-toggle-off', 'bi-toggle-on')
        ctx.classList.remove('text-secondary')
        ctx.style.color = '#4dd4ac'
    } else if (ctx.classList.contains('bi-toggle-on')){
        ctx.classList.replace('bi-toggle-on', 'bi-toggle-off')
        ctx.classList.add('text-secondary')
        ctx.style.removeProperty('color')
    }
}

function plusMinus (id, type){
    let ctx = document.getElementById(id)
    let value = parseInt(ctx.innerText)

    if(type == 'plus'){
        if (id == 'ac-temp' && value == 30) return
        if (id == 'ac-fan' && value == 4) return
        ctx.innerHTML = value + 1
    } else if (type == 'minus'){
        if (id == 'ac-temp' && value == 16) return
        if (id == 'ac-fan' && value == 1) return
        ctx.innerHTML = value - 1
    }
}


