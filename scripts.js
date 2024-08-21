document.addEventListener('DOMContentLoaded', function () {
    // Manejo del menú lateral
    const menuButton = document.querySelector('header button');
    const sideMenu = document.getElementById('side-menu');

    menuButton.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });

    // Función para obtener valor de input
    function obtenerValor(id) {
        const valor = parseFloat(document.getElementById(id).value);
        return isNaN(valor) ? 0 : valor;
    }

    // Calcular Campo Magnético
    function calcularCampoMagnetico() {
        const corriente = obtenerValor('corriente');
        const distancia = obtenerValor('distancia');
        if (distancia === 0) {
            alert('La distancia no puede ser cero.');
            return;
        }
        const campoMagnetico = (0.000001256637061 * corriente) / distancia;
        document.getElementById('resultado-campo-magnetico').textContent = `Campo Magnético: ${campoMagnetico.toFixed(6)} T`;
    }

    // Calcular Campo Eléctrico
    function calcularCampoElectrico() {
        const carga = obtenerValor('carga');
        const distancia = obtenerValor('distancia-campo-electrico');
        if (distancia === 0) {
            alert('La distancia no puede ser cero.');
            return;
        }
        const campoElectrico = (8.9875517923e9 * carga) / (distancia * distancia);
        document.getElementById('resultado-campo-electrico').textContent = `Campo Eléctrico: ${campoElectrico.toFixed(2)} N/C`;
    }

    // Calcular Resistencia
    function calcularResistencia() {
        const voltaje = obtenerValor('voltaje');
        const corriente = obtenerValor('corriente-resistencia');
        if (corriente === 0) {
            alert('La corriente no puede ser cero.');
            return;
        }
        const resistencia = voltaje / corriente;
        document.getElementById('resultado-resistencia').textContent = `Resistencia: ${resistencia.toFixed(2)} Ω`;
    }

    // Calcular Potencia
    function calcularPotencia() {
        const voltaje = obtenerValor('voltaje-potencia');
        const corriente = obtenerValor('corriente-potencia');
        const potencia = voltaje * corriente;
        document.getElementById('resultado-potencia').textContent = `Potencia: ${potencia.toFixed(2)} W`;
    }

    // Calcular Capacitancia
    function calcularCapacitancia() {
        const carga = obtenerValor('carga-capacitancia');
        const voltaje = obtenerValor('voltaje-capacitancia');
        if (voltaje === 0) {
            alert('El voltaje no puede ser cero.');
            return;
        }
        const capacitancia = carga / voltaje;
        document.getElementById('resultado-capacitancia').textContent = `Capacitancia: ${capacitancia.toFixed(2)} F`;
    }

    // Calcular Energía Almacenada en un Capacitor
    function calcularEnergiaCapacitor() {
        const capacitancia = obtenerValor('capacitancia-energia');
        const voltaje = obtenerValor('voltaje-energia');
        const energia = 0.5 * capacitancia * Math.pow(voltaje, 2);
        document.getElementById('resultado-energia-capacitor').textContent = `Energía: ${energia.toFixed(2)} J`;
    }

    // Calcular Diferencia de Potencial
    function calcularDiferenciaPotencial() {
        const trabajo = obtenerValor('trabajo');
        const carga = obtenerValor('carga-diferencia');
        if (carga === 0) {
            alert('La carga no puede ser cero.');
            return;
        }
        const diferenciaPotencial = trabajo / carga;
        document.getElementById('resultado-diferencia-potencial').textContent = `Diferencia de Potencial: ${diferenciaPotencial.toFixed(2)} V`;
    }

    // Calcular Flujo Eléctrico
    function calcularFlujoElectrico() {
        const campoElectrico = obtenerValor('campo-electrico-flujo');
        const area = obtenerValor('area-flujo');
        const flujoElectrico = campoElectrico * area;
        document.getElementById('resultado-flujo-electrico').textContent = `Flujo Eléctrico: ${flujoElectrico.toFixed(2)} Nm²/C`;
    }

    // Calcular Fuerza Magnética
    function calcularFuerzaMagnetica() {
        const carga = obtenerValor('carga-fuerza');
        const velocidad = obtenerValor('velocidad');
        const campoMagnetico = obtenerValor('campo-magnetico-fuerza');
        const fuerzaMagnetica = carga * velocidad * campoMagnetico;
        document.getElementById('resultado-fuerza-magnetica').textContent = `Fuerza Magnética: ${fuerzaMagnetica.toFixed(2)} N`;
    }

    // Calcular Fuerza Electromotriz
    function calcularFuerzaElectromotriz() {
        const corriente = obtenerValor('corriente-fem');
        const resistencia = obtenerValor('resistencia-fem');
        const fem = corriente * resistencia;
        document.getElementById('resultado-fem').textContent = `Fuerza Electromotriz: ${fem.toFixed(2)} V`;
    }

    // Calcular Resistencia en Serie
    function calcularResistenciaSerie() {
        const resistencias = [
            obtenerValor('resistencia1'),
            obtenerValor('resistencia2'),
            obtenerValor('resistencia3')
        ];
        const resistenciaTotal = resistencias.reduce((total, r) => total + r, 0);
        document.getElementById('resultado-resistencia-serie').textContent = `Resistencia en Serie: ${resistenciaTotal.toFixed(2)} Ω`;
    }

    // Calcular Resistencia en Paralelo
    function calcularResistenciaParalelo() {
        const resistencias = [
            obtenerValor('resistencia1-paralelo'),
            obtenerValor('resistencia2-paralelo'),
            obtenerValor('resistencia3-paralelo')
        ];
        const resistenciaTotal = 1 / resistencias.reduce((total, r) => total + 1 / r, 0);
        document.getElementById('resultado-resistencia-paralelo').textContent = `Resistencia en Paralelo: ${resistenciaTotal.toFixed(2)} Ω`;
    }

    // Calcular Voltaje
    function calcularVoltaje() {
        const corriente = obtenerValor('corriente-voltaje');
        const resistencia = obtenerValor('resistencia-voltaje');
        const voltaje = corriente * resistencia;
        document.getElementById('resultado-voltaje').textContent = `Voltaje: ${voltaje.toFixed(2)} V`;
    }

    // Asignar eventos a los botones de cálculo
    document.getElementById('calcular-campo-magnetico').addEventListener('click', calcularCampoMagnetico);
    document.getElementById('calcular-campo-electrico').addEventListener('click', calcularCampoElectrico);
    document.getElementById('calcular-resistencia').addEventListener('click', calcularResistencia);
    document.getElementById('calcular-potencia').addEventListener('click', calcularPotencia);
    document.getElementById('calcular-capacitancia').addEventListener('click', calcularCapacitancia);
    document.getElementById('calcular-energia-capacitor').addEventListener('click', calcularEnergiaCapacitor);
    document.getElementById('calcular-diferencia-potencial').addEventListener('click', calcularDiferenciaPotencial);
    document.getElementById('calcular-flujo-electrico').addEventListener('click', calcularFlujoElectrico);
    document.getElementById('calcular-fuerza-magnetica').addEventListener('click', calcularFuerzaMagnetica);
    document.getElementById('calcular-fem').addEventListener('click', calcularFuerzaElectromotriz);
    document.getElementById('calcular-resistencia-serie').addEventListener('click', calcularResistenciaSerie);
    document.getElementById('calcular-resistencia-paralelo').addEventListener('click', calcularResistenciaParalelo);
    document.getElementById('calcular-voltaje').addEventListener('click', calcularVoltaje);
});
