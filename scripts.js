let loginBox = document.querySelector('.form')
console.log(loginBox);

let namePattern = /^[a-zA-Z]{4,}$/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d $!%*?&]{8,}$/;

const user = {
    name: loginBox.name.value,
    password: loginBox.password.value,
}
// console.log(user);

function validateName(e) {
    //  if name === id
    if (e.target.name === 'username'){
let parent = e.target.parentNode;
let text = parent.querySelector('.text-cont')
// console.log(text);
text.textContent = namePattern.test(e.target.value) ? 'valid' : 'invalid'
e.target.style.border = namePattern.test(e.target.value) ? '2px solid green' : '2px solid red'
text.style.fontSize = '12px'
console.log(e.target.name);
}
}


function validatePassword(e) {
    if (e.target.name === 'password'){
// console.log(e.target);
let parent = e.target.parentNode;
let pass = parent.querySelector('.pass-con')
// console.log(pass);
pass.textContent = passwordPattern.test(e.target.value) ? 'valid' : 'provide a strong password'
pass.textContent = passwordPattern.test(e.target.value) ? 'valid' : 
'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character                                    '

pass.style.fontSize = '12px'
e.target.style.border = passwordPattern.test(e.target.value) ? '2px solid green' : '2px solid red'
text.style.color = passwordPattern.test(e.target.value) ? 'green' : 'red'
}
}



let ham = document.querySelector('.hambuger')
console.log(ham);

ham.addEventListener('click', function (){
    let navBar = document.querySelector('.navigation')
    let dis = navBar.style.display = 'none'
    if (dis === 'none'){
         navBar.style.display = 'flex' 
    }else{
        navBar.style.display = 'none'
    }

    let overlayShow = document.querySelector('.overlay')
    let pop = overlayShow.style.display = 'none'
    if (pop === 'none'){
        overlayShow.style.display = 'block ' 
    }else{
        overlayShow.style.display = 'none'
    }


})
function displayToast(){
let show = document.querySelector('.toast_box')
 let on = show.style. display= 'none'
 console.log(show);
if(on === 'none'){
    show.style. display = 'block'
}else{
    show.style. display = 'none'
}
}
// displayToast();

let submit = document.querySelector('.sub')
console.log(submit);
submit.addEventListener('click', function(){
    displayToast()
})

loginBox.addEventListener('keyup' , validateName)
loginBox.addEventListener('keyup' , validatePassword)
loginBox.addEventListener('blurr', function(){
    console.log('kdhg');
})