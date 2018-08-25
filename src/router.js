import VueRouter from 'vue-router';
import Albums from './components/Albums.vue';
import AlbumDetail from './components/AlbumDetail.vue';
import Thumbnail from './components/Thumbnail.vue';
import ListViewer from './components/ListViewer.vue';
import GalleryViewer from './components/GalleryViewer.vue';
import NewImage from './components/NewImage.vue';
import AddAlbum from './components/AddAlbum.vue';

export default new VueRouter({
  routes: [
    { path: '/albums', component: Albums,
      children: [
        { path: 'new', component: AddAlbum },
      ] },
    { 
      path: '/albums/:key',
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: Thumbnail },
        { path: 'list', component: ListViewer },
        { path: 'gallery', component: GalleryViewer },
        { path: 'new', component: NewImage },
        { path: '', redirect: 'thumbnail' }
      ]
    }
    
  ]
});