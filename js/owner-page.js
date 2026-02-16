(function () {
  const ordersBody = document.getElementById("orders-body");
  const orderCount = document.getElementById("owner-order-count");
  const revenueCount = document.getElementById("owner-revenue");

  function renderStats(orders) {
    orderCount.textContent = String(orders.length);
    const revenue = orders.reduce(function (sum, order) {
      return sum + Number(order.total || 0);
    }, 0);
    revenueCount.textContent = Store.formatCurrency(revenue);
  }

  function renderOrders() {
    const orders = Store.getOrders();
    renderStats(orders);

    if (!orders.length) {
      ordersBody.innerHTML = '<tr><td colspan="7"><div class="empty">ยังไม่มีรายการออเดอร์</div></td></tr>';
      return;
    }

    ordersBody.innerHTML = orders
      .map(function (order) {
        return (
          '<tr>' +
          '<td>' + order.id + '</td>' +
          '<td>' + order.customerName + '</td>' +
          '<td>' + Store.formatDate(order.createdAt) + '</td>' +
          '<td>' + Store.formatCurrency(order.total) + '</td>' +
          '<td><span class="status ' + order.status + '">' + order.status + '</span></td>' +
          '<td>' + order.items.length + ' รายการ</td>' +
          '<td>' +
          '<select data-order-id="' + order.id + '">' +
          '<option value="Pending"' + (order.status === 'Pending' ? ' selected' : '') + '>Pending</option>' +
          '<option value="Processing"' + (order.status === 'Processing' ? ' selected' : '') + '>Processing</option>' +
          '<option value="Delivered"' + (order.status === 'Delivered' ? ' selected' : '') + '>Delivered</option>' +
          '<option value="Cancelled"' + (order.status === 'Cancelled' ? ' selected' : '') + '>Cancelled</option>' +
          '</select>' +
          '</td>' +
          '</tr>'
        );
      })
      .join("");
  }

  ordersBody.addEventListener("change", function (event) {
    const target = event.target;
    if (target.tagName === "SELECT") {
      Store.updateOrderStatus(target.dataset.orderId, target.value);
      renderOrders();
    }
  });

  renderOrders();
})();
