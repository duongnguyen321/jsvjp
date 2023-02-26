import { $, $$, HTML, CSS, log } from "../dist/Utils/utils.js";
/*
1.Sử dụng hàm $ để tìm phần tử HTML đầu tiên khớp với CSS selector:
const firstElement = $("h1");
console.log(firstElement); // In ra phần tử HTML đầu tiên có thẻ <h1>

2.Sử dụng hàm $$ để tìm tất cả các phần tử HTML khớp với CSS selector:
const allElements = $$("p");
console.log(allElements); // In ra một mảng chứa tất cả các phần tử HTML có thẻ <p>

3.Sử dụng hàm html để tạo một phần tử HTML mới và thêm nội dung vào trong đó:
const newElement = html("div","class", "Đây là nội dung của phần tử div mới");
console.log(newElement); // In ra phần tử HTML mới vừa được tạo

4.Sử dụng hàm css để thay đổi thuộc tính CSS của một hoặc nhiều phần tử HTML:
css("p", "color", "red"); // Đặt màu chữ của tất cả các phần tử có thẻ <p> thành đỏ
css("#header", "font-size", "24px"); // Đặt kích thước chữ của phần tử có ID "header" thành 24px

5.Sử dụng hàm log để hiển thị dữ liệu lên trình duyệt bằng thẻ HTML:
log("Hello, world!"); // Hiển thị chuỗi "Hello, world!" trong một thẻ div có class "code"
log([1, 2, 3]); // Hiển thị một mảng các số trong một thẻ pre có định dạng JSON
*/
HTML("div", "example", "Đây là nội dung của phần tử div mới");
HTML("div", "example2", "Đây là nội dung của phần tử div mới có màu đỏ");
CSS("div.example2", "color", "red");
const AllElement = $$("div");
const firstElement = $("div.example");
console.log(AllElement)
console.log(firstElement);
log(log);