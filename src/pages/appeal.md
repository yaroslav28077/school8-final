---
title: "Звернення"
layout: "layout.njk"
permalink: "/appeal/"
description: "Надішліть звернення до Лубенської гімназії. Ми розглянемо ваше питання та зв'яжемося з вами найближчим часом."
page_styles: |
  /* ── Appeal Page Styles ── */
          .appeal-hero {
              background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%);
              padding: 70px 20px 80px;
              text-align: center;
              position: relative;
              overflow: hidden;
          }
  
          .appeal-hero::before {
              content: '';
              position: absolute;
              inset: 0;
              background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }
  
          .appeal-hero::after {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 60px;
              background: #f4f7f6;
              clip-path: ellipse(55% 100% at 50% 100%);
          }
  
          .appeal-hero-badge {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              background: rgba(255,255,255,0.15);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255,255,255,0.25);
              border-radius: 50px;
              padding: 8px 20px;
              color: #fff;
              font-size: 0.85rem;
              font-weight: 600;
              font-family: 'Montserrat', sans-serif;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 22px;
          }
  
          .appeal-hero h1 {
              font-family: 'Montserrat', sans-serif;
              font-size: 2.8rem;
              font-weight: 800;
              color: #fff;
              margin-bottom: 16px;
              text-shadow: 0 2px 20px rgba(0,0,0,0.2);
          }
  
          .appeal-hero p {
              font-size: 1.15rem;
              color: rgba(255,255,255,0.88);
              max-width: 560px;
              margin: 0 auto;
              line-height: 1.7;
          }
  
          @media (max-width: 600px) {
              .appeal-hero h1 { font-size: 1.9rem; }
              .appeal-hero { padding: 55px 20px 70px; }
          }
  
          /* ── Form Card ── */
          .appeal-section {
              padding: 60px 20px 80px;
          }
  
          .appeal-layout {
              display: grid;
              grid-template-columns: 1fr 2fr;
              gap: 40px;
              max-width: 980px;
              margin: 0 auto;
              align-items: start;
          }
  
          @media (max-width: 768px) {
              .appeal-layout { grid-template-columns: 1fr; }
          }
  
          /* ── Sidebar Info ── */
          .appeal-info {
              display: flex;
              flex-direction: column;
              gap: 18px;
          }
  
          .info-card {
              background: #fff;
              border-radius: 16px;
              padding: 24px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.07);
              border-left: 4px solid var(--primary-green);
              transition: transform 0.2s, box-shadow 0.2s;
          }
  
          .info-card:hover {
              transform: translateY(-3px);
              box-shadow: 0 8px 30px rgba(46,125,50,0.12);
          }
  
          .info-card-icon {
              width: 46px;
              height: 46px;
              background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.4rem;
              margin-bottom: 12px;
          }
  
          .info-card h3 {
              font-family: 'Montserrat', sans-serif;
              font-size: 0.95rem;
              font-weight: 700;
              color: var(--text-dark);
              margin-bottom: 6px;
          }
  
          .info-card p {
              font-size: 0.88rem;
              color: var(--text-light);
              line-height: 1.6;
          }
  
          /* ── Form Card ── */
          .appeal-form-card {
              background: #fff;
              border-radius: 24px;
              padding: 44px 44px 40px;
              box-shadow: 0 10px 50px rgba(0,0,0,0.09);
          }
  
          @media (max-width: 600px) {
              .appeal-form-card { padding: 28px 22px; }
          }
  
          .form-title {
              font-family: 'Montserrat', sans-serif;
              font-size: 1.45rem;
              font-weight: 700;
              color: var(--text-dark);
              margin-bottom: 6px;
          }
  
          .form-subtitle {
              color: var(--text-light);
              font-size: 0.92rem;
              margin-bottom: 32px;
              line-height: 1.5;
          }
  
          .form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
          }
  
          @media (max-width: 600px) {
              .form-row { grid-template-columns: 1fr; }
          }
  
          .field {
              margin-bottom: 22px;
              position: relative;
          }
  
          .field-full {
              grid-column: 1 / -1;
          }
  
          .field label {
              display: block;
              font-size: 0.85rem;
              font-weight: 600;
              font-family: 'Montserrat', sans-serif;
              color: var(--text-dark);
              margin-bottom: 8px;
          }
  
          .field label .req {
              color: #e53935;
              margin-left: 3px;
          }
  
          .field input,
          .field select,
          .field textarea {
              width: 100%;
              border: 2px solid #e8ecef;
              border-radius: 12px;
              padding: 13px 16px;
              font-size: 0.95rem;
              font-family: 'Open Sans', sans-serif;
              color: var(--text-dark);
              background: #fafbfc;
              transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
              outline: none;
          }
  
          .field input:focus,
          .field select:focus,
          .field textarea:focus {
              border-color: var(--primary-green);
              background: #fff;
              box-shadow: 0 0 0 4px rgba(46,125,50,0.1);
          }
  
          .field input::placeholder,
          .field textarea::placeholder {
              color: #bfc5cc;
          }
  
          .field textarea {
              resize: vertical;
              min-height: 150px;
          }
  
          .field select {
              cursor: pointer;
              appearance: none;
              background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23546e7a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: right 14px center;
              padding-right: 40px;
          }
  
          .form-agreement {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              margin: 10px 0 28px;
              padding: 16px 20px;
              background: #f0f9f0;
              border-radius: 12px;
              border: 1px solid #c8e6c9;
          }
  
          .form-agreement input[type="checkbox"] {
              width: 18px;
              height: 18px;
              min-width: 18px;
              margin-top: 2px;
              accent-color: var(--primary-green);
              cursor: pointer;
          }
  
          .form-agreement label {
              font-size: 0.85rem;
              color: var(--text-light);
              line-height: 1.5;
              cursor: pointer;
          }
  
          .btn-submit {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              width: 100%;
              padding: 17px 30px;
              background: linear-gradient(135deg, #2e7d32, #388e3c);
              color: #fff;
              font-family: 'Montserrat', sans-serif;
              font-weight: 700;
              font-size: 1rem;
              border: none;
              border-radius: 14px;
              cursor: pointer;
              box-shadow: 0 6px 24px rgba(46,125,50,0.35);
              transition: all 0.3s ease;
              text-transform: uppercase;
              letter-spacing: 0.5px;
          }
  
          .btn-submit:hover {
              background: linear-gradient(135deg, #1b5e20, #2e7d32);
              transform: translateY(-2px);
              box-shadow: 0 10px 32px rgba(46,125,50,0.45);
          }
  
          .btn-submit:active {
              transform: translateY(0);
          }
  
          .btn-submit svg {
              width: 20px;
              height: 20px;
              flex-shrink: 0;
          }
  
          .hidden { display: none !important; }
editable: true
---
<div class="appeal-hero"><div class="appeal-hero-badge"><span>✉️</span> Зворотній зв'язок</div><h1>Звернення до гімназії</h1><p>Маєте запитання, пропозиції або потребуєте допомоги? Ми тут, щоб вас почути.</p></div><section class="appeal-section"><div class="appeal-layout"><aside class="appeal-info"><div class="info-card"><div class="info-card-icon">⏱️</div><h3>Час відповіді</h3><p>Зазвичай відповідаємо протягом 1–3 робочих днів.</p></div><div class="info-card"><div class="info-card-icon">🔒</div><h3>Конфіденційність</h3><p>Ваші дані захищені та використовуються виключно для зворотного зв'язку.</p></div><div class="info-card"><div class="info-card-icon">📬</div><h3>Електронна пошта</h3><p>Або пишіть нам напряму: <strong>school8lub_@ukr.net</strong></p></div></aside><div class="appeal-form-card"><div class="form-title">Напишіть нам</div><div class="form-subtitle">Заповніть форму нижче і ми зв'яжемося з вами за вказаною електронною адресою.</div><form id="appeal-form" name="appeal" method="POST" data-netlify="true" netlify-honeypot="bot-field"><p class="hidden"><label>Не заповнюйте: <input name="bot-field" /></label></p><input type="hidden" name="form-name" value="appeal"><div class="form-row"><div class="field"><label for="name">Ім'я та прізвище <span class="req">*</span></label><input type="text" id="name" name="name" required placeholder="Іван Іваненко"></div><div class="field"><label for="phone">Телефон</label><input type="tel" id="phone" name="phone" placeholder="+38 (0__) ___-__-__"></div></div><div class="field"><label for="email">Email для зворотного зв'язку <span class="req">*</span></label><input type="email" id="email" name="email" required placeholder="example@email.com"></div><div class="field"><label for="category">Категорія звернення</label><select id="category" name="category"><option value="">— Оберіть категорію —</option><option value="question">Загальне питання</option><option value="admission">Вступ та зарахування</option><option value="educational">Освітній процес</option><option value="financial">Фінансові питання</option><option value="complaint">Скарга</option><option value="suggestion">Пропозиція</option><option value="other">Інше</option></select></div><div class="field"><label for="subject">Тема звернення <span class="req">*</span></label><input type="text" id="subject" name="subject" required placeholder="Коротко опишіть тему"></div><div class="field"><label for="message">Текст звернення <span class="req">*</span></label><textarea id="message" name="message" required placeholder="Детально опишіть ваше запитання або пропозицію..."></textarea></div><div class="form-agreement"><input type="checkbox" id="agree" name="agree" required><label for="agree">Я погоджуюся на обробку моїх персональних даних відповідно до законодавства України про захист персональних даних.</label></div><button type="submit" class="btn-submit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>Відправити звернення</button></form></div></div></section><script>document.getElementById('appeal-form').addEventListener('submit', function(e) {e.preventDefault();var form = this;var btn = form.querySelector('.btn-submit');btn.disabled = true;btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="animation:spin 1s linear infinite;width:20px;height:20px"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Відправляємо...';var data = new FormData(form);fetch('/', {method: 'POST',headers: { 'Content-Type': 'application/x-www-form-urlencoded' },body: new URLSearchParams(data).toString()}).then(function() {window.location.href = '/appeal-success/';}).catch(function() {window.location.href = '/appeal-success/';});});</script><style>@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}</style>
