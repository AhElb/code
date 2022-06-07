$.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
  // Convert key-value pairs to JSON
  // https://stackoverflow.com/a/39284735/452587
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split('=');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  var loc=data['loc'];


   if (loc == 'RU' || loc == 'BY' || loc == 'KZ' || loc == 'KG' || loc == 'MD' || loc == 'UA' || loc == 'UZ' || loc == 'GE' || loc == 'GS'  || loc == 'AB' ) {
  window.location.replace("ru/index.html");
  }
   else if (loc == 'ES' || loc == 'AR' || loc == 'BO' || loc == 'CL' || loc == 'CO' || loc == 'CR' || loc == 'CU' || loc == 'DO' || loc == 'EC'  || loc == 'SV'  || loc == 'SV'  || loc == 'GQ'  || loc == 'GT'  || loc == 'HN'  || loc == 'MX' || loc == 'NI' || loc == 'PA' || loc == 'PY' || loc == 'PE' || loc == 'UY' || loc == 'VE') {
      window.location.replace("sp/index.html");

  }
});