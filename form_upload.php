<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Picture</title>
</head>
<body>
    <form action="query/upload.php" method="post" enctype="multipart/form-data">
        <input type="text" name="detail">
        <input type="file" name="picture">
        <button id="SendData" type="button">OK</button>
    </form>


<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-Q