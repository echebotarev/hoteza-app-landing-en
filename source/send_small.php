<?php
$hotel = $_POST['hotel'];
$location = $_POST['location'];
$name = $_POST['name'];
$type = $_POST['type'];
$contact = $_POST['contact'];

if (
    mail(
      "kursenko@gmail.com",
      "Заявка с сайта ",
      "Отель: ".$hotel.". \r\nМестоположение: ".$location.". \r\nИмя: ".$name.". \r\nВид контактых данных: ".$type.". \r\nКонтакт: ".$contact,
      "From: sales@hoteza.com \r\n")
    )
  {
    echo "1";
  } else {
    echo "при отправке сообщения возникли ошибки";
  }
?>
