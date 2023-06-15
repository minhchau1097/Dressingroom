
import { renderBG, renderUL ,render,renderProduct} from "./controllers.js"


window.btnTest = btnTest;

fetch('../data/Data.json')
    .then(res => res.json())
    .then((data) => {
        renderUL(data.navPills);
        renderProduct(data.tabPanes, 'topclothes', 'tab-shirt')
        renderProduct(data.tabPanes, 'botclothes', 'tab-bott')
        renderProduct(data.tabPanes, 'shoes', 'tab-shoes')
        renderProduct(data.tabPanes, 'handbags', 'tab-bag')
        renderProduct(data.tabPanes, 'necklaces', 'tab-neck')
        renderProduct(data.tabPanes, 'hairstyle', 'tab-hair')
        renderProduct(data.tabPanes, 'background', 'tab-bg')

    })


function btnTest(id, type) {
  
    fetch('../data/Data.json')
        .then(res => res.json())
        .then((data) => {
            if(type !=='background'){
            render(data.tabPanes, id, type)
            }else {
                renderBG(data.tabPanes, id, type)
            }
        })
}
