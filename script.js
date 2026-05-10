function confirmarPago(event) {
    event.preventDefault();
    
    const plan = document.getElementById('plan-nombre').innerText;
    const precio = document.getElementById('plan-costo').innerText.replace('$','').replace(' MXN','');

    // Aquí es donde sucede la magia: redirige al pago real
    // Nota: Necesitarás crear un botón en tu cuenta de PayPal para obtener tu enlace real
    alert("Redirigiendo a la pasarela segura para el Plan " + plan);
    
    // Ejemplo de enlace de cobro (Debes generar el tuyo en PayPal.me o Mercado Pago)
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=TU_CORREO@EJEMPLO.COM&item_name=Suscripcion+CineGo+${plan}&amount=${precio}&currency_code=MXN`;
}
