<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');

$i = 0;
while ($i < 10) {  // Limitar a 10 eventos para evitar la ejecución indefinida
    echo "data: " . $i++ . "\n\n";
    ob_flush();
    flush();
    sleep(1);
}
?>


