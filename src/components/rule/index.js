import Rule from './Rule'

Rule.install = Vue => {
  Vue.component(Rule.name, Rule)
}

export default Rule
