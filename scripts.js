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

// Conversión de RPM a Rad/s
function convertirRpmARadS() {
    const rpm = parseFloat(document.getElementById('rpm').value);

    if (!isNaN(rpm)) {
        const rad_s = rpm * (2 * Math.PI / 60);
        document.getElementById('resultadoConversionRpmARadS').innerText = `Rad/s: ${rad_s.toFixed(2)} rad/s`;
    } else {
        document.getElementById('resultadoConversionRpmARadS').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Velocidad Angular a Frecuencia
function convertirVelocidadAngularAFrecuencia() {
    const velocidadAngular = parseFloat(document.getElementById('velocidadAngular').value);

    if (!isNaN(velocidadAngular)) {
        const frecuencia = velocidadAngular / (2 * Math.PI);
        document.getElementById('resultadoConversionVelocidadAngularAFrecuencia').innerText = `Frecuencia: ${frecuencia.toFixed(2)} Hz`;
    } else {
        document.getElementById('resultadoConversionVelocidadAngularAFrecuencia').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Frecuencia a Velocidad Angular
function convertirFrecuenciaAVelocidadAngular() {
    const frecuencia = parseFloat(document.getElementById('frecuenciaAngular').value);

    if (!isNaN(frecuencia)) {
        const velocidadAngular = 2 * Math.PI * frecuencia;
        document.getElementById('resultadoConversionFrecuenciaAVelocidadAngular').innerText = `Velocidad Angular: ${velocidadAngular.toFixed(2)} rad/s`;
    } else {
        document.getElementById('resultadoConversionFrecuenciaAVelocidadAngular').innerText = 'Por favor, ingresa un valor válido.';
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

// Conversión de Capacitancia
function convertirCapacitancia() {
    const capacitancia = parseFloat(document.getElementById('capacitancia').value);

    if (!isNaN(capacitancia)) {
        const capacitancia_uF = capacitancia * 1e6;
        const capacitancia_nF = capacitancia * 1e9;
        const capacitancia_pF = capacitancia * 1e12;

        document.getElementById('resultadoCapacitanciaConversion').innerText = `Capacitancia: ${capacitancia.toFixed(2)} F\n` +
            `${capacitancia_uF.toFixed(2)} μF\n` +
            `${capacitancia_nF.toFixed(2)} nF\n` +
            `${capacitancia_pF.toFixed(2)} pF`;
    } else {
        document.getElementById('resultadoCapacitanciaConversion').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Resistencia
function convertirResistencia() {
    const resistencia = parseFloat(document.getElementById('resistencia').value);

    if (!isNaN(resistencia)) {
        const resistencia_kOhm = resistencia / 1e3;
        const resistencia_MOhm = resistencia / 1e6;

        document.getElementById('resultadoResistenciaConversion').innerText = `Resistencia: ${resistencia.toFixed(2)} Ω\n` +
            `${resistencia_kOhm.toFixed(2)} kΩ\n` +
            `${resistencia_MOhm.toFixed(2)} MΩ`;
    } else {
        document.getElementById('resultadoResistenciaConversion').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Calculadora de Energía Almacenada en un Condensador
function calcularEnergiaCondensador() {
    const capacitancia = parseFloat(document.getElementById('capacitanciaEnergia').value);
    const voltaje = parseFloat(document.getElementById('voltajeEnergia').value);

    if (!isNaN(capacitancia) && !isNaN(voltaje) && voltaje > 0) {
        const energia = 0.5 * capacitancia * Math.pow(voltaje, 2);
        document.getElementById('resultadoEnergiaCondensador').innerText = `Energía Almacenada: ${energia.toFixed(2)} J`;
    } else {
        document.getElementById('resultadoEnergiaCondensador').innerText = 'Por favor, ingresa valores válidos.';
    }
}

// Conversión de Energía Almacenada
function convertirEnergia() {
    const energia = parseFloat(document.getElementById('energia').value);

    if (!isNaN(energia)) {
        const energia_mJ = energia * 1e3;
        const energia_kJ = energia / 1e3;
        const energia_MJ = energia / 1e6;

        document.getElementById('resultadoEnergiaConversion').innerText = `Energía: ${energia.toFixed(2)} J\n` +
            `${energia_mJ.toFixed(2)} mJ\n` +
            `${energia_kJ.toFixed(2)} kJ\n` +
            `${energia_MJ.toFixed(2)} MJ`;
    } else {
        document.getElementById('resultadoEnergiaConversion').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Conversión de Voltaje
function convertirVoltaje() {
    const voltaje = parseFloat(document.getElementById('voltaje').value);

    if (!isNaN(voltaje)) {
        const voltaje_mV = voltaje * 1e3;
        const voltaje_kV = voltaje / 1e3;

        document.getElementById('resultadoVoltajeConversion').innerText = `Voltaje: ${voltaje.toFixed(2)} V\n` +
            `${voltaje_mV.toFixed(2)} mV\n` +
            `${voltaje_kV.toFixed(2)} kV`;
    } else {
        document.getElementById('resultadoVoltajeConversion').innerText = 'Por favor, ingresa un valor válido.';
    }
}

// Función para llamar las calculadoras
function ejecutarCalculos() {
    calcularDistancia();
    calcularVelocidadAngular();
    convertirRadSRpm();
    convertirRpmARadS();
    convertirVelocidadAngularAFrecuencia();
    convertirFrecuenciaAVelocidadAngular();
    calcularDensidad();
    calcularFuerzaMagnetica();
    calcularFuerzaEntreCorrientes();
    calcularFuerzaElectrica();
    calcularCampoElectrico();
    calcularPotencialElectrico();
    calcularCapacitancia();
    convertirCapacitancia();
    convertirResistencia();
    calcularEnergiaCondensador();
    convertirEnergia();
    convertirVoltaje();
}
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('side-menu');
    menu.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    menuToggle.addEventListener('click', function() {
        sideMenu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            sideMenu.classList.remove('active');
        }
    });
});
