<script lang="ts">
  import "../styles/app.css";
</script>

<header class="app-nav">
  <a class="brand" href="/">
    <img src="/assets/logo.svg" alt="" />
    <span>RoboScoutAI</span>
  </a>
  <nav aria-label="RoboScoutAI sections">
    <a href="/autoscore">Autoscore</a>
    <a href="/watch">Watch</a>
    <a href="https://roboscoutai-web.vercel.app">Live app</a>
  </nav>
</header>

<slot />
