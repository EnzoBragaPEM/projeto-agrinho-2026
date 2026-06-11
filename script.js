document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Hamburguer Responsivo
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu móvel ao clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Link Ativo Dinâmico com o Scroll da página (Scroll Spy)
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // 3. Exibir/Ocultar Botão Voltar ao Topo
        const backToTopBtn = document.getElementById('backToTop');
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // 4. Ação do Botão Voltar ao Topo
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 5. Lógica Interativa do Quiz
    const optionButtons = document.querySelectorAll('.option-btn');
    const quizResult = document.getElementById('quiz-result');

    optionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Desabilita as opções após a primeira escolha
            optionButtons.forEach(btn => btn.disabled = true);

            const isCorrect = button.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                button.style.backgroundColor = '#a3e635';
                button.style.color = '#1b4d22';
                quizResult.textContent = '🌱 Correto! A rotação de culturas e a preservação das matas ciliares são práticas indispensáveis para um agro sustentável.';
                quizResult.className = 'quiz-result correct';
            } else {
                button.style.backgroundColor = '#ff8a8a';
                button.style.color = '#8b0000';
                quizResult.textContent = '❌ Não foi dessa vez! O Agro Forte e Sustentável foca na tecnologia aliada à proteção ecológica ativa.';
                quizResult.className = 'quiz-result wrong';
            }
        });
    });

    // 6. Envio de Formulário com Feedback visual
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formFeedback.textContent = 'Enviando...';

        setTimeout(() => {
            formFeedback.textContent = '🚀 Sucesso! Seu projeto/ideia pedagógica foi registrado para o Agrinho 2026.';
            contactForm.reset();
        }, 1200);
    });
});