<script lang="ts">
  import { defineComponent } from 'vue';
  import { StatusCode } from '@constants';

  export default defineComponent({
    name: 'ServerErrorPage',
    data: function () {
      return {
        title: '',
        status: StatusCode.NotFound,
        description: '',
      };
    },
    mounted() {
      this.status = Number(this.$route.params.statusCode || 0);
      switch (this.status) {
        case StatusCode.BadRequest:
          this.status = StatusCode.Error;
          this.title = 'Bad request!';
          this.description =
            'System receives bad input from you, please try again!';
          break;

        case StatusCode.Forbidden:
          this.status = StatusCode.Forbidden;
          this.title = 'Forbidden!';
          this.description = `Sorry, you don't have permission for this action, please try again!`;
          break;

        case StatusCode.ServerError:
          this.status = StatusCode.ServerError;
          this.title = 'Server Error!';
          this.description = `Sorry, System has some occur error, please try again!`;
          break;

        default:
          this.status = StatusCode.NotFound;
          this.title = 'Not Found!';
          this.description = `Sorry, url not exist inside webpage, please try again!`;
      }
    },
  });
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <n-result :status="`${status}`" :title="title" :description="description">
      <template #footer>
        <n-button @click="$router.push('/')">Back to Home</n-button>
      </template>
    </n-result>
  </div>
</template>
