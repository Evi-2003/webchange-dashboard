<template>
    <div class="w-[25vw] h-[100vh] bg-sky-950 overflow-hidden flex flex-col justify-center">
        <div class="p-4 mt-5 flex flex-col text-center items-center aling-center">
            <nuxtLink to="/" class="text-6xl text-white h-full p-1 font-extrabold">webchange.</nuxtLink>
            <nuxtLink to="/" class="text-4xl text-white h-full p-1 font-extrabold">Dashboard</nuxtLink>
            <span class="text-4xl text-white h-full pt-3 font-extrabold">Menu</span>
            <ul class="w-full space-y-2 text-2xl text-white mt-2 items-center flex flex-col">
                <li class="w-11/12 bg-sky-600 rounded-xl px-5 py-3 shadow-xl hover:drop-shadow-2xl hover:scale-90 font-bold">Dashboard</li>
                <li class="w-11/12 bg-sky-600 rounded-xl px-5 py-3 shadow-xl hover:drop-shadow-2xl hover:scale-90 font-bold">Laatste Nieuws</li>
                <li class="w-11/12 bg-sky-600 rounded-xl px-5 py-3 shadow-xl hover:drop-shadow-2xl hover:scale-90 font-bold">Wijzigingen doorgeven</li>
                <li class="w-11/12 bg-sky-600 rounded-xl px-5 py-3 shadow-xl hover:drop-shadow-2xl hover:scale-90 font-bold">Veelgestelde vragen</li>
                <li class="w-11/12 bg-sky-600 rounded-xl px-5 py-3 shadow-xl hover:drop-shadow-2xl hover:scale-90 font-bold">Contact</li>

            </ul>
        </div>
    </div>
    
</template>
<script setup>
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const website = ref('')
const weburl = ref('')
const avatar_path = ref('')

loading.value = true
const user = useSupabaseUser()

let { data } = await supabase
  .from('profiles')
  .select(`username, website, avatar_url, weburl`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  website.value = data.website 
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
</script>