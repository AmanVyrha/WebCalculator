
function cal(){
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    var oper=document.getElementById("operator").value;
    if (oper==="+"){
        document.getElementById("result").value=n1+n2;
    }
    if (oper==="-"){
        document.getElementById("result").value=n1-n2;
    }
    if (oper==="*"){
        document.getElementById("result").value=n1*n2;
    }
    if (oper==="/"){
        document.getElementById("result").value=n1/n2;
    }
}
