const os = require('node:os');

console.log('Informacion del sistema operativo');
console.log('_________________________________');

console.log('Nombre del sistema operativo', os.platform());
console.log('Version del sistema operativo', os.release());
console.log('Arquitectura del sistema operativo', os.arch());
console.log('CPUs del sistema operativo', os.cpus()); // <- con esto vamos a poder escalar procesos en node.
console.log('Memoria libre', os.freemem() / 1024 / 1024);
console.log('Memoria total', os.totalmem() / 1024 / 1024);
console.log('Memoria total', os.uptime() / 60 / 60);