var values=[];
var amnt;
var seq=0;
var result="";





function setAmount(amount){
    this.amnt=parseInt(amount.value);
    console.log(this.amnt);
    if(this.amnt<=0||isNaN(this.amnt)){
        document.getElementById("output").innerHTML="Geçerli bir değer giriniz";
    }else{
    element=document.getElementById("v");
    element.disabled=false;
    element = document.getElementById("hesapla");
    element.disabled=false;
    element=document.getElementById("amount");
    element.disabled=true;
    element=document.getElementById("amountButton");
    element.disabled=true;
    document.getElementById("seq").innerHTML=(seq+1)+". ";
    document.getElementById("output").innerHTML="Verileri Giriniz";
    }
    
}


function calculate(v){
    result="Basit Seri </br> ";
       var val=parseFloat(v.value);
       console.log(val);
    if(this.amnt<=seq){
        document.getElementById("output").innerHTML=result;
        element=document.getElementById("v");
        element.disabled=true;
        element = document.getElementById("hesapla");
        element.disabled=true;
    }else{ 
        seq++;
         values[seq-1]=val;
            
         for(var a=0;a<values.length+1;a++){
            for(var j=0;j<values.length;j++){
            if(values[j]>=values[j+1]){
            var temp=values[j+1];
            values[j+1]=values[j];
            values[j]=temp;
            }
        }
        }

        for(var i=0;i<seq;i++){
            console.log(values[i]);
            result+=" " +String(values[i]) +" </br>";
        }
        document.getElementById("output").innerHTML=result;
        
    }

    if(amnt<=seq){
        document.getElementById("output").innerHTML=result;
        element=document.getElementById("v");
        element.disabled=true;
        element = document.getElementById("hesapla");
        element.disabled=true;
        document.getElementById("result").innerHTML="Tekrar hesaplamak için sayfayı yenileyiniz."
    }
    else{
        document.getElementById("seq").innerHTML=(seq+1)+". ";
    }
    
}