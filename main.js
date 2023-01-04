const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const ProductDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
ProductDetailCloseIcon.addEventListener('click', closeProductDetailAside);

 


function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarritoClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isCarritoClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailContainer = ProductDetailContainer.classList.contains('inactive');

    if(!isProductDetailContainer){
        ProductDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    ProductDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    ProductDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Televisión',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        //product={name, price image} -> product.imge
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
         productPrice.innerText = '$' + product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName)
     
        const productInfoFigure = document.createElement('figure');
        const productInfoImgCart = document.createElement('img');
        productInfoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productInfoImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     
     }  
};
renderProducts(productList);