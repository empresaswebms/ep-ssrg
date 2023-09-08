<template>
    <div class="compra-finalizada text-center">
      <i class="bi bi-check-circle icono-check"></i>
      <h2>¡Compra realizada!</h2>
      <p>Gracias por tu compra. Hemos recibido tu pedido.</p>
      <p>Por favor, revisa tu correo electrónico para obtener una copia del recibo y los detalles para realizar el pago.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CompraFinalizada',
  };
  </script>
  
  <style scoped>
  .compra-finalizada {
    margin-top: 50px;
  }
  
  .icono-check {
    font-size: 64px;
    color: #28a745; /* Color verde de Bootstrap */
  }
  </style>