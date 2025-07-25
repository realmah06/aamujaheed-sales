const headList = document.getElementById("list-area");
const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");

showMenu.onclick = function(){
    headList.style.display = "block";
    showMenu.style.display = "none";
    hideMenu.style.display = "block";
}
hideMenu.onclick = function(){
    headList.style.display = "none";
    showMenu.style.display = "block";
    hideMenu.style.display = "none";
}

 // Function to format the date as DD/MM/YYYY
        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        // Get current date
        const today = new Date();
        const formattedDate = formatDate(today);

        // Insert the date into all spans with class "current-date"
        document.querySelectorAll('.current-date').forEach(span => {
            span.textContent = formattedDate;
        });