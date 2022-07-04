var permutation=  "";
var combination=  "";
var comStr="";
var permStr="";

function factorial(num){
    if(num<=1)
    return 1;
    else
     return num*factorial(num-1);

}


function calculatePK(n,r){
    var nValue=parseInt(n.value);
    var rValue=parseInt(r.value);
    if(nValue>=rValue){
 permutation=String(factorial(nValue)/factorial(nValue-rValue));
 combination=String(permutation/factorial(rValue));
 permStr=" Permütasyon :: " + formatNumber(scientificToDecimal( permutation));
 comStr="Kombinasyon :: " + formatNumber(scientificToDecimal(combination));
 document.getElementById("Permutasyon").innerHTML=permStr;
 document.getElementById("Kombinasyon").innerHTML=comStr;
 document.getElementById("output").innerHTML="  " ;

}else{
    document.getElementById("output").innerHTML=" !! n>=r !! " ;
    document.getElementById("Permutasyon").innerHTML="";
    document.getElementById("Kombinasyon").innerHTML="";

}
 

}


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

var scientificToDecimal = function (num) {
    var nsign = Math.sign(num);
    //remove the sign
    num = Math.abs(num);
    //if the number is in scientific notation remove it
    if (/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        var zero = '0',
                parts = String(num).toLowerCase().split('e'), //split into coeff and exponent
                e = parts.pop(), //store the exponential part
                l = Math.abs(e), //get the number of zeros
                sign = e / l,
                coeff_array = parts[0].split('.');
        if (sign === -1) {
            l = l - coeff_array[0].length;
            if (l < 0) {
              num = coeff_array[0].slice(0, l) + '.' + coeff_array[0].slice(l) + (coeff_array.length === 2 ? coeff_array[1] : '');
            } 
            else {
              num = zero + '.' + new Array(l + 1).join(zero) + coeff_array.join('');
            }
        } 
        else {
            var dec = coeff_array[1];
            if (dec)
                l = l - dec.length;
            if (l < 0) {
              num = coeff_array[0] + dec.slice(0, l) + '.' + dec.slice(l);
            } else {
              num = coeff_array.join('') + new Array(l + 1).join(zero);
            }
        }
    }

    return nsign < 0 ? '-'+num : num;
};