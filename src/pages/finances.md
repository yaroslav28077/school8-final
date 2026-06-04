---
title: "Фінансова прозорість гімназії"
layout: "layout.njk"
permalink: "/finances/"
page_styles: |
  /* Intro block */
          .finance-intro {
              text-align: center;
              font-size: 1.1rem;
              color: var(--text-light);
              margin-bottom: 50px;
              font-weight: 500;
              line-height: 1.7;
          }
  
          /* Category cards */
          .finance-categories {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 30px;
              margin-bottom: 20px;
          }
  
          .finance-card {
              background: var(--white);
              border-radius: 16px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
              overflow: hidden;
              transition: all 0.3s ease;
              border: 1px solid rgba(0, 0, 0, 0.06);
          }
  
          .finance-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 12px 35px rgba(46, 125, 50, 0.15);
          }
  
          .finance-card-header {
              background: linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%);
              padding: 28px 25px 24px;
              display: flex;
              align-items: center;
              gap: 16px;
          }
  
          .finance-card-icon {
              width: 52px;
              height: 52px;
              background: rgba(255, 255, 255, 0.2);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              color: white;
              flex-shrink: 0;
          }
  
          .finance-card-title {
              color: white;
              font-family: 'Montserrat', sans-serif;
              font-weight: 700;
              font-size: 1.1rem;
              line-height: 1.3;
          }
  
          .finance-card-body {
              padding: 20px 25px 25px;
          }
  
          /* Document links inside cards */
          .finance-doc-list {
              display: flex;
              flex-direction: column;
              gap: 12px;
          }
  
          .finance-doc-link {
              display: flex;
              align-items: center;
              gap: 14px;
              padding: 14px 18px;
              background: #f8fdf8;
              border: 1.5px solid #e0f0e0;
              border-radius: 10px;
              text-decoration: none;
              color: var(--text-dark);
              font-family: 'Open Sans', sans-serif;
              font-size: 0.95rem;
              font-weight: 600;
              transition: all 0.3s ease;
          }
  
          .finance-doc-link:hover {
              background: #e8f5e9;
              border-color: var(--primary-green);
              transform: translateX(5px);
              color: var(--dark-green);
          }
  
          .finance-doc-link .link-icon {
              width: 36px;
              height: 36px;
              background: rgba(46, 125, 50, 0.1);
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--primary-green);
              font-size: 1rem;
              flex-shrink: 0;
              transition: all 0.3s ease;
          }
  
          .finance-doc-link:hover .link-icon {
              background: var(--primary-green);
              color: white;
          }
  
          .finance-doc-link .link-arrow {
              margin-left: auto;
              color: var(--primary-green);
              opacity: 0;
              transform: translateX(-5px);
              transition: all 0.3s ease;
              font-size: 0.85rem;
          }
  
          .finance-doc-link:hover .link-arrow {
              opacity: 1;
              transform: translateX(0);
          }
  
          /* Placeholder for documents not yet added */
          .finance-doc-placeholder {
              display: flex;
              align-items: center;
              gap: 14px;
              padding: 14px 18px;
              background: #fafafa;
              border: 1.5px dashed #ccc;
              border-radius: 10px;
              color: #aaa;
              font-family: 'Open Sans', sans-serif;
              font-size: 0.9rem;
              font-style: italic;
          }
  
          .finance-doc-placeholder .link-icon {
              width: 36px;
              height: 36px;
              background: #f0f0f0;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #bbb;
              font-size: 1rem;
              flex-shrink: 0;
          }
  
          /* Year tabs */
          .year-tabs {
              display: flex;
              justify-content: center;
              gap: 20px;
              margin-bottom: 40px;
              flex-wrap: wrap;
          }
  
          .year-tab {
              background: var(--white);
              color: var(--text-dark);
              padding: 16px 36px;
              border-radius: 12px;
              font-weight: 700;
              font-family: 'Montserrat', sans-serif;
              text-transform: uppercase;
              font-size: 1rem;
              cursor: pointer;
              border: 3px solid var(--primary-green);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
          }
  
          .year-tab:hover {
              background: #e8f5e9;
              transform: translateY(-3px);
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
  
          .year-tab.active {
              background: linear-gradient(135deg, var(--primary-green) 0%, var(--dark-green) 100%);
              color: var(--white);
              box-shadow: 0 8px 25px rgba(46, 125, 50, 0.4);
              transform: translateY(-2px);
          }
  
          .year-content {
              display: none;
              animation: fadeIn 0.5s ease;
          }
  
          .year-content.active {
              display: block;
          }
  
          @keyframes fadeIn {
              from {
                  opacity: 0;
                  transform: translateY(20px);
              }
  
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
  
          @media (max-width: 768px) {
              .finance-categories {
                  grid-template-columns: 1fr;
              }
  
              .year-tab {
                  padding: 14px 24px;
                  font-size: 0.9rem;
              }
          }
blocks:
  - type: "finance_block"
    title: "Фінансова прозорість гімназії"
    intro: |
      Відповідно до законодавства України заклад освіти забезпечує відкритість та прозорість
                          у використанні фінансових ресурсів. Нижче представлені основні фінансові документи
                          за відповідні бюджетні роки.
    tabs: 
      - year: "2026"
        categories: 
          - title: "Кошторис"
            icon: "fas fa-file-invoice-dollar"
            documents: 
              - available: true
                name: "Переглянути документ"
                url: "https://drive.google.com/file/d/1Y5oN2DEJcpDkf0L_7f7XjIwrt1DveCZs/view?usp=sharing"
                doc_icon: "fas fa-file-pdf"

          - title: "Звіт про фінансові результати"
            icon: "fas fa-chart-line"
            documents: 
              - available: false
                name: "Документ буде додано"
                url: ""
                doc_icon: "fas fa-clock"

          - title: "Баланс"
            icon: "fas fa-scale-balanced"
            documents: 
              - available: false
                name: "Документ буде додано"
                url: ""
                doc_icon: "fas fa-clock"


      - year: "2025"
        categories: 
          - title: "Кошторис"
            icon: "fas fa-file-invoice-dollar"
            documents: 
              - available: true
                name: "Переглянути документ"
                url: "https://drive.google.com/file/d/1UTKIFtEG8rosPJQfpLBlbd6FhQG4lxNw/view?usp=sharing"
                doc_icon: "fas fa-file-pdf"

          - title: "Звіт про фінансові результати"
            icon: "fas fa-chart-line"
            documents: 
              - available: true
                name: "Переглянути документ"
                url: "https://drive.google.com/file/d/1z_iHrAf5yy1V2T4f9B9tTEVeMd5GERZ7/view?usp=sharing"
                doc_icon: "fas fa-file-pdf"

          - title: "Баланс"
            icon: "fas fa-scale-balanced"
            documents: 
              - available: true
                name: "Переглянути документ"
                url: "https://drive.google.com/file/d/1d5ON4QYqm4dngCgkTH06jsIV52dADYYH/view?usp=sharing"
                doc_icon: "fas fa-file-pdf"



editable: true
---
