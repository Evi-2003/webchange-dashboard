<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({ email: email.value });
    if (error) throw error;
    alert("Let op! Je ontvangt een inlog-linkje per e-mail. Mocht je geen linkje hebben ontvangen neem contact op met info@webchange.nl");
  } catch (error) {
    alert(error.error_description || error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="w-full h-[100vh] bg-sky-600 flex items-center ">
    <div class="flex w-full items-center flex-col space-y-0">
      <div class="bedrijfsnaamHolder w-full sm:w-auto flex flex-row items-middle justify-center h-fit">
        <nuxtLink to="/" class="text-5xl sm:text-8xl text-white h-full p-1 font-extrabold">webchange.</nuxtLink>
      </div>
      <h2 class="text-4xl sm:text-6xl text-white font-bold text-center w-full pb-5">
        Dashboard
      </h2>

      <form class="row flex-center flex  items-center text-center justify-center bg-sky-800 w-full sm:w-fit px-20 py-5 rounded-xl space-y-10 drop-shadow-xl hover:shadow-2xl" @submit.prevent="handleLogin">
        <div>
          <div class="flex flex-col text-left">
            <h3 class="text-4xl text-white font-bold">
              Inloggen per e-mail
            </h3>
            <h4 class="text-3xl text-white font-base">
              Zonder wachtwoord
            </h4>
        </div>
          <div class="flex flex-col text-left space-y-1 mt-1">
            <label for="email" class="text-white font-semibold text-lg">E-mail adres</label>
            <input
              class="inputField p-3 rounded-lg text-black w-80 sm:w-[30vw]"
              type="email"
              name="email"
              placeholder="E-mail"
              aria-label="E-mail"
              v-model="email"
            />
          </div>
          <div class="flex items-center text-left mt-4">
            <input
              type="submit"
              class="button block bg-white p-3 rounded-lg font-semibold text-xl shadow-2xl hover:scale-90 hover:shadow-2xl  hover:bg-sky-500 hover:text-white"
              :value="loading ? 'Je hebt een inlog-linkje ontvangen in de mail....' : 'Inloggen met een verificatie-email'"
              :disabled="loading"
            />
          </div>
          <h5 class="text-base text-white font-base text-left mt-2">
              *Deze dashboard is enkel voor klanten
          </h5>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.bedrijfsnaam{
  margin: 0;
  color: transparent;
  background-image: url("/logo_bg.webp");
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip:text;
  animation: animate 35s ease-in-out infinite;
  text-align: center;
}
@keyframes animate {
    0%, 100% {
      background-position: left top;
    }
    25%{
      background-position: right bottom;
     }
    50% {
      background-position: left bottom;
    }
    75% {
      background-position: right top;
    }
}   
</style>