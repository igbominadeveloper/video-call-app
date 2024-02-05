<script setup lang="ts">
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
</script>
<template>
  <!-- table heading -->
  <video-table-row class="text-darkblue text-lg mb-9">
    <h1>Recordings</h1>
    <h1>Title</h1>
    <h1>Views</h1>
    <h1>Size</h1>
    <h1 class="col-span-2">Last Modified</h1>
  </video-table-row>

  <!-- table body -->
  <div class="divide-y-[32px] divide-[transparent]">
    <video-table-row
      class="text-darkblue text-sm"
      v-for="recording in recordings"
      :key="recording.title"
    >
      <video-recording :recording="recording" />
    </video-table-row>
  </div>
</template>
