<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Owner Dashboard - Pizza Portfolio UI</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <a class="brand" href="owner.php">
        <img src="img/logo.png" alt="logo">
        <span>Pizza Portfolio UI</span>
      </a>
      <nav class="nav-links">
        <a href="customer.php">Customer View</a>
        <a class="active" href="owner.php">Owner Dashboard</a>
        <a href="index.php">Logout</a>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <section class="hero">
      <div>
        <p class="chip" style="display:inline-block;">Owner Experience</p>
        <h1>Order Management Dashboard</h1>
        <p>หน้านี้ใช้ mock order จาก localStorage เพื่อโชว์การจัดการสถานะออเดอร์แบบ frontend อย่างเดียว.</p>
      </div>
      <div class="panel" style="margin:0;">
        <p class="chip">Orders: <span id="owner-order-count">0</span></p>
        <p class="chip">Revenue: <span id="owner-revenue">฿0</span></p>
      </div>
    </section>

    <section class="panel" style="margin-top:18px;">
      <h3 style="margin-top:0;">Orders</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Items</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody id="orders-body"></tbody>
      </table>
    </section>
  </main>

  <script src="js/mock-data.js"></script>
  <script src="js/store.js"></script>
  <script src="js/owner-page.js"></script>
</body>
</html>
