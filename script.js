function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

 function validateform(){
  var name=document.myform.name.value;
  var password=document.myform.password.value;

  if(name==null || name==""){
    alert("Name can not be blank");
    document.getElementById("nm").style.display="block"
    return false;
  }
  else if(password.length<6){
    alert("password must be at least 6 characters long");
    return false;
  }
  else{
    alert("Your form submit successfully....")
  }
 }