<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import Clock from '../../others/Clock.svelte';
    import { tr } from '../../../utils/i18nHelper';
    import AccountSvg from '../../svg_icons/AccountSVG.svelte';

    const dispatch = createEventDispatcher();
</script>

<nav
    class="top-navbar flex flex-wrap w-full items-center justify-between px-2 h-full bg-gray-900 text-white border-b border-gray-100 z-10"
>
    <div class="flex items-center">
        <button id="hamburger" class="mr-2" on:click={() => dispatch('press')}>
            <img
                class="link-svg opacity-80 hover:opacity-100"
                src="icons/navbar/hamburger_menu.svg"
                alt="hamburger_menu"
            />
        </button>

        <a href="/#/" class="contents">
            <img src="logo-esidom.png" alt="ESIDOM" class="logo h-auto w-12" />
            <p>{tr('app.name')}</p>
        </a>
    </div>
    <div class="text-lg">
        <p class="sm:hidden">
            <Clock formatDate="short" />
        </p>
        <p class="hidden sm:flex">
            <Clock formatDate="long" />
        </p>
    </div>
    <div class="nav-links flex items-center space-x-4">
        <a
            href="/#/"
            class="lg:inline-flex lg:w-auto w-full py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
        >
            <AccountSvg />
        </a>
    </div>
</nav>

<style>
</style>