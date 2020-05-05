<?php 
include  './pdo.php';
if(isset($_GET['cat_id']) && is_numeric($_GET['cat_id']) && $_GET['cat_id'] > 0){	
$data = (new connectDb)->getRows('items','WHERE category_id="'.$_GET['cat_id'].'"');
echo json_encode($data);
}elseif($_GET['type'] == 'category'){
$data = (new connectDb)->getRows('category');
echo json_encode($data);
}else{
echo json_encode([]);
} 