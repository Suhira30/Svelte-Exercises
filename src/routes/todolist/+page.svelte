<!-- 2️⃣ To-Do List
A basic to-do list with state management.

📝 Features
Add and remove tasks.
Use Svelte’s reactivity to update UI. -->

<script>
	import { writable } from "svelte/store";
    const tasks=writable( []);
    if (typeof window !== 'undefined') {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.set(storedTasks);
    }


    let newTask="";
    function addTasks(){
        if(newTask.trim() !== ""){
            tasks.update(currentTasks =>{
               const updatedTask= [...currentTasks, newTask];
                localStorage.setItem('tasks',JSON.stringify(updatedTask));
                return updatedTask;
            });
            newTask="";
        }
    }
    function removeTask(index){
        tasks.update(currentTask=>currentTask.filter((_,i)=>i!==index))
    }
</script>
<main class="">
    <div >
        <h1 class="text-center font-semibold text-2xl justify-center items-center"> To-Do-List</h1>
        <div class="flex flex-col items-center justify-center ">
            <div class="flex flex-row gap-4">
                <input type="text" placeholder="Type your Task" class="w-64" bind:value={newTask}>
                <button onclick={addTasks} class="border-2  broder-black-300 bg-rose-400 rounded-xl w-20 hover:bg-purple-200 hover:border-black">Add!</button>
            </div>
            <div class="width-full">
            {#each $tasks as task,index}
                <div class="flex justify-between items-start">
                    <span class="w-[280px] break-words mb-8 ">{task}</span>
                    <button onclick={()=>removeTask(index)} class="bg-red-500 w-20 border-2 mt-5 rounded-xl">Remove</button>
                </div>
            {/each}
            </div>
        </div>
    </div>
       
</main>