function seleccionarPlan(plan) {
    // Muestra el formulario de pago
    document.getElementById('area-pago').style.display = 'block';
    document.getElementById('plan-seleccionado').innerText = plan;
    
    // Desplaza la pantalla suavemente hacia el formulario
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
