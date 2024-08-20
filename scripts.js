// Calculadora de Distancia
function calcularDistancia() {
    const velocidad = parseFloat(document.getElementById('velocidad').value);
    const tiempo = parseFloat(document.getElementById('tiempo').value);
    
    if (!isNaN(velocidad) && !isNaN(tiempo)) {
        const distancia = velocidad * tiempo;
        document.getElementById('resultadoMovimientos').innerText = `Distancia recorrida: ${distancia} metros`;
    } else {
        document.getElementById('resultadoMovimientos').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Velocidad Angular
function calcularVelocidadAngular() {
    const frecuencia = parseFloat(document.getElementById('frecuencia').value);
    
    if (!isNaN(frecuencia)) {
        const velocidadAngular = 2 * Math.PI * frecuencia;
        document.getElementById('resultadoVelocidadAngular').innerText = `Velocidad angular: ${velocidadAngular.toFixed(2)} rad/s`;
    } else {
        document.getElementById('resultadoVelocidadAngular').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Calculadora de Movimiento Rectilíneo Uniforme (MRU)
function calcularMRU() {
    const velocidad = parseFloat(document.getElementById('mru_velocidad').value);
    const tiempo = parseFloat(document.getElementById('mru_tiempo').value);

    if (!isNaN(velocidad) && !isNaN(tiempo)) {
        const distancia = velocidad * tiempo;
        document.getElementById('resultadoMRU').innerText = `Distancia recorrida: ${distancia} metros`;
    } else {
        document.getElementById('resultadoMRU').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Movimiento Rectilíneo Uniformemente Acelerado (MRUA)
function calcularMRUA() {
    const aceleracion = parseFloat(document.getElementById('mrua_aceleracion').value);
    const tiempo = parseFloat(document.getElementById('mrua_tiempo').value);

    if (!isNaN(aceleracion) && !isNaN(tiempo)) {
        const velocidadFinal = aceleracion * tiempo;
        document.getElementById('resultadoMRUA').innerText = `Velocidad final: ${velocidadFinal} m/s`;
    } else {
        document.getElementById('resultadoMRUA').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Conversión de Rad/s a RPM
function convertirRadSRpm() {
    const rad_s = parseFloat(document.getElementById('rad_s').value);

    if (!isNaN(rad_s)) {
        const rpm = rad_s * (60 / (2 * Math.PI));
        document.getElementById('resultadoConversionRadSRpm').innerText = `RPM: ${rpm.toFixed(2)} rpm`;
    } else {
        document.getElementById('resultadoConversionRadSRpm').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Calculadora de Densidad
function calcularDensidad() {
    const masa = parseFloat(document.getElementById('masa').value);
    const volumen = parseFloat(document.getElementById('volumen').value);

    if (!isNaN(masa) && !isNaN(volumen)) {
        const densidad = masa / volumen;
        document.getElementById('resultadoDensidad').innerText = `Densidad: ${densidad.toFixed(2)} kg/m³`;
    } else {
        document.getElementById('resultadoDensidad').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Constantes
const k = 8.99e9; // N·m²/C²
const u0 = 4 * Math.PI * 1e-7; // T·m/A

// Calculadora de Fuerza Magnética sobre una Carga en Movimiento
function calcularFuerzaMagnetica() {
    const carga = parseFloat(document.getElementById('carga').value);
    const velocidad = parseFloat(document.getElementById('velocidad').value);
    const campoMagnetico = parseFloat(document.getElementById('campoMagnetico').value);

    if (!isNaN(carga) && !isNaN(velocidad) && !isNaN(campoMagnetico)) {
        const fuerza = carga * velocidad * campoMagnetico;
        document.getElementById('resultadoFuerzaMagnetica').innerText = `Fuerza Magnética: ${fuerza.toFixed(2)} N`;
    } else {
        document.getElementById('resultadoFuerzaMagnetica').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Fuerza entre dos Corrientes
function calcularFuerzaEntreCorrientes() {
    const corriente1 = parseFloat(document.getElementById('corriente1').value);
    const corriente2 = parseFloat(document.getElementById('corriente2').value);
    const distancia = parseFloat(document.getElementById('distanciaCorrientes').value);

    if (!isNaN(corriente1) && !isNaN(corriente2) && !isNaN(distancia) && distancia > 0) {
        const fuerza = (u0 / (2 * Math.PI)) * ((corriente1 * corriente2) / distancia);
        document.getElementById('resultadoFuerzaEntreCorrientes').innerText = `Fuerza entre Corrientes: ${fuerza.toFixed(2)} N/m`;
    } else {
        document.getElementById('resultadoFuerzaEntreCorrientes').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Fuerza Eléctrica entre dos Cargas
function calcularFuerzaElectrica() {
    const carga1 = parseFloat(document.getElementById('carga1').value);
    const carga2 = parseFloat(document.getElementById('carga2').value);
    const distancia = parseFloat(document.getElementById('distanciaCargas').value);

    if (!isNaN(carga1) && !isNaN(carga2) && !isNaN(distancia) && distancia > 0) {
        const fuerza = (k * carga1 * carga2) / (distancia * distancia);
        document.getElementById('resultadoFuerzaElectrica').innerText = `Fuerza Eléctrica: ${fuerza.toFixed(2)} N`;
    } else {
        document.getElementById('resultadoFuerzaElectrica').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Campo Eléctrico de una Carga
function calcularCampoElectrico() {
    const carga = parseFloat(document.getElementById('cargaCampo').value);
    const distancia = parseFloat(document.getElementById('distanciaCampo').value);

    if (!isNaN(carga) && !isNaN(distancia) && distancia > 0) {
        const campoElectrico = (k * carga) / (distancia * distancia);
        document.getElementById('resultadoCampoElectrico').innerText = `Campo Eléctrico: ${campoElectrico.toFixed(2)} N/C`;
    } else {
        document.getElementById('resultadoCampoElectrico').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Potencial Eléctrico de una Carga
function calcularPotencialElectrico() {
    const carga = parseFloat(document.getElementById('cargaPotencial').value);
    const distancia = parseFloat(document.getElementById('distanciaPotencial').value);

    if (!isNaN(carga) && !isNaN(distancia) && distancia > 0) {
        const potencial = (k * carga) / distancia;
        document.getElementById('resultadoPotencialElectrico').innerText = `Potencial Eléctrico: ${potencial.toFixed(2)} V`;
    } else {
        document.getElementById('resultadoPotencialElectrico').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Capacitancia de un Condensador
function calcularCapacitancia() {
    const carga = parseFloat(document.getElementById('cargaCapacitor').value);
    const voltaje = parseFloat(document.getElementById('voltajeCapacitor').value);

    if (!isNaN(carga) && !isNaN(voltaje) && voltaje > 0) {
        const capacitancia = carga / voltaje;
        document.getElementById('resultadoCapacitancia').innerText = `Capacitancia: ${capacitancia.toFixed(2)} F`;
    } else {
        document.getElementById('resultadoCapacitancia').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Corriente en un Circuito
function calcularCorriente() {
    const voltaje = parseFloat(document.getElementById('voltajeCorriente').value);
    const resistencia = parseFloat(document.getElementById('resistencia').value);

    if (!isNaN(voltaje) && !isNaN(resistencia) && resistencia > 0) {
        const corriente = voltaje / resistencia;
        document.getElementById('resultadoCorriente').innerText = `Corriente: ${corriente.toFixed(2)} A`;
    } else {
        document.getElementById('resultadoCorriente').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Calculadora de Potencia en un Circuito
function calcularPotencia() {
    const voltaje = parseFloat(document.getElementById('voltajePotencia').value);
    const corriente = parseFloat(document.getElementById('corrientePotencia').value);

    if (!isNaN(voltaje) && !isNaN(corriente)) {
        const potencia = voltaje * corriente;
        document.getElementById('resultadoPotencia').innerText = `Potencia: ${potencia.toFixed(2)} W`;
    } else {
        document.getElementById('resultadoPotencia').innerText = 'Por favor, ingresa valores válidos.';
    }
}
// Ley de Biot-Savart
function calculateBiotSavart() {
    const current = parseFloat(document.getElementById('current').value);
    const length = parseFloat(document.getElementById('length').value);
    const distance = parseFloat(document.getElementById('distance').value);

    if (isNaN(current) || isNaN(length) || isNaN(distance)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const magneticField = (current * length) / (4 * Math.PI * Math.pow(distance, 2));
    document.getElementById('biot-savart-result').innerText = `Campo Magnético: ${magneticField.toFixed(4)} T`;
}

// Fuerza Magnética
function calculateMagneticForce() {
    const charge = parseFloat(document.getElementById('charge').value);
    const velocity = parseFloat(document.getElementById('velocity').value);
    const magneticField = parseFloat(document.getElementById('magnetic-field').value);

    if (isNaN(charge) || isNaN(velocity) || isNaN(magneticField)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const force = charge * velocity * magneticField;
    document.getElementById('fuerza-magnetica-result').innerText = `Fuerza Magnética: ${force.toFixed(4)} N`;
}

// Ley de Ampère
function calculateAmpereLaw() {
    const current = parseFloat(document.getElementById('current-ampere').value);
    const perimeter = parseFloat(document.getElementById('perimeter').value);

    if (isNaN(current) || isNaN(perimeter)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const magneticField = (current) / (perimeter);
    document.getElementById('ley-ampere-result').innerText = `Campo Magnético: ${magneticField.toFixed(4)} T`;
}

// Ley de Gauss en el Magnetismo
function calculateGaussLaw() {
    const magneticFlux = parseFloat(document.getElementById('magnetic-flux').value);
    const area = parseFloat(document.getElementById('area').value);

    if (isNaN(magneticFlux) || isNaN(area)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const magneticField = magneticFlux / area;
    document.getElementById('ley-gauss-magnetismo-result').innerText = `Campo Magnético: ${magneticField.toFixed(4)} T`;
}
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        if (sideMenu.style.left === '0px') {
            sideMenu.style.left = '-250px';
            body.style.marginLeft = '0';
        } else {
            sideMenu.style.left = '0px';
            body.style.marginLeft = '250px';
        }
    });

    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            sideMenu.style.left = '-250px';
            body.style.marginLeft = '0';
        }
    });
});
