const tg = window.Telegram.WebApp;
let url = 'https://d5dip6pritbe7tmoain3.apigw.yandexcloud.net/aibot';

function downBtnClick() {
    alert("down");
}
function rightBtnClick() {
    alert("right");
}
function leftBtnClick() {
    alert("left");
}
function upBtnClick() {
    alert("up");
}



    tg.MainButton.show();
    tg.MainButton.setText("Оплатить");
    tg.MainButton.onClick(() => {
        var data = JSON.stringify(
            {
                "name": "name",
                "desciption": "desciption",
                "payload": "payload",
                "currency": "currency",
                "cost": "cost"
            }
        );
        console.log("start");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Custom-Info", "getOpenInvoiceUrl");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                tg.openInvoice(xhr.responseText);
            }
        };
        xhr.send(data);
    });