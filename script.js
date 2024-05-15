function clickL(){
    document.getElementById('lit').style.display = 'block'
    document.getElementById('footer').style.display = 'block'
    document.getElementById('med').style.display = 'none'
    document.getElementById('vel').style.display = 'none'
    document.getElementById('pol').checked = false
    document.getElementById('kmh').checked = false
    document.getElementById('cl').checked = true
}

function clickV(){
    document.getElementById('vel').style.display = 'block'
    document.getElementById('footer').style.display = 'block'
    document.getElementById('med').style.display = 'none'
    document.getElementById('lit').style.display = 'none'
    document.getElementById('pol').checked = false
    document.getElementById('kmh').checked = true
    document.getElementById('cl').checked = false
}

function clickM(){
    document.getElementById('med').style.display = 'block'
    document.getElementById('footer').style.display = 'block'
    document.getElementById('vel').style.display = 'none'
    document.getElementById('lit').style.display = 'none'
    document.getElementById('kmh').checked = false
    document.getElementById('pol').checked = true
    document.getElementById('cl').checked = false
}

// formula dos calculos  ----------------------

function atualizaHTML(input){
    

    if(document.getElementById('cl').checked){
        document.getElementById('resultElement').innerHTML = input + ' ml'
    }

    if(document.getElementById('xc').checked){
        document.getElementById('resultElement').innerHTML = input + ' ml'
    }

    if(document.getElementById('mih').checked){
        document.getElementById('resultElement').innerHTML = input + ' mph'
    }
    
    if(document.getElementById('kmh').checked){
        document.getElementById('resultElement').innerHTML = input + ' km/h'
    }

    if(document.getElementById('cm').checked){
        document.getElementById('resultElement').innerHTML = input + ' cm'
    }

    if(document.getElementById('pol').checked){
        document.getElementById('resultElement').innerHTML = input + ' polegadas'
    }
}

function retornaMultiplicador(input){

    let multiplicador = 15

    if (input == 'cl') {
        multiplicador = 15
    } 
    
    if (input == 'xc') {
        multiplicador = 240
    }

    if (input == 'mih') {
        multiplicador = 0.62
    }

    if (input == 'kmh') {
        multiplicador = 1.61
    }

    if (input == 'cm') {
        multiplicador = 2.54
    }

    if (input == 'pol') {
        multiplicador = 0.39
    }
    

    return multiplicador
    
}


function convertRes(input, multiplicador){

    atualizaHTML (input * multiplicador);
    
}


function pegarValor(){
    
    let result = document.getElementById('userInput').value
    
    return result;

}

function verRadio(){

    let controle = 'cl'
    if(document.getElementById('cl').checked){
        controle = 'cl'
    }

    if(document.getElementById('xc').checked){
        controle = 'xc'
    }

    if(document.getElementById('mih').checked){
        controle = 'mih'
    }
    
    if(document.getElementById('kmh').checked){
        controle = 'kmh'
    }

    if(document.getElementById('cm').checked){
        controle = 'cm'
    }

    if(document.getElementById('pol').checked){
        controle = 'pol'
    }

    return controle;
}

// MODO ESCURO / CLARO ----------------------------


function addStyle(){
        const el = document.querySelector('link');
        el.href = "./style2.css";
}

function addStyle2(){
    const el = document.querySelector('link');
    el.href = "./style.css";
}


// FORMULA RASCUNHO --------------------------------



// function convert(){
    
//     let selectcm = document.getElementById('cm')
//     let selectpol = document.getElementById('pol')
//     let selectmih = document.getElementById('mih')
//     let selectkmh = document.getElementById('kmh')
//     let selectcl = document.getElementById('cl')
//     let selectxc = document.getElementById('xc')
//     let num = document.getElementById('userInput')
//     let res = num.value


//     // CONVERSAO

//     let calculoPol = (res / 2.54).toFixed(2) + ' Polegadas'
//     let calculoCm = (res * 2.54).toFixed(2) + '  Centímetros'
//     let calculoMih = (res / 1.609344).toFixed(2) + ' Mph'
//     let calculoKmh = (res * 1.609344).toFixed(2) + ' Km/h'
//     let calculoXc = (res / 0.00416666666667).toFixed(2) + ' ml'
//     let calculoCl = (res / 0.0666666666667).toFixed(2) + ' ml'

    
//     if (selectpol.checked) { 
//         document.getElementById('resultElement').innerHTML = calculoPol;

//     } else if (selectcm.checked){
//         document.getElementById('resultElement').innerHTML = calculoCm;

//     } else if (selectmih.checked) { 
//         document.getElementById('resultElement').innerHTML = calculoMih;

//     } else if (selectkmh.checked){
//         document.getElementById('resultElement').innerHTML = calculoKmh;

//     } else if (selectcl.checked) { 
//         document.getElementById('resultElement').innerHTML = calculoCl;

//     } else if (selectxc.checked){
//         document.getElementById('resultElement').innerHTML = calculoXc;

//     }
// }
