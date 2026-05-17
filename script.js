const menuData = [
    // PRZYSTAWKI
    { id: "001", cat: 'glowne', name: 'Nem — Sajgonki', meta: '3 szt.', price: 18.00, pkg: 1.00 },
    { id: "002", cat: 'glowne', name: 'Paluszki krabowe w sezamie', meta: '3 szt.', price: 18.00, pkg: 1.00 },
    { id: "004", cat: 'glowne', name: 'Krewetki królewskie po Tajsku', meta: '5 szt.', price: 20.00, pkg: 1.00 },
    { id: "005", cat: 'glowne', name: 'Chipsy z krewetek', meta: '20 szt.', price: 20.00, pkg: 1.00 },

    // ZUPY
    { id: "011", cat: 'zupy', name: 'Zupa wietnamska', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "012", cat: 'zupy', name: 'Zupa krabowa', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "013", cat: 'zupy', name: 'Zupa krewetkowa pikantna', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "014", cat: 'zupy', name: 'Zupa rybna pikantna', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "015", cat: 'zupy', name: 'Zupa bambusowa pikantna', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "016", cat: 'zupy', name: 'Zupa Won Ton', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "017", cat: 'zupy', name: 'Zupa pekińska pikantna', meta: '250ml', price: 18.00, pkg: 1.00 },
    { id: "018", cat: 'zupy', name: 'Zupa kwaśno-pikantna', meta: '250ml', price: 18.00, pkg: 1.00 },

    // DANIA GŁÓWNE (Kurczak)
    { id: "020", cat: 'glowne', name: 'Kurczak z ananasem', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "021", cat: 'glowne', name: 'Kurczak z warzywami', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "022", cat: 'glowne', name: 'Kurczak z pieczarkami', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "023", cat: 'glowne', name: 'Kurczak z brokułami i czosnkiem', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "024", cat: 'glowne', name: 'Kurczak z bambusem i grzybami Mun', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "025", cat: 'glowne', name: 'Kurczak pięciu smaków', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "026", cat: 'glowne', name: 'Kurczak w sosie curry', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "027", cat: 'glowne', name: 'Kurczak na ostro', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "028", cat: 'glowne', name: 'Kurczak w sosie słodko-kwaśnym', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "029", cat: 'glowne', name: 'Kurczak w cieście kokosowym', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "030", cat: 'glowne', name: 'Kurczak Gong Bao z orzechami', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "031", cat: 'glowne', name: 'Kurczak po wietnamsku (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "032", cat: 'glowne', name: 'Kurczak po Chińsku (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "033", cat: 'glowne', name: 'Kurczak "Pod Blachą" (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "034", cat: 'glowne', name: 'Kurczak na chrupiąco (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "035", cat: 'glowne', name: 'Kurczak po Tajsku', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "039", cat: 'glowne', name: 'Polędwiczki na gorącym półmisku', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "020p", cat: 'glowne', name: 'POŁÓWKA DANIA Z KURCZAKA', meta: '150g', price: 32.00, pkg: 1.00 },

    // DANIA GŁÓWNE (Wołowina)
    { id: "041", cat: 'glowne', name: 'Wołowina z warzywami', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "042", cat: 'glowne', name: 'Wołowina z pieczarkami', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "043", cat: 'glowne', name: 'Wołowina z brokułami i czosnkiem', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "044", cat: 'glowne', name: 'Wołowina z bambusem i grzybami Mun', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "045", cat: 'glowne', name: 'Wołowina pięciu smaków', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "046", cat: 'glowne', name: 'Wołowina w sosie curry', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "047", cat: 'glowne', name: 'Wołowina na ostro', meta: '300g', price: 44.00, pkg: 1.00 },
    { id: "048", cat: 'glowne', name: 'Wołowina na gorącym półmisku', meta: '300g', price: 49.00, pkg: 1.00 },
    { id: "041p", cat: 'glowne', name: 'POŁÓWKA DANIA Z WOŁOWINY', meta: '150g', price: 36.00, pkg: 1.00 },

    // DANIA GŁÓWNE (Wieprzowina)
    { id: "051", cat: 'glowne', name: 'Wieprzowina z warzywami', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "052", cat: 'glowne', name: 'Wieprzowina z pieczarkami', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "054", cat: 'glowne', name: 'Wieprzowina z bambusem i grzybami Mun', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "055", cat: 'glowne', name: 'Wieprzowina pięciu smaków', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "056", cat: 'glowne', name: 'Wieprzowina w sosie curry', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "057", cat: 'glowne', name: 'Wieprzowina na ostro', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "058", cat: 'glowne', name: 'Wieprzowina w sosie słodko-kwaśnym', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "061", cat: 'glowne', name: 'Wieprzowina po Wietn. (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "062", cat: 'glowne', name: 'Wieprz. po Chińsku (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "063", cat: 'glowne', name: 'Wieprz. "Pod Blachą" (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "068", cat: 'glowne', name: 'Schab Hoang Gia (półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "069", cat: 'glowne', name: 'Szaszłyk (gorący półmisek)', meta: '300g', price: 41.00, pkg: 1.00 },
    { id: "051p", cat: 'glowne', name: 'POŁÓWKA DANIA Z WIEPRZOWINY', meta: '150g', price: 32.00, pkg: 1.00 },

    // DANIA GŁÓWNE (Kaczka)
    { id: "071", cat: 'glowne', name: 'Kaczka po Tonkińsku (półmisek)', meta: '300g', price: 50.00, pkg: 1.00 },
    { id: "072", cat: 'glowne', name: 'Kaczka z bambusem i grzybami Mun', meta: '300g', price: 50.00, pkg: 1.00 },
    { id: "073", cat: 'glowne', name: 'Kaczka z ananasem słodko-kwaś.', meta: '300g', price: 50.00, pkg: 1.00 },
    { id: "071p", cat: 'glowne', name: 'POŁÓWKA DANIA Z KACZKI', meta: '150g', price: 38.00, pkg: 1.00 },

    // DANIA GŁÓWNE (Ryby)
    { id: "081", cat: 'glowne', name: 'Morszczuk z warzywami', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "087", cat: 'glowne', name: 'Morszczuk na ostro', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "088", cat: 'glowne', name: 'Morszczuk w sosie słodko-kwaśnym', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "089", cat: 'glowne', name: 'Morszczuk po Chińsku (półmisek)', meta: '300g', price: 40.00, pkg: 1.00 },
    { id: "081p", cat: 'glowne', name: 'POŁÓWKA DANIA Z MORSZCZUKA', meta: '150g', price: 32.00, pkg: 1.00 },
    { id: "082", cat: 'glowne', name: 'Łosoś w cieście', meta: '300g', price: 52.00, pkg: 1.00 },
    { id: "083", cat: 'glowne', name: 'Łosoś na gorącym półmisku', meta: '300g', price: 52.00, pkg: 1.00 },
    { id: "082p", cat: 'glowne', name: 'POŁÓWKA DANIA Z ŁOSOSIA', meta: '150g', price: 40.00, pkg: 1.00 },

    // DANIA WEGETARIAŃSKIE
    { id: "091", cat: 'glowne', name: 'Warzywa rozmaitości', meta: '300g', price: 30.00, pkg: 1.00 },
    { id: "092", cat: 'glowne', name: 'Brokuły z czosnkiem', meta: '300g', price: 30.00, pkg: 1.00 },
    { id: "093", cat: 'glowne', name: 'Warzywa z frytkami', meta: '300g', price: 30.00, pkg: 1.00 },
    { id: "094", cat: 'glowne', name: 'Ryż smażony z warzywami', meta: '300g', price: 30.00, pkg: 1.00 },
    { id: "095", cat: 'glowne', name: 'Makaron sojowy smażony z warzywami', meta: '300g', price: 30.00, pkg: 1.00 },
    { id: "096", cat: 'glowne', name: 'Makaron Chiński smażony z warzywami', meta: '300g', price: 30.00, pkg: 1.00 },
    { id: "091p", cat: 'glowne', name: 'POŁÓWKA DAŃ WEGETARIAŃSKICH', meta: '150g', price: 25.00, pkg: 1.00 },

    // OWOCE MORZA
    { id: "101", cat: 'glowne', name: 'Kalmar w sosie słodko-kwaśnym', meta: '300g', price: 47.00, pkg: 1.00 },
    { id: "102", cat: 'glowne', name: 'Kalmar na ostro', meta: '300g', price: 47.00, pkg: 1.00 },
    { id: "103", cat: 'glowne', name: 'Kalmar na chrupiąco', meta: '300g', price: 47.00, pkg: 1.00 },
    { id: "104", cat: 'glowne', name: 'Kalmar na maśle (gorący półmisek)', meta: '300g', price: 47.00, pkg: 1.00 },
    { id: "105", cat: 'glowne', name: 'Krewetki w sosie słodko-kwaśnym', meta: '300g', price: 47.00, pkg: 1.00 },
    { id: "106", cat: 'glowne', name: 'Krewetki królewskie na maśle', meta: '300g', price: 55.00, pkg: 1.00 },
    { id: "107", cat: 'glowne', name: 'Krewetki królewskie z trawą cytrynową', meta: '300g', price: 55.00, pkg: 1.00 },
    { id: "108", cat: 'glowne', name: 'Owoce morza na chrupiąco', meta: '300g', price: 47.00, pkg: 1.00 },
    { id: "109", cat: 'glowne', name: 'Owoce morza po Chińsku', meta: '300g', price: 47.00, pkg: 1.00 },

    // NAPOJE
    { id: "201", cat: 'napoje', name: 'Soki, napoje gazowane', meta: '0.25l', price: 10.00, pkg: 0.00 },
    { id: "202", cat: 'napoje', name: 'Napoje chłodzące / Woda', meta: '0.5l', price: 10.00, pkg: 0.00 },
    { id: "203", cat: 'napoje', name: 'Dzbanek soku / napoju', meta: '1.0l', price: 16.00, pkg: 0.00 },
    { id: "204", cat: 'napoje', name: 'Kawa smakowa z bitą śmietaną', meta: 'Porcja', price: 14.00, pkg: 0.00 },
    { id: "205", cat: 'napoje', name: 'Piwo Żywiec', meta: 'Butelka', price: 11.00, pkg: 0.00 },

    // DESERY
    { id: "301", cat: 'desery', name: 'Ananas w cieście kokosowym', meta: '2 szt.', price: 16.00, pkg: 1.00 },
    { id: "302", cat: 'desery', name: 'Banan w cieście kokosowym', meta: '1 szt.', price: 16.00, pkg: 1.00 },

    // DODATKI
    { id: "401", cat: 'dodatki', name: 'Ryż biały', meta: '100g', price: 4.00, pkg: 0.50 },
    { id: "402", cat: 'dodatki', name: 'Ryż żółty', meta: '100g', price: 6.00, pkg: 0.50 },
    { id: "403", cat: 'dodatki', name: 'Makaron sojowy / chiński', meta: '100g', price: 6.00, pkg: 0.50 },
    { id: "404", cat: 'dodatki', name: 'Frytki solo', meta: '200g', price: 7.00, pkg: 0.50 },
    { id: "405", cat: 'dodatki', name: 'Surówka z białej kapusty', meta: '100g', price: 6.00, pkg: 0.50 },
    { id: "406", cat: 'dodatki', name: 'Sok do piwa', meta: 'Dodatek', price: 2.00, pkg: 0.00 },
    { id: "407", cat: 'dodatki', name: 'Sos chilli samba / sojowy / ketchup', meta: 'Porcja', price: 2.00, pkg: 0.00 }
];

let cart = [];

function renderMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    items.forEach(item => {
        const itemHTML = `
            <div class="menu-item">
                <div class="item-details">
                    <div class="item-header">
                        <span class="item-title">${item.id.replace('p', ' (1/2)')}. ${item.name}</span>
                        <span class="item-price">${item.price.toFixed(2)} zł</span>
                    </div>
                    <div class="item-meta">${item.meta}</div>
                </div>
                <button class="add-to-cart" onclick="addToCart('${item.id}')">Dodaj do zamówienia</button>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
}

function filterMenu(category, buttonElement) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (buttonElement) buttonElement.classList.add('active');

    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.cat === category);
        renderMenu(filtered);
    }
}

function filterGallery(category, buttonElement) {
    const buttons = document.querySelectorAll('.gal-filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (buttonElement) buttonElement.classList.add('active');

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-gal-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function addToCart(id) {
    const product = menuData.find(item => item.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartPacking = document.getElementById('cart-packing');
    const cartTotal = document.getElementById('cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let packingTotal = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        packingTotal += item.pkg * item.quantity;
        count += item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p>${item.quantity} szt. x ${item.price.toFixed(2)} zł</p>
                </div>
                <i class="fas fa-trash remove-item" onclick="removeFromCart('${item.id}')"></i>
            </div>
        `;
    });

    cartCount.innerText = count;
    cartPacking.innerText = `${packingTotal.toFixed(2)} zł`;
    cartTotal.innerText = `${(total + packingTotal).toFixed(2)} zł`;
}

function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}
function closeMenu() {
    document.getElementById('nav-menu').classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuData);
});