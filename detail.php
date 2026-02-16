<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Detail - Pizza Portfolio UI</title>
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
        <a class="active" href="#">Detail</a>
        <a href="cart.php">Cart <span id="cart-badge" class="chip">0</span></a>
      </nav>
    </div>
  </header>

  <main class="wrap" id="detail-panel">
    <div class="layout-2">
      <section class="panel">
        <img id="detail-image" src="img/m1.jpg" alt="pizza" style="width:100%;max-height:320px;object-fit:cover;border-radius:12px;">
      </section>

      <section class="panel">
        <h1 id="detail-title" style="margin-top:0;">Pizza Name</h1>
        <p id="detail-description" class="muted">Pizza description</p>
        <p>Base Price: <strong id="detail-base-price"></strong></p>

        <label for="size">Size</label>
        <select id="size"></select>

        <label for="crust">Crust</label>
        <select id="crust"></select>

        <label for="quantity">Quantity</label>
        <input id="quantity" type="number" value="1" min="1">

        <p>ราคารวม: <strong id="detail-total-price"></strong></p>

        <div class="row">
          <button id="add-to-cart-btn" class="btn">เพิ่มลงตะกร้า</button>
          <a class="btn secondary" href="customer.php">กลับหน้าเมนู</a>
        </div>
        <p id="detail-message"></p>
      </section>
    </div>
  </main>

  <script src="js/mock-data.js"></script>
  <script src="js/store.js"></script>
  <script src="detail.js"></script>
</body>
</html>
