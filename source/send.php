<?php
//Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

// Warning!!
// ********
// Важная информация! В настройках аккаунта гугл Объязательно разрешите доступ небезопасным приложениям https://support.google.com/accounts/answer/6010255
// ********
// end of warning


// имена в квадратных скобках это name полей формы
$hotel = $_POST['hotel'];
$location = $_POST['location'];
$name = $_POST['name'];
$type = $_POST['type'];
$contact = $_POST['contact'];
// Настройки
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com'; // почтвый сервер, Gmail для примера
$mail->SMTPAuth = true;
$mail->Username = 'form@hoteza.com'; // Ваша почта, возможно без имени сервера. В случае с гуглом - без имени сервера, то есть вида mymail
$mail->Password = 'gfhjkmjnajhvs21Q'; // Ваш пароль
$mail->SMTPSecure = 'ssl';
$mail->Port = 465; // Порт надо уточнять в настройках почтового сервера
$mail->setFrom('sales@hoteza.com'); // Ваш Email - но работать будет и без указания
$mail->addAddress('kursenko@gmail.com'); // Email получателя - но работать будет и без указания
// Письмо
$mail->isHTML(true);
$sub = '=?UTF-8?B?'.base64_encode($mail->Subject = "Заявка с сайта sales@hoteza.com").'?='; // правки на случай несовпадения кодировок
$mail->Subject = $sub;
$mail->Body = "Отель: '.$hotel.'. \r\nМестоположение: '.$location.'. \r\nИмя: '.$name.'. \r\nВид контактых данных: '.$type.'. \r\nКонтакт: '.$contact'"; // Текст письма
// раскомментить следующую строку если почта не уходит, в консоли будет обширный вывод с причинами
$mail->SMTPDebug = SMTP::DEBUG_SERVER;

//Результат
if(!$mail->send()) {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
  echo $mail->Body;
}
?>