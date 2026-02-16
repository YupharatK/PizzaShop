# Pizza Portfolio UI (Frontend-only Mock)

โปรเจกนี้คือเวอร์ชันสำหรับโชว์ในพอร์ตโฟลิโอ โดยแปลงจากระบบ PHP + MySQL เดิมให้เป็น **UI/Frontend ล้วน ๆ**

- ไม่เชื่อมฐานข้อมูล
- ไม่เรียก backend API
- ใช้ `mock data` + `localStorage` เพื่อจำลอง flow การใช้งานจริง

## Demo Flow

1. หน้าเริ่มต้น `index.php` (Demo Login)
2. หน้าเมนูลูกค้า `customer.php`
3. หน้ารายละเอียดเมนู `detail.php?id=1`
4. หน้าตะกร้าและ checkout mock `cart.php`
5. หน้าโปรไฟล์ `account.php`
6. หน้าเจ้าของร้านดู/เปลี่ยนสถานะออเดอร์ `owner.php`

## Tech Stack

- HTML/CSS/JavaScript
- PHP ใช้เป็นไฟล์หน้าเว็บเท่านั้น (ไม่มี business logic backend)
- Browser `localStorage` สำหรับเก็บ cart/orders/profile

## โครงสร้างสำคัญ

- `css/app.css` สไตล์หลักของทุกหน้า
- `js/mock-data.js` ข้อมูลจำลอง (pizza, size, crust, seeded orders)
- `js/store.js` ตัวจัดการ state (cart, orders, profile)
- `js/index-page.js` logic หน้า demo login
- `js/customer-page.js` render เมนูจาก mock data
- `detail.js` logic หน้า detail และ add to cart
- `js/cart-page.js` logic ตะกร้า + สร้างออเดอร์จำลอง
- `js/account-page.js` logic หน้าโปรไฟล์
- `js/owner-page.js` logic หน้า dashboard owner

## วิธีรัน

### วิธีที่ 1: ใช้ PHP built-in server

```bash
php -S localhost:8000
```

แล้วเปิด:

- `http://localhost:8000/index.php`

### วิธีที่ 2: ใช้ Live Server/Static Server

รันจากโฟลเดอร์โปรเจกแล้วเปิด `index.php` ผ่านเซิร์ฟเวอร์ไฟล์ปกติ

## หมายเหตุ

- ไฟล์ backend เดิมบางไฟล์ (`login.php`, `submit_order.php`, `update_cart.php`, `remove_from_cart.php`, `add_to_cart.php`) ถูกปรับให้เป็น redirect/stub เพื่อให้โปรเจกนี้เป็น frontend-only อย่างชัดเจน
- หากต้องการเวอร์ชัน production ควรแยก backend API จริง + ระบบ auth + database + validation เพิ่มเติม
