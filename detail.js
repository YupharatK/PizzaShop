(function () {
  const params = new URLSearchParams(window.location.search);
  const pizzaId = Number(params.get("id"));
  const pizza = Store.getPizzaById(pizzaId);

  const title = document.getElementById("detail-title");
  const image = document.getElementById("detail-image");
  const description = document.getElementById("detail-description");
  const basePrice = document.getElementById("detail-base-price");
  const sizeSelect = document.getElementById("size");
  const crustSelect = document.getElementById("crust");
  const quantityInput = document.getElementById("quantity");
  const totalPrice = document.getElementById("detail-total-price");
  const addBtn = document.getElementById("add-to-cart-btn");
  const cartBadge = document.getElementById("cart-badge");
  const message = document.getElementById("detail-message");

  function renderCartBadge() {
    cartBadge.textContent = String(Store.getCartCount());
  }

  function renderSelectOptions(select, options) {
    select.innerHTML = options
      .map(function (option) {
        return (
          '<option value="' + option.id + '">' + option.name + ' (' +
          (option.price ? "+" + Store.formatCurrency(option.price) : "ไม่เพิ่มราคา") +
          ")</option>"
        );
      })
      .join("");
  }

  function updateTotal() {
    const selectedSize = Store.getSizeById(sizeSelect.value);
    const selectedCrust = Store.getCrustById(crustSelect.value);
    const qty = Math.max(1, Number(quantityInput.value) || 1);
    const price = (pizza.basePrice + selectedSize.price + selectedCrust.price) * qty;
    totalPrice.textContent = Store.formatCurrency(price);
  }

  function renderNotFound() {
    document.getElementById("detail-panel").innerHTML =
      '<div class="empty">ไม่พบเมนูที่เลือก <a class="btn" href="customer.php">กลับไปหน้าเมนู</a></div>';
  }

  if (!pizza) {
    renderNotFound();
    renderCartBadge();
    return;
  }

  title.textContent = pizza.name;
  image.src = pizza.image;
  image.alt = pizza.name;
  description.textContent = pizza.description;
  basePrice.textContent = Store.formatCurrency(pizza.basePrice);

  renderSelectOptions(sizeSelect, window.MockData.sizes);
  renderSelectOptions(crustSelect, window.MockData.crusts);

  sizeSelect.addEventListener("change", updateTotal);
  crustSelect.addEventListener("change", updateTotal);
  quantityInput.addEventListener("input", updateTotal);

  addBtn.addEventListener("click", function () {
    const result = Store.addToCart({
      pizzaId: pizza.id,
      sizeId: sizeSelect.value,
      crustId: crustSelect.value,
      quantity: Math.max(1, Number(quantityInput.value) || 1)
    });

    if (result.ok) {
      message.textContent = "เพิ่มสินค้าในตะกร้าแล้ว";
      message.className = "chip";
      renderCartBadge();
      return;
    }

    message.textContent = "เพิ่มสินค้าไม่สำเร็จ";
    message.className = "chip";
  });

  updateTotal();
  renderCartBadge();
})();
