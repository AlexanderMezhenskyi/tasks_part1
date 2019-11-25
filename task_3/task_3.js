const searchParams = window.location.search.substring(1);
const transformedParamsToObject = JSON.parse('{"' + searchParams.replace(/&/g, '","').replace(/=/g,'":"') + '"}');