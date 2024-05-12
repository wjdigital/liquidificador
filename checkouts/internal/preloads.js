
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.pt-BR.a34d506f02761cdf97a3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/417.baseline.pt-BR.1f68f92c6ae9c273b715.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/823.baseline.pt-BR.ee62aea61be4b81f11c5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/180.baseline.pt-BR.bfc04e16eb22b823d75d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.97cf4cca643bdbe54d57.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/912.baseline.pt-BR.9697dcf669e47273b6d2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/625.baseline.pt-BR.e1e2ed31281f96c3f1a1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/467.baseline.pt-BR.573c04abdce24bf873ae.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/766.baseline.pt-BR.2d27195bbe5c75fd5c53.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/397.baseline.pt-BR.3e087c1b97162034cb17.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/660.baseline.pt-BR.ef4d70b7e95ebae2e2de.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.pt-BR.9e132ae49026b99a1dc0.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/417.baseline.pt-BR.2714f81609ce2fba9060.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.pt-BR.e0fdd23e86b4b12dc0a5.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.baseline.pt-BR.965872168c75ba5e01e7.css"];
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
  