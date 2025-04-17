document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0
    const slides = document.querySelectorAll(".slide")
    const dots = document.querySelectorAll(".dot")
    const totalSlides = slides.length

    let slideTimeout = null

    function goToSlide(slideIndex) {
        slides.forEach((slide) => slide.classList.remove("active"))
        dots.forEach((dot) => dot.classList.remove("active"))

        slides[slideIndex].classList.add("active")
        dots[slideIndex].classList.add("active")

        currentSlide = slideIndex
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides
        goToSlide(currentSlide)
        scheduleNextSlide() // ← запускаем следующий показ
    }

    function scheduleNextSlide() {
        clearTimeout(slideTimeout)
        slideTimeout = setTimeout(nextSlide, 3400) // 5 секунд
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
            const slideIndex = parseInt(this.getAttribute("data-slide"))
            goToSlide(slideIndex)
            scheduleNextSlide()
        })
    })

    // const slider = document.querySelector(".slider")
    // slider.addEventListener("mouseenter", () => clearTimeout(slideTimeout))
    // slider.addEventListener("mouseleave", scheduleNextSlide)

    scheduleNextSlide()
})