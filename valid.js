function validateName() {
  var name = document.getElementById("name").value;
  if (name.trim() === "") {
    document.getElementById("errName").innerHTML = "Please enter your name";
    return false;
  } else if (name.length < 3 || /^[A-Za-z ]+$/.test(name) === false) {
    document.getElementById("errName").innerHTML = "Please enter a valid name";
    return false;
  } else if (/\d/.test(name)) {
    document.getElementById("errName").innerHTML = "Name cannot contain numbers";
    return false;
  } else {
    document.getElementById("errName").innerHTML = "";
    return true;
  }
}



function validateEmail() {
//   var email = document.getElementById("email").value;
//   if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)==false ) {
//     document.getElementById("errEmail").innerHTML ="Please Enter valid Email";
//     return false;
//   }
//   else
//     document.getElementById("errEmail").innerHTML = "";
//     return true;
// }  
var email=document.getElementById('email').value;
if(email.length==0){
  errEmail.innerHTML='Email is required';
  return false;
}
if(!email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
  errEmail.innerHTML='email invalid'
  return false;
}
errEmail.innerHTML=" ";

return true;
}


function validateMsg() {
  var message = document.getElementById("message").value;
  if (message.length < 15) { 
    document.getElementById("errMsg").innerHTML = "Please Enter More Than 15 Characters";
    return false;
  } else if(message>=15|| validateName() || validateEmail() || validateMsg()){
    submitError.innerHTML=" "
    errMsg.innerHTML = "";
    return true;
  }
  // else{
  //   errMsg.innerHTML = "";
  //   return true;
  // }
}


// function validate() {
//   if( validateName() && validateEmail() && validateMsg()){
//     return true;
//   }else{
//     return false;
//   }
// }

// $("#submit-form").submit((e)=>{
//   e.preventDefault()
//   if(validate()){
//   $.ajax({
//       url:"https://script.google.com/macros/s/AKfycby1LkzungeS4zQHBFzvz4TVBIt4ddpwpyPa3955h1Q_IYN9Ma8mDUqgl_3a8eNOqiMY/exec",
//       data:$("#submit-form").serialize(),
//       method:"post",
//       success:function (response){
//           alert("Form submitted successfully !!")
 //  window.location.reload()
//       },
//       error:function (err){
//           alert("Something went Wrong")
//       }
//    })
//   }
// })

function submitForm(){
  if((!validateName()) && !validateEmail() && !validateMsg()){
    submitError.innerHTML='please fill all fields'
    return false;
   }
  else{

    submitError.innerHTML=" "
    // alert('form submit successfully')
    return true;
  }
}