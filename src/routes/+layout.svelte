<script>
    // alias of $lib goes to src
    import Menu from "$lib/components/Menu.svelte"
    import "$lib/styles/style.css"
    import "$lib/styles/style.scss"
</script>

<!-- <header>This is the Header</header> -->

<main>
<Menu/>
    <slot />
</main>

<!-- <footer>This is the Footer</footer> -->
