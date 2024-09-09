<script setup lang="ts">

interface TypographyProps {
    variant?: 'body' | 'display',
    weight?: 'thin' | 'normal' | 'bold',
    color?: string;
}

const { variant = 'body', weight = 'normal', color = 'inherit' } = defineProps<TypographyProps>()
const textColor = `text-${color}`
const className = {
    'h4': variant === 'display',
    'fs-6': variant === 'body',
    'fw-thin': weight === 'thin',
    'fw-normal': weight === 'normal',
    'fw-bold': weight === 'bold',
    ["text-reset"]: color === 'inherit',
    [textColor]: !!color
}
</script>

<template>
    <p class='m-0' :class="className">
        <slot></slot>
    </p>
</template>

<style scoped></style>
