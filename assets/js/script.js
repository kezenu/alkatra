// memuat navbar
fetch("components/nav.html")
    .then(response => response.text())
    .then(data => document.getElementById("navbar-container").innerHTML = data);


// Mmuat Bagian Tentang
fetch ("components/tentang.html")
    .then(response => response.text())
    .then(data => document.getElementById("tentang").innerHTML = data )

// memuat footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);