<?php
if ($_REQUEST[where]) {
$where = stripslashes($_REQUEST[where]);
$whereurl = urlencode($where);
// Note - Google key is domain specific!
$location = file("http://maps.google.com/maps/geo?q=$whereurl&output=csv&key=ABQIAAAAvp3__HwvT3VkixIIbsW0axQuKI_6t1bH2P0vC
I_Q8jfpn8qdNBQMnneljxh9czilkau_bYSCXteS_A");
// Sample - $location[0]="200,8,51.369318,-2.133457";
list ($stat,$acc,$north,$east) = explode(",",$location[0]);
$html = "Information for ".htmlspecialchars($where)."
";
$html .= "North: $north, East: $east<br>";
$html .= "Accuracy: $acc, Status: $stat<br>";
} else {
$html = "Space reserved for your report when form completed";
}
?>
<html>

<head>
    <title>Postal Address to Latitude / Longitude</title>
</head>

<body bgcolor="#99CCFF">
    </pre>
    <div align="center">500px;"></div>
    Enter a place name / address and a latitude and longitude will be returned.
    <form method=post>Place: <input type="text" name="where" size="40" />
        <input type=submit value=go></form>
    </div>
</body>

</html>