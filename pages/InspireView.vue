<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/static/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-select :options="options" label="title">
        <template slot="option" slot-scope="option">
            <span class="fa" :class="option.icon"></span>
            {{ option.title }}
        </template>
      </v-select>
      <br>
      <v-select
        label="email"
        @input="setActivePerson"
        :options="$store.state.people"
        :value="$store.state.activePerson"
      ></v-select>
      <pre>store.$state.activePerson: <br> {{ $store.state.activePerson || 'null' }}</pre>
    </v-flex>
  </v-layout>
</template>

<script>
  export default{
    data(){
      return {
        options: [
            {
              title: 'Read the Docs',
              icon: 'fa-book',
              url: 'https://codeclimate.com/github/sagalbot/vue-select'
            },
            {
              title: 'View on GitHub',
              icon: 'fa-github',
              url: 'https://codeclimate.com/github/sagalbot/vue-select'
            },
            {
              title: 'View on NPM',
              icon: 'fa-database',
              url: 'https://codeclimate.com/github/sagalbot/vue-select'
            },
            {
              title: 'View Codepen Examples',
              icon: 'fa-pencil',
              url: 'https://codeclimate.com/github/sagalbot/vue-select'
            }
        ]
      }
    },
    methods: {
      setActivePerson(val) {
        this.$store.commit('setActivePerson', val)
      }
    }
  }
</script>
