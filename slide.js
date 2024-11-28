document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#slide img");
    const prevButton = document.getElementById("btn1");
    const nextButton = document.getElementById("btn2"); 

    let currentIndex = 0; 

    function updateSlider(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.remove("hidden"); 
            } else {
                img.classList.add("hidden");
            }
        });
    }

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; 
        updateSlider(currentIndex);
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; 
        updateSlider(currentIndex);
    });

    updateSlider(currentIndex);
});
