<template>
    <Page>
        <div class="px-12 min-h-screen">
            <div class="flex items-center gap-6">
                <div
                    class="size-[56px] rounded-full bg-white/20 border border-white/35 backdrop-blur-[20px] flex items-center justify-center shadow-white/25 shadow-[0_0_24px_0_inset] hover:shadow-lg cursor-pointer">
                    <div class="relative">
                        <BackIcon size="medium" ariaLabel="Back Arrow Icon" class="text-gray-500 rotate-180" ali />
                    </div>
                </div>

                <Typography tag="h1" variant="h1" content="Resources" weight="thin"
                    color="grey-500 text-[32px] lg:text-[40px] xl:text-[50px]" />
            </div>


            <div class="max-w-4xl xl:max-w-6xl mx-auto">
                <div
                    class="flex items-center gap-[9px] bg-[#F59C4A]/10 backdrop-blur-[15px] shadow-[0_0_24px_0_rgba(255,255,255,0.25)_inset] rounded-[40px] px-4 py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 mt-8">
                    <img src="../../../../../assets/demo/info.svg" alt="" class="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />

                    <Typography class="text-[#F59C4A] text-xs xl:text-base"
                        content="ALL policy management, renewals, and service are handled on the carrier site. Take a look at the “Carrier Resources” section for more information." />
                </div>
            </div>

            <div class="mt-8 xl:mt-12 lg:px-[90px] xl:px-[173px] max-w-[1728px] mx-auto">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 mt-6 mx-auto">

                    <CardWrapper v-for="(card, index) in cards" :key="index" @click="$router.push({ name: card.route })"
                        class="rounded-2xl cursor-pointer min-h-[90px] lg:min-h-[100px] xl:min-h-[110px] p-4 lg:p-6 xl:p-8
             hover:shadow-sm transition-shadow duration-300 ease-in-out flex items-center justify-center">
                        <div class="flex items-center justify-between w-full">
                            <Typography :content="card.title" weight="normal" color="grey-500"
                                class="text-xl xl:text-2xl" />
                            <ChevronIcon size="small" class="text-grey-500 transform -rotate-90" />
                        </div>
                    </CardWrapper>

                    <ResourceForm />

                    <div class="space-y-6 xl:space-y-8">
                        <CardWrapper
                            customClass="rounded-2xl min-h-[90px] lg:min-h-[100px] xl:min-h-[110px] p-4 lg:p-6 xl:p-8 hover:shadow-sm transition-shadow duration-300 ease-in-out flex items-center justify-center">
                            <div class="flex flex-col w-full">
                                <Typography content="Support Contact Info" weight="normal" color="grey-500"
                                    class="text-lg xl:text-xl" />
                                <Break role="separator" class="w-full" variant="gradient" spacing="medium" />
                            </div>

                            <div class="space-y-3 xl:space-y-4">

                                <div class="flex justify-between items-center"
                                    v-for="(info, idx) in support_contact_info" :key="idx">
                                    <Typography :content="info.label" weight="normal" color="grey-200"
                                        class="text-sm xl:text-base" />
                                    <Typography :content="info.value" weight="normal" color="grey-500"
                                        class="text-sm xl:text-base" />
                                </div>

                            </div>
                        </CardWrapper>

                        <CardWrapper
                            customClass="rounded-2xl min-h-[90px] lg:min-h-[100px] xl:min-h-[110px] p-4 lg:p-6 xl:p-8 hover:shadow-sm transition-shadow duration-300 ease-in-out flex items-center justify-center">
                            <div class="flex flex-col w-full">
                                <Typography content="Commission Support Info" weight="normal" color="grey-500"
                                    class="text-lg xl:text-xl" />
                                <Break role="separator" class="w-full" variant="gradient" spacing="medium" />

                            </div>


                            <div class="flex justify-between items-center">
                                <Typography content="Email" weight="normal" color="grey-200"
                                    class="text-sm xl:text-base" />
                                <Typography content="commissions@rocketmga.com" weight="normal" color="grey-500"
                                    class="text-sm xl:text-base" />
                            </div>

                        </CardWrapper>

                    </div>

                </div>

            </div>

        </div>

    </Page>
</template>

<script>
import {
    Typography,
    Background,
    Button,
    Card,
    BackIcon,
    ChevronIcon,
    Break
} from "mcp-enhanced-vue-storybook-generator";
import Page from "../../../components/ui/layouts/Page.vue";
import CardWrapper from "../../../components/form/CardWrapper.vue";
import ResourceForm from "../../../components/form/ResourceForm.vue";

export default {
    name: "ResourcesDemo",

    data() {
        return {
            cards: [
                { title: "Training Videos", route: "TrainingVideoResourcesDemo" },
                { title: "Carrier Resources", route: "CarrierResourcesDemo" },
            ],
            support_contact_info: [
                {
                    label: "Phone Number",
                    value: "(561) 404 4498",
                },
                {
                    label: "Email",
                    value: "support@rocketmga.com"
                },
                { label: "Business Hours", value: "9:00 AM - 5:00 PM EST" }
            ]
        };
    },

    components: {
        Typography,
        Background,
        Button,
        Card,
        Page,
        BackIcon,
        CardWrapper,
        ChevronIcon,
        ResourceForm,
        Break,
    },
};
</script>
