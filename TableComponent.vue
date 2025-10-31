<template>
    <CardWrapper customClass="rounded-[16px] bg-[#D9D9D9]">
        <!-- Header -->
        <div class="flex justify-between items-center p-8 xl:p-10">
            <Typography variant="h1" class="text-2xl xl:text-4xl font-[300]">
                {{ items.length }}
                <span class="text-[14px] font-[200] ml-2">Results</span>
            </Typography>

            <div
                class="flex items-center gap-2 h-[56px] rounded-full border border-white/35 bg-white/10 backdrop-blur-[15px]">
                <button type="button" @click="activeView = 'list'"
                    :class="[baseButtonClass, activeView === 'list' ? activeBtn : idleBtn]">
                    <ListIcon size="medium" class="text-gray-600" />
                </button>
                <button type="button" @click="activeView = 'grid'"
                    :class="[baseButtonClass, activeView === 'grid' ? activeBtn : idleBtn]">
                    <GridIcon size="medium" class="text-gray-600" />
                </button>
            </div>
        </div>

        <!-- Body -->
        <div class="px-4 sm:px-6 xl:px-10 pb-8 xl:pb-10">
            <!-- LIST VIEW -->
            <div v-if="activeView === 'list'" class="space-y-4 xl:space-y-6">
                <button v-for="(item, i) in items" :key="'list-' + i" type="button"
                    class="w-full text-left rounded-[32px] border border-white/40 bg-white/35 backdrop-blur-[50px] hover:bg-white/45 transition-colors">
                    <div class="flex gap-4 xl:gap-6 p-4 xl:p-6 2xl:p-8 items-stretch">
                        <!-- Thumbnail -->
                        <div class="relative shrink-0 overflow-hidden rounded-[16px]
                        w-[140px] h-[80px] sm:w-[180px] sm:h-[100px]
                        lg:w-[200px] lg:h-[124px] xl:w-[230px] xl:h-[188px]">
                            <img :src="item.thumbnail_url" :alt="item.title"
                                class="absolute inset-0 w-full h-full object-cover" />
                        </div>

                        <!-- Copy -->
                        <div class="min-w-0 flex-1 flex flex-col justify-between">
                            <div class="space-y-1.5 xl:space-y-2">
                                <Typography variant="h3"
                                    class="block text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-[500] text-gray-800 truncate">
                                    {{ item.title }}
                                </Typography>
                                <p
                                    class="text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-snug line-clamp-2 xl:line-clamp-3">
                                    {{ item.description }}
                                </p>
                            </div>
                            <div class="mt-3 xl:mt-4 flex items-center gap-4 text-[11px] lg:text-[12px] text-gray-600">
                                <span v-if="item.published_at">{{ formatDate(item.published_at) }}</span>
                                <span v-if="item.duration"
                                    class="flex items-center gap-1 before:content-['•'] before:mx-1 before:text-gray-400">
                                    {{ item.duration }}
                                </span>
                            </div>
                        </div>
                    </div>
                </button>
            </div>

            <!-- GRID VIEW -->
            <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
                <div v-for="(item, i) in items" :key="'grid-' + i"
                    class="relative rounded-[24px] overflow-hidden cursor-pointer">
                    <!-- Background SVG -->
                    <svg class="absolute inset-0 w-full h-full -z-10" viewBox="0 0 327 334" fill="none"
                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <foreignObject x="-99.427" y="-100" width="525.927" height="534">
                            <div xmlns="http://www.w3.org/1999/xhtml"
                                style="backdrop-filter:blur(50px);clip-path:url(#bgblur_0_613_785_clip_path);height:100%;width:100%">
                            </div>
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
                    <div class="relative z-10 h-full w-full p-5 flex flex-col justify-between">
                        <!-- top row -->
                        <div class="flex text-[12px] gap-6 text-gray-600">
                            <span>{{ formatDate(item.published_at) }}</span>
                            <span>{{ item.duration }}</span>
                        </div>

                        <!-- thumbnail -->
                        <div class="relative mt-2 overflow-hidden rounded-xl w-[163px] h-[102px] aspect-video">
                            <img :src="item.thumbnail_url" :alt="item.title" class="object-cover " />
                        </div>

                        <!-- title / description -->
                        <div class="max-w-[278px]">
                            <h3 class="text-[20px] xl:text-[24px] mt-2 text-gray-800 line-clamp-2 leading-8 font-[400]">
                                {{ item.title }}
                            </h3>
                            <p class="text-[16px] xl:text-[20px] text-gray-500 mt-2 leading-8 line-clamp-2 ">
                                {{ item.description }}
                            </p>
                        </div>

                        <!-- play button -->
                        <div class="absolute lg:top-0 lg:right-3 xl:-top-0 xl:right-4 w-[46px] h-[46px] xl:w-[56px] xl:h-[56px] rounded-full
            backdrop-blur-[20px] border-2 border-black/10
           flex items-center justify-center hover:scale-105 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" class="w-5 h-5 text-gray-800">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </CardWrapper>
</template>

<script>
import CardWrapper from './CardWrapper.vue'
import { Typography, GridIcon, ListIcon } from 'mcp-enhanced-vue-storybook-generator'
import moment from 'moment'

export default {
    name: 'VideoResults',
    components: { CardWrapper, Typography, GridIcon, ListIcon },
    data() {
        return {
            activeView: 'list',
            baseButtonClass: 'w-[54px] h-[54px] shrink-0 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-[20px] border',
            activeBtn: 'bg-white/60 border-white/40 shadow-[inset_0_0_24px_rgba(255,255,255,0.25)]',
            idleBtn: 'bg-transparent border-transparent',
            items: []
        }
    },
    mounted() {
        this.getTrainingVideos()
    },
    methods: {
        async getTrainingVideos() {
            await this.$loader.loadAsync(async () => {
                await this.$http.get({ url: '/api/resources/video' }, response => {
                    this.items = response.data.data.video_resources;
                });
            });
        },
        formatDate(date) {
            return moment(date).format('MM/DD/YYYY')
        },
        play(item) {
            console.log('play clicked', item)
        }
    }
}
</script>
