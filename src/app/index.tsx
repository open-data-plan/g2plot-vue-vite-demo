import { defineComponent } from 'vue'
import AreaChartDemo from './area-chart-demo.vue'
import CustomThemeDemo from './custom-theme-demo'
import LineChartDemo from './line-chart-demo'
import PieChartDemo from './pie-chart-demo'

export default defineComponent({
  name: 'App',
  components: {
    LineChartDemo,
    AreaChartDemo,
    PieChartDemo,
    CustomThemeDemo
  },
  render() {
    return (
      <>
        <LineChartDemo />
        <PieChartDemo />
        <AreaChartDemo />
        <CustomThemeDemo />
      </>
    )
  }
})
