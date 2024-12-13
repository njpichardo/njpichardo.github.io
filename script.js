// Check if there's an existing appointment when the page loads
window.onload = function() {
    // Retrieve saved appointment from localStorage
    const savedName = localStorage.getItem("customerName");
    const savedStylist = localStorage.getItem("stylist");
    const savedDate = localStorage.getItem("appointmentDate");
    const savedService = localStorage.getItem("service");

    // If there's saved data, display it
    if (savedName && savedStylist && savedDate && savedService) {
        document.getElementById("savedAppointment").textContent =
            `Your appointment: ${savedName} with ${savedStylist} on ${savedDate} for ${savedService}.`;
    }
}

// Function to save the appointment details to localStorage
function saveAppointment() {
    const customerName = document.getElementById("customerName").value;
    const stylist = document.getElementById("stylist").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const service = document.getElementById("service").value;

    // Store the data in localStorage
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("stylist", stylist);
    localStorage.setItem("appointmentDate", appointmentDate);
    localStorage.setItem("service", service);

    // Display the saved appointment on the page
    document.getElementById("savedAppointment").textContent =
        `Your appointment: ${customerName} with ${stylist} on ${appointmentDate} for ${service}.`;
}
