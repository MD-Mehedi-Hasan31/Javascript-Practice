
var a=1;

if(a==10){
	console.log("true");
}else{
	console.log("false");
}

var name='Md Mehedi Hasan';

if(name=="Md Mehedi Hasan"){
	console.log("Hello, "+name+" Welcome to our store.");
}
else{
	console.log("Not Allow");
}

var weekDay='Sunday';

switch(weekDay){
	case 'Saturday':
		console.log('Saturday! Today is closed');
		break;
	case 'Sunday':
		console.log('Sunday! it is  noraml day');
		break;
	case 'Monday':
		console.log('Monday! it is  normal day');
		break;
	case 'Tuesday':
		console.log('Tuesday! it  is  normal day');
		break;
	case  'Wednesday':
		console.log('Wednesday! it is normal day');
		break;
	case 'Thursday':
		console.log('Thursday! it is  normal day');
		break;
	case 'Friday':
		console.log('Friday! it is Closed day');
		break;
	default:
		console.log('Not a Day');
		
}

