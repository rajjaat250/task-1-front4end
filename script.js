document.addEventListener('DOMContentLoaded', () => {
    const heartIcons = document.querySelectorAll('.heart-icon');
    const productCards = document.querySelectorAll('.product-card');
    const wishlistCountElement = document.querySelector('.wishlist-count');
    const cartCountElement = document.querySelector('.cart-count');
    let cartItemCount = 0;

    const updateCartCount = () => {
        cartCountElement.textContent = cartItemCount;
        if (cartItemCount > 0) {
            cartCountElement.classList.add('active');
        } else {
            cartCountElement.classList.remove('active');
        }
    };
    
    const updateWishlistCount = () => {
        const likedItemsCount = document.querySelectorAll('.heart-icon.red').length;
        wishlistCountElement.textContent = likedItemsCount;

        if (likedItemsCount > 0) {
            wishlistCountElement.classList.add('active');
        } else {
            wishlistCountElement.classList.remove('active');
        }
    };

    
    heartIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation();
            icon.classList.toggle('red');
            updateWishlistCount();
        });
    });

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('.product-info h3').textContent;
            
            
            cartItemCount++;
            updateCartCount();
            alert(`Added "${productName}" to your cart!`);
        });
    });
    updateWishlistCount();
    updateCartCount();

});
