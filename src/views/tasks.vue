<template >
  <v-card>
    <v-card-title>Create Task</v-card-title>
    <v-form>
    <v-container>
          <v-text-field
            v-model="first"
            label="Task"
            filled
            clearable

          ></v-text-field>
          <v-textarea
          v-model="second"
          clearable
          clear-icon="mdi-close-circle"
          label="Description"
          value="This is clearable text."
          ></v-textarea>
          <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <v-select
      :items="items"
      v-model="item"
      label="State"
      ></v-select>
        </v-col>
        <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Due Date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
    </v-col>
      </v-row>
    </v-container>

          <v-btn  @click="handleClick">Submit</v-btn>
    </v-container>
  </v-form>
  </v-card>
</template>
<script>
import Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  data: () => ({
      first: '',
      second: '',
      items: ['Not Started', 'In Progress', 'Need for disscussion', 'OnHold','Completed'],
    }),
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
methods: {
  handleClick: function() {
  console.log(this.items,this.date)
  Vue.axios.post('http://localhost:8000/add/',
  {
    Name: this.first,
    desc:  this.second,
    state: this.item,
    date: this.date,
  })

  .then(function (response) {
    console.log(response);
    this.$router.push({path: '/Home'})

  })
  .catch(function (error) {
    console.log(error);
  });
   }
}
}
</script>
