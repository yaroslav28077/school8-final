---
title: "Секретна сторінка розробника"
layout: "layout.njk"
permalink: "/ostapenko/"
eleventyExcludeFromCollections: true
editable: false
description: "Вітаємо! Ви знайшли секретну сторінку розробника Української класичної гімназії."
page_styles: |
  .easter-page {
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 60px 20px;
      background: radial-gradient(circle at center, #16222f 0%, #0b0f19 100%);
      color: #fff;
      overflow: hidden;
      position: relative;
  }

  .easter-page::before {
      content: '';
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(46, 125, 50, 0.15) 0%, transparent 70%);
      top: -10%;
      left: -10%;
      pointer-events: none;
  }

  .easter-page::after {
      content: '';
      position: absolute;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(245, 124, 0, 0.1) 0%, transparent 70%);
      bottom: -10%;
      right: -10%;
      pointer-events: none;
  }

  .dev-card {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 32px;
      padding: 50px 40px;
      max-width: 650px;
      width: 100%;
      text-align: center;
      box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1);
      position: relative;
      animation: neonPulse 8s infinite alternate, fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes neonPulse {
      0% { box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5), 0 0 20px rgba(46, 125, 50, 0.1); }
      100% { box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5), 0 0 40px rgba(245, 124, 0, 0.15); }
  }

  .avatar-container {
      position: relative;
      width: 130px;
      height: 130px;
      margin: 0 auto 25px;
  }

  .avatar-glow {
      position: absolute;
      top: -5px; left: -5px; right: -5px; bottom: -5px;
      background: linear-gradient(135deg, #2e7d32, #f57c00);
      border-radius: 50%;
      animation: spin 6s linear infinite;
      z-index: 1;
  }

  @keyframes spin {
      100% { transform: rotate(360deg); }
  }

  .avatar-inner {
      position: absolute;
      top: 3px; left: 3px; right: 3px; bottom: 3px;
      background: #0f1422;
      border-radius: 50%;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }

  .avatar-inner i {
      font-size: 3.5rem;
      background: linear-gradient(135deg, #a5d6a7, #ffcc80);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }

  .egg-badge {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(245, 124, 0, 0.15);
      border: 1px solid rgba(245, 124, 0, 0.3);
      color: #ffb74d;
      border-radius: 30px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
  }

  .dev-name {
      font-family: 'Montserrat', sans-serif;
      font-size: 2.2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 8px;
      background: linear-gradient(135deg, #ffffff 30%, #b0bec5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }

  .dev-title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 1rem;
      color: #81c784;
      margin-bottom: 30px;
      text-transform: uppercase;
      letter-spacing: 1.5px;
  }

  .dev-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 35px;
      text-align: left;
  }

  .stat-card {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 16px 20px;
      transition: all 0.3s;
  }

  .stat-card:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
  }

  .stat-label {
      font-size: 0.75rem;
      color: #90a4ae;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
  }

  .stat-value {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
  }

  .dev-description {
      font-size: 0.95rem;
      color: #b0bec5;
      line-height: 1.6;
      margin-bottom: 40px;
  }

  .btn-back-portal {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 16px 36px;
      background: linear-gradient(135deg, #2e7d32, #388e3c);
      color: #fff !important;
      border-radius: 16px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      text-decoration: none;
      box-shadow: 0 10px 30px rgba(46, 125, 50, 0.3);
      transition: all 0.3s;
      border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .btn-back-portal:hover {
      background: linear-gradient(135deg, #388e3c, #4caf50);
      transform: translateY(-2px);
      box-shadow: 0 15px 40px rgba(46, 125, 50, 0.5);
  }

  @media (max-width: 600px) {
      .dev-card { padding: 40px 20px; }
      .dev-name { font-size: 1.8rem; }
      .dev-stats { grid-template-columns: 1fr; }
  }
---
<div class="easter-page">
    <div class="dev-card">
        <div class="egg-badge">
            <span class="pulse-dot"></span> Секрет знайдено
        </div>
        
        <div class="avatar-container">
            <div class="avatar-glow"></div>
            <div class="avatar-inner">
                <i class="fa-solid fa-code"></i>
            </div>
        </div>

        <h1 class="dev-name">Ярослав Остапенко</h1>
        <p class="dev-title">Lead Developer & Architect</p>

        <div class="dev-stats">
            <div class="stat-card">
                <div class="stat-label">Проект</div>
                <div class="stat-value">school8-final</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Статус</div>
                <div class="stat-value">Developer</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Написано рядків</div>
                <div class="stat-value">10,000+</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Кава / Чай</div>
                <div class="stat-value">100% Charged</div>
            </div>
        </div>

        <p class="dev-description">
            Привіт! Це секретна сторінка розробника, яка є частиною архітектурного задуму порталу Української класичної гімназії. 
            Тут ми можемо розмістити будь-яку цікаву інформацію, твій особистий опис, посилання на портфоліо чи соціальні мережі.
        </p>

        <a href="/" class="btn-back-portal">
            <i class="fa-solid fa-arrow-left-long"></i> Повернутися до гімназії
        </a>
    </div>
</div>
