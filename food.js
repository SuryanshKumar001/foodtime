
// for cart popup
function togglecartpopup() {
    const cartpopup = document.getElementById('cart-popup');
    cartpopup.classList.toggle('active');
}

// for close cart
function closecart() {
    const cartpopup = document.getElementById('cart-popup');
    cartpopup.classList.remove('active');
}

//for add to cart button
function addtocart(itemname,itemprice) {
    const cartitems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
    const existingitem = Array.from(cartitems.getElementsByTagName('tr')).find(item=>item.cells[0].textContent === itemname);
    if(existingitem) {
        const itemcount = parseInt(existingitem.querySelector('.item-count').textContent) + 1;
        existingitem.querySelector('.item-count').textContent = itemcount;

        const itemtotal = parseFloat(existingitem.querySelector('.item-total').textContent) + parseFloat(itemprice);
        existingitem.querySelector('.item-total').textContent = itemtotal.toFixed(2);
    }
    else {
        const newrow = cartitems.insertRow();
        newrow.innerHTML = `
        <td>${itemname}</td>
        <td class='item-count'>1</td>
        <td class='item-pricee'>${itemprice}</td>
        <td class='item-total'>${itemprice}</td>
        `;
    }
    updatecartcountandtotal();    

}

//update cart count and total
function updatecartcountandtotal() {
    const cartcount = document.getElementById('cart-count');
    const carttotal = document.getElementById('cart-total');
    const cartitems = document.querySelectorAll('#cart-items tbody tr');
    let totalcount = 0;
    let total = 0;
    cartitems.forEach(item => {
        const itemcount = parseInt(item.querySelector('.item-count').textContent);
        const itemtotal = parseFloat(item.querySelector('.item-total').textContent);
        totalcount += itemcount;
        total += itemtotal;
    });
    cartcount.textContent = totalcount;
    carttotal.textContent = total.toFixed(2);
}