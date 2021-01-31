<script>
    export let color='red';
    let hhmmss = '';
    setInterval(() => { hhmmss = new Date().toLocaleTimeString() },1000);
</script>
<div>
    <span style="color: {color}">{hhmmss}</span>
</div>
<style>

</style>