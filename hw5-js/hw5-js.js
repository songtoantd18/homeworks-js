// Bài 1: 

// Tạo ứng dụng Chúc Mừng Sinh Nhật: 

// user sẽ nhập tên, ngày tháng năm sinh (ví dụ: 01/01/1995) bằng prompt 

// nếu hôm nay là ngày sinh nhật, sẽ hiện lên thông báo
//  chúc mừng sinh nhật với tiêu đề: Chúc mừng sinh nhật, bạn <tên user>!!! 


// nếu hôm nay không phải ngày sinh nhật, 
// sẽ tính số ngày còn lại đến ngày sinh nhật và 
// hiện lên alert với nội dung: Còn <số ngày> tới ngày sinh nhật của bạn <tên user> 

// vidu = '123456789';



// userName = prompt("nhập tên của bạn","song toan")
var year;
var numberDaytoBirthday;
var today;
today = new Date();

var today = new Date();
yearToday = today.getFullYear();
dayToday = today.getDate();
monthToday = today.getMonth();
var numberDay;
const timeOfdayMilisecond = 86400000;
let userName;
let upperCase;
let birthday;
var dayofbirthday;
let monthOfbirthday;
let yearOfbirthday;
let vidu;
appBirthday=() => {
   
    vidu = '07/07/1996';
    userName = prompt("nhập tên của bạn","song toan")
    birthday = prompt("nhập ngày tháng năm sinh của bạn,theo cấu trúc: 01/01/1995","31/05/1996")
    dayofbirthday = birthday.slice(0,2)
    monthOfbirthday =  birthday.slice(3,5)
    yearOfbirthday = birthday.slice(6,10)
    console.log(dayofbirthday)
    console.log(monthOfbirthday)
    console.log(yearOfbirthday)
    upperCase = userName.toUpperCase();
    console.log(upperCase);
// tháng sẽ bị lệch 1 đơn vị nên -1 ở chỗ tháng nhé các bạn

    datebirthday = new Date(yearToday, monthOfbirthday-1,dayofbirthday ), // months are zero-based



    dateEnd = new Date(yearOfbirthday, monthOfbirthday-1, dayofbirthday), // months are zero-based
    numberDay = (today-dateEnd) / timeOfdayMilisecond;   // convert milliseconds to days

    numberDaytoBirthday = (datebirthday -today) / timeOfdayMilisecond;   // convert milliseconds to days

console.log(numberDaytoBirthday)

    console.log(Math.round(numberDay))  
    alert('bạn sống trên đất được'+ Math.round(numberDay) + "ngày")
    switch (true) {
        case parseInt(dayofbirthday) === parseInt(dayToday) || parseInt(monthOfbirthday) === parseInt(monthToday)  :
            console.log("hôm nay là sinh nhật bạn")
            break;
        case  parseInt(monthOfbirthday) < parseInt(monthToday)  :
            console.log("hôm nay là sinh nhật bạn")
            break;    
            
    
        default:
    console.log("bạn còn "+ Math.round(numberDaytoBirthday) +" ngày nữa  mới tới sinh nhật")

            
            break;
    }



//     if (parseInt(dayofbirthday) === parseInt(dayToday) || parseInt(monthOfbirthday) === parseInt(monthToday)  ) {
//         console.log("hôm nay là sinh nhật bạn")
//             }
// else{
//     console.log("bạn chưa tới sinh nhật")
// }


}

// Bài 2:  

// Tạo ứng dụng Vietlot phiên bản thiếu kinh phí: 

// user nhập lần lượt 6 số bằng prompt, số nhập vào phải thỏa mãn yêu cầu là: là số nguyên lớn hơn 0 và nhỏ hơn 46, nếu sai sẽ bắt nhập lại 

// sau khi nhập xong, sẽ tự động random ra 6 số có giới hạn từ 1 đến 45, thông báo 6 số đó và kém theo:: 

// nếu user trùng được 2 số, thông báo trúng giải khuyến khích 

// nếu user trùng được 3 số, thông báo trúng giải 3 

// nếu user trùng được 4 số, thông báo trúng giải nhì 

// nếu user trùng được 5 số, thông báo trúng giải nhất 

// nếu user trùng được 6 số, thông báo trúng giải jackpot 

// với giải jackpot thì sẽ hiện thêm thông báo Chúc mừng bạn là người may mắn nhất hôm nay
let numberVietlot;
const arrNumberVietlot = new Array(6);
const arrNumberRandom = new Array(6); 




/* vòng lặp này áp dụng cho arrNumbervietlot  */
for (let i =0; i < arrNumberVietlot.length;i++)
{
    while(numberVietlot < 1 || numberVietlot > 45 || isNaN(numberVietlot))
    {
        numberVietlot = parseInt(prompt(`mời bạn nhập số lớn hơn 1 nhỏ hơn 46 lần thứ ${i+1}` ));
        let isDuplicate = false; /* false là để cho chạy vòng lặp ở dưới  */
        for (let j = 0; j < arrNumberVietlot.length; j++){
            if(numberVietlot === arrNumberVietlot[j]){
                isDuplicate = true    /* nếu 2 số trung nhau thí isduplicate sẽ true , mà true thì vòng lặp dừng nếu false thì tiếp tục */
            }
        }

    }
     
    arrNumberVietlot[i] = numberVietlot;
}


/* vòng lặp này áp dụng cho arrNumberrandom  random số
 */




let count = 0;
for (let i = 0 ; i < arrNumberRandom.length; i++) {
    for(let j = 0; j < arrNumberVietlot.length; j++ )
     {
    if (arrNumberRandom [i] === arrNumberVietlot[j]){
        count++;
        break;
    }
}

}
switch (true) {
    case count === 2 :
        alert(`giai khuyen khich`)
        break;
        case count === 3 :
            alert(`giai ba`)
            break;
            case count === 4 :
                alert(`gia nhi`)
                break;
                case count === 5 :
                    alert(`giai nhat`)
                    break;
                    case count === 6 :
                        alert(`giai dac biet`)
                        break;

    default:
        break;
}
