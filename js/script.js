/* ==========================================
   Get Popup
========================================== */

const popup = document.getElementById("popup");
const imagePreview = document.getElementById("imagePreview");
const previewImage = document.getElementById("previewImage");


/* ==========================================
   Download Function
========================================== */

document.querySelectorAll(".download-btn").forEach(button => {

    button.addEventListener("click", () => {

        const image = button.dataset.image;

        const link = document.createElement("a");

        link.href = image;

        link.download = "";

        link.click();


        showPopup();

    });

});


/* ==========================================
   Show Popup Animation
========================================== */

function showPopup(){

    popup.classList.add("show");

    setTimeout(()=>{

        popup.classList.remove("show");

    },2000);

}
/* ==========================================
   Image Preview
========================================== */

document.querySelectorAll(".wallpaper img").forEach(image=>{

    image.addEventListener("click",()=>{

        previewImage.src = image.src;

        imagePreview.classList.add("show");

    });

});

imagePreview.addEventListener("click",()=>{

    imagePreview.classList.remove("show");

});

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        imagePreview.classList.remove("show");

    }

});