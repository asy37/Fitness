<template>

        <RouterLink class="text-sm underline flex text-blue-900" to="/">
            <svg fill="#233876" width="20px" height="20px" viewBox="0 0 24.00 24.00" id="left-arrow" xmlns="http://www.w3.org/2000/svg" class="icon line"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21,12H3M6,9,3,12l3,3" style="fill: none; stroke: #233876; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path></g></svg>
            Anasayfaya Dön
        </RouterLink>

    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="text-3xl mb-1 text-blue-900 font-mono">Giriş Yapınız</h1>
        <div class="h-1/2 w-full rounded-xl bg-blue-900 sm:w-1/2">
            <div class="flex flex-col justify-center items-center h-full">
                <div class="mb-5">
                    <input class="font-mono outline-none border-none pl-2 py-1 text-xs rounded-lg w-64 sm:w-72" placeholder="Kullanıcı Adı" type="text">
                    <svg width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#233876"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#233876" stroke-width="2"></path> <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="#233876" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                </div>
                <div class="mb-5">
                    <input class="font-mono outline-none border-none pl-2 py-1 text-xs rounded-lg w-64 sm:w-72 " placeholder="Şifre" type="password">
                </div>
                    <button class="mb-5 hover:bg-blue-100 border-none bg-white text-blue-900 p-1 text-sm rounded-lg">Giriş Yap</button>

                    <div class="text-white">
                        <span class="mr-1">Henüz üye değil misiniz?</span>
                        <RouterLink class="underline" to="/register">Kayıt ol!</RouterLink>
                    </div>
            </div>
        </div>
    </div>

</template>