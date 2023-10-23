//Given a first and last name, return the first intial of the first and last name capitalized with a "." in between. 

function abbrevName(name){
  name = name.split("");
  let fullName = name[0].toUpperCase() +"."
  for (let i = 0; i < name.length; i++) {
    name[i - 1] === " " ? fullName += name[i].toUpperCase() : false;
  }
  return fullName;
}
