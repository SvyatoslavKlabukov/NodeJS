//Задача №1
function func() {
	console.log('Функция func');
}
function func2() {
	console.log('Функция func2');
}

function pause(f, second){
	function wrapper(){
		let result = setTimeout(f, second*1000);
		console.log(`Функция "${f.name}" выполниться с задержкой в ${second} секунд`);
		return result;
	}
	return wrapper;
}

let p = pause(func, 7);
p();
let p2 = pause(func2, 3);
p2();

//Задача №2



