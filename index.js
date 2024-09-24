

const qrFormel = document.getElementById("qrForm");
const qrImageel = document.getElementById("qrImage");
const qrContainerel = document.getElementById("qrContainer");
const qrInputtextel = document.getElementById("qrInputtext");
const generatebtnel = document.getElementById("generatebtn");

const renderQRCode =(url)=>{

if (!url) return;
generatebtnel.innerText ="Generating QR Code...";
qrImageel.src=url;

const onImageLoad = () =>{

    const interval =setInterval (()=> {
        qrContainerel.classList.add ("show");
        clearInterval(interval);
        generatebtnel.innerText ="Generate QR Code";

      
    },500);



};

qrImageel.addEventListener("load",onImageLoad);

};

qrFormel.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(qrFormel);
  const text = formData.get("qrtext");

  const qrcodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

  renderQRCode (qrcodeUrl);

});
qrInputtextel.addEventListener("keyup", () => 
{
    if (!qrInputtextel.value.trim()) {
      qrContainerel.classList.remove("show");
   
 }});
