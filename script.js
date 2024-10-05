const gallery = document.querySelectorAll('figure img');

console.log(gallery)

let currentActiveIndex = 0


gallery.forEach((g, i) => {
    g.addEventListener('click', () => {
        gallery[currentActiveIndex].classList.remove('active')
        gallery[currentActiveIndex].classList.add('close')

        currentActiveIndex = i

        gallery[currentActiveIndex].classList.add('active')
        gallery[currentActiveIndex].classList.remove('close')

    })
})