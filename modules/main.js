import { createApp } from 'vue';
import GalleryImage from '../components/GalleryImage.vue';

(async function () {
  const response = await fetch('/gallery_images.json');
  const images = await response.json();

  images.reverse();

  const app = createApp({
    data() {
      return {
        images
      };
    },
    components: {
      GalleryImage
    }
  });

  app.mount('#app');
})();
