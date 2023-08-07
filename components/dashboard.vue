<template>
    <div class="flex flex-col lg:flow-row h-full w-screen">
        <div class="flex w-full h-fit bg-sky-50 dark:bg-slate-950 lg:px-10 lg:px-20 lg:py-10">
          <div class="w-full lg:w-5/6 items-left text-left lg:mx-[100px] my-[25px] flex lg:space-x-[75px] flex flex-col">
            <div class="w-full lg:w-5/6">
                <h1 class="text-5xl lg:text-7xl dark:text-slate-200 text-sky-950 font-extrabold mx-5">Hey {{ username }} !</h1>
                <plausibleAnalytics/>
              </div>
              <div class="flex w-full xl:w-fit xl:text-right xl:items-right xl:right-20 space-y-4 xl:absolute right-10 top-20">
                <div class="flex flex-col w-fit space-y-3 items-right items-center">
                  
                  <h1 class="dark:text-slate-200 text-5xl w-full sm:text-6xl font-extrabold text-sky-950 pl-10 sm:pl-5 text-left">webchange.</h1>
                  <div class=" h-fit w-full rounded-xl text-left space-y-3">
                      <h3 class="dark:text-slate-200 text-sky-950 text-4xl left-0 font-bold 
                      mx-5">Nieuws</h3>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Binnenkort:<br>Google-posities in dashboard</h5>
                      </div>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Onze klanten-dashboard is live!</h5>
                      </div>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Nieuwe dienst: Office365</h5>
                      </div>
                      <div class="border-2 dark:border-slate-200 border-sky-950 w-fit h-fit text-2xl dark:text-slate-200 px-5 py-2 rounded-xl mx-5">
                        <h5>Onze nieuwe website is live!</h5>
                      </div>
                      <button class="ml-5 text-slate-200 dark:text-slate-200 text-2xl font-bold dark:bg-red-500 bg-red-500 px-5 py-2 rounded-xl shadow-xl hover:shadow-2xl hover:scale-95 w-fit" @click="logOut">Uitloggen</button>


                  </div>
                  

                </div>

       


                </div>  
          </div>
        </div>
    </div>
</template>
<script setup>

const supabase = useSupabaseClient()

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
    const user = useSupabaseUser()

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

function logOut() {
    client.auth.signOut();
    console.log(user.value)
    user.value = null
    console.log(user.value)
  
  }
</script>