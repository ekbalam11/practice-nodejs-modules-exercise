// Leer README
const os = require('os');

const systemName = os.hostname();
const memoryRam = os.totalmem();
const memoryRamGb = (memoryRam / 1073741824).toFixed(2);
const operatingSystem = os.release();

console.log(systemName);
console.log(memoryRamGb);
console.log(operatingSystem);


