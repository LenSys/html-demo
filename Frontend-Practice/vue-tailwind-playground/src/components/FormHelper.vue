<script setup>

</script>

<template>
    <div class="container mx-auto w-4/5 mt-12 border overflow-hidden">
        <form action="#" method="post">
            <div class="md:flex">
                <div class="relative hidden md:block md:w-1/2 overflow-hidden border border-solid border-gray-300">
                    <img class="absolute z-10 h-full object-cover object-bottom opacity-80" src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Workcation"/>
                    <div class="absolute z-10 bg-black inset-0 opacity-20"></div>
                    <div class="relative w-3/4 mx-auto text-center text-white">
                        <h1 class="pt-10 font-bold text-3xl">Register account</h1>
                        <span class="text-xl">Try for free • 10€/mo after</span>
                        <hr class="mt-4 border border-solid border-gray-200" />
                        <p class="mt-4">Register an account with Workcation and<br> get top offers per email!</p>
                    </div>
                </div>
                <div class="py-10 md:w-1/2 px-8 bg-white border border-solid border-gray-300">
                    <div class="theme-form-group">
                        <label for="first_name" class="theme-form-label">First name</label>
                        <input type="text" id="first_name" name="first_name" value="" class="theme-form-input" />
                    </div>
                    <div class="theme-form-group">
                        <label for="last_name" class="theme-form-label">Last name</label>
                        <input type="text" id="last_name" name="last_name" value="" class="theme-form-input" />
                    </div>
                    <div class="theme-form-group">
                        <label for="email" class="theme-form-label">Email *</label>
                        <input type="email" id="email" name="email" value="" class="theme-form-input" />
                    </div>
                    <div class="theme-form-group">
                        <label for="company_name" class="theme-form-label">Company name</label>
                        <input type="text" id="company_name" name="company_name" value="" class="theme-form-input" />
                    </div>
                    <div class="theme-form-group">
                        <label for="password" class="theme-form-label">Create a password *</label>
                        <input type="password" id="password" name="password" value="" class="theme-form-input" />
                    </div>
                    <div class="theme-form-group">
                        <label for="confirm_password" class="theme-form-label">Confirm password *</label>
                        <input type="confirm_password" id="confirm_password" name="confirm_password" value="" class="theme-form-input" />
                    </div>
                    <div class="mt-4">
                        <input type="checkbox" id="privacy_policy" />
                        <label for="privacy_policy" class="theme-form-label">
                            I have read and agree to the Privacy Policy *
                        </label>
                    </div>
                </div>
            </div>
            <div class="py-3 px-6 flex">
                <div class="md:w-1/2"></div>
                <div class="md:w-1/2 mt-2 ml-12">
                    <button type="submit" class="py-3 px-10 bg-green-700 text-white rounded">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>