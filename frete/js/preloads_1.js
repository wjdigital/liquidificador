
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.92c6a5961f2d15563041.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/417.latest.pt-BR.2b7ef6493a2ab7acd4b8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/49.latest.pt-BR.e09a5108f509ef00751b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/180.latest.pt-BR.76349392f2a7bbeb2c64.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.187dbe65f68552cccbc1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/912.latest.pt-BR.41a63345ce3b8fab9650.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/467.latest.pt-BR.0e8fc3bb0fb034d5d609.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.pt-BR.a026ef31c29fb326ed90.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/766.latest.pt-BR.0362c7314cf59cfee7d4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/128.latest.pt-BR.85bc49e658bc9a589edf.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/660.latest.pt-BR.ed03197568683688b1f5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.616f945fd369b089cc4c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/417.latest.pt-BR.2178b6b8274f42143653.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.9963824345cde9332840.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.pt-BR.15276d44b20ff2c9be18.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  