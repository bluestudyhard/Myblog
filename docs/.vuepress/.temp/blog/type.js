export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-5a9bcda4","v-551bb614","v-b238d67a","v-06198984","v-5ed8e27d","v-4fec7d1c","v-57d4b301","v-6a1c553d","v-27a94f3c","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-3600cfe1","v-f93c877c","v-04df8823","v-513cdeb4","v-54b77ade","v-4b185ec6","v-50af5219","v-3a280ff9","v-1015f1ce","v-4063465c","v-9d000fb0","v-486a3d5c","v-c8ed824e","v-48242312","v-799e7154","v-0512853b","v-3a20ebc3","v-386fb589","v-2446d3c0","v-41454134","v-104011e4","v-864d915e","v-5bab0b8e","v-22c6ea4b","v-332d90a2","v-3d9ce8ec","v-8b587d4e","v-400c92fe","v-1e95b163","v-5aa6403e","v-14865716","v-475ca693","v-9d957a02","v-0874484d"]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5a9bcda4","v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

