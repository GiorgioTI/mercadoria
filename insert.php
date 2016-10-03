<?php
//insert.php
$connect = mysqli_connect("localhost", "root", "", "estoque");
$data = json_decode(file_get_contents("php://input"));
if(count($data) > 0)
{
    $cod_merc = mysqli_real_escape_string($connect, $data->cod_merc);
    $name_merc = mysqli_real_escape_string($connect, $data->name_merc);
    $tipo_merc = mysqli_real_escape_string($connect, $data->tipo_merc);
    $quant_merc = mysqli_real_escape_string($connect, $data->quant_merc);
    $preco_merc = mysqli_real_escape_string($connect, $data->preco_merc);
    $tipo_neg_merc = mysqli_real_escape_string($connect, $data->tipo_neg_merc);


    $query = "INSERT INTO mercadoria(cod_merc, name_merc, tipo_merc, quant_merc, preco_merc, tipo_neg_merc) VALUES 
    ('$cod_merc', '$name_merc','$tipo_merc','$quant_merc','$preco_merc','$tipo_neg_merc')";
    if(mysqli_query($connect, $query))
    {
        echo "Mercadoria cadastrada com Sucesso...";
    }
    else
    {
        echo 'Error';
    }
}
?>