<template>
    <div class="container">
        <form class="mt-3">
            <div class="form-group">
                <label for="email"> Email </label>
                <input type="email" id="email"
                       class="form-control"
                       :class="{' is-invalid': $v.email.$error}"
                       @blur="$v.email.$touch()"
                       v-model="email ">
                <div class="invalid-feedback" v-if="!$v.email.required">
                    Email field is required
                </div>
                <div class="invalid-feedback" v-if="!$v.email.email">
                    Email is not correct
                </div>
            </div>
            <div class="form-group">
                <label for="password"> Password </label>
                <input type="password" id="password"
                       class="form-control"
                       :class="{' is-invalid': $v.password.$error}"
                       @blur="$v.password.$touch()"
                       v-model="password ">
                <div class="invalid-feedback" v-if="!$v.password.required">
                    Password field is required
                </div>
                <div class="invalid-feedback" v-if="!$v.password.minLength">
                    Min {{$v.password.$params.minLength.min}}. Now is {{password.length}}
                </div>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password </label>
                <input type="password" id="confirmPassword"
                       class="form-control"
                       :class="{' is-invalid': $v.confirmPassword.$error}"
                       @blur="$v.confirmPassword.$touch()"
                       v-model="confirmPassword ">
                <div class="invalid-feedback" v-if="!$v.confirmPassword.required">
                    Confirm Password field is required
                </div>
                <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
                    Password does not match
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required,
                sameAs: sameAs('password')
            }
        },

    }
</script>