<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cart - Pizza Shop</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="customer.php">
        <img src="img/logo.png" alt="logo">
        <span>Pizza Shop</span>
      </a>
      <nav class="nav-links">
        <a href="customer.php">Menu</a>
        <a class="active" href="cart.php">Cart <span id="cart-badge" class="chip">0</span></a>
        <a href="account.php">Account</a>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <div class="layout-2">
      <section class="panel">
        <h2 style="margin-top:0;">Shopping Cart</h2>
        <div id="cart-empty" class="empty" style="display:none;">ยังไม่มีสินค้าในตะกร้า<br><a class="btn" href="customer.php" style="margin-top:10px;display:inline-block;">เลือกเมนู</a></div>
        <table class="table">
          <thead>
            <tr>
              <th>สินค้า</th>
              <th>รายละเอียด</th>
              <th>ราคาต่อชิ้น</th>
              <th>จำนวน</th>
              <th>รวม</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody id="cart-body"></tbody>
        </table>
      </section>

      <aside class="panel">
        <h3 style="margin-top:0;">Checkout (Mock)</h3>
        <p>ยอดรวม: <strong id="cart-total"></strong></p>

        <form id="checkout-form">
          <label for="customer-name">ชื่อผู้รับ</label>
          <input id="customer-name" name="customer_name" type="text" required>

          <label for="phone">เบอร์โทร</label>
          <input id="phone" name="phone" type="text" required>

          <label for="address">ที่อยู่</label>
          <textarea id="address" name="address" rows="3" required></textarea>

          <label for="payment-method">การชำระเงิน</label>
          <select id="payment-method" name="payment_method">
            <option value="Cash">Cash</option>
            <option value="PromptPay">PromptPay</option>
            <option value="Card">Card</option>
          </select>

          <button class="btn success" type="submit">ยืนยันการสั่งซื้อ</button>
        </form>
        <p id="checkout-message"></p>
      </aside>
    </div>
  </main>

  <script src="js/mock-data.js"></script>
  <script src="js/store.js"></script>
  <script src="js/cart-page.js"></script>
</body>
</html>
