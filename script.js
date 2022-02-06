window.onload = function () {
    const drop_area = document.getElementById('drop_area');
    const inputElement = document.getElementById('fileElem');
    const form = document.getElementById('my-form-1');

    console.log(drop_area)
    drop_area.addEventListener("dragover", e => {
        e.preventDefault();
        drop_area.id = "drop_area--over";
    });
    drop_area.addEventListener("dragleave", e => {
        e.preventDefault();
        drop_area.id = "drop_area";
    });
    drop_area.addEventListener("drop", e => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;

            form.submit()

            //document.getElementById('background_rect').style.display = 'none';
            //document.getElementById('loading_rect').style.display =  'block';
            //updateThumbnail(drop_area, e.dataTransfer.files[0])
        }
    });

}

function updateThumbnail(dropZoneElement, file) {
    let image_rect = document.getElementById('image_uploaded')

    image_rect.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        image_rect.src = URL.createObjectURL(file)

        document.getElementById('loading_rect').style.display = 'none';
        document.getElementById('ready_rect').style.display = 'block';
    } else {
        image_rect.src = 'capture.png'
    }
}

