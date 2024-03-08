// Helper function to check if a string is a valid email address
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  // Main code to use the helper function
  const emailAddress = "example@example.com"; // You can change the email address
  if (isValidEmail(emailAddress)) {
    console.log(`${emailAddress} is a valid email address.`);
  } else {
    console.log(`${emailAddress} is not a valid email address.`);
  }
  