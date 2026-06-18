function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || password === "") {
        document.getElementById("error").innerText = "username and password cannot be empty!";
        return false;
    }

    if (password==="") {
        document.getElementById("error").innerText = "enter password";
        return false;
    }

    document.getElementById("error").innerText = "";
    alert("Form submitted successfully!");
    return true;
}