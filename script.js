document.addEventListener("DOMContentLoaded", () => {
    let currentSlide = 0
    const slides = document.querySelectorAll(".slide")
    const dots = document.querySelectorAll(".dot")
    const totalSlides = slides.length

    let slideInterval = null

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
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000) // 5 секунд
    }

    function stopSlideShow() {
        clearInterval(slideInterval)
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
            const slideIndex = parseInt(this.getAttribute("data-slide"))
            goToSlide(slideIndex)
            stopSlideShow()
            startSlideShow()
        })
    })

    const slider = document.querySelector(".slider")
    slider.addEventListener("mouseenter", stopSlideShow)
    slider.addEventListener("mouseleave", startSlideShow)

    startSlideShow()
})