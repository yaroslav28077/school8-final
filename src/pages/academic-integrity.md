---
title: "Академічна доброчесність"
layout: "layout.njk"
permalink: "/academic-integrity/"
page_styles: |
  /* Enhanced Document Links */
          .links-container {
              counter-reset: doc-counter;
          }
  
          .doc-link {
              position: relative;
              padding-left: 80px !important;
              margin-bottom: 20px;
              transition: all 0.3s ease;
              display: block;
              background: rgba(255, 255, 255, 0.9);
              padding: 15px 20px;
              border-left: 5px solid var(--primary-green);
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
              font-weight: 600;
              color: var(--text-dark);
              text-decoration: none;
          }
  
          .doc-link::before {
              counter-increment: doc-counter;
              content: counter(doc-counter);
              position: absolute;
              left: 20px;
              top: 50%;
              transform: translateY(-50%);
              width: 45px;
              height: 45px;
              background: linear-gradient(135deg, var(--primary-green), var(--dark-green));
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: 1.2rem;
              font-family: 'Montserrat', sans-serif;
              box-shadow: 0 3px 10px rgba(46, 125, 50, 0.3);
              transition: all 0.3s ease;
          }
  
          .doc-link:hover::before {
              transform: translateY(-50%) scale(1.1);
              box-shadow: 0 5px 15px rgba(46, 125, 50, 0.5);
          }
  
          .doc-link:hover {
              transform: translateX(10px);
              box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
              background: var(--white);
              color: var(--primary-green);
          }
  
          .doc-link-col {
              display: flex;
              flex-direction: column;
              gap: 8px;
          }
  
          .doc-link-col span {
              font-size: 1.05rem;
              line-height: 1.4;
          }
  
          /* Premium Law Card */
          .law-card-link {
              display: flex;
              align-items: center;
              gap: 24px;
              background: linear-gradient(135deg, #ffffff 0%, #f1f8f2 100%);
              border: 2px solid #c8e6c9;
              border-left: 6px solid var(--primary-green);
              border-radius: 16px;
              padding: 24px 28px;
              text-decoration: none;
              color: var(--text-dark);
              box-shadow: 0 4px 20px rgba(46, 125, 50, 0.1);
              transition: all 0.35s ease;
              position: relative;
              overflow: hidden;
          }
  
          .law-card-link::after {
              content: '';
              position: absolute;
              top: 0; left: 0;
              width: 100%; height: 100%;
              background: linear-gradient(135deg, var(--primary-green), var(--dark-green));
              opacity: 0;
              transition: opacity 0.35s ease;
              z-index: 0;
          }
  
          .law-card-link:hover::after {
              opacity: 1;
          }
  
          .law-card-link:hover {
              border-color: var(--primary-green);
              transform: translateY(-3px);
              box-shadow: 0 12px 35px rgba(46, 125, 50, 0.3);
              color: white;
          }
  
          .law-card-icon {
              width: 64px;
              height: 64px;
              background: linear-gradient(135deg, var(--primary-green), var(--dark-green));
              border-radius: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2rem;
              flex-shrink: 0;
              box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
              transition: transform 0.35s ease;
              position: relative;
              z-index: 1;
          }
  
          .law-card-link:hover .law-card-icon {
              transform: scale(1.1) rotate(-5deg);
              background: rgba(255,255,255,0.2);
              box-shadow: 0 4px 12px rgba(255,255,255,0.2);
          }
  
          .law-card-body {
              flex: 1;
              position: relative;
              z-index: 1;
          }
  
          .law-card-label {
              font-family: 'Montserrat', sans-serif;
              font-size: 0.75rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: var(--accent-orange);
              margin-bottom: 6px;
              transition: color 0.35s ease;
          }
  
          .law-card-link:hover .law-card-label {
              color: rgba(255, 200, 100, 1);
          }
  
          .law-card-title {
              font-family: 'Montserrat', sans-serif;
              font-size: 1.25rem;
              font-weight: 700;
              color: var(--text-dark);
              line-height: 1.3;
              transition: color 0.35s ease;
          }
  
          .law-card-link:hover .law-card-title {
              color: white;
          }
  
          .law-card-arrow {
              font-size: 1.8rem;
              color: var(--primary-green);
              font-weight: 700;
              transition: all 0.35s ease;
              position: relative;
              z-index: 1;
              flex-shrink: 0;
          }
  
          .law-card-link:hover .law-card-arrow {
              color: white;
              transform: translateX(6px);
          }
  
          /* ===== АЛГОРИТМ ===== */
          .algo-section {
              margin-top: 40px;
              background: #f7f9ff;
              border-radius: 20px;
              padding: 36px 40px 32px;
              border: 1px solid #dce6ff;
              box-shadow: 0 6px 30px rgba(26,58,143,0.07);
          }
  
          .algo-header {
              display: flex;
              align-items: center;
              gap: 20px;
              margin-bottom: 36px;
              padding-bottom: 24px;
              border-bottom: 2px solid #dce6ff;
          }
  
          .algo-header-icon {
              width: 64px;
              height: 64px;
              background: linear-gradient(135deg, #1a3a8f, #2d5be3);
              border-radius: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.9rem;
              flex-shrink: 0;
              box-shadow: 0 4px 16px rgba(26,58,143,0.25);
          }
  
          .algo-header-label {
              font-size: 0.8rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              color: #e67e00;
              margin-bottom: 4px;
              font-family: 'Montserrat', sans-serif;
          }
  
          .algo-header-title {
              font-family: 'Montserrat', sans-serif;
              font-size: 1.55rem;
              font-weight: 800;
              color: #1a3a8f;
              margin: 0;
              line-height: 1.3;
          }
  
          .algo-step {
              display: flex;
              gap: 20px;
              margin-bottom: 28px;
              background: white;
              border-radius: 14px;
              padding: 22px 24px;
              box-shadow: 0 2px 12px rgba(26,58,143,0.07);
              border-left: 4px solid transparent;
              transition: box-shadow 0.25s ease, border-color 0.25s ease;
          }
  
          .algo-step:hover {
              box-shadow: 0 6px 24px rgba(26,58,143,0.13);
              border-left-color: #2d5be3;
          }
  
          .algo-step-num {
              width: 48px;
              height: 48px;
              min-width: 48px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-family: 'Montserrat', sans-serif;
              font-weight: 800;
              font-size: 1rem;
              box-shadow: 0 3px 10px rgba(0,0,0,0.2);
              margin-top: 2px;
          }
  
          .algo-step-body {
              flex: 1;
          }
  
          .algo-step-label {
              font-size: 0.68rem;
              font-weight: 800;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: #999;
              font-family: 'Montserrat', sans-serif;
              margin-bottom: 2px;
          }
  
          .algo-step-title {
              font-family: 'Montserrat', sans-serif;
              font-size: 1.15rem;
              font-weight: 800;
              margin: 0 0 12px 0;
              letter-spacing: 0.3px;
          }
  
          .algo-step-text {
              margin: 8px 0;
              color: #333;
              line-height: 1.65;
              font-size: 0.95rem;
          }
  
          .algo-list {
              margin: 8px 0 8px 20px;
              padding: 0;
              color: #333;
              line-height: 1.7;
              font-size: 0.95rem;
          }
  
          .algo-list li {
              margin-bottom: 6px;
          }
  
          .algo-alert {
              display: flex;
              gap: 14px;
              align-items: flex-start;
              background: #fff8e6;
              border: 1px solid #ffe0a0;
              border-left: 4px solid #e67e00;
              border-radius: 12px;
              padding: 16px 20px;
              margin: 20px 0;
              font-size: 0.93rem;
              line-height: 1.65;
              color: #3d2800;
          }
  
          .algo-alert-inline {
              margin: 16px 0 0 0;
          }
  
          .algo-alert-icon {
              width: 30px;
              height: 30px;
              min-width: 30px;
              background: #e67e00;
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 900;
              font-size: 1rem;
              line-height: 1;
              margin-top: 1px;
          }
  
          .algo-footer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
              gap: 12px;
              margin-top: 32px;
              padding-top: 20px;
              border-top: 1px solid #dce6ff;
              font-size: 0.8rem;
              color: #888;
              font-style: italic;
          }
  
          .algo-source-link {
              color: #2d5be3;
              font-style: normal;
              font-weight: 700;
              text-decoration: none;
              font-size: 0.85rem;
              transition: color 0.2s;
          }
  
          .algo-source-link:hover {
              color: #1a3a8f;
              text-decoration: underline;
          }
  
          @media (max-width: 600px) {
              .algo-section { padding: 20px 16px; }
              .algo-header { flex-direction: column; gap: 12px; }
              .algo-step { flex-direction: column; gap: 12px; }
              .algo-header-title { font-size: 1.2rem; }
              .algo-footer { flex-direction: column; align-items: flex-start; }
          }
blocks:
  - type: "definition_block"
    title: "Що це таке?"
    content: |
      **Академічна доброчесність** – це сукупність етичних принципів та визначених законом правил, якими мають керуватися учасники освітнього процесу під час навчання, викладання та провадження наукової (творчої) діяльності з метою забезпечення довіри до результатів навчання та/або наукових (творчих) досягнень.
    is_danger: false
  - type: "definition_block"
    title: "Корупція"
    content: |
      Це негативне суспільне явище, яке проявляється в злочинному використанні службовими особами, громадськими і політичними діячами їх прав і посадових можливостей з метою особистого збагачення.
    is_danger: true
  - type: "rules_list_block"
    title: "Дотримання академічної доброчесності здобувачами освіти"
    style: "Закон / Права (картка з рамкою)"
    accent_orange: true
    list_type: "маркований"
    rules:
      - text: "самостійне виконання навчальних завдань, завдань поточного та підсумкового контролю результатів навчання (для осіб з особливими освітніми потребами ця вимога застосовується з урахуванням їхніх індивідуальних потреб і можливостей);"
      - text: "посилання на джерела інформації у разі використання ідей, розробок, тверджень, відомостей;"
      - text: "дотримання норм законодавства про авторське право і суміжні права;"
      - text: "надання достовірної інформації про результати власної навчальної (наукової, творчої) діяльності, використані методики досліджень і джерела інформації."
  - type: "algo_block"
    icon: "⚖️"
    label: "при отриманні повідомлення про порушення"
    title: "Алгоритм дій керівника закладу освіти"
    alert_text: |
      Повідомлення підлягає розгляду, якщо наведена у ньому інформація містить **фактичні дані**, що вказують на можливий факт порушення академічної доброчесності, **які можуть бути перевірені**. В іншому випадку уповноважений орган (уповноважена особа) має право залишити повідомлення без розгляду (ч. 2 ст. 37 Закону*).
    source_name: "[Інфографіка 1 ➔](/assets/img/algorithm-director-1.png) [Інфографіка 2 ➔](/assets/img/algorithm-director-2.png) [Інфографіка 3 ➔](/assets/img/algorithm-director-3.png) [Інфографіка 4 ➔](/assets/img/algorithm-director-4.png)"
    footnote: "* ЗУ «Про академічну доброчесність» від 18.12.2025 № 4742-IX · Введення в дію — 31.07.2026"
    steps:
      - label: "КРОК"
        number: "1"
        title: "Реєстрація повідомлення"
        title_color: "#1a3a8f"
        num_bg: "linear-gradient(135deg,#1a3a8f,#2d5be3)"
        content: |
          **Керівник** забезпечує **ОБОВ'ЯЗКОВЕ ФІКСУВАННЯ** усіх отриманих письмових повідомлень (заяв, скарг) про порушення академічної доброчесності.
      - label: "КРОК"
        number: "2"
        title: "Попередній розгляд"
        title_color: "#e67e00"
        num_bg: "linear-gradient(135deg,#e67e00,#f5a623)"
        content: |
          **Керівник:**
          * **перевіряє**, чи належить питання до порушення академічної доброчесності;
          * **визначає**, хто є суб'єктом порушення (здобувач освіти, педагогічний працівник);
          * **перевіряє** наявність первинних доказів.

          **Протягом 3 робочих днів** приймає рішення:
          * про надсилання відповідного повідомлення до **уповноваженого органу** (комісії з питань академічної доброчесності або педагогічної ради) чи **уповноваженої особи**;
          * про утворення уповноваженого органу (**призначення уповноваженої особи**) та надсилання до нього відповідного повідомлення;
          * про притягнення особи до академічної та/або **дисциплінарної відповідальності**, у випадку, визначеному ч. 7 ст. 37 Закону*, з підстав та в порядку, визначених внутрішніми актами закладу.
      - label: "КРОК"
        number: "3"
        title: "Розгляд повідомлення"
        title_color: "#1a3a8f"
        num_bg: "linear-gradient(135deg,#1a3a8f,#2d5be3)"
        content: |
          **Уповноважений орган (уповноважена особа). Протягом 10 робочих днів** з дня надходження повідомлення:
          * **ухвалює рішення про початок розгляду повідомлення** за встановленою процедурою або про залишення повідомлення без розгляду і повідомляє про це заявника;
          * надсилає/надає особі, стосовно якої надійшло повідомлення, його копію та **не пізніш як за 3 робочі дні** до дати розгляду **інформує її про дату, час і місце розгляду повідомлення**.

          Розгляд повідомлення здійснюється **в порядку, затвердженому колегіальним органом управління закладу освіти**, з дотриманням принципів і основних правил реагування на порушення академічної доброчесності, визначених Законом*.

          <div class="algo-alert algo-alert-inline">
              <div class="algo-alert-icon">!</div>
              <div>У разі <strong>визнання факту порушення</strong> академічної доброчесності <strong>особою</strong>, стосовно якої розглядається повідомлення, <strong>перевірка і дослідження доказів не проводяться</strong> (ч. 7 ст. 37 Закону*).</div>
          </div>
      - label: "КРОК"
        number: "4"
        title: "Забезпечення прав сторін"
        title_color: "#e67e00"
        num_bg: "linear-gradient(135deg,#e67e00,#f5a623)"
        content: |
          Особі, стосовно якої розглядається повідомлення, **гарантується право (особисто або через свого представника):**
          * бути поінформованою про початок процедури, дату, час і місце розгляду повідомлення;
          * бути присутньою під час розгляду;
          * ознайомлюватися з усіма матеріалами та надавати до них зауваження;
          * надавати усні та письмові заперечення, пояснення або відмовитися від їх надання;
          * брати участь у дослідженні доказів порушення академічної доброчесності.
      - label: "КРОК"
        number: "5"
        title: "Прийняття рішення"
        title_color: "#1a3a8f"
        num_bg: "linear-gradient(135deg,#1a3a8f,#2d5be3)"
        content: |
          Якщо порушник — **педагог**, **рішення** про встановлення факту порушення та вид відповідальності **приймає педагогічна рада**.<br>Якщо порушник — **здобувач освіти**, заходи реагування визначаються **відповідно до внутрішнього положення закладу** та Закону*.

          <div class="algo-alert algo-alert-inline">
              <div class="algo-alert-icon">!</div>
              <div>Рішення уповноваженого органу має бути:
                  <ul class="algo-list" style="margin-top:8px;">
                      <li><strong>обґрунтованим</strong> (ухваленим на підставі доказів, повно і всебічно досліджених у процесі розгляду, або на підставі визнання особі факту порушення академічної доброчесності);</li>
                      <li><strong>містити інформацію про</strong> конкретний <strong>вид порушення</strong> академічної доброчесності <strong>і санкцію</strong> за таке порушення (ч. 8 ст. 37 Закону*).</li>
                  </ul>
              </div>
          </div>
      - label: "КРОК"
        number: "5➔"
        title: ""
        title_color: "#e67e00"
        num_bg: "linear-gradient(135deg,#e67e00,#f5a623)"
        content: |
          **Керівник:**
          * **видає наказ** на підставі рішення уповноваженого органу (уповноваженої особи);
          * **застосовує академічну відповідальність** відповідно до законодавства та внутрішніх документів закладу;
          * **забезпечує зберігання** матеріалів розгляду;
          * **оприлюднює рішення** на сайті закладу (за відсутності — на сайті засновника закладу).
      - label: "КРОК"
        number: "6"
        title: "Повідомлення сторін"
        title_color: "#1a3a8f"
        num_bg: "linear-gradient(135deg,#1a3a8f,#2d5be3)"
        content: |
          **Керівник** забезпечує:
          * **повідомлення** особи, щодо якої розглядалося повідомлення про порушення академічної доброчесності, та особи, яка подала повідомлення, **про ухвалене рішення**;
          * **доведення сторонам** their **права на оскарження рішення** у порядку, визначеному законодавством чи закладом освіти.

          <div class="algo-alert algo-alert-inline">
              <div class="algo-alert-icon">!</div>
              <div>Рішення уповноваженого органу, ухвалене у встановленому порядку, <strong>набирає чинності з дня його оприлюднення</strong>, а в разі його оскарження — з дня оприлюднення рішення суб'єктом розгляду скарги (ч. 10 ст. 37 Закону*).</div>
          </div>
  - type: "regulation_card_block"
    title: "Про академічну доброчесність"
    subtitle: "ЗАКОН УКРАЇНИ"
    url: "https://zakon.rada.gov.ua/laws/show/4742-20#Text"
    icon: "⚖️"

editable: true
---
