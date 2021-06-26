<template>
  <div>
    <h1 class="headline pb-5">Построение отчета</h1>
    <v-container>
      <!-- date.pickers -->
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-menu
              ref="menu1"
              v-model="menuStart"
              :close-on-content-click="false"
              :return-value.sync="dateStart"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateStart"
                  label="Начало периода"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dateStart"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menuStart = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu1.save(dateStart)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex xs12 md3>
            <v-menu
              ref="menu2"
              v-model="menuFinish"
              :close-on-content-click="false"
              :return-value.sync="dateFinish"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateFinish"
                  label="Конец периода"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="dateFinish"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menuFinish = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu2.save(dateFinish)"
                >
                  OK
                </v-btn>
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
      <!-- select.plans -->
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12 md6>
              <v-select
                v-model="selectedPlans"
                :items="plans"
                label="Выбрать показатели"
                prepend-icon="mdi-chart-bar"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item
                    ripple
                    @click="togglePlans"
                  >
                    <v-list-item-action>
                      <v-icon :color="selectedPlans.length > 0 ? 'indigo darken-4' : ''">
                        {{ iconPlan }}
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
      <!-- button -->
      <v-card flat class="pa-5">
        <v-layout row wrap>
          <v-flex xs12 md3>
            <v-btn
              depressed
              color="primary"
              @click.stop="isTableShow"
            >
              Сформировать отчет
            </v-btn>
            <v-snackbar
              v-model="snackbarEmplayee"
              :multi-line="multiLine"
            >
              {{ textSnackbarEmplayee }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbarEmplayee = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
             <v-snackbar
              v-model="snackbarPlans"
              :multi-line="multiLine"
            >
              {{ textSnackbarPlans }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  text
                  v-bind="attrs"
                  @click="snackbarPlans = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-flex>
        </v-layout>
      </v-card>
      <!-- tables -->
      <v-card flat class="pa-5"
       v-show="tableShow" 
       v-for="(item, index) in selectedPlans" 
       :key="index"
       >
        <v-layout row wrap>
          <v-flex xs12>
            <TablesVue :dataPlans="item" :dataEmplayees="selectedEmplayees"/>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import TablesVue from '../components/Tables.vue';
export default {
  name: "Home",
  data() {
    return {
      dateStart: new Date().toISOString().substr(0, 10),
      menuStart: false,
      dateFinish: new Date().toISOString().substr(0, 10),
      menuFinish: false,
      //emplayees: ['Артем Белый', 'Денис Новичков', 'Денис Хренов', 'Алена Попова', 'Роман Зимин', 'Роман Кычин', 'Сергей Егай', 'Сергей Хомяков', 'Михайл Твердохлеб', 'Филипп Рацков', 'Артем Соколов', 'Александр Артемов', 'Екатерина Ким', 'Владимир Зудилин', 'Дарья Белая'],
      plans: ['Исходящие звонки', 'Отправлено КП', 'Проведено встреч', 'Заключено договоров', 'Закрыто сделок', 'Сумма сделок'],
      selectedEmplayees: [],
      selectedPlans: [],
      tableShow: false,
      multiLine: true,
      snackbarEmplayee: false,
      snackbarPlans: false,
      textSnackbarEmplayee: 'Не выбраны сотрудники',
      textSnackbarPlans: 'Не выбраны показатели'
    }
  },
  components: { TablesVue },
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
    togglePlans () {
      this.$nextTick(() => {
        if (this.likesAllPlan) {
          this.selectedPlans = []
        } else {
          this.selectedPlans = this.plans.slice()
        }
      })
    },
    isTableShow () {
      if (this.selectedEmplayees.length == 0) {
        return this.snackbarEmplayee = true
      } else if (this.selectedPlans.length == 0) {
        return this.snackbarPlans = true
      } else {
        return this.tableShow = true
      }
    }
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
    },
    likesAllPlan () {
      return this.selectedPlans.length === this.plans.length
    },
    likesSomePlan () {
      return this.selectedPlans.length > 0 && !this.likesAllPlan
    },
    iconPlan () {
      if (this.likesAllPlan) return 'mdi-close-box'
      if (this.likesSomePlan) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    },
    emplayees () {
      let arr = this.$store.getters.CHANGE_STAFF; 
      return [...new Set(arr.map(item => item.name))];
    }
  }
};
</script>
