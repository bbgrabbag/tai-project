<script lang="ts" setup>
import Dropdown from '../Dropdown/Dropdown.vue';
import Button from '../Button/Button.vue';
import Typography from '../Typography/Typography.vue';
import logoLg from "../../assets/images/logo-lg.png"
import logoSm from "../../assets/images/logo-sm.png"
import { computed } from 'vue'

interface NavbarProps {
    collapsed?: boolean;
}
const { collapsed = false } = defineProps<NavbarProps>()
const emit = defineEmits(['toggle-expand'])

const handleClick = () => {
    emit('toggle-expand')
}

const width = computed(() => collapsed ? 'fit-content' : "280px")
const menuItems = {
    plan: [{ label: 'Plans' }, { label: 'Scoring' }, { label: 'Capacity' }, { label: 'Territory' }],
    data: [{ label: 'Data Item 1' }, { label: 'Data Item 2' }],
    workspaceName: [{ label: 'Workspace Name Item 1' }, { label: 'Workspace Name Item 2' }],
}
</script>

<template>
    <nav class="tai-navbar" :style="{ width }">
        <header class="tai-navbar-header">
            <div class="tai-navbar-logo">
                <img :src="logoSm" alt="">
                <Typography v-if="!collapsed" variant="display">Territories.ai</Typography>
            </div>
            <Button v-if="!collapsed" icon="chevron-left" :iconSize=12 @click="handleClick" outlined></Button>
            <span v-if="collapsed" class="position-absolute" style="right: 0; transform: translateX(50%);">
                <Button icon="chevron-right" :iconSize=12 @click="handleClick" outlined></Button>
            </span>
        </header>
        <div class="tai-navbar-body">
            <section :class="{ 'd-grid': !collapsed }">
                <Dropdown v-if="!collapsed" :minimize="collapsed" label="Plan" :items="menuItems.plan"
                    icon="clipboard" />
                <Button v-if="collapsed" icon="clipboard" :iconSize=24></Button>

                <Button v-if="!collapsed" icon="group" :iconSize=24>
                    <Typography weight="bold">Accounts</Typography>
                </Button>
                <Button v-if="collapsed" icon="group" :iconSize=24></Button>

                <Dropdown v-if="!collapsed" :minimize="collapsed" label="Data" :items="menuItems.data"
                    icon="database" />
                <Button v-if="collapsed" icon="database" :iconSize=24></Button>

                <hr>

                <Button v-if="!collapsed" icon="gear" :iconSize=24>
                    <Typography weight="bold">Settings</Typography>
                </Button>
                <Button v-if="collapsed" icon="gear" :iconSize=24></Button>

                <Button v-if="!collapsed" icon="question" :iconSize=24>
                    <Typography weight="bold">Need Help?</Typography>
                </Button>
                <Button v-if="collapsed" icon="question" :iconSize=24></Button>

            </section>

            <section :class="{ 'd-grid': !collapsed }">
                <Dropdown v-if="!collapsed" label="Workspace Name" :items="menuItems.workspaceName" icon="user" />
                <Button v-if="collapsed" icon="user" :iconSize=24></Button>

                <hr>
                <Button v-if="!collapsed" icon="exit" :iconSize=24>
                    <Typography weight="bold">Logout</Typography>
                </Button>
                <Button v-if="collapsed" icon="exit" :iconSize=24></Button>
            </section>
        </div>
    </nav>
</template>

<style scope lang="scss">
@import "../../style.scss";

.tai-navbar {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    width: 280px;
    padding: 24px;

    .tai-navbar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2rem;

        .tai-navbar-logo {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    .tai-navbar-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        section {
            display: flex;
            flex-direction: column;
            gap: .25rem;

            hr {
                color: $gray-500;
            }
        }
    }
}
</style>