function myFunction() {
let FullName = prompt("nhập tên của bạn ở đây", "song toàn");
 console.log("tên nhân viên : " + FullName);
let level ;
let job ;
do {
   level = prompt("nhâp trình độ của bạn ở đây (chữ thường) : senior,middle,junior, fresher,", "fresher");
}
while(
    level === 'fresher' &&
    level === 'junior' &&
    level ==='middle' &&
    level ==='senior'
)
console.log("trình độ của bạn là :  " + level)
do {
    job = prompt("nhâp trình độ của bạn ở đây (chữ thường) : pm,team lead,trainer, member,", "member");
}
while(
    job === 'fresher' &&
    job === 'junior' &&
    job ==='middle' &&
    job ==='pm'
)
console.log("chức vụ của của bạn là :  " + job)
 let age = prompt("nhập thâm niên của bạn ở đây", 9);
 let bonus = 0;
 let bonus1 = 0;
switch (level) {
    case 'fresher':
        level = 8000000;
        break;
    case 'junior':
        level = 10000000;
        break;
    case 'middle':
        level = 15000000;
        break;
    case 'senior':
        level = 20000000;
        if(level==='team lead' && age2 <= 3)
        {
            bonus = 500000;
        }

        else if(level==='team lead' && age2 >3 && age2 <=5)
        {
            bonus = 2000000;

        }
        else if(level==='team lead' && age2 >5 && age2 <=8)
        {
            bonus = 5000000;
        }
        else {
            bonus = 10000000;

        }
        break;
}
console.log("lương trình độ của bạn là :  " + level)
console.log("lương thưởng thêm bonus loại 1  : "+ bonus)
let age2 = parseInt(age);

switch (job) {
    case 'member':
        alert(' lương chức vụ của bạn là :  0 ');
        job = 0;
        break;
    case 'trainer':
        alert(' lương chức vụ của bạn là :  1 000 000');
        job = 1000000;
        break;
    case 'team lead':
        alert('lương chức vụ của bạn là :  3 000 000');
        job = 3000000;
        break;
    case 'pm':
        alert(' lương chức vụ của bạn là :  8 000 000');
        job = 8000000;
        if( age2 <= 5 && age2  > 0 )
        {
            bonus1 = 5 / 100 * level
        }
        else {
            bonus1 = 6 / 100 * level
        }
        break;

}
console.log("tiền lương chức vụ là :  " + job)
if (age2 >0 && age2 < 3 )
{
    
    age2 = 000000;
} else if (age2 >=3 && age2 <5 ) {
    
    age2 = 500000;
} else if (age2 >=5 && age2 <8 ) {
   
    age2 = 2000000;
} else if (age2 >=8 && age2 <10 ) {
   

    age2 = 4000000;

    
} else {
   


    age2 = 4000000;

}

console.log("tiền lương thâm niên là :  :  " + age2)
console.log("lương bonus loại 2  : " + bonus)
const result = parseInt(level)+parseInt(age2)+parseInt(job) + bonus + bonus1;
console.log("tổng tiền lương của nhân viên "+ FullName + " là :   "+ result );
}

function myFunction1() {
    let sum = 0;
    for (var num = 0; num <= 200; num++){
        if (num % 4 === 0 && num % 8 != 0  ){
            document.write(num + ' - ');
        }
    }
    
    var Arr = [1,19,25,95,88,25852, 7, 2,8, 3, 4, 5, 0, 9,899,152];
    
    for (var i = 1; i < Arr.length; i++)
        for (var j = 0; j < i; j++)
            if (Arr[i] > Arr[j]) {
              var x = Arr[i];
              Arr[i] = Arr[j];
              Arr[j] = x;
            }
    
        
           
    document.write("<span>Arr=[ </span>" +  Arr +  " ]");
    
            for(let j = 0; j < Arr.length; j++){
                sum += Arr[j];
            }
            console.log("tổng các số trong dãy " + sum)
            document.write("tổng các số trong dãy " + sum);

    




}






