---
layout: default
title: DengYueMed
nav_exclude: true
---

<style>

/* ======================
   Global Layout
====================== */

.home-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 30px 18px;
}

.home-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* 移动端 */
@media (max-width: 768px) {
  .home-container {
    padding: 20px 16px;
  }

  .home-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

/* ======================
   Typography
====================== */

.home-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 6px;
}

.home-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .home-title {
    font-size: 24px;
  }

  .home-subtitle {
    font-size: 15px;
  }
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
}

/* ======================
   Card
====================== */

.card {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e8e8e8;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 14px rgba(0,0,0,0.05);
}

.card h3 {
  margin-top: 0;
  font-size: 17px;
  line-height: 1.4;
}

.card p {
  color: #555;
  font-size: 14px;
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

/* ======================
   Lists
====================== */

.simple-list {
  padding-left: 18px;
  margin: 0;
}

.simple-list li {
  margin-bottom: 8px;
  font-size: 14px;
}

.latest-list {
  padding-left: 18px;
}

.latest-list li {
  margin-bottom: 12px;
  font-size: 14px;
}

/* ======================
   Divider
====================== */

hr.section-divider {
  margin: 40px 0;
  border: none;
  border-top: 1px solid #ececec;
}

/* ======================
   Hide Footer
====================== */

.site-footer {
  display: none !important;
}

</style>

<div class="home-container">

<h1 class="home-title">DengYueMed</h1>

<p class="home-subtitle">
Independent Intelligence on Global Oncology & Rare Disease Markets
</p>

<hr class="section-divider">

<div class="home-grid">

<!-- LEFT COLUMN -->
<div>

<h2 class="section-title">Lead Analysis</h2>

{% assign featured = site.posts.first %}

<div class="card">

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

<!-- RIGHT COLUMN -->
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

</div>
