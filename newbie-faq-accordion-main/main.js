document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de título de pergunta
    const buttons = document.querySelectorAll('.faq_content_question_title');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Seleciona a resposta e o ícone associados ao botão clicado
        const icon = this.querySelector('.icon');
        const response = this.nextElementSibling;
  
        // Alterna a visibilidade da resposta e troca o ícone
        if (response.style.display === 'block' || response.style.display === '') {
          response.style.display = 'none';
          icon.src = 'assets/images/icon-plus.svg';
          icon.alt = 'Expand';
        } else {
          response.style.display = 'block';
          icon.src = 'assets/images/icon-minus.svg';
          icon.alt = 'Collapse';
        }
      });
    });
  });