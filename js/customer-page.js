(function () {
  const menuGrid = document.getElementById("menu-grid");
  const cartBadge = document.getElementById("cart-badge");

  function renderCartBadge() {
    cartBadge.textContent = String(Store.getCartCount());
  }

  function renderMenu() {
    const pizzas = Store.getPizzas();
    menuGrid.innerHTML = pizzas
      .map(function (pizza) {
        const tags = pizza.tags
          .map(function (tag) {
            return '<span class="chip">' + tag + "</span>";
          })
          .join(" ");

        return (
          '<article class="card">' +
          '<img class="pizza-thumb" src="' + pizza.image + '" alt="' + pizza.name + '">' +
          '<div class="card-body">' +
          '<h3>' + pizza.name + "</h3>" +
          '<p>' + pizza.description + "</p>" +
          '<div class="row" style="justify-content:space-between;">' +
          '<span class="price">เริ่มต้น ' + Store.formatCurrency(pizza.basePrice) + "</span>" +
          '<a class="btn" href="detail.php?id=' + pizza.id + '">ดูรายละเอียด</a>' +
          "</div>" +
          '<div class="row" style="margin-top:10px;">' + tags + "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  renderCartBadge();
  renderMenu();
})();
