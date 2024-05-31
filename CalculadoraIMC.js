var val1,val2,res, caja,aviso
caja=document.getElementById("imc")
aviso=document.getElementById("aviso")

function calcular(){
    val1=parseFloat(document.getElementById("v1").value)
    val2=parseFloat(document.getElementById("v2").value)
    console.log(val1+" "+val2)
    imc=val2/(val1*val1)

    if (imc < 18.5){
        caja.value=imc.toFixed(2);
        aviso.value="Bajo peso";
    }
    else if (imc < 25){
        caja.value=imc.toFixed(2)
        aviso.value="Adecuado";
    }
    else if (imc < 30){
        caja.value=imc.toFixed(2);
        aviso.value="Sobrepeso";
    }
    else if (imc < 35){
        caja.value=imc.toFixed(2);
        aviso.value="Obesidad grado 1";
    }
    else if (imc < 40){
        caja.value=imc.toFixed(2);
        aviso.value="Obesidad grado 2";
    }
    else{
        caja.value=imc.toFixed(2);
        aviso.value="Obesidad grado 3";
    }
}
