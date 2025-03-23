function handleSubmit(event) {
    event.preventDefault();

    // الحصول على قيم الحقول
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('form-message');

    // التحقق من البيانات
    if (name === '' || email === '' || password === '') {
        messageElement.textContent = 'يرجى ملء جميع الحقول!';
        messageElement.style.color = '#ff0000';
        return;
    }

    if (password.length < 6) {
        messageElement.textContent = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل!';
        messageElement.style.color = '#ff0000';
        return;
    }

    // محاكاة التسجيل (يمكنك استبدال هذا بإرسال البيانات إلى خادوم)
    messageElement.textContent = `تم تسجيل ${name} بنجاح!`;
    messageElement.style.color = '#008000';

    // إعادة تعيين النموذج
    document.getElementById('register-form').reset();
}