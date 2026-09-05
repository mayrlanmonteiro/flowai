// FlowAI Main Interactions

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileOverlay = document.getElementById('mobileOverlay');

    // --- Header scroll ---
    const onScroll = () => {
        header?.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // --- Mobile Nav ---
    const closeDrawer = () => {
        mobileDrawer?.classList.remove('open');
        mobileOverlay?.classList.remove('active');
        mobileBtn?.setAttribute('aria-expanded', 'false');
        mobileDrawer?.setAttribute('aria-hidden', 'true');
        const icon = mobileBtn?.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
        document.body.style.overflow = '';
    };

    const openDrawer = () => {
        mobileDrawer?.classList.add('open');
        mobileOverlay?.classList.add('active');
        mobileBtn?.setAttribute('aria-expanded', 'true');
        mobileDrawer?.setAttribute('aria-hidden', 'false');
        const icon = mobileBtn?.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-xmark';
        document.body.style.overflow = 'hidden';
    };

    if (mobileBtn && mobileDrawer) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.contains('open');
            isOpen ? closeDrawer() : openDrawer();
        });

        mobileOverlay?.addEventListener('click', closeDrawer);

        mobileDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeDrawer);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
                closeDrawer();
            }
        });
    }

    // --- Reveal on scroll ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.service-card, .step-item, .why-feature-row, .testimonial-card, .section-header, .hero-content, .cta-banner'
    ).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = '.revealed{opacity:1!important;transform:translateY(0)!important}';
    document.head.appendChild(style);

    // --- Smooth scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Testimonial dots ---
    document.querySelectorAll('.testimonial-dots .dot').forEach(dot => {
        dot.addEventListener('click', () => {
            document.querySelectorAll('.testimonial-dots .dot').forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
});
