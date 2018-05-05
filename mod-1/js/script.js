const numParticipants = prompt("Введите необходимое число мест:"," ");
//Проверка на целое положительно число
if (numParticipants <= 0 ){
  alert('Ошибка ввода!');
} else if ((numParticipants^0) === numParticipants){
   alert('Ошибка ввода!');
}
//Проверка на целое положительно число

let sharm;
let hurgada;
let taba;

let numPlaces = prompt("ВВедите номер выбранной группы: 1-sharm(15 свободных мест), 2-hurgada(25 свободных мест), 3-taba(6 свободных мест)");
if(numPlaces !== '1' && numPlaces!=='2'&& numPlaces!=='3'){
  alert("Выберете правильный номер группы!")
} 
if (numParticipants > 25){	
	 		alert('Такого количества свободных мест, в одной группе, нет.'); 
	 	} else if ( numPlaces==="2" && numParticipants>0){
	 		if (confirm('Вы выбрали группу hurgada, подтверждаете выбор?')===true){
	 				alert('Осталось  ' + (25 - numParticipants) +' свободных мест');
	 		} else {
				alert('Вам не подошла группа, введите другой номер');
			}
	 	} else if (numParticipants > 16 && numPlaces=== "1") {
	 		alert('Мест в этой группе не хватает');
	 		
	 	}else if (numParticipants > 0 && numPlaces==="1"){
	 			if (confirm('Вы выбрали группу sharm, подтверждаете выбор?')===true){
	 				alert('Осталось  ' + (15 - numParticipants) +' свободных мест');
	 			}else {
	 				alert('Вам не подошла группа, введите другой номер');
	 			}
	 	
	 	} else if (numPlaces === "3" && numParticipants >= 6){
	 			alert('Мест в этой группе не хватает');
	 	}else if (numPlaces === "3" && numParticipants > 0) {
	 		if (confirm('Вы выбрали группу taba, подтверждаете выбор?') === true){
	 				alert('Осталось  ' + (6 - numParticipants) + ' свободных мест');
	 			}else {
	 				alert('Вам не подошла группа, введите другой номер');
	 			}
	 	}


