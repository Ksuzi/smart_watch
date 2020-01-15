<?php

$form_fio = $_POST['form_fio'];
$form_city = $_POST['form_city'];
$form_phone = $_POST['form_phone'];
$form_email = $_POST['form_email'];
$form_address = $_POST['form_address'];

$to      = 'nobody@example.com';
$subject = 'Заказ с сайта';
$message = 'Заказ с сайта. Данные:
ФИО: '.$form_fio.'
Город: '.$form_city.'
Телефон: '.$form_phone.'
Email: '.$form_email.'
Адрес: '.$form_address;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$error = 0;

if(!$form_fio || !$form_city || !$form_phone){
    $error = 'Заполните ФИО, Город и номер телефона';
}

if(!$error){
    mail($to, $subject, $message, $headers);
    $msg = 'Сообщение отправлено';
}

$array = array('error'=>$error,'msg'=>$msg);

echo json_encode($array);

?>