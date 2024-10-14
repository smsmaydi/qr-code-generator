let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("download-btn");

function generateQR(){
    if(qrText.value.length > 0 ){   
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        imgBox.classList.add("show-img")

        downloadBtn.style.display = "block";
    }else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.add("remove");
        }, 1000);
    }
}

function downloadQR() {
    if (qrImage.src) {
        const { jsPDF } = window.jspdf;

        // Erstelle eine neue PDF-Datei
        const pdf = new jsPDF();

        // Lade das Bild (QR-Code) und füge es zur PDF hinzu
        pdf.addImage(qrImage, "PNG", 15, 40, 150, 150);

        // PDF speichern
        pdf.save("QR_Code.pdf");
    } else {
        alert("Bitte zuerst einen QR-Code generieren!");
    }
}