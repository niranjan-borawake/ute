(function(_, $) {
	window.UTE = {
		start : function() {
			var defaultTemplate = "<div>\n\t<span>Hello</span>\n\t<span><%=data%></span>\n</div>";
			var defaultData = '{"data" : "World...!"}';
			this.bindEvents();
			$('#_TE-template').focus();
			$('#_TE-template').val(defaultTemplate);
			$('#_TE-data').val(defaultData);
			$('#formatJSON').click();
			this.updateOutput();
		},
		bindEvents : function() {
			var self = this;
			$('#_TE-template, #_TE-data').keyup(function() {
				self.updateOutput();
			});
			$('#formatJSON').click(
					function() {
						try {
							$('#_TE-data').val()
									&& $('#_TE-data').val(
											vkbeautify.json($('#_TE-data')
													.val()));
							$('#_TE-data').focus();
						} catch (e) {
							console.log('Invalid JSON..');
						}
					});
			$('#clearJSON').click(function() {
				$('#_TE-data').val('');
				$('#_TE-data').focus();
				self.updateOutput();
			});

			$('#clearTemplate').click(function() {
				$('#_TE-template').val('');
				$('#_TE-template').focus();
				self.updateOutput();
			});

		},
		updateOutput : function(){
			var template = this.getRawTemplate();
			var data = this.getTemplateData();
			this.showOutput(template, data);
		},
		getRawTemplate : function() {
			return $('#_TE-template').val() || "";
		},
		getTemplateData : function() {
			return $('#_TE-data').val() || "";
		},
		showOutput : function(template, data) {
			var outputText;
			try {
				data = data && JSON.parse(data);
			} catch (e) {
				$('#_TE-output').addClass('error').text(
						"JSON Data Error : \n\n" + e);
				return;
			}
			if (!data) {
				data = "{}";
			}
			try {
				outputText = vkbeautify.xml(_.template(template, data));
			} catch (e) {
				$('#_TE-output').addClass('error').text(
						"Template Error : \n\n" + e);
				return;
			}
			$('#_TE-output').removeClass('prettyprinted').text(outputText);
			prettyPrint();
		}
	};
})(_, Zepto);