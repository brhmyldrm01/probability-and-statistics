


function calculate(N,n){
    
var result=" ";
    if(n.value==0){
        result =" n degeri 0 olamaz";
        document.getElementById("output").innerHTML=result;
    }
    else{
        k=Math.floor(N.value/n.value);
        random=Math.floor((Math.random() * (k)+1) );
        console.log("k:"+k,"random:"+random);
        var sro=[random];
        for(var i=1;i<n.value;i++){
            sro[i]=sro[i-1]+k;
        }
        result="Sistematik rastgele Örneklem </br>";
        for(var i=0;i<n.value;i++){
            result+="</br> "+sro[i];
        }
      
        document.getElementById("output").innerHTML=result;
    }
    



}