(function () {
  const tbody = document.getElementById("cart-body");
  const totalNode = document.getElementById("cart-total");
  const emptyNode = document.getElementById("cart-empty");
  const checkoutForm = document.getElementById("checkout-form");
  const checkoutMessage = document.getElementById("checkout-message");
  const cartBadge = document.getElementById("cart-badge");

  function renderCartBadge() {
    cartBadge.textContent = String(Store.getCartCount());
  }

  function renderRows() {
    const items = Store.enrichCartItems();
    if (!items.length) {
      tbody.innerHTML = "";
      emptyNode.style.display = "block";
      totalNode.textContent = Store.formatCurrency(0);
      return;
    }

    emptyNode.style.display = "none";
    tbody.innerHTML = items
      .map(function (item) {
        return (
          "<tr>" +
          '<td><img src="' + item.image + '" alt="' + item.pizzaName + '" width="64" height="64" style="border-radius:10px;object-fit:cover;"></td>' +
          "<td>" + item.pizzaName + "<br><small>" + item.sizeName + " | " + item.crustName + "</small></td>" +
          "<td>" + Store.formatCurrency(item.unitPrice) + "</td>" +
          '<td><input data-action="qty" data-id="' + item.id + '" type="number" min="1" value="' + item.quantity + '" style="width:80px;margin:0;"></td>' +
          "<td>" + Store.formatCurrency(item.totalPrice) + "</td>" +
          '<td><button class="btn danger" data-action="remove" data-id="' + item.id + '">ลบ</button></td>' +
          "</tr>"
        );
      })
      .join("");

    totalNode.textContent = Store.formatCurrency(Store.getCartTotal());
  }

  tbody.addEventListener("change", function (event) {
    const target = event.target;
    if (target.dataset.action === "qty") {
      const quantity = Math.max(1, Number(target.value) || 1);
      Store.updateCartQuantity(target.dataset.id, quantity);
      renderRows();
      renderCartBadge();
    }
  });

  tbody.addEventListener("click", function (event) {
    const target = event.target;
    if (target.dataset.action === "remove") {
      Store.removeCartItem(target.dataset.id);
      renderRows();
      renderCartBadge();
    }
  });

  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(checkoutForm);
    const result = Store.createOrder({
      customerName: formData.get("customer_name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      paymentMethod: formData.get("payment_method")
    });

    if (!result.ok) {
      checkoutMessage.textContent = "ยังไม่มีสินค้าในตะกร้า";
      checkoutMessage.className = "chip";
      return;
    }

    checkoutMessage.textContent = "สั่งซื้อสำเร็จ (Mock): " + result.order.id;
    checkoutMessage.className = "chip";
    checkoutForm.reset();
    renderRows();
    renderCartBadge();
  });

  renderRows();
  renderCartBadge();
})();
