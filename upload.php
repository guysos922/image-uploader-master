<?php
 $loading_page = file_get_contents('loading.html');

if(isset($_FILES["uploadFile"])){
    $target_dir = "uploads/";
    $target_dir = $target_dir . basename( $_FILES["uploadFile"]["name"]);
    $target_name = $_FILES["uploadFile"]["name"];
    if (move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $target_dir)) {
        header( "Location: loading.html?img-name=$target_name " );
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}