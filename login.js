
function validatelogin()
{
    const user=document.getElementById("username").value;
    const pass=document.getElementById("password").value;
    if(user=="" )
    {
        alert('UserName or password cannot be empty');
        document.getElementById("username").focus();
        document.getElementById("usernameError").innerHTML="username cannot be empty";        
        return false;
    }
    else if (user=="sai" && pass=="Sai")
    {
        alert('login successfull');
        document.getElementById("username").focus();
        document.getElementById("username").innerHTML="login success";
        
        
        return true;
    }
    else if (pass=="")
    {
        alert('password cannot be empty');
        document.getElementById("pasword").focus();
        document.getElementById("passwordError").innerHTML="password cannot be empty";
        return false;

    }
}
     