<script lang="ts">
  export let data = { roomId: "public-room" };
</script>

<main class="page-shell">
  <section class="watch-room">
    <div class="room-main">
      <div class="stream-frame large">Main event stream</div>
      <div class="room-actions">
        <button>Play for room</button>
        <button>Sync to room</button>
        <button>Return to grid</button>
      </div>
    </div>
    <aside class="panel">
      <h1>Room {data.roomId}</h1>
      <p>Participants, chat, notes, and stream metadata appear here in the production interface.</p>
    </aside>
  </section>
</main>
