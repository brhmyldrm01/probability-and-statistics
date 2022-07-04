var values= new Map();
var array=[];
var amnt;
var seq=0;
var result="";
var  valuesStr="";
var l1=0;
var j1=0;
var l3=0;
var j3=0;
var h=0;
var k=0;
var n=0;
var n1=0;
var n3=0;
var R=0;
var L=0;
var S=0;
var ao=0;



altLimit=[];
ustLimit=[];
altSinir=[];
ustSinir=[];
frekans=[];
eklenikFrekans=[];

var varyansStr="";
var ssStr="";
var  q1Str="";
var  q3Str="";
var  omsStr="";
var  dkStr="";
var count=0;
var varyans=0;
var ss=0;
var  q1=0;
var  q3=0;
var  oms=0;
var  dk=0;

function addValue(val){
   
     varyansStr="";
     ssStr="";
      q1Str="";
      q3Str="";
      omsStr="";
      dkStr="";
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
    document.getElementById("Varyans").innerHTML=varyansStr;
    document.getElementById("SS").innerHTML=ssStr;
    document.getElementById("Q1").innerHTML=q1Str;
    document.getElementById("Q3").innerHTML=q3Str;
    document.getElementById("OMS").innerHTML=omsStr;
    document.getElementById("DK").innerHTML=dkStr;
    }
}







function removeValue(val){
    
    varyansStr="";
    ssStr="";
     q1Str="";
     q3Str="";
     omsStr="";
     dkStr="";
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
        document.getElementById("Varyans").innerHTML=varyansStr;
        document.getElementById("SS").innerHTML=ssStr;
        document.getElementById("Q1").innerHTML=q1Str;
        document.getElementById("Q3").innerHTML=q3Str;
        document.getElementById("OMS").innerHTML=omsStr;
        document.getElementById("DK").innerHTML=dkStr;
        

    }
    }




    function set(){
        console.log("omsset:"+oms);
         varyans=0;
         ss=0;
          q1=0;
          q3=0;
          oms=0;
          dk=0;
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
         k=Math.ceil(Math.sqrt(n));
          h=Math.ceil(R/k);
        
        console.log("n:"+n);
        console.log("k:"+k);
        console.log("h:"+h);
        console.log("L:"+L);
        console.log("S:"+S);
        console.log("R:"+R);
    
    }
    

    function Varyans(){
        var sum=0;
        console.log("varyansbas:"+varyans);
        for(var i=0;i<n;i++){
            var temp=array[i];
            sum+=(temp-ao)*(temp-ao);
        }
        console.log("varyans:"+varyans);
        console.log("sum:"+sum);
       varyans=(sum/(n-1));
       console.log("varyans:"+varyans);

       
    }
         function SS() {
            console.log("ssbas:"+ss);
            ss=Math.sqrt(varyans);
            console.log("ss:"+ss);
     
        }

       function OMS(){
            var sum=0;
            for(var i=0;i<n;i++){
                var temp=array[i];
                sum+=Math.abs(temp-ao);
            }
            console.log("sum:"+sum);
            oms=sum/n;
            console.log("oms:"+oms);
     
        }

        function DK(){
            dk=(ss/ao);
            console.log("dk:"+dk);
            console.log("ao:"+ao);
     
        }

    


        function Q1(){
            var i=0;
            var n1=0;
            var fq1=0;
            for(i=0;i<k;i++){ 
              if(eklenikFrekans[i]>(n/4)){
                break;
              }    
            }
            l1=altSinir[i];
            if(i!=0)
                n1=eklenikFrekans[i-1];
            fq1=frekans[i];

            j1=(n/4)-n1;
            q1=(l1 +((j1*h)/fq1));
            console.log("n1:"+ n1);
            console.log("l1:"+ l1);
            console.log("fq1:"+ fq1);
            console.log("q1:"+ q1);
            console.log("j1:"+ j1);
        }

        function Q3(){
            var i=0;
            var n3=0;
            var fq3=0;
            for(i=0;i<k;i++){ 
              if(eklenikFrekans[i]>((3*n)/4)){
                break;
              }    
            }
            l3=altSinir[i];
            if(i!=0)
            n3=eklenikFrekans[i-1];
            fq3=frekans[i];
            j3=(3*n/4)-n3;

            q3=(l3 +((j3*h)/fq3));
            console.log("n3:"+ n3);
            console.log("l3:"+ l3);
            console.log("fq3:"+ fq3);
            console.log("q3:"+ q3);
            console.log("j3:"+ j3);

        }



    function AO(){
        var sum=0;
        ao=0;
        for(var i=0;i<n;i++){
            sum+=array[i];
        }
        ao=sum/n;
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


    function calculateDO(){
        try{
        set();
        AO();
        Varyans();
        SS();
        OMS();
        DK();
        SinifLimitleri();
        SinifSinirlari();
        frekansHesapla();
        eklenikFrekansHesapla();
        Q1();
        Q3();
   
        varyansStr="Varyans:" + varyans  + "\n"; 
        ssStr="Standart Sapma:" + ss + "\n"; 
        dkStr="Değişim Katsayısı:" + dk + "\n"; 
        omsStr="Ortalama Mutlak Sapma:"+oms + "\n";
        q1Str="Q1::" + q1 + "\n"; 
        q3Str="Q3:"+q3 + "\n";
        document.getElementById("values").innerHTML=valuesStr;
        document.getElementById("Varyans").innerHTML=varyansStr;
        document.getElementById("SS").innerHTML=ssStr;
        document.getElementById("Q1").innerHTML=q1Str;
        document.getElementById("Q3").innerHTML=q3Str;
        document.getElementById("OMS").innerHTML=omsStr;
        document.getElementById("DK").innerHTML=dkStr;
        } catch{
            set();
            AO();
            Varyans();
             SS();
             OMS();
             DK();
            varyansStr="Varyans:" + varyans  + "\n"; 
            ssStr="Standart Sapma:" + ss + "\n"; 
            dkStr="Değişim Katsayısı:" + dk + "\n";
            omsStr="Ortalama Mutlak Sapma:"+oms + "\n";
            document.getElementById("values").innerHTML=valuesStr;
            document.getElementById("Varyans").innerHTML=varyansStr;
            document.getElementById("SS").innerHTML=ssStr;
            document.getElementById("Q1").innerHTML="verileri kontrol ediniz.";
            document.getElementById("Q3").innerHTML="verileri kontrol ediniz.";
            document.getElementById("OMS").innerHTML=omsStr;
            document.getElementById("DK").innerHTML=dkStr;
        }
    }