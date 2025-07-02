document.addEventListener('DOMContentLoaded', function() {
    // Selecionar o formulário
    const loginForm = document.querySelector('form');
    
    // Adicionar evento de submit ao formulário
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir o envio padrão
        
        // Obter valores dos campos
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Validar campos
        if (!username || !password) {
            showError('Por favor, preencha todos os campos.');
            return;
        }
        
        if (password.length < 6) {
            showError('A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        
        // Simular envio para o servidor
        simulateLogin(username, password);
    });
    
    // Função para mostrar mensagem de erro
    function showError(message) {
        // Remover mensagens de erro/sucesso existentes
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Criar elemento de alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert error';
        alertDiv.textContent = message;
        
        // Inserir antes do formulário
        loginForm.prepend(alertDiv);
        
        // Remover após 5 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }
    
    // Função para mostrar mensagem de sucesso
    function showSuccess(message) {
        // Remover mensagens de erro/sucesso existentes
        const existingAlert = document.querySelector('.alert');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Criar elemento de alerta
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert success';
        alertDiv.textContent = message;
        
        // Inserir antes do formulário
        loginForm.prepend(alertDiv);
        
        // Redirecionar após 2 segundos
        setTimeout(() => {
            window.location.href = 'esqueleto.html'; // Atualizado para esqueleto.html
        }, 2000);
    }
    
    // Função para simular login (substituir por chamada AJAX real)
    function simulateLogin(username, password) {
        // Mostrar loading
        const submitButton = loginForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Entrando...';
        submitButton.disabled = true;
        
        // Simular atraso de rede
        setTimeout(() => {
            // Aqui você normalmente faria uma requisição AJAX para o servidor
            // Para este exemplo, vamos simular um login bem-sucedido
            showSuccess('Login realizado com sucesso! Redirecionando...');
            
            // Resetar botão (embora o redirecionamento acontecerá logo após)
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Em uma implementação real, você guardaria o token de autenticação
            // localStorage.setItem('authToken', response.token);
        }, 1500);
    }
    
    // Adicionar estilo dinâmico para os inputs quando focados
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#1db954';
            this.style.boxShadow = '0 0 0 2px rgba(29, 185, 84, 0.2)';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
        });
    });

    // Adicionar interação aos links do menu
    const menuLinks = document.querySelectorAll('.navegação .menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#1db954';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#ffffff';
            this.style.backgroundColor = 'transparent';
        });
    });
});

// Adicionar estilos para as mensagens de alerta
const style = document.createElement('style');
style.textContent = `
    .alert {
        padding: 12px 15px;
        border-radius: 4px;
        margin-bottom: 20px;
        font-size: 0.9rem;
        animation: fadeIn 0.3s ease-out;
    }
    
    .error {
        background-color: #ffebee;
        color: #c62828;
        border: 1px solid #ef9a9a;
    }
    
    .success {
        background-color: #e8f5e9;
        color: #2e7d32;
        border: 1px solid #a5d6a7;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);