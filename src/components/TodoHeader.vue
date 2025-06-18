<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>
    <header>
        <nav class="container">
            <div class="branding">
                <img src="../assets/logo.svg" alt="Logo">
                <h1>Todo's App</h1>
            </div>
            <ul class="nav-routes">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </ul>
        </nav>
    </header>

</template>

<style lang="scss" scoped>
header {
    background-color: #f1f1f1;

    nav {
        display: flex;
        align-items: center;
        padding: 25px 16px;

        .branding {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                max-width: 50px;
            }

            h1 {
                font-size: 24px;
                display: block;
            }
        }

        .nav-routes {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            gap: 12px;
            list-style: none;

            a {
                text-decoration: none;
                color: inherit;
                padding: 10px;
            }
        }

        .nav-routes a:hover {
            background-color: #425046;
            color: #f1f1f1;
            transition: 300ms ease-in-out;
            border: none;
            border-radius: 10%;
        }
    }
}
</style>
