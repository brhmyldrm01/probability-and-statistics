

function randomUret(miktar,altSinir,ustSinir){
   var  miktarValue=parseInt(miktar.value);
    var altValue=parseInt(altSinir.value);
    var ustValue=parseInt(ustSinir.value);
    var values=new Array();
    result="Sayılar </br> "; 
     var i;
    control=false;
    if(altValue<ustValue){
        range=(ustValue-altValue)+1;
      
    for(i=0;i<miktarValue;i++){
        temp=Math.floor((Math.random() * (ustValue-altValue+1)) + altValue);
        console.log(temp);
        control=false;
        if(i+1<=range){
            var a;
            for(a=0;a<i;a++){
                if(values[a]==temp)
                    control=true;
            }

            if(control==true){
                i--;
            }else{
                values[i]=temp;
            }
        }else{
            values[i]=temp;
        }
        
    }
    console.log("sonuc yazdırılıyor.");
    for(i=0;i<miktarValue;i++){
        result+=values[i]+" </br>";

    }
    console.log(result);
    document.getElementById("output").innerHTML=result;
    }else{
        console.log("hata");
       document.getElementById("output").innerHTML="Üst sınır alt sınırdan büyük olmalıdır.";
    }
   
    console.log(miktar.value+" , ",altSinir.value+" , "+ustSinir.value+" , ")
}