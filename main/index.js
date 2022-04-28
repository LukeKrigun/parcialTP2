import { aRecibos } from "../src/aRecibos.js";

import fs from 'fs';


setTimeout(() => {
    console.log('pasaron 7 segundos');
}, 7000);

console.log('Probando el start');



console.log('FOREACH');
aRecibos.forEach(element => console.log(element.cliente, element.importe));

console.log('SORT');
console.log('DE MENOR A MAYOR');
aRecibos.sort((a,b)=>a.importe-b.importe);
console.log(aRecibos);

console.log('DE MAYOR A MENOR');
aRecibos.sort((b,a)=>a.importe-b.importe);
console.log(aRecibos);

console.log('FILTER');
const nuevoArrayClientes = aRecibos.filter(element=>element.cliente.startsWith("R"));
console.log(nuevoArrayClientes);

console.log('MAP');
const nuevoArrayClientes2 = aRecibos.map((aRecibos)=>{return{id:aRecibos.id, numero:aRecibos.numero, element:aRecibos.importe*1.3, cliente:aRecibos.cliente}});
console.log(nuevoArrayClientes2);

console.log('ARCHIVO EN FORMA ASINCRONICA');
fs.writeFileSync('test-archivo', 'Creando un archivo en forma asincrónica...');