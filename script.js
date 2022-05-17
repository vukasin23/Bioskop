let cenaSvega=0;

function rezervisi(element)
{
    let mainEl = element.closest('.container-item');
    let price = mainEl.querySelector('.Cena').innerText;
    let total = document.querySelector('.potroseno-para');
    
    price = price.substring(1);
    price = parseInt(price);
    console.log(total);
    cenaSvega+=price;
    total.innerHTML = `Potroseno je ${cenaSvega}$`;
    element.setAttribute('disabled','true');
    mainEl.setAttribute('class','kupljeno');
}
