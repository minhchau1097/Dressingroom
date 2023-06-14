import { domId } from "../models/dom.js";
import { domClass } from "../models/dom.js";
export const renderUL = (arr) => {
    let content = '';

    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            content += `
        <li class="nav-item">
        <a class="nav-link active" id="pills-${arr[i].type}-tab" data-toggle="pill" href="#pills-${arr[i].type}" role="tab"
        aria-controls="pills-${arr[i].type}" aria-selected="true">${arr[i].showName}</a>
        </li>
        `
        } else {
            content += `
            <li class="nav-item">
            <a class="nav-link" id="pills-${arr[i].type}-tab" data-toggle="pill" href="#pills-${arr[i].type}" role="tab"
            aria-controls="pills-${arr[i].type}" aria-selected="true">${arr[i].showName}</a>
            </li>
            `
        }

    };
    domId('pills-tab').innerHTML = content;
}
export const renderProduct = (arr, type, id) => {
    let content = '';
    arr.forEach(product => {
        if (product.type === type) {
            content += `
        
            <div class= 'col-lg-3 mt-5'>
                <div class='text-center'>
                <img src='${product.imgSrc_jpg
                }' alt='${product.name}' />
                <p>${product.name}</p>
                <button class=' btn btn-success' onclick='btnTest("${product.id}","${product.type}")'>Thử đồ</button>
                </div>
            </div>
        
        `
        } else {
            return;
        }
    });
    domId(id).innerHTML = content;
}

export const render = (arr, id, type) => {
    let content = '';
    arr.forEach(product => {
        if (product.id === id) {
            content = `
            <img class='img-fluid' src="${product.imgSrc_png}" alt="${product.name}" />
            `
        }
    })
    if (type === 'topclothes') {
        domClass(type)[0].style.zIndex = '2';
    } else if (type === 'botclothes') {
        domClass(type)[0].style.zIndex = '3';
    } else if (type === 'shoes') {
        domClass(type)[0].style.zIndex = '2';
    }
  
    domClass(type)[0].innerHTML = content;
   
}

export const renderBG = (arr, id, type) => {
    let content = '';
    arr.forEach(product => {
        if (product.id === id) {
            content = `
            <img class='w-100 h-100' src="${product.imgSrc_png}" alt="${product.name}" />
            `
        }
    })
    domClass(type)[0].innerHTML = content;
    domClass(type)[0].style.background='none'
}
