import toast from "react-hot-toast";

// validate login page username
export async function usernameValidate(values){
    const error = usernameVerify({} , values);

    return error;
}

export async function passwordValidate(values){
    const error = passwordVerify({},values);

    return error;
}

// 
export async function resetPasswordValidation(values){
    const error = passwordVerify({},values);
    if(values.password !== values.confirm_pwd){
        error.exist  = toast.error("Password not Match ")
    }
    return error;
}













// validate password 
function passwordVerify(error = {}, values){
     
    const specialChars = /^[a-zA-Z]*$/;

    if(!values.password){
        error.password = toast.error("Password Required ");
    }else if(values.password.includes(" ")){
        error.password = toast.error("Wrong Password ");
    }else if(values.password.length < 4){
        error.password = toast.error("Password Must be more than 4 characters long");
    }else if(specialChars.test(values.password)){
        error.password = toast.error("Password must have special character ");
    }

    return error;
}

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("user Name Required ");
    }else if(values.username.includes(" ")){
        error.username = toast.error("Invalid UserName ");
    }
    return error;
}
