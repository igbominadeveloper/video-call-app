<script setup lang="ts">
definePageMeta({
  name: 'My Recordings',
});

const title = 'My Recordings';
useHead({
  title,
});

const recordings: Recording[] = [
  {
    duration: 360,
    title: 'Mastering JavaScript Arrays',
    subTitle: 'Learn essential array methods and techniques',
    videoUrl: 'https://example.com/tutorials/javascript-arrays',
    thumbnail: 'https://via.placeholder.com/120x65/gray?text=JavaScript+Arrays',
    views: 12500,
    size: 2540000,
    lastModified: '2024-02-05T10:30:00Z',
  },
  {
    duration: 1800,
    title: 'Building Responsive Websites with CSS Grid',
    subTitle: 'Create modern layouts that adapt to any screen size',
    videoUrl: 'https://example.com/tutorials/css-grid',
    thumbnail: 'https://via.placeholder.com/120x65/gray?text=CSS+Grid',
    views: 8720,
    size: 3120000,
    lastModified: '2024-02-02T15:45:00Z',
  },
  {
    duration: 900,
    title: "Python for Data Analysis: Beginner's Guide",
    subTitle:
      'Learn Python basics and essential libraries for data manipulation',
    videoUrl: 'https://example.com/tutorials/python-data-analysis',
    thumbnail:
      'https://via.placeholder.com/120x65/gray?text=Python+Data+Analysis',
    views: 5400,
    size: 2050000,
    lastModified: '2024-01-28T09:15:00Z',
  },
  {
    duration: 420,
    title: 'Creating Engaging React Animations',
    subTitle: 'Add life to your React applications with smooth animations',
    videoUrl: 'https://example.com/tutorials/react-animations',
    thumbnail: 'https://via.placeholder.com/120x65/gray?text=React+Animations',
    views: 3950,
    size: 1870000,
    lastModified: '2024-02-03T12:00:00Z',
  },
  {
    duration: 2400,
    title: 'Full-Stack Web Development with Node.js and Express',
    subTitle: 'Build real-world web applications from scratch',
    videoUrl: 'https://example.com/tutorials/node-express',
    thumbnail:
      'https://via.placeholder.com/120x65/gray?text=Node.js+%26+Express',
    views: 6215,
    size: 3580000,
    lastModified: '2024-01-31T16:30:00Z',
  },
  {
    duration: 1200,
    title: 'Introduction to Machine Learning with TensorFlow',
    subTitle: 'Explore the basics of machine learning and neural networks',
    videoUrl: 'https://example.com/tutorials/tensorflow',
    thumbnail: 'https://via.placeholder.com/120x65/gray?text=TensorFlow',
    views: 4875,
    size: 2950000,
    lastModified: '2024-02-04T08:45:00Z',
  },
  {
    duration: 750,
    title: 'Designing User-Friendly UIs with Figma',
    subTitle: "Create effective user interfaces using Figma's powerful tools",
    videoUrl: 'https://example.com/tutorials/figma',
    thumbnail: 'https://via.placeholder.com/120x65/gray?text=Figma',
    views: 2500,
    size: 1540000,
    lastModified: '2024-02-01T13:15:00Z',
  },
];

const showNewRequestModal = ref(false);

const goLive = () => {
  useRouter().push('/recordings/live');
};
</script>

<template>
  <div class="flex items-center justify-between">
    <section class="flex gap-4 items-center">
      <pagetitle :title="title" />
      <p class="text-darkgray text-[24px]">{{ recordings.length }}</p>
    </section>

    <section class="flex items-center gap-3">
      <video-filters />
      <video-buttons
        @new-request="showNewRequestModal = true"
        @go-live="goLive"
      />
    </section>
  </div>

  <div class="mt-11 mb-32">
    <!-- empty video call -->
    <video-empty v-if="!recordings.length" />

    <!-- video list -->
    <video-list v-else :recordings="recordings" />
  </div>

  <client-only>
    <video-new-recording
      :open="showNewRequestModal"
      @close="showNewRequestModal = false"
    />
  </client-only>
</template>
