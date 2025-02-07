document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-img"); // Select images
    const modal = document.createElement("div");

    // Create a modal container
    modal.id = "imageModal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img id="modalImg" src="" alt="Expanded Image">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImg = document.getElementById("modalImg");
    const closeModal = document.querySelector(".close");

    // Open modal when clicking an image
    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    // Close modal when clicking close button
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
