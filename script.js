$(document).ready(function() {
  // Verificar se Anime.js está carregado
  if (typeof anime !== 'function') {
    alert('Anime.js não está carregado. Verifique o link do CDN.');
    return;
  }

  // Verificar se jQuery está carregado
  if (typeof $ !== 'function') {
    alert('jQuery não está carregado. Verifique o link do CDN.');
    return;
  }
  // Templates de animação aprimorados com estilo Frutiger Aero
  const templates = [
    { 
      name: 'Crystal Fade', 
      config: { 
        opacity: [0, 1], 
        scale: [0.8, 1],
        filter: ['blur(10px)', 'blur(0px)'],
        duration: 1200, 
        easing: 'easeOutCubic' 
      }, 
      resetProps: { opacity: 0, scale: 0.8, filter: 'blur(10px)' }
    },
    { 
      name: 'Glass Morph', 
      config: { 
        translateY: [-50, 0], 
        opacity: [0, 1],
        scale: [0.6, 1],
        backdropFilter: ['blur(5px)', 'blur(15px)'],
        duration: 800, 
        easing: 'easeInOutQuad' 
      }, 
      resetProps: { translateY: -50, opacity: 0, scale: 0.6, backdropFilter: 'blur(5px)' }
    },
    { 
      name: 'Aero Wave',
      config: { 
        opacity: [0, 1],
        scale: [0.5, 1],
        backdropFilter: ['blur(0px)', 'blur(20px)'],
        duration: 1000, 
        easing: 'easeOutElastic(1, .6)' 
      }, 
      resetProps: { opacity: 0, scale: 0.5 }
    },
    { 
      name: 'Liquid Slide', 
      config: { 
        translateX: [-80, 0], 
        opacity: [0, 1],
        scale: [0.9, 1],
        filter: ['blur(5px)', 'blur(0px)'],
        duration: 900, 
        easing: 'easeOutCubic' 
      }, 
      resetProps: { translateX: -80, opacity: 0, scale: 0.9, filter: 'blur(5px)' }
    },
    { 
      name: 'Aero Float', 
      config: { 
        translateY: [40, 0], 
        opacity: [0, 1],
        scale: [0.8, 1],
        filter: ['blur(8px)', 'blur(0px)'],
        duration: 1100, 
        easing: 'easeOutBack' 
      }, 
      resetProps: { translateY: 40, opacity: 0, scale: 0.8, filter: 'blur(8px)' }
    },
    { 
      name: 'Prism Scale', 
      config: { 
        scale: [0.2, 1], 
        opacity: [0, 1],
        rotate: [180, 0],
        filter: ['hue-rotate(180deg)', 'hue-rotate(0deg)'],
        duration: 1300, 
        easing: 'easeOutElastic(1, .8)' 
      }, 
      resetProps: { scale: 0.2, opacity: 0, rotate: 180, filter: 'hue-rotate(180deg)' }
    },
    { 
      name: 'Hologram', 
      config: { 
        opacity: [0, 1, 0.8, 1],
        scale: [0.7, 1.1, 0.95, 1],
        filter: ['brightness(0.5)', 'brightness(1.2)', 'brightness(0.9)', 'brightness(1)'],
        duration: 1400, 
        easing: 'easeInOutSine' 
      }, 
      resetProps: { opacity: 0, scale: 0.7, filter: 'brightness(0.5)' }
    },
    { 
      name: 'Crystallize', 
      config: { 
        scale: [0.3, 1.2, 1], 
        opacity: [0, 0.7, 1],
        rotate: [-45, 15, 0],
        filter: ['saturate(0)', 'saturate(1.5)', 'saturate(1)'],
        duration: 1500, 
        easing: 'easeOutBack' 
      }, 
      resetProps: { scale: 0.3, opacity: 0, rotate: -45, filter: 'saturate(0)' }
    },
    { 
      name: 'Ethereal Spin', 
      config: { 
        rotateY: [180, 0], 
        opacity: [0, 1],
        scale: [0.6, 1],
        filter: ['blur(15px)', 'blur(0px)'],
        duration: 1200, 
        easing: 'easeOutCubic' 
      }, 
      resetProps: { rotateY: 180, opacity: 0, scale: 0.6, filter: 'blur(15px)' }
    },
    { 
      name: 'Plasma Wave', 
      config: { 
        translateX: [-100, 20, -10, 0], 
        opacity: [0, 0.6, 0.9, 1],
        scale: [0.8, 1.1, 0.95, 1],
        filter: ['hue-rotate(90deg)', 'hue-rotate(45deg)', 'hue-rotate(15deg)', 'hue-rotate(0deg)'],
        duration: 1600, 
        easing: 'easeOutElastic(1, .7)' 
      }, 
      resetProps: { translateX: -100, opacity: 0, scale: 0.8, filter: 'hue-rotate(90deg)' }
    },
    { 
      name: 'Iridescent', 
      config: { 
        backgroundColor: ['rgba(255,255,255,0.1)', 'rgba(102,126,234,0.3)', 'rgba(240,93,251,0.3)', 'rgba(255,255,255,0.2)'], 
        scale: [0.9, 1.05, 1],
        filter: ['hue-rotate(0deg)', 'hue-rotate(120deg)', 'hue-rotate(240deg)', 'hue-rotate(360deg)'],
        duration: 2500, 
        direction: 'alternate', 
        loop: true, 
        easing: 'easeInOutSine' 
      }, 
      resetProps: { backgroundColor: 'rgba(255,255,255,0.1)', scale: 0.9, filter: 'hue-rotate(0deg)' }
    },
    { 
      name: 'Quantum Bounce', 
      config: { 
        translateY: [-80, 10, -5, 0], 
        scale: [0.4, 1.2, 0.9, 1],
        opacity: [0, 0.8, 0.95, 1],
        filter: ['blur(20px)', 'blur(5px)', 'blur(2px)', 'blur(0px)'],
        duration: 1400, 
        easing: 'easeOutBounce' 
      }, 
      resetProps: { translateY: -80, scale: 0.4, opacity: 0, filter: 'blur(20px)' }
    },
    { 
      name: 'Nebula Pulse', 
      config: { 
        scale: [0.8, 1.3, 0.9, 1.1, 1], 
        opacity: [0.3, 1, 0.7, 1],
        filter: ['brightness(0.3)', 'brightness(1.5)', 'brightness(0.8)', 'brightness(1.2)', 'brightness(1)'],
        duration: 1800, 
        easing: 'easeInOutSine' 
      }, 
      resetProps: { scale: 0.8, opacity: 0.3, filter: 'brightness(0.3)' }
    },
    { 
      name: 'Liquid Metal', 
      config: { 
        scaleX: [0.2, 1.4, 0.8, 1.1, 1], 
        scaleY: [1.8, 0.6, 1.2, 0.9, 1], 
        opacity: [0, 0.8, 1],
        filter: ['contrast(0.5)', 'contrast(1.8)', 'contrast(1)'],
        duration: 1300, 
        easing: 'easeOutElastic(1, .6)' 
      }, 
      resetProps: { scaleX: 0.2, scaleY: 1.8, opacity: 0, filter: 'contrast(0.5)' }
    },
    { 
      name: 'Aurora Shimmer', 
      config: { 
        translateX: [-60, 15, -8, 0], 
        rotate: [0, -8, 4, -2, 0],
        opacity: [0, 1],
        filter: ['hue-rotate(0deg)', 'hue-rotate(180deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)'],
        duration: 1500, 
        easing: 'easeInOutSine' 
      }, 
      resetProps: { translateX: -60, rotate: 0, opacity: 0, filter: 'hue-rotate(0deg)' }
    },
    { 
      name: 'Frost Melt', 
      config: { 
        scale: [1.5, 0.8, 1.1, 1], 
        opacity: [0, 0.6, 0.9, 1],
        filter: ['blur(25px)', 'blur(10px)', 'blur(3px)', 'blur(0px)'],
        duration: 1600, 
        easing: 'easeOutQuart' 
      }, 
      resetProps: { scale: 1.5, opacity: 0, filter: 'blur(25px)' }
    },
    { 
      name: 'Dimension Shift', 
      config: { 
        rotateX: [90, -10, 5, 0],
        rotateY: [-45, 10, -5, 0], 
        scale: [0.5, 1.1, 0.95, 1],
        opacity: [0, 0.8, 1],
        filter: ['blur(12px)', 'blur(3px)', 'blur(0px)'],
        duration: 1700, 
        easing: 'easeOutBack' 
      }, 
      resetProps: { rotateX: 90, rotateY: -45, scale: 0.5, opacity: 0, filter: 'blur(12px)' }
    },
    { 
      name: 'Photon Burst', 
      config: { 
        scale: [0, 2, 0.7, 1.3, 1], 
        opacity: [0, 0.3, 0.8, 0.6, 1],
        filter: ['brightness(0)', 'brightness(3)', 'brightness(0.7)', 'brightness(1.5)', 'brightness(1)'],
        duration: 1200, 
        easing: 'easeOutElastic(1, .8)' 
      }, 
      resetProps: { scale: 0, opacity: 0, filter: 'brightness(0)' }
    },
    { 
      name: 'Spectral Flow', 
      config: { 
        translateY: [50, -15, 8, 0],
        translateX: [-30, 10, -5, 0], 
        rotate: [45, -15, 8, 0],
        opacity: [0, 0.7, 0.9, 1],
        filter: ['hue-rotate(270deg)', 'hue-rotate(90deg)', 'hue-rotate(30deg)', 'hue-rotate(0deg)'],
        duration: 1800, 
        easing: 'easeOutCubic' 
      }, 
      resetProps: { translateY: 50, translateX: -30, rotate: 45, opacity: 0, filter: 'hue-rotate(270deg)' }
    },
    { 
      name: 'Cosmic Zoom', 
      config: { 
        scale: [0.1, 1.5, 0.8, 1], 
        opacity: [0, 0.5, 0.9, 1],
        rotate: [720, -180, 45, 0],
        filter: ['blur(30px)', 'blur(8px)', 'blur(2px)', 'blur(0px)'],
        duration: 2000, 
        easing: 'easeOutBack' 
      }, 
      resetProps: { scale: 0.1, opacity: 0, rotate: 720, filter: 'blur(30px)' }
    },
    { 
      name: 'Quantum Entangle', 
      config: { 
        translateX: [-200, 50, -20, 0], 
        rotate: [-360, 90, -30, 0],
        scale: [0.3, 1.4, 0.8, 1],
        opacity: [0, 0.6, 0.9, 1],
        filter: ['saturate(0)', 'saturate(2)', 'saturate(0.8)', 'saturate(1)'],
        duration: 2200, 
        easing: 'easeOutElastic(1, .5)' 
      }, 
      resetProps: { translateX: -200, rotate: -360, scale: 0.3, opacity: 0, filter: 'saturate(0)' }
    }
  ];

  // Variáveis para controle de animações
  let currentAnimation = null;
  let previewAnimations = [];

  // Inicializar
  initializeApp();

  function initializeApp() {
    renderTemplates();
    setupEventListeners();
    updateRangeValues();
    resetPreview();
  }

  function renderTemplates() {
    const $gallery = $('#templateGallery');
    $gallery.empty();
    
    templates.forEach((template, index) => {
      const $card = $(`
        <div class="template-card" data-index="${index}">
          <div class="template-preview" id="preview-${index}">🎭</div>
          <div class="template-label">${template.name}</div>
        </div>
      `);
      
      $gallery.append($card);
      
      // Inicializar com propriedades reset
      const element = $card.find('.template-preview')[0];
      if (template.resetProps) {
        anime.set(element, {
          ...getDefaultProps(),
          ...template.resetProps
        });
      }
      
      // Animar preview com delay escalonado
      setTimeout(() => {
        animateTemplatePreview(`#preview-${index}`, template, index);
      }, index * 150);
    });
  }

  function getDefaultProps() {
    return {
      scale: 1,
      scaleX: 1,
      scaleY: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      backgroundColor: 'rgba(255,255,255,0.3)',
      filter: 'none'
    };
  }

  function setupEventListeners() {
    // Tabs
    $('.tab-btn').on('click', function() {
      $('.tab-btn').removeClass('active');
      $(this).addClass('active');
      
      const tab = $(this).data('tab');
      $('.tab-content').removeClass('active');
      $(`#tab-${tab}`).addClass('active');
    });

    // Template cards
    $(document).on('click', '.template-card', function() {
      const index = $(this).data('index');
      const template = templates[index];
      
      // Parar animação atual se existir
      stopCurrentAnimation();
      
      // Mudar para aba custom
      $('.tab-btn[data-tab="custom"]').click();
      
      // Aplicar configuração
      applyTemplateToForm(template.config);
      animatePreview(template.config);
      renderCode(template.config);
    });

    // Controles
    $('#btnAnimate').on('click', function() {
      stopCurrentAnimation();
      const config = getAnimationConfig();
      animatePreview(config);
      renderCode(config);
    });

    $('#btnReset').on('click', function() {
      stopCurrentAnimation();
      resetPreview();
      $('#codeOutput').text('// Configure uma animação acima');
    });

    // Range inputs
    $('#duration, #delay').on('input', updateRangeValues);

    // Auto-update ao alterar controles
    $('#animType, #startValue, #endValue, #easing, #loop, #alternate').on('change', function() {
      const config = getAnimationConfig();
      renderCode(config);
    });

    // Copy button
    $('#copyBtn').on('click', function() {
      const code = $('#codeOutput').text();
      navigator.clipboard.writeText(code).then(() => {
        $(this).text('✅ Copiado!');
        setTimeout(() => $(this).text('📋 Copiar'), 2000);
      });
    });
  }

  function stopCurrentAnimation() {
    // Parar animação atual do preview
    if (currentAnimation) {
      currentAnimation.pause();
      currentAnimation = null;
    }
    
    // Parar todas as animações dos templates
    previewAnimations.forEach(anim => {
      if (anim && anim.pause) {
        anim.pause();
      }
    });
    previewAnimations = [];
  }

  function updateRangeValues() {
    $('#durationValue').text($('#duration').val() + 'ms');
    $('#delayValue').text($('#delay').val() + 'ms');
  }

  function animateTemplatePreview(selector, template, index) {
    const element = $(selector)[0];
    if (!element) return;
    
    // Reset com propriedades específicas ou padrão
    const resetProps = template.resetProps || {};
    anime.set(element, {
      ...getDefaultProps(),
      ...resetProps
    });
    
    // Configurar animação
    const config = {
      targets: element,
      ...template.config,
      loop: false,
      autoplay: true,
      complete: function() {
        // Reiniciar após um tempo
        setTimeout(() => {
          if (element && element.offsetParent !== null) { // Verificar se ainda está visível
            animateTemplatePreview(selector, template, index);
          }
        }, 2000 + (index * 200));
      }
    };
    
    // Armazenar referência da animação
    const animation = anime(config);
    previewAnimations[index] = animation;
  }

  function applyTemplateToForm(config) {
    // Reset form
    $('#loop').prop('checked', false);
    $('#alternate').prop('checked', false);
    
    // Determinar tipo baseado na configuração
    let type = 'translateX';
    let start = 0, end = 100;
    
    // Priorizar propriedades mais específicas
    if (config.opacity && Array.isArray(config.opacity)) {
      type = 'opacity';
      [start, end] = config.opacity;
    } else if (config.scale && Array.isArray(config.scale)) {
      type = 'scale';
      [start, end] = config.scale;
    } else if (config.translateX && Array.isArray(config.translateX)) {
      type = 'translateX';
      [start, end] = config.translateX;
    } else if (config.translateY && Array.isArray(config.translateY)) {
      type = 'translateY';
      [start, end] = config.translateY;
    } else if (config.rotate && Array.isArray(config.rotate)) {
      type = 'rotate';
      [start, end] = config.rotate;
    } else if (config.backgroundColor && Array.isArray(config.backgroundColor)) {
      type = 'backgroundColor';
      [start, end] = config.backgroundColor;
    }
    
    $('#animType').val(type);
    $('#startValue').val(start);
    $('#endValue').val(end);
    $('#duration').val(config.duration || 1000);
    $('#delay').val(config.delay || 0);
    $('#easing').val(config.easing || 'easeInOutQuad');
    $('#loop').prop('checked', !!config.loop);
    $('#alternate').prop('checked', config.direction === 'alternate');
    
    updateRangeValues();
  }

  function getAnimationConfig() {
    const type = $('#animType').val();
    const start = $('#startValue').val();
    const end = $('#endValue').val();
    const duration = parseInt($('#duration').val());
    const delay = parseInt($('#delay').val());
    const easing = $('#easing').val();
    const loop = $('#loop').is(':checked');
    const alternate = $('#alternate').is(':checked');
    
    const config = {
      targets: '#previewBox',
      duration,
      delay,
      easing,
      autoplay: true
    };
    
    // Configurar propriedade
    if (type === 'backgroundColor') {
      config[type] = [start, end];
    } else {
      const startVal = isNaN(parseFloat(start)) ? start : parseFloat(start);
      const endVal = isNaN(parseFloat(end)) ? end : parseFloat(end);
      config[type] = [startVal, endVal];
    }
    
    if (loop) config.loop = true;
    if (alternate) config.direction = 'alternate';
    
    return config;
  }

  function animatePreview(config) {
    // Reset completo antes da animação
    resetPreview();
    
    // Aguardar um frame antes de animar
    requestAnimationFrame(() => {
      currentAnimation = anime(config);
    });
  }

  function resetPreview() {
    const element = $('#previewBox')[0];
    if (element) {
      anime.set(element, getDefaultProps());
    }
  }

  function renderCode(config) {
    const configCopy = { ...config };
    delete configCopy.targets;
    delete configCopy.autoplay;
    
    let code = 'anime({\n  targets: ".element",\n';
    
    Object.entries(configCopy).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        code += `  ${key}: [${value.map(v => typeof v === 'string' ? `"${v}"` : v).join(', ')}],\n`;
      } else if (typeof value === 'string') {
        code += `  ${key}: "${value}",\n`;
      } else {
        code += `  ${key}: ${value},\n`;
      }
    });
    
    code += '});';
    $('#codeOutput').text(code);
  }

  // Parar todas as animações quando sair da página
  $(window).on('beforeunload', function() {
    stopCurrentAnimation();
  });
});