// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.fpifindpoopinstantly.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.fpifindpoopinstantly.com/","title_tag":"Dog Waste Removal Hempstead & Nassau | Find Poop Instantly","meta_description":"Dog Waste Removal Hempstead and Nassau County. Pooper scooper yard cleaning on Long Island’s South Shore. Reliable FPI dog waste service for homes and pets."},{"page_url":"https://www.fpifindpoopinstantly.com/blank-1","title_tag":"Dog Poop Cleanup Long Island | FPI Find Poop Instantly","meta_description":"Local Long Island dog poop cleanup in Nassau County. Poop scooping for Massapequa, Merrick, Seaford, Wantagh, Bellmore, Freeport, Baldwin, Lynbrook, and more."},{"page_url":"https://www.fpifindpoopinstantly.com/blank-2","title_tag":"Pooper Scooper Nassau County FAQs | FPI Dog Waste Service","meta_description":"Pooper Scooper Nassau County questions answered. Learn about contracts, billing, disease prevention, pet waste disposal, and one-time dog poop removal service."},{"page_url":"https://www.fpifindpoopinstantly.com/blank-3","title_tag":"Dog Poop Removal Service Prices | FPI Find Poop Instantly","meta_description":"Affordable dog poop removal service prices in Hempstead and Nassau County. Weekly yard cleaning, negotiable rates, and discounts for seniors and assistance dogs."},{"page_url":"https://www.fpifindpoopinstantly.com/blank-4","title_tag":"Waste Removal Service Hempstead Contact | Find Poop Instantly","meta_description":"Contact our dog waste removal service in Hempstead, Nassau County. Schedule yard cleaning, poop scooping, and pet waste disposal across Long Island’s South Shore."}],"keywords":["Dog Waste Removal Hempstead","Pooper Scooper Nassau County","Find Poop Instantly","Dog Poop Cleanup Long Island","Waste Removal Service Hempstead","Pet Waste Disposal New York","Dog Poop Removal Service","FPI Dog Waste Service","Poop Scooping Long Island","Yard Cleaning Nassau County"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.fpifindpoopinstantly.com/#localbusiness",
  "name": "FPI - Find Poop Instantly Dog Waste Removal Company",
  "url": "https://www.fpifindpoopinstantly.com/",
  "description": "FPI (Find Poop Instantly) is a small local business specializing in pooper scooper and dog waste removal services. Serving the Town of Hempstead and Nassau County (South Shore) in New York since 2007.",
  "image": [
    "https://static.wixstatic.com/media/7f901b_f575afcd45ed4df5ac8aefcc0622cde6%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/7f901b_f575afcd45ed4df5ac8aefcc0622cde6%7Emv2.png",
    "https://static.wixstatic.com/media/7f901b_74fa7cc7b5af468ba52dcdd8dbcf1fbe~mv2.png/v1/fill/w_352,h_264,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dogs.png"
  ],
  "email": "mailto:Ursula@findpoop.com",
  "telephone": "+1-516-345-0266",
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Town of Hempstead, Nassau County (South Shore), New York"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Massapequa"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Massapequa Park"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Merrick"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Seaford"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Wantagh"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Bellmore"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Freeport"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Baldwin"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Rockville Centre"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Lynbrook"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Valley Stream"
    }
  ],
  "foundingDate": "2007",
  "founder": {
    "@type": "Person",
    "name": "Ursula Lipitz"
  },
  "priceRange": "$",
  "sameAs": [],
  "serviceType": "Dog waste removal, pooper scooper service for residential yards",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dog Waste Removal Pricing",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Once a week - 1 Dog",
        "price": "13",
        "priceCurrency": "USD",
        "description": "Once a week yard cleaning service for 1 dog."
      },
      {
        "@type": "Offer",
        "name": "Once a week - 2 Dogs",
        "price": "15",
        "priceCurrency": "USD",
        "description": "Once a week yard cleaning service for 2 dogs."
      },
      {
        "@type": "Offer",
        "name": "Once a week - 3 Dogs",
        "price": "17",
        "priceCurrency": "USD",
        "description": "Once a week yard cleaning service for 3 dogs."
      },
      {
        "@type": "Offer",
        "name": "Once a week - 4 Dogs",
        "price": "20",
        "priceCurrency": "USD",
        "description": "Once a week yard cleaning service for 4 dogs."
      },
      {
        "@type": "Offer",
        "name": "Twice a week - 1 Dog",
        "price": "23",
        "priceCurrency": "USD",
        "description": "Twice a week yard cleaning service for 1 dog."
      },
      {
        "@type": "Offer",
        "name": "Twice a week - 2 Dogs",
        "price": "25",
        "priceCurrency": "USD",
        "description": "Twice a week yard cleaning service for 2 dogs."
      },
      {
        "@type": "Offer",
        "name": "Twice a week - 3 Dogs",
        "price": "27",
        "priceCurrency": "USD",
        "description": "Twice a week yard cleaning service for 3 dogs."
      },
      {
        "@type": "Offer",
        "name": "Twice a week - 4 Dogs",
        "price": "29",
        "priceCurrency": "USD",
        "description": "Twice a week yard cleaning service for 4 dogs."
      },
      {
        "@type": "Offer",
        "name": "Three times a week - 1 Dog",
        "price": "25",
        "priceCurrency": "USD",
        "description": "Three times a week yard cleaning service for 1 dog."
      },
      {
        "@type": "Offer",
        "name": "Three times a week - 2 Dogs",
        "price": "27",
        "priceCurrency": "USD",
        "description": "Three times a week yard cleaning service for 2 dogs."
      },
      {
        "@type": "Offer",
        "name": "Three times a week - 3 Dogs",
        "price": "30",
        "priceCurrency": "USD",
        "description": "Three times a week yard cleaning service for 3 dogs."
      },
      {
        "@type": "Offer",
        "name": "Three times a week - 4 Dogs",
        "price": "32",
        "priceCurrency": "USD",
        "description": "Three times a week yard cleaning service for 4 dogs."
      }
    ]
  },
  "hasMerchantReturnPolicy": {
    "@type": "MerchantReturnPolicy",
    "name": "Service hold policy",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "returnWindow": "P1D",
    "returnPolicyCountry": "US",
    "returnMethod": "https://schema.org/ReturnAtKiosk",
    "returnFees": "https://schema.org/FreeReturn",
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Service hold",
      "value": "Customers can put service on hold by notifying at least one day in advance."
    }
  },
  "specialOpeningHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "description": "Service can be scheduled for particular days, for example the day before lawn service."
  },
  "knowsAbout": [
    "dog waste removal",
    "pooper scooper service",
    "yard cleaning for dogs",
    "one-time dog waste removal service",
    "short-term dog waste removal service",
    "assistance dog discount",
    "senior citizen discount",
    "disabled customer discount"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-516-345-0266",
    "contactType": "Customer Service",
    "email": "Ursula@findpoop.com",
    "availableLanguage": "en"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
