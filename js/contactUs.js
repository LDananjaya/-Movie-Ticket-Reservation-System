function validationForm()
{
    var isValid = true;
    var uname = document.getElementById("txt_uname");
    var phn = document.getElementById("txt_phnNo");
    var email = document.getElementById("txt_email");
    var msg = document.getElementById("txt_msg");

    if(uname.value.length == 0){   
        alert("All fields are mandatory");    
          //document.getElementById('head').innerText = "* All fields are mandatory *";
           //this segment displays the validation rule for all fields        
            uname.focus();        
             return false;   
    }
        if(textNumeric(phn, "* Please enter a valid phone number *")){                   
    
            if(emailValidation(email, "* Please enter a valid email address *")){
            
            if(isEmpty(msg,"this field is mandatory"));
                {
                    return true;
                }
            }
        }
    
return false;
}


function isEmpty(value,message)
{   console.log("gg");
    if(value.length == 0)
    {
        alert(message);
        return true;
        
    }
    return false;
}
function textNumeric(inputtext, alertMsg)
{
        var numExp = /^[0-9]+$/;   
          if(inputtext.value.match(numExp)){ 
                      return true; 
          }  
          else{
            document.getElementById('p1').innerText = alertMsg; 
              
                   inputtext.focus();  
                          return false;    
                         }
                        }                         
 
 
            





    function emailValidation(inputtext, alertMsg){
             var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;    
              if(inputtext.value.match(emailExp))
              {         return true;     }
              else{
                  document.getElementById('p2').innerText = alertMsg;
               //this segment displays the validation rule for email
               inputtext.focus(); 
                return false;    
             }
 
 

            }