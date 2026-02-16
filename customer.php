<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer - Pizza Shop</title>
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
        <a class="active" href="customer.php">Menu</a>
        <a href="cart.php">Cart <span id="cart-badge" class="chip">0</span></a>
        <a href="account.php">Account</a>
        <a href="owner.php">Owner View</a>
        <a href="index.php">Logout</a>
      </nav>
    </div>
  </header>

  <main class="wrap">
    <section class="hero">
      <div>
        <p class="chip" style="display:inline-block;">Customer Experience</p>
        <h1>Choose Your Pizza</h1>
        <p>ตัวอย่างหน้าเมนูสำหรับผู้ใช้งานจริง แสดงรายการพิซซ่าจาก mock data และรองรับ flow เลือกสินค้าไปตะกร้า.</p>
      </div>
      <div>
        <img src="img/home.png" alt="home">
      </div>
    </section>

    <h2 class="section-title">Menu List</h2>
    <div id="menu-grid" class="grid"></div>
  </main>

  <script src="js/mock-data.js"></script>
  <script src="js/store.js"></script>
  <script src="js/customer-page.js"></script>
</body>
</html>
