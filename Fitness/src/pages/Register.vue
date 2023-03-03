<template>
    <RouterLink class="text-sm flex bg-blue-900 text-white w-36 rounded-lg p-2 mt-2 ml-2 hover:bg-blue-400" to="/">
            <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" id="left-arrow" xmlns="http://www.w3.org/2000/svg" class="icon line" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21,12H3M6,9,3,12l3,3" style="fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path></g></svg>
            Anasayfaya Dön
    </RouterLink>
    <div class="flex flex-col justify-center items-center h-screen">
        <h1 class="text-3xl mb-1 text-blue-900 font-mono">Kayıt Ol</h1>
        <div class="h-3/4 w-full rounded-xl bg-blue-900 sm:w-1/2">
            <div class="flex flex-col justify-center items-center h-full">
                <div class="mb-5 relative">
                    <svg class="mt-3 ml-2 absolute" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#233876"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#233876" stroke-width="2"></path> <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="#233876" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                    <input  class="font-mono outline-none border-none pl-7 mt-2 py-1 text-xs rounded-lg w-64 sm:w-72" type="text" placeholder="Ad Soyad" required="true">
                </div>
                <div class="mb-5 relative">
                    <svg class="mt-3 ml-2 absolute" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#233876"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#233876" stroke-width="2"></path> <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="#233876" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                    <input class="font-mono outline-none border-none pl-7 mt-2 py-1 text-xs rounded-lg w-64 sm:w-72" type="number" placeholder="Yaşınız" min="18" required="true">
                </div>
                <div class="mb-5 relative">
                    <svg class="mt-3 ml-2 absolute" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#233876"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="#233876" stroke-width="2"></path> <path d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21" stroke="#233876" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                    <input class="font-mono outline-none border-none pl-7 mt-2 py-1 text-xs rounded-lg w-64 sm:w-72" type="text" placeholder="Kullanıcı Adı" required="true">
                </div>
                <div class="mb-5 relative">
                    <svg class="mt-3 ml-2 absolute" width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#233876"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#233876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#233876" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                    <input class="font-mono outline-none border-none pl-7 mt-2 py-1 text-xs rounded-lg w-64 sm:w-72" type="email" placeholder="Email" required="true">
                </div>
                <div class="mb-5 relative">
                    <svg class="mt-3 ml-2 absolute" width="15px" height="15px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#233876"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Layer_7" data-name="Layer 7"> <g> <path d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM37,42H9V22H37Z"></path> <circle cx="15" cy="32" r="3"></circle> <circle cx="23" cy="32" r="3"></circle> <circle cx="31" cy="32" r="3"></circle> </g> </g> </g> </g></svg>
                    <input class="font-mono outline-none border-none pl-7 mt-2 py-1 text-xs rounded-lg w-64 sm:w-72" type="password" placeholder="Şifre" required="true">
                </div>
                <button class="mb-5 hover:bg-blue-400 hover:text-white border-none bg-white text-blue-900 p-1 text-sm rounded-lg">Kayıt Ol</button>
                <div class="text-white">
                        <span class="mr-1">Üye misiniz?</span>
                        <RouterLink class="font-semibold hover:font-bold" to="/login">Giriş Yap!</RouterLink>
                    </div>
            </div>
        </div>
    </div>
</template>