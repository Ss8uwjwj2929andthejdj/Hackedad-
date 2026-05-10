// Funcionalidad de CineGo

function seleccionarPlan(plan) {
    // Simulación de proceso de suscripción
    alert("Has seleccionado el Plan " + plan + ". ¡La función está por comenzar!");
    console.log("Iniciando suscripción para: " + plan);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("CineGo listo para el streaming.");
});
function seleccionarPlan(plan) {
    // Muestra el formulario de pago
    document.getElementById('area-pago').style.display = 'block';
    document.getElementById('plan-seleccionado').innerText = plan;
    
    // Desplaza la pantalla suavemente hacia el formulario
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
