<script lang="ts">
  export let label = "Processing";
  export let progress = 0;
</script>

<article class="progress-card">
  <div>
    <small>{label}</small>
    <strong>{progress}%</strong>
  </div>
  <div class="track" aria-label={`${label} ${progress}% complete`}>
    <span style={`width: ${Math.max(0, Math.min(100, progress))}%`}></span>
  </div>
</article>

<style>
  .progress-card {
    display: grid;
    gap: 0.7rem;
    padding: 1rem;
    border: 1px solid rgba(241, 233, 233, 0.16);
    border-radius: 0.75rem;
    background: #1f2247;
  }

  .progress-card > div:first-child {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .track {
    height: 0.65rem;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
  }

  .track span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #38d98a, #e491c9);
  }
</style>
