(function () {
  const data = {
    profile: {
      id: 1,
      name: "Portfolio User",
      email: "portfolio@pizza-demo.dev",
      phone: "080-123-4567",
      address: "Bangkok, Thailand",
      role: "customer"
    },
    pizzas: [
      {
        id: 1,
        name: "Margherita Classic",
        description: "Mozzarella, tomato sauce, basil.",
        basePrice: 229,
        image: "img/m1.jpg",
        tags: ["Classic", "Vegetarian"]
      },
      {
        id: 2,
        name: "Smoky Pepperoni",
        description: "Pepperoni, mozzarella, smoky tomato sauce.",
        basePrice: 269,
        image: "img/m2.jpg",
        tags: ["Best Seller"]
      },
      {
        id: 3,
        name: "Hawaiian Fiesta",
        description: "Ham, pineapple, mozzarella with sweet balance.",
        basePrice: 259,
        image: "img/m3.jpg",
        tags: ["Sweet & Savory"]
      },
      {
        id: 4,
        name: "Seafood Deluxe",
        description: "Shrimp, squid, garlic butter and melted cheese.",
        basePrice: 319,
        image: "img/m4.jpg",
        tags: ["Premium"]
      }
    ],
    sizes: [
      { id: "s", name: "Small", price: 0 },
      { id: "m", name: "Medium", price: 40 },
      { id: "l", name: "Large", price: 80 }
    ],
    crusts: [
      { id: "thin", name: "Thin Crust", price: 0 },
      { id: "pan", name: "Pan", price: 25 },
      { id: "cheese", name: "Cheese Burst", price: 45 }
    ],
    seededOrders: [
      {
        id: "ORD-1001",
        customerName: "Aom",
        phone: "081-500-1111",
        address: "Chiang Mai",
        paymentMethod: "Cash",
        status: "Pending",
        createdAt: "2026-02-14T10:00:00.000Z",
        total: 558,
        items: [
          {
            pizzaName: "Margherita Classic",
            sizeName: "Medium",
            crustName: "Thin Crust",
            quantity: 2,
            unitPrice: 269
          }
        ]
      },
      {
        id: "ORD-1002",
        customerName: "Beam",
        phone: "082-700-2222",
        address: "Phuket",
        paymentMethod: "PromptPay",
        status: "Processing",
        createdAt: "2026-02-14T11:45:00.000Z",
        total: 364,
        items: [
          {
            pizzaName: "Smoky Pepperoni",
            sizeName: "Small",
            crustName: "Pan",
            quantity: 1,
            unitPrice: 294
          },
          {
            pizzaName: "Margherita Classic",
            sizeName: "Small",
            crustName: "Thin Crust",
            quantity: 1,
            unitPrice: 229
          }
        ]
      }
    ]
  };

  window.MockData = data;
})();
