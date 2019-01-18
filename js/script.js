$(document).ready(function() {

    //MESSAGE MENTIONS LEGALES
   $('.btn-notice').click(function (e) {
   		e.preventDefault();
       $('#popup2').show();

   });
      //  FERMETURE DU MESSAGE METIONS LEGALES
   $('#close').click(function (e) {
   		e.preventDefault();
       $('#popup2').hide();

   });  


//MESSAGE POLITIQUE DE CONFIDENTIALITES
   $('.btn-privacy').click(function (e) {
   		e.preventDefault();
       $('#privacy').show();

   });

//FERMETURE DE POLITIQUE DE CONFIDENTIALITES
$('#close-privacy').click(function (e) {
   		e.preventDefault();
       $('#privacy').hide();

   });

    
    //CONTROLE FORMULAIRE
    
    $("#submit").click(function(e){
		e.preventDefault();
		var nom = $("#nom").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var cb = $("#cb").is(':checked');
		var myRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
		
        if (!isNaN(nom) || nom.length == 0)
		{
		$("#result").html("le nom ne peut être numérique et est obligatoire ");	
		}
		else
		{
			if (!myRegex.test(email))
			{
			$("#result").html("le mail n'est pas correct");	
			}
			else
			{	if (message.length == 0)
				{
				$("#result").html("le messageaire est obligatoire ");	
				}
				else
				{
					if (!$("#cb").is(':checked'))
					{
					$("#result").html("vous devez valider notre politique de confidentialité des données ");	
					}
					else
					{					
						$.ajax({
						url : '/function/envoi.php',
						type : 'POST',
						data : { "nom" : nom, "email" : email, "message" : message, "cb" : $("#cb").is(':checked') },
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

// CONTROLE POUR LE FORMULAIRE

//function verifForm() {
//    alert('toto');
//    var form1 = document.getElementById('form1');
//    var nom = document.getElementById('nom');
//    var result = document.getElementById('result');
//    var myRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
//    var mail = document.getElementById('email');
//    var message = document.getElementById('message');
//    var cb = document.getElementById('cb');
//    result.innerHTML = "";
//    if (nom.value.length == 0) {
//        result.innerHTML = "Le nom est obligatoire";
//        return false;
//    }
//    if (!isNaN(nom.value)) {
//        result.innerHTML = "Le nom ne peut pas être numérique";
//        return false;
//    }
//    if (!myRegex.test(mail.value)) {
//        result.innerHTML = "Votre mail n'est pas valide";
//        return false;
//    }
//    if (message.value.length == 0) {
//        result.innerHTML = "Veuillez entrer votre message SVP.";
//        return false;
//    }
//    if (cb.checked == false) {
//        result.innerHTML = "Veuillez accepter les termes";
//        return false;
//    }
//        else {
//            cb.removeAttribute('disabled');
//        }
//
//}


function cocher(){
        if(document.getElementById('cb').checked){
            document.getElementById('submit').disabled = '';
        }
        else{
            document.getElementById('submit').disabled = 'disabled';
        }
    }