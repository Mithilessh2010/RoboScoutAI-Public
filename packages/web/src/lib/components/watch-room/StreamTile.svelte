<script lang="ts">
  export let title = "Event stream";
  export let provider = "YouTube";
</script>

<article class="stream-tile">
  <div class="frame">{provider}</div>
  <div>
    <h3>{title}</h3>
    <p>Ready for shared match review.</p>
  </div>
</article>

<style>
  .stream-tile {
    overflow: hidden;
    border: 1px solid rgba(241, 233, 233, 0.16);
    border-radius: 0.75rem;
    background: #1f2247;
  }

  .frame {
    display: grid;
    min-height: 12rem;
    place-items: center;
    background: #060713;
    color: #c8c0d7;
  }

  .stream-tile > div:last-child {
    padding: 1rem;
  }
</style>
