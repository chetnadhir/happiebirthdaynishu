const numStars = 1000; 
const starField = document.querySelector(".star-field");
const totalAnimationDuration = 10;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  
  star.style.opacity = Math.random();

  
  if (Math.random() < 0.1) {
    star.classList.add("colored-star");
    const colors = ["yellow", "blue", "green", "purple", "pink"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.backgroundColor = randomColor;
  }

  star.style.animationDuration = `${Math.random() * 3 + 1}s`;

  star.style.animationDelay = `${Math.random() * totalAnimationDuration}s`;

  starField.appendChild(star);
}
