<script lang="jsx">
import { defineComponent } from "vue";

export const Cross = defineComponent({
  render() {
    return (
      <svg fill="currentColor">
        <path d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
      </svg>
    );
  },
});

export default Cross;
</script>
