let generateotp=''
function otp(){
    let a=Math.floor(Math.random()*9999-1000)+1000
    document.getElementById('otp').innerHTML=a
    generateotp=a
}

function validation(){
    let user=document.getElementById('otp1').value 
    let result=document.getElementById('result')
    let generate=generateotp
    if(parseInt(user)===generate){
        result.innerText='you sucessfully logined'
        result.style.background='green'
         result.style.padding='10px'
    }
     else{
        result.innerText='  please enter correct otp '
        result.style.background='red'
        result.style.padding='10px'
     }
}

