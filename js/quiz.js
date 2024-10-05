  // دالة لإخفاء جميع الإطارات
  function hideAllIframes() {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        iframe.style.display = 'none';
    });
}

// دالة لإظهار الإطار بناءً على معرفه
function showIframe(id) {
    hideAllIframes();  // إخفاء جميع الإطارات أولاً
    document.getElementById(id).style.display = 'block';  // إظهار الإطار المحدد
}

// إضافة مستمعي الأحداث للنقر على الروابط
document.getElementById('c11').addEventListener('click', function() {
    showIframe('1');  // يظهر iframe الأول
});
document.getElementById('c22').addEventListener('click', function() {
    showIframe('2');  // يظهر iframe الثاني
});
document.getElementById('c44').addEventListener('click', function() {
    showIframe('3');  // يظهر iframe الثالث
});
document.getElementById('c55').addEventListener('click', function() {
    showIframe('4');  // يظهر iframe الرابع
});