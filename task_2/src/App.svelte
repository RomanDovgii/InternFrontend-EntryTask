<script lang="ts">
  import Form from './form.svelte'
  const url: URL = new URL("https://open.er-api.com/v6/latest/USD");

  interface Response {
    base_code: string;
    documentation: string;
    rates: Object;
    result: Object;
    terms_of_use: string;
    time_eol_unix: number;
    time_last_update_inux: number;
    time_last_update_utc: string;
    time_next_update_unix: number;
    time_next_update_utc: string;
  }

  let information : Response = {
    base_code: '',
    documentation: '',
    rates: {},
    result: {},
    terms_of_use: '',
    time_eol_unix: 0,
    time_last_update_inux: 0,
    time_last_update_utc: '',
    time_next_update_unix: 0,
    time_next_update_utc: '',
  };


  const currencyRates = fetch(url)
                                          .then(res => res.json())
                                          .then(data => {
                                            information = data
                                          })                                        
                                          .catch(error => new Error(error))
</script>

<main>
  <Form dataForRender={information.rates} />
</main>

<style>
</style>
