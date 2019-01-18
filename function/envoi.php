<?php
header( 'content-type: text/html; charset=utf-8' );

if (isset($_POST["nom"]) && isset($_POST["email"]) && isset($_POST["message"]) && isset($_POST["cb"])) 
{


	if (empty($_POST["nom"]) || empty($_POST["email"]) || empty($_POST["message"]) ) 
	{
	  echo json_encode("Les champs marqués * sont obligatoires");
	}
	else 
	{

		if ( !preg_match( " /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/ " , $_POST["email"] ))
		{  echo json_encode("email non valide"); }
		else
		{
			$message = $_POST["nom"]." a envoyé le message suivant : ".$_POST["message"];
			$to = "wikensonsimond@hotmail.com";
			$subject = "email issu de mon formulaire";
			$from = $_POST["email"];
			$headers = "From:" . $from;
		    if(mail($to,$subject,$message, $headers))
            {
			  echo json_encode("email envoyé avec succès");
			}
            else
            {
			  echo json_encode("Erreur sur ce email :") ;
			}
		}
	}
}



?>

