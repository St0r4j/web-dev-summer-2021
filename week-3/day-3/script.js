console.log("Hello");

// DECLARATION
function closeModal() {
    var modal = document.getElementById("modal");

    modal.style.visibility = "hidden";
}

// INVOCATION

// closeModal();

// OM THE html SIDE, FOR ONCLICK, I AM ASSIGNING WHAT TO
// INVOKE WHEN CLICKED (NOT TO INVOKE IMMEDIATELY)

function openModal() {
    var modal = document.getElementById("modal");

    modal.style.visibility = "visible";
}