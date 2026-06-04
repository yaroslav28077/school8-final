---
title: "Звернення надіслано"
layout: "layout.njk"
permalink: "/appeal-success/"
editable: false
description: "Ваше звернення успішно надіслано до Лубенської гімназії."
page_styles: |
  .success-page {
              min-height: calc(100vh - 80px);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 40px 20px;
              background: linear-gradient(160deg, #f0f9f0 0%, #f4f7f6 60%, #e8f5e9 100%);
          }
  
          .success-card {
              background: #fff;
              border-radius: 28px;
              padding: 60px 50px;
              max-width: 560px;
              width: 100%;
              text-align: center;
              box-shadow: 0 20px 70px rgba(46, 125, 50, 0.12), 0 4px 20px rgba(0,0,0,0.06);
              position: relative;
              overflow: hidden;
              animation: fadeUp 0.6s ease both;
          }
  
          @keyframes fadeUp {
              from { opacity: 0; transform: translateY(30px); }
              to   { opacity: 1; transform: translateY(0); }
          }
  
          .success-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0;
              height: 5px;
              background: linear-gradient(90deg, #2e7d32, #66bb6a, #f57c00);
              border-radius: 28px 28px 0 0;
          }
  
          .success-icon-wrap {
              width: 100px;
              height: 100px;
              background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 30px;
              box-shadow: 0 8px 30px rgba(46,125,50,0.2);
              animation: pulse 2s ease infinite;
          }
  
          @keyframes pulse {
              0%, 100% { box-shadow: 0 8px 30px rgba(46,125,50,0.2); }
              50%       { box-shadow: 0 8px 40px rgba(46,125,50,0.35); }
          }
  
          .success-icon-wrap svg {
              width: 52px;
              height: 52px;
              color: #2e7d32;
          }
  
          .success-title {
              font-family: 'Montserrat', sans-serif;
              font-size: 2rem;
              font-weight: 800;
              color: #1b5e20;
              margin-bottom: 16px;
              line-height: 1.2;
          }
  
          .success-text {
              font-size: 1rem;
              color: #546e7a;
              line-height: 1.7;
              margin-bottom: 36px;
          }
  
          .success-text strong {
              color: #263238;
          }
  
          .success-steps {
              display: flex;
              flex-direction: column;
              gap: 12px;
              margin-bottom: 40px;
              text-align: left;
          }
  
          .step-item {
              display: flex;
              align-items: center;
              gap: 14px;
              padding: 14px 18px;
              background: #f8fdf8;
              border-radius: 12px;
              border-left: 3px solid #4caf50;
          }
  
          .step-num {
              width: 30px;
              height: 30px;
              min-width: 30px;
              background: linear-gradient(135deg, #2e7d32, #388e3c);
              color: #fff;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: 'Montserrat', sans-serif;
              font-weight: 700;
              font-size: 0.85rem;
          }
  
          .step-text {
              font-size: 0.9rem;
              color: #455a64;
              line-height: 1.4;
          }
  
          .success-actions {
              display: flex;
              gap: 14px;
              justify-content: center;
              flex-wrap: wrap;
          }
  
          .btn-home {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 14px 28px;
              background: linear-gradient(135deg, #2e7d32, #388e3c);
              color: #fff;
              border-radius: 12px;
              font-family: 'Montserrat', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              text-decoration: none;
              box-shadow: 0 6px 20px rgba(46,125,50,0.3);
              transition: all 0.3s;
          }
  
          .btn-home:hover {
              background: linear-gradient(135deg, #1b5e20, #2e7d32);
              transform: translateY(-2px);
              box-shadow: 0 10px 28px rgba(46,125,50,0.4);
              color: #fff;
          }
  
          .btn-appeal {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 14px 28px;
              background: transparent;
              color: #2e7d32;
              border: 2px solid #c8e6c9;
              border-radius: 12px;
              font-family: 'Montserrat', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              text-decoration: none;
              transition: all 0.3s;
          }
  
          .btn-appeal:hover {
              background: #e8f5e9;
              border-color: #a5d6a7;
              color: #1b5e20;
          }
  
          .timer-bar-wrap {
              margin-top: 30px;
          }
  
          .timer-label {
              font-size: 0.8rem;
              color: #90a4ae;
              margin-bottom: 8px;
          }
  
          .timer-bar-bg {
              height: 4px;
              background: #e8ecef;
              border-radius: 4px;
              overflow: hidden;
          }
  
          .timer-bar {
              height: 100%;
              background: linear-gradient(90deg, #2e7d32, #66bb6a);
              border-radius: 4px;
              animation: shrink 12s linear forwards;
              width: 100%;
          }
  
          @keyframes shrink {
              from { width: 100%; }
              to   { width: 0%; }
          }
  
          @media (max-width: 500px) {
              .success-card { padding: 40px 24px; }
              .success-title { font-size: 1.6rem; }
          }
---
<div class="success-page"><div class="success-card"><div class="success-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h1 class="success-title">Звернення надіслано!</h1><p class="success-text">Дякуємо за ваше звернення. Ми вже отримали ваше повідомлення і обов'язково відповімо на вказану <strong>електронну адресу</strong> найближчим часом.</p><div class="success-steps"><div class="step-item"><div class="step-num">1</div><div class="step-text">Ваше звернення зареєстровано та потрапить до відповідального фахівця</div></div><div class="step-item"><div class="step-num">2</div><div class="step-text">Очікуйте відповідь протягом 1–3 робочих днів на вашу пошту</div></div><div class="step-item"><div class="step-num">3</div><div class="step-text">Якщо питання термінове — телефонуйте нам безпосередньо</div></div></div><div class="success-actions"><a href="/" class="btn-home">🏠 На головну</a><a href="/appeal/" class="btn-appeal">✉️ Ще одне звернення</a></div><div class="timer-bar-wrap"><div class="timer-label" id="timer-label">Автоматичне перенаправлення через 12 секунд...</div><div class="timer-bar-bg"><div class="timer-bar"></div></div></div></div></div><script>var seconds = 12; var label = document.getElementById('timer-label'); var interval = setInterval(function() { seconds--; if (seconds <= 0) { clearInterval(interval); window.location.href = '/'; } else { label.textContent = 'Автоматичне перенаправлення через ' + seconds + ' секунд...'; } }, 1000);</script>
