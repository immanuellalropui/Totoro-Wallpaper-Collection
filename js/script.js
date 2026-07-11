/* ==========================================
   Get Popup
========================================== */

const popup = document.getElementById("popup");
const imagePreview = document.getElementById("imagePreview");
const previewImage = document.getElementById("previewImage");
const previewTitle = document.getElementById("previewTitle");
const previewDownload = document.getElementById("previewDownload");
previewDownload.addEventListener("click", (event) => {

    event.stopPropagation();

});


/* ==========================================
   Stop Propagation
========================================== */

document.querySelectorAll(".wallpaper img").forEach(image => {

    image.addEventListener("click", () => {

        previewImage.src = image.src;

        previewTitle.textContent = image.dataset.title;

        previewDownload.onclick = () => {

            const link = document.createElement("a");

            // Tell Cloudinary to force download
            link.href = image.src.replace(
                "/upload/",
                "/upload/fl_attachment/"
            );

            link.download = image.dataset.title + ".jpg";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showPopup();

        };

        imagePreview.classList.add("show");

    });

});


/* ==========================================
   Show Popup Animation
========================================== */

function showPopup() {

    popup.classList.add("show");

    setTimeout(() => {

        popup.classList.remove("show");

    }, 2000);

}
/* ==========================================
   Image Preview
========================================== */

document.querySelectorAll(".wallpaper img").forEach(image => {

    image.addEventListener("click", () => {

        previewImage.src = image.src;

        previewTitle.textContent = image.dataset.title;

        imagePreview.classList.add("show");

    });

});

imagePreview.addEventListener("click", () => {

    imagePreview.classList.remove("show");

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        imagePreview.classList.remove("show");

    }

});

/* ==========================================
   Categories
========================================== */

const floatingBar = document.getElementById("floatingBar");

floatingBar.addEventListener("click", (event) => {

    if (event.target.classList.contains("tag")) return;

    if (floatingBar.classList.contains("open")) {

        floatingBar.classList.remove("open");

        floatingBar.classList.add("closing");

        setTimeout(() => {

            floatingBar.classList.remove("closing");

        }, 1000);

    } else {

        floatingBar.classList.add("open");

    }

});

const tags = document.querySelectorAll(".tag");

const wallpapers = document.querySelectorAll(".wallpaper");

tags.forEach(tag => {

    tag.addEventListener("click", () => {

        tags.forEach(btn => btn.classList.remove("active"));

        tag.classList.add("active");

        const selected = tag.dataset.tag;

        wallpapers.forEach(wallpaper => {

            const image = wallpaper.querySelector("img");

            const imageTags = image.dataset.tags;

            if (selected === "all") {

                wallpaper.style.display = "block";

            }

            else if (imageTags.includes(selected)) {

                wallpaper.style.display = "block";

            }

            else {

                wallpaper.style.display = "none";

            }

        });

    });

});