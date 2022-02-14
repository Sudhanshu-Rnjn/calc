function getHistory(){
    return document.getElementById("history-value").innerText;

}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}


function getOutput(){
    return document.getElementById("output").innerText;

}
function printOutput(num){
    if(num==""){
        document.getElementById("output").innerText=num;
    }
    else{
        document.getElementById("output").innerText=getFormatedNumber(num);
    }
    
}


function getFormatedNumber(num){
    if(num=="-"){
        return "";
    }
var n=Number(num);
var value=n.toLocaleString("en");
return value
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener("click",function(){
      
        if(this.id=="clear")
            {
                printOutput("");
                printHistory("");
            }
            if(this.id=="backspace"){
                var outout=reverseNumberFormat(getOutput()).toString();
                if(outout){
                    outout=outout.substring(0,outout.length-1);
                    printOutput(outout);
                }
            }
            else{
            var output=getOutput();
            var history=getHistory();
            if(output!="" || history!=""){
                output=output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){

                    var res=eval(history);
                    printHistory("");
                    printOutput(res);
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
            }
    })
}

var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        var output=reverseNumberFormat(getOutput());
            if(output!=NaN){
                output=output+this.id;
                printOutput(output);
              
            }
        
    })
}

