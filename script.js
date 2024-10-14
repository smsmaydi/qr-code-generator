let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.lentgh > 0 ){   
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add("show-img")
    }else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.add("remove");
        }, 1000);
    }
}