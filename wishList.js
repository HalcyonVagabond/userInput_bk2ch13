const wishContainer = document.getElementById("wishList");


const captureWishList = () => {
    const favoriteThing = document.getElementById('favorite');
    const location = document.getElementById('location');
    if ((favoriteThing.value === "") || (location.value === "")) {
        alert("Please enter information in both fields!")
    } else {
        wishContainer.innerHTML += `<p>I want a ${favoriteThing.value} from ${location.value}</p>`;
        favoriteThing.value = ""
        location.value = ""
        favoriteThing.focus()
    }
};

const saveToWishList = document.getElementById('submitBtn');
saveToWishList.addEventListener('click', captureWishList);

