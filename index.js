const child_process = require('child_process')
let number = 59174228325;
let message = "PÓNGANSE EN CONTACTO CON NOSOTROS";
let urlwhatsapp = `${"https://wa.me/"}${number}?text=${message}`;
let urlwhatsapp2= "https://api.whatsapp.com/send?phone=1111111111&text=HolaMundo"
console.log(message);
let start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
child_process.exec(start + ' ' + urlwhatsapp2);