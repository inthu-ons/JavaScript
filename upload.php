<?php

    header("Content-type: application/json");

    $con = mysqli_connect("localhost","root","","xda") 
    or die("เชื่อมต่อไม่ได้โว๊ย อย่าโง่ !!!");

    $detail = $_POST['detail'];
    $pic = $_FILES['picture']['name'];

    // moved_uploaded_file("ชื่อของไฟล์","ตำแหน่งที่ต้องการให้เก็บไฟล์ไว้");

    if(move_uploaded_file($_FILES['picture']['tmp_name'],"../images/".$pic)){
        $sql = "insert into booking (b_detail,b_pic) values ('$detail','$pic')";
        echo json_encode(array("status"=>1,"text"=>"ทำการอัพโหลดรูปสำเร็จ"));
    } else{
        echo json_encode(array("status"=>0,"text"=>"ทำการอัพโหลดรูปไม่สำเร็จ"));
    }