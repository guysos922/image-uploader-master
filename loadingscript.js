window.onload = function () {
    move()
}




function move() {
    var elem = document.getElementById("inside_bar");
    var width = 0;
    var id = setInterval(frame, 1);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            updateThumbnail()
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}




function updateThumbnail() {
    document.getElementById('loading_rect').style.display = 'none';
    document.getElementById('ready_rect').style.display = 'block';
    
    const params = new URLSearchParams(document.location.search);
    const img_name = params.get("img-name");

    document.getElementById('image_uploaded').src = 'uploads\\'+ img_name;
    document.getElementById('url_text').innerHTML = window.location.hostname+'\\image-uploader-master\\uploads\\'+ img_name;
}

function copyToClipboard(element) {
    navigator.clipboard.writeText(document.getElementById('url_text').innerText);
}