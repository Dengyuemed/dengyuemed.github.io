---
layout: page
title: DengYueMed | Global Pharmaceutical Intelligence
description: Independent intelligence platform covering global oncology, rare diseases, regulatory strategy and pharmaceutical market access.
nav_exclude: true
---

<style>

/* ===== Layout Optimization ===== */

.page {
  max-width: 100% !important;
}

.main-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px 70px 20px;
}

body {
  background: #ffffff !important;
}

/* ===== Typography ===== */

.home-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 6px;
}

.home-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
}

.home-tagline {
  font-size: 15px;
  color: #888;
  margin-bottom: 35px;
}

.section-title {
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 20px;
}

/* ===== Grid ===== */

.home-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
}

@media (max-width: 768px) {
  .home-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .home-title {
    font-size: 26px;
  }
}

/* ===== Card ===== */

.card {
  background: #ffffff;
  padding: 26px;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);
}

.featured-card {
  border-left: 4px solid #5b5bd6;
}

.card h3 {
  margin-top: 0;
  font-size: 19px;
}

.card p {
  font-size: 14.5px;
  color: #555;
  line-height: 1.7;
}

.card em {
  font-size: 13px;
  color: #888;
}

.read-link {
  font-weight: 600;
  font-size: 14px;
}

/* ===== Lists ===== */

.simple-list,
.latest-list {
  padding-left: 18px;
}

.simple-list li,
.latest-list li {
  margin-bottom: 10px;
  font-size: 14px;
}

/* ===== Divider ===== */

hr.section-divider {
  margin: 55px 0;
  border: none;
  border-top: 1px solid #ececec;
}

/* ===== Hide Footer ===== */

.site-footer,
.footer,
.page-footer {
  display: none !important;
}

</style>

<h1 class="home-title">DengYueMed</h1>

<p class="home-subtitle">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<p class="home-tagline">
Policy · Innovation · Market Access · Competitive Strategy
</p>

<hr class="section-divider">

<div class="home-grid">

<!-- LEFT COLUMN -->
<div>

<h2 class="section-title">Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div class="card featured-card">

<h3>
  <a href="{{ featured.url }}">{{ featured.title }}</a>
</h3>

<p>
  <em>{{ featured.date | date: "%B %d, %Y" }}</em>
</p>

<p>
  {{ featured.description }}
</p>

<p>
  <a href="{{ featured.url }}" class="read-link">
    Read Full Analysis →
  </a>
</p>

</div>

</div>

<!-- RIGHT COLUMN -->
<div>

<h2 class="section-title">Market Watch</h2>

<div class="card">

<ul class="simple-list">
  <li><a href="/regulatory/">FDA / EMA / NMPA Updates</a></li>
  <li><a href="/rare-diseases/">Rare Disease Policy</a></li>
  <li><a href="/oncology/">Oncology Innovation</a></li>
  <li><a href="/supply-chain/">Supply Chain & API</a></li>
</ul>

</div>

</div>

</div>

<hr class="section-divider">

<h2 class="section-title">Latest Research Notes</h2>

<ul class="latest-list">
{% for post in site.posts limit:6 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <small> — {{ post.date | date: "%B %d, %Y" }}</small>
  </li>
{% endfor %}
</ul>

<hr class="section-divider">

<h2 class="section-title">Coverage Areas</h2>

<ul class="simple-list">
  <li><a href="/oncology/">Oncology</a></li>
  <li><a href="/rare-diseases/">Rare Diseases</a></li>
  <li><a href="/regulatory/">Regulatory & Policy</a></li>
  <li><a href="/supply-chain/">Pharmaceutical Supply Chain</a></li>
</ul>

<hr class="section-divider">

<p style="font-size:13px; color:#999;">
© {{ site.time | date: "%Y" }} DengYueMed. Independent industry research platform.
</p>
