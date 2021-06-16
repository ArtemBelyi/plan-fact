<template>
  <div>
    <h1 class="headline pb-5">Выставление планов</h1>
    <v-container>
      <!-- date.pickers -->
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex class="xs12 md3">
            <v-menu
              ref="menu"
              v-model="menuPickers"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                type="month"
                no-title
                scrollable
              >
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menuPickers = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          </v-flex>
        </v-layout>
      </v-card>
      <!-- select.emplayees -->
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12 md6>
              <v-select
                v-model="selectedEmplayees"
                :items="emplayees"
                label="Выбрать сотрудников"
                prepend-icon="mdi-account-multiple-plus"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item
                    ripple
                    @click="toggleEmplayees"
                  >
                    <v-list-item-action>
                      <v-icon :color="selectedEmplayees.length > 0 ? 'indigo darken-4' : ''">
                        {{ iconEmplayee }}
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        Выбрать всех
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
                </template>
              </v-select>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Plans",
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menuPickers: false,
      emplayees: ['Артем Белый', 'Денис Новичков', 'Денис Хренов', 'Алена Попова', 'Роман Зимин', 'Роман Кычин', 'Сергей Егай', 'Сергей Хомяков', 'Михайл Твердохлеб', 'Филипп Рацков', 'Артем Соколов', 'Александр Артемов', 'Екатерина Ким', 'Владимир Зудилин', 'Дарья Белая'],
      selectedEmplayees: [],
    }
  },
  components: {},
  methods: {
    toggleEmplayees () {
      this.$nextTick(() => {
        if (this.likesAllEmplayee) {
          this.selectedEmplayees = []
        } else {
          this.selectedEmplayees = this.emplayees.slice()
        }
      })
    },
  },
  computed: {
    likesAllEmplayee () {
      return this.selectedEmplayees.length === this.emplayees.length
    },
    likesSomeEmplayee () {
      return this.selectedEmplayees.length > 0 && !this.likesAllEmplayee
    },
    iconEmplayee () {
      if (this.likesAllEmplayee) return 'mdi-close-box'
      if (this.likesSomeEmplayee) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    }
  }
};
</script>