<template>
    <div>
        <ProgressSpinner v-if="loading" />
        <section v-else class="flex flex-col gap-4 overflow-auto max-w-screen">
            <div class="flex flex-wrap justify-evenly gap-2">
                <InputText v-model="filters.job_title" type="text" placeholder="Filter by Job Title" />
                <InputText v-model="filters.full_description" type="text" placeholder="Filter by Full Description" />
                <InputText v-model="filters.company_name" type="text" placeholder="Filter by Company Name" />
                <InputText v-model="filters.country" type="text" placeholder="Filter by Country" />
            </div>
            <Accordion :multiple="true" :activeIndex="[0]">
                <AccordionTab v-for="(offer, index) in filteredOffers" :key="index">
                    <template #header>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <span>{{ offer.job_title }}</span>
                            <span class="md:justify-self-center">{{ offer.company_name }}</span>
                            <span class="md:justify-self-end">{{ offer.country }}</span>
                        </div>
                    </template>
                    <p class="flex flex-col gap-6">
                        <div v-if="offer.visa_sponsorship_or_remote" class="flex flex-col gap-1">
                            <span class="text-sm">Visa sponsorship or remote:</span>
                            <span>{{ offer.visa_sponsorship_or_remote }}</span>
                        </div>
                        <div v-if="offer.deadline" class="flex flex-col gap-1">
                            <span class="text-sm">Deadline:</span>
                            <span>{{ offer.deadline }}</span>
                        </div>
                        <div v-if="offer.url_or_email" class="flex flex-col gap-1">
                            <span class="text-sm">Url or email:</span>
                            <span>{{ offer.url_or_email }}</span>
                        </div>
                        <div v-if="offer.requirements" class="flex flex-col gap-1">
                            <span class="text-sm">Requirements:</span>
                            <span>{{ offer.requirements }}</span>
                        </div>
                        <div v-if="offer.full_description" class="flex flex-col gap-1">
                            <span class="text-sm">Full description:</span>
                            <span>{{ offer.full_description }}</span>
                        </div>
                    </p>
                </AccordionTab>
            </Accordion>
            <p>{{ offers.length }} job offers</p>
        </section>
    </div>
</template>

<script setup>
const offers = ref([])
const loading = ref(true)
const filters = ref({ job_title: '', full_description: '', company_name: '', country: '' });

const filteredOffers = computed(() => {
    return offers.value.filter(offer => {
        const jobTitle = offer.job_title?.toLowerCase() || '';
        const fullDescription = offer.full_description?.toLowerCase() || '';
        const companyName = offer.company_name?.toLowerCase() || '';
        const country = offer.country?.toLowerCase() || '';

        const jobTitleMatch = jobTitle.includes(filters.value.job_title.toLowerCase());
        const fullDescriptionMatch = fullDescription.includes(filters.value.full_description.toLowerCase());
        const companyNameMatch = companyName.includes(filters.value.company_name.toLowerCase());
        const countryMatch = country.includes(filters.value.country.toLowerCase());

        return jobTitleMatch && fullDescriptionMatch && companyNameMatch && countryMatch;
    });
});

onMounted(async () => {
    const response = await fetch('https://gist.githubusercontent.com/fernandosmither/baa69b59e7a06fdc7d7d31cc3d1d3c09/raw/fe894b6c4cfa7b9351ea668811d6001fe3ff326e/job_listings.json')
    offers.value = await response.json()
    loading.value = false
})
</script>
