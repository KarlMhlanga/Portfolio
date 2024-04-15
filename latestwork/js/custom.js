function calculateBasicPrice(price) {
	$('#basicPrice').text(price);
}

function calculateProPrice(price) {
	$('#proPrice').text(price);
}


$(document).ready(function() {

	$('#basicHostingSelect').on('change', function() {
		switch($('#basicHostingSelect').val()){
			case "3gbbasic": calculateBasicPrice("R50"); break;
			case "5gbbasic": calculateBasicPrice("R75"); break;
			case "10gbbasic": calculateBasicPrice("R100"); break;
			case "20gbbasic": calculateBasicPrice("R175"); break;
			case "50gbbasic": calculateBasicPrice("R450"); break;
		}
	});

	$('#proHostingSelect').on('change', function() {
		switch($('#proHostingSelect').val()){
			case "2gbpro": calculateProPrice("R100"); break;
			case "3gbpro": calculateProPrice("R200"); break;
			case "5gbpro": calculateProPrice("R350"); break;
			case "10gbpro": calculateProPrice("R500"); break;
			case "20gbpro": calculateProPrice("R700"); break;
			case "50gbpro": calculateProPrice("R1000"); break;
		}
	});

});

$("a.my-tool-tip").tooltip();