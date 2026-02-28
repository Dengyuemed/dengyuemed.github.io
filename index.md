---
layout: page
title: DengYueMed
nav_exclude: true
---

<style>

/* ===== Remove Just the Docs layout limits ===== */

.page {
  max-width: 100% !important;
}

.main-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px 20px 60px 20px;
}

body {
  background: #ffffff !important;
}

/* ===== Typography ===== */

.home-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 8px;
}

.home-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 28px;
  line-height: 1.5;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
}

/* ===== Grid ===== */

.home-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
}

@media (max-width: 768px) {
  .home-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .home-title {
    font-size: 24px;
  }

  .home-subtitle {
    font-size: 15px;
  }
}

/* ===== Card ===== */

.card {
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid #eaeaea;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.05);
}

.featured-card {
  border-left: 4px solid #5b5bd6;
}

.card h3 {
  margin-top: 0;
  font-size: 18px;
}

.card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
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
  margin: 50px 0;
  border: none;
  border-top: 1px solid #ececec;
}

/* ===== Hide Theme Footer ===== */

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

<hr class="section-divider">

<div class="home-grid">

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
  {{ featured.excerpt }}
</p>

<p>
  <a href="{{ featured.url }}" class="read-link">
    Read Full Analysis →
  </a>
</p>

</div>

</div>

<div>

<h2 class="section-title">Market Watch</h2>

<div class="card">

<ul class="simple-list">
  <li>FDA Approvals</li>
  <li>EMA Decisions</li>
  <li>China NMPA Updates</li>
  <li>Rare Disease Policy</li>
</ul>

</div>

</div>

</div>

<hr class="section-divider">

<h2 class="section-title">Latest Research Notes</h2>

<ul class="latest-list">
{% for post in site.posts offset:1 limit:5 %}
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
  <li><a href="/supply-chain/">Supply Chain</a></li>
  <li><a href="/regulatory/">Regulatory</a></li>
</ul>
