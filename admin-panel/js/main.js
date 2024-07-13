document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('printInvoice').addEventListener('click', function() {
        // Save the original content
        var originalContent = document.body.innerHTML;

        // Get the invoice content
        var invoiceContent = document.getElementById('invoice').innerHTML;

        // Set the body to the invoice content
        document.body.innerHTML = invoiceContent;

        // Open the print dialog
        window.print();

        // Restore the original content
        document.body.innerHTML = originalContent;

        // Reattach the event listener to the button
        document.getElementById('printInvoice').addEventListener('click', arguments.callee);
    });
});



// Active Status On/Off
function toggleStatus(button) {
    if (button.classList.contains('btn-success')) {
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
        button.textContent = 'Off';
    } else {
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        button.textContent = 'On';
    }
}


// Text Editor
CKEDITOR.replace('editor', {
    height: 300,
});



