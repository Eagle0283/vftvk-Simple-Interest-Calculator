function compute()
{
    p = document.getElementById("principal").value;
    a = document.getElementById("Amount").value;
    b = document.getElementById("Years").value;
    document.getElementById("result").innerHTML = a * p * b / 100;
}
        
