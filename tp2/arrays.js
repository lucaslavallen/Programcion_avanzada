// Ejercicio 1:
const router = {
    tipo: "Router",
    modelo: "UCG-ULTRA",
    marca: "Ubiquiti",
    puertos: 5,
    velocidad: "1000 Mbps",
    soportaWifi: true
}

// Ejercicio 2: 
const dispositivosRed = [
    {tipo: "Router", marca: "Cisco", modelo: "RV340", precio: 450},
    {tipo: "Switch", marca: "TP-Link", modelo: "TL-SG1024", precio: 180},
    {tipo: "Firewall", marca: "Fortinet", modelo: "FortiGate 40F", precio: 600},
    {tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Lite", precio: 120},
    {tipo: "Router", marca: "MikroTik", modelo: "hAP ac³", precio: 160}
];

// Ejercicio 3: 
const dispositivosRed2 = [
    { tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
    { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
    { tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
    { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
    { tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180 }
];

dispositivosRed2.filter(dispositivo => dispositivo.marca === "Cisco");

// Ejercicio 4: 
const servidores = [
    { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
    { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
    { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
    { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
    { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];

servidores.map(servidor => servidor.ip);

// Ejercicio 5: 
const paquetesDatos = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];

paquetesDatos.filter(paquete => paquete.tamaño > 1000);
paquetesDatos.sort((paquete1, paquete2) => paquete2.prioridad - paquete1.prioridad);

// Ejercicio 6: 
const traficoRed = {
"08:00": 1250, 
"09:00": 1870,
"10:00": 2100,
"11:00": 1950,
"12:00": 1600,
"13:00": 1300,
"14:00": 1700,
"15:00": 2200,
"16:00": 1800,
"17:00": 1500
};

const total = Object.values(traficoRed).reduce((acum, val) => acum + val, 0);
const [horaMax] = Object.entries(traficoRed).reduce((max, actual) => actual[1] > max[1] ? actual : max);

// Ejercicio 7: 
const conexiones = [
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" },
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" },
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" },
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" },
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" },
    { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" },
    { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" },
    { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" }
];


const agrupado = conexiones.reduce((acc, conn) => {
  acc[conn.protocolo] = (acc[conn.protocolo] || 0) + 1;
  return acc;
}, {});

console.log("Conexiones por protocolo:", agrupado);

// Ejercicio 8: 
const dispositivos = [
{ id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
{ id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
{ id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
{ id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
];

const conexionesActivas = [
{ origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 },
{ origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 },
{ origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 }
];

const informeAct = conexionesActivas.map(conexion =>{
    const origen = dispositivos.find(d => d.ip === conexion.origen);
    const destino = dispositivos.find(d => d.ip === conexion.destino);
    return {
        origen: origen.nombre,
        destino: destino.nombre,
        protocolo: conexion.protocolo,
        bytes: conexion.bytes
    };
});

console.log("Informe de actividad de red:", informeAct);

// Ejercicio 9: 
const topologiaRed = {
nodos: [
    { id: "A", tipo: "Router", ubicacion: "Planta 1" },
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" },
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" },
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" },
    { id: "E", tipo: "Router", ubicacion: "Planta 3" }
],
conexiones: [
    { origen: "A", destino: "B", ancho_banda: 1000 },
    { origen: "A", destino: "C", ancho_banda: 1000 },
    { origen: "B", destino: "C", ancho_banda: 100 },
    { origen: "B", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "D", ancho_banda: 100 },
    { origen: "C", destino: "E", ancho_banda: 1000 },
    { origen: "D", destino: "E", ancho_banda: 1000 }
]
};

const conexionesPorNodo = {};

topologiaRed.nodos.forEach(nodo => {
    conexionesPorNodo[nodo.id] = 0;
});

topologiaRed.conexiones.forEach(conexion => {
    conexionesPorNodo[conexion.origen]++;
    conexionesPorNodo[conexion.destino]++;
});

const nodosOrdenados = Object.entries(conexionesPorNodo)
.sort((nodo1, nodo2) => nodo2[1] - nodo1[1] );

const sugerencias = [];

for (const [nodo, cantidad] of Object.entries(conexionesPorNodo)) {
  if (cantidad > 2) {
    sugerencias.push(`Nodo ${nodo} podría necesitar más ancho de banda`);
  }
}
console.log("Conexiones por nodo:", conexionesPorNodo);
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados);
console.log("Sugerencias de optimización:", sugerencias);