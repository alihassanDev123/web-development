<template>
    <Page>
        <!-- Header -->
        <div class="px-12 flex justify-between items-center">
            <div class="flex items-center gap-6 xl:mb-6">
                <div
                    class="size-[56px] rounded-full bg-white/20 border border-white/35 backdrop-blur-[20px] flex items-center justify-center shadow-white/25 shadow-[0_0_24px_0_inset] hover:shadow-lg cursor-pointer">
                    <div class="relative">
                        <BackIcon size="medium" ariaLabel="Back Arrow Icon" class="text-gray-500 rotate-180" />
                    </div>
                </div>

                <Typography tag="h1" variant="h1" content="Carrier Resources" weight="thin"
                    color="grey-500 text-[32px] lg:text-[40px] xl:text-[50px]" />
            </div>
        </div>

        <!-- Info bar -->
        <div class="max-w-4xl xl:max-w-6xl mx-auto">
            <div
                class="flex items-center gap-[9px] bg-[#F59C4A]/10 backdrop-blur-[15px] shadow-[0_0_24px_0_rgba(255,255,255,0.25)_inset] rounded-[40px] px-4 py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 mt-8">
                <img src="../../../../../assets/demo/info.svg" alt="" class="w-5 h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8" />
                <Typography class="text-[#F59C4A] text-xs xl:text-base"
                    content="ALL policy management, renewals, and service are handled on the carrier site. Take a look at the “Carrier Resources” section for more information." />
            </div>
        </div>

        <!-- Grid -->
        <div
            class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 xl:mt-12 lg:px-[90px] xl:px-[173px] max-w-[1728px] mx-auto">
            <div v-for="carrier in carriers" :key="carrier.id"
                class="relative rounded-[24px] overflow-hidden cursor-pointer">
                <!-- Background SVG -->
                <svg class="absolute inset-0 w-full h-full -z-10" viewBox="0 0 327 334" fill="none"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <foreignObject x="-99.427" y="-100" width="525.927" height="534">
                        <div xmlns="http://www.w3.org/1999/xhtml"
                            style="backdrop-filter:blur(50px);clip-path:url(#bgblur_0_613_785_clip_path);height:100%;width:100%" />
                    </foreignObject>
                    <path
                        d="M0.928065 51.1226C0.955148 33.2254 0.96869 24.2767 4.46024 17.4421C7.53155 11.4301 12.4256 6.54341 18.4423 3.4812C25.2822 0 34.2308 0 52.128 0H125.846H227.127C228.988 0 229.918 0 230.711 0.0393826C246.714 0.834096 259.663 13.3428 261.01 29.3094C261.077 30.1007 261.109 31.0304 261.174 32.8899L261.221 34.2587C261.241 34.8427 261.251 35.1347 261.264 35.3838C262.109 52.2197 275.87 65.5131 292.725 65.7759C292.974 65.7797 293.266 65.7797 293.851 65.7797C294.454 65.7797 294.755 65.7797 295.01 65.7838C312.284 66.0591 326.221 79.9959 326.496 97.2698C326.5 97.5248 326.5 97.8262 326.5 98.429V143.91L326.13 282.936C326.083 300.815 326.059 309.754 322.565 316.581C319.491 322.586 314.598 327.466 308.585 330.524C301.749 334 292.809 334 274.931 334H51.7776C33.8314 334 24.8583 334 18.0078 330.506C11.9821 327.432 7.08545 322.528 4.02088 316.497C0.53686 309.642 0.550439 300.669 0.577596 282.723L0.928065 51.1226Z"
                        fill="white" fill-opacity="0.35" />
                    <defs>
                        <clipPath id="bgblur_0_613_785_clip_path" transform="translate(99.427 100)">
                            <path
                                d="M0.928065 51.1226C0.955148 33.2254 0.96869 24.2767 4.46024 17.4421C7.53155 11.4301 12.4256 6.54341 18.4423 3.4812C25.2822 0 34.2308 0 52.128 0H125.846H227.127C228.988 0 229.918 0 230.711 0.0393826C246.714 0.834096 259.663 13.3428 261.01 29.3094C261.077 30.1007 261.109 31.0304 261.174 32.8899L261.221 34.2587C261.241 34.8427 261.251 35.1347 261.264 35.3838C262.109 52.2197 275.87 65.5131 292.725 65.7759C292.974 65.7797 293.266 65.7797 293.851 65.7797C294.454 65.7797 294.755 65.7797 295.01 65.7838C312.284 66.0591 326.221 79.9959 326.496 97.2698C326.5 97.5248 326.5 97.8262 326.5 98.429V143.91L326.13 282.936C326.083 300.815 326.059 309.754 322.565 316.581C319.491 322.586 314.598 327.466 308.585 330.524C301.749 334 292.809 334 274.931 334H51.7776C33.8314 334 24.8583 334 18.0078 330.506C11.9821 327.432 7.08545 322.528 4.02088 316.497C0.53686 309.642 0.550439 300.669 0.577596 282.723L0.928065 51.1226Z" />
                        </clipPath>
                    </defs>
                </svg>

                <!-- Foreground content -->
                <div class="relative z-10 h-full w-full p-6 flex flex-col">
                    <!-- Header row: logo + name + menu -->
                    <div class="flex items-start justify-between">
                        <div class="flex items-center gap-3">
                            <img :src="carrier.logo" alt="" class="h-7 object-contain select-none" draggable="false" />
                            <span class="text-blue-700 font-semibold text-lg leading-none">{{ carrier.name }}</span>
                        </div>

                        <button type="button"
                            class="w-[46px] absolute lg:top-2 lg:right-4 xl:top-2 xl:right-1  h-[46px] xl:w-[56px] xl:h-[56px] rounded-full backdrop-blur-[20px] border-2 border-black/10 flex items-center justify-center hover:scale-105 transition-transform shrink-0"
                            @click.stop="onMore(carrier)">
                            <MoreIcon size="large" class="text-gray-500" />
                        </button>
                    </div>

                    <!-- Rows -->
                    <div class="pt-9 grid grid-cols-[1fr_auto] gap-y-2 text-gray-500">
                        <span>Support Number</span>
                        <span class="text-gray-800">{{ carrier.supportNumber || '—' }}</span>

                        <span>Claim Number</span>
                        <span class="text-gray-800">{{ carrier.claimNumber || '—' }}</span>

                        <span>Website</span>
                        <button class="justify-self-end p-1 rounded-md hover:bg-black/5 transition"
                            :aria-label="`Open ${carrier.name} website`" @click.stop="openUrl(carrier.website)">
                            <!-- Arrow (external) -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 7h4m0 0v4m0-4L10 14" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 7v10a2 2 0 002 2h10" />
                            </svg>
                        </button>

                        <span>Reference Guide</span>
                        <button class="justify-self-end p-1 rounded-md hover:bg-black/5 transition"
                            :aria-label="`Download ${carrier.name} reference guide`"
                            @click.stop="download(carrier.referenceGuide)">
                            <!-- Download -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 3a1 1 0 011 1v8.586l1.293-1.293a1 1 0 011.414 1.414l-3.004 3.004a1.5 1.5 0 01-2.121 0L7.578 12.707a1 1 0 111.414-1.414L10.3 12.6V4a1 1 0 011-1z" />
                                <path d="M5 20a2 2 0 002 2h10a2 2 0 002-2v-3a1 1 0 10-2 0v3H7v-3a1 1 0 10-2 0v3z" />
                            </svg>
                        </button>

                        <span>Available States</span>
                        <button class="justify-self-end p-1 rounded-md hover:bg-black/5 transition"
                            :aria-label="`View ${carrier.name} states`" @click.stop="viewStates(carrier)">
                            <!-- Eye -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 5c-5 0-8.5 3.5-10 7 1.5 3.5 5 7 10 7s8.5-3.5 10-7c-1.5-3.5-5-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8z" />
                            </svg>
                        </button>

                        <span>Offer Excess</span>
                        <span class="text-gray-800 text-right">{{ yesNo(carrier.offerExcess) }}</span>

                        <span>Offers Commercial</span>
                        <span class="text-gray-800 text-right">{{ yesNo(carrier.offersCommercial) }}</span>

                        <span>Offers IVANS Download</span>
                        <span class="text-gray-800 text-right">{{ yesNo(carrier.offersIvans) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>

<script>
import { Typography, Background, Button, Card, BackIcon, MoreIcon } from 'mcp-enhanced-vue-storybook-generator'
import Page from '../../../components/ui/layouts/Page.vue'
import { clone, formatFileSize, formatPhone, getAssetUrl, toTitleCase } from '../../../../util'

export default {
    name: 'CarrierResources',

    components: {
        Typography,
        Background,
        Button,
        Card,
        Page,
        BackIcon,
        MoreIcon,
    },

    data() {
        return {
            carriers: [],   // filled from API
            statesById: {}, // map: { 'FL': 'Florida', ... } for tooltip text
        }
    },

    async mounted() {
        // mirror your “loader async” sequencing from the old page
        await this.$loader.loadAsync(async () => {
            await this.fetchStates()
            await this.fetchCarriers()
        })
    },

    methods: {
        // ---------- API ----------
        async fetchStates() {
            await this.$http.get({ url: '/api/enum/options/state' }, (response) => {
                const list = response?.data?.data || []
                // build a quick lookup map for tooltips
                this.statesById = list.reduce((acc, s) => {
                    if (s?.id) acc[s.id] = s.name || s.id
                    return acc
                }, {})
            })
        },

        async fetchCarriers() {
            await this.$http.get({ url: '/api/resources/carrier' }, (response) => {
                const raw = response?.data?.data?.carrier_resources || []

                this.carriers = raw.map((cr) => {
                    // compute logo path the same way you did in the old page
                    const logo = getAssetUrl?.(`images/carriers/${cr.carrier_id}.png`) || ''

                    // compute reference guide URL (file or external)
                    const referenceGuide =
                        cr.reference_guide_type === 'url'
                            ? cr.reference_guide_url
                            : (cr.reference_guide_file_id
                                ? `/api/file/${cr.reference_guide_file_id}/download?token=${this.$session.token}&inline=1`
                                : '')

                    // normalize booleans + states
                    return {
                        id: cr.id,
                        name: cr.name,
                        logo,
                        supportNumber: cr.support_phone_number || '',
                        claimNumber: cr.claims_phone_number || '',
                        website: cr.url || '',
                        referenceGuide,
                        states: Array.isArray(cr.valid_states) ? cr.valid_states : [],
                        offerExcess: !!cr.offers_excess,
                        offersCommercial: !!cr.offers_commercial,
                        offersIvans: !!cr.offers_ivans_downloads,
                    }
                })
            })
        },

        // ---------- UI helpers (same as your dummy version) ----------
        yesNo(v) {
            return v ? 'Yes' : 'No'
        },
        openUrl(url) {
            if (url) window.open(url, '_blank', 'noopener,noreferrer')
        },
        download(url) {
            if (url) window.open(url, '_blank', 'noopener,noreferrer')
        },
        viewStates(carrier) {
            // simple placeholder; you can swap in your Tooltip/Modal
            const pretty = (carrier.states || []).map((s) => this.statesById[s] || s).join(', ')
            alert(`${carrier.name} Available States:\n${pretty || '—'}`)
        },
        onMore(carrier) {
            console.log('More clicked:', carrier)
        },
    },
}
</script>


<style scoped></style>
