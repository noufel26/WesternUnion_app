// وظيفة لعرض نموذج التسجيل
function showRegisterForm() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
}

// وظيفة لتسجيل الدخول
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (username === storedUser && password === storedPass) {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "trading_dashboard.html"; // يمكنك إنشاء هذه الصفحة لاحقًا
    } else {
        alert("خطأ في اسم المستخدم أو كلمة المرور!");
    }
}

// وظيفة لإنشاء حساب جديد
function register() {
    const email = document.getElementById("email").value;
    const username = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!email || !username || !password || !confirmPassword) {
        alert("يرجى ملء جميع الحقول.");
        return;
    }

    if (password !== confirmPassword) {
        alert("كلمتا المرور غير متطابقتين.");
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("تم التسجيل بنجاح! يمكنك الآن تسجيل الدخول.");

    document.getElementById("register-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}
