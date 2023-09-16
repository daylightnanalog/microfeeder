  const swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      mousewheel: {},
      effect: 'cube',
      keyboard: {
          enabled: true,
          onlyInViewport: false
      }
  });
  const Home = { template: '<router-link to="/home">Home</router-link>' }
const Bio = { template: '<router-link to="/bio">Bio</router-link>' }
const Blog = { template: '<router-link to="/blog">Blog</router-link>' }
const Menu = { template: '<router-link to="/menu">Menu</router-link>' }
const Links = { template: '<router-link to="/linka">Links</router-link>' }
const Blogs = { template: '<router-link to="/bloga">Blogs</router-link>' }
const routes = [
  { path: '/', component: Home },
  { path: '/bio', component: Bio },
  { path: '/blog', component: Blog },
  { path: '/menu', component: Menu },
  { path: '/links', component: Links },
  { path: '/blogs', component: Blogs },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, 
})
  const app = Vue.createApp({
      el: '#app',
      data() {
          const sendFormData = () => {
              var form = document.getElementById("myForm");
              var formData = new FormData(form);
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "https://script.google.com/macros/s/AKfycbwkurjluWM0bqKLvKZno2Y46RN1OVFFQQOW9XypqKSRk6ZQfoQ2vgYyq60m6HG5Chw/exec");
              xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin');


              // url encode form data for sending as post data
              let data = Object.fromEntries(formData.entries());
              var encoded = Object.keys(data).map(function(k) {
                  return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
              }).join('&');

              xhr.send(encoded);
          }

          return {
              sendEmail: sendFormData,
              bg: 'bio'
          }
      }
  })
  app.use(router)
  app.mount('#app')
  TweenMax.from(".logo", 1.6, {
      delay: .2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
  })

  TweenMax.from(".search", 1.6, {
      delay: .4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
  })

  TweenMax.from(".logo-icon", 1.6, {
      delay: 0,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".text-one", 2, {
      delay: 2.6,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
  }, 0.2)

  TweenMax.staggerFrom(".text-two", 1.5, {
      delay: 3.4,
      opacity: 0,
      y: -40,
      ease: Expo.easeInOut
  }, 0.2)
  TweenMax.staggerFrom(".text-two label", 1, {
      delay: 4,
      opacity: 0,

      ease: Expo.easeInOut
  }, 0.2)

  TweenMax.staggerFrom("h21", 2, {
      delay: 4,
      opacity: 0,
      x: -60,
      ease: Expo.easeInOut
  }, 0.2)

  TweenMax.staggerFrom(".text-three", 2, {
      delay: 4.7,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut
  }, 0.2)

  TweenMax.from("button", 2, {
      delay: 5.5,
      opacity: 0,
      y: -30,
      ease: Expo.easeInOut
  })

  TweenMax.from(".line", 2, {
      delay: 5,
      opacity: 0,
      x: -100,
      ease: Expo.easeInOut
  })

  TweenMax.from(".tag", 2, {
      delay: 5.3,
      opacity: 0,
      y: -30,
      ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".media bul lib", 2, {
      delay: 6,
      opacity: 0,
      y: -40,
      ease: Expo.easeInOut
  }, 0.2)

  TweenMax.staggerFrom(".left-right bul lib", 2, {
      delay: 6.4,
      opacity: 0,
      y: -40,
      ease: Expo.easeInOut
  }, 0.2)
