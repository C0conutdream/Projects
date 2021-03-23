$(document).ready(function(){
    $('.header').height($(window).height());
  })

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  function change()
{
    var elem = document.getElementById("myDIV");
     elem.value = "Submitted";
}

//ayushs code

const sendEmail = (name,message,email) => {

    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("PhoneNumber").value
    var message = document.getElementById("message").value

    var request = {
        "name": name,
        "message": message,
        "email": email,
        "phone": phone
    };
    
    fetch('https://kcjw35ot71.execute-api.ap-southeast-2.amazonaws.com/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
        body: JSON.stringify(request),
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('myDIV').disabled = true;
        console.log('Success');
      })
      .catch((error) => {
        // The code here will run if something goes wrong sending the email.
        // I have just added an alert to pop up.
        alert("Contact details failed to send. Please try again.")
      });
    }