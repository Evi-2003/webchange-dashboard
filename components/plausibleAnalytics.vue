<template>
    <div class="flex flex-col h-fit w-full">
        <div class="flex flex-row h-fit w-full">
            <div class="flex flex-col lg:flex-row lg:space-x-10 h-fit w-full lg:pt-5">
              
                <div class="relative h-fit w-fit mx-5">

                    <div class="my-5 lg:my-0 bg-transparant border-sky-950 text-sky-950 dark:border-white dark:text-white border-4 w-full lg:w-fit px-5 py-2 mt-5 rounded-xl">
                        <span class="absolute left-[-10px] top-[10px] lg:-top-[10px] flex h-7 w-7">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-7 w-7 bg-green-400"></span>
                        </span>
                    <h3 class="text-2xl lg:text-3xl text-sky-950 font-bold dark:text-white">Live bezoekers: {{ count }}</h3></div>
                </div>   
            </div>
        </div>
        <iframe class="drop-shadow-2xl" plausible-embed :src="weburl" scrolling="no" frameborder="0" loading="lazy" style="width: 1px; min-width: 100%; height: 1600px; "></iframe>
        </div>


</template>
<script setup>



const supabase = useSupabaseClient()
const loading = ref(true)
const username = ref('')
const website = ref('')
const weburl = ref('')
const domain = ref('')
const avatar_path = ref('')

loading.value = true
const user = useSupabaseUser()

let { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url, domain, weburl`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website 
  domain.value = data.domain
  weburl.value = data.weburl
  avatar_path.value = data.avatar_url
}

loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
      domain: domain.value,
      avatar_url: avatar_path.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}


async function uitloggen() {
    
  try {
    upabase.auth.signOut()
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error) {
    alert(error.message)
  } finally {
    upabase.auth.signOut()
    loading.value = false
    user.value = null
  }
}


const url = 'https://plausible.io/api/v1/stats/realtime/visitors/?site_id=' + domain.value;
const token = process.env.token;

const { data: count } = await useFetch(url, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}, {
  watch: {
    interval: 5000
  }
})

        const { data: count30 } = await useFetch(url30,  {
        headers: {
            'Authorization': `Bearer ${token}`
        },
 },
      
 );




</script>