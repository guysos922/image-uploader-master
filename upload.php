<?php
 $loading_page = file_get_contents('loading.html');
 echo '<script>console.log("php file executed");</script>';

if(isset($_FILES["uploadFile"])){
    echo '<script>console.log("file uploaded");</script>';
    $target_dir = "uploads/";
    $target_dir = $target_dir . basename( $_FILES["uploadFile"]["name"]);
    $target_name = $_FILES["uploadFile"]["name"];
    if (move_uploaded_file($_FILES["uploadFile"]["tmp_name"], $target_dir)) {
        echo '<script>console.log("file uploaded to folder");</script>';
        echo "Location: https://".$_SERVER['HTTP_HOST']."/loading.html?img-name=$target_name ";
        header( "Location: https://".$_SERVER['HTTP_HOST']."/loading.html?img-name=$target_name " );
        
        /*$str1 = $_SERVER['SERVER_NAME'];
        $str2 = '\\image-uploader-master\\loading.html?img-name=';
         
        $str1 .=$str2;
        $str1 .=$target_name;*/



    } else {
        echo '<script>console.log("file could not upload to folder");</script>';
    }
}
else{
    echo '<script>console.log("file failed to upload");</script>';
}