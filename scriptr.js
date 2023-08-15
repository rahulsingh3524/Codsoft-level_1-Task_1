function validateForm() {
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const product = document.getElementById("product").value;
    const complaint = document.getElementById("complaint").value;

    // Reset error messages
    document.getElementById("fullname-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("product-error").textContent = "";
    document.getElementById("complaint-error").textContent = "";

    let isValid = true;

    if (fullname.trim() === "") {
        document.getElementById("fullname-error").textContent = "Full Name is required";
        isValid = false;
    }

    if (email.trim() === "") {
        document.getElementById("email-error").textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("email-error").textContent = "Invalid email format";
        isValid = false;
    }

    if (product.trim() === "") {
        document.getElementById("product-error").textContent = "Product Name is required";
        isValid = false;
    }
    
    if (complaint.trim() === "") {
        document.getElementById("complaint-error").textContent = "Complaint is required";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

