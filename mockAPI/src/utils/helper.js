export const getcookie = (name, cookies) => {

  if(!cookies)
  return false
    let cookie = {};
     cookies.split(';').forEach(function(element) {
      let [key,value] = element.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[name];
  }