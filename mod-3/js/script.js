
let login = prompt('Введите логин');  
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];



function checkLoginValidity(login){
    if (login.length > 4 && login.length < 16) {
        return true;
        
    }else{
        return false;
       }
}
 checkLoginValidity = checkLoginValidity(login);

function checkIfLoginExists(logins, login){
   if(logins.includes(login)){
        return true;

   }else{
       return false;
   }  
}
var checkIfLoginExists = checkIfLoginExists(logins, login);
function addLogin(logins, login) {  
    if(checkLoginValidity == true){
        if(checkIfLoginExists == true){
            console.log('Такой логин уже используется!');
            alert('такой пароль уже существует!');
        }else{
            logins = logins.push(login);
            console.log('Логин успешно добавлен!');
            alert('Логин успешно добавлен!');
        }
    }else{
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        alert('В логине должен быть от 4 до 16 символов');
    }
    return logins;
}

addLogin(logins, login);
console.log(logins)
console.log(logins[logins.length-1])