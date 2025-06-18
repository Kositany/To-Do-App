<script setup>
import { ref, defineEmits, reactive } from 'vue'
import CreateButton from './CreateButton.vue'


const emit = defineEmits(['create-todo'])

const todoState = reactive({
    todo: '',
    invalid: null,
    errMsg: '',
})

const createTodo = () => {
    todoState.invalid = null
    if (todoState.todo !== '') {
        emit('create-todo', todoState.todo)
        todoState.todo = ''
        return
    }
    todoState.invalid = true
    todoState.errMsg = 'Please enter a todo'
}
</script>


<template>
    <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
        <input type="text" v-model="todoState.todo" placeholder="Enter a todo item">
        <CreateButton @click="createTodo">

        </CreateButton>
    </div>
    <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
    <!-- <p v-if="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p> -->
</template>

<style lang="scss" scoped>
.input-wrap {
    display: flex;
    transition: 250ms ease;
    border: 2px solid #41b080;
    border-radius: 7px;

    &.input-err {
        border-color: red;
    }

    &:focus-within {
        box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
            0 -2px 4px -2px rgb(0 0 0 / 0.1);
    }

    input {
        width: 100%;
        padding: 8px 6px;
        border: none;

        &:focus {
            outline: none;
        }
    }

}
</style>