/* Products Slider */
const swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },
    breakpoints: {
      567: {
        slidesPerView: 2,
      },
      996: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  

/* Fetch Products*/

const getProducts = async () => {
    try {
      const results = await fetch("./data/products.json");
      const data = await results.json();
      const products = data.products;
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  const ProductsWrapper = document.getElementById("products-wrapper");
  
  window.addEventListener("DOMContentLoaded", async function () {
    const products = await getProducts();
    displayProductItems(products);
  });
  