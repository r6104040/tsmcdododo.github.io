import dayjs from 'dayjs'

import 'dayjs/locale/zh-TW'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.locale('zh-TW')

dayjs.tz.setDefault('Asia/Taipei')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
