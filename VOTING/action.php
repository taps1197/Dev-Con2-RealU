<?php
	session_start();
	if(isset($_SESSION["userid"]))
	{
		header('location:aadhaarlog.html');
	}
	if(isset($_REQUEST["b1"]))
	{
		include 'db.php';
		$userid=strip_tags($_REQUEST["userid"]);
		$aadharcard=strip_tags($_REQUEST["aadharcard"]);
		$faceid=strip_tags($_REQUEST["faceid"]);
		$userid=chop(mysqli_real_escape_string($con,$userid));
		$aadharcard=chop(mysqli_real_escape_string($con,$aadharcard));
		$faceid=chop(mysqli_real_escape_string($con,$faceid));
	}
	echo "userid = ".$userid. "aadharcard = ".$aadharcard. "faceid = ".$faceid ;
?>