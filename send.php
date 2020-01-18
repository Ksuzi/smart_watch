<?php

$form_fio = $_POST['name-f'];
$form_city = $_POST['city-f'];
$form_address = $_POST['address-f'];
$form_count = $_POST['count-f'];
$form_phone = $_POST['phone-f'];
$form_email = $_POST['email-f'];

$to      = 'landhosting123@gmail.com';
$subject = 'Заказ Smart Watch GT08 от '.$form_fio;
$message = 'Заказ Smart Watch GT08

ФИО: '.$form_fio.'
Город: '.$form_city.'
Адрес: '.$form_address.'
Количество: '.$form_count.'
Телефон: '.$form_phone.'
Email: '.$form_email;

$headers = 'From: admin@l59045.hostua02.fornex.org' . "\r\n" .
    'Reply-To: admin@l59045.hostua02.fornex.org' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$error = 0;

if(!$form_fio || !$form_count || !$form_city || !$form_phone){
    $error = 'Заполните Ваши ФИО, город доставки, количество единиц товара и номер телефона.';
}

if(!$error){
    mail($to, $subject, $message, $headers);
    $msg = 'Спасибо за заказ. Наш менеджер свяжется с вами в ближайшее время.
    Данные вашего заказа:
    ФИО: '.$form_fio.'
    Город: '.$form_city.'
    Адрес: '.$form_address.'
    Количество: '.$form_count.'
    Телефон: '.$form_phone.'
    Email: '.$form_email;
}

$array = array('error'=>$error,'msg'=>$msg);

echo json_encode($array);

?>