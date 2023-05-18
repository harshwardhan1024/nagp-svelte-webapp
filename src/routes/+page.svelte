<script lang="ts">
    import { goto } from "$app/navigation";
    import Logo from "$lib/components/Logo.svelte";
    import { setItem } from "$lib/local-storage";
    import type { Credentials } from "$lib/types/credentials";
    import type { UserInfo } from "$lib/types/user-info";

    // State
    let credentials: Credentials = {
        email: '',
        password: ''
    };

    let error = '';

    // Functions
    function onInput(e: Event): void {
        const target = e.target as HTMLInputElement;
        credentials = {...credentials, [target.name]: target.value };
        error = '';
    }

    function isDisabled(credentials: Credentials): boolean {
        return credentials.email.trim().length === 0 || credentials.password.trim().length === 0;
    }

    async function signin(): Promise<void> {
        if (credentials.email !== 'guest' || credentials.password !== 'guest') {
            error = 'Invalid Credentials ⚔️';
            return;
        }

        setItem('user', { email: credentials.email } as UserInfo);
        await goto('/dashboard/files');
    }

</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="text-center">
            <Logo />
        </div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6">
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="text"
                        required
                        autofocus
                        on:input={onInput}
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div class="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        on:input={onInput}
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                </div>
            </div>

            <div>
                <button
                    class="flex w-full justify-center rounded-md disabled:bg-gray-300 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled="{isDisabled(credentials)}"
                    on:click|preventDefault={signin}>
                    Sign in
                </button>
            </div>
            
            {#if error.length > 0}
            <div class="text-sm text-red-600 my-4 text-center">{error}</div>
            {/if}

        </form>
    </div>
</div>
