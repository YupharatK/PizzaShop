<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pizza Shop</title>
  <link rel="stylesheet" href="css/app.css">
</head>
<body>
  <main class="wrap" style="padding-top:42px;">
    <section class="hero">
      <div>
        <p class="chip" style="display:inline-block;">Frontend-only Demo</p>
        <h1>Pizza Shop <br></h1>
        <p>โปรเจกนี้เป็นเวอร์ชันโชว์หน้าตาและ flow การใช้งานหน้าเว็บโดยใช้ Mock Data และ Local Storage ไม่มีการเชื่อมต่อฐานข้อมูลหรือ backend endpoint.</p>
        <div class="row" style="margin-top:14px;">
          <a class="btn secondary" href="customer.php">ดูหน้า Customer</a>
          <a class="btn secondary" href="owner.php">ดูหน้า Owner</a>
        </div>
      </div>
      <div>
        <img src="img/home.png" alt="Pizza hero">
      </div>
    </section>

    <section class="panel" style="margin-top:18px;max-width:500px;">
      <h2 style="margin-top:0;">Demo Login (Mock)</h2>
      <form id="demo-login-form">
        <label for="email">Email</label>
        <input id="email" type="email" value="portfolio@pizza-demo.dev" required>

        <label for="role">Role</label>
        <select id="role">
          <option value="customer">Customer</option>
          <option value="owner">Owner</option>
        </select>

        <button class="btn" type="submit">เข้าสู่ระบบ (จำลอง)</button>
      </form>
      <p class="muted" style="margin-bottom:0;">การกดปุ่มจะเก็บโปรไฟล์ตัวอย่างลง Local Storage แล้วพาไปหน้าที่เลือก</p>
    </section>

    <p class="footer-note">Pizza Portfolio UI Mock Project</p>
  </main>

  <script src="js/mock-data.js"></script>
  <script src="js/store.js"></script>
  <script src="js/index-page.js"></script>
</body>
</html>
