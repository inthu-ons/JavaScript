<?php
//เอาข้อมูลเข้า database

include 'connect.php';

$username = $_POST['username'];
$password = $_POST['password'];
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$tel = $_POST['tel'];

$insert = "insert into member(m_username,m_password,m_fname,m_lname,m_contact,datesave)
values ('$username','$password','$fname','$lname','$tel',CURRENT_TIMESTAMP)";

if($con>query($insert)){
    echo "เพิ่มข้อมูลสำเร็จ";
}
else{
    echo "เพิ่มข้อมูลไม่สำเร็จ".$con>error;
    
}