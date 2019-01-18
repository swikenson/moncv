$(document).ready(function() {
$("#valid").click(function(e){
		e.preventDefault();
		var name = $("#name").val();
		var mail = $("#mail").val();
		var comment = $("#comment").val();
		var rgpd = $("#rgpd").is(':checked');
		var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
		if (!isNaN(name) || name.length == 0)
		{
		$("#result").html("le nom ne peut être numérique et est obligatoire ");	
		}
		else
		{
			if (!myRegex.test(mail))
			{
			$("#result").html("le mail n'est pas correct");	
			}
			else
			{	if (comment.length == 0)
				{
				$("#result").html("le commentaire est obligatoire ");	
				}
				else
				{
					if (!$("#rgpd").is(':checked'))
					{
					$("#result").html("vous devez valider notre politique de confidentialité des données ");	
					}
					else
					{					
						$.ajax({
						url : 'http://localhost/aformac2018/formsulaire-ajax/function/envoi.php',
						type : 'POST',
						data : { "name" : name, "mail" : mail, "comment" : comment, "rgpd" : $("#rgpd").is(':checked') },
						dataType : 'json',
						success : function(donnees, statut){ // success est toujours en place, bien sûr !
						$("#result").html(donnees);
						},
						error : function(resultat, statut, erreur){
						$("#result").html("erreur : "+erreur+" status : "+status);	
						}
						});
					}
				}
			}
		}

});
})