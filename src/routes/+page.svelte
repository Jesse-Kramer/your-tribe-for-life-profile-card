<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<!-- Only render if we have people in the data -->
{#if data.person}
        <h1>{data.person.name}</h1>
        <p>{data.person.bio}</p>
{:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
{/if}