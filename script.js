document.getElementById('click').onclick = function()
{
    let fName = document.getElementById('password').value;
    let passwordNeeds = ["!", "@","#","$","%","^","&","*",]; 
    let passwordMinimunSize;

    for(let i = 0; i < passwordNeeds.length; i++){
        if(!fName.includes(passwordNeeds[i])){
            // Password does not meet requirement
        }else if(!/[A-Z]/.test(fName) || !/[a-z]/.test(fName)){
            // Password does not have a mix of capitals and lower case
        }else if (passwordNeeds.length === passwordMinimunSize){
            // Password too short
        }else{
            // Password is good
        }
    }
}