<script setup lang="ts">
import Icon, { IconProps } from '../Icon/Icon.vue'

interface ButtonProps {
    icon?: IconProps['name'],
    iconSize?: IconProps['size'],
    variant?: 'primary' | 'secondary' | 'light'
    outlined?: boolean
}
const { iconSize = 16, variant = 'primary', outlined = false, name } = defineProps<ButtonProps>()
const className = {
    'btn-primary': variant === 'primary',
    "btn-outline-primary": (variant === 'primary') && outlined,
}
</script>

<template>
    <button class="btn d-flex btn-lg" :class="className">
        <Icon v-if="icon" :name="icon" :size="iconSize" />
        <span v-if="$slots.default" :class="{ 'ps-3': !!icon }">
            <slot></slot>
        </span>
    </button>
</template>

<style scoped lang="scss">
@import "../../style.scss";

.btn {
    display: flex;
    align-items: center;

    &.btn-primary {
        border: none;
        padding: 10px;
        color: $primary;
        border-width: 0;
        background: white;

        &:focus {
            color: $secondary;
        }

        &:hover {
            background: $gray-100;
            color: $secondary;
        }
    }

    &.btn-outline-primary {
        border: 2px solid $gray-100;
        padding: 10px;
        color: $primary;
        background: white;

        &:focus {
            color: $secondary;
        }

        &:hover {
            background: $gray-100;
            color: $secondary;
        }
    }
}
</style>