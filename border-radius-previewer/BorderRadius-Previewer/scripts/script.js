function changeBorder(){
    const txtBoxTL = document.getElementById("txtBoxTL")
    const txtBoxTR = document.getElementById("txtBoxTR")
    const txtBoxBL = document.getElementById("txtBoxBL")
    const txtBoxBR = document.getElementById("txtBoxBR")

    let shape = document.getElementById("shape");
    document.getElementById("quadrado").style.borderTopLeftRadius = txtBoxTL.value + "px";
    document.getElementById("quadrado").style.borderTopRightRadius = txtBoxTR.value+ "px";
    document.getElementById("quadrado").style.borderBottomLeftRadius = txtBoxBL.value + "px";
    document.getElementById("quadrado").style.borderBottomRightRadius = txtBoxBR.value + "px";

    dataAboutBorder = {
        dataType: "Border Radius:",
        size: txtBoxTL,
    }

    document.getElementById("borderDataTxt").innerHTML = shape.style.borderRadius;

    if(txtBoxTR == '' && txtBoxTL == '' && txtBoxBL == '' && txtBoxBR == ''){
        document.getElementById("quadrado").style.borderRadius = "0px";
        document.getElementById("borderDataTxt").innerHTML = "";
    }
}