// استرجاع عناصر النموذج
var useremail = document.getElementById("email");
var userpassword = document.getElementById("password");
var useremail2 = document.getElementById("email2");
var userpassword2 = document.getElementById("password2");
var arr = JSON.parse(localStorage.getItem("info")) || []; // استرجاع البيانات من localStorage

function addinfo(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    var userinfo = {
        name: document.forms["myForm"]["name"].value, // استرجاع اسم المستخدم
        email: useremail.value,
        password: userpassword.value,
    };
    arr.push(userinfo);
    localStorage.setItem("info", JSON.stringify(arr)); // تخزين البيانات
    emptyfield(); // مسح الحقول بعد التسجيل
    alert("تم تسجيل الحساب بنجاح!"); // إظهار رسالة تأكيد
}

function emptyfield() {
    useremail.value = "";
    userpassword.value = "";
    document.forms["myForm"]["name"].value = ""; // مسح حقل الاسم
}

function check(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    var check = {
        email: useremail2.value,
        password: userpassword2.value
    };

    // التحقق من البيانات المدخلة
    var user = arr.find(user => user.email === check.email && user.password === check.password);

    if (user) {
        alert("تم تسجيل الدخول بنجاح!");
        saveUserData(user.email, user.name); // تأكد من تمرير اسم المستخدم هنا
        window.location.href = "home.html"; // الانتقال إلى صفحة التعريف
    } else {
        alert("خطأ: البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
}

// إضافة مستمع حدث للنموذج لتسجيل الدخول
document.querySelector('.login form').addEventListener('submit', check); // تأكد من أن لديك هذا الرابط للنموذج الصحيح

// إضافة مستمع حدث للنموذج للتسجيل
document.querySelector('.signup form').addEventListener('submit', addinfo); // تأكد من أن لديك هذا الرابط للنموذج الصحيح

// وظيفة لتخزين البيانات في localStorage بعد تسجيل الدخول
function saveUserData(email, name) {
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
}