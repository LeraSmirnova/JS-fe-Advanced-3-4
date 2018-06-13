let login = prompt('Введите логин');  
 
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


function checkLoginValidity(name){
   if (name.length > 4 && name.length < 16) {
       return true
   }else{
       return false;
      }
}


function checkIfLoginExists(arr, name){
  if(arr.includes(name)){
       return true;
  }else{
      return false;
  }  
}


function addLogin(arr, name) {  
   if(checkLoginValidity(name) == true){
       if(checkIfLoginExists(arr, name)== true){
           console.log('Такой логин уже используется!');
           // alert('такой пароль уже существует!');
       }else{
           arr = arr.push(name);
           console.log('Логин успешно добавлен!');
           // alert('Логин успешно добавлен!');
       }
   }else{
       console.log('Ошибка! Логин должен быть от 4 до 16 символов');
       // alert('В логине должен быть от 4 до 16 символов');
   }
   return arr;
}



addLogin(logins, login);

console.log(logins)

console.log(logins[logins.length-1]);// выводим последний элемент массива