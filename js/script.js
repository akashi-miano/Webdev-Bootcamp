const modalBtn = document.querySelector('.hero__btn')
const modal= document.querySelector('.modal')
const modalExit = document.querySelectorAll('.modal__close')
const container = document.querySelectorAll('.faqs__item') 
const bars = document.querySelector('.bars')
const close = document.querySelector('.close')
const list = document.querySelector('.hero__list')
const links = document.querySelectorAll('.hero a')

// modal
modalBtn.addEventListener ('click', () => {
	modal.style= 'visibility: visible; pointer-events: auto'
})

modalExit.forEach(item => {
	item.addEventListener('click', () => {
		modal.style = 'display: none'
	})
})

window.addEventListener('click', e => {
	if (e.target === modal) {
		e.target.style = 'display: none'
	}
})




// accordion
container.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
	})
})

// mobile nav

bars.addEventListener('click', () => {
	list.classList.toggle('active') 

	if (list.classList.contains('active')) {
		bars.style = 'z-index: 0'
	}
})


close.addEventListener('click', () => {
	list.classList.remove('active') 
})

// hide list when link is clicked

links.forEach(item => {
	item.addEventListener('click', () => {
		list.classList.remove('active') 
	})
})
