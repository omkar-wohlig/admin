<template>
  <div v-if="show" class="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div @click.self="close_modal()" class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div class="modal-content py-4 text-left px-6">
        <div class="flex justify-end items-center pb-3">
          <button @click="close_modal()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"
              />
            </svg>
          </button>
        </div>
        <div class="flex justify-center items-center pb-3">
          <p class="text-2xl font-bold text-center">Add New Job</p>
        </div>
        <form class="mt-6">
          <!-- <p>Canfirm the deletion of this item</p> -->
          <div>
            <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Job-Name</label>
            <input
              type="text"
              v-model="firstname"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-500
                dark:focus:border-blue-500
                focus:outline-none focus:ring
              "
            />
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Description</label>
            </div>
            <input
              type="text"
              v-model="lastname"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-500
                dark:focus:border-blue-500
                focus:outline-none focus:ring
              "
            />
          </div>
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Status</label>
            </div>
            <input
              type="text"
              v-model="residence"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-500
                dark:focus:border-blue-500
                focus:outline-none focus:ring
              "
            />
          </div>

          <!-- <div class="mt-4">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Status</label>
            </div>
            <input
              type="text"
              v-model="residence"
              class="
                block
                w-full
                px-4
                py-2
                mt-2
                text-gray-700
                bg-white
                border border-gray-300
                rounded-md
                dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                focus:border-blue-500
                dark:focus:border-blue-500
                focus:outline-none focus:ring
              "
            />
          </div> -->

          <!--<div class="mt-4">
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Gender</label>
            </div>
            <select
              id="gender"
              v-model="gender"
              autocomplete="gender"
              class="
                mt-1
                block
                w-full
                py-2
                px-3
                border border-gray-300
                bg-white
                rounded-md
                shadow-sm
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                sm:text-sm
              "
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div> -->

          <div class="mt-6">
            <button
              type="submit"
              class="
                flex
                items-center
                justify-center
                w-full
                px-6
                py-2
                text-sm
                font-medium
                text-white
                transition-colors
                duration-200
                transform
                bg-blue-500
                rounded-md
                hover:bg-blue-400
                focus:bg-blue-400 focus:outline-none
              "
            >
              <span class="m-2 text-white" @click="close_modal()">Add new Student</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StudentsRegistration',
  props: {
    show: Boolean,
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      gender: '',
      residence: '',
    }
  },
  methods: {
    close_modal() {
      this.$emit('close')
    },
  },
}
</script>