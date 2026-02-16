<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Account - Pizza Portfolio UI</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="customer.php">
        <img src="img/logo.png" alt="logo">
        <span>Pizza Portfolio UI</span>
      </a>
      <nav class="nav-links">
        <a href="customer.php">Menu</a>
        <a href="cart.php">Cart <span id="cart-badge" class="chip">0</span></a>
        <a class="active" href="account.php">Account</a>
        <a href="owner.php">Owner View</a>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <div class="layout-2">
      <section class="panel">
        <h2 style="margin-top:0;">Profile (Mock)</h2>
        <p><strong>Name:</strong> <span id="profile-name"></span></p>
        <p><strong>Email:</strong> <span id="profile-email"></span></p>
        <p><strong>Phone:</strong> <span id="profile-phone"></span></p>
        <p><strong>Address:</strong> <span id="profile-address"></span></p>
      </section>

      <aside class="panel">
        <h3 style="margin-top:0;">Summary</h3>
        <p class="chip">Orders: <span id="profile-total-orders">0</span></p>
        <p class="chip">Total Spent: <span id="profile-total-spent">฿0</span></p>
      </aside>
    </div>

    <section class="panel" style="margin-top:18px;">
      <h3 style="margin-top:0;">Recent Orders</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="profile-latest-orders"></tbody>
      </table>
    </section>
  </main>

  <script src="js/mock-data.js"></script>
  <script src="js/store.js"></script>
  <script src="js/account-page.js"></script>
</body>
</html>
