function compute()
{
    p = document.getElementById("principal").value;
    a = document.getElementById("Amount").value;
    b = document.getElementById("Years").value;
    c = "You will receive "
    document.getElementById("result").innerHTML =c + (a * p * b / 100);
    
}
