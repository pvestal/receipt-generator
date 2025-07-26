// Store logos removed - will use text-only headers

// Version info
const APP_VERSION = '2.1.0';
const VERSION_DATE = '2025-07-26';

// Store configurations
const storeConfigs = {
    walmart: {
        name: 'Walmart',
        logo: 'W A L M A R T',
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
            { name: 'BATTERIES AA 8PK', price: 7.97 },
            { name: 'GV PEANUT BUTTER', price: 2.84 },
            { name: 'ORANGE JUICE 64OZ', price: 3.28 },
            { name: 'PASTA SAUCE', price: 1.88 },
            { name: 'FROZEN PIZZA', price: 5.97 },
            { name: 'TRASH BAGS 45CT', price: 8.97 },
            { name: 'YOGURT 4PK', price: 2.48 },
            { name: 'BACON 12OZ', price: 4.98 },
            { name: 'CHEESE SLICES', price: 3.48 },
            { name: 'HOT DOGS 8CT', price: 1.98 },
            { name: 'HAMBURGER BUNS', price: 1.48 },
            { name: 'KETCHUP 38OZ', price: 2.98 },
            { name: 'DISH SOAP', price: 2.97 },
            { name: 'TOILET PAPER 12RL', price: 9.97 },
            { name: 'BOTTLED WATER 40PK', price: 4.98 },
            { name: 'COFFEE 30.5OZ', price: 6.98 }
        ],
        taxRate: 0.06,
        memberProgram: 'Walmart+',
        memberPrefix: 'WM',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'WALMART PAY'],
        savingsMessage: 'You saved'
    },
    target: {
        name: 'Target',
        logo: 'T A R G E T',
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
        logo: 'P U B L I X',
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
        logo: 'C O S T C O',
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
        logo: 'C O S T C O  GAS',
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
        logo: "S A M ' S  C L U B",
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
        logo: 'WINN-DIXIE',
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
        logo: 'DOLLAR GENERAL',
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
        logo: 'CIRCLE K',
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
    },
    kroger: {
        name: 'Kroger',
        logo: 'KROGER',
        tagline: 'Fresh for Everyone',
        address: ['3280 Dauphin St', 'Mobile, AL 36606', '(251) 473-1012'],
        storeNumber: '0389',
        items: [
            { name: 'KROGER MILK GAL', price: 3.29 },
            { name: 'PRIVATE SELECTION BREAD', price: 2.99 },
            { name: 'SIMPLE TRUTH EGGS', price: 4.49 },
            { name: 'KROGER CHEESE 8OZ', price: 2.50 },
            { name: 'FRESH SALMON LB', price: 9.99 },
            { name: 'ORGANIC BANANAS LB', price: 0.79 },
            { name: 'DELI TURKEY LB', price: 8.99 },
            { name: 'KROGER PASTA 16OZ', price: 1.00 },
            { name: 'SIMPLE TRUTH YOGURT', price: 3.99 },
            { name: 'PRIVATE SEL COFFEE', price: 9.99 },
            { name: 'KROGER BUTTER', price: 3.99 },
            { name: 'FRESH BAKERY BAGELS', price: 3.49 },
            { name: 'KROGER ICE CREAM', price: 2.99 },
            { name: 'PRODUCE TOMATOES LB', price: 1.99 },
            { name: 'KROGER WATER 24PK', price: 2.99 }
        ],
        taxRate: 0.07,
        memberProgram: 'Kroger Plus',
        memberPrefix: 'KP',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'KROGER PAY', 'EBT'],
        savingsMessage: 'Plus Card Savings'
    },
    sevenelevn: {
        name: '7-Eleven',
        logo: '7-ELEVEN',
        tagline: 'Oh Thank Heaven',
        address: ['6001 N 9th Ave', 'Pensacola, FL 32504', 'Store #38925'],
        storeNumber: '38925',
        items: [
            { name: 'SLURPEE LARGE', price: 1.99 },
            { name: 'BIG GULP 32OZ', price: 1.49 },
            { name: 'HOT DOG BIG BITE', price: 2.49 },
            { name: '7-SELECT CHIPS', price: 2.00 },
            { name: 'COFFEE 20OZ', price: 1.89 },
            { name: 'ENERGY DRINK', price: 3.29 },
            { name: 'SANDWICH TURKEY', price: 4.99 },
            { name: 'CANDY BAR', price: 1.79 },
            { name: 'NACHOS & CHEESE', price: 3.49 },
            { name: 'TAQUITO 2 FOR', price: 3.00 },
            { name: 'ICE 10LB BAG', price: 2.99 },
            { name: 'LOTTERY TICKET', price: 5.00 },
            { name: 'PIZZA SLICE', price: 2.99 },
            { name: 'DONUT GLAZED', price: 1.29 },
            { name: 'PHONE CHARGER', price: 9.99 }
        ],
        taxRate: 0.07,
        memberProgram: '7REWARDS',
        memberPrefix: '7R',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', '7-ELEVEN WALLET', 'CASH'],
        savingsMessage: '7REWARDS Points Earned'
    },
    aldi: {
        name: 'ALDI',
        logo: 'ALDI',
        tagline: 'Good Different',
        address: ['4401 N Davis Hwy', 'Pensacola, FL 32503', '855-955-2534'],
        storeNumber: '0624',
        items: [
            { name: 'NEVER ANY CHICKEN', price: 5.99 },
            { name: 'SIMPLY NATURE PASTA', price: 1.49 },
            { name: 'MAMA COZZI PIZZA', price: 4.99 },
            { name: 'FRIENDLY FARMS MILK', price: 2.85 },
            { name: 'LIVEWELL QUINOA', price: 3.99 },
            { name: 'SPECIALLY SELECT JAM', price: 2.99 },
            { name: 'BAKERS CORNER FLOUR', price: 1.79 },
            { name: 'HAPPY FARMS CHEESE', price: 1.89 },
            { name: 'FRESH PRODUCE BAG', price: 0.99 },
            { name: 'EARTH GROWN BURGER', price: 3.49 },
            { name: 'LIVEWELL KOMBUCHA', price: 2.99 },
            { name: 'SPECIALLY SELECT OIL', price: 4.99 },
            { name: 'NEVER ANY BACON', price: 4.49 },
            { name: 'SIMPLY NATURE CHIPS', price: 2.29 },
            { name: 'PARK STREET DELI HAM', price: 3.99 }
        ],
        taxRate: 0.07,
        memberProgram: null,
        memberPrefix: null,
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'DEBIT', 'EBT', 'CASH'],
        savingsMessage: null
    },
    wholefds: {
        name: 'Whole Foods',
        logo: 'WHOLE FOODS MARKET',
        tagline: 'Americas Healthiest Grocery Store',
        address: ['3420 Veterans Blvd', 'Metairie, LA 70002', '(504) 888-8225'],
        storeNumber: '10342',
        items: [
            { name: '365 ORGANIC MILK', price: 5.99 },
            { name: 'FRESH WILD SALMON LB', price: 14.99 },
            { name: 'ORGANIC KALE BUNCH', price: 2.99 },
            { name: '365 WHOLE WHEAT BREAD', price: 3.49 },
            { name: 'GRASS FED BEEF LB', price: 9.99 },
            { name: 'ORGANIC BLUEBERRIES', price: 4.99 },
            { name: 'ALMOND BUTTER 16OZ', price: 8.99 },
            { name: 'KOMBUCHA 16OZ', price: 3.99 },
            { name: 'ORGANIC QUINOA 1LB', price: 6.99 },
            { name: 'FREE RANGE EGGS DZ', price: 5.99 },
            { name: 'VEGAN CHEESE 8OZ', price: 5.49 },
            { name: 'COCONUT WATER 1L', price: 3.99 },
            { name: 'ORGANIC HONEY 12OZ', price: 7.99 },
            { name: 'FRESH JUICE 16OZ', price: 8.99 },
            { name: 'ARTISAN SOURDOUGH', price: 4.99 }
        ],
        taxRate: 0.07,
        memberProgram: 'Prime Member',
        memberPrefix: 'PM',
        paymentMethods: ['VISA', 'MASTERCARD', 'AMEX', 'AMAZON PAY', 'WHOLE FOODS CARD'],
        savingsMessage: 'Prime Member Savings'
    },
    traderjoes: {
        name: "Trader Joe's",
        logo: "TRADER JOE'S",
        tagline: null,
        address: ['1489 Market St', 'Tallahassee, FL 32312', '(850) 656-5602'],
        storeNumber: '735',
        items: [
            { name: 'MANDARIN CHKN', price: 4.99 },
            { name: 'COOKIE BUTTER', price: 3.99 },
            { name: 'EVERYTHING BAGEL SEAS', price: 2.99 },
            { name: 'CAULIFLOWER GNOCCHI', price: 2.99 },
            { name: 'TWO BUCK CHUCK', price: 2.99 },
            { name: 'ORGANIC BANANAS EA', price: 0.19 },
            { name: 'UNEXPECTED CHEDDAR', price: 4.99 },
            { name: 'MINI BRIE BITES', price: 3.49 },
            { name: 'DARK CHOCOLATE PB CUPS', price: 4.49 },
            { name: 'FROZEN MAC & CHEESE', price: 2.99 },
            { name: 'FLOWERS BOUQUET', price: 6.99 },
            { name: 'TRIPLE GINGER SNAPS', price: 3.99 },
            { name: 'JOE JOES COOKIES', price: 2.99 },
            { name: 'FROZEN GYOZA', price: 3.99 },
            { name: 'ORGANIC MILK HG', price: 3.49 }
        ],
        taxRate: 0.065,
        memberProgram: null,
        memberPrefix: null,
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'DEBIT', 'CASH'],
        savingsMessage: null
    },
    riteaid: {
        name: 'Rite Aid',
        logo: 'RITE AID',
        tagline: 'With us, its personal',
        address: ['852 Downtowner Loop W', 'Mobile, AL 36609', '(251) 479-1351'],
        storeNumber: '4821',
        items: [
            { name: 'RITE AID ASPIRIN', price: 5.99 },
            { name: 'PANTENE SHAMPOO', price: 6.49 },
            { name: 'THRIFTY ICE CREAM', price: 3.99 },
            { name: 'PHOTO PRINTS 4X6', price: 0.29 },
            { name: 'RITE AID VITAMINS', price: 8.99 },
            { name: 'GREETING CARD', price: 3.49 },
            { name: 'COCA COLA 2L', price: 2.49 },
            { name: 'CANDY BAR KING', price: 1.99 },
            { name: 'MAGAZINE', price: 5.99 },
            { name: 'DURACELL AA 4PK', price: 7.99 },
            { name: 'KLEENEX TISSUES', price: 2.49 },
            { name: 'RITE AID BANDAGES', price: 3.99 },
            { name: 'TOOTHBRUSH', price: 3.99 },
            { name: 'NAIL POLISH', price: 4.99 },
            { name: 'READING GLASSES', price: 12.99 }
        ],
        taxRate: 0.07,
        memberProgram: 'wellness+',
        memberPrefix: 'WR',
        paymentMethods: ['VISA', 'MASTERCARD', 'DISCOVER', 'RITE AID CARD', 'CASH'],
        savingsMessage: 'wellness+ rewards'
    }
};

// Custom items array
let customItems = [];
let globalCardEnding = null; // Store consistent card ending
let globalExpDate = null; // Store consistent expiration date

// Initialize date input with current date/time
document.addEventListener('DOMContentLoaded', function() {
    // Display version
    const versionElement = document.getElementById('app-version');
    if (versionElement) {
        versionElement.textContent = `v${APP_VERSION}`;
    }
    
    // Generate random date within last 14 days
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 14); // 0-13 days ago
    const randomDate = new Date(now);
    randomDate.setDate(randomDate.getDate() - daysAgo);
    
    // Random time between 7 AM and 10 PM
    const randomHour = Math.floor(Math.random() * 15) + 7; // 7-21 (7 AM - 9 PM)
    const randomMinute = Math.floor(Math.random() * 60);
    randomDate.setHours(randomHour, randomMinute, Math.floor(Math.random() * 60));
    
    randomDate.setMinutes(randomDate.getMinutes() - randomDate.getTimezoneOffset());
    document.getElementById('receipt-date').value = randomDate.toISOString().slice(0, 16);
    
    // Initialize receipt counter
    initializeCounter();
    
    // Generate initial receipt
    generateReceipt();
    
    // Mobile menu functionality
    setupMobileMenu();
});

// Receipt counter functionality
function initializeCounter() {
    const savedCount = localStorage.getItem('receiptCount') || '0';
    document.getElementById('receipt-count').textContent = savedCount;
}

function incrementCounter(count = 1) {
    const currentCount = parseInt(localStorage.getItem('receiptCount') || '0');
    const newCount = currentCount + count;
    localStorage.setItem('receiptCount', newCount.toString());
    document.getElementById('receipt-count').textContent = newCount;
    
    // Add a subtle animation
    const counterElement = document.getElementById('receipt-count');
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 200);
}

// Mobile menu setup
function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const closePanel = document.querySelector('.close-panel');
    const controlsPanel = document.querySelector('.controls-panel');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    // Open panel
    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        controlsPanel.classList.remove('closed');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll when menu is open
    });
    
    // Close panel function
    function closeControlPanel() {
        controlsPanel.classList.add('closed');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scroll
    }
    
    // Close panel button
    closePanel.addEventListener('click', closeControlPanel);
    
    // Close panel when clicking overlay
    mobileOverlay.addEventListener('click', closeControlPanel);
    
    // Initialize panel as closed on screens <= 1400px
    if (window.innerWidth <= 1400) {
        controlsPanel.classList.add('closed');
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1400) {
            // On large screens, remove closed state and overlay
            controlsPanel.classList.remove('closed');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            // On smaller screens, if panel is open show overlay
            if (!controlsPanel.classList.contains('closed')) {
                mobileOverlay.classList.add('active');
            }
        }
    });
}

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

// Random store checkbox functionality
document.getElementById('random-store').addEventListener('change', function() {
    document.getElementById('store-select').disabled = this.checked;
    if (this.checked) {
        document.getElementById('store-select').style.opacity = '0.5';
    } else {
        document.getElementById('store-select').style.opacity = '1';
    }
});

// Tab functionality
window.showTab = function(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
};

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
    let store = document.getElementById('store-select').value;
    
    // Check if random store is selected
    if (document.getElementById('random-store').checked) {
        const stores = Object.keys(storeConfigs);
        store = stores[Math.floor(Math.random() * stores.length)];
    }
    
    const itemCount = parseInt(document.getElementById('item-count').value);
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    const date = new Date(document.getElementById('receipt-date').value);
    
    const receipt = document.getElementById('receipt');
    generateReceiptInDiv(receipt, store, itemCount, maxPrice, date);
    
    // Increment counter
    incrementCounter();
    
    // Show toast notification
    const storeName = storeConfigs[store].name;
    showToast(`${storeName} receipt generated!`, 'success');
}

function generateReceiptInDiv(receipt, store, itemCount, maxPrice, date) {
    const config = storeConfigs[store];
    
    // Clear receipt and set store class
    const isColorMode = document.getElementById('color-mode').checked;
    receipt.className = `receipt ${store}${!isColorMode ? ' monochrome' : ''}`;
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
    
    // Date and transaction info - store specific formatting
    const transInfo = document.createElement('div');
    transInfo.style.marginTop = '8px';
    transInfo.style.fontSize = '10px';
    transInfo.style.lineHeight = '1.3';
    const registerNum = Math.floor(Math.random() * 20) + 1;
    const operatorId = Math.floor(Math.random() * 900) + 100;
    const transNum = generateTransactionNumber();
    
    let transText = '';
    if (store === 'walmart') {
        transText = `
            ST# ${config.storeNumber} OP# ${operatorId.toString().padStart(8, '0')} TE# ${registerNum.toString().padStart(2, '0')} TR# ${transNum.toString().padStart(5, '0')}<br>
            ${formatDate(date)}
        `;
    } else if (store === 'target') {
        transText = `
            ${formatDate(date)}<br>
            STORE: ${config.storeNumber.padStart(4, '0')} REG: ${registerNum.toString().padStart(3, '0')} TRAN: ${transNum}<br>
            CASHIER: ${generateCashierName()}
        `;
    } else if (store === 'publix') {
        transText = `
            Store ${config.storeNumber} - ${formatDate(date)}<br>
            Terminal ${registerNum} Trans ${transNum}<br>
            Your cashier today was ${generateCashierName()}
        `;
    } else if (store === 'cvs' || store === 'walgreens') {
        transText = `
            ${formatDate(date).toUpperCase()}<br>
            Store: ${config.storeNumber} Reg: ${registerNum} Trans: ${transNum}<br>
            Cashier ID: ${operatorId}
        `;
    } else {
        // Default format
        transText = `
            ${formatDate(date).toUpperCase()}<br>
            REG ${registerNum.toString().padStart(2, '0')} #${operatorId} ${generateCashierName()}<br>
            ${config.storeNumber ? `STR ${config.storeNumber}` : ''} TRN ${transNum}
        `;
    }
    
    transInfo.innerHTML = transText;
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
    
    // Add random items with realistic formatting
    if (config.isGasStation) {
        // For gas stations, show gallons and price per gallon
        const gallons = (Math.random() * 15 + 5).toFixed(3);
        const selectedGas = config.items[Math.floor(Math.random() * config.items.length)];
        const totalPrice = (parseFloat(gallons) * selectedGas.price).toFixed(2);
        
        const gasDiv = document.createElement('div');
        gasDiv.style.marginBottom = '8px';
        gasDiv.style.fontSize = '11px';
        gasDiv.innerHTML = `
            <div>FUEL PURCHASE</div>
            <div>${selectedGas.name}</div>
            <div style="display: flex; justify-content: space-between;">
                <span>  ${gallons} GAL @ ${selectedGas.price.toFixed(3)}/GAL</span>
                <span>$${totalPrice}</span>
            </div>
            <div style="margin-top: 3px">PUMP #${Math.floor(Math.random() * 12) + 1}</div>
        `;
        itemsContainer.appendChild(gasDiv);
        subtotal = parseFloat(totalPrice);
    } else {
        selectedItems.forEach((item, index) => {
            const includeCode = store === 'walmart' || store === 'target' || store === 'costco';
            const itemDiv = createItemLine(item.name, item.price, includeCode);
            itemsContainer.appendChild(itemDiv);
            subtotal += item.price;
            
            // Sometimes add discount lines for realism
            if (Math.random() > 0.85 && item.price > 5) {
                const discountAmount = (item.price * 0.1).toFixed(2);
                const discountDiv = document.createElement('div');
                discountDiv.className = 'receipt-item';
                discountDiv.style.fontSize = '10px';
                discountDiv.style.paddingLeft = '10px';
                discountDiv.innerHTML = `
                    <span class="item-name" style="font-style: italic">DISCOUNT</span>
                    <span class="item-price" style="color: #d00">-${discountAmount}</span>
                `;
                itemsContainer.appendChild(discountDiv);
                subtotal -= parseFloat(discountAmount);
            }
        });
    }
    
    receipt.appendChild(itemsContainer);
    
    // Totals
    const totalsDiv = document.createElement('div');
    totalsDiv.className = 'receipt-totals';
    
    const tax = subtotal * config.taxRate;
    const total = subtotal + tax;
    
    // Format totals with proper alignment
    const subtotalStr = subtotal.toFixed(2).padStart(8, ' ');
    const taxStr = tax.toFixed(2).padStart(8, ' ');
    const totalStr = total.toFixed(2).padStart(8, ' ');
    
    totalsDiv.innerHTML = `
        <div class="total-line">
            <span>SUBTOTAL</span>
            <span>${subtotalStr}</span>
        </div>
        <div class="total-line">
            <span>TAX ${(config.taxRate * 100).toFixed(1)}%</span>
            <span>${taxStr}</span>
        </div>
        <div class="total-line grand-total">
            <span>TOTAL</span>
            <span>${totalStr}</span>
        </div>
    `;
    
    receipt.appendChild(totalsDiv);
    
    // Savings info with more realistic calculation
    if (config.savingsMessage && subtotal > 20) {
        const savingsPercent = Math.random() * 0.15 + 0.05; // 5-20% savings
        const savings = (subtotal * savingsPercent).toFixed(2);
        const savingsDiv = document.createElement('div');
        savingsDiv.className = 'savings-info';
        savingsDiv.innerHTML = `*** ${config.savingsMessage}: $${savings} ***`;
        receipt.appendChild(savingsDiv);
    }
    
    // Payment info - more realistic formatting
    const paymentDiv = document.createElement('div');
    paymentDiv.style.marginTop = '10px';
    paymentDiv.style.fontSize = '10px';
    
    // Always use AMEX with consistent ending
    const selectedPayment = 'AMEX';
    // Generate card ending once and reuse (AMEX uses 4 digits)
    if (!globalCardEnding) {
        globalCardEnding = Math.floor(Math.random() * 9000) + 1000;
    }
    if (!globalExpDate) {
        // Generate realistic exp date (1-3 years in future)
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + Math.floor(Math.random() * 3) + 1);
        const month = String(futureDate.getMonth() + 1).padStart(2, '0');
        const year = String(futureDate.getFullYear()).slice(-2);
        globalExpDate = `${month}/${year}`;
    }
    const lastFour = globalCardEnding;
    const authCode = generateAuthCode();
    
    // Store-specific payment formatting
    if (store === 'walmart' || store === 'target') {
        paymentDiv.innerHTML = `
            <div>CARD TYPE: ${selectedPayment}</div>
            <div>ACCOUNT: ***********${lastFour}</div>
            <div>EXP DATE: ${globalExpDate}</div>
            <div>APPROVAL: ${authCode}</div>
            <div>AMOUNT: $${total.toFixed(2)}</div>
        `;
    } else if (store === 'costco' || store === 'samsclub') {
        paymentDiv.innerHTML = `
            <div>${selectedPayment} ENDING IN ${lastFour}</div>
            <div>EXP: ${globalExpDate} AUTH: ${authCode}</div>
            <div>TOTAL AMOUNT: $${total.toFixed(2)}</div>
            <div>PAYMENT APPROVED</div>
        `;
    } else {
        paymentDiv.innerHTML = `
            <div>${selectedPayment} ***${lastFour} EXP ${globalExpDate}</div>
            <div>APPROVED ${authCode}</div>
            <div>AMOUNT: $${total.toFixed(2)}</div>
        `;
    }
    receipt.appendChild(paymentDiv);
    
    // Footer
    const footer = generateFooter(store);
    receipt.appendChild(footer);
}

function getLogoText(store, isColorMode) {
    const logos = {
        'walmart': isColorMode ? '★ ★ ★  WALMART  ★ ★ ★' : 'WALMART',
        'target': isColorMode ? '◎  T A R G E T  ◎' : 'TARGET',
        'cvs': isColorMode ? '♥ CVS/pharmacy ♥' : 'CVS/pharmacy',
        'walgreens': isColorMode ? '═ W A L G R E E N S ═' : 'WALGREENS',
        'publix': isColorMode ? '▪▪▪ P U B L I X ▪▪▪' : 'PUBLIX',
        'homedepot': isColorMode ? '⌂ THE HOME DEPOT ⌂' : 'THE HOME DEPOT',
        'costco': isColorMode ? '▓▓ COSTCO WHOLESALE ▓▓' : 'COSTCO WHOLESALE',
        'costcogas': isColorMode ? '⛽ COSTCO GASOLINE ⛽' : 'COSTCO GASOLINE',
        'samsclub': isColorMode ? '■ SAM\'S CLUB ■' : 'SAM\'S CLUB',
        'winn-dixie': isColorMode ? '◆ WINN-DIXIE ◆' : 'WINN-DIXIE',
        'dollar-general': isColorMode ? '$ DOLLAR GENERAL $' : 'DOLLAR GENERAL',
        'circle-k': isColorMode ? '⊗ Circle K ⊗' : 'Circle K',
        'sevenelevn': isColorMode ? '▌7-ELEVEN▐' : '7-ELEVEN',
        'aldi': isColorMode ? '▬ A L D I ▬' : 'ALDI',
        'wholefoods': isColorMode ? '● WHOLE FOODS ●' : 'WHOLE FOODS MARKET',
        'traderjoes': isColorMode ? '⊕ TRADER JOE\'S ⊕' : 'TRADER JOE\'S',
        'kroger': isColorMode ? '◈ KROGER ◈' : 'KROGER',
        'riteaid': isColorMode ? '✚ RITE AID ✚' : 'RITE AID'
    };
    return logos[store] || config.logo;
}

function generateHeader(config, store) {
    const header = document.createElement('div');
    header.className = 'store-header';
    
    // Store-specific logo formatting
    const logo = document.createElement('div');
    logo.className = 'store-logo';
    
    const isColorMode = document.getElementById('color-mode').checked;
    const logoText = getLogoText(store, isColorMode);
    
    // Simplified logo generation using logoText
    const headerClass = store === 'winn-dixie' ? 'winndixie' : 
                       store === 'dollar-general' ? 'dg' : 
                       store === 'sevenelevn' ? 'seveneleven' : 
                       store === 'circle-k' ? 'circlek' : 
                       store === 'wholefoods' ? 'wholefoods' : 
                       store === 'traderjoes' ? 'traderjoes' : 
                       store === 'riteaid' ? 'riteaid' : 
                       store === 'costcogas' ? 'costco' : 
                       store === 'samsclub' ? 'sams' : store;
                       
    logo.innerHTML = `<div class="${headerClass}-header">
                        <pre class="ascii-logo">${logoText}</pre>
                        ${store === 'walmart' && isColorMode ? '<div class="walmart-tagline">Save money. Live better.</div>' : ''}
                     </div>`;
    logo.classList.add(`${headerClass}-logo`);
    
    header.appendChild(logo);
    
    if (config.tagline && store !== 'cvs') {
        const tagline = document.createElement('div');
        tagline.className = 'store-tagline';
        tagline.textContent = config.tagline;
        header.appendChild(tagline);
    }
    
    return header;
}

function createItemLine(name, price, includeCode = false) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'receipt-item';
    
    // Sometimes add item codes for realism
    const itemCode = includeCode && Math.random() > 0.5 ? 
        `${Math.floor(Math.random() * 900000) + 100000} ` : '';
    
    // Format price with proper alignment
    const priceStr = price.toFixed(2);
    const paddedPrice = priceStr.padStart(7, ' ');
    
    itemDiv.innerHTML = `
        <span class="item-name">${itemCode}${name}</span>
        <span class="item-price">${paddedPrice}</span>
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
    
    // Use different barcode types based on actual store usage
    const code128Stores = ['walmart', 'costco', 'costcogas', 'samsclub', 'homedepot'];
    const code39Stores = ['cvs', 'walgreens', 'publix', 'winn-dixie', 'dollar-general', 'circle-k'];
    
    if (code128Stores.includes(store)) {
        barcodeElement.className = 'barcode-128';
        barcodeElement.textContent = barcodeData;
    } else if (store === 'target') {
        // Target uses special formatting for DPCI
        barcodeElement.className = 'barcode-128';
        barcodeElement.textContent = barcodeData.replace(/-/g, '');
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
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString().substr(-2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // Different stores use different date formats
    const random = Math.random();
    if (random < 0.3) {
        return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    } else if (random < 0.6) {
        return `${month}/${day}/${year} ${hours}:${minutes}`;
    } else {
        return `${month}-${day}-${year} ${hours}:${minutes}`;
    }
}

function generateTransactionNumber() {
    return Math.floor(Math.random() * 900000) + 100000;
}

function generateCashierName() {
    const firstNames = ['SARAH', 'JOHN', 'MARIA', 'JAMES', 'LISA', 'DAVID', 'JENNIFER', 'MICHAEL', 'SUSAN', 'ROBERT', 'KAREN', 'WILLIAM'];
    const lastInitials = ['M', 'D', 'R', 'K', 'P', 'W', 'T', 'S', 'B', 'C', 'A', 'L'];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastInitial = lastInitials[Math.floor(Math.random() * lastInitials.length)];
    return `${firstName} ${lastInitial}.`;
}

function generateAuthCode() {
    // More realistic auth codes (6 alphanumeric characters)
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let authCode = '';
    for (let i = 0; i < 6; i++) {
        authCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return authCode;
}

function generateMemberId(prefix) {
    const numbers = Math.floor(Math.random() * 900000000000) + 100000000000;
    return `${prefix}${numbers}`;
}

function generateBarcodeData(store) {
    // Generate realistic barcode data based on actual store formats
    const date = new Date();
    const storeNum = storeConfigs[store].storeNumber || '0000';
    const trans = Math.floor(Math.random() * 99999) + 1;
    const reg = Math.floor(Math.random() * 30) + 1;
    
    if (store === 'walmart') {
        // Walmart uses TC# (Transaction Code) format: TC# followed by 20 digits
        // Format: SSSSRRTTTTTTTMMDDYYHHMM
        const dateStr = `${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getFullYear().toString().substr(-2)}`;
        const timeStr = `${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}`;
        return `${storeNum}${reg.toString().padStart(2, '0')}${trans.toString().padStart(7, '0')}${dateStr}${timeStr}`;
    } else if (store === 'target') {
        // Target uses receipt ID with format: SSSS-RRRR-TTTTTT-MMDD
        const dateStr = `${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        const regStr = (reg + 1000).toString();
        return `${storeNum}-${regStr}-${trans.toString().padStart(6, '0')}-${dateStr}`;
    } else if (store === 'cvs') {
        // CVS uses format: Store-Date-Trans with full year
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `${storeNum}-${dateStr}-${trans.toString().padStart(6, '0')}`;
    } else if (store === 'walgreens') {
        // Walgreens format: SSSSS-YYYYMMDD-TTTTTT
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `${storeNum}-${dateStr}-${trans.toString().padStart(6, '0')}`;
    } else if (store === 'publix') {
        // Publix format: PUB SSSS TTTTTT YYYYMMDD
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `PUB ${storeNum} ${trans.toString().padStart(6, '0')} ${dateStr}`;
    } else if (store === 'homedepot') {
        // Home Depot format: HD SSSS RRR TTTTTTTT
        return `HD ${storeNum} ${reg.toString().padStart(3, '0')} ${trans.toString().padStart(8, '0')}`;
    } else if (store === 'costco' || store === 'costcogas') {
        // Costco format: SSSS YYYY MM DD TTTTTTTT
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${storeNum} ${year} ${month} ${day} ${trans.toString().padStart(8, '0')}`;
    } else if (store === 'samsclub') {
        // Sam's Club format: SC SSSS YYYYMMDD TTTTTTTT
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `SC ${storeNum} ${dateStr} ${trans.toString().padStart(8, '0')}`;
    } else if (store === 'winn-dixie') {
        // Winn-Dixie format: WD-SSS-MMDD-TTTTT
        const dateStr = `${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `WD-${storeNum.substr(-3)}-${dateStr}-${trans.toString().padStart(5, '0')}`;
    } else if (store === 'dollar-general') {
        // Dollar General format: DG SSSSS MMDDYY TTTTTT
        const dateStr = `${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getFullYear().toString().substr(-2)}`;
        return `DG ${storeNum} ${dateStr} ${trans.toString().padStart(6, '0')}`;
    } else if (store === 'circle-k') {
        // Circle K format: CK SSSSSSS TTTTTT HHMM
        const timeStr = `${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}`;
        return `CK ${storeNum} ${trans.toString().padStart(6, '0')} ${timeStr}`;
    } else if (store === 'sevenelevn') {
        // 7-Eleven format: 7E SSSSS YYYYMMDD TTTTTT
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `7E ${storeNum} ${dateStr} ${trans.toString().padStart(6, '0')}`;
    } else if (store === 'aldi') {
        // ALDI format: ALDI SSSS TTTTTTTT
        return `ALDI ${storeNum} ${trans.toString().padStart(8, '0')}`;
    } else if (store === 'wholefds') {
        // Whole Foods format: WFM SSSSS YYYYMMDD TTTTTTT
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `WFM ${storeNum} ${dateStr} ${trans.toString().padStart(7, '0')}`;
    } else if (store === 'traderjoes') {
        // Trader Joe's format: TJ SSS MMDDYY TTTTTT
        const dateStr = `${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getFullYear().toString().substr(-2)}`;
        return `TJ ${storeNum.substr(-3)} ${dateStr} ${trans.toString().padStart(6, '0')}`;
    } else if (store === 'kroger') {
        // Kroger format: KR SSSS TTTTTTTT MMDD
        const dateStr = `${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `KR ${storeNum} ${trans.toString().padStart(8, '0')} ${dateStr}`;
    } else if (store === 'riteaid') {
        // Rite Aid format: RA SSSS YYYYMMDD TTTTT
        const dateStr = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
        return `RA ${storeNum} ${dateStr} ${trans.toString().padStart(5, '0')}`;
    } else {
        // Default format
        return `${storeNum} ${trans.toString().padStart(8, '0')}`;
    }
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
    const isRandomStore = document.getElementById('random-store').checked;
    
    // Save current values
    const currentStore = document.getElementById('store-select').value;
    const currentItemCount = document.getElementById('item-count').value;
    const currentMaxPrice = document.getElementById('max-price').value;
    
    // Generate 5 receipts
    const receipts = [];
    for (let i = 0; i < 5; i++) {
        // Create a new receipt div for each
        const receiptDiv = document.createElement('div');
        receiptDiv.className = 'receipt';
        receiptDiv.id = `receipt-${i}`; // Give each receipt a unique ID
        
        // Select store based on random toggle
        const selectedStore = isRandomStore ? 
            stores[Math.floor(Math.random() * stores.length)] : 
            currentStore;
        const randomItemCount = Math.floor(Math.random() * 15) + 3;
        const randomMaxPrice = Math.floor(Math.random() * 100) + 10;
        
        // Generate a new date within last 14 days
        const randomDate = new Date();
        const daysAgo = Math.floor(Math.random() * 14); // 0-13 days ago
        randomDate.setDate(randomDate.getDate() - daysAgo);
        const randomHour = Math.floor(Math.random() * 15) + 7; // 7 AM - 9 PM
        const randomMinute = Math.floor(Math.random() * 60);
        randomDate.setHours(randomHour, randomMinute, Math.floor(Math.random() * 60));
        
        // Store receipt info for later
        receipts.push({ div: receiptDiv, store: selectedStore, itemCount: randomItemCount, maxPrice: randomMaxPrice, date: randomDate });
    }
    
    // Generate each receipt
    receipts.forEach((receipt, index) => {
        wrapper.appendChild(receipt.div);
        // Small delay to ensure DOM is ready
        setTimeout(() => {
            generateReceiptInDiv(receipt.div, receipt.store, receipt.itemCount, receipt.maxPrice, receipt.date);
        }, index * 50);
    });
    
    // Restore original values
    document.getElementById('store-select').value = currentStore;
    document.getElementById('item-count').value = currentItemCount;
    document.getElementById('max-price').value = currentMaxPrice;
    
    // Create a new empty receipt div for future single generations
    setTimeout(() => {
        const newReceipt = document.createElement('div');
        newReceipt.id = 'receipt';
        newReceipt.className = 'receipt';
        wrapper.appendChild(newReceipt);
    }, 300);
    
    // Increment counter by 5
    incrementCounter(5);
    
    // Show toast notification and scroll down
    showToast('5 random receipts generated! Scroll down to view all.', 'success');
    
    // Smooth scroll to show receipts
    setTimeout(() => {
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
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