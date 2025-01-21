document.getElementById('click').onclick = function()
{
    // Get the value from the text box
    let fName = document.getElementById('name').value;
    document.getElementById('output').innerHTML = 
    "Hello, " + fName + "!";
}