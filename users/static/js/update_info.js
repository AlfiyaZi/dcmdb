$(function() {
	
	//disabled email change for now
	$("#email").attr("disabled", "enabled");

	$("#save_info").on("click", function(e) {

		e.preventDefault();

		$.ajax({
			"url": "/users/saveInfo",
			"type": "POST",
			"dataType": "json",
			"data": {
				"first_name": $("#first_name").val(),
				"last_name": $("#last_name").val(),
				"email": $("#email").val()
			},
			"success": function(res) {

				if (res.success) {
					$("#info_response").removeClass("alert-info").addClass("alert-success").html(res.msg);
				} else {
					$("#info_response").removeClass("alert-info").addClass("alert-danger").html(res.msg);
				}

			}
		});

	});

});
