function toll1(){
    let answer1 = Math.ceil(Math.random()*6);
    document.getElementById('toll1').innerHTML='1d6<br/>'+answer1
}

function toll2(){
    let answer2 = Math.ceil(Math.random()*10);
    document.getElementById('toll2').innerHTML='1d10<br/>'+answer2
}

function toll3(){
    let answer3 = Math.ceil(Math.random()*20);
    document.getElementById('toll3').innerHTML='1d20<br/>'+answer3
}

function toll4(){
    let answer4 = Math.ceil(Math.random()*100);
    document.getElementById('toll4').innerHTML='1d100<br/>'+answer4
}

function toll5(){
    document.getElementById('hiddentoll').style.display='block';
}

function hide(){
    let times = Number(document.forms['myform']['times'].value);
    if(typeof times === 'number' && times >= 1 && Number.isInteger(times) == true)  {
        var controller1 = true
    }else{
        var controller1 = false
    }
    let size = Number(document.forms['myform']['size'].value);
    if(typeof size === 'number' && size >= 1 && Number.isInteger(size) == true)  {
        var controller2 = true
    }else{
        var controller2 = false
    }
    let i = 0; 
    let answer5 = 0;
    while (i < times){
        answer5 += Math.ceil(Math.random()*size);
        i++;
    }
    if(controller1 == false || controller2 == false){
        alert('请在框内输入大于0的整数！')
    }else{
        document.getElementById('randomtoll').innerHTML=answer5;
    }  
}