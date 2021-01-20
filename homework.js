//B1: Nhập từ bàn phím 1 dãy số, mỗi số cách nhau bởi dấu ",". Tìm và in ra những số nguyên tố có trong dãy số đó
    //VD: Input: 2, 9, 4, 5, 7
    //Output: 2, 5, 7

var arr = [];
var SNT;
function dayso() {
    for (let i = 0; i < 4; i++) {
        SNT = Number(prompt("Nhập số bạn muốn kiểm tra số nguyên tố: "));
        arr.push(SNT)   
    }
    return arr;
}
arr = dayso();
console.log(arr);
for (let j = 3; j >= 0; j--) {
    let count = 0;
    console.log(arr);
    if (arr[j] < 2) {
        arr.splice(j, 1);
    } else {
        for (let i = 2; i < arr[j]; i++) {
            if (arr[j] % i == 0) {
                count++ ;
            }
        }
        console.log(count)
        if (count >= 1) {
            arr.splice(j, 1);
        }
       count = 0; 
    }
}
alert(arr)
//kiểm tra từng giá trị trong mảng nhập vào với index tương ứng, ví dụ nếu arr[3] = 8, chia hết cho 2 thì sẽ tăng 
//biến count lên 1 lần và sẽ splice đi giá trị của arr[3], và đồng nghĩa số đó không là số nguyên tố
//ngược lại nếu giá trị arr[j] không chia hết cho i = 2 thì biến count sẽ không tăng và cũng sẽ không splice giá trị đó, 
//và số đó là số nguyên tố