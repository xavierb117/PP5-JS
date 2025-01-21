document.getElementById('click').onclick = function()
{
    let fName = document.getElementById('password').value;
    document.getElementById('output').innerHTML = 
    "Hello, " + fName + "!";
}