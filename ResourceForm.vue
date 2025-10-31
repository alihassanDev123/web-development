<template>
    <CardWrapper customClass="p-8 rounded-2xl">
        <div>
            <Typography content="Support Request" weight="normal" color="grey-500" class="mb-1 text-xl" />
            <Typography content="Fill in the relevant fields" weight="thin" color="black"
                class="mb-6 xl:mb-8 text-xs" />

            <form @submit.prevent="onSubmitClicked">
                <div class="grid grid-cols-2 gap-4">

                    <TextInput v-model="first_name" label="First Name" placeholder="Enter" class="col-span-1"
                        :left-icon="true" />

                    <TextInput v-model="last_name" label="Last Name" placeholder="Enter" class="col-span-1"
                        :left-icon="true" />

                    <TextInput v-model="formData.email" label="Email" placeholder="Enter" class="col-span-2"
                        :left-icon="true">

                        <template #left-icon>
                            <img src="../../../../assets/demo/mail.svg" alt="">
                        </template>

                    </TextInput>

                    <TextInput v-model="formData.phone" label="Phone" placeholder="Enter" class="col-span-2"
                        :left-icon="true">

                        <template #left-icon>
                            <img src="../../../../assets/demo/mail.svg" alt="">
                        </template>

                    </TextInput>

                    <div class="col-span-2">
                        <TextArea v-model="formData.message" label="Request Message" :rows="4" class="bg-red-600" />
                    </div>

                </div>

                <div class="flex justify-center mt-4">

                    <button class="bg-green-500 text-grey-500 py-3 px-6 rounded-full" type="submit">Submit</button>

                </div>
            </form>
        </div>
    </CardWrapper>
</template>

<script>
import {
    Typography, TextInput, Button, TextArea
} from "mcp-enhanced-vue-storybook-generator";
import CardWrapper from './CardWrapper.vue';
import useVuelidate from '@vuelidate/core';
import { required, email, integer, minLength, maxLength } from '@vuelidate/validators';
export default {
    name: "ResourceForm",
    emits: ['update:modelValue'],
    data() {
        return {
            first_name: this.$session.user.name.split(' ')[0],
            last_name: this.$session.user.name.split(' ')[1],
            formData: {
                name: `${this.first_name} ${this.last_name}`,
                email: this.$session.user.email,
                phone: this.$session.user.phone_number,
                message: null
            }
        };
    },
    validations() {
        return {
            first_name: { required },
            last_name: { required },
            formData: {
                name: { required },
                email: { required, email },
                phone: {
                    required, integer,
                    minLength: minLength(10),
                    maxLength: maxLength(10)
                },
                message: { required, maxLength: maxLength(1000) }
            }
        };
    },
    setup() {
        return {
            validation: useVuelidate()
        }
    },
    methods: {
        async onSubmitClicked() {
            console.log('ALiiiiii');
            console.log(this.formData);
            const isValid = await this.validation.$validate();
            if (!isValid) {
                return;
            }
            await this.$loader.loadAsync(async () => {
                await this.$http.post({ url: '/api/resources/support-request/submit', data: this.formData }, response => {
                    this.$toast.success({
                        title: 'Success',
                        text: response.data.message
                    });
                    this.validation.$reset();
                    this.formData.message = null;
                });
            });
        }
    },
    components: {
        CardWrapper,
        Typography,
        TextInput,
        Button,
        TextArea,
    }
};
</script>