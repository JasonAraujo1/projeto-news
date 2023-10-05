const myForm = document.getElementById('myForm');

        // Add a submit event listener to the form
        myForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get the email input value
            const emailInput = document.getElementById('email').value;

            // Check if the email is empty or not
            if (emailInput.trim() === '') {
                alert('Adicione seu E-mail!');
            } else {
                alert('E-mail cadastrado com sucesso!');
                // You can also submit the form to a server here if needed.
                // Example: myForm.submit();
            }
        });