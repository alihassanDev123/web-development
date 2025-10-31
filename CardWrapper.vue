<template>
    <div :class="[
        'relative bg-[#F2F2F2] overflow-hidden',
        customClass
    ]">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 rounded-[16px] opacity-[0.03] pointer-events-none"
            style="background: linear-gradient(105deg, #365AFF -4.19%, #CAFF80 114.61%);"></div>

        <!-- Slot Content -->
        <div class="relative z-10 w-full">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "CardWrapper",
    props: {
        customClass: {
            type: String,
            default: "",
        },
    },
};
</script>
