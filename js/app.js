// Selecting the required elements


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ //once window loaded
    filterItem.onclick = (selectedItem)=> { // when user clicked on filterItem div
        if(selectedItem.target.classList.contains("item")){ // if user click element has .item class
            filterItem.querySelector(".active").classList.remove("active"); // remove the active class which is the first element
            selectedItem.target.classList.add("active"); //add that active class on the user selected element or item
            let filterName = selectedItem.target.getAttribute("data-name"); // getting data-name value of user selected item and storing in a filterName variable
            filterImg.forEach((image)=> {
                let filterImages = image.getAttribute("data-name"); // getting image data-name values
                // if user selected item data-name value is equal to image data-name value
                // or user selected item data-name value is equal to "all"
                if ((filterImages == filterName) || filterName == "all") {    
                    image.classList.remove("hide");                 
                    image.classList.add("show");
                    
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                    
                }
            });
        }
    }
    for (let index = 0; index < filterImg.length; index++) {
        filterImg[index].setAttribute("onclick", "preview(this)"); // adding onclick attribute in all available images
        
    }
}


// selecting all required elements
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");


// fullscreen preview function 
function preview(element) {
    //once user click on any image then remove scrollbar of the body, so user cant scroll up or down 
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src; // getting user clicked image
    let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked data-name bvvalue
    previewImg.src = selectedPrevImg; //passing the user clicked image in the preview image source
    previewBox.classList.add("show"); // show the preview box
    shadow.classList.add("show"); //show the light gey background


    shadow.onclick = ()=> {
        previewBox.classList.remove("show"); // remove the preview box
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll"; // show the scroll bar
    }

}

