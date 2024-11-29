let imgbox = document.getElementById('imgbox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQr(){
    if(qrText.value.length > 0)
    {
    qrImage.src = "add api link here" + qrText.value;
    imgbox.classList.add("show-img");
    }
}