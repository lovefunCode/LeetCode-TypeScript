<!-- web-vitals monitor metrics in real-time within your app-->
web-vitals key metrics: 
1. FCP(First Contentful Paint) < 1.8 sec : indicates when the user starts to preceive the page as loading
    1. Use async or defer for JS/TS file
    2. Compress css, images, and JS
    3. use bundlers(webpack, vite) to code spliting and es6 import technique to dynamic import 
    4. use <link rel="preload"> for critical resources like fonts, css or js
    5. use CDN
    6. enable SSR(server-side rendering)
2. LCP(Largest Contentful Paint) < 2.5 sec : Represents the main content load time
    1. 
3. CLS(Cumulative Layout Shift) < 0.1 sec : Ensure a smooth user experience by reducing layout shift
    1. Specify dimensions for media: width + height
    2. use placeholders for dynamic content
    3. use CSS animation instead of JS/TS
4. TTFB(Time To First Byte)  < 0.8 sec
5. FID(First Input Delay) < 100 milliseconds
    1. remove unused JS/TS (tree-shaking or code splitting)
    2. Debouce or throttle event handlers to reduce their frequency
