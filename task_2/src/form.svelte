<script lang="ts">
    import { afterUpdate } from "svelte";
    export let dataForRender;
    let converted = 0;
    let result = 0;
    let convertedCurrency = 'USD';
    let resultCurrency = 'USD';
    
    const handleConvertedChange = () => {
        const dollar = converted / dataForRender[convertedCurrency];
        result = Math.round((dataForRender[resultCurrency] * dollar) * 100) / 100;
    }

    const handleResultChange = () => {
        const dollar = result / dataForRender[resultCurrency];
        converted = Math.round((dataForRender[convertedCurrency] * dollar) * 100) / 100;
    }
</script>

{#if Object.keys(dataForRender).length === 0}
    <p>loading</p>
{:else}
    <form>
        <fieldset>
        <select name="convertedCurrency" id="convertedCurrency" bind:value={convertedCurrency} on:change={handleResultChange}>
            {#each Object.keys(dataForRender) as currency}
                <option value={currency}>{currency}</option>
            {/each}
        </select>
        <input type="number" name="converted" id="converted" bind:value={converted} on:input={handleConvertedChange}>
        </fieldset>
        <fieldset>
        <select name="resultCurrency" id="resultCurrency" bind:value={resultCurrency} on:change={handleConvertedChange}>
            {#each Object.keys(dataForRender) as currency}
                <option value={currency}>{currency}</option>
            {/each}
        </select>
        <input type="number" name="convertation" id="convertation" bind:value={result}  on:input={handleResultChange}>
        </fieldset>
    </form>
{/if}
