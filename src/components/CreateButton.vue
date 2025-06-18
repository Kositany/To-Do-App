<script setup>

</script>

<template>

    <button>
        <slot>Create</slot>
    </button>

</template>


<style lang="scss" scoped>
button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background-color: #a7c7b9;
}

button:hover {
    cursor: pointer;
    background-color: #41b080;
    color: #fefefe;
}

button:active {
    transform: scale(0.9);
    background-color: #2b7e5a;
}
</style>