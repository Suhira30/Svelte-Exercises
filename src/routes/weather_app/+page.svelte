<script>
import {weather,city,loading,error} from "$lib/weatherStore";
import {get} from "svelte/store";
import temp from "../../lib/assests/temp.png";
import humanity from "../../lib/assests/humanity.png";
import dew from "../../lib/assests/dew.png";
import location from "../../lib/assests/location.png";
import date from "../../lib/assests/date.png";
 async function getWeather(){
    const api="TH43Q4C95KNS6RHVAC4T4RR59";
    const City_Name=get(city);
    loading.set(true);
    try{
        const res= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${City_Name}?unitGroup=us&key=${api}&contentType=json`);
        if(!res.ok){
        throw new Error("Error in fetching data");
    }
    const data=await res.json();
    weather.set(data);
    }
   
    catch(err){
        error.set(err.message);
    }
    finally{
        loading.set(false);
    }
 }
</script>
<main>
    <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl mb-6"> Weather App</h1>
        <div class="flex flex-row items-center justify-center ">
            <input type="text" placeholder="Type your city" bind:value={$city}>
            <button class="ml-4 bg-emerald-600 border-2 w-[100px] rounded-xl" on:click={getWeather}>Check</button>
        </div>
        <div>
            {#if $loading}
            loading...
            {/if}
            {#if $weather}
            <ul>
                <li class="flex items-center space-x-2">
                    <img src={location} class="w-8 h-8" alt="temperature icon" />
                    <span>{$weather.days[0].datetime}</span>
                </li>
                <li class="flex items-center space-x-2">
                    <img src={date} class="w-8 h-8" alt="temperature icon" />
                    <span>{$weather.timezone}</span>
                </li>
                <li class="flex items-center space-x-2">
                    <img src={temp} class="w-8 h-8" alt="temperature icon" />
                    <span>Temp: {$weather.days[0].temp}°C</span>
                </li>
                <li class="flex items-center space-x-2">
                    <img src={humanity} class="w-8 h-8" alt="temperature icon" />
                    <span>Humanity:{$weather.days[0].humidity}%</span>
                </li>
                <li class="flex items-center space-x-2">
                    <img src={dew} class="w-8 h-8" alt="temperature icon" />
                    <span>Dew:{$weather.days[0].dew}</span>
                </li>
            </ul>
            {/if}
        </div>
    </div>


</main>