<!-- 1️⃣ Counter App
A simple counter that allows increment, decrement, and reset.

📝 Features
Uses Svelte’s reactive state.
Buttons to increase, decrease, and reset. -->

<script>
    import TodoList from "../routes/todolist/+page.svelte"
    let count=$state(0)
    function increment(){
        count+=1
    }
    function decrement(){
        count-=1
    }
    function reset(){
        count=0
    }
</script>
<main>
<div class="flex flex-col items-center justify-center min-h-screen bg-orange-200 text-3xl">
   <h1 class="text-gray-500 text-xl text-center mb-5">Count : </h1> 
   {count}
    <div class="flex flex-col md:flex-row gap-x-4  gap-y-4 mt-10">
        <div>
        <button onclick={increment} class=" bg-green-500 border-2 border-cyan-900 rounded w-28">
            Plus
        </button>
        </div>
        <div>
        <button onclick={decrement} class=" bg-red-400 border-2 border-red-600 rounded w-28">
            Minus
        </button>
        </div>
        <div>
        <button onclick={reset} class=" bg-yellow-300 border-2 border-yellow-600 rounded  w-28">
            Reset
        </button>
        </div>
    </div>
</div>
<div class="h-screen">
    <TodoList/>
</div>
</main>