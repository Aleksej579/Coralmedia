<?php

	$rating_tableName = 'ratings';
	$rating_unitwidth = 15;
	$rating_dbname  = 'coral_lp_table';
	$units=5;

function connect(){
	$host="localhost";
	$uname="coral_lp";
	$pass="8V0a0Z9u";
	$rating_dbname = 'coral_lp_table';

	$con = mysql_connect($host,$uname,$pass);

	if (!$con) {
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db($rating_dbname, $con);

}
