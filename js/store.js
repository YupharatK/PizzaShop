(function () {
  const KEYS = {
    profile: "pizza_demo_profile",
    cart: "pizza_demo_cart",
    orders: "pizza_demo_orders"
  };

  function read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) {
        return fallback;
      }
      return JSON.parse(raw);
    } catch (error) {
      return fallback;
    }
  }

  function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function getProfile() {
    const stored = read(KEYS.profile, null);
    if (stored) {
      return stored;
    }
    write(KEYS.profile, window.MockData.profile);
    return window.MockData.profile;
  }

  function setProfile(profile) {
    write(KEYS.profile, profile);
  }

  function getPizzas() {
    return window.MockData.pizzas;
  }

  function getPizzaById(id) {
    return getPizzas().find(function (item) {
      return item.id === Number(id);
    });
  }

  function getSizeById(id) {
    return window.MockData.sizes.find(function (item) {
      return item.id === id;
    });
  }

  function getCrustById(id) {
    return window.MockData.crusts.find(function (item) {
      return item.id === id;
    });
  }

  function getCart() {
    return read(KEYS.cart, []);
  }

  function setCart(items) {
    write(KEYS.cart, items);
  }

  function clearCart() {
    setCart([]);
  }

  function makeCartItemId(pizzaId, sizeId, crustId) {
    return [pizzaId, sizeId, crustId].join("-");
  }

  function addToCart(payload) {
    const pizza = getPizzaById(payload.pizzaId);
    const size = getSizeById(payload.sizeId);
    const crust = getCrustById(payload.crustId);

    if (!pizza || !size || !crust || payload.quantity < 1) {
      return { ok: false, message: "Invalid item data" };
    }

    const next = getCart().slice();
    const itemId = makeCartItemId(payload.pizzaId, payload.sizeId, payload.crustId);
    const found = next.find(function (item) {
      return item.id === itemId;
    });

    if (found) {
      found.quantity += payload.quantity;
    } else {
      next.push({
        id: itemId,
        pizzaId: payload.pizzaId,
        sizeId: payload.sizeId,
        crustId: payload.crustId,
        quantity: payload.quantity
      });
    }

    setCart(next);
    return { ok: true };
  }

  function updateCartQuantity(itemId, quantity) {
    const next = getCart().map(function (item) {
      if (item.id === itemId) {
        return Object.assign({}, item, { quantity: Math.max(1, quantity) });
      }
      return item;
    });
    setCart(next);
  }

  function removeCartItem(itemId) {
    const next = getCart().filter(function (item) {
      return item.id !== itemId;
    });
    setCart(next);
  }

  function enrichCartItems() {
    return getCart().map(function (item) {
      const pizza = getPizzaById(item.pizzaId);
      const size = getSizeById(item.sizeId);
      const crust = getCrustById(item.crustId);
      const unitPrice = pizza.basePrice + size.price + crust.price;
      return {
        id: item.id,
        pizzaId: item.pizzaId,
        pizzaName: pizza.name,
        image: pizza.image,
        sizeId: size.id,
        sizeName: size.name,
        crustId: crust.id,
        crustName: crust.name,
        quantity: item.quantity,
        unitPrice: unitPrice,
        totalPrice: unitPrice * item.quantity
      };
    });
  }

  function getCartTotal() {
    return enrichCartItems().reduce(function (sum, item) {
      return sum + item.totalPrice;
    }, 0);
  }

  function getOrders() {
    const stored = read(KEYS.orders, null);
    if (stored && stored.length) {
      return stored;
    }
    write(KEYS.orders, window.MockData.seededOrders);
    return window.MockData.seededOrders;
  }

  function setOrders(orders) {
    write(KEYS.orders, orders);
  }

  function createOrder(payload) {
    const cartItems = enrichCartItems();
    if (!cartItems.length) {
      return { ok: false, message: "Cart is empty" };
    }

    const order = {
      id: "ORD-" + Date.now(),
      customerName: payload.customerName,
      phone: payload.phone,
      address: payload.address,
      paymentMethod: payload.paymentMethod,
      status: "Pending",
      createdAt: new Date().toISOString(),
      total: getCartTotal(),
      items: cartItems.map(function (item) {
        return {
          pizzaName: item.pizzaName,
          sizeName: item.sizeName,
          crustName: item.crustName,
          quantity: item.quantity,
          unitPrice: item.unitPrice
        };
      })
    };

    const next = getOrders().slice();
    next.unshift(order);
    setOrders(next);
    clearCart();
    return { ok: true, order: order };
  }

  function updateOrderStatus(orderId, status) {
    const next = getOrders().map(function (item) {
      if (item.id === orderId) {
        return Object.assign({}, item, { status: status });
      }
      return item;
    });
    setOrders(next);
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("th-TH", {
      style: "currency",
      currency: "THB",
      maximumFractionDigits: 0
    }).format(value);
  }

  function formatDate(dateISO) {
    const date = new Date(dateISO);
    return new Intl.DateTimeFormat("th-TH", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(date);
  }

  function getCartCount() {
    return getCart().reduce(function (count, item) {
      return count + item.quantity;
    }, 0);
  }

  window.Store = {
    getProfile: getProfile,
    setProfile: setProfile,
    getPizzas: getPizzas,
    getPizzaById: getPizzaById,
    getSizeById: getSizeById,
    getCrustById: getCrustById,
    getCart: getCart,
    setCart: setCart,
    clearCart: clearCart,
    addToCart: addToCart,
    updateCartQuantity: updateCartQuantity,
    removeCartItem: removeCartItem,
    enrichCartItems: enrichCartItems,
    getCartTotal: getCartTotal,
    getOrders: getOrders,
    setOrders: setOrders,
    createOrder: createOrder,
    updateOrderStatus: updateOrderStatus,
    formatCurrency: formatCurrency,
    formatDate: formatDate,
    getCartCount: getCartCount
  };
})();
