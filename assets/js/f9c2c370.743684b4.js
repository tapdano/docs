"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[616],{3888:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"sdk","title":"SDK","description":"TapDano SDK is an npm package designed for both web and mobile (Ionic/Cordova) environments, enabling interaction with smartcards that utilize the TapDano firmware.","source":"@site/docs/sdk.md","sourceDirName":".","slug":"/sdk","permalink":"/docs/docs/sdk","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Firmware","permalink":"/docs/docs/firmware"},"next":{"title":"App","permalink":"/docs/docs/app"}}');var i=r(4848),a=r(8453);const t={sidebar_position:3},c="SDK",d={},o=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Available Methods",id:"available-methods",level:2},{value:"<code>constructor(config?: TapDanoServiceConfig)</code>",id:"constructorconfig-tapdanoserviceconfig",level:3},{value:"<code>readTag(): Promise&lt;TagParser&gt;</code>",id:"readtag-promisetagparser",level:3},{value:"<code>burnTag(action: &#39;new&#39; | &#39;restore&#39;, type: &#39;soulbound&#39; | &#39;extractable&#39;, privateKey?: string): Promise&lt;TagParser&gt;</code>",id:"burntagaction-new--restore-type-soulbound--extractable-privatekey-string-promisetagparser",level:3},{value:"<code>signData(data: string): Promise&lt;TagParser&gt;</code>",id:"signdatadata-string-promisetagparser",level:3},{value:"<code>formatTag(): Promise&lt;TagParser&gt;</code>",id:"formattag-promisetagparser",level:3},{value:"<code>lockTag(): Promise&lt;TagParser&gt;</code>",id:"locktag-promisetagparser",level:3},{value:"<code>pinLock(pin: string): Promise&lt;TagParser&gt;</code>",id:"pinlockpin-string-promisetagparser",level:3},{value:"<code>pinUnlock(pin: string): Promise&lt;TagParser&gt;</code>",id:"pinunlockpin-string-promisetagparser",level:3},{value:"<code>setPolicyId(policyId: string): Promise&lt;TagParser&gt;</code>",id:"setpolicyidpolicyid-string-promisetagparser",level:3},{value:"<code>executeRawCommand(command?: string): Promise&lt;TagParser&gt;</code>",id:"executerawcommandcommand-string-promisetagparser",level:3},{value:"<code>cancel()</code>",id:"cancel",level:3},{value:"Stats",id:"stats",level:2},{value:"License",id:"license",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sdk",children:"SDK"})}),"\n",(0,i.jsx)(n.p,{children:"TapDano SDK is an npm package designed for both web and mobile (Ionic/Cordova) environments, enabling interaction with smartcards that utilize the TapDano firmware."}),"\n",(0,i.jsxs)(n.p,{children:["The firmware (JavaCard Applet) can be found at ",(0,i.jsx)(n.a,{href:"https://github.com/tapdano/applet",children:"TapDano Applet"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This package supports multiple communication methods, including ",(0,i.jsx)(n.strong,{children:"WebNFC"})," for Android devices and ",(0,i.jsx)(n.strong,{children:"WebAuthn"})," for iOS and desktop environments with NFC USB readers."]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"To install the TapDano package, use npm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i tapdano\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Here's a basic example of how to use the TapDano package:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"import { TapDanoService } from 'tapdano';\r\n\r\nconst tapDanoService = new TapDanoService();\r\n\r\nconst tag = await tapDanoService.readTag();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"available-methods",children:"Available Methods"}),"\n",(0,i.jsx)(n.h3,{id:"constructorconfig-tapdanoserviceconfig",children:(0,i.jsx)(n.code,{children:"constructor(config?: TapDanoServiceConfig)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config.method"})," (optional): Specify the communication method. Accepts ",(0,i.jsx)(n.code,{children:"'auto'"}),", ",(0,i.jsx)(n.code,{children:"'MobileNDEF'"}),", ",(0,i.jsx)(n.code,{children:"'MobileRaw'"}),", ",(0,i.jsx)(n.code,{children:"'WebNFC'"}),", or ",(0,i.jsx)(n.code,{children:"'WebAuthn'"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"readtag-promisetagparser",children:(0,i.jsx)(n.code,{children:"readTag(): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Reads data from the smartcard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"burntagaction-new--restore-type-soulbound--extractable-privatekey-string-promisetagparser",children:(0,i.jsx)(n.code,{children:"burnTag(action: 'new' | 'restore', type: 'soulbound' | 'extractable', privateKey?: string): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Burns a new Tag the smartcard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"action"}),": Specify the action, either ",(0,i.jsx)(n.code,{children:"'new'"})," or ",(0,i.jsx)(n.code,{children:"'restore'"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"type"}),": Specify the type, either ",(0,i.jsx)(n.code,{children:"'soulbound'"})," or ",(0,i.jsx)(n.code,{children:"'extractable'"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"privateKey"})," (optional): Provide a private key when restoring."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"signdatadata-string-promisetagparser",children:(0,i.jsx)(n.code,{children:"signData(data: string): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Signs data using the smartcard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"}),": Hexadecimal string of data to be signed."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"formattag-promisetagparser",children:(0,i.jsx)(n.code,{children:"formatTag(): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Reset the smartcard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"locktag-promisetagparser",children:(0,i.jsx)(n.code,{children:"lockTag(): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:'Locks the smartcard. It is used to permanently lock the private key extraction from an "extractable" Tag.'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pinlockpin-string-promisetagparser",children:(0,i.jsx)(n.code,{children:"pinLock(pin: string): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Temporarily locks the smartcard with a PIN."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pin"}),": A 4-character PIN string."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pinunlockpin-string-promisetagparser",children:(0,i.jsx)(n.code,{children:"pinUnlock(pin: string): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Unlocks the smartcard using a PIN."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pin"}),": A 4-character PIN string."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"setpolicyidpolicyid-string-promisetagparser",children:(0,i.jsx)(n.code,{children:"setPolicyId(policyId: string): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Sets a policy ID on the smartcard. Used after minting a Soulbound NFT, to link the PolicyId to the Tag and facilitate loading the Asset when reading the smartcard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"policyId"}),": A 28-character hexadecimal string representing the policy ID."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"executerawcommandcommand-string-promisetagparser",children:(0,i.jsx)(n.code,{children:"executeRawCommand(command?: string): Promise<TagParser>"})}),"\n",(0,i.jsx)(n.p,{children:"Executes a raw APDU command on the smartcard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"command"})," (optional): The raw APDU command to be sent."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"Promise<TagParser>"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cancel",children:(0,i.jsx)(n.code,{children:"cancel()"})}),"\n",(0,i.jsx)(n.p,{children:"Cancels any ongoing operation on the smartcard."}),"\n",(0,i.jsx)(n.h2,{id:"stats",children:"Stats"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://repobeats.axiom.co/api/embed/c706dde39f152a47b19cf720e6c97f9231aa2f14.svg",alt:"Alt",title:"Repobeats analytics image"})}),"\n",(0,i.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,i.jsxs)(n.p,{children:["This project is licensed under the MIT License - see the ",(0,i.jsx)(n.a,{href:"LICENSE",children:"LICENSE"})," file for details."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var s=r(6540);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);