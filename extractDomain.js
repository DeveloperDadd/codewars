/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
*/

function domainName(url){
  let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');

  // Remove path and query string
  domain = domain.split('/')[0];

  // Split by dots and get the first part (base domain)
  const parts = domain.split('.');
  if (parts.length > 1) {
    domain = parts[0];
  }

  return domain;
}
