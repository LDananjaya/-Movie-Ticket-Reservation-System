<?php
require 'configmovie.php'

if(!$connection){
        echo mysqli_connect_error();
}
else{

$First_Name = $_POST['FirstName'];
$Last_Name = $_POST['LastName'];
$Email = $_POST['Email'];
$contact_number = $_POST['contact number'];
$Password = $_POST['Password'];

$sql ="INSERT INTO ";

    if(mysqli_quary())


?>