<script lang="ts">
  const steps = ["Upload Video", "Match Info", "Mark Areas", "Detect", "Review Score"];
  const exampleScore = {
    red: { total: 92, auto: 18, teleop: 74 },
    blue: { total: 69, auto: 12, teleop: 57 }
  };
</script>

<main class="page-shell">
  <section class="panel">
    <p class="eyebrow">DECODE Autoscore</p>
    <h1>Guided match video scoring review.</h1>
    <p>
      The public scaffold demonstrates the user interface flow without including production
      model weights, scoring internals, or private worker configuration.
    </p>

    <div class="step-list">
      {#each steps as step, index}
        <span class:active={index === 0}>{index + 1}. {step}</span>
      {/each}
    </div>
  </section>

  <section class="workspace-preview">
    <div class="video-placeholder">
      <span>Match video preview</span>
    </div>

    <aside class="score-rail">
      <article class="red">
        <small>Red Alliance</small>
        <strong>{exampleScore.red.total}</strong>
        <span>AUTO {exampleScore.red.auto} · TELEOP {exampleScore.red.teleop}</span>
      </article>
      <article class="blue">
        <small>Blue Alliance</small>
        <strong>{exampleScore.blue.total}</strong>
        <span>AUTO {exampleScore.blue.auto} · TELEOP {exampleScore.blue.teleop}</span>
      </article>
      <article>
        <small>Processing Status</small>
        <div class="progress"><span style="width: 72%"></span></div>
        <span>Review ready</span>
      </article>
    </aside>
  </section>
</main>
