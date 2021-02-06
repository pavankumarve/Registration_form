'use strict';
window.addEventListener('DOMContentLoaded', () => {  //when html DOM content loaded DOMcontentloaded is triggred  
  const form = document.getElementById('form_new');
  form.addEventListener('submit', handleSubmit)
});

function handleSubmit(e) {
  e.preventDefault();

  //!false value
  // firstName
  let firstName = document.getElementById('firstName').value;
  let fir = /^[A-Za-z\\s]+$/;    // use pattern =/^[A-Za-z\\s]+$/ in html for regular expression
  //console.log(firstName);
  if (!firstName) {    //this condition not required use required in html
    alert('Enter First Name');
    return false;
  } else if (firstName.length < 4) {
    alert('Enter four characters for first Name');
    firstName.focus();
    return false;
  } else if (fir.test(firstName) === false) {
    alert('Enter Valid First Name');
    return false;
  }

  //!false value
  // lastName
  let lastName = document.getElementById('LastName').value;
  let fil = /^[A-Za-z\\s]+$/;
  if (!lastName) {
    alert('Enter Last Name');
    return false;
  } else if (fil.test(lastName) === false) {
    alert('Enter Valid Last Name');
    return false;
  }


  //!false value
  // date of birth
  let dob = document.getElementById('DOB').value;
  if (!dob) {
    alert('Select Date Of birth');
    return false;
  }

  //!false value
  // email id 
  let email = document.getElementById('email').value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!email) {
    alert('Enter Email Id');
    return false;
  } else if (reg.test(email) === false) {
    alert('Invalid Email Address');
    return (false);
  }

  //!false value
  // Password
  let password = document.getElementById('Password').value;
  var pss = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!password) {
    alert('Enter Password');
    return false;
  } else if (password.length < 6) {
    alert('Use six characters for Password');
    return false;
  } else if (pss.test(password) === false) {
    alert('Enter Strong Password');
    return false;
  }

  //!false value
  // confirm password
  let conPassword = document.getElementById('con_Password').value;
  if (!conPassword) {
    alert('Enter Confirm Password');
    return false;
  } else if (conPassword.length < 6) {
    alert('Use six characters for Confirm Password');
    return false;
  } else if (password != conPassword) {
    alert('Password Not Matched');
    return false;
  }

  //!false value
  // mobile Number
  let mobileNumber = document.getElementById('Mobile Number').value;
  let num = /[0-9]$/;
  if (!mobileNumber) {
    alert('Enter Mobile Number');
    return false;
  } else if (mobileNumber.length < 10) {
    alert('Enter Valid Phone Number');
    return false;
  } else if (num.test(mobileNumber) === false) {
    alert('Enter Valid Phone Number');
    return false;
  }

  //!false value
  // Gender
  let gender = document.forms['regForm']['Gender'].value;
  // console.log(Gender);
  if (!gender) {
    alert('Select Gender');
    return false;
  }

  //!false value
  //  Skills
  let skills = document.getElementById('Skills').value;
  if (!skills) {
    alert('Enter Skills');
    return false;
  } else if (skills.length < 10) {
    alert('Enter some more skills');
    return false;
  }

  //!false value
  //  Designation
  let designation = document.getElementById('Designation').value;
  if (!designation) {
    alert('Enter Designation');
    return false;
  } else if (designation.length < 4) {
    alert('Enter valid Designation');
    return false;
  }

  // Country
  //!false value
  let country = document.getElementById('Country').value;
  if (!country) {
    alert('Enter Country');
    return false;
  } else if (country.length < 4) {
    alert('Enter valid country name');
    return false;
  }

  // Address
  let address = document.getElementById('Address').value;
  if (!address) {
    alert('Enter Address');
    return false;
  }
  //!false value
  // window.location.reload();
  console.log('First Name: ' + firstName);
  console.log('Last Name: ' + lastName);
  console.log('DOB: ' + dob);
  console.log('Email Id: ' + email);
  console.log('Password: ' + password);
  console.log('Confirm Password: ' + conPassword);
  console.log('Mobile Number: ' + mobileNumber);
  console.log('Gender: ' + gender);
  console.log('Skills: ' + skills);
  console.log('Designation: ' + designation);
  console.log('Country: ' + country);
  console.log('Address: ' + address);
  alert('User Created..');
  return false;
}
// }
//  function subbtn()
// {    
//   /*
// let firstName= document.getElementById('firstName').value;
//  if(firstName =='')
//  {
// alert('Enter first Name');
// return false;
// }
// else if(firstName.length < 4)
// {
//   alert('Enter four characters for first Name');
//   firstName.focus();
//   return false;
// }*/
// // let firstName=document.getElementById('firstName').value;
// // if(firstName==null || firstName==''){

// //   document.getElementById('errmessage').style.visibility='visible';
// //   document.getElementById('errmessage').innerHTML='Enter First Name';
// //   return false;

// // }
// // else{
// //   document.getElementById('errmessage').style.visibility='hidden';

// //   }


