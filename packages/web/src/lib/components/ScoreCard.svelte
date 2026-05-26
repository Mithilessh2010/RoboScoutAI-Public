<script lang="ts">
  export let alliance = "Red Alliance";
  export let score = 0;
  export let detail = "AUTO 0 · TELEOP 0";
</script>

<article class="score-card">
  <small>{alliance}</small>
  <strong>{score}</strong>
  <span>{detail}</span>
</article>
