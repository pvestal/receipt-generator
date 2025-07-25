// Store logos removed - will use text-only headers

// Store configurations
const storeConfigs = {
    walmart: {
        name: 'Walmart',
        logo: 'WALMART',
        tagline: 'Save money. Live better.',
        address: ['3767 Gulf Breeze Pkwy', 'Gulf Breeze, FL 32563', '(850) 934-0362'],
        storeNumber: '2533',
        items: [
            { name: 'GREAT VALUE MILK', price: 3.48 },
            { name: 'BANANA LB', price: 0.58 },
            { name: 'WHITE BREAD', price: 1.28 },
            { name: 'CHICKEN BREAST', price: 8.97 },
            { name: 'COCA COLA 12PK', price: 5.98 },
            { name: 'EGGS LARGE DOZEN', price: 2.94 },
            { name: 'PAPER TOWELS 6PK', price: 12.97 },
            { name: 'LAUNDRY DETERGENT', price: 9.97 },
            { name: 'APPLES 3LB BAG', price: 3.97 },
            { name: 'GROUND BEEF 1LB', price: 4.98 },
            { name: 'CEREAL CHEERIOS', price: 3.64 },
            { name: 'CHIPS LAYS', price: 2.98 },
            { name: 'ICE CREAM GAL', price: 4.98 },
            { name: 'SHAMPOO HEAD&SHLDR', price: 5.97 },
            { name: 'BATTERIES AA 8PK', price: 7.97 }
        ],
        taxRate: 0.06,
        memberProgram: 'Walmart+',
        memberPrefix: 'WM',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'WALMART PAY'],
        savingsMessage: 'You saved'
    },
    target: {
        name: 'Target',
        logo: 'TARGET',
        address: ['6255 N Davis Hwy', 'Pensacola, FL 32504', '(850) 478-0047'],
        storeNumber: 'T2847',
        items: [
            { name: 'UP&UP PAPER TOWELS', price: 14.99 },
            { name: 'MARKET PANTRY MILK', price: 3.69 },
            { name: 'FRESH STRAWBERRIES', price: 4.99 },
            { name: 'TIDE PODS 42CT', price: 13.99 },
            { name: 'PILLOWFORT THROW', price: 19.99 },
            { name: 'GOOD&GATHER YOGURT', price: 3.49 },
            { name: 'THRESHOLD CANDLE', price: 9.99 },
            { name: 'CAT&JACK TEE', price: 6.00 },
            { name: 'HEYDAY PHONE CASE', price: 14.99 },
            { name: 'ROOM ESSENTIALS LAMP', price: 12.99 },
            { name: 'ARCHER FARMS COFFEE', price: 7.99 },
            { name: 'SIMPLY BALANCED GRANOLA', price: 4.49 },
            { name: 'SMARTLY HAND SOAP', price: 0.99 },
            { name: 'BULLSEYE SOCKS 6PK', price: 10.00 },
            { name: 'KIND BARS 5PK', price: 5.99 }
        ],
        taxRate: 0.06,
        memberProgram: 'Target Circle',
        memberPrefix: 'TC',
        paymentMethods: ['VISA', 'MASTERCARD', 'TARGET REDCARD', 'APPLE PAY'],
        savingsMessage: 'Target Circle earnings'
    },
    cvs: {
        name: 'CVS',
        logo: 'CVS',
        sublogo: 'pharmacy',
        address: ['1430 Tiger Point Blvd', 'Gulf Breeze, FL 32563', 'Phone: 850-916-7900'],
        storeNumber: '10245',
        items: [
            { name: 'CVS ASPIRIN 100CT', price: 7.99 },
            { name: 'COLGATE TOOTHPASTE', price: 4.99 },
            { name: 'DOVE BODY WASH', price: 6.49 },
            { name: 'NATURE VALLEY BARS', price: 3.99 },
            { name: 'VITAMIN D 90CT', price: 12.99 },
            { name: 'BAND-AID VARIETY', price: 5.49 },
            { name: 'GATORADE 32OZ', price: 2.49 },
            { name: 'KLEENEX 3PK', price: 5.99 },
            { name: 'ADVIL 50CT', price: 9.99 },
            { name: 'GOLD EMBLEM NUTS', price: 6.99 },
            { name: 'NIVEA LOTION', price: 7.49 },
            { name: 'ORAL-B TOOTHBRUSH', price: 4.99 },
            { name: 'CVS COTTON SWABS', price: 3.49 },
            { name: 'HALLMARK CARD', price: 4.99 },
            { name: 'DURACELL AA 4PK', price: 8.99 }
        ],
        taxRate: 0.06,
        memberProgram: 'ExtraCare',
        memberPrefix: 'EC',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'CVS PAY'],
        savingsMessage: 'ExtraCare savings'
    },
    walgreens: {
        name: 'Walgreens',
        logo: 'Walgreens',
        address: ['3767 Gulf Breeze Pkwy', 'Gulf Breeze, FL 32563', '(850) 934-3008'],
        storeNumber: '05962',
        items: [
            { name: 'NICE! IBUPROFEN', price: 4.99 },
            { name: 'WALGREENS VITAMINS', price: 9.99 },
            { name: 'CREST TOOTHPASTE', price: 5.49 },
            { name: 'PANTENE SHAMPOO', price: 5.99 },
            { name: 'NICE! BANDAGES', price: 3.99 },
            { name: 'PEPSI 2L', price: 2.99 },
            { name: 'SNICKERS BAR', price: 1.49 },
            { name: 'GILLETTE RAZOR', price: 12.99 },
            { name: 'AVEENO LOTION', price: 8.99 },
            { name: 'TYLENOL 24CT', price: 7.49 },
            { name: 'LAYS CHIPS', price: 3.49 },
            { name: 'NICE! BATTERIES', price: 6.99 },
            { name: 'DOVE SOAP 2PK', price: 4.49 },
            { name: 'PHOTO PRINTS 4X6', price: 0.39 },
            { name: 'GREETING CARD', price: 3.99 }
        ],
        taxRate: 0.06,
        memberProgram: 'Balance Rewards',
        memberPrefix: 'BR',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'WALGREENS CREDIT'],
        savingsMessage: 'Balance Rewards earned'
    },
    publix: {
        name: 'Publix',
        logo: 'Publix',
        tagline: 'Where Shopping is a Pleasure',
        address: ['1010 Gulf Breeze Pkwy', 'Gulf Breeze, FL 32561', 'Store #1546', '850-934-0179'],
        items: [
            { name: 'PUBLIX BAKERY BREAD', price: 2.49 },
            { name: 'PUBLIX MILK GAL', price: 4.29 },
            { name: 'PUBLIX PASTA', price: 1.79 },
            { name: 'PUBLIX DELI CHEESE', price: 4.99 },
            { name: 'CHICKEN THIGHS LB', price: 2.99 },
            { name: 'PUBLIX EGGS LARGE', price: 3.99 },
            { name: 'FRESH TOMATOES LB', price: 1.49 },
            { name: 'PUBLIX YOGURT 4PK', price: 3.50 },
            { name: 'DELI TURKEY 1LB', price: 7.99 },
            { name: 'BAKERY DONUTS 6CT', price: 3.99 },
            { name: 'GREENWISE GRANOLA', price: 5.99 },
            { name: 'PUBLIX SPRING WATER', price: 3.99 },
            { name: 'PUBLIX CHIPS', price: 2.99 },
            { name: 'PUBLIX BUTTER', price: 4.49 },
            { name: 'PRODUCE BANANAS LB', price: 0.49 }
        ],
        taxRate: 0.06,
        memberProgram: 'Publix Club',
        memberPrefix: 'PC',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'APPLE PAY', 'CASH'],
        savingsMessage: 'Your savings today'
    },
    homedepot: {
        name: 'The Home Depot',
        logo: 'THE HOME DEPOT',
        address: ['3202 N Pace Blvd', 'Pensacola, FL 32505', 'Store #6391', '850-494-9780'],
        items: [
            { name: 'PHILIPS 60W BULB 4PK', price: 5.97 },
            { name: '2X4X8 STUD LUMBER', price: 5.28 },
            { name: 'GORILLA GLUE 4OZ', price: 7.97 },
            { name: 'DEWALT DRILL BIT SET', price: 19.97 },
            { name: 'SCOTTS TURF BUILDER', price: 44.98 },
            { name: 'HUSKY TOOL BAG', price: 29.97 },
            { name: 'PAINT BRUSH 3PK', price: 9.97 },
            { name: 'DUCT TAPE 60YD', price: 8.97 },
            { name: 'WORK GLOVES L', price: 12.97 },
            { name: 'EXTENSION CORD 25FT', price: 16.97 },
            { name: 'RYOBI SAFETY GLASSES', price: 4.97 },
            { name: 'DRYWALL SCREWS 1LB', price: 6.97 },
            { name: 'BEHR PAINT GALLON', price: 36.98 },
            { name: 'SHOP VAC BAGS 3PK', price: 14.97 },
            { name: 'LED FLASHLIGHT', price: 19.97 }
        ],
        taxRate: 0.06,
        memberProgram: 'Pro Xtra',
        memberPrefix: 'PX',
        paymentMethods: ['VISA', 'MASTERCARD', 'HOME DEPOT CARD', 'PAYPAL'],
        savingsMessage: 'Pro Xtra savings'
    },
    costco: {
        name: 'Costco',
        logo: 'COSTCO WHOLESALE',
        address: ['1100 Airport Blvd', 'Pensacola, FL 32504', 'Warehouse #1423', '850-474-3011'],
        storeNumber: '1423',
        items: [
            { name: 'KS ORGANIC EGGS 2DZ', price: 7.99 },
            { name: 'ROTISSERIE CHICKEN', price: 4.99 },
            { name: 'KS PAPER TOWELS', price: 19.99 },
            { name: 'FRESH SALMON 2LB', price: 24.99 },
            { name: 'KS MIXED NUTS 2.5LB', price: 17.99 },
            { name: 'ORGANIC SPINACH 1LB', price: 4.49 },
            { name: 'KS OLIVE OIL 2L', price: 16.99 },
            { name: 'STREET TACO KIT', price: 15.99 },
            { name: 'KS BACON 4PK', price: 14.99 },
            { name: 'CROISSANTS 12CT', price: 5.99 },
            { name: 'KS COFFEE 3LB', price: 12.99 },
            { name: 'BERRIES 3LB', price: 9.99 },
            { name: 'KS DETERGENT 152OZ', price: 17.99 },
            { name: 'VITAMINS 500CT', price: 14.99 },
            { name: 'KS BATTERIES 48PK', price: 17.99 }
        ],
        taxRate: 0.07,
        memberProgram: 'Member',
        memberPrefix: 'MB',
        paymentMethods: ['VISA', 'MASTERCARD', 'COSTCO VISA', 'DEBIT', 'CASH'],
        savingsMessage: 'Your Member Savings'
    },
    costcogas: {
        name: 'Costco Gas',
        logo: 'COSTCO GASOLINE',
        address: ['1100 Airport Blvd', 'Pensacola, FL 32504', 'Station #1423'],
        storeNumber: 'GS1423',
        items: [
            { name: 'REGULAR UNLEADED', price: 3.19, unit: '/GAL' },
            { name: 'PREMIUM UNLEADED', price: 3.69, unit: '/GAL' }
        ],
        taxRate: 0.07,
        memberProgram: 'Member',
        memberPrefix: 'MB',
        paymentMethods: ['COSTCO VISA', 'VISA', 'MASTERCARD', 'DEBIT'],
        isGasStation: true
    },
    samsclub: {
        name: "Sam's Club",
        logo: "SAM'S CLUB",
        tagline: 'Members Mark',
        address: ['3546 S Blue Angel Pkwy', 'Pensacola, FL 32506', 'Club #6686', '850-453-6808'],
        storeNumber: '6686',
        items: [
            { name: 'MM PAPER TOWELS 12RL', price: 17.98 },
            { name: 'MEMBERS MARK WATER', price: 3.98 },
            { name: 'MM BATTERIES 48CT', price: 13.98 },
            { name: 'FRESH CHICKEN 5LB', price: 9.98 },
            { name: 'MM TRASH BAGS 200CT', price: 14.98 },
            { name: 'BAKERY CAKE', price: 15.98 },
            { name: 'MM COFFEE 48OZ', price: 8.98 },
            { name: 'PRODUCE BANANAS 3LB', price: 1.48 },
            { name: 'MM DETERGENT 170OZ', price: 11.98 },
            { name: 'PIZZA COMBO', price: 9.98 },
            { name: 'MM CHIPS VARIETY', price: 12.98 },
            { name: 'PRIME BEEF 3LB', price: 29.98 },
            { name: 'MM VITAMINS 400CT', price: 9.98 },
            { name: 'ELECTRONICS CABLE', price: 6.98 },
            { name: 'MM SNACK MIX 3LB', price: 8.98 }
        ],
        taxRate: 0.07,
        memberProgram: 'Plus Member',
        memberPrefix: 'SC',
        paymentMethods: ['MASTERCARD', 'DISCOVER', 'SAMS CREDIT', 'DEBIT', 'CASH'],
        savingsMessage: 'Plus Savings'
    },
    'winn-dixie': {
        name: 'Winn-Dixie',
        logo: 'WINN ★ DIXIE',
        tagline: 'Down Home. Down the Street.',
        address: ['2969 Gulf Breeze Pkwy', 'Gulf Breeze, FL 32563', 'Store #371', '850-932-4228'],
        storeNumber: '371',
        items: [
            { name: 'SE MILK GALLON', price: 3.79 },
            { name: 'FRESH BREAD', price: 1.99 },
            { name: 'GROUND BEEF LB', price: 4.49 },
            { name: 'DIXIE EGGS DOZEN', price: 2.99 },
            { name: 'SWEET TEA GAL', price: 2.49 },
            { name: 'FRIED CHICKEN 8PC', price: 7.99 },
            { name: 'SE BUTTER', price: 3.49 },
            { name: 'FRESH SHRIMP LB', price: 8.99 },
            { name: 'SE CHIPS', price: 2.49 },
            { name: 'PRODUCE TOMATOES', price: 1.99 },
            { name: 'DELI HAM LB', price: 5.99 },
            { name: 'SE ICE CREAM', price: 3.99 },
            { name: 'GATORADE 32OZ', price: 1.79 },
            { name: 'SE YOGURT 4PK', price: 2.29 },
            { name: 'BAKERY DONUTS 6CT', price: 3.49 }
        ],
        taxRate: 0.07,
        memberProgram: 'SE Rewards',
        memberPrefix: 'SE',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'DEBIT', 'EBT', 'CASH'],
        savingsMessage: 'SE Grocers rewards'
    },
    'dollar-general': {
        name: 'Dollar General',
        logo: '$ DOLLAR GENERAL',
        tagline: 'Save time. Save money.',
        address: ['3191 Gulf Breeze Pkwy', 'Gulf Breeze, FL 32563', 'Store #17853', '850-677-8454'],
        storeNumber: '17853',
        items: [
            { name: 'CLOVER VALLEY CHIPS', price: 1.50 },
            { name: 'DG TOILET PAPER 4PK', price: 3.00 },
            { name: 'CANDY BAR', price: 1.25 },
            { name: 'DG BATTERIES 4PK', price: 3.50 },
            { name: 'SODA 2 LITER', price: 1.95 },
            { name: 'DG PAPER TOWELS', price: 5.00 },
            { name: 'CLEANING SPRAY', price: 2.50 },
            { name: 'SNACK CRACKERS', price: 2.00 },
            { name: 'DG HAND SOAP', price: 1.00 },
            { name: 'BREAD LOAF', price: 1.75 },
            { name: 'DG TRASH BAGS 8CT', price: 4.00 },
            { name: 'CEREAL BOX', price: 3.25 },
            { name: 'DG DISH SOAP', price: 2.00 },
            { name: 'COOKIES PKG', price: 2.50 },
            { name: 'DG NAPKINS 250CT', price: 3.00 }
        ],
        taxRate: 0.07,
        memberProgram: 'DG Digital Coupons',
        memberPrefix: 'DG',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'DEBIT', 'EBT', 'CASH'],
        savingsMessage: 'DG Digital Savings'
    },
    'circle-k': {
        name: 'Circle K',
        logo: 'Circle K',
        tagline: 'Simply Great Coffee',
        address: ['3414 Gulf Breeze Pkwy', 'Gulf Breeze, FL 32563', 'Store #2704388'],
        storeNumber: '2704388',
        items: [
            { name: 'POLAR POP 44OZ', price: 0.99 },
            { name: 'COFFEE LG 24OZ', price: 1.99 },
            { name: 'FROSTER LARGE', price: 1.89 },
            { name: 'HOT DOG GRILL', price: 2.49 },
            { name: 'TORNADOS 2/$3', price: 3.00 },
            { name: 'DORITOS BAG', price: 2.99 },
            { name: 'BANG ENERGY', price: 2.99 },
            { name: 'CIRCLE K WATER', price: 1.29 },
            { name: 'CANDY BAR', price: 1.89 },
            { name: 'BEEF JERKY', price: 6.99 },
            { name: 'CIGARETTES PACK', price: 8.49 },
            { name: 'BEER 6-PACK', price: 9.99 },
            { name: 'ICE BAG 10LB', price: 2.49 },
            { name: 'CAR WASH BASIC', price: 8.00 },
            { name: 'SOUR PATCH KIDS', price: 2.49 }
        ],
        taxRate: 0.07,
        memberProgram: 'Inner Circle',
        memberPrefix: 'IC',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'DEBIT', 'EASY PAY', 'CASH'],
        savingsMessage: 'Inner Circle Savings'
    }
};

// Custom items array
let customItems = [];

// Initialize date input with current date/time
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('receipt-date').value = now.toISOString().slice(0, 16);
    
    // Generate initial receipt
    generateReceipt();
});

// Event listeners
document.getElementById('item-count').addEventListener('input', function() {
    document.getElementById('item-count-display').textContent = this.value;
});

document.getElementById('max-price').addEventListener('input', function() {
    document.getElementById('max-price-display').textContent = this.value;
});

document.getElementById('generate-btn').addEventListener('click', generateReceipt);
document.getElementById('print-btn').addEventListener('click', printReceipt);
document.getElementById('randomize-5-btn').addEventListener('click', generateMultipleReceipts);

// Custom items functionality
document.querySelector('.add-item-btn').addEventListener('click', addCustomItem);
document.getElementById('clear-custom-btn').addEventListener('click', clearCustomItems);

function addCustomItem() {
    const nameInput = document.querySelector('.item-name-input');
    const priceInput = document.querySelector('.item-price-input');
    
    if (nameInput.value && priceInput.value) {
        const item = {
            name: nameInput.value.toUpperCase(),
            price: parseFloat(priceInput.value)
        };
        customItems.push(item);
        updateCustomItemsList();
        nameInput.value = '';
        priceInput.value = '';
    }
}

function updateCustomItemsList() {
    const list = document.getElementById('custom-items-list');
    list.innerHTML = customItems.map((item, index) => 
        `<div class="custom-item">
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeCustomItem(${index})">Remove</button>
        </div>`
    ).join('');
}

function removeCustomItem(index) {
    customItems.splice(index, 1);
    updateCustomItemsList();
}

function clearCustomItems() {
    customItems = [];
    updateCustomItemsList();
}

function generateReceipt() {
    const store = document.getElementById('store-select').value;
    const itemCount = parseInt(document.getElementById('item-count').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    const date = new Date(document.getElementById('receipt-date').value);
    
    const receipt = document.getElementById('receipt');
    generateReceiptInDiv(receipt, store, itemCount, maxPrice, date);
    
    // Show toast notification
    const storeName = storeConfigs[store].name;
    showToast(`${storeName} receipt generated!`, 'success');
}

function generateReceiptInDiv(receipt, store, itemCount, maxPrice, date) {
    const config = storeConfigs[store];
    
    // Clear receipt and set store class
    receipt.className = `receipt ${store}`;
    receipt.innerHTML = '';
    
    // Generate header
    const header = generateHeader(config, store);
    receipt.appendChild(header);
    
    // Store info
    const storeInfo = document.createElement('div');
    storeInfo.className = 'store-info';
    storeInfo.innerHTML = config.address.join('<br>');
    receipt.appendChild(storeInfo);
    
    // Member info
    if (config.memberProgram) {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'member-info';
        const memberId = generateMemberId(config.memberPrefix);
        memberDiv.innerHTML = `
            <div>${config.memberProgram} Member</div>
            <div class="member-id">${memberId}</div>
        `;
        receipt.appendChild(memberDiv);
    }
    
    // Date and transaction info
    const transInfo = document.createElement('div');
    transInfo.style.marginTop = '5px';
    transInfo.style.fontSize = '10px';
    const registerNum = Math.floor(Math.random() * 20) + 1;
    const operatorId = Math.floor(Math.random() * 900) + 100;
    transInfo.innerHTML = `
        ${formatDate(date).toUpperCase()}<br>
        REG ${registerNum.toString().padStart(2, '0')} #${operatorId} ${generateCashierName()}<br>
        ${config.storeNumber ? `STR ${config.storeNumber}` : ''} TRN ${generateTransactionNumber()}
    `;
    receipt.appendChild(transInfo);
    
    // Divider
    const divider1 = document.createElement('div');
    divider1.className = 'receipt-divider';
    receipt.appendChild(divider1);
    
    // Items
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'receipt-items';
    
    let subtotal = 0;
    const selectedItems = selectRandomItems(config.items, itemCount, maxPrice);
    
    // Add custom items first
    customItems.forEach(item => {
        const itemDiv = createItemLine(item.name, item.price);
        itemsContainer.appendChild(itemDiv);
        subtotal += item.price;
    });
    
    // Add random items
    if (config.isGasStation) {
        // For gas stations, show gallons and price per gallon
        const gallons = (Math.random() * 15 + 5).toFixed(3);
        const selectedGas = config.items[Math.floor(Math.random() * config.items.length)];
        const totalPrice = (parseFloat(gallons) * selectedGas.price).toFixed(2);
        
        const gasDiv = document.createElement('div');
        gasDiv.style.marginBottom = '8px';
        gasDiv.innerHTML = `
            <div>${selectedGas.name}</div>
            <div style="display: flex; justify-content: space-between;">
                <span>${gallons} GAL @ $${selectedGas.price.toFixed(3)}/GAL</span>
                <span>$${totalPrice}</span>
            </div>
        `;
        itemsContainer.appendChild(gasDiv);
        subtotal = parseFloat(totalPrice);
    } else {
        selectedItems.forEach(item => {
            const itemDiv = createItemLine(item.name, item.price);
            itemsContainer.appendChild(itemDiv);
            subtotal += item.price;
        });
    }
    
    receipt.appendChild(itemsContainer);
    
    // Totals
    const totalsDiv = document.createElement('div');
    totalsDiv.className = 'receipt-totals';
    
    const tax = subtotal * config.taxRate;
    const total = subtotal + tax;
    
    totalsDiv.innerHTML = `
        <div class="total-line">
            <span>SUBTOTAL</span>
            <span>$${subtotal.toFixed(2)}</span>
        </div>
        <div class="total-line">
            <span>TAX</span>
            <span>$${tax.toFixed(2)}</span>
        </div>
        <div class="total-line grand-total">
            <span>TOTAL</span>
            <span>$${total.toFixed(2)}</span>
        </div>
    `;
    
    receipt.appendChild(totalsDiv);
    
    // Savings info
    if (config.savingsMessage) {
        const savings = (subtotal * 0.1).toFixed(2); // Random 10% savings
        const savingsDiv = document.createElement('div');
        savingsDiv.className = 'savings-info';
        savingsDiv.innerHTML = `${config.savingsMessage}: $${savings}`;
        receipt.appendChild(savingsDiv);
    }
    
    // Payment info
    const paymentDiv = document.createElement('div');
    paymentDiv.style.marginTop = '10px';
    const lastFour = Math.floor(Math.random() * 9000) + 1000;
    const expMonth = Math.floor(Math.random() * 12) + 1;
    const expYear = Math.floor(Math.random() * 5) + 25; // 2025-2029
    
    paymentDiv.innerHTML = `
        <div style="margin-bottom: 5px">AMEX ***********${lastFour}</div>
        <div>EXP ${expMonth.toString().padStart(2, '0')}/${expYear}</div>
        <div>APPROVED</div>
        <div>Auth Code: ${generateAuthCode()}</div>
    `;
    receipt.appendChild(paymentDiv);
    
    // Footer
    const footer = generateFooter(store);
    receipt.appendChild(footer);
}

function generateHeader(config, store) {
    const header = document.createElement('div');
    header.className = 'store-header';
    
    const logo = document.createElement('div');
    logo.className = 'store-logo';
    logo.textContent = config.logo;
    header.appendChild(logo);
    
    if (config.tagline) {
        const tagline = document.createElement('div');
        tagline.className = 'store-tagline';
        tagline.textContent = config.tagline;
        header.appendChild(tagline);
    }
    
    if (config.sublogo) {
        const sublogo = document.createElement('div');
        sublogo.className = config.sublogo;
        sublogo.textContent = config.sublogo.toUpperCase();
        header.appendChild(sublogo);
    }
    
    return header;
}

function createItemLine(name, price) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'receipt-item';
    itemDiv.innerHTML = `
        <span class="item-name">${name}</span>
        <span class="item-price">$${price.toFixed(2)}</span>
    `;
    return itemDiv;
}

function selectRandomItems(items, count, maxPrice) {
    const filteredItems = items.filter(item => item.price <= maxPrice);
    const selected = [];
    
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * filteredItems.length);
        const item = filteredItems[randomIndex];
        
        // Occasionally add quantity
        const quantity = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 2 : 1;
        
        if (quantity > 1) {
            selected.push({
                name: `${item.name} @ ${quantity}`,
                price: item.price * quantity
            });
        } else {
            selected.push(item);
        }
    }
    
    return selected;
}

function generateFooter(store) {
    const footer = document.createElement('div');
    footer.className = 'receipt-footer';
    
    const messages = {
        walmart: 'Thank you for shopping at Walmart!<br>Save your receipt<br>See back for return policy',
        target: 'Thank you for shopping at Target<br>RedCard saves 5% everyday<br>Return policy at Guest Services',
        cvs: 'Thank you for shopping at CVS<br>ExtraCare Member<br>Visit CVS.com for exclusive offers',
        walgreens: 'Thank you for choosing Walgreens<br>Be Well<br>Questions? Call 1-800-WALGREENS',
        publix: 'Thank you for shopping at Publix<br>Where shopping is a pleasure<br>Visit publix.com',
        homedepot: 'Thank you for shopping<br>The Home Depot<br>How doers get more done',
        costco: 'Thank you for shopping at Costco<br>Your member savings add up!<br>Visit Costco.com',
        costcogas: 'Thank you for fueling at Costco<br>Members save on every gallon<br>Drive safely',
        samsclub: 'Thank you for shopping<br>Members save more<br>Visit SamsClub.com',
        'winn-dixie': 'Thank you for shopping local<br>Down home. Down the street.<br>See you again soon',
        'dollar-general': 'Thank you for shopping smart<br>Save time. Save money.<br>Every day',
        'circle-k': 'Thank you!<br>Visit us again soon<br>Download the Circle K app'
    };
    
    footer.innerHTML = messages[store];
    
    // Add barcode
    const barcodeContainer = document.createElement('div');
    barcodeContainer.className = 'barcode';
    
    const barcodeData = generateBarcodeData(store);
    const barcodeElement = document.createElement('div');
    
    // Use different barcode types for different stores
    if (store === 'walmart' || store === 'target') {
        barcodeElement.className = 'barcode-128';
        barcodeElement.textContent = barcodeData;
    } else {
        barcodeElement.className = 'barcode-39';
        barcodeElement.textContent = '*' + barcodeData + '*';
    }
    
    barcodeContainer.appendChild(barcodeElement);
    
    // Add barcode number below
    const barcodeNumber = document.createElement('div');
    barcodeNumber.className = 'barcode-number';
    barcodeNumber.textContent = barcodeData;
    barcodeContainer.appendChild(barcodeNumber);
    
    footer.appendChild(barcodeContainer);
    
    return footer;
}

function formatDate(date) {
    const dateStr = date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
    });
    const timeStr = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return `${dateStr} ${timeStr}`;
}

function generateTransactionNumber() {
    return Math.floor(Math.random() * 900000) + 100000;
}

function generateCashierName() {
    const names = ['SARAH M', 'JOHN D', 'MARIA R', 'JAMES K', 'LISA P', 'DAVID W'];
    return names[Math.floor(Math.random() * names.length)];
}

function generateAuthCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
}

function generateMemberId(prefix) {
    const numbers = Math.floor(Math.random() * 900000000000) + 100000000000;
    return `${prefix}${numbers}`;
}

function generateBarcodeData(store) {
    // Generate store-specific barcode patterns
    const storePrefixes = {
        walmart: '007874',
        target: '490',
        cvs: '305',
        walgreens: '311',
        publix: '041',
        homedepot: '693',
        costco: '096619',
        costcogas: '096619',
        samsclub: '078742',
        'winn-dixie': '021130',
        'dollar-general': '049000',
        'circle-k': '704273'
    };
    
    const prefix = storePrefixes[store] || '100';
    const randomDigits = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    
    // For UPC-A format (12 digits total)
    const barcodeWithoutCheck = prefix + randomDigits;
    
    // Calculate check digit for UPC-A
    let sum = 0;
    for (let i = 0; i < barcodeWithoutCheck.length; i++) {
        const digit = parseInt(barcodeWithoutCheck[i]);
        if (i % 2 === 0) {
            sum += digit * 3;
        } else {
            sum += digit;
        }
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    
    return barcodeWithoutCheck + checkDigit;
}

function generateQRPattern() {
    // Simple ASCII art QR code pattern
    const patterns = [
        `█████████████████████████<br>
█ ███ █▄ ▄ ▄▄▄█ ███ █<br>
█ ▀▀▀ █ ▀ ▀ ▀█ ▀▀▀ █<br>
█████ █▄▄ ▄▄ ▄█ █████<br>
█▄▄▄▄▄█ ▀ ▀ ▀ █▄▄▄▄▄█<br>
█ ▄▀▄ █▄▀▄▀▄▀▄█ ▄▀▄ █<br>
█▄▄▄▄▄█▄█▄█▄█▄█▄▄▄▄▄█<br>
█████████████████████████`,
        `███████████████████████<br>
█ ███ █ ▀▄▀ █ ███ █<br>
█ ▀▀▀ █▄ ▄ ▄█ ▀▀▀ █<br>
█████ █ ▀ ▀ █ █████<br>
█▄▄▄▄▄█▄ ▄ ▄█▄▄▄▄▄█<br>
█▀▄ ▄▀█▀▄▀▄▀█▀▄ ▄▀█<br>
█▄▄▄▄▄█▄▄▄▄▄█▄▄▄▄▄█<br>
███████████████████████`
    ];
    
    return patterns[Math.floor(Math.random() * patterns.length)];
}

function generateMultipleReceipts() {
    const wrapper = document.getElementById('receipt-wrapper');
    wrapper.innerHTML = ''; // Clear existing receipts
    
    const stores = Object.keys(storeConfigs);
    
    // Save current values
    const currentStore = document.getElementById('store-select').value;
    const currentItemCount = document.getElementById('item-count').value;
    const currentMaxPrice = document.getElementById('max-price').value;
    
    // Generate 5 receipts with random stores
    for (let i = 0; i < 5; i++) {
        // Create a new receipt div for each
        const receiptDiv = document.createElement('div');
        receiptDiv.className = 'receipt';
        wrapper.appendChild(receiptDiv);
        
        // Randomly select store and values
        const randomStore = stores[Math.floor(Math.random() * stores.length)];
        const randomItemCount = Math.floor(Math.random() * 15) + 3;
        const randomMaxPrice = Math.floor(Math.random() * 100) + 10;
        
        // Generate a new date for variety
        const randomDate = new Date();
        randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30));
        randomDate.setHours(Math.floor(Math.random() * 12) + 8);
        randomDate.setMinutes(Math.floor(Math.random() * 60));
        
        // Generate receipt directly into this div
        generateReceiptInDiv(receiptDiv, randomStore, randomItemCount, randomMaxPrice, randomDate);
    }
    
    // Restore original values
    document.getElementById('store-select').value = currentStore;
    document.getElementById('item-count').value = currentItemCount;
    document.getElementById('max-price').value = currentMaxPrice;
    
    // Create a new empty receipt div for future single generations
    const newReceipt = document.createElement('div');
    newReceipt.id = 'receipt';
    newReceipt.className = 'receipt';
    wrapper.appendChild(newReceipt);
    
    // Show toast notification and scroll down
    showToast('5 random receipts generated! Scroll down to view all.', 'success');
    
    // Smooth scroll to show receipts
    setTimeout(() => {
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function printReceipt() {
    window.print();
}

// Toast notification system
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = document.createElement('span');
    icon.className = 'toast-icon';
    icon.textContent = type === 'success' ? '✓' : 'ℹ';
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'toast-message';
    messageSpan.textContent = message;
    
    toast.appendChild(icon);
    toast.appendChild(messageSpan);
    toastContainer.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}