


// Ejercicio 1:
const router = {
  modelo: "AX3000",
  marca: "TP-Link",
  puertos: 4,
  velocidad: 3000,
  soportaWifi: true
};
console.log("Ejercicio 1:", router);

// Ejercicio 2:
const dispositivosRed = [
  { tipo: "Router", marca: "Cisco", modelo: "1941", precio: 1200 },
  { tipo: "Switch", marca: "TP-Link", modelo: "TL-SG108", precio: 150 },
  { tipo: "Firewall", marca: "Cisco", modelo: "ASA 5506-X", precio: 2500 },
  { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AP AC Pro", precio: 320 },
  { tipo: "Router", marca: "TP-Link", modelo: "Archer C7", precio: 180 }
];
console.log("Ejercicio 2:", dispositivosRed);

// Ejercicio 3:
const soloCisco = dispositivosRed.filter(d => d.marca === "Cisco");
console.log("Ejercicio 3 (Cisco):", soloCisco);

// Ejercicio 4:
const servidores = [
  { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" },
  { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" },
  { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" },
  { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" },
  { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" }
];
const ips = servidores.map(s => s.ip);
console.log("Ejercicio 4:", ips);

// Ejercicio 5:
const paquetesDatos = [
  { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 },
  { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 },
  { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 },
  { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 },
  { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 }
];
const filtradosOrdenados = paquetesDatos
  .filter(p => p.tamaño > 1000)
  .sort((a, b) => b.prioridad - a.prioridad);
console.log("Ejercicio 5:", filtradosOrdenados);

// Ejercicio 6:
const traficoRed = {
  "08:00": 1250, "09:00": 1870, "10:00": 2100,
  "11:00": 1950, "12:00": 1600, "13:00": 1300,
  "14:00": 1700, "15:00": 2200, "16:00": 1800,
  "17:00": 1500
};
const total = Object.values(traficoRed).reduce((a, b) => a + b, 0);
const horaMax = Object.entries(traficoRed).reduce((max, actual) => actual[1] > max[1] ? actual : max);
console.log("Ejercicio 6: Total MB =", total, " | Hora pico:", horaMax[0]);

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
const conexionesPorProtocolo = {};
conexiones.forEach(c => {
  conexionesPorProtocolo[c.protocolo] = (conexionesPorProtocolo[c.protocolo] || 0) + 1;
});
console.log("Ejercicio 7:", conexionesPorProtocolo);

// Ejercicio 8:
const alertas = [
  { id: 1, nivel: "alto", mensaje: "Intrusión detectada" },
  { id: 2, nivel: "medio", mensaje: "Intento de acceso fallido" },
  { id: 3, nivel: "alto", mensaje: "Malware detectado" }
];
const mensajesAdmin = alertas
  .filter(a => a.nivel === "alto")
  .map(a => `ALERTA CRÍTICA: ${a.mensaje}`);
console.log("Ejercicio 8:", mensajesAdmin);

// Ejercicio 9:
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
const informeActividad = conexionesActivas.map(con => {
  const origen = dispositivos.find(d => d.ip === con.origen);
  const destino = dispositivos.find(d => d.ip === con.destino);
  return {
    origen: origen?.nombre,
    destino: destino?.nombre,
    protocolo: con.protocolo,
    bytes: con.bytes
  };
});
console.log("Ejercicio 9:", informeActividad);

// Ejercicio 10:
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
const conexionesPorNodo2 = {};
topologiaRed.nodos.forEach(n => conexionesPorNodo2[n.id] = 0);
topologiaRed.conexiones.forEach(c => {
  conexionesPorNodo2[c.origen]++;
  conexionesPorNodo2[c.destino]++;
});
const nodosOrdenados = Object.entries(conexionesPorNodo2)
  .sort((a, b) => b[1] - a[1]);
const sugerencias = nodosOrdenados
  .filter(([id, conexiones]) => conexiones > 2)
  .map(([id]) => `Nodo ${id} podría necesitar mayor ancho de banda`);
console.log("Ejercicio 10:", { conexionesPorNodo2, nodosOrdenados, sugerencias });
