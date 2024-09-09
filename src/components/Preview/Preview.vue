<script lang="ts" setup>
import Icon from '../Icon/Icon.vue'
import Button from '../Button/Button.vue'
import Dropdown from '../Dropdown/Dropdown.vue';
import Typography from '../Typography/Typography.vue';
import Navbar from '../Navbar/Navbar.vue';
</script>

<template>
    <h3>Icons</h3>
    <Icon />
    <Icon color="orange" />
    <Icon color="gray-500" :size="50" />

    <hr>

    <h3>Buttons</h3>
    <Button>Test Default Button</Button>
    <Button icon="default">Test Icon Button</Button>
    <Button icon="default"></Button>

    <hr>

    <h3>Typography</h3>
    <Typography>Test Default Typography</Typography>
    <Typography weight="bold">Test Bold Typography</Typography>
    <Typography color="primary">Test Color Typography</Typography>

    <hr>

    <h3>Dropdown</h3>
    <Dropdown label="Test Dropdown"
        :items="[{ label: 'Item 1', onSelect: (label, i) => { console.log(label, i) } }, { label: 'Item 2', onSelect: (label, i) => { console.log(label, i) } }]">
    </Dropdown>
    <hr>

    <h3>Navbar Expanded</h3>
    <Navbar @toggle-expand="() => console.log('toggle expand')"/>

    <h3>Navbar Collapsed</h3>
    <Navbar collapsed @toggle-expand="() => console.log('toggle expand')"/>

</template>

<style scoped></style>