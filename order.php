<?php

$method = $_SERVER['REQUEST_METHOD'];
    // Токен
        $TOKEN = "7715552984:AAElJz73PNpSpuR3WDDvLdAwe2x5l56Wzrs";
    // ID пользователя
        $CHATID = "805085026";


//Script Foreach
$c = true;
if ( $method === 'POST' ) {

    foreach ( $_POST as $key => $value ) {
        if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
            </tr>
            ";
            $telegram_message .= $key." - ".$value."
";
        }
    }






    function curl_get_contents($url)
     {
         $ch = curl_init();
         curl_setopt($ch, CURLOPT_HEADER, 0);
         curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
         curl_setopt($ch, CURLOPT_URL, $url);
         $data = curl_exec($ch);
         curl_close($ch);
         return $data;
     }


// file_put_contents($_SERVER["DOCUMENT_ROOT"]."/!telegram_message.txt", print_r($_POST, 1));
// file_put_contents($_SERVER["DOCUMENT_ROOT"]."/!FILES.txt", print_r($_FILES, 1));


    curl_get_contents("https://api.telegram.org/bot".$TOKEN."/sendMessage?chat_id=" . $CHATID . "&parse_mode=html&text=" . urlencode($telegram_message));


}