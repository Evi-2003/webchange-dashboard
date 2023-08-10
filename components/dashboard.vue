<template>
  <Popup v-if="showModal" @click="showModal = !showModal"/>
  

    <div class="flex flex-col lg:flow-row h-full w-screen" :class="{ active: showModal }" id="main">
        <div class="flex w-full h-fit bg-neutral-50 dark:bg-stone-950 lg:px-10 lg:px-20 lg:py-10">
          <div class="w-full lg:w-5/6 items-left text-left lg:mx-[100px] my-[25px] flex lg:space-x-[75px] flex flex-col">
            <div class="w-full lg:w-5/6">
                <h1 class="text-5xl lg:text-7xl dark:text-slate-200 text-sky-950 font-extrabold mx-5">Welkom {{ username }} !</h1>
                <plausibleAnalytics/>
              </div>
              <div class="flex w-full xl:w-fit xl:text-right xl:items-right xl:right-10 space-y-4 xl:absolute right-10 top-20">
                <div class="flex flex-col w-fit space-y-3 items-right items-center bg-zinc-100 dark:bg-stone-900 drop-shadow-2xl px-2 py-5 rounded-xl items-left justify-left">
                  <h1 class="dark:text-slate-200 text-5xl w-full sm:text-6xl font-extrabold text-sky-950 pl-10 sm:pl-5 text-left">webchange.</h1>
                  <div class="flex w-full items-left justify-left ml-10">
                    <a class="text-slate-200 dark:text-slate-200 text-2xl ml-5 sm:ml-0 sm:text-3xl font-bold dark:bg-sky-800 bg-sky-600 w-fit h-fit py-2 px-5 sm:px-7  sm:py-3 h-fit rounded-xl shadow-xl hover:shadow-2xl hover:scale-95" @click="showModal = !showModal;">Uitleg Dashboard</a>
                  </div>
                    <div class=" h-fit w-full rounded-xl text-left space-y-3 ">
                      <h3 class="dark:text-slate-200 text-sky-950 text-4xl left-0 font-bold 
                      mx-5">Nieuws</h3>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Binnenkort:<br>Google-posities in dashboard</h5>
                      </div>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Onze dashboard is live!</h5>
                      </div>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Nieuwe dienst: Office365</h5>
                      </div>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Onze nieuwe website is live!</h5>
                      </div>
                      <button class="ml-5 text-slate-200 dark:text-slate-200 text-2xl font-bold dark:bg-red-500 bg-red-500 px-5 py-2 rounded-xl shadow-xl hover:shadow-2xl hover:scale-95 w-fit" @click="signOut()">Uitloggen</button>


                  </div>
                  

                </div>

       


                </div>  
          </div>
        </div>
    
 
  </div>
</template>
<script>
import Popup from '/components/popup.vue'

export default {
  components: { Popup },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>
<script setup>
const supabase = useSupabaseAuthClient()
const client = useSupabaseAuthClient();
const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_path = ref('')


var user = useSupabaseUser()
loading.value = true
let { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website
  avatar_path.value = data.avatar_url
}


loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    let user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      website: website.value,
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


const signOut= async () => {
  console.log(user)
  client.auth.signOut()
  user = null
  console.log(user)
  location.reload()
   try {
      const { error } = await client.auth.signOut()
      if (error) throw error
      user.value = null
      location.reload()
   } catch (error) {
      console.log(error.message)
   }
}
  
</script>

<style>
  .flex.flex-col.lg\:flow-row.h-full.w-screen.active{
    opacity: 0.8;
    filter: blur(10px);
  }
</style>