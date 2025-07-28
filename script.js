/*
   ARQUIVO JAVASCRIPT PRINCIPAL DO PORTFÓLIO
   Contém animações de carregamento, efeitos de scroll e interatividade
   Tema: Pixel Art / Jogos 2D
*/

// ========== VARIÁVEIS GLOBAIS ==========

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Portfólio carregado! Iniciando animações...');
    
    // Inicializar todas as funcionalidades
    initializeAnimations();
    initializeScrollEffects();
    initializeInteractiveElements();
    initializePixelEffects();
});

// ========== ANIMAÇÕES DE CARREGAMENTO ==========

/**
 * Inicializa as animações de carregamento da página
 */
function initializeAnimations() {
    // Adiciona classe para indicar que a página foi carregada
    document.body.classList.add('loaded');
    
    // Animação sequencial dos elementos
    animateHeroElements();
    animateNavigationSections();
    
    console.log('✨ Animações de carregamento iniciadas');
}

/**
 * Anima os elementos da seção hero de forma sequencial
 */
function animateHeroElements() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const profileImage = document.querySelector('.profile-image');
    
    // Adiciona efeito de digitação no título (simulado)
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.borderRight = '3px solid #F0F8FF';
            heroTitle.style.animation += ', blink 1s infinite';
        }, 1500);
        
        // Remove o cursor piscante após um tempo
        setTimeout(() => {
            heroTitle.style.borderRight = 'none';
        }, 3000);
    }
    
    // Adiciona efeito de brilho na imagem do perfil
    if (profileImage) {
        setTimeout(() => {
            profileImage.style.boxShadow = '0 0 30px rgba(240, 248, 255, 0.5)';
        }, 2000);
    }
}

/**
 * Anima as seções de navegação com delay escalonado
 */
function animateNavigationSections() {
    const navSections = document.querySelectorAll('.nav-section');
    
    navSections.forEach((section, index) => {
        // Adiciona delay baseado no índice
        setTimeout(() => {
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';
            
            // Efeito de "pop" ao aparecer
            section.style.animation = `fadeInUp 0.8s ease-out both, pulse 0.5s ease-out ${0.8 + (index * 0.2)}s`;
        }, 1500 + (index * 200));
    });
}

// ========== EFEITOS DE SCROLL ==========

/**
 * Inicializa os efeitos relacionados ao scroll da página
 */
function initializeScrollEffects() {
    // Adiciona listener para eventos de scroll
    window.addEventListener('scroll', handleScrollEvents);
    
    // Adiciona efeito de parallax suave
    initializeParallax();
    
    console.log('🎯 Efeitos de scroll inicializados');
}

/**
 * Manipula eventos de scroll da página
 */
function handleScrollEvents() {
    const scrollY = window.scrollY;
    const heroSection = document.querySelector('.hero-section');
    const navSections = document.querySelectorAll('.nav-section');
    
    // Efeito parallax na seção hero
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    // Efeito de fade baseado no scroll nas seções de navegação
    navSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const opacity = Math.max(0, Math.min(1, 1 - Math.abs(rect.top - window.innerHeight/2) / (window.innerHeight/2)));
            section.style.opacity = opacity;
        }
    });
}

/**
 * Inicializa efeito de parallax suave
 */
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.hero-section, .navigation-sections');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// ========== ELEMENTOS INTERATIVOS ==========

/**
 * Inicializa elementos interativos da página
 */
function initializeInteractiveElements() {
    // Adiciona efeitos de hover aprimorados
    enhanceHoverEffects();
    
    // Adiciona efeitos de clique
    addClickEffects();
    
    // Adiciona efeitos de teclado para acessibilidade
    addKeyboardEffects();
    
    console.log('🎮 Elementos interativos inicializados');
}

/**
 * Aprimora os efeitos de hover com JavaScript
 */
function enhanceHoverEffects() {
    const navSections = document.querySelectorAll('.nav-section');
    const profileImage = document.querySelector('.profile-image');
    
    // Efeitos aprimorados para seções de navegação
    navSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            // Adiciona efeito de brilho
            this.style.boxShadow = '0 15px 35px rgba(94, 20, 253, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)';
            
            // Efeito sonoro simulado (visual)
            createRippleEffect(this);
            
            // Anima outros elementos
            const otherSections = document.querySelectorAll('.nav-section:not(:hover)');
            otherSections.forEach(other => {
                other.style.opacity = '0.7';
                other.style.transform = 'scale(0.95)';
            });
        });
        
        section.addEventListener('mouseleave', function() {
            // Remove efeitos
            this.style.boxShadow = '';
            
            // Restaura outros elementos
            const allSections = document.querySelectorAll('.nav-section');
            allSections.forEach(other => {
                other.style.opacity = '1';
                other.style.transform = 'scale(1)';
            });
        });
    });
    
    // Efeito especial para a imagem do perfil
    if (profileImage) {
        profileImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) contrast(1.1)';
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.filter = '';
            this.style.transform = '';
        });
    }
}

/**
 * Adiciona efeitos de clique
 */
function addClickEffects() {
    const navSections = document.querySelectorAll('.nav-section');
    
    navSections.forEach(section => {
        section.addEventListener('click', function(e) {
            // Efeito de "explosão" no clique
            createClickExplosion(e.clientX, e.clientY);
            
            // Vibração suave (se suportado)
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
            
            // Log para debug
            console.log(`🎯 Clique na seção: ${this.querySelector('h2').textContent}`);
        });
    });
}

/**
 * Adiciona suporte a navegação por teclado
 */
function addKeyboardEffects() {
    const navSections = document.querySelectorAll('.nav-section');
    
    navSections.forEach((section, index) => {
        // Torna os elementos focáveis
        section.setAttribute('tabindex', index + 1);
        
        section.addEventListener('keydown', function(e) {
            // Enter ou Espaço ativam o link
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('.nav-link');
                if (link) {
                    link.click();
                }
            }
        });
        
        // Efeitos visuais no foco
        section.addEventListener('focus', function() {
            this.style.outline = '3px solid #FFD700';
            this.style.outlineOffset = '5px';
        });
        
        section.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// ========== EFEITOS ESPECIAIS PIXEL ==========

/**
 * Inicializa efeitos especiais com tema pixel
 */
function initializePixelEffects() {
    // Adiciona partículas de fundo
    createPixelParticles();
    
    // Adiciona efeito de glitch ocasional
    initializeGlitchEffect();
    
    console.log('🎨 Efeitos pixel inicializados');
}

/**
 * Cria partículas pixel de fundo
 */
function createPixelParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'pixel-particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    // Cria partículas individuais
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: rgba(94, 20, 253, 0.3);
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
    
    // Adiciona CSS para animação das partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
}

/**
 * Inicializa efeito de glitch ocasional
 */
function initializeGlitchEffect() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        // Aplica glitch a cada 10-15 segundos
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% de chance
                applyGlitchEffect(heroTitle);
            }
        }, 12000);
    }
}

/**
 * Aplica efeito de glitch a um elemento
 */
function applyGlitchEffect(element) {
    const originalText = element.textContent;
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Aplica glitch por 200ms
    let glitchInterval = setInterval(() => {
        let glitchedText = '';
        for (let char of originalText) {
            if (Math.random() < 0.1) {
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchedText += char;
            }
        }
        element.textContent = glitchedText;
    }, 50);
    
    // Restaura o texto original
    setTimeout(() => {
        clearInterval(glitchInterval);
        element.textContent = originalText;
    }, 200);
}

// ========== FUNÇÕES AUXILIARES ==========

/**
 * Cria efeito de ondulação (ripple) em um elemento
 */
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 215, 0, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        left: 50%;
        top: 50%;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    // Remove o elemento após a animação
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Adiciona CSS da animação se não existir
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Cria efeito de explosão no clique
 */
function createClickExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, #FFD700, #FF6B6B);
        border-radius: 50%;
        transform: translate(-50%, -50%) scale(0);
        animation: explode 0.5s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(explosion);
    
    // Remove após animação
    setTimeout(() => {
        explosion.remove();
    }, 500);
    
    // Adiciona CSS da animação se não existir
    if (!document.querySelector('#explode-animation')) {
        const style = document.createElement('style');
        style.id = 'explode-animation';
        style.textContent = `
            @keyframes explode {
                0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ========== UTILITÁRIOS DE DEBUG ==========

/**
 * Função para debug - mostra informações no console
 */
function debugInfo() {
    console.log('🎮 PORTFÓLIO DEBUG INFO:');
    console.log('- Animações ativas:', document.querySelectorAll('[style*="animation"]').length);
    console.log('- Seções de navegação:', document.querySelectorAll('.nav-section').length);
    console.log('- Partículas ativas:', document.querySelectorAll('.pixel-particles div').length);
    console.log('- Viewport:', window.innerWidth + 'x' + window.innerHeight);
}

// Disponibiliza função de debug globalmente
window.debugPortfolio = debugInfo;

// ========== TRATAMENTO DE ERROS ==========

/**
 * Tratamento global de erros
 */
window.addEventListener('error', function(e) {
    console.error('❌ Erro no portfólio:', e.error);
});

/**
 * Tratamento de promessas rejeitadas
 */
window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Promessa rejeitada:', e.reason);
});

// Log final de carregamento
console.log('🎮 JavaScript do portfólio carregado com sucesso!');
console.log('💡 Digite debugPortfolio() no console para informações de debug');

