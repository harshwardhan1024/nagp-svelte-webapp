<script>
    import { goto } from "$app/navigation";
    import Logo from "$lib/components/Logo.svelte";
    import { setItem } from "$lib/local-storage";

    // Props
    export let data;

    const classActive = 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium';
    const classInactive = 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

    async function signout() {
        setItem('user', null);
        await goto('/');
    }
</script>

<div class="min-h-full">
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Logo />
            </div>
            <div class="">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a 
                    href="/dashboard/files" 
                    class={data.pathname.toLowerCase().includes('files') ? classActive : classInactive} 
                    aria-current="page">
                    Files
                </a>
              </div>
            </div>
          </div>
          <div class="">
            <button 
                class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
                on:click={signout}>
                Signout
            </button>
          </div>
        </div>
      </div>  
    </nav>
  
    <main class="bg-pattern">
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <slot></slot>
      </div>
    </main>
  </div>

  <style>
    .bg-pattern {
        min-height: calc(100vh - 4rem);
        background-size: 50px 50px;
        background-color: #4f46e5 ;
        background-image: -webkit-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
        background-image: -moz-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
        background-image: -ms-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
        background-image: -o-linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
        background-image: linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
    }
</style>
  