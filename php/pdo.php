<?php
class connectDb{
	public $pdo;
	public function __construct(){
		$this->pdo = $this->connect();
	}
	public function connect(){
		$user = 'root';
		$pass = '';
		return new PDO('mysql:host=localhost;dbname=coock', $user, $pass, array(\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
	}

	public function getRows($tbl,$where=null){
		$sth = $this->pdo->prepare('SELECT * from '.$tbl.' '.$where);
		$sth->execute();
		return  $sth->fetchAll(PDO::FETCH_OBJ);
	}
}
