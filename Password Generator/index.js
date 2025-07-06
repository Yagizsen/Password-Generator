function generatePassword(lowerCase,upperCase,symbols ,numbers){
    const lowerCaseChars="qwertyuıopasdfghjklzxcvbnm";
    const upperCaseChars="QWERTYUIOPASDFGHJKLZXCVBNM";
    const symbolsChars="!'^+%&/()=?";
    const numbersChars="1234567890";


    let allowedChars="";
    let password="";
allowedChars+= includeLower? lowerCaseChars:"";
allowedChars+= includeNumbers? numbersChars:"";
allowedChars+= includeSymbols? symbolsChars:"";
allowedChars+= includeUppper? upperCaseChars:"";

if(length<=0){
return '(password length must be longer)'
}
if(allowedChars===0){
    return '(no valid chars)'
}
for(let i=0;i<length;i++){
    const randomIndex= Math.floor(Math.random() * allowedChars.length);
    password+= allowedChars[randomIndex]
}
return password;

}

const length=12;
const includeLower=true;
const includeUppper=true;
const includeSymbols=true;
const includeNumbers=true;

const password=generatePassword(
    includeLower,includeUppper,includeSymbols,includeNumbers
);

console.log(`Generated password:${password}`)