var values= new Map();
var array=[];
var result="";
var  valuesStr="";



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


function calculateFS()
{   
    
    for(var a=0;a<array.length+1;a++){
    for(var j=0;j<array.length;j++){
    if(array[j]>=array[j+1]){
    var temp=array[j+1];
    array[j+1]=array[j];
    array[j]=temp;
    }
}
}


    result="Frekans Serisi:  </br>";
    for(var i=0;i<array.length;){
        var k=String(array[i]);
        result += k+ " --> "  + values.get(k) +" </br>";
        i+= values.get(k);
    }

    document.getElementById("output").innerHTML=result;
}