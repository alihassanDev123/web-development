<template>
    <Page>

        <div class="px-12 flex justify-between items-center">

            <div class="flex items-center gap-6 xl:mb-6">
                <div
                    class="size-[56px] rounded-full bg-white/20 border border-white/35 backdrop-blur-[20px] flex items-center justify-center shadow-white/25 shadow-[0_0_24px_0_inset] hover:shadow-lg cursor-pointer">
                    <div class="relative">
                        <BackIcon size="medium" ariaLabel="Back Arrow Icon" class="text-gray-500 rotate-180" />
                    </div>
                </div>

                <Typography tag="h1" variant="h1" content="Training Videos" weight="thin"
                    color="grey-500 text-[32px] lg:text-[40px] xl:text-[50px]" />
            </div>

        </div>

        <div class="px-12 mt-12">
            <TableComponent />
        </div>


    </Page>
</template>

<script>
import { Typography, Background, Button, Card, BackIcon } from 'mcp-enhanced-vue-storybook-generator'
import Page from '../../../components/ui/layouts/Page.vue';
import TableComponent from '../../../components/form/TableComponent.vue';

export default {
    name: 'Users',

    data() {
        return {
            message: 'This is the Users page.'
        }
    },

    components: {
        Typography,
        Background,
        Button,
        Card,
        Page,
        BackIcon,
        TableComponent
    }
}
</script>

<style scoped>
div {
    color: blue;
    font-size: 18px;
}
</style>
