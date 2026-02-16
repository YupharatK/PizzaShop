(function () {
  const profileName = document.getElementById("profile-name");
  const profileEmail = document.getElementById("profile-email");
  const profilePhone = document.getElementById("profile-phone");
  const profileAddress = document.getElementById("profile-address");
  const totalOrders = document.getElementById("profile-total-orders");
  const totalSpent = document.getElementById("profile-total-spent");
  const latestOrders = document.getElementById("profile-latest-orders");
  const cartBadge = document.getElementById("cart-badge");

  function renderCartBadge() {
    cartBadge.textContent = String(Store.getCartCount());
  }

  function renderProfile() {
    const profile = Store.getProfile();
    const orders = Store.getOrders();

    profileName.textContent = profile.name;
    profileEmail.textContent = profile.email;
    profilePhone.textContent = profile.phone;
    profileAddress.textContent = profile.address;

    totalOrders.textContent = String(orders.length);
    const spent = orders.reduce(function (sum, order) {
      return sum + Number(order.total || 0);
    }, 0);
    totalSpent.textContent = Store.formatCurrency(spent);

    latestOrders.innerHTML = orders
      .slice(0, 4)
      .map(function (order) {
        return (
          '<tr><td>' + order.id + '</td><td>' + Store.formatDate(order.createdAt) + '</td><td><span class="status ' + order.status + '">' + order.status + '</span></td><td>' + Store.formatCurrency(order.total) + '</td></tr>'
        );
      })
      .join("");
  }

  renderProfile();
  renderCartBadge();
})();
