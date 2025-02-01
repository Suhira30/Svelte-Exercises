

	import { writable } from "svelte/store";
    export const city=writable("");
    export const weather= writable(null);
    export const error=writable("");
    export const loading=writable(false);


