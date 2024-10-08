// new image
var img = new Image();

//add text
img.onload = () => {
    let canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0 ,0, img.naturalWidth, img.naturalHeight);

    //text settings
    let txt = "MUKODIIK", x=30, y= 220;
    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText(txt,x,y);
    let canvasUrl = canvas.toDataURL("image/jpeg");
    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;

    // This is the name of our downloaded file
    createEl.download = "newearth";
    createEl.hidden = true;
    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
}
img.src = "earth.jpg"

