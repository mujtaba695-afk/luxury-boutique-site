const products = [
    {
        id: 1,
        title: "Floral Blush Kurta",
        price: 85.00,
        category: "Kurtas",
        fabric: "Lawn",
        occasion: "Casual",
        sizes: ["S", "M", "L", "XL"],
        primaryImage: "assets/images/floral_blush_highres.png",
        secondaryImage: "assets/images/floral_blush_highres.png",
        description: "An elegant blush pink kurta with intricate floral embroidery details on the neckline and sleeves.",
        onSale: true,
        discountPrice: 51.00
    },
    {
        id: 2,
        title: "Golden Ivory 2-Piece",
        price: 120.00,
        category: "2-Piece",
        fabric: "Silk",
        occasion: "Festive",
        sizes: ["M", "L"],
        primaryImage: "assets/images/golden_ivory_highres.png",
        secondaryImage: "assets/images/golden_ivory_highres.png",
        description: "Sophisticated ivory ensemble with brushed gold accents, perfect for evening soirées.",
        onSale: true,
        discountPrice: 72.00
    },
    {
        id: 3,
        title: "Midnight Coral Luxury Pret",
        price: 150.00,
        category: "Luxury Pret",
        fabric: "Chiffon",
        occasion: "Festive",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/midnight_coral_highres.png",
        secondaryImage: "assets/images/midnight_coral_highres.png",
        description: "A statement piece featuring dusty coral embroidery on deep midnight silk chiffon.",
        onSale: false
    },
    {
        id: 4,
        title: "Azure Sky Silk Kurta",
        price: 95.00,
        category: "Kurtas",
        fabric: "Silk",
        occasion: "Casual",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/azure_sky_highres.png",
        secondaryImage: "assets/images/azure_sky_highres.png",
        description: "A soft blue silk kurta with delicate white thread work.",
        onSale: true,
        discountPrice: 57.00
    },
    {
        id: 5,
        title: "Lavender Silk Pret",
        price: 110.00,
        category: "Luxury Pret",
        fabric: "Silk",
        occasion: "Festive",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/lavender_pret.png",
        secondaryImage: "assets/images/lavender_pret.png",
        description: "An elegant lavender silk ensemble with intricate silver thread work, embodying modern grace.",
        onSale: false
    },
    {
        id: 6,
        title: "Emerald Velvet Majesty",
        price: 195.00,
        category: "Luxury Pret",
        fabric: "Velvet",
        occasion: "Festive",
        sizes: ["M", "L", "XL"],
        primaryImage: "assets/images/emerald_luxury.png",
        secondaryImage: "assets/images/emerald_luxury.png",
        description: "A regal deep emerald velvet outfit featuring heavy gold zari work, perfect for grand evening events.",
        onSale: true,
        discountPrice: 117.00
    },
    {
        id: 7,
        title: "Sunset Chiffon Glow",
        price: 140.00,
        category: "2-Piece",
        fabric: "Chiffon",
        occasion: "Festive",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/sunset_chiffon.png",
        secondaryImage: "assets/images/sunset_chiffon.png",
        description: "A vibrant sunset orange chiffon suit with delicate beadwork that catches every light.",
        onSale: false
    },
    {
        id: 8,
        title: "Pristine Ivory Lace",
        price: 75.00,
        category: "Kurtas",
        fabric: "Lawn",
        occasion: "Casual",
        sizes: ["S", "M", "L", "XL"],
        primaryImage: "assets/images/ivory_lace.png",
        secondaryImage: "assets/images/ivory_lace.png",
        description: "A clean and crisp ivory lawn suit with intricate lace inserts and classic white-on-white embroidery.",
        onSale: true,
        discountPrice: 45.00
    },
    {
        id: 9,
        title: "Ruby Red Chiffon",
        price: 180.00,
        category: "Luxury Pret",
        fabric: "Chiffon",
        occasion: "Festive",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/ruby_red_chiffon.png",
        secondaryImage: "assets/images/ruby_red_chiffon.png",
        description: "A flowing ruby red chiffon ensemble with heavy gold beadwork and dramatic silhouettes.",
        onSale: true,
        discountPrice: 108.00
    },
    {
        id: 10,
        title: "Pearl White Organza",
        price: 130.00,
        category: "2-Piece",
        fabric: "Silk",
        occasion: "Festive",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/pearl_white_organza.png",
        secondaryImage: "assets/images/pearl_white_organza.png",
        description: "A delicate pearl white organza suit with silver hand-embroidery, pure and pristine.",
        onSale: false
    },
    {
        id: 11,
        title: "Midnight Blue Peshwas",
        price: 210.00,
        category: "Luxury Pret",
        fabric: "Silk",
        occasion: "Festive",
        sizes: ["M", "L", "XL"],
        primaryImage: "assets/images/midnight_blue_peshwas.png",
        secondaryImage: "assets/images/midnight_blue_peshwas.png",
        description: "A voluminous midnight blue Peshwas with intricate silver tilla work, fit for royalty.",
        onSale: true,
        discountPrice: 126.00
    },
    {
        id: 12,
        title: "Copper Silk Anarkali",
        price: 175.00,
        category: "Luxury Pret",
        fabric: "Silk",
        occasion: "Festive",
        sizes: ["S", "M", "L"],
        primaryImage: "assets/images/copper_silk_anarkali.png",
        secondaryImage: "assets/images/copper_silk_anarkali.png",
        description: "A copper-toned raw silk Anarkali with bronze metallic embroidery, sophisticated and atmospheric.",
        onSale: false
    }
];

function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

function getAllProducts() {
    return products;
}
