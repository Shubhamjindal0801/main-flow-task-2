const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all required fields.")
  } else {
    alert(`${name} your form submitted successfully!`)
    contactForm.reset()
  }
})
const images = document.querySelectorAll(".image img")
let currentIndex = 0
function nextImage() {
  images[currentIndex].style.display = "none"
  currentIndex = (currentIndex + 1) % images.length
  images[currentIndex].style.display = "block"
}
setInterval(nextImage, 2500)
const headerContent = document.getElementById("header-content")
let theme = "light"
headerContent.addEventListener("click", () => {
  if (theme == "light") {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    theme = "dark"
  } else if (theme == "dark") {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    theme = "light"
  }
})
function topReach() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
const scrollToTopButton = document.getElementById("scrollToTopButton")
const progressIndicator = document.getElementById("progressIndicator")

window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollPercentage = (scrollTop / scrollHeight) * 100

  // Show/hide the button and update progress indicator width
  if (scrollPercentage > 20) {
    scrollToTopButton.style.display = "block"
  } else {
    scrollToTopButton.style.display = "none"
  }

  progressIndicator.style.width = scrollPercentage + "%"
  if (scrollPercentage > 0) {
    progressIndicator.style.display = "block"
  } else {
    progressIndicator.style.display = "none"
  }
})
