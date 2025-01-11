"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[719],{3304:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"user-manual","title":"User Manual","description":"This User Manual provides step-by-step instructions for everyday usage of the TapDano ecosystem, from setting up NFC smartcards to managing Cardano assets via the TapDano App and SDK.","source":"@site/docs/user-manual.md","sourceDirName":".","slug":"/user-manual","permalink":"/docs/docs/user-manual","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"App","permalink":"/docs/docs/app"}}');var i=s(4848),a=s(8453);const t={sidebar_position:5},l="User Manual",o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Typical Use Cases",id:"typical-use-cases",level:2},{value:"Tips &amp; Best Practices",id:"tips--best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Additional Resources",id:"additional-resources",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}];function d(n){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"user-manual",children:"User Manual"})}),"\n",(0,i.jsxs)(e.p,{children:["This ",(0,i.jsx)(e.strong,{children:"User Manual"})," provides step-by-step instructions for everyday usage of the TapDano ecosystem, from setting up NFC smartcards to managing Cardano assets via the TapDano App and SDK."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(e.p,{children:"TapDano simplifies blockchain interactions by merging NFC technology with Cardano\u2019s powerful NFT infrastructure. Whether you\u2019re verifying a physical product or sending a Cardano transaction, TapDano ensures security and convenience."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"TapDano-Enabled Smartcard"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Pre-flashed with the TapDano Java Card Applet (firmware)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Device with NFC"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Smartphone (Android, iOS) or NFC USB reader for desktops."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"TapDano App"})," or ",(0,i.jsx)(e.strong,{children:"TapDano SDK"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Use the official app for a user-friendly interface."}),"\n",(0,i.jsx)(e.li,{children:"Use the SDK to integrate TapDano functionalities into custom projects."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Obtain a TapDano Smartcard"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Purchase or flash your own Java Card with the TapDano firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Install the TapDano App"})," (Mobile or Web)","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"https://github.com/tapdano/app/raw/main/tapdano.apk",children:"Download the APK"})," or access via web (if available)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Optional: Set Up the SDK"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Install the npm package ",(0,i.jsx)(e.code,{children:"tapdano"})," for advanced integration."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"typical-use-cases",children:"Typical Use Cases"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Read a TapDano Tag"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Open the TapDano App or run ",(0,i.jsx)(e.code,{children:"readTag()"})," via SDK."]}),"\n",(0,i.jsx)(e.li,{children:"Tap your card or connect via an NFC reader."}),"\n",(0,i.jsx)(e.li,{children:"View the card\u2019s details (version, policy ID, etc.)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Mint or Restore a Tag"})," (",(0,i.jsx)(e.code,{children:"Burn Tag"}),")","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Set up a Soulbound or Extractable tag."}),"\n",(0,i.jsx)(e.li,{children:"If restoring, provide a previously backed-up private key."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Sign Data"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"For Cardano transactions or any message needing cryptographic signing."}),"\n",(0,i.jsxs)(e.li,{children:["Use the app\u2019s \u201cSign Transaction\u201d feature or ",(0,i.jsx)(e.code,{children:"signData()"})," in the SDK."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Lock & Unlock Tags"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Permanent Lock (Lock Tag)"})," for Soulbound keys."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Temporary Lock (Pin Lock)"})," to secure an Extractable key behind a PIN."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Set a PolicyId"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Link an NFT PolicyId to the tag for soulbound NFTs."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"tips--best-practices",children:"Tips & Best Practices"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Keep Your PIN Secure"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Don\u2019t share it. Store it in a secure location."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Backup Extractable Keys"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"If using an Extractable tag, store your private key safely offline."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Use Soulbound Tags for Higher Security"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"If you don\u2019t need extractable keys, Soulbound ensures maximum protection."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Stay Up to Date"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Always use the latest firmware and app versions for security patches."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Tag Not Detected"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Ensure NFC is enabled on your device."}),"\n",(0,i.jsx)(e.li,{children:"Try tapping the card on different areas of the phone or reader."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Pin Lock Issues"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Double-check your PIN format (4 characters)."}),"\n",(0,i.jsxs)(e.li,{children:["Use ",(0,i.jsx)(e.code,{children:"pinUnlock(pin)"})," in the SDK or follow the in-app unlock instructions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Firmware Installation Errors"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Confirm Java Card environment variables are correctly set."}),"\n",(0,i.jsxs)(e.li,{children:["Verify you have the correct ",(0,i.jsx)(e.code,{children:".cap"})," file for the card."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"./firmware",children:"Firmware Documentation"}),(0,i.jsx)(e.br,{}),"\n","Learn how to build and install the Java Card Applet."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"./sdk",children:"SDK Documentation"}),(0,i.jsx)(e.br,{}),"\n","Integrate TapDano into your custom applications."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"./app",children:"App Documentation"}),(0,i.jsx)(e.br,{}),"\n","Discover the features of the TapDano App."]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsx)(e.p,{children:"Your feedback and contributions help improve TapDano. Feel free to:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Open an Issue"})," on GitHub for questions or bug reports."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Submit a Pull Request"})," with new features or documentation changes."]}),"\n"]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"license",children:"License"}),"\n",(0,i.jsxs)(e.p,{children:["TapDano is made available under the ",(0,i.jsx)(e.strong,{children:"MIT License"}),". You may freely copy, modify, and distribute the software under its terms."]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>l});var r=s(6540);const i={},a=r.createContext(i);function t(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);