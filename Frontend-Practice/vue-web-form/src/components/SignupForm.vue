<template>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">
        
        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="errorMessage">{{ passwordError }}</div>

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select>

        <label for="skills">Skills</label>
        <input type="text" id="skills" v-model="tempSkill" @keyup="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div>
            <input id="terms" type="checkbox" v-model="terms" required>
            <label for="terms">Accept terms and conditions</label>
        </div>

        <div class="submit">
            <button>Create an account</button>
        </div>

    </form>
    <p class="successMessage">{{ formSubmitMessage }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            terms: false,
            tempSkill: '',
            skills: [],
            passwordError: '',
            formSubmitMessage: ''
        }
    },
    methods: {
        addSkill(e) {
            if(e.key === ',') {
                const skill = this.tempSkill.replaceAll(',', '');
                if(skill) {
                    if(this.skills.indexOf(skill) === -1) {
                        this.skills.push(skill);
                    }
                }
                this.tempSkill = '';
            }
        },
        deleteSkill(skill) {
            if(skill) {
                if(this.skills.includes(skill)) {
                    this.skills = this.skills.filter((value) => value !== skill);
                }
            }
        },
        handleSubmit() {
            // validate password
            this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long';
            this.formSubmitMessage = '';

            if(!this.passwordError) {
                console.log('email:', this.email);
                console.log('password:', this.password);
                console.log('role:', this.role);
                console.log('skills', this.skills);
                console.log('terms accepted', this.terms);

                this.formSubmitMessage = 'Form submitted successfully!';
            }
        }
    }
}
</script>

<style>

</style>