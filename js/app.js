document.addEventListener('DOMContentLoaded', () => {

    const itemMenu = document.querySelectorAll('.menu__btn')
    
    itemMenu.forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.nextElementSibling.classList.toggle('list-hidden--active')
            elem.lastChild.classList.toggle('menu__icon--active')
        })
    })


    const tabs = document.querySelector('.main');
    const tabsBtn = document.querySelectorAll('.holi__link');
    const tabsContent = document.querySelectorAll('.about');
    

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('holi__link')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => {el.classList.remove('holi__link--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('holi__link--active');
                tabsHandler(tabsPath);
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => {el.classList.remove('about--active')});
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('about--active');
    };
    

    const btnBack = document.querySelector('.btn--back');
    const btnNext = document.querySelector('.btn--next');
    
    const positionEntry = document.querySelector('.position__entry');
    const positionAll = document.querySelector('.position__all');
    
    const historyBox = document.querySelectorAll('.history__box');

    let count = 1


    positionAll.textContent = historyBox.length

    

    btnBack.addEventListener('click', () => {
        count--
        btnNext.removeAttribute('disabled')
        btnNext.style.opacity = "1"
        positionEntry.textContent = count
        historyBox.forEach(elem => elem.classList.remove('history__box--active'))
        historyBox[count - 1].classList.add('history__box--active')
        if(count == 1) {
            btnBack.setAttribute('disabled', '')
            btnBack.style.opacity = ".3"
        }
        
    }) 


    btnNext.addEventListener('click', () => {
        count++
        btnBack.removeAttribute('disabled') 
        btnBack.style.opacity = "1"
        positionEntry.textContent = count
        historyBox.forEach(elem => elem.classList.remove('history__box--active'))
        historyBox[count - 1].classList.add('history__box--active')
        if(count === historyBox.length) {
            btnNext.setAttribute('disabled', '')
            btnNext.style.opacity = ".3"
        }

    }) 

});

