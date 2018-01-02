<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <h1>Sign-up Form</h1>
                    <hr>
                    <div class="form-group">
                      <label for="firstName">First Name</label>
                      <input type="text"
                              id="firstName"
                              class="form-control"
                              v-model="name.firstName">
                    </div>
                    <div class="form-group">
                      <label for="lastName">Last Name</label>
                      <input type="text"
                              id="lastName"
                              class="form-control"
                              v-model="name.lastName">
                    </div>
                    <div class="form-group">
                      <label for="mail">E-mail</label>
                      <input type="text"
                              id="mail"
                              class="form-control"
                              v-model="email">
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="text"
                              id="password"
                              class="form-control"
                              v-model="password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="storeData">
                        <input
                                type="radio"
                                id="store"
                                value="yes"
                                v-model="storeData"> Yes
                    </label>
                    <label for="doNotStoreData">
                        <input
                                type="radio"
                                id="doNotStore"
                                value="no"
                                v-model="storeData"> No
                    </label>
                </div>
            </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
            
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                  <!-- <app-fullname></app-fullname> -->
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ name.firstName + ' ' + name.lastName}}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Fullname from './Fullname.vue'
    export default {
      data() {
        return {
          name: {
            firstName: '',
            lastName: ''
          },
          email: '',
          password: '',
          storeData: 'yes',
          isSubmitted: false
        }
      },
      methods: {
        submitted() {
          this.isSubmitted = true
        }     
      },
      components: {
        appFullname: Fullname
      }
    }
</script>

<style>
</style>
