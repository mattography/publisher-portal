(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.publishers.php",
		"table": "#publishers",
		"fields": [
			{
				"label": "Publisher",
				"name": "publisher",
				"type": "text"
			},
			{
				"label": "Integration",
				"name": "integration",
				"type": "select",
				"ipOpts": [
					{
						"label": "Custom",
						"value": "Custom"
					},
					{
						"label": "Turnkey",
						"value": "Turnkey"
					}
				]
			},
			{
				"label": "Contact",
				"name": "contact",
				"type": "text"
			},
			{
				"label": "Status",
				"name": "status",
				"type": "select",
				"ipOpts": [
					{
						"label": "Active",
						"value": "Active"
					},
					{
						"label": "Disabled",
						"value": "Disabled"
					}
				]
			},
			{
				"label": "website",
				"name": "website",
				"type": "text"
			}
		]
	} );

	$('#publishers').dataTable( {
		"dom": "Tfrtip",
		"ajax": "php/table.publishers.php",
		"columns": [
			{
				"data": "id"
			},
			{
				"data": "publisher"
			},
			{
				"data": "integration"
			},
			{
				"data": "contact"
			},
			{
				"data": "status"
			},
			{
				"data": "website"
			}
		],
		"tableTools": {
			"sRowSelect": "os",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor },
				{ "sExtends": "editor_edit",   "editor": editor },
				{ "sExtends": "editor_remove", "editor": editor }
			]
		}
	} );
} );

}(jQuery));