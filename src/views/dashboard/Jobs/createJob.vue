<template>
  <div class="card">
    <div id="app">
      <div class="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
        <label>Name:</label>
        <input
          class="form-control"
          type="text"
          ref="first_name"
          :disabled="!isEditing"
          :class="{ view: !isEditing }"
          :value="user.firstName"
        />
      </div>
      <div class="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
        <label>Username:</label>
        <input
          class="form-control"
          type="text"
          ref="username"
          :value="user.username"
          :disabled="!isEditing"
          :class="{ view: !isEditing }"
        />
      </div>
      <div class="d-flex flex-row mt-2 mb-2 align-items-center gap-2">
        <label>Email:</label>
        <input
          class="form-control"
          type="text"
          ref="email"
          :value="user.email"
          :disabled="!isEditing"
          :class="{ view: !isEditing }"
        />
      </div>
      <div class="d-flex flex-row mt-2 align-items-center gap-2">
        <label>Password:</label>
        <input
          class="form-control"
          type="password"
          ref="password"
          :value="user.password"
          :disabled="!isEditing"
          :class="{ view: !isEditing }"
        />
      </div>
      <div class="mt-3 mb-3">
        <button class="btn btn-sm btn-success" @click="isEditing = !isEditing" v-if="!isEditing">Edit</button>
        <button class="btn btn-sm btn-success me-1" @click="save" v-else-if="isEditing">Save</button>
        <button class="btn btn-sm btn-danger" v-if="isEditing" @click="isEditing = false">Cancel</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: {
    isEditing: false,
    user: {
      firstName: 'John Doe',
      username: 'johndoe121',
      email: 'demo@gmail.com',
      password: 'password',
    },
  },
  methods: {
    save() {
      this.user.firstName = this.$refs['first_name'].value
      this.user.username = this.$refs['username'].value
      this.user.email = this.$refs['email'].value
      this.user.password = this.$refs['password'].value
      this.isEditing = !this.isEditing
    },
  },
}
</script>

<style scoped>
.view {
  border-color: transparent;
  background-color: initial !important;
  color: initial;
}

.form-control:focus {
  outline: none;
  box-shadow: none;
}

.mt-5 {
  margin-top: 10px;
}

.mb-5 {
  margin-bottom: 20px;
}

body {
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 350px;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  border: none;
}

.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>



