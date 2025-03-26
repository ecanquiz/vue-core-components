import { defineAsyncComponent } from 'vue'

const Button = defineAsyncComponent(() => import('./components/Button.vue'))
const Checkbox = defineAsyncComponent(() => import('./components/Checkbox.vue'))
const ErrorMessage = defineAsyncComponent(() => import('./components/ErrorMessage.vue'))
const FlashMessage = defineAsyncComponent(() => import('./components/FlashMessage.vue'))
const InConstruction = defineAsyncComponent(() => import('./components/InConstruction.vue'))
const Input = defineAsyncComponent(() => import('./components/Input.vue'))
const LabelSpan = defineAsyncComponent(() => import('./components/LabelSpan.vue'))
const Link = defineAsyncComponent(() => import('./components/Link.vue'))
const LoadingButton = defineAsyncComponent(() => import('./components/LoadingButton.vue'))
const PageHeader = defineAsyncComponent(() => import('./components/PageHeader.vue'))
const PaginationA = defineAsyncComponent(() => import('./components/PaginationA.vue'))
const PaginationB = defineAsyncComponent(() => import('./components/PaginationB.vue'))
const PaginationC = defineAsyncComponent(() => import('./components/PaginationC.vue'))
const Pending = defineAsyncComponent(() => import('./components/Pending.vue'))
const Radio = defineAsyncComponent(() => import('./components/Radio.vue'))
const RadioGroup = defineAsyncComponent(() => import('./components/RadioGroup.vue'))
const SectionBorder = defineAsyncComponent(() => import('./components/SectionBorder.vue'))
const SectionInfo = defineAsyncComponent(() => import('./components/SectionInfo.vue'))
const Select = defineAsyncComponent(() => import('./components/Select.vue'))
const Textarea = defineAsyncComponent(() => import('./components/Textarea.vue'))

export default {
  Button,
  Checkbox,
  ErrorMessage,
  FlashMessage,
  InConstruction,
  Input,
  LabelSpan,
  Link,
  LoadingButton,
  PageHeader,
  PaginationA,
  PaginationB,
  PaginationC,
  Pending,
  Radio,
  RadioGroup,
  SectionBorder,
  SectionInfo,  
  Select,
  Textarea
};
