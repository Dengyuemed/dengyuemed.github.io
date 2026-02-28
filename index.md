---
layout: default
title: DengYueMed
nav_exclude: true
---

<style>

/* ======================
   Layout
====================== */

.home-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.home-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

/* 移动端 */
@media (max-width: 768px) {
  .home-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

/* ======================
   Typography
====================== */

.home-title {
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 8px;
}

.home-subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

@media (max-width: 768px) {
  .home-title {
    font-size: 26px;
  }

  .home-subtitle {
    font-size: 16px;
  }
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}

/* ======================
   Card Style
====================== */

.card {
  background: #f9fafb;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}

.card h3 {
  margin-top: 0;
  font-size: 18px;
}

.card p {
  color: #555;
  font-size: 15px;
}

.card a {
  text-decoration: none;
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
}

.latest-list li {
  margin-bottom: 10px;
}

hr.section-divider {
  margin: 60px 0;
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
  <a href="{{ featured.url }}" class="read-link">Read Full Analysis →</a>
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
