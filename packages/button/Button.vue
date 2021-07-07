<template>
  <button
    class="el-button"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    @click="handleClick"
  >
    <i v-if="loading" class="el-icon-loading" />
    <i v-if="icon && !loading" :class="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
<script>
// getCurrentInstance
import { computed, inject, toRefs, unref } from 'vue';

export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ['click'],
  setup(props, ctx) {
    const { disabled } = toRefs(props);
    const buttonSize = 'small'; // useButtonSize(size);
    const buttonDisabled = useButtonDisabled(disabled);

    const handleClick = (evt) => {
      ctx.emit('click', evt);
    };

    return {
      handleClick,
      buttonSize,
      buttonDisabled
    };
  }
};

// const useButtonSize = (size) => {
//   const elFormItem = inject('elFormItem', {});

//   const _elFormItemSize = computed(() => {
//     return unref(elFormItem.elFormItemSize);
//   });

//   const buttonSize = computed(() => {
//     return (
//       size.value ||
//       _elFormItemSize.value ||
//       (getCurrentInstance().proxy.$ELEMENT || {}).size
//     );
//   });

//   return buttonSize;
// };

const useButtonDisabled = (disabled) => {
  const elForm = inject('elForm', {});

  const buttonDisabled = computed(() => {
    return disabled.value || unref(elForm.disabled);
  });

  return buttonDisabled;
};
</script>
