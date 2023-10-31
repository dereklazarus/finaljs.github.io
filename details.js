// Get the product ID from the query parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Function to fetch product data from the API
function fetchProductData(productId) {
    const apiUrl = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${productId}`; // Replace with your API URL
  fetch(apiUrl)
    .then((response) => response.json())
    .then((productData) => {
      if (productData) {
        displayProductDetails(productData);
      } else {
        // Handle the case where the product data is not found
        alert('Product not found');
      }
    })
    .catch((error) => {
      // Handle errors (e.g., network issues)
      console.error('Error:', error);
    });
}

// Function to display product details in your existing UI
function displayProductDetails(productData) {
  document.getElementById('sec1').style.backgroundImage = `url(${productData.preview})`;

  document.querySelector('.name').innerHTML = productData.name;
  document.querySelector('.brand').innerHTML = productData.brand;
  document.querySelector('.price').innerHTML = `Rs ${productData.price}`;
  document.querySelector('.desc').innerHTML = `<p>Description</p> ${productData.description}<br><br><p>Product Preview</p>`;

  const picdiv = document.querySelector('.picsec');
  picdiv.innerHTML = '';

  for (let i = 0; i < productData.photos.length; i++) {
    const imgtag = document.createElement('img');
    imgtag.src = productData.photos[i];
    imgtag.className = "imgoption";
    picdiv.appendChild(imgtag);

    if (i === 0) {
      imgtag.style.border = "2px solid #009688";
    }

    imgtag.addEventListener("click", borderfunc);

    function borderfunc() {
      document.getElementById('sec1').style.backgroundImage = "url(" + this.src + ")";

      const selectedImages = document.getElementsByClassName("imgoption");
      for (let k = 0; k < selectedImages.length; k++) {
        selectedImages[k].style.border = "none";
      }

      this.style.border = "2px solid #009688";
    }
  }

  const addcart = document.querySelector('.cart');
  addcart.innerHTML = "ADD TO CART";
  document.getElementById('cart_num').innerHTML=localStorage.clickcount;

  addcart.addEventListener('click', () => {
    if(typeof(Storage)!=="undefined")
    {
        if(localStorage.clickcount)
        {
            localStorage.clickcount= Number(localStorage.clickcount)+1;
        }
        else
        {
            localStorage.clickcount=1;
        }
        document.getElementById('cart_num').innerHTML=localStorage.clickcount;
        
    }
    else
    {
        document.getElementById('cart_num').innerHTML="click button";
    }
});
document.getElementById('cart_div').addEventListener('click', () => {
    window.location.href = 'checkout.html';
})
  
}

// Fetch and display product data based on the provided product ID
fetchProductData(productId);
