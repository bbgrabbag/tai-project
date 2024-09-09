<script lang="ts" setup>
import Icon from '../Icon/Icon.vue';
import Button from '../Button/Button.vue';
import Typography from '../Typography/Typography.vue';
import { ref, computed } from 'vue';

interface DropdownProps {
    label: string;
    icon?: IconProps['name'],
    items: { label: string, onSelect: (label: string, index: number) => void }[]
}

const { icon = 'default', minimize, label } = defineProps<DropdownProps>()
const collapsed = ref(true);
const toggleCollapse = () => collapsed.value = !collapsed.value
const dropdownStateIcon = computed(() => collapsed.value ? 'chevron-down' : 'chevron-up')

</script>

<template>
    <div class="tai-dropdown">
        <header class="tai-dropdown-header d-grid">
            <Button :iconSize=24 :icon="icon" @click="toggleCollapse">
                <Typography weight="bold">{{ label }}</Typography>
                <span class="tai-dropdown-icon d-flex">
                    <Icon :name="dropdownStateIcon" :size="12"></Icon>
                </span>
            </Button>
        </header>
        <div v-if="!collapsed" class="tai-dropdown-body">
            <ul class="list-group">
                <li v-for="(item, index) in items" :key="item.label" @click="item.onSelect(item.label, index)"
                    class="list-group-item">
                    <Typography>{{ item.label }}</Typography>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped lang="scss">
@import "../../style.scss";

.tai-dropdown {

    .tai-dropdown-header {
        position: relative;

        .tai-dropdown-icon {
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
            align-items: center;
            position: absolute;
            padding: 10px;
        }
    }

    .tai-dropdown-body {
        .list-group {
            padding-top: .5rem;

            .list-group-item {
                color: $primary;
                border: none;
                margin-left: 22px;
                border-radius: 0;
                border-left: 2px solid $gray-100;
                padding: 12px  26px;

                &:hover {
                    color: $secondary;
                    border-left: 2px solid $secondary;
                    cursor: pointer;
                }
            }
        }
    }

}
</style>