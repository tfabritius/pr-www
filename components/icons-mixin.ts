import { Component, Vue } from 'vue-property-decorator'
import {
  mdiAccount,
  mdiChartLine,
  mdiCurrencyUsd,
  mdiDelete,
  mdiDragVariant,
  mdiEarth,
  mdiEmail,
  mdiFilter,
  mdiFilterOutline,
  mdiForum,
  mdiHome,
  mdiLock,
  mdiLogoutVariant,
  mdiMagnify,
  mdiPencil,
  mdiPlus,
  mdiPoll,
  mdiSourceRepository,
} from '@mdi/js'

@Component
export class IconsMixin extends Vue {
  mdiAccount = mdiAccount
  mdiChartLine = mdiChartLine
  mdiCurrencyUsd = mdiCurrencyUsd
  mdiDelete = mdiDelete
  mdiDragVariant = mdiDragVariant
  mdiEarth = mdiEarth
  mdiEmail = mdiEmail
  mdiFilter = mdiFilter
  mdiFilterOutline = mdiFilterOutline
  mdiForum = mdiForum
  mdiHome = mdiHome
  mdiLock = mdiLock
  mdiLogoutVariant = mdiLogoutVariant
  mdiMagnify = mdiMagnify
  mdiPencil = mdiPencil
  mdiPlus = mdiPlus
  mdiPoll = mdiPoll
  mdiSourceRepository = mdiSourceRepository
}
