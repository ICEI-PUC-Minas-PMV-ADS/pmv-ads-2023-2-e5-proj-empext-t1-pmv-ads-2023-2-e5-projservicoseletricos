function login() {
    // Get the username and password from the user.
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Send the username and password to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/login");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        username: username,
        password: password
    }));
    // Handle the response from the server.
    xhr.onload = function() {
        if (xhr.status === 200) {
            // The login was successful.
            // Redirect the user to the home page.
            window.location.href = "/home";
        } else {
            // The login failed.
            // Display an error message to the user.
            alert("Login failed.");
        }
    };
}
