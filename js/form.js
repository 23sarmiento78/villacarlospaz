// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.modern-form');
  const submitBtn = form?.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn?.innerHTML || '';

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!submitBtn) return;
    
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Enviando...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje Enviado!',
          text: 'Nos pondremos en contacto contigo pronto.',
          confirmButtonColor: '#0d6efd'
        });
        form.reset();
      } else {
        throw new Error('Error en el envío');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje. Por favor, intenta nuevamente.',
        confirmButtonColor: '#dc3545'
      });
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}); 