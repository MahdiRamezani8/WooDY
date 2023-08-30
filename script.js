const openMenuButton = document.getElementById('open-menu')
const menu = document.getElementById('menu-MB')
openMenuButton.addEventListener('click', () => menu.classList.toggle('active'))

const tabButtons = document.querySelectorAll('.tab')
const cards = Array.from(document.querySelectorAll('.card'))
const container = document.getElementById('cards')
tabButtons.forEach(btn => btn.addEventListener('click', event => tabFunc(event.target)))

function tabFunc(target) {
    tabButtons.forEach(btn => btn.classList.remove('active'))
    container.classList.add('fade')
    target.classList.add('active')
    setTimeout(() => container.classList.remove('fade'), 500);
    const category = target.dataset.category
    const relatedCards = cards.filter(card => card.dataset.category == category);
    if (category == "All") {
        return
    }
    cards.forEach(element => element.classList.add('deActive'))
    relatedCards.forEach(element => element.classList.remove('deActive'));
}
tabButtons[0].click()