var values= new Map();
var array=[];
var result="";
var  valuesStr="";
var  slStr="";
var  ssStr="";
var  sfStr="";
var  efStr="";
var  sonStr="";
var  ofStr="";
var  eofStr="";
var n=0;
var L=0;
var S=0;
var R=0;
var k=0;
var h=0;
var altLimit=[];
var ustLimit=[];
var altSinir=[];
var ustSinir=[];
var frekans=[];
var eklenikFrekans=[];
var SON=[];
var oransalFrekans=[];
var eklenikOransalFrekans=[];
var count=0;

function addValue(val){
   
    result="";
    var key=String(parseFloat(val.value));
    var v=parseFloat(val.value);
    if(isNaN(v)){
        result="Geçerli Bir değer giriniz.";
        document.getElementById("output").innerHTML=result;
    }else{
    array.push(v);
  if (!values.has(key))
    values.set(key,1);
    else
        values.set(key,values.get(key)+1);
    console.log(values);

    valuesStr="Veriler: ";
    for(var i=0;i<array.length;i++)
    valuesStr+=" " +array[i] + " ";
    document.getElementById("values").innerHTML=valuesStr;
    document.getElementById("output").innerHTML=result;
    }
}


function removeValue(val){
    var key=String(parseFloat(val.value));
    var v=parseFloat(val.value);
    if(isNaN(v)){
        result="Geçerli Bir değer giriniz.";
        document.getElementById("output").innerHTML=result;
    }
    else{
    if(!values.has(key)){
        result="Silmek istediğiniz veri bulunamadı.";
        document.getElementById("output").innerHTML=result;
    }
    else{
        values.set(key,values.get(key)-1);
        if(values.get(key)==0)
            values.delete(key);
        for(var i=0;i<array.length;i++)
            if(array[i]==v){
                array.splice(i,1);
                break;
            }
    }
    valuesStr="Veriler: ";
    for(var i=0;i<array.length;i++)
    valuesStr+=" " +array[i] + " ";
    document.getElementById("values").innerHTML=valuesStr;
}
}

function calculateFT(){
    
    try{
    set();
    SinifLimitleri(); 
    SinifSinirlari();
    frekansHesapla();
    eklenikFrekansHesapla();
    sonHesapla();
    oransalFrekansHesapla();
    eklenikOransalFrekansHesapla();
    slStr ="alt limit: "+yaz(altLimit)+ "</br>"+ " ust limit: "+yaz(ustLimit);
    ssStr ="alt sınır: "+yaz(altSinir)+"</br>"+ " ust sinir: "+yaz(ustSinir);
    sfStr ="frekans: "+yaz(frekans)+"</br>";
    efStr ="Eklenik frekans: "+yaz(eklenikFrekans)+"</br>";
    sonStr ="Sınıf orta noktası: "+yaz(SON)+"</br>";
    ofStr ="Oransal Frekans: "+yaz(oransalFrekans)+"</br>";
    eofStr ="Eklenik Oransal Frekans: "+yaz(eklenikOransalFrekans)+"</br>";
    document.getElementById("SL").innerHTML=slStr;
    document.getElementById("SS").innerHTML=ssStr;
    document.getElementById("SF").innerHTML=sfStr;
    document.getElementById("EF").innerHTML=efStr;
    document.getElementById("SON").innerHTML=sonStr;
    document.getElementById("OF").innerHTML=ofStr;
    document.getElementById("EOF").innerHTML=eofStr;
    document.getElementById("output").innerHTML=" ";
    }catch{
     document.getElementById("output").innerHTML="veri setinizi kontrol ediniz";
     document.getElementById("SL").innerHTML=" ";
     document.getElementById("SS").innerHTML=" ";
     document.getElementById("SF").innerHTML=" ";
     document.getElementById("EF").innerHTML=" ";
     document.getElementById("SON").innerHTML=" ";
     document.getElementById("OF").innerHTML=" ";
     document.getElementById("EOF").innerHTML=" ";
  
  
    }
    
    
}


function yaz(dizi){
    var sonuc="</br> ";
    for(var i=0;i<dizi.length;i++){
        sonuc+= dizi[i].toFixed(2)+"</br>";
    }
    return sonuc;
}

function set(){
    n=array.length;
    var max=Number.MIN_VALUE;
    var min=Number.MAX_VALUE;
    for(var i=0;i<n;i++){
        var temp=array[i];
        if(temp>=max){
            max=temp;
        }
        if(min>=temp){
            min=temp;
        }
    }
    L=max;
    S=min;
    R=L-S;
   // if(array[0]%1>0)

   k=Math.ceil(Math.sqrt(n));
   h=Math.ceil(R/k);
   

    console.log("n:"+n);
    console.log("L:"+L);
    console.log("S:"+S);
    console.log("R:"+R);
    console.log("k:"+k);
    console.log("h:"+h);

}



function SinifLimitleri(){
    altLimit=[];
    ustLimit=[];
    altLimit[0]=S;
    var cntrl=false;
    for(var i=1;i<k;i++){
        altLimit[i]=altLimit[i-1]+h;
    }

    if(array[0]%1>0)
    ustLimit[0]=altLimit[1]-(0.100);
    else
    ustLimit[0]=altLimit[1]-1;

    for(var i=1;i<k;i++){
        ustLimit[i]=ustLimit[i-1]+h;
    }

  
    frekansHesapla();
    for(var i=0;i<k;i++){
        if(frekans[i]==0){
            cntrl=true;
            break;
        }
    }
    

    if(cntrl==true){
       
        
        if(count==100){   
            count++;
        k=Math.floor(Math.sqrt(n));
         h=Math.ceil(R/k);
         console.log("k degisti");
         SinifLimitleri();    
    }
    else if(count>100){
        count=0;
        console.log("kes"); 
         throw Exception;
    }
    else{
        count++;
        console.log("h arttı"); 
        h+=1; 
        SinifLimitleri();
    }
    }
   
}






function SinifSinirlari(){
    altSinir=[];
    ustSinir=[];
    ustSinir[0]=(altLimit[1]+ustLimit[0])/2;
   for(var i=1;i<k;i++){
       ustSinir[i]=ustSinir[i-1]+h;
   }

   altSinir[1]=ustSinir[0];
   altSinir[0]=altSinir[1]-h;
   for(var i=2;i<k;i++){
       altSinir[i]=altSinir[i-1]+h;
   }


}


function frekansHesapla(){
    frekans=[];
    for(var i=0;i<k;i++){
        frekans[i]=0;
    }


    for(var [key,v] of values){
        var temp=parseFloat(key);
        for(var j=0;j<k;j++){
            if(altLimit[j]<=temp&&ustLimit[j]>=temp){
                frekans[j]+=v;
            }
        }
}

}


function oransalFrekansHesapla(){
    oransalFrekans=[];
    for(var i=0;i<k;i++){
        oransalFrekans[i]=0;
    }
    for(var i=0;i<k;i++){
        oransalFrekans[i]=frekans[i]/n;
    }

}

function eklenikOransalFrekansHesapla(){
    eklenikOransalFrekans=[];
    for(var i=0;i<k;i++){
        eklenikOransalFrekans[i]=0;
    }
    for(var i=0;i<k;i++){
        eklenikOransalFrekans[i]=eklenikFrekans[i]/n;
    }

}



function eklenikFrekansHesapla(){
    eklenikFrekans=[];
    for(var i=0;i<k;i++){
        eklenikFrekans[i]=0;
    }
    eklenikFrekans[0]=frekans[0];
    for(var i=1;i<k;i++){
        eklenikFrekans[i]=frekans[i]+eklenikFrekans[i-1];
    }
}

function sonHesapla(){
    SON=[];
    for(var i=0;i<k;i++){
        SON[i]=0;
    }
    SON[0]=(altSinir[0]+ustSinir[0])/2;
    for(var i=1;i<k;i++){
        SON[i]=SON[i-1]+h;
    }
}

