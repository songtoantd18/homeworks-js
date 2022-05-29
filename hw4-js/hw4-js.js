// Bài 1:  

// Tạo các function theo yêu cầu dưới đây 

// function hiện alert với nội dung: Hello + tên người dùng, trong đó tên người dùng được truyền từ parameter 
const myNameFunction = (ten,age) => {
   
    console.log("my name : " + ten + "my age : " + age);
    alert("my name : " + ten + "my age : " + age);
};
// function có 3 parameter là a,b, c. 
// function sẽ kiểm tra nếu tổng của 2 số bất kì lớn hơn số còn lại thì sẽ return về giá trị hiệu của 2 số bất kì đó trừ cho số còn lại 

const caculatePoints = (a , b, c) => {
    let subtract;
   if(a <b && a <c  )
   {
       subtract = (b+c)-a;

   }
   else if (b < a && b < c)
   {
       subtract =(a+c)-b
   }
   else 
   {
       subtract= (a+b)-c
   }
   alert(subtract)
  
};
// function thông báo điểm thi trung bình và phân loại
//  học lực học sinh. Điểm Toán, Lý, Hóa, Sinh, Văn, Sử, Địa, 
//  Anh sẽ được truyền từ parameter.
//   điểm trung bình < 5 là học sinh yếu, 5 đến 6.5 là trung bình, 6.5 đến 8 là khá, 8 trở lên là giỏi 
const AverageScore = (points) => {
    let result;
    result = (points.math + points.physical + points.chemical + points.bio + points.literature + points.history + points.geography + points.english)/8;
    alert (result);
    console.log(result);
    if (result <5 ) {messageContent = 'học sinh yếu';}
    else if (result >= 5 && result < 6.5) { messageContent = 'học sinh trung bình'}
    else if (result >= 6.5 && result < 8) { messageContent = 'học sinh khá'}
    else  { messageContent = 'học sinh giỏi'}
alert ("điểm trung bình là " + result + " bạn đạt danh hiệu  " + messageContent);
}
// Bài 2:  
// Tạo ứng dụng tính tiền điện phải trả và thông báo bằng alert, yêu cầu: 
appElectric = () => {
    let numberElectric;
    let moneyPay;
    do {
        numberElectric = parseInt(prompt("nhập số điện của bạn (lớn hơn 100 nhỏ hơn 2000)"));
      
    }
    while (
        numberElectric < 100 || numberElectric > 2000 || isNaN(numberElectric)
    );
    if (numberElectric < 150 && numberElectric >100) {
        moneyPay = numberElectric*3000;
    }
    else if (numberElectric > 150 && numberElectric <= 500 ) {
        moneyPay = 150 * 3000 + (numberElectric-150)*5000;
    }
    else if (numberElectric > 500 && numberElectric <= 1500) {
        moneyPay = 150 * 3000 + 350*5000+(numberElectric-500)*10000;

    }
    else {
        moneyPay =150*3000 +350*5000 +1000*10000+(numberElectric-1500)*20000;

    }
  alert("số tiền bạn là "+ moneyPay);

    console.log(moneyPay)

    return(moneyPay)

  }


// nhập số điện bằng prompt, dùng parseInt hoặc Number để convert giá trị thành number, nếu nhập không đúng loại dữ liệu hoặc nhỏ hơn 100, lớn hơn 2000, sẽ bắt nhập lại 

// số tiền điện tính theo công thức sau, 150 chữ điện đầu tiên giá 3000/chữ, 350 chữ điện tiếp theo giá 5000/chữ, 1000 chữ điện tiếp theo giá 10000/chữ, từ chữ điện 1501 trở đi, giá 20000/chữ 

// Ví dụ: nhập vào 1200, thì số tiền điện là sẽ 150*3000 + 350*5000 + 700*10000 = 9.200.000 đồng 








