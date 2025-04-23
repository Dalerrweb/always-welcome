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

const translations = {
    uz: [
        "B2B va B2C modellarida korporativ tadbirlarni rejalashtirish, ishlab chiqish va tashkil etishga qaratilgan xizmatlar majmuasi.",
        "Korporativ tadbirlar, reklama, ko'ngilochar va moda sanoati uchun foto, video va reklama mahsulotlarini ishlab chiqarish.",
        "Biz mijoz ehtiyojlariga yo'naltirilgan va muayyan biznes muammolarni hal qiluvchi kreativ dizayn yaratamiz.",
        "Dunyoning yetakchi reklama agentliklari bilan hamkorlik va xalqaro sheriklik DMC tarmog'i."
    ],
    en: [
        "The cycle of services aimed at the planning, development and organization a full range of corporate activities in B2B and B2C models.",
        "Production of photo, video and promotional products for corporate events, advertising, entertainment and fashion-industry.",
        "We make a creative design which is oriented on customer needs and solve certain business problems.",
        "Private international partner network DMC and cooperation with the world's leading advertising agencies."
    ]
};

let currentLang = 'en';

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'uz' : 'en';
    const paragraphs = document.querySelectorAll('.service-item p');

    paragraphs.forEach((p, index) => {
        p.textContent = translations[newLang][index];
    });

    // Меняем текст на кнопке 1
    const btn = document.getElementById('lang-toggle');
    btn.textContent = newLang === 'en' ? 'UZ' : 'EN';

    currentLang = newLang;
}