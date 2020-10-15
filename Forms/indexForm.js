// console.log("FORMS");

//two ways to access the form
// const loginForm = document.forms.myForm;

const loginForm = document.getElementById("myForm")

const message = document.getElementById('msg')


loginForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    //getting refresh after submit is the default behaviour of the form
    //we have to disable it uisng //event.preventDefault();
    // console.log(event);
    // console.log(event.target.name.value);
    // console.log(event.target.email.value);

    //chechking validation
    if(loginForm.name.value ==""){
        message.innerHTML = "Name should not empty"
    }

})