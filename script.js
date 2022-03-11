function callme(){
    document.getElementById("code").style.display="block";
}

function count(){
    var current= document.getElementById("countdown").innerHTML;
    var newval=current-1;
    if (current>0){
        document.getElementById("countdown").innerHTML= newval;


    }
    
}

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
