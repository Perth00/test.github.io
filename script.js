function checkLoyaltyPoints() {
    var countryCode = document.getElementById('countryCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Add additional phone numbers for validation
    var fullPhoneNumber = countryCode + phoneNumber;
    
    if (fullPhoneNumber === "+60173527250" || fullPhoneNumber === "+60123456789") {
        localStorage.setItem('phoneNumber', fullPhoneNumber);
        window.location.href = "page2.html";
    } else {
        alert("Invalid phone number. Please enter a valid loyalty points number.");
    }
}
  function populateDateDropdowns() {
    var dayDropdown = document.getElementById('day');
    var monthDropdown = document.getElementById('month');
    var yearDropdown = document.getElementById('year');
  
    for (var i = 1; i <= 31; i++) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i;
      dayDropdown.add(option);
    }
  
    var months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
  
    for (var i = 0; i < months.length; i++) {
      var option = document.createElement('option');
      option.value = i + 1;
      option.text = months[i];
      monthDropdown.add(option);
    }
  
    var currentYear = new Date().getFullYear();
    for (var i = currentYear; i >= currentYear - 100; i--) {
      var option = document.createElement('option');
      option.value = i;
      option.text = i;
      yearDropdown.add(option);
    }
  }
  
  function submitData() {
    var name = document.getElementById('name').value;
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var email = document.getElementById('email').value;
  
    if (name.trim() === "") {
      displayError("nameError", "Please enter a valid name.");
      return;
    } else {
      hideError("nameError");
    }
  
    if (day === "" || month === "" || year === "") {
      displayError("dateError", "Please select a valid date.");
      return;
    } else {
      hideError("dateError");
    }
  
    var currentDate = new Date();
    var selectedDate = new Date(`${year}-${month}-${day}`);
    if (selectedDate >= currentDate) {
      displayError("dateError", "Please enter a valid birthday.");
      return;
    } else {
      hideError("dateError");
    }
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      displayError("emailError", "Please enter a valid email address.");
      return;
    } else {
      hideError("emailError");
    }
  
    localStorage.setItem('name', name);
    localStorage.setItem('birthday', `${year}-${month}-${day}`);
    localStorage.setItem('email', email);
  
    window.location.href = "page3.html";
  }

  function displayError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
  }
  
  function hideError(elementId) {
    var errorElement = document.getElementById(elementId);
    errorElement.innerHTML = "";
    errorElement.style.display = "none";
  }
  populateDateDropdowns();
  