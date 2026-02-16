(function () {
  const form = document.getElementById("demo-login-form");
  const emailInput = document.getElementById("email");
  const roleSelect = document.getElementById("role");

  function syncProfile() {
    const base = Store.getProfile();
    const email = emailInput.value.trim() || base.email;
    const name = email.split("@")[0] || base.name;
    const role = roleSelect.value;

    Store.setProfile({
      id: 1,
      name: name,
      email: email,
      phone: base.phone,
      address: base.address,
      role: role
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    syncProfile();
    if (roleSelect.value === "owner") {
      window.location.href = "owner.php";
      return;
    }
    window.location.href = "customer.php";
  });
})();
