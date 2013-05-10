$(function() {
	
	$("#login").on("click", function() {

		login.loginState("disabled");

		login.auth($("#user").val(), $("#pass").val());

	});

});

var login = {};

login.auth = function(user, pass) {

	$.ajax({
		"url": "/users/checkLogin",
		"dataType": "json",
		"type": "POST",
		"data": {
			"user": $("#user").val(),
			"pass": $("#pass").val()
		},
		"success": function(res) {
			
			if (res.success) {
				
				$("#login_response")
					.removeClass("alert-error")
					.addClass("alert-success")
					.html(res.msg + '  <a href="/users/">View your profile</a>');

			} else {
				
				$("#login_response")
					.removeClass("alert-success")
					.addClass("alert-error")
					.html(res.msg);

				login.loginState("enabled");
			}

		}
	});

};

login.loginState = function(state) {

	if (state == "enabled") {

		$("#login").removeAttr("disabled");
		$("#user").removeAttr("disabled");
		$("#pass").removeAttr("disabled");

	} else if (state == "disabled") {

		$("#login").attr("disabled", "disabled");
		$("#user").attr("disabled", "disabled");
		$("#pass").attr("disabled", "disabled");

	}

}