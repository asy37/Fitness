<template>
    <div class="grid grid-cols-3 gap-4 p-4 bg-blue-900 text-white">
        <div class="flex justify-around">
            <RouterLink to="/">Anasayfa</RouterLink>
            <RouterLink to="/aboutus">Hakkımızda</RouterLink>
            <RouterLink to="/ourmission">Misyonumuz</RouterLink>
        </div>

        <div class="flex items-center justify-center">
            <input class="outline-none text-blue-900 pl-2 text-sm rounded-lg w-2/3" type="text">
        </div>
        
        <div class="flex justify-center">
            <RouterLink class="mr-4" to="/login">Giriş Yap</RouterLink>
            <RouterLink to="/register">Kayıt Ol</RouterLink>
        </div>
    
    </div>
</template>