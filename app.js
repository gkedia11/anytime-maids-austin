/* Anytime Maid Service — interactions + EN / ES / FR i18n */
(function () {
  'use strict';

  const langMeta = {
    en: { name: 'English', flag: 'us', htmlLang: 'en' },
    es: { name: 'Español', flag: 'es', htmlLang: 'es' },
    fr: { name: 'Français', flag: 'fr', htmlLang: 'fr' },
  };

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
      'services.title': 'Professional Maid Service Austin Trusts',
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
      'why.title': 'Austin Families Trust Anytime Maid Service',
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
      'services.title': 'Servicio Profesional de Mucamas en el que Austin Confía',
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
      'why.title': 'Familias de Austin Confían en Anytime Maid Service',
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
    fr: {
      'nav.services': 'Services',
      'nav.virtual': 'Nettoyage Virtuel',
      'nav.gallery': 'Galerie',
      'nav.why': 'Pourquoi Nous',
      'nav.contact': 'Contact',
      'cta.bookNow': 'Réserver',
      'cta.bookCleaning': 'Réserver un Nettoyage',
      'cta.tryVirtual': 'Essayer le Nettoyage Virtuel',
      'cta.callToBook': 'Appelez le 512-945-1625 pour Réserver',
      'cta.preferPro': 'Préférez un pro ? Réservez un nettoyage',
      'cta.getResults': 'Obtenez ces résultats — Réservez',
      'hero.badge': 'Service de ménage à Austin · Pros de confiance',
      'hero.title': 'Nettoyage de confiance à Austin, TX — Quand vous en avez besoin',
      'hero.sub': 'Professionnel • Abordable • Service local de confiance',
      'hero.point1': 'Assuré & cautionné',
      'hero.point2': 'Disponibilité dans la semaine',
      'hero.point3': 'Options écologiques',
      'services.kicker': 'Nettoyage de maison Austin TX',
      'services.title': 'Un service de ménage professionnel en qui Austin a confiance',
      'services.desc': 'Des entretiens hebdomadaires au nettoyage de déménagement à Austin — réservez dès aujourd’hui.',
      'svc1.title': 'Nettoyage régulier',
      'svc1.desc': 'Service professionnel hebdomadaire ou bihebdomadaire pour garder votre maison d’Austin fraîche et accueillante.',
      'svc1.price': 'À partir de 120 $',
      'svc2.title': 'Grand nettoyage',
      'svc2.desc': 'Nettoyage en profondeur des cuisines, salles de bain, plinthes et recoins — parfait pour une remise à neuf saisonnière.',
      'svc2.price': 'À partir de 220 $',
      'svc3.title': 'Entrée / Sortie (Déménagement)',
      'svc3.desc': 'Nettoyage de déménagement plébiscité à Austin — résultats prêts pour le dépôt de garantie.',
      'svc3.price': 'À partir de 250 $',
      'svc4.title': 'Bureaux & Commercial',
      'svc4.desc': 'Nettoyage fiable de bureaux pour petites entreprises, suites et espaces partagés à Austin, horaires flexibles.',
      'svc4.price': 'Devis personnalisé',
      'svc5.title': 'Post-construction',
      'svc5.desc': 'Élimination de poussière, débris et particules fines après travaux pour un espace sûr et brillant.',
      'svc5.price': 'Devis personnalisé',
      'svc6.title': 'Options écologiques',
      'svc6.desc': 'Produits à base végétale, faibles en COV, sûrs pour enfants, animaux et foyers sensibles.',
      'svc6.price': 'À partir de 130 $',
      'virtual.badge': 'Aide DIY gratuite',
      'virtual.title': 'Aide au nettoyage virtuel — Réponses DIY instantanées',
      'virtual.desc': 'Posez vos questions à nos experts : taches de vin sur moquette, graisse sur carrelage, odeurs d’animaux sur tissus, et plus. Conseils étape par étape instantanément.',
      'virtual.inputLabel': 'Votre question de nettoyage',
      'virtual.placeholder': 'ex. Comment enlever le vin rouge de la moquette ?',
      'virtual.askBtn': 'Poser la question',
      'virtual.faqTitle': 'FAQ taches & surfaces courantes',
      'virtual.empty': 'Veuillez d’abord saisir une question de nettoyage.',
      'virtual.thinking': 'Consultation de nos conseils pro…',
      'gallery.kicker': 'Vrais résultats',
      'gallery.title': 'Galerie avant / après',
      'gallery.desc': 'Découvrez l’éclat que notre service de ménage apporte aux maisons du centre du Texas.',
      'gallery.cap1': 'Transformation déménagement',
      'gallery.cap2': 'Grand nettoyage salle de bain',
      'gallery.cap3': 'Cuisine prête',
      'gallery.cap4': 'Finitions éclatantes',
      'gallery.cap5': 'Bureau impeccable',
      'gallery.cap6': 'Post-construction',
      'gallery.cap7': 'Nettoyage écologique',
      'gallery.cap8': 'Salon lumineux',
      'why.kicker': 'Pourquoi nous choisir',
      'why.title': 'Les familles d’Austin font confiance à Anytime Maid Service',
      'why.desc': 'Des professionnelles chaleureuses et fiables que les propriétaires d’Austin recommandent.',
      'why.t1': 'Équipe locale d’Austin',
      'why.d1': 'Des voisins qui connaissent les maisons du Texas central, l’eau calcaire et la saison des pollens.',
      'why.t2': 'Assuré & cautionné',
      'why.d2': 'Tranquillité d’esprit à chaque visite — votre maison et vos biens sont protégés.',
      'why.t3': '100 % satisfaction',
      'why.d3': 'Pas satisfait ? Nous corrigeons — votre sourire est notre checklist qualité.',
      'why.t4': 'Produits éco disponibles',
      'why.d4': 'Demandez des produits verts efficaces sans fumées agressives.',
      'why.q1': '« Meilleur service de ménage à Austin. Toujours à l’heure, toujours minutieux — notre cuisine brille. »',
      'why.q2': '« Le nettoyage de déménagement a sauvé notre dépôt. Des pros sur qui on peut vraiment compter. »',
      'why.q3': '« Équipe sympathique, options éco pour notre tout-petit, et des prix de nettoyage Austin TX qui ont du sens. »',
      'contact.kicker': 'Réservez aujourd’hui',
      'contact.title': 'Contact & réservation',
      'contact.desc': 'Demandez votre nettoyage en quelques minutes. Nous confirmons par téléphone ou e-mail.',
      'contact.reach': 'Contactez-nous à tout moment',
      'contact.area': 'Service à Austin, TX et environs',
      'contact.mapNote': 'Fiers de servir la grande région d’Austin',
      'form.name': 'Nom complet',
      'form.phone': 'Téléphone',
      'form.email': 'E-mail',
      'form.address': 'Adresse du service',
      'form.service': 'Type de service',
      'form.serviceSelect': 'Choisissez un service…',
      'form.date': 'Date souhaitée',
      'form.notes': 'Notes',
      'form.notesPh': 'Animaux, code portail, zones prioritaires…',
      'form.submit': 'Envoyer la demande de réservation',
      'form.success': 'Merci ! Votre demande de réservation a bien été reçue. Nous vous contacterons bientôt au numéro ou e-mail fourni. Pour un service plus rapide, appelez le 512-945-1625.',
      'modal.title': 'Réservez votre nettoyage',
      'banner.title': 'Prêt pour une maison plus fraîche ?',
      'banner.sub': 'Réservez un nettoyage professionnel à Austin aujourd’hui — les créneaux partent vite.',
      'footer.blurb': 'Des professionnelles joyeuses et fiables pour le nettoyage de maisons à Austin TX — quand vous avez besoin d’un nouveau départ.',
      'footer.explore': 'Explorer',
      'footer.contact': 'Contact',
      'footer.ctaTitle': 'Obtenez une maison plus propre',
      'footer.rights': 'Tous droits réservés.',
      'footer.seo': 'Service de ménage Austin · Nettoyage de maison Austin TX · Nettoyage de déménagement Austin',
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
    fr: [
      {
        q: 'Comment enlever le vin rouge de la moquette ?',
        a: 'Tamponnez immédiatement avec un chiffon blanc propre (ne frottez jamais). Saupoudrez de sel ou de bicarbonate, aspirez, puis mélangez 1 part de vinaigre blanc + 2 parts d’eau + une goutte de liquide vaisselle. Tamponnez de l’extérieur vers l’intérieur. Rincez à l’eau froide et séchez. Pour les taches anciennes, appelez-nous pour une extraction pro.',
      },
      {
        q: 'Comment enlever la graisse des carreaux de cuisine ?',
        a: 'Retirez l’excès avec du papier absorbant. Vaporisez de l’eau tiède savonneuse, laissez 5 minutes, frottez avec une brosse douce ou un tampon non abrasif, puis rincez. Pour la graisse tenace, utilisez une pâte de bicarbonate. Évitez la laine d’acier sur le carrelage émaillé.',
      },
      {
        q: 'Comment éliminer les odeurs d’animaux sur tissus et tissus d’ameublement ?',
        a: 'Aspirez d’abord soigneusement. Saupoudrez de bicarbonate, attendez 20–30 minutes, aspirez à nouveau. Traitez avec un nettoyant enzymatique pour urine d’animaux. Séchez complètement. La vapeur aide pour les odeurs profondes — nous pouvons l’inclure dans un grand nettoyage.',
      },
      {
        q: 'Quelle est la meilleure façon d’enlever le calcaire sur le verre ?',
        a: 'Mélangez parts égales de vinaigre blanc et d’eau. Vaporisez, attendez 5–10 minutes, essuyez avec une microfibre, puis polissez. Pour un dépôt important, utilisez un détartrant non abrasif pour le verre. Séchez les portes de douche après chaque usage.',
      },
      {
        q: 'Comment nettoyer l’inox sans traces ?',
        a: 'Passez une microfibre humide avec une goutte de liquide vaisselle dans le sens du grain. Rincez le chiffon et repassez. Terminez avec un chiffon sec. Optionnel : une touche d’huile minérale pour la brillance. Évitez l’eau de Javel et les poudres abrasives.',
      },
      {
        q: 'Comment enlever une tache de café sur le plan de travail ?',
        a: 'Sur pierre scellée ou stratifié : essuyez vite à l’eau savonneuse tiède. Pour les taches, pâte de bicarbonate 10 minutes, essuyez doucement et rincez. Évitez les acides (vinaigre/citron) sur le marbre ou la pierre calcaire naturelle.',
      },
      {
        q: 'Comment nettoyer les joints de carrelage en sécurité ?',
        a: 'Faites une pâte de bicarbonate et d’eau, appliquez sur les joints, frottez avec une brosse douce, vaporisez du vinaigre blanc (ou un agent oxygéné pour joints colorés), attendez, frottez et rincez. Scellez les joints une fois secs.',
      },
      {
        q: 'Que faire en DIY pour un parquet en bois ?',
        a: 'Dépoussiérez ou aspirez en mode sols durs d’abord. Passez une serpillière légèrement humide avec un nettoyant pour bois ou quelques gouttes de savon doux — presque sèche. Ne jamais noyer le bois. Séchez immédiatement. Évitez la vapeur sauf si le fabricant l’autorise.',
      },
    ],
  };

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
    fr: [
      {
        keys: ['vin', 'moquette', 'tache de vin', 'wine'],
        answer:
          'Vin rouge sur moquette : tamponnez (ne frottez pas) avec un chiffon blanc. Couvrez de sel ou de bicarbonate 5–10 min, aspirez, puis tamponnez avec 1 tasse d’eau + 1 c. à soupe de vinaigre blanc + une goutte de liquide vaisselle. Travaillez depuis le bord. Rincez à l’eau froide. Pour les grandes taches, réservez un grand nettoyage avec extraction pro.',
      },
      {
        keys: ['graisse', 'huile', 'cuisinière', 'grease'],
        answer:
          'Graisse de cuisine : retirez d’abord l’excès. Vaporisez eau tiède + liquide vaisselle, attendez 5 min, frottez avec un tampon non abrasif. La pâte de bicarbonate aide sur les taches cuites. Rincez et séchez. Nos forfaits réguliers ou profonds dégraissent hottes et crédences en profondeur.',
      },
      {
        keys: ['animal', 'urine', 'odeur', 'chien', 'chat', 'pet'],
        answer:
          'Odeurs d’animaux : aspirez, bicarbonate 20–30 min, aspirez à nouveau. Utilisez un nettoyant enzymatique à la source. Séchez bien. Nous pouvons ajouter un traitement des odeurs à votre nettoyage à Austin — mentionnez les animaux à la réservation.',
      },
      {
        keys: ['calcaire', 'eau dure', 'douche', 'verre', 'taches', 'hard water'],
        answer:
          'Taches de calcaire : vinaigre blanc et eau à parts égales, vaporisez, attendez 5–10 min, essuyez à la microfibre et séchez. Une raclette après chaque douche limite les dépôts. Notre grand nettoyage inclut vitres et robinetterie — très demandé à Austin.',
      },
      {
        keys: ['inox', 'acier', 'frigo', 'électroménager', 'stainless'],
        answer:
          'Inox : microfibre humide avec une goutte de liquide vaisselle dans le sens du grain, puis séchez. Évitez les essuie-tout et l’eau de Javel. Une touche d’huile minérale réduit les traces de doigts. Nous polissons les appareils à chaque entretien régulier.',
      },
      {
        keys: ['café', 'thé', 'plan de travail', 'counter', 'coffee'],
        answer:
          'Taches de café : essuyez tout de suite à l’eau savonneuse tiède. Pâte de bicarbonate 10 min pour les traces. N’utilisez jamais de vinaigre sur le marbre ou la pierre naturelle. Indiquez le matériau de votre plan de travail à la réservation.',
      },
      {
        keys: ['joint', 'carrelage', 'moisissure', 'grout', 'tile'],
        answer:
          'Joints : pâte de bicarbonate + brosse douce, puis vinaigre (ou agent oxygéné pour joints colorés). Frottez, rincez, séchez. Scellez une fois secs. Pour les moisissures de salle de bain, améliorez la ventilation. Le grand nettoyage inclut les joints en détail.',
      },
      {
        keys: ['bois', 'parquet', 'sol', 'hardwood', 'wood'],
        answer:
          'Parquet : dépoussiérez ou aspirez d’abord, puis serpillière quasi sèche avec un nettoyant pour bois. Ne jamais noyer. Séchez les éclaboussures aussitôt. Notre équipe est formée pour le hardwood et le LVP à Austin — notez le type de sol dans votre réservation.',
      },
      {
        keys: ['déménagement', 'dépôt', 'vide', 'sortie', 'move'],
        answer:
          'Nettoyage de déménagement : maison vide, focus cuisine, salles de bain, intérieurs de placards, appareils, plinthes et sols. Réservez Entrée/Sortie (à partir de 250 $) et partagez votre checklist — nous visons un résultat prêt pour le dépôt de garantie.',
      },
      {
        keys: ['prix', 'coût', 'combien', 'devis', 'price'],
        answer:
          'Le prix dépend de la taille du logement, de l’état et du type de service. Entretiens réguliers souvent dès ~120 $ ; grands nettoyages dès 220 $ ; déménagements dès 250 $. Bureaux et post-construction : devis sur mesure. Appelez le 512-945-1625 ou utilisez Réserver.',
      },
    ],
  };

  const defaultAnswer = {
    en: 'Great question! For most household messes: (1) blot or dry-wipe excess, (2) use the mildest effective cleaner first (soap + water, then baking soda or vinegar where safe), (3) rinse and dry. Avoid mixing bleach with ammonia or vinegar. For best results in Austin homes — hard water, pollen, and pet traffic — book a professional clean. Call 512-945-1625 or hit Book Now. Tip: describe the surface and stain type for more specific advice next time.',
    es: '¡Buena pregunta! Para la mayoría de manchas: (1) seque o retire el exceso, (2) use el limpiador más suave efectivo (jabón + agua, luego bicarbonato o vinagre donde sea seguro), (3) enjuague y seque. No mezcle cloro con amoníaco o vinagre. Para mejores resultados en hogares de Austin, reserve una limpieza profesional. Llame al 512-945-1625 o pulse Reservar Ahora.',
    fr: 'Bonne question ! Pour la plupart des taches : (1) tamponnez ou retirez l’excès, (2) utilisez d’abord le nettoyant le plus doux efficace (savon + eau, puis bicarbonate ou vinaigre si sûr), (3) rincez et séchez. Ne mélangez pas l’eau de Javel avec l’ammoniac ou le vinaigre. Pour de meilleurs résultats à Austin, réservez un nettoyage pro. Appelez le 512-945-1625 ou cliquez sur Réserver.',
  };

  let currentLang = localStorage.getItem('ams-lang') || 'en';
  if (!langMeta[currentLang]) currentLang = 'en';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function flagUrl(code) {
    return 'https://flagcdn.com/w40/' + code + '.png';
  }

  function updateLangUI() {
    const meta = langMeta[currentLang] || langMeta.en;
    const flagEl = document.getElementById('lang-current-flag');
    const nameEl = document.getElementById('lang-current-name');
    if (flagEl) {
      flagEl.src = flagUrl(meta.flag);
      flagEl.alt = meta.name + ' flag';
    }
    if (nameEl) nameEl.textContent = meta.name;

    document.querySelectorAll('.lang-option').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  function setLangMenuOpen(open) {
    const menu = document.getElementById('lang-menu');
    const toggle = document.getElementById('lang-toggle');
    if (!menu || !toggle) return;
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function applyLanguage(lang) {
    currentLang = langMeta[lang] ? lang : 'en';
    localStorage.setItem('ams-lang', currentLang);
    document.documentElement.lang = langMeta[currentLang].htmlLang;

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

    updateLangUI();
    renderFaqs();
    setLangMenuOpen(false);
  }

  function renderFaqs() {
    const list = document.getElementById('faq-list');
    if (!list) return;
    const items = faqs[currentLang] || faqs.en;
    list.innerHTML = items
      .map(
        (item) => `
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
        /* ignore */
      }
      if (successEl) {
        successEl.textContent = t('form.success');
        successEl.classList.remove('hidden');
      }
      form.reset();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();

    const today = new Date().toISOString().split('T')[0];
    document.querySelectorAll('input[type="date"]').forEach((el) => {
      el.min = today;
    });

    applyLanguage(currentLang);

    // Language dropdown
    const toggle = document.getElementById('lang-toggle');
    toggle?.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = document.getElementById('lang-menu');
      const open = menu?.classList.contains('hidden');
      setLangMenuOpen(!!open);
    });
    document.querySelectorAll('.lang-option').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });
    document.addEventListener('click', (e) => {
      const switcher = document.getElementById('lang-switcher');
      if (switcher && !switcher.contains(e.target)) setLangMenuOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setLangMenuOpen(false);
    });

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

    document.querySelectorAll('[data-open-booking]').forEach((btn) => {
      btn.addEventListener('click', () => {
        openModal(btn.getAttribute('data-service') || '');
        menu?.classList.add('hidden');
      });
    });
    document.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    const bookingForm = document.getElementById('booking-form');
    const formSuccess = document.getElementById('form-success');
    if (bookingForm) handleFormSubmit(bookingForm, formSuccess);

    const modalForm = document.getElementById('modal-form');
    const modalSuccess = document.getElementById('modal-success');
    if (modalForm) handleFormSubmit(modalForm, modalSuccess);

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
