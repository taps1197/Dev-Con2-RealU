<?php
	$con=mysqli_connect('localhost','root','','election');
	if (mysqli_errno($con))
	{
		die(mysqli_errno($con));
	}
	echo "connection success";
?>