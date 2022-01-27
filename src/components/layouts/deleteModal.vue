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
        <form>
          <!-- <p>Confirm the deletion of this item</p> -->
          <div>
            <div class="container">
              <h1>Delete Job</h1>
              <p>Are you sure you want to delete this job?</p>

              <div class="clearfix">
                <button type="button" class="cancelbtn but">Cancel</button>
                <button type="button" class="deletebtn but">Delete</button>
              </div>
            </div>
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

<style scoped>
/* button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
} */
.but {
  color: rgb(255, 255, 255);
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.but:hover {
  opacity: 1;
}

.cancelbtn,
.deletebtn {
  float: left;
  width: 50%;
}

/* Add a color to the cancel button */
.cancelbtn {
  background-color: #ccc;
  color: black;
}

/* Add a color to the delete button */
.deletebtn {
  background-color: #f44336;
}

/* Add padding and center-align text to the container */
.container {
  padding: 0 16px;
  text-align: center;
}

.clearfix::after {
  content: '';
  clear: both;
  display: table;
}

/* Change styles for cancel button and delete button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn,
  .deletebtn {
    width: 100%;
  }
}
</style>
