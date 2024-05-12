/* <![CDATA[ */
var _ckyConfig = {
  _ipData: [],
  _assetsURL:
    "https://paramountdigital.co.uk/wp-content/plugins/cookie-law-info/lite/frontend/images/",
  _publicURL: "https://paramountdigital.co.uk",
  _expiry: "365",
  _categories: [
    {
      name: "Necessary",
      slug: "necessary",
      isNecessary: true,
      ccpaDoNotSell: true,
      cookies: [],
      active: true,
      defaultConsent: { gdpr: true, ccpa: true },
    },
    {
      name: "Functional",
      slug: "functional",
      isNecessary: false,
      ccpaDoNotSell: true,
      cookies: [],
      active: true,
      defaultConsent: { gdpr: false, ccpa: false },
    },
    {
      name: "Analytics",
      slug: "analytics",
      isNecessary: false,
      ccpaDoNotSell: true,
      cookies: [],
      active: true,
      defaultConsent: { gdpr: false, ccpa: false },
    },
    {
      name: "Performance",
      slug: "performance",
      isNecessary: false,
      ccpaDoNotSell: true,
      cookies: [],
      active: true,
      defaultConsent: { gdpr: false, ccpa: false },
    },
    {
      name: "Advertisement",
      slug: "advertisement",
      isNecessary: false,
      ccpaDoNotSell: true,
      cookies: [],
      active: true,
      defaultConsent: { gdpr: false, ccpa: false },
    },
  ],
  _activeLaw: "gdpr",
  _rootDomain: "",
  _block: "1",
  _showBanner: "1",
  _bannerConfig: {
    settings: {
      type: "box",
      preferenceCenterType: "popup",
      position: "bottom-right",
      applicableLaw: "gdpr",
    },
    behaviours: {
      reloadBannerOnAccept: false,
      loadAnalyticsByDefault: false,
      animations: { onLoad: "animate", onHide: "sticky" },
    },
    config: {
      revisitConsent: {
        status: true,
        tag: "revisit-consent",
        position: "bottom-left",
        meta: { url: "#" },
        styles: { "background-color": "#0056a7" },
        elements: {
          title: {
            type: "text",
            tag: "revisit-consent-title",
            status: true,
            styles: { color: "#0056a7" },
          },
        },
      },
      preferenceCenter: {
        toggle: {
          status: true,
          tag: "detail-category-toggle",
          type: "toggle",
          states: {
            active: { styles: { "background-color": "#1863DC" } },
            inactive: { styles: { "background-color": "#D0D5D2" } },
          },
        },
      },
      categoryPreview: {
        status: false,
        toggle: {
          status: true,
          tag: "detail-category-preview-toggle",
          type: "toggle",
          states: {
            active: { styles: { "background-color": "#1863DC" } },
            inactive: { styles: { "background-color": "#D0D5D2" } },
          },
        },
      },
      videoPlaceholder: {
        status: true,
        styles: {
          "background-color": "#000000",
          "border-color": "#000000",
          color: "#ffffff",
        },
      },
      readMore: {
        status: false,
        tag: "readmore-button",
        type: "link",
        meta: { noFollow: true, newTab: true },
        styles: {
          color: "#1863dc",
          "background-color": "transparent",
          "border-color": "transparent",
        },
      },
      auditTable: { status: true },
      optOption: {
        status: true,
        toggle: {
          status: true,
          tag: "optout-option-toggle",
          type: "toggle",
          states: {
            active: { styles: { "background-color": "#1863dc" } },
            inactive: { styles: { "background-color": "#d0d5d2" } },
          },
        },
      },
    },
  },
  _version: "3.2.2",
  _logConsent: "1",
  _tags: [
    {
      tag: "accept-button",
      styles: {
        color: "#d0d0d0",
        "background-color": "#1863dc",
        "border-color": "#1863dc",
      },
    },
    {
      tag: "reject-button",
      styles: {
        color: "#d0d0d0",
        "background-color": "transparent",
        "border-color": "#d0d0d0",
      },
    },
    {
      tag: "settings-button",
      styles: {
        color: "#d0d0d0",
        "background-color": "transparent",
        "border-color": "#d0d0d0",
      },
    },
    {
      tag: "readmore-button",
      styles: {
        color: "#1863dc",
        "background-color": "transparent",
        "border-color": "transparent",
      },
    },
    {
      tag: "donotsell-button",
      styles: {
        color: "#1863dc",
        "background-color": "transparent",
        "border-color": "transparent",
      },
    },
    {
      tag: "accept-button",
      styles: {
        color: "#d0d0d0",
        "background-color": "#1863dc",
        "border-color": "#1863dc",
      },
    },
    { tag: "revisit-consent", styles: { "background-color": "#0056a7" } },
  ],
  _shortCodes: [
    {
      key: "cky_readmore",
      content:
        '<a href="#" class="cky-policy" aria-label="Cookie Policy" target="_blank" rel="noopener" data-cky-tag="readmore-button">Cookie Policy</a>',
      tag: "readmore-button",
      status: false,
      attributes: { rel: "nofollow", target: "_blank" },
    },
    {
      key: "cky_show_desc",
      content:
        '<button class="cky-show-desc-btn" data-cky-tag="show-desc-button" aria-label="Show more">Show more</button>',
      tag: "show-desc-button",
      status: true,
      attributes: [],
    },
    {
      key: "cky_hide_desc",
      content:
        '<button class="cky-show-desc-btn" data-cky-tag="hide-desc-button" aria-label="Show less">Show less</button>',
      tag: "hide-desc-button",
      status: true,
      attributes: [],
    },
    {
      key: "cky_category_toggle_label",
      content:
        "[cky_{{status}}_category_label] [cky_preference_{{category_slug}}_title]",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_enable_category_label",
      content: "Enable",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_disable_category_label",
      content: "Disable",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_video_placeholder",
      content:
        '<div class="video-placeholder-normal" data-cky-tag="video-placeholder" id="[UNIQUEID]"><p class="video-placeholder-text-normal" data-cky-tag="placeholder-title">Please accept cookies to access this content</p></div>',
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_enable_optout_label",
      content: "Enable",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_disable_optout_label",
      content: "Disable",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_optout_toggle_label",
      content: "[cky_{{status}}_optout_label] [cky_optout_option_title]",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_optout_option_title",
      content: "Do Not Sell or Share My Personal Information",
      tag: "",
      status: true,
      attributes: [],
    },
    {
      key: "cky_optout_close_label",
      content: "Close",
      tag: "",
      status: true,
      attributes: [],
    },
  ],
  _rtl: "",
  _providersToBlock: [],
};
var _ckyStyles = {
  css: '.cky-overlay{background: #000000; opacity: 0.4; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 99999999;}.cky-hide{display: none;}.cky-btn-revisit-wrapper{display: flex; align-items: center; justify-content: center; background: #0056a7; width: 45px; height: 45px; border-radius: 50%; position: fixed; z-index: 999999; cursor: pointer;}.cky-revisit-bottom-left{bottom: 15px; left: 15px;}.cky-revisit-bottom-right{bottom: 15px; right: 15px;}.cky-btn-revisit-wrapper .cky-btn-revisit{display: flex; align-items: center; justify-content: center; background: none; border: none; cursor: pointer; position: relative; margin: 0; padding: 0;}.cky-btn-revisit-wrapper .cky-btn-revisit img{max-width: fit-content; margin: 0; height: 30px; width: 30px;}.cky-revisit-bottom-left:hover::before{content: attr(data-tooltip); position: absolute; background: #4e4b66; color: #ffffff; left: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-content; padding: 4px 8px; border-radius: 4px;}.cky-revisit-bottom-left:hover::after{position: absolute; content: ""; border: 5px solid transparent; left: calc(100% + 2px); border-left-width: 0; border-right-color: #4e4b66;}.cky-revisit-bottom-right:hover::before{content: attr(data-tooltip); position: absolute; background: #4e4b66; color: #ffffff; right: calc(100% + 7px); font-size: 12px; line-height: 16px; width: max-content; padding: 4px 8px; border-radius: 4px;}.cky-revisit-bottom-right:hover::after{position: absolute; content: ""; border: 5px solid transparent; right: calc(100% + 2px); border-right-width: 0; border-left-color: #4e4b66;}.cky-revisit-hide{display: none;}.cky-consent-container{position: fixed; width: 440px; box-sizing: border-box; z-index: 9999999; border-radius: 6px;}.cky-consent-container .cky-consent-bar{background: #ffffff; border: 1px solid; padding: 20px 26px; box-shadow: 0 -1px 10px 0 #acabab4d; border-radius: 6px;}.cky-box-bottom-left{bottom: 40px; left: 40px;}.cky-box-bottom-right{bottom: 40px; right: 40px;}.cky-box-top-left{top: 40px; left: 40px;}.cky-box-top-right{top: 40px; right: 40px;}.cky-custom-brand-logo-wrapper .cky-custom-brand-logo{width: 100px; height: auto; margin: 0 0 12px 0;}.cky-notice .cky-title{color: #212121; font-weight: 700; font-size: 18px; line-height: 24px; margin: 0 0 12px 0;}.cky-notice-des *,.cky-preference-content-wrapper *,.cky-accordion-header-des *,.cky-gpc-wrapper .cky-gpc-desc *{font-size: 14px;}.cky-notice-des{color: #212121; font-size: 14px; line-height: 24px; font-weight: 400;}.cky-notice-des img{height: 25px; width: 25px;}.cky-consent-bar .cky-notice-des p,.cky-gpc-wrapper .cky-gpc-desc p,.cky-preference-body-wrapper .cky-preference-content-wrapper p,.cky-accordion-header-wrapper .cky-accordion-header-des p,.cky-cookie-des-table li div:last-child p{color: inherit; margin-top: 0; overflow-wrap: break-word;}.cky-notice-des P:last-child,.cky-preference-content-wrapper p:last-child,.cky-cookie-des-table li div:last-child p:last-child,.cky-gpc-wrapper .cky-gpc-desc p:last-child{margin-bottom: 0;}.cky-notice-des a.cky-policy,.cky-notice-des button.cky-policy{font-size: 14px; color: #1863dc; white-space: nowrap; cursor: pointer; background: transparent; border: 1px solid; text-decoration: underline;}.cky-notice-des button.cky-policy{padding: 0;}.cky-notice-des a.cky-policy:focus-visible,.cky-notice-des button.cky-policy:focus-visible,.cky-preference-content-wrapper .cky-show-desc-btn:focus-visible,.cky-accordion-header .cky-accordion-btn:focus-visible,.cky-preference-header .cky-btn-close:focus-visible,.cky-switch input[type="checkbox"]:focus-visible,.cky-footer-wrapper a:focus-visible,.cky-btn:focus-visible{outline: 2px solid #1863dc; outline-offset: 2px;}.cky-btn:focus:not(:focus-visible),.cky-accordion-header .cky-accordion-btn:focus:not(:focus-visible),.cky-preference-content-wrapper .cky-show-desc-btn:focus:not(:focus-visible),.cky-btn-revisit-wrapper .cky-btn-revisit:focus:not(:focus-visible),.cky-preference-header .cky-btn-close:focus:not(:focus-visible),.cky-consent-bar .cky-banner-btn-close:focus:not(:focus-visible){outline: 0;}button.cky-show-desc-btn:not(:hover):not(:active){color: #1863dc; background: transparent;}button.cky-accordion-btn:not(:hover):not(:active),button.cky-banner-btn-close:not(:hover):not(:active),button.cky-btn-revisit:not(:hover):not(:active),button.cky-btn-close:not(:hover):not(:active){background: transparent;}.cky-consent-bar button:hover,.cky-modal.cky-modal-open button:hover,.cky-consent-bar button:focus,.cky-modal.cky-modal-open button:focus{text-decoration: none;}.cky-notice-btn-wrapper{display: flex; justify-content: flex-start; align-items: center; flex-wrap: wrap; margin-top: 16px;}.cky-notice-btn-wrapper .cky-btn{text-shadow: none; box-shadow: none;}.cky-btn{flex: auto; max-width: 100%; font-size: 14px; font-family: inherit; line-height: 24px; padding: 8px; font-weight: 500; margin: 0 8px 0 0; border-radius: 2px; cursor: pointer; text-align: center; text-transform: none; min-height: 0;}.cky-btn:hover{opacity: 0.8;}.cky-btn-customize{color: #1863dc; background: transparent; border: 2px solid #1863dc;}.cky-btn-reject{color: #1863dc; background: transparent; border: 2px solid #1863dc;}.cky-btn-accept{background: #1863dc; color: #ffffff; border: 2px solid #1863dc;}.cky-btn:last-child{margin-right: 0;}@media (max-width: 576px){.cky-box-bottom-left{bottom: 0; left: 0;}.cky-box-bottom-right{bottom: 0; right: 0;}.cky-box-top-left{top: 0; left: 0;}.cky-box-top-right{top: 0; right: 0;}}@media (max-width: 440px){.cky-box-bottom-left, .cky-box-bottom-right, .cky-box-top-left, .cky-box-top-right{width: 100%; max-width: 100%;}.cky-consent-container .cky-consent-bar{padding: 20px 0;}.cky-custom-brand-logo-wrapper, .cky-notice .cky-title, .cky-notice-des, .cky-notice-btn-wrapper{padding: 0 24px;}.cky-notice-des{max-height: 40vh; overflow-y: scroll;}.cky-notice-btn-wrapper{flex-direction: column; margin-top: 0;}.cky-btn{width: 100%; margin: 10px 0 0 0;}.cky-notice-btn-wrapper .cky-btn-customize{order: 2;}.cky-notice-btn-wrapper .cky-btn-reject{order: 3;}.cky-notice-btn-wrapper .cky-btn-accept{order: 1; margin-top: 16px;}}@media (max-width: 352px){.cky-notice .cky-title{font-size: 16px;}.cky-notice-des *{font-size: 12px;}.cky-notice-des, .cky-btn{font-size: 12px;}}.cky-modal.cky-modal-open{display: flex; visibility: visible; -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%, -50%); top: 50%; left: 50%; transition: all 1s ease;}.cky-modal{box-shadow: 0 32px 68px rgba(0, 0, 0, 0.3); margin: 0 auto; position: fixed; max-width: 100%; background: #ffffff; top: 50%; box-sizing: border-box; border-radius: 6px; z-index: 999999999; color: #212121; -webkit-transform: translate(-50%, 100%); -moz-transform: translate(-50%, 100%); -ms-transform: translate(-50%, 100%); -o-transform: translate(-50%, 100%); transform: translate(-50%, 100%); visibility: hidden; transition: all 0s ease;}.cky-preference-center{max-height: 79vh; overflow: hidden; width: 845px; overflow: hidden; flex: 1 1 0; display: flex; flex-direction: column; border-radius: 6px;}.cky-preference-header{display: flex; align-items: center; justify-content: space-between; padding: 22px 24px; border-bottom: 1px solid;}.cky-preference-header .cky-preference-title{font-size: 18px; font-weight: 700; line-height: 24px;}.cky-preference-header .cky-btn-close{margin: 0; cursor: pointer; vertical-align: middle; padding: 0; background: none; border: none; width: auto; height: auto; min-height: 0; line-height: 0; text-shadow: none; box-shadow: none;}.cky-preference-header .cky-btn-close img{margin: 0; height: 10px; width: 10px;}.cky-preference-body-wrapper{padding: 0 24px; flex: 1; overflow: auto; box-sizing: border-box;}.cky-preference-content-wrapper,.cky-gpc-wrapper .cky-gpc-desc{font-size: 14px; line-height: 24px; font-weight: 400; padding: 12px 0;}.cky-preference-content-wrapper{border-bottom: 1px solid;}.cky-preference-content-wrapper img{height: 25px; width: 25px;}.cky-preference-content-wrapper .cky-show-desc-btn{font-size: 14px; font-family: inherit; color: #1863dc; text-decoration: none; line-height: 24px; padding: 0; margin: 0; white-space: nowrap; cursor: pointer; background: transparent; border-color: transparent; text-transform: none; min-height: 0; text-shadow: none; box-shadow: none;}.cky-accordion-wrapper{margin-bottom: 10px;}.cky-accordion{border-bottom: 1px solid;}.cky-accordion:last-child{border-bottom: none;}.cky-accordion .cky-accordion-item{display: flex; margin-top: 10px;}.cky-accordion .cky-accordion-body{display: none;}.cky-accordion.cky-accordion-active .cky-accordion-body{display: block; padding: 0 22px; margin-bottom: 16px;}.cky-accordion-header-wrapper{cursor: pointer; width: 100%;}.cky-accordion-item .cky-accordion-header{display: flex; justify-content: space-between; align-items: center;}.cky-accordion-header .cky-accordion-btn{font-size: 16px; font-family: inherit; color: #212121; line-height: 24px; background: none; border: none; font-weight: 700; padding: 0; margin: 0; cursor: pointer; text-transform: none; min-height: 0; text-shadow: none; box-shadow: none;}.cky-accordion-header .cky-always-active{color: #008000; font-weight: 600; line-height: 24px; font-size: 14px;}.cky-accordion-header-des{font-size: 14px; line-height: 24px; margin: 10px 0 16px 0;}.cky-accordion-chevron{margin-right: 22px; position: relative; cursor: pointer;}.cky-accordion-chevron-hide{display: none;}.cky-accordion .cky-accordion-chevron i::before{content: ""; position: absolute; border-right: 1.4px solid; border-bottom: 1.4px solid; border-color: inherit; height: 6px; width: 6px; -webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg); transition: all 0.2s ease-in-out; top: 8px;}.cky-accordion.cky-accordion-active .cky-accordion-chevron i::before{-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg);}.cky-audit-table{background: #f4f4f4; border-radius: 6px;}.cky-audit-table .cky-empty-cookies-text{color: inherit; font-size: 12px; line-height: 24px; margin: 0; padding: 10px;}.cky-audit-table .cky-cookie-des-table{font-size: 12px; line-height: 24px; font-weight: normal; padding: 15px 10px; border-bottom: 1px solid; border-bottom-color: inherit; margin: 0;}.cky-audit-table .cky-cookie-des-table:last-child{border-bottom: none;}.cky-audit-table .cky-cookie-des-table li{list-style-type: none; display: flex; padding: 3px 0;}.cky-audit-table .cky-cookie-des-table li:first-child{padding-top: 0;}.cky-cookie-des-table li div:first-child{width: 100px; font-weight: 600; word-break: break-word; word-wrap: break-word;}.cky-cookie-des-table li div:last-child{flex: 1; word-break: break-word; word-wrap: break-word; margin-left: 8px;}.cky-footer-shadow{display: block; width: 100%; height: 40px; background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%); position: absolute; bottom: calc(100% - 1px);}.cky-footer-wrapper{position: relative;}.cky-prefrence-btn-wrapper{display: flex; flex-wrap: wrap; align-items: center; justify-content: center; padding: 22px 24px; border-top: 1px solid;}.cky-prefrence-btn-wrapper .cky-btn{flex: auto; max-width: 100%; text-shadow: none; box-shadow: none;}.cky-btn-preferences{color: #1863dc; background: transparent; border: 2px solid #1863dc;}.cky-preference-header,.cky-preference-body-wrapper,.cky-preference-content-wrapper,.cky-accordion-wrapper,.cky-accordion,.cky-accordion-wrapper,.cky-footer-wrapper,.cky-prefrence-btn-wrapper{border-color: inherit;}@media (max-width: 845px){.cky-modal{max-width: calc(100% - 16px);}}@media (max-width: 576px){.cky-modal{max-width: 100%;}.cky-preference-center{max-height: 100vh;}.cky-prefrence-btn-wrapper{flex-direction: column;}.cky-accordion.cky-accordion-active .cky-accordion-body{padding-right: 0;}.cky-prefrence-btn-wrapper .cky-btn{width: 100%; margin: 10px 0 0 0;}.cky-prefrence-btn-wrapper .cky-btn-reject{order: 3;}.cky-prefrence-btn-wrapper .cky-btn-accept{order: 1; margin-top: 0;}.cky-prefrence-btn-wrapper .cky-btn-preferences{order: 2;}}@media (max-width: 425px){.cky-accordion-chevron{margin-right: 15px;}.cky-notice-btn-wrapper{margin-top: 0;}.cky-accordion.cky-accordion-active .cky-accordion-body{padding: 0 15px;}}@media (max-width: 352px){.cky-preference-header .cky-preference-title{font-size: 16px;}.cky-preference-header{padding: 16px 24px;}.cky-preference-content-wrapper *, .cky-accordion-header-des *{font-size: 12px;}.cky-preference-content-wrapper, .cky-preference-content-wrapper .cky-show-more, .cky-accordion-header .cky-always-active, .cky-accordion-header-des, .cky-preference-content-wrapper .cky-show-desc-btn, .cky-notice-des a.cky-policy{font-size: 12px;}.cky-accordion-header .cky-accordion-btn{font-size: 14px;}}.cky-switch{display: flex;}.cky-switch input[type="checkbox"]{position: relative; width: 44px; height: 24px; margin: 0; background: #d0d5d2; -webkit-appearance: none; border-radius: 50px; cursor: pointer; outline: 0; border: none; top: 0;}.cky-switch input[type="checkbox"]:checked{background: #1863dc;}.cky-switch input[type="checkbox"]:before{position: absolute; content: ""; height: 20px; width: 20px; left: 2px; bottom: 2px; border-radius: 50%; background-color: white; -webkit-transition: 0.4s; transition: 0.4s; margin: 0;}.cky-switch input[type="checkbox"]:after{display: none;}.cky-switch input[type="checkbox"]:checked:before{-webkit-transform: translateX(20px); -ms-transform: translateX(20px); transform: translateX(20px);}@media (max-width: 425px){.cky-switch input[type="checkbox"]{width: 38px; height: 21px;}.cky-switch input[type="checkbox"]:before{height: 17px; width: 17px;}.cky-switch input[type="checkbox"]:checked:before{-webkit-transform: translateX(17px); -ms-transform: translateX(17px); transform: translateX(17px);}}.cky-consent-bar .cky-banner-btn-close{position: absolute; right: 9px; top: 5px; background: none; border: none; cursor: pointer; padding: 0; margin: 0; min-height: 0; line-height: 0; height: auto; width: auto; text-shadow: none; box-shadow: none;}.cky-consent-bar .cky-banner-btn-close img{height: 9px; width: 9px; margin: 0;}.cky-notice-group{font-size: 14px; line-height: 24px; font-weight: 400; color: #212121;}.cky-notice-btn-wrapper .cky-btn-do-not-sell{font-size: 14px; line-height: 24px; padding: 6px 0; margin: 0; font-weight: 500; background: none; border-radius: 2px; border: none; cursor: pointer; text-align: left; color: #1863dc; background: transparent; border-color: transparent; box-shadow: none; text-shadow: none;}.cky-consent-bar .cky-banner-btn-close:focus-visible,.cky-notice-btn-wrapper .cky-btn-do-not-sell:focus-visible,.cky-opt-out-btn-wrapper .cky-btn:focus-visible,.cky-opt-out-checkbox-wrapper input[type="checkbox"].cky-opt-out-checkbox:focus-visible{outline: 2px solid #1863dc; outline-offset: 2px;}@media (max-width: 440px){.cky-consent-container{width: 100%;}}@media (max-width: 352px){.cky-notice-des a.cky-policy, .cky-notice-btn-wrapper .cky-btn-do-not-sell{font-size: 12px;}}.cky-opt-out-wrapper{padding: 12px 0;}.cky-opt-out-wrapper .cky-opt-out-checkbox-wrapper{display: flex; align-items: center;}.cky-opt-out-checkbox-wrapper .cky-opt-out-checkbox-label{font-size: 16px; font-weight: 700; line-height: 24px; margin: 0 0 0 12px; cursor: pointer;}.cky-opt-out-checkbox-wrapper input[type="checkbox"].cky-opt-out-checkbox{background-color: #ffffff; border: 1px solid black; width: 20px; height: 18.5px; margin: 0; -webkit-appearance: none; position: relative; display: flex; align-items: center; justify-content: center; border-radius: 2px; cursor: pointer;}.cky-opt-out-checkbox-wrapper input[type="checkbox"].cky-opt-out-checkbox:checked{background-color: #1863dc; border: none;}.cky-opt-out-checkbox-wrapper input[type="checkbox"].cky-opt-out-checkbox:checked::after{left: 6px; bottom: 4px; width: 7px; height: 13px; border: solid #ffffff; border-width: 0 3px 3px 0; border-radius: 2px; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg); content: ""; position: absolute; box-sizing: border-box;}.cky-opt-out-checkbox-wrapper.cky-disabled .cky-opt-out-checkbox-label,.cky-opt-out-checkbox-wrapper.cky-disabled input[type="checkbox"].cky-opt-out-checkbox{cursor: no-drop;}.cky-gpc-wrapper{margin: 0 0 0 32px;}.cky-footer-wrapper .cky-opt-out-btn-wrapper{display: flex; flex-wrap: wrap; align-items: center; justify-content: center; padding: 22px 24px;}.cky-opt-out-btn-wrapper .cky-btn{flex: auto; max-width: 100%; text-shadow: none; box-shadow: none;}.cky-opt-out-btn-wrapper .cky-btn-cancel{border: 1px solid #dedfe0; background: transparent; color: #858585;}.cky-opt-out-btn-wrapper .cky-btn-confirm{background: #1863dc; color: #ffffff; border: 1px solid #1863dc;}@media (max-width: 352px){.cky-opt-out-checkbox-wrapper .cky-opt-out-checkbox-label{font-size: 14px;}.cky-gpc-wrapper .cky-gpc-desc, .cky-gpc-wrapper .cky-gpc-desc *{font-size: 12px;}.cky-opt-out-checkbox-wrapper input[type="checkbox"].cky-opt-out-checkbox{width: 16px; height: 16px;}.cky-opt-out-checkbox-wrapper input[type="checkbox"].cky-opt-out-checkbox:checked::after{left: 5px; bottom: 4px; width: 3px; height: 9px;}.cky-gpc-wrapper{margin: 0 0 0 28px;}}.video-placeholder-youtube{background-size: 100% 100%; background-position: center; background-repeat: no-repeat; background-color: #b2b0b059; position: relative; display: flex; align-items: center; justify-content: center; max-width: 100%;}.video-placeholder-text-youtube{text-align: center; align-items: center; padding: 10px 16px; background-color: #000000cc; color: #ffffff; border: 1px solid; border-radius: 2px; cursor: pointer;}.video-placeholder-normal{background-image: url("/wp-content/plugins/cookie-law-info/lite/frontend/images/placeholder.svg"); background-size: 80px; background-position: center; background-repeat: no-repeat; background-color: #b2b0b059; position: relative; display: flex; align-items: flex-end; justify-content: center; max-width: 100%;}.video-placeholder-text-normal{align-items: center; padding: 10px 16px; text-align: center; border: 1px solid; border-radius: 2px; cursor: pointer;}.cky-rtl{direction: rtl; text-align: right;}.cky-rtl .cky-banner-btn-close{left: 9px; right: auto;}.cky-rtl .cky-notice-btn-wrapper .cky-btn:last-child{margin-right: 8px;}.cky-rtl .cky-notice-btn-wrapper .cky-btn:first-child{margin-right: 0;}.cky-rtl .cky-notice-btn-wrapper{margin-left: 0; margin-right: 15px;}.cky-rtl .cky-prefrence-btn-wrapper .cky-btn{margin-right: 8px;}.cky-rtl .cky-prefrence-btn-wrapper .cky-btn:first-child{margin-right: 0;}.cky-rtl .cky-accordion .cky-accordion-chevron i::before{border: none; border-left: 1.4px solid; border-top: 1.4px solid; left: 12px;}.cky-rtl .cky-accordion.cky-accordion-active .cky-accordion-chevron i::before{-webkit-transform: rotate(-135deg); -moz-transform: rotate(-135deg); -ms-transform: rotate(-135deg); -o-transform: rotate(-135deg); transform: rotate(-135deg);}@media (max-width: 768px){.cky-rtl .cky-notice-btn-wrapper{margin-right: 0;}}@media (max-width: 576px){.cky-rtl .cky-notice-btn-wrapper .cky-btn:last-child{margin-right: 0;}.cky-rtl .cky-prefrence-btn-wrapper .cky-btn{margin-right: 0;}.cky-rtl .cky-accordion.cky-accordion-active .cky-accordion-body{padding: 0 22px 0 0;}}@media (max-width: 425px){.cky-rtl .cky-accordion.cky-accordion-active .cky-accordion-body{padding: 0 15px 0 0;}}.cky-rtl .cky-opt-out-btn-wrapper .cky-btn{margin-right: 12px;}.cky-rtl .cky-opt-out-btn-wrapper .cky-btn:first-child{margin-right: 0;}.cky-rtl .cky-opt-out-checkbox-wrapper .cky-opt-out-checkbox-label{margin: 0 12px 0 0;}',
};
/* ]]> */
