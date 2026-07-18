/* Anytime Maids Service — interactions + full EN/ES i18n */
(function () {
  'use strict';

  const translations = {
    en: {
      'nav.services': 'Services',
      'nav.virtual': 'Virtual Cleaning',
      'nav.gallery': 'Gallery',
      'nav.why': 'Why Us',
      'nav.contact': 'Contact',
      'cta.bookNow': 'Book Now',
      'cta.bookCleaning': 'Book Cleaning',
      'cta.tryVirtual': 'Try Virtual Cleaning',
      'cta.callToBook': 'Call 512-945-1625 to Book',
      'cta.preferPro': 'Prefer a Pro? Book Cleaning',
      'cta.getResults': 'Get These Results — Book Now',
      'hero.badge': 'Austin Maid Service · Trusted Local Pros',
      'hero.title': 'Reliable Maid Cleaning in Austin, TX — Anytime You Need It',
      'hero.sub': 'Professional • Affordable • Trusted Local Service',
      'hero.point1': 'Bonded & Insured',
      'hero.point2': 'Same-Week Availability',
      'hero.point3': 'Eco Options Available',
      'services.kicker': 'House Cleaning Austin TX',
      'services.title': 'Professional Maids Austin Trust',
      'services.desc': 'From weekly refresh cleans to move out cleaning Austin homeowners rely on — book your spot today.',
      'svc1.title': 'Regular House Cleaning',
      'svc1.desc': 'Weekly or bi-weekly professional maid service that keeps your Austin home consistently fresh and inviting.',
      'svc1.price': 'From $120',
      'svc2.title': 'Deep Cleaning',
      'svc2.desc': 'Top-to-bottom scrub for kitchens, bathrooms, baseboards, and hard-to-reach spots — perfect seasonal reset.',
      'svc2.price': 'From $220',
      'svc3.title': 'Move-In / Move-Out',
      'svc3.desc': 'Move out cleaning Austin landlords and renters love — deposit-ready results and empty-home detailing.',
      'svc3.price': 'From $250',
      'svc4.title': 'Office & Commercial',
      'svc4.desc': 'Reliable office cleaning for Austin small businesses, suites, and shared workspaces on flexible schedules.',
      'svc4.price': 'Custom Quote',
      'svc5.title': 'Post-Construction',
      'svc5.desc': 'Dust, debris, and fine-particle removal after remodels so your space is safe, shiny, and livable.',
      'svc5.price': 'Custom Quote',
      'svc6.title': 'Eco-Friendly Options',
      'svc6.desc': 'Plant-based, low-VOC products safe for kids, pets, and sensitive homes — still powerful on grime.',
      'svc6.price': 'From $130',
      'virtual.badge': 'Free DIY Help',
      'virtual.title': 'Virtual Cleaning Help — Instant DIY Answers',
      'virtual.desc': 'Ask our experts anything: how to remove wine stains from carpet, grease from tile, pet odors from fabric, and more. Get step-by-step advice instantly.',
      'virtual.inputLabel': 'Your cleaning question',
      'virtual.placeholder': 'e.g. How do I remove red wine from carpet?',
      'virtual.askBtn': 'Ask Question',
      'virtual.faqTitle': 'Common Stain & Surface FAQs',
      'virtual.empty': 'Please type a cleaning question first.',
      'virtual.thinking': 'Checking our pro tips…',
      'gallery.kicker': 'Real Results',
      'gallery.title': 'Before & After Gallery',
      'gallery.desc': 'See the sparkle our Austin maid service brings to homes across Central Texas.',
      'gallery.cap1': 'Move-out transformation',
      'gallery.cap2': 'Bathroom deep clean',
      'gallery.cap3': 'Kitchen ready',
      'gallery.cap4': 'Sparkling finishes',
      'gallery.cap5': 'Office polish',
      'gallery.cap6': 'Post-construction',
      'gallery.cap7': 'Eco-friendly clean',
      'gallery.cap8': 'Living room glow',
      'why.kicker': 'Why Choose Us',
      'why.title': 'Austin Families Trust Anytime Maids',
      'why.desc': 'Warm, reliable professional maids Austin homeowners recommend to friends and neighbors.',
      'why.t1': 'Local Austin Team',
      'why.d1': 'Neighbors who know Central Texas homes, hard water, and pollen season.',
      'why.t2': 'Bonded & Insured',
      'why.d2': 'Peace of mind every visit — your home and belongings are protected.',
      'why.t3': '100% Satisfaction',
      'why.d3': 'Not happy? We’ll make it right — your smile is our quality checklist.',
      'why.t4': 'Eco Products Available',
      'why.d4': 'Request green products that clean tough messes without harsh fumes.',
      'why.q1': '“Best Austin maid service we’ve used. Always on time, always thorough — our kitchen sparkles.”',
      'why.q2': '“Move out cleaning saved our deposit. Professional maids Austin can actually count on.”',
      'why.q3': '“Friendly team, eco options for our toddler, and house cleaning Austin TX pricing that makes sense.”',
      'contact.kicker': 'Book Today',
      'contact.title': 'Contact & Booking',
      'contact.desc': 'Request your clean in minutes. We’ll confirm by phone or email.',
      'contact.reach': 'Reach Us Anytime',
      'contact.area': 'Serving Austin, TX & surrounding areas',
      'contact.mapNote': 'Proudly serving the greater Austin area',
      'form.name': 'Full name',
      'form.phone': 'Phone',
      'form.email': 'Email',
      'form.address': 'Service address',
      'form.service': 'Service type',
      'form.serviceSelect': 'Select a service…',
      'form.date': 'Preferred date',
      'form.notes': 'Notes',
      'form.notesPh': 'Pets, gate code, focus areas…',
      'form.submit': 'Submit Booking Request',
      'form.success': 'Thank you! Your booking request was received. We’ll contact you soon at the number or email you provided. For faster service call 512-945-1625.',
      'modal.title': 'Book Your Cleaning',
      'banner.title': 'Ready for a fresher home?',
      'banner.sub': 'Book professional maid cleaning in Austin today — spots fill fast.',
      'footer.blurb': 'Cheerful, trustworthy professional maids for house cleaning Austin TX — anytime you need a fresh start.',
      'footer.explore': 'Explore',
      'footer.contact': 'Contact',
      'footer.ctaTitle': 'Get a cleaner home',
      'footer.rights': 'All rights reserved.',
      'footer.seo': 'Austin maid service · House cleaning Austin TX · Move out cleaning Austin',
    },
    es: {
      'nav.services': 'Servicios',
      'nav.virtual': 'Limpieza Virtual',
      'nav.gallery': 'Galería',
      'nav.why': 'Por Qué Nosotros',
      'nav.contact': 'Contacto',
      'cta.bookNow': 'Reservar Ahora',
      'cta.bookCleaning': 'Reservar Limpieza',
      'cta.tryVirtual': 'Probar Limpieza Virtual',
      'cta.callToBook': 'Llame al 512-945-1625 para Reservar',
      'cta.preferPro': '¿Prefiere un profesional? Reserve limpieza',
      'cta.getResults': 'Obtenga estos resultados — Reserve ahora',
      'hero.badge': 'Servicio de Mucamas en Austin · Profesionales de Confianza',
      'hero.title': 'Limpieza Confiable de Mucamas en Austin, TX — Cuando la Necesite',
      'hero.sub': 'Profesional • Accesible • Servicio Local de Confianza',
      'hero.point1': 'Con Fianza y Seguro',
      'hero.point2': 'Disponibilidad la Misma Semana',
      'hero.point3': 'Opciones Ecológicas',
      'services.kicker': 'Limpieza de Casas en Austin TX',
      'services.title': 'Mucamas Profesionales de Confianza en Austin',
      'services.desc': 'Desde limpiezas semanales hasta limpieza de mudanza en Austin — reserve su espacio hoy.',
      'svc1.title': 'Limpieza Regular del Hogar',
      'svc1.desc': 'Servicio profesional semanal o quincenal que mantiene su hogar en Austin siempre fresco y acogedor.',
      'svc1.price': 'Desde $120',
      'svc2.title': 'Limpieza Profunda',
      'svc2.desc': 'Limpieza de arriba a abajo en cocinas, baños, zócalos y rincones difíciles — ideal para un reinicio estacional.',
      'svc2.price': 'Desde $220',
      'svc3.title': 'Entrada / Salida (Mudanza)',
      'svc3.desc': 'Limpieza de mudanza en Austin que propietarios e inquilinos aman — resultados listos para el depósito.',
      'svc3.price': 'Desde $250',
      'svc4.title': 'Oficinas y Comercial',
      'svc4.desc': 'Limpieza confiable de oficinas para negocios, suites y espacios compartidos en Austin con horarios flexibles.',
      'svc4.price': 'Cotización Personalizada',
      'svc5.title': 'Post-Construcción',
      'svc5.desc': 'Eliminación de polvo, escombros y partículas finas después de remodelaciones para un espacio seguro y brillante.',
      'svc5.price': 'Cotización Personalizada',
      'svc6.title': 'Opciones Ecológicas',
      'svc6.desc': 'Productos a base de plantas y bajo VOC, seguros para niños, mascotas y hogares sensibles.',
      'svc6.price': 'Desde $130',
      'virtual.badge': 'Ayuda DIY Gratis',
      'virtual.title': 'Ayuda de Limpieza Virtual — Respuestas DIY Instantáneas',
      'virtual.desc': 'Pregunte a nuestros expertos: cómo quitar manchas de vino de la alfombra, grasa del azulejo, olores de mascotas de la tela y más. Obtenga consejos paso a paso al instante.',
      'virtual.inputLabel': 'Su pregunta de limpieza',
      'virtual.placeholder': 'ej. ¿Cómo quito el vino tinto de la alfombra?',
      'virtual.askBtn': 'Hacer Pregunta',
      'virtual.faqTitle': 'Preguntas Frecuentes sobre Manchas y Superficies',
      'virtual.empty': 'Escriba una pregunta de limpieza primero.',
      'virtual.thinking': 'Revisando nuestros consejos profesionales…',
      'gallery.kicker': 'Resultados Reales',
      'gallery.title': 'Galería Antes y Después',
      'gallery.desc': 'Vea el brillo que nuestro servicio de mucamas en Austin aporta a los hogares de Texas Central.',
      'gallery.cap1': 'Transformación de mudanza',
      'gallery.cap2': 'Limpieza profunda de baño',
      'gallery.cap3': 'Cocina lista',
      'gallery.cap4': 'Acabados brillantes',
      'gallery.cap5': 'Oficina impecable',
      'gallery.cap6': 'Post-construcción',
      'gallery.cap7': 'Limpieza ecológica',
      'gallery.cap8': 'Sala luminosa',
      'why.kicker': 'Por Qué Elegirnos',
      'why.title': 'Familias de Austin Confían en Anytime Maids',
      'why.desc': 'Mucamas profesionales cálidas y confiables que los dueños de casa en Austin recomiendan.',
      'why.t1': 'Equipo Local de Austin',
      'why.d1': 'Vecinos que conocen los hogares de Texas Central, el agua dura y la temporada de polen.',
      'why.t2': 'Con Fianza y Seguro',
      'why.d2': 'Tranquilidad en cada visita — su hogar y pertenencias están protegidos.',
      'why.t3': '100% Satisfacción',
      'why.d3': '¿No está contento? Lo solucionamos — su sonrisa es nuestra lista de calidad.',
      'why.t4': 'Productos Ecológicos Disponibles',
      'why.d4': 'Solicite productos verdes que limpian sin humos fuertes.',
      'why.q1': '“El mejor servicio de mucamas en Austin. Siempre puntuales y minuciosas — nuestra cocina brilla.”',
      'why.q2': '“La limpieza de mudanza salvó nuestro depósito. Mucamas profesionales en Austin en las que se puede confiar.”',
      'why.q3': '“Equipo amable, opciones ecológicas para nuestro bebé y precios de limpieza de casas en Austin TX que tienen sentido.”',
      'contact.kicker': 'Reserve Hoy',
      'contact.title': 'Contacto y Reservas',
      'contact.desc': 'Solicite su limpieza en minutos. Confirmaremos por teléfono o correo.',
      'contact.reach': 'Contáctenos Cuando Quiera',
      'contact.area': 'Servimos Austin, TX y áreas cercanas',
      'contact.mapNote': 'Orgullosos de servir el área metropolitana de Austin',
      'form.name': 'Nombre completo',
      'form.phone': 'Teléfono',
      'form.email': 'Correo electrónico',
      'form.address': 'Dirección del servicio',
      'form.service': 'Tipo de servicio',
      'form.serviceSelect': 'Seleccione un servicio…',
      'form.date': 'Fecha preferida',
      'form.notes': 'Notas',
      'form.notesPh': 'Mascotas, código de portón, áreas de enfoque…',
      'form.submit': 'Enviar Solicitud de Reserva',
      'form.success': '¡Gracias! Recibimos su solicitud de reserva. Le contactaremos pronto al teléfono o correo que indicó. Para un servicio más rápido llame al 512-945-1625.',
      'modal.title': 'Reserve Su Limpieza',
      'banner.title': '¿Listo para un hogar más fresco?',
      'banner.sub': 'Reserve limpieza profesional de mucamas en Austin hoy — los cupos se llenan rápido.',
      'footer.blurb': 'Mucamas profesionales alegres y confiables para limpieza de casas en Austin TX — cuando necesite un nuevo comienzo.',
      'footer.explore': 'Explorar',
      'footer.contact': 'Contacto',
      'footer.ctaTitle': 'Obtenga un hogar más limpio',
      'footer.rights': 'Todos los derechos reservados.',
      'footer.seo': 'Servicio de mucamas Austin · Limpieza de casas Austin TX · Limpieza de mudanza Austin',
    },
  };

  const faqs = {
    en: [
      {
        q: 'How do I remove red wine from carpet?',
        a: 'Blot immediately with a clean white cloth (never rub). Sprinkle salt or baking soda to absorb moisture, vacuum, then mix 1 part white vinegar + 2 parts water + a drop of dish soap. Blot from the outside in. Rinse with cold water and blot dry. For set-in stains, call us for professional extraction.',
      },
      {
        q: 'How do I get grease off kitchen tile?',
        a: 'Wipe excess grease with a paper towel. Spray a mix of warm water and dish soap, let sit 5 minutes, scrub with a soft brush or non-scratch pad, then rinse. For stubborn grease, use a baking-soda paste. Avoid harsh steel wool on glazed tile.',
      },
      {
        q: 'How can I remove pet odors from fabric and upholstery?',
        a: 'Vacuum thoroughly first. Sprinkle baking soda, wait 20–30 minutes, then vacuum again. Spot-treat with an enzyme cleaner made for pet urine (follow label). Air-dry fully. Steam cleaning helps for deep odors — we can include this in a deep clean.',
      },
      {
        q: 'What’s the best way to clean hard-water spots on glass?',
        a: 'Mix equal parts white vinegar and water in a spray bottle. Spray, wait 5–10 minutes, wipe with a microfiber cloth, then buff dry. For heavy buildup, use a non-abrasive calcium remover safe for glass. Dry shower doors after each use to prevent new spots.',
      },
      {
        q: 'How do I clean stainless steel appliances without streaks?',
        a: 'Wipe with a damp microfiber cloth and a drop of dish soap along the grain. Rinse the cloth and wipe again. Finish with a dry microfiber cloth. Optional: a tiny amount of mineral oil for shine. Avoid bleach and abrasive powders.',
      },
      {
        q: 'How do I lift coffee stains from countertops?',
        a: 'On sealed stone or laminate: wipe promptly with warm soapy water. For stains, use a baking-soda paste, leave 10 minutes, gently wipe, and rinse. Avoid acidic cleaners (vinegar/lemon) on natural stone like marble or limestone.',
      },
      {
        q: 'How do I clean grout safely?',
        a: 'Mix baking soda with a little water into a paste, apply to grout, scrub with a soft brush, then spray white vinegar (or use oxygen bleach for colored grout), wait, scrub again, and rinse. Seal grout after it dries for longer-lasting results.',
      },
      {
        q: 'What’s a safe DIY for wood floors?',
        a: 'Dry-dust or vacuum with a hard-floor setting first. Damp-mop with a cleaner made for wood or a few drops of mild soap in water — wring the mop almost dry. Never soak wood. Dry footprints immediately. Skip steam mops unless the manufacturer allows them.',
      },
    ],
    es: [
      {
        q: '¿Cómo quito el vino tinto de la alfombra?',
        a: 'Seque con un paño blanco limpio (nunca frote). Espolvoree sal o bicarbonato, aspire, luego mezcle 1 parte de vinagre blanco + 2 de agua + una gota de jabón. Seque de afuera hacia adentro. Enjuague con agua fría. Para manchas antiguas, llámenos para extracción profesional.',
      },
      {
        q: '¿Cómo quito la grasa de los azulejos de la cocina?',
        a: 'Retire el exceso con toalla de papel. Rocíe agua tibia con jabón, deje 5 minutos, friegue con cepillo suave o esponja no abrasiva y enjuague. Para grasa difícil, use pasta de bicarbonato. Evite lana de acero en azulejos esmaltados.',
      },
      {
        q: '¿Cómo elimino olores de mascotas de telas y tapicería?',
        a: 'Aspire bien. Espolvoree bicarbonato, espere 20–30 minutos y aspire. Trate con un limpiador enzimático para orina de mascotas. Seque por completo. El vapor ayuda con olores profundos — podemos incluirlo en una limpieza profunda.',
      },
      {
        q: '¿Cuál es la mejor forma de limpiar manchas de agua dura en el vidrio?',
        a: 'Mezcle partes iguales de vinagre blanco y agua. Rocíe, espere 5–10 minutos, limpie con microfibra y seque. Para acumulación fuerte, use un removedor de calcio no abrasivo. Seque las puertas de ducha después de usarlas.',
      },
      {
        q: '¿Cómo limpio electrodomésticos de acero inoxidable sin rayas?',
        a: 'Pase un paño de microfibra húmedo con una gota de jabón a favor del grano. Enjuague el paño y pase de nuevo. Termine con paño seco. Opcional: un poco de aceite mineral. Evite cloro y polvos abrasivos.',
      },
      {
        q: '¿Cómo quito manchas de café de la encimera?',
        a: 'En piedra sellada o laminado: limpie con agua jabonosa tibia. Para manchas, pasta de bicarbonato 10 minutos, limpie con suavidad y enjuague. Evite ácidos (vinagre/limón) en mármol o caliza natural.',
      },
      {
        q: '¿Cómo limpio la lechada de forma segura?',
        a: 'Haga pasta de bicarbonato y agua, aplique, friegue con cepillo suave, rocíe vinagre blanco (o use blanqueador de oxígeno en lechada de color), espere, friegue y enjuague. Selle la lechada al secarse.',
      },
      {
        q: '¿Qué es seguro para pisos de madera?',
        a: 'Quite el polvo o aspire en modo piso duro. Trapee ligeramente con limpiador para madera o jabón suave en agua — el trapo casi seco. Nunca empape la madera. Seque de inmediato. Evite vapor a menos que el fabricante lo permita.',
      },
    ],
  };

  // Keyword → answer map for virtual cleaning form
  const answerBank = {
    en: [
      {
        keys: ['wine', 'red wine', 'carpet stain'],
        answer:
          'Red wine on carpet: blot (don’t rub) with a white cloth. Cover with salt or baking soda for 5–10 minutes, vacuum, then blot with a solution of 1 cup water + 1 tbsp white vinegar + a drop of dish soap. Work from the edge inward. Rinse with cold water and blot dry. For large or set stains, book a deep clean — we use professional extraction.',
      },
      {
        keys: ['grease', 'oil', 'stove', 'range'],
        answer:
          'Kitchen grease: wipe solids first. Spray warm water + dish soap, wait 5 minutes, scrub with a non-scratch pad along the surface grain. Baking-soda paste works on baked-on spots. Rinse and dry. For range hoods and backsplashes after heavy cooking, our regular or deep cleaning packages handle degreasing thoroughly.',
      },
      {
        keys: ['pet', 'urine', 'odor', 'smell', 'dog', 'cat'],
        answer:
          'Pet odors: vacuum, apply baking soda 20–30 minutes, vacuum again. Use an enzyme cleaner on the source (urine salts need enzymes, not just perfume). Fully dry the fabric. Sun and airflow help. We can add pet-odor treatment to house cleaning Austin TX visits — mention pets when you book.',
      },
      {
        keys: ['hard water', 'soap scum', 'shower', 'glass', 'spots'],
        answer:
          'Hard-water spots: equal parts white vinegar and water, spray, wait 5–10 minutes, wipe with microfiber, buff dry. Repeat for heavy scale. A daily squeegee after showers prevents buildup. Our deep cleaning includes shower glass and fixtures — popular with Austin hard-water homes.',
      },
      {
        keys: ['stainless', 'fridge', 'appliance', 'fingerprint'],
        answer:
          'Stainless steel: wipe with damp microfiber + drop of dish soap in the direction of the grain, then dry with a clean cloth. Skip paper towels (they leave lint) and bleach. A tiny bit of mineral oil can reduce fingerprints. We polish appliances on every regular house cleaning.',
      },
      {
        keys: ['coffee', 'tea', 'counter', 'countertop', 'stain'],
        answer:
          'Coffee stains: wipe immediately with warm soapy water. For leftover marks, baking-soda paste for 10 minutes, gentle wipe, rinse. Never use vinegar on marble or natural stone. Tell us your counter material when booking so we use the right products.',
      },
      {
        keys: ['grout', 'tile', 'mold', 'mildew'],
        answer:
          'Grout: baking-soda paste + soft brush, then vinegar spray (or oxygen bleach for colored grout). Scrub, rinse, dry. Seal grout when fully dry. For bathroom mold/mildew, improve ventilation and dry surfaces after showers. Deep cleaning includes detailed grout work.',
      },
      {
        keys: ['wood', 'hardwood', 'floor', 'scratch'],
        answer:
          'Wood floors: dust or vacuum first, then damp-mop (almost dry) with a wood-safe cleaner. Never soak. Wipe spills right away. Felt pads under furniture help. Our teams are trained for Austin hardwood and LVP — request floor type in your booking notes.',
      },
      {
        keys: ['move', 'deposit', 'empty', 'move-out', 'move out'],
        answer:
          'Move-out cleaning: empty the home, focus on kitchens, baths, inside cabinets/drawers, appliances, baseboards, and floors. Landlords often check ovens, fridges, and showers closely. Book our Move-In/Move-Out package (from $250) and share your checklist — we aim for deposit-ready results.',
      },
      {
        keys: ['price', 'cost', 'how much', 'quote', 'afford'],
        answer:
          'Pricing depends on home size, condition, and service type. Regular cleans often start around $120; deep cleans from $220; move-outs from $250. Offices and post-construction are custom quotes. Call 512-945-1625 or use Book Now for a free estimate tailored to your Austin address.',
      },
    ],
    es: [
      {
        keys: ['vino', 'alfombra', 'mancha de vino', 'wine'],
        answer:
          'Vino tinto en alfombra: seque con paño blanco (no frote). Cubra con sal o bicarbonato 5–10 min, aspire, luego seque con 1 taza de agua + 1 cda de vinagre blanco + una gota de jabón. Trabaje desde el borde. Enjuague con agua fría. Para manchas grandes, reserve una limpieza profunda con extracción profesional.',
      },
      {
        keys: ['grasa', 'aceite', 'estufa', 'grease'],
        answer:
          'Grasa de cocina: retire el exceso. Rocíe agua tibia con jabón, espere 5 min, friegue con esponja no abrasiva. Pasta de bicarbonato para grasa quemada. Enjuague y seque. Nuestros paquetes de limpieza regular o profunda desengrasan campanas y salpicaderos a fondo.',
      },
      {
        keys: ['mascota', 'orina', 'olor', 'perro', 'gato', 'pet'],
        answer:
          'Olores de mascotas: aspire, bicarbonato 20–30 min, aspire de nuevo. Use limpiador enzimático en la fuente. Seque bien. Podemos agregar tratamiento de olores en su limpieza en Austin — mencione mascotas al reservar.',
      },
      {
        keys: ['agua dura', 'jabón', 'ducha', 'vidrio', 'manchas', 'hard water'],
        answer:
          'Manchas de agua dura: vinagre blanco y agua a partes iguales, rocíe, espere 5–10 min, limpie con microfibra y seque. Un jalador diario después de la ducha previene acumulación. Nuestra limpieza profunda incluye vidrios y grifería — muy pedida en Austin.',
      },
      {
        keys: ['inoxidable', 'acero', 'refrigerador', 'electrodoméstico', 'stainless'],
        answer:
          'Acero inoxidable: microfibra húmeda con una gota de jabón a favor del grano, luego seque. Evite toallas de papel y cloro. Un poco de aceite mineral reduce huellas. Brillamos electrodomésticos en cada limpieza regular.',
      },
      {
        keys: ['café', 'té', 'encimera', 'counter', 'coffee'],
        answer:
          'Manchas de café: limpie de inmediato con agua jabonosa tibia. Pasta de bicarbonato 10 min para restos. Nunca use vinagre en mármol o piedra natural. Indique el material de su encimera al reservar.',
      },
      {
        keys: ['lechada', 'azulejo', 'moho', 'grout', 'tile'],
        answer:
          'Lechada: pasta de bicarbonato + cepillo suave, luego vinagre (o blanqueador de oxígeno en lechada de color). Friegue, enjuague y seque. Selle al secarse. Para moho en baños, mejore ventilación. La limpieza profunda incluye lechada detallada.',
      },
      {
        keys: ['madera', 'piso', 'hardwood', 'wood'],
        answer:
          'Pisos de madera: quite polvo o aspire, luego trapee ligeramente (casi seco) con limpiador para madera. Nunca empape. Seque derrames al instante. Nuestro equipo está capacitado para hardwood y LVP en Austin — anote el tipo de piso en su reserva.',
      },
      {
        keys: ['mudanza', 'depósito', 'vacío', 'salida', 'move'],
        answer:
          'Limpieza de mudanza: casa vacía, enfoque en cocina, baños, interiores de gabinetes, electrodomésticos, zócalos y pisos. Reserve Entrada/Salida (desde $250) y comparta su lista de verificación — buscamos resultados listos para el depósito.',
      },
      {
        keys: ['precio', 'costo', 'cuánto', 'cotización', 'price'],
        answer:
          'El precio depende del tamaño del hogar, condición y tipo de servicio. Limpiezas regulares desde ~$120; profundas desde $220; mudanzas desde $250. Oficinas y post-construcción son cotización personalizada. Llame al 512-945-1625 o use Reservar Ahora.',
      },
    ],
  };

  const defaultAnswer = {
    en: 'Great question! For most household messes: (1) blot or dry-wipe excess, (2) use the mildest effective cleaner first (soap + water, then baking soda or vinegar where safe), (3) rinse and dry. Avoid mixing bleach with ammonia or vinegar. For best results in Austin homes — hard water, pollen, and pet traffic — book a professional clean. Call 512-945-1625 or hit Book Now. Tip: describe the surface and stain type for more specific advice next time.',
    es: '¡Buena pregunta! Para la mayoría de manchas: (1) seque o retire el exceso, (2) use el limpiador más suave efectivo (jabón + agua, luego bicarbonato o vinagre donde sea seguro), (3) enjuague y seque. No mezcle cloro con amoníaco o vinagre. Para mejores resultados en hogares de Austin, reserve una limpieza profesional. Llame al 512-945-1625 o pulse Reservar Ahora. Consejo: describa la superficie y el tipo de mancha para una respuesta más específica.',
  };

  let currentLang = localStorage.getItem('ams-lang') || 'en';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function applyLanguage(lang) {
    currentLang = lang === 'es' ? 'es' : 'en';
    localStorage.setItem('ams-lang', currentLang);
    document.documentElement.lang = currentLang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // Language toggle UI
    document.getElementById('lang-en')?.classList.toggle('active', currentLang === 'en');
    document.getElementById('lang-es')?.classList.toggle('active', currentLang === 'es');

    renderFaqs();
  }

  function renderFaqs() {
    const list = document.getElementById('faq-list');
    if (!list) return;
    const items = faqs[currentLang] || faqs.en;
    list.innerHTML = items
      .map(
        (item, i) => `
      <details class="faq-item">
        <summary>${escapeHtml(item.q)}</summary>
        <div class="faq-body">${escapeHtml(item.a)}</div>
      </details>`
      )
      .join('');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function answerQuestion(raw) {
    const q = (raw || '').toLowerCase().trim();
    if (!q) return t('virtual.empty');
    const bank = answerBank[currentLang] || answerBank.en;
    for (const entry of bank) {
      if (entry.keys.some((k) => q.includes(k.toLowerCase()))) {
        return entry.answer;
      }
    }
    return defaultAnswer[currentLang] || defaultAnswer.en;
  }

  // Modal
  const modal = document.getElementById('booking-modal');
  function openModal(service) {
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
    if (service) {
      const sel = document.getElementById('m-service');
      if (sel) sel.value = service;
    }
    const first = document.getElementById('m-name');
    setTimeout(() => first?.focus(), 50);
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
    const success = document.getElementById('modal-success');
    if (success) {
      success.classList.add('hidden');
      success.textContent = '';
    }
  }

  function handleFormSubmit(form, successEl) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = Object.fromEntries(new FormData(form).entries());
      try {
        const prev = JSON.parse(localStorage.getItem('ams-bookings') || '[]');
        prev.push({ ...data, at: new Date().toISOString(), lang: currentLang });
        localStorage.setItem('ams-bookings', JSON.stringify(prev));
      } catch (_) {
        /* ignore storage errors */
      }
      if (successEl) {
        successEl.textContent = t('form.success');
        successEl.classList.remove('hidden');
      }
      form.reset();
    });
  }

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    // Min date = today
    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach((el) => {
      el.min = today;
    });

    applyLanguage(currentLang);

    document.getElementById('lang-en')?.addEventListener('click', () => applyLanguage('en'));
    document.getElementById('lang-es')?.addEventListener('click', () => applyLanguage('es'));

    // Mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    menuBtn?.addEventListener('click', () => {
      const open = menu?.classList.toggle('hidden') === false;
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        menu?.classList.add('hidden');
        menuBtn?.setAttribute('aria-expanded', 'false');
      });
    });

    // Booking buttons
    document.querySelectorAll('[data-open-booking]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service') || '';
        openModal(service);
        menu?.classList.add('hidden');
      });
    });
    document.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Forms
    const bookingForm = document.getElementById('booking-form');
    const formSuccess = document.getElementById('form-success');
    if (bookingForm) handleFormSubmit(bookingForm, formSuccess);

    const modalForm = document.getElementById('modal-form');
    const modalSuccess = document.getElementById('modal-success');
    if (modalForm) handleFormSubmit(modalForm, modalSuccess);

    // Virtual Q&A
    const askBtn = document.getElementById('virtual-ask');
    const qInput = document.getElementById('virtual-q');
    const answerBox = document.getElementById('virtual-answer');
    function runAsk() {
      if (!answerBox) return;
      const q = qInput?.value || '';
      answerBox.classList.remove('hidden');
      answerBox.textContent = t('virtual.thinking');
      setTimeout(() => {
        answerBox.textContent = answerQuestion(q);
      }, 350);
    }
    askBtn?.addEventListener('click', runAsk);
    qInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        runAsk();
      }
    });
  });
})();
