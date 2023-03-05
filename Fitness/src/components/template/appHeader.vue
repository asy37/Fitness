<template>
    <div class="grid grid-cols-3 gap-4 p-2 bg-blue-900 text-white">
        <div class="flex justify-around">
            <RouterLink class="p-2 rounded-md  hover:bg-blue-800" to="/">Anasayfa</RouterLink>
            <RouterLink class="p-2 rounded-md  hover:bg-blue-800" to="/aboutus">Hakkımızda</RouterLink>
            <RouterLink class="p-2 rounded-md  hover:bg-blue-800" to="/ourmission">Misyonumuz</RouterLink>
        </div>

        <div class="flex items-center justify-center">


            <input class="outline-none text-blue-900 p-1 pl-2 focus:border-2 focus:border-blue-700 text-sm rounded-lg w-2/3" type="text">

        </div>
        
        <div class="flex justify-center">
            <RouterLink class="mr-4 p-2 rounded-md  hover:bg-blue-800" to="/login">Giriş Yap</RouterLink>
            <RouterLink class="p-2 rounded-md  hover:bg-blue-800" to="/register">Kayıt Ol</RouterLink>
        </div>
    
    </div>
</template>
<style>
.activelink  {
  background-color: #1d4ed8 !important;  
}
</style>