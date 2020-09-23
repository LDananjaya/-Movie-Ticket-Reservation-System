function validation() {

  console.log("sdfsfsdfsf");
  var FirstName = document.getElementById('txt_fname');
  var LastName = document.getElementById('txt_lname');
  var Email = document.getElementById('e-mail');
  var ContactNumber = document.getElementById('txt_Uname');
  var password = document.getElementById('txt_pw');
  var ReEnterPassword = document.getElementById('txt_pw1');

  var valid = true;
  valid = Empty(FirstName.value.length, "First name must required");
  if (valid == true) {
      valid = Empty(LastName.value, "name must required");
      if (valid == true) {
          valid = Empty(Email.value, "Email must required");
          if (valid == true) {
              valid = Empty(ContactNumber.value, "please enter contact number");
              if (valid == true){
                  valid = Empty(password.value, "please enter Password");
                  if (valid == true){
                      valid = Empty( ReEnterPassword.value, "please Re-enter Password");
                      if (valid == true) {
                        alert("successfully");
                      }
                  }      
              }
          }
      }
  }

}

function Empty(value, message) {
  if(value ==0)
  {
      alert(message);
      return false;
  }
  return true;
}





