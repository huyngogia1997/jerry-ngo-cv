// Typing animation for name
const nameText = "Jerry Ngo"
const typedNameElement = document.getElementById("typed-name")
let charIndex = 0

function typeText() {
  if (charIndex < nameText.length) {
    typedNameElement.textContent += nameText.charAt(charIndex)
    charIndex++
    setTimeout(typeText, 150)
  }
}

// Start typing animation when page loads
window.addEventListener("load", () => {
  setTimeout(typeText, 500)
})

// Matrix rain effect
const canvas = document.getElementById("matrix-canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
const fontSize = 14
const columns = canvas.width / fontSize
const drops = []

for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * -100
}

function drawMatrix() {
  ctx.fillStyle = "rgba(26, 26, 26, 0.05)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "#7ba591"
  ctx.font = fontSize + "px monospace"

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)]
    ctx.fillText(text, i * fontSize, drops[i] * fontSize)

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0
    }
    drops[i]++
  }
}

setInterval(drawMatrix, 50)

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(30px)"
  section.style.transition = "all 0.8s ease-out"
  observer.observe(section)
})
