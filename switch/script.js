let button=document.querySelector('button');

let resultdiv=document.createElement('div');
resultdiv.id='result';
document.getElementById('wrapper').appendChild(resultdiv);


button.addEventListener('click',getstats);

function getstats(){
    const input=document.getElementById("input");
    const city=input.options[input.selectedIndex].value;
    let population=0,literacy=0,language='';

    switch(city){
        case 'chennai':
            population=1;
            literacy=1;
            language="tamil";
            break;
        case 'delhi':
            population=2;
            literacy=2;
            language="hindi";
            break;
        case 'andhra':
            population=3;
            literacy=3;
            language="telugu";
            break;
        default:
            population='unknown';
            literacy='unknown';
            language='unknown';
            break;
    }



    let text=`the indian city ${city} had population of ${population} and literacy rate is ${literacy} also they speak ${language}`; 

    document.getElementById('result').innerHTML=text; 
}