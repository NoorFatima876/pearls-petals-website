// ===== Booking Form =====
function sendBooking() {
    // Get price and ensure numeric
    let priceValue = document.getElementById("price").value;
    priceValue = parseFloat(priceValue); // Convert to number

    const data = {
        name: document.getElementById("b_name").value,
        email: document.getElementById("b_email").value,
        phone: document.getElementById("b_phone").value,
        address: document.getElementById("b_address").value,
        product: document.getElementById("product").value,
        price: priceValue
    };

    console.log("Booking Data:", data); // Debug

    fetch("http://localhost:5000/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resData => alert(resData.message))
    .catch(err => alert("Error: " + err));
}

// ===== Contact Form =====
function sendContact() {
    const data = {
        name: document.getElementById("c_name").value,
        email: document.getElementById("c_email").value,
        message: document.getElementById("c_message").value
    };

    console.log("Contact Data:", data);

    fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => alert("Error: " + err));
}

// ===== Complaint =====
function sendComplaint() {
    const data = {
        name: document.getElementById("cp_name").value,
        issue: document.getElementById("cp_issue").value
    };

    console.log("Complaint Data:", data);

    fetch("http://localhost:5000/complaint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => alert("Error: " + err));
}

// ===== Feedback =====
function sendFeedback() {
    const data = { text: document.getElementById("fb_text").value };

    console.log("Feedback Data:", data);

    fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => alert("Error: " + err));
}

// ===== Return Request =====
function sendReturn() {
    const data = {
        order: document.getElementById("rt_order").value,
        reason: document.getElementById("rt_reason").value
    };

    console.log("Return Data:", data);

    fetch("http://localhost:5000/return", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => alert("Error: " + err));
}

// ===== Refund =====
function sendRefund() {
    const data = {
        order: document.getElementById("rf_order").value,
        reason: document.getElementById("rf_reason").value
    };

    console.log("Refund Data:", data);

    fetch("http://localhost:5000/refund", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => alert("Error: " + err));
}

// ===== Popup functions =====
function openPopup(id){
    document.getElementById(id).style.display = "block";
}

function closePopup(){
    document.querySelectorAll(".popup").forEach(p => p.style.display = "none");
}
