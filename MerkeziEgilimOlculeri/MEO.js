var values= new Map();
var array=[];
var amnt;
var seq=0;
var result="";
var  valuesStr="";

var AOStr="";
var medStr="";
var  modStr="";

function addValue(val){
   
    var AOStr=" ";
    var medStr=" ";
    var  modStr=" ";
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
    document.getElementById("AO").innerHTML=AOStr;
    document.getElementById("Medyan").innerHTML=medStr;
    document.getElementById("Mod").innerHTML=modStr;
    }
}






function removeValue(val){
    
var AOStr="";
var medStr="";
var  modStr="";
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
    document.getElementById("AO").innerHTML=AOStr;
    document.getElementById("Medyan").innerHTML=medStr;
    document.getElementById("Mod").innerHTML=modStr;
}
}



function calculateMEO(){
    var AOStr="Aritmetik Ortalama: ";
    var medStr="Medyan: ";
    var  modStr="Mod: ";
    if(array.length>0){
   
    modArray=this.mod();
    if(modArray.length==array.length){
        modStr+= "Tüm veriler 1 kere tekrar ettiğinden mod yoktur."
    }else{
          for(var i=0;i<modArray.length;i++){
        modStr+=" " +String(modArray[i])+" ";
    }
    }
  
    AOStr+=String(this.AO());
    medStr+=String(this.medyan());
    document.getElementById("AO").innerHTML=AOStr;
    document.getElementById("Medyan").innerHTML=medStr;
    document.getElementById("Mod").innerHTML=modStr;
}else{
    result="Hesaplamak için veri giriniz.";
    document.getElementById("output").innerHTML=result;
}
}


function AO(){
    var sum=0;
    var l=array.length;
    for(var i=0;i<l;i++){
        sum+=array[i];
    }
    return sum/(l);
    

}

function mod() {
    var mod=[];
    var max=Number.MIN_VALUE;
    for(var [k,v] of values){
        if(v>max){
            max=v;
            mod=[];
            mod.push(k);
        }else if(v==max){
            mod.push(k);
        }
    }
    return mod;
}


function medyan (){
    var l=array.length;
    var medyan=0;
    console.log(l);
    for(var a=0;a<l+1;a++){
        for(var j=0;j<l;j++){
        if(array[j]>=array[j+1]){
        var temp=array[j+1];
        array[j+1]=array[j];
        array[j]=temp;
        }
    }
    }

    if(l%2==0){
        medyan=(array[(l/2)-1]+array[l/2])/2;
    }
    else{
        medyan=array[Math.floor(l/2)];
    }

    return medyan;
}