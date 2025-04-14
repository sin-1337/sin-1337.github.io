if("function"!=typeof window.ImportBondageCollege)throw alert("Club not detected! Please only use this while you have Club open!"),"Dependency not met";if(void 0!==window.CRABS_Loaded)throw alert("CRABS is already detected in current window. To reload, please refresh the window."),"Already loaded";window.CRABS_Loaded=!1,console.debug("CRABS: Parse start..."),function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var exports,bcmodsdk={};exports=bcmodsdk,function(){const o="1.2.0";function e(o){alert("Mod ERROR:\n"+o);const e=new Error(o);throw console.error(e),e}const t=new TextEncoder;function n(o){return!!o&&"object"==typeof o&&!Array.isArray(o)}function r(o){const e=new Set;return o.filter((o=>!e.has(o)&&e.add(o)))}const i=new Map,a=new Set;function c(o){a.has(o)||(a.add(o),console.warn(o))}function s(o){const e=[],t=new Map,n=new Set;for(const r of f.values()){const i=r.patching.get(o.name);if(i){e.push(...i.hooks);for(const[e,a]of i.patches.entries())t.has(e)&&t.get(e)!==a&&c(`ModSDK: Mod '${r.name}' is patching function ${o.name} with same pattern that is already applied by different mod, but with different pattern:\nPattern:\n${e}\nPatch1:\n${t.get(e)||""}\nPatch2:\n${a}`),t.set(e,a),n.add(r.name)}}e.sort(((o,e)=>e.priority-o.priority));const r=function(o,e){if(0===e.size)return o;let t=o.toString().replaceAll("\r\n","\n");for(const[n,r]of e.entries())t.includes(n)||c(`ModSDK: Patching ${o.name}: Patch ${n} not applied`),t=t.replaceAll(n,r);return(0,eval)(`(${t})`)}(o.original,t);let i=function(e){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookChainExit)||void 0===i?void 0:i.call(t,o.name,n),c=r.apply(this,e);return null==a||a(),c};for(let t=e.length-1;t>=0;t--){const n=e[t],r=i;i=function(e){var t,i;const a=null===(i=(t=m.errorReporterHooks).hookEnter)||void 0===i?void 0:i.call(t,o.name,n.mod),c=n.hook.apply(this,[e,o=>{if(1!==arguments.length||!Array.isArray(e))throw new Error(`Mod ${n.mod} failed to call next hook: Expected args to be array, got ${typeof o}`);return r.call(this,o)}]);return null==a||a(),c}}return{hooks:e,patches:t,patchesSources:n,enter:i,final:r}}function l(o,e=!1){let r=i.get(o);if(r)e&&(r.precomputed=s(r));else{let e=window;const a=o.split(".");for(let t=0;t<a.length-1;t++)if(e=e[a[t]],!n(e))throw new Error(`ModSDK: Function ${o} to be patched not found; ${a.slice(0,t+1).join(".")} is not object`);const c=e[a[a.length-1]];if("function"!=typeof c)throw new Error(`ModSDK: Function ${o} to be patched not found`);const l=function(o){let e=-1;for(const n of t.encode(o)){let o=255&(e^n);for(let e=0;e<8;e++)o=1&o?-306674912^o>>>1:o>>>1;e=e>>>8^o}return(~e>>>0).toString(16).padStart(8,"0").toUpperCase()}(c.toString().replaceAll("\r\n","\n")),d={name:o,original:c,originalHash:l};r=Object.assign(Object.assign({},d),{precomputed:s(d),router:()=>{},context:e,contextProperty:a[a.length-1]}),r.router=function(o){return function(...e){return o.precomputed.enter.apply(this,[e])}}(r),i.set(o,r),e[r.contextProperty]=r.router}return r}function d(){for(const o of i.values())o.precomputed=s(o)}function p(){const o=new Map;for(const[e,t]of i)o.set(e,{name:e,original:t.original,originalHash:t.originalHash,sdkEntrypoint:t.router,currentEntrypoint:t.context[t.contextProperty],hookedByMods:r(t.precomputed.hooks.map((o=>o.mod))),patchedByMods:Array.from(t.precomputed.patchesSources)});return o}const f=new Map;function u(o){f.get(o.name)!==o&&e(`Failed to unload mod '${o.name}': Not registered`),f.delete(o.name),o.loaded=!1,d()}function g(o,t){o&&"object"==typeof o||e("Failed to register mod: Expected info object, got "+typeof o),"string"==typeof o.name&&o.name||e("Failed to register mod: Expected name to be non-empty string, got "+typeof o.name);let r=`'${o.name}'`;"string"==typeof o.fullName&&o.fullName||e(`Failed to register mod ${r}: Expected fullName to be non-empty string, got ${typeof o.fullName}`),r=`'${o.fullName} (${o.name})'`,"string"!=typeof o.version&&e(`Failed to register mod ${r}: Expected version to be string, got ${typeof o.version}`),o.repository||(o.repository=void 0),void 0!==o.repository&&"string"!=typeof o.repository&&e(`Failed to register mod ${r}: Expected repository to be undefined or string, got ${typeof o.version}`),null==t&&(t={}),t&&"object"==typeof t||e(`Failed to register mod ${r}: Expected options to be undefined or object, got ${typeof t}`);const i=!0===t.allowReplace,a=f.get(o.name);a&&(a.allowReplace&&i||e(`Refusing to load mod ${r}: it is already loaded and doesn't allow being replaced.\nWas the mod loaded multiple times?`),u(a));const c=o=>{let e=g.patching.get(o.name);return e||(e={hooks:[],patches:new Map},g.patching.set(o.name,e)),e},s=(o,t)=>(...n)=>{var i,a;const c=null===(a=(i=m.errorReporterHooks).apiEndpointEnter)||void 0===a?void 0:a.call(i,o,g.name);g.loaded||e(`Mod ${r} attempted to call SDK function after being unloaded`);const s=t(...n);return null==c||c(),s},p={unload:s("unload",(()=>u(g))),hookFunction:s("hookFunction",((o,t,n)=>{"string"==typeof o&&o||e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);const i=l(o),a=c(i);"number"!=typeof t&&e(`Mod ${r} failed to hook function '${o}': Expected priority number, got ${typeof t}`),"function"!=typeof n&&e(`Mod ${r} failed to hook function '${o}': Expected hook function, got ${typeof n}`);const s={mod:g.name,priority:t,hook:n};return a.hooks.push(s),d(),()=>{const o=a.hooks.indexOf(s);o>=0&&(a.hooks.splice(o,1),d())}})),patchFunction:s("patchFunction",((o,t)=>{"string"==typeof o&&o||e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);const i=l(o),a=c(i);n(t)||e(`Mod ${r} failed to patch function '${o}': Expected patches object, got ${typeof t}`);for(const[n,i]of Object.entries(t))"string"==typeof i?a.patches.set(n,i):null===i?a.patches.delete(n):e(`Mod ${r} failed to patch function '${o}': Invalid format of patch '${n}'`);d()})),removePatches:s("removePatches",(o=>{"string"==typeof o&&o||e(`Mod ${r} failed to patch a function: Expected function name string, got ${typeof o}`);const t=l(o);c(t).patches.clear(),d()})),callOriginal:s("callOriginal",((o,t,n)=>{"string"==typeof o&&o||e(`Mod ${r} failed to call a function: Expected function name string, got ${typeof o}`);const i=l(o);return Array.isArray(t)||e(`Mod ${r} failed to call a function: Expected args array, got ${typeof t}`),i.original.apply(null!=n?n:globalThis,t)})),getOriginalHash:s("getOriginalHash",(o=>("string"==typeof o&&o||e(`Mod ${r} failed to get hash: Expected function name string, got ${typeof o}`),l(o).originalHash)))},g={name:o.name,fullName:o.fullName,version:o.version,repository:o.repository,allowReplace:i,api:p,loaded:!0,patching:new Map};return f.set(o.name,g),Object.freeze(p)}function h(){const o=[];for(const e of f.values())o.push({name:e.name,fullName:e.fullName,version:e.version,repository:e.repository});return o}let m;const y=void 0===window.bcModSdk?window.bcModSdk=function(){const e={version:o,apiVersion:1,registerMod:g,getModsInfo:h,getPatchingInfo:p,errorReporterHooks:Object.seal({apiEndpointEnter:null,hookEnter:null,hookChainExit:null})};return m=e,Object.freeze(e)}():(n(window.bcModSdk)||e("Failed to init Mod SDK: Name already in use"),1!==window.bcModSdk.apiVersion&&e(`Failed to init Mod SDK: Different version already loaded ('1.2.0' vs '${window.bcModSdk.version}')`),window.bcModSdk.version!==o&&alert(`Mod SDK warning: Loading different but compatible versions ('1.2.0' vs '${window.bcModSdk.version}')\nOne of mods you are using is using an old version of SDK. It will work for now but please inform author to update`),window.bcModSdk);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=y}();var bcModSDK=getDefaultExportFromCjs(bcmodsdk);function __awaiter(thisArg,_arguments,P,generator){return new(P||(P=Promise))((function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){var value;result.done?resolve(result.value):(value=result.value,value instanceof P?value:new P((function(resolve){resolve(value)}))).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())}))}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;let CRABS$1=class{constructor(icon_height,icon_width,CRABS){this.ICONS={admin:"icons/admin.svg",vip:"icons/vip.svg",player:"icons/player.svg",you:"icons/you.svg",owner:"icons/owner.svg",sub:"icons/sub.svg",trial:"icons/trial.svg",lover:"icons/lover.svg",bestfriend:"icons/bestfriend.svg",friend:"icons/friends.svg",whitelist:"icons/whitelist.svg",blacklist:"icons/blacklist.svg",ghost:"icons/ghost.svg",thought:"icons/thought.svg"},this.icon_height=0,this.icon_width=0,this.icon_height=icon_height,this.icon_width=icon_width,this.crabs=CRABS,this.modlist=bcModSDK.getModsInfo()}static showPlayerFocus(MemberNumber){const PLAYER=ChatRoomCharacter.find((C=>C.MemberNumber==MemberNumber));PLAYER?(ChatRoomStatusUpdate("Preference"),ChatRoomFocusCharacter(PLAYER)):ChatRoomSendLocal("This person is no longer in the room.")}detectMod(targetmod){return this.modlist.filter((x=>x.name==targetmod)).length>0}printicon(key){let ICON="./icons/error.svg";key in this.ICONS&&(ICON=this.ICONS[key]);let html="";return html+="<img ",html+="height="+this.icon_height+"px' ",html+="width='"+this.icon_width+"px' ",html+="alt='"+key+"' ",html+="src='https://sin-1337.github.io/CRABS/"+ICON+"'",html+=">",html}};class WhisperPlus extends CRABS$1{constructor(icon_height,icon_width,CRABS){super(icon_height,icon_width,CRABS),window.sendWhisper=WhisperPlus.sendWhisper}ChatRoomSendWhisperRanged(target,msg){if(""==msg)return!1;const TARGETMEMEBER="object"==typeof target?target:ChatRoomCharacter.find((C=>C.MemberNumber===parseInt(target)));if(!TARGETMEMEBER)return ChatRoomSendLocalChatRoomSendLocal(`${TextGet("CommandNoWhisperTarget")} ${target}.`,3e4),!1;if(TARGETMEMEBER.MemberNumber===Player.MemberNumber){const SELFMESSAGE=`<span style="color:#989898">${this.printicon("thought")} Note to </span><span style="color:${Player.LabelColor}">self</span><span style="color:#989898">: ${msg}</span>`;return ChatRoomSendLocal(SELFMESSAGE),!1}if(msg=(msg=msg.replace(/\(/g,"❪")).replace(/\)/g,"❫"),target.MemberNumber!=Player.MemberNumber){ChatRoomMapViewIsActive()&&!ChatRoomMapViewCharacterOnWhisperRange(target)&&"("!=msg[0]&&(msg=`(${msg})`);let data=ChatRoomGenerateChatRoomChatMessage("Whisper",`+: ${msg}`);console.log(data),data.Target=target.MemberNumber;const serverData=Object.assign(Object.assign({},data),{Type:"Whisper"});return ServerSend("ChatRoomChat",serverData),data.Sender=Player.MemberNumber,ChatRoomMessage(data),!0}return addChatMessage(msg),!1}static sendWhisper(memberNumber){for(const command of Commands)"whisper+"==command.Tag&&window.CommandSet(command.Tag+" "+memberNumber)}whisperplus(args,command){const MEMBERNUMBER=parseInt(args.slice(0,args.indexOf(" "))),MESSAGE=command.substring(command.indexOf(" ")+MEMBERNUMBER.toString().length+2);if(console.log(MESSAGE),Number.isNaN(MEMBERNUMBER))return ChatRoomSendLocal("Member number is invalid.",3e4),1;if(""==MESSAGE)return ChatRoomSendLocal("Message was blank",3e4),1;const TARGET=ChatRoomCharacter.find((C=>C.MemberNumber==MEMBERNUMBER));return this.ChatRoomSendWhisperRanged(TARGET||MEMBERNUMBER,MESSAGE),0}}window.sendWhisper=WhisperPlus.sendWhisper;class Roster extends CRABS$1{constructor(icon_height,icon_width,CRABS){super(icon_height,icon_width,CRABS),this.onlineFriends=void 0,this.lastSentTime=0,this.loadFriendList(),window.PlayerFocus=Roster.showPlayerFocus}showhelp(){let output=`<table style="width: 100%"><tr><td>\n            <span style=" text-shadow: 0px 0px 3px #000000; white-space: normal;">\n            <hr>\n            CRABS help sheet</br>\n            /roster</br>\n            This command lists the number of admins and players\n            in a room and gives you some informatoin about them </br>\n            \n            /players is deprecated, but still works currently.\n\n            </br>\n            Arguments:\n            <hr>\n            help - show this menu </br>\n            count - show only the player count </br>\n            admins - show only a list of admins and the counts </br>\n            vips - show only room whitelisted and the counts </br>\n\n            </br>\n            Badges:\n            <hr>\n            ${this.printicon("admin")} = Person is Admin</br>\n            ${this.printicon("vip")} = Person is whitelisted in the room </br>\n            ${this.printicon("player")} = Person is a normal user </br>\n\n            </br>\n            Icons:\n            <hr>\n            ${this.printicon("you")} = Person is you </br>\n            ${this.printicon("owner")} = Person is your owner </br>\n            ${this.printicon("sub")} = Person is your submissive </br>\n            ${this.printicon("trial")} = Person is on trial with you </br>\n            ${this.printicon("lover")} = Person is your lover </br>`;return this.detectMod("BCTweaks")&&(output+=`${this.printicon("bestfriend")} = Person is a best friend </br>`),output+=`${this.printicon("friend")} = Person is a friend </br>\n            ${this.printicon("whitelist")} = You have this person whitelisted </br>\n            ${this.printicon("blacklist")} = You have this person blacklisted </br>\n            ${this.printicon("ghost")} = You have ghosted this person </br>\n\n            </br>\n            Actions:\n            <hr>\n            Click Badge - If you click the badge for a player it will be as if you clicked them to interact. </br>\n            Click name - If you click the name/number of a player it will whisper them without range constraints. </br>\n            </span>\n            </td>\n            </tr>\n            </table>`,output}formatoutput(player,badge,player_icons){let output=`<tr>\n                <td style="padding-left: 5px; padding-right-5px; padding-bottom: 1px; padding-top: 0;"><span style="cursor:pointer;" onclick="PlayerFocus(${player.MemberNumber})">${badge}</span></td>`;return output+=`<td style="padding-left: 5px; padding-right-5px; padding-bottom: 1px; padding-top: 0;"><span style="color:${player.LabelColor||"#000000"}; cursor:pointer;\n                font-family: Arial, sans-serif;\n                text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7); white-space: nowrap;"\n                onclick="sendWhisper(${player.MemberNumber})"\n                onmouseover="this.style.textDecoration='underline';"\n                onmouseout="this.style.textDecoration='none';">\n                  ${CharacterNickname(player).normalize("NFKC")}[${player.MemberNumber}]\n              </span>${player_icons}</td>\n          </tr>`,output}loadFriendList(){this.crabs.hookFunction("FriendListLoadFriendList",0,((args,next)=>{const[DATA]=args;return this.onlineFriends=DATA.length,this.lastSentTime=Date.now(),next(args)}))}canSendServerRequest(){const now=Date.now();return now-this.lastSentTime>=6e5&&(this.lastSentTime=now,!0)}getOnlineFriendCount(){return __awaiter(this,void 0,void 0,(function*(){return this.canSendServerRequest()&&(yield ServerSend("AccountQuery",{Query:"OnlineFriends"})),new Promise((resolve=>{const CHECKONLINEFRIENDS=()=>{void 0!==this.onlineFriends?resolve(this.onlineFriends):setTimeout(CHECKONLINEFRIENDS,100)};CHECKONLINEFRIENDS()}))}))}setbadge(player){let badge=this.printicon("player");return badge=ChatRoomData.Whitelist.includes(player.MemberNumber)?this.printicon("vip"):badge,badge=ChatRoomData.Admin.includes(player.MemberNumber)?this.printicon("admin"):badge,badge}setIcons(player){let player_icons="";return Player.OwnerNumber()==player.MemberNumber?player_icons+=this.printicon("owner")+" ":Player.IsInFamilyOfMemberNumber(player.MemberNumber)&&(Player.IsOwnedByPlayer(player.membernumber)?player_icons+=this.printicon("sub")+" ":player_icons+=this.printicon("trial")+" "),Player.GetLoversNumbers().includes(player.MemberNumber)?player_icons+=this.printicon("lover")+" ":this.detectMod("BCTweaks")&&Player.BCT.bctSettings.bestFriendsList.includes(player.MemberNumber)?player_icons+=this.printicon("bestfriend")+" ":Player.FriendList.includes(player.MemberNumber)&&(player_icons+=this.printicon("friend")+" "),Player.WhiteList.includes(player.MemberNumber)?player_icons+=this.printicon("whitelist")+" ":Player.BlackList.includes(player.MemberNumber)&&(player_icons+=this.printicon("blacklist")+" "),Player.GhostList.includes(player.MemberNumber)&&(player_icons+=this.printicon("ghost")+" "),player_icons}checkIfMe(player){return player.MemberNumber==Player.MemberNumber}displayroster(args){var _a,_b;const SPLITARGS=args.split(" ");if("help"==SPLITARGS[0].toLowerCase())return void ChatRoomSendLocal(this.showhelp());let player,MemberNumber,me_output_html="",admin_output_html="",vip_output_html="",player_output_html="",admin_count=0,badge="",player_icons="",showme=!0,showadmins=!0,showvip=!0,showplayers=!0;for(let person in ChatRoomData.Character)if(MemberNumber=ChatRoomData.Character[person].MemberNumber,player=ChatRoomCharacter.find((C=>C.MemberNumber==MemberNumber)),player)if(badge=this.setbadge(player),player_icons=this.setIcons(player),this.checkIfMe(player)&&(player_icons=this.printicon("you")+" "+player_icons,me_output_html=this.formatoutput(player,badge,player_icons)),ChatRoomData.Admin.includes(player.MemberNumber)){if(admin_count++,!this.checkIfMe(player)){admin_output_html+=this.formatoutput(player,badge,player_icons);continue}}else{if(ChatRoomData.Whitelist.includes(player.MemberNumber)&&!this.checkIfMe(player)){vip_output_html+=this.formatoutput(player,badge,player_icons);continue}this.checkIfMe(player)||(player_output_html+=this.formatoutput(player,badge,player_icons))}else player_output_html+="❓ <span style='color:#FF0000'>[Unknown Person]</span>\n";SPLITARGS.some((item=>"count"===item.toLowerCase()))&&(showme=!1,showadmins=!1,showvip=!1,showplayers=!1),SPLITARGS.some((item=>"admins"===item.toLowerCase()))&&(showme=!1,showvip=!1,showplayers=!1),SPLITARGS.some((item=>"vips"===item.toLowerCase()))&&(showme=!1,showadmins=!1,showplayers=!1);let output_html='<hr>\n<div class="CRABS_room-status">\n  \x3c!-- Meta Table --\x3e\n  <div class="CRABS_table-wrapper">\n    <table class="CRABS_room-meta">\n      <thead>\n        <tr>\n          <th>Admins</th>\n          <th>Guests</th>\n          <th>Friends</th>\n          <th>Club</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>{{adminsInRoom}} / {{totalAdmins}}</td>\n          <td>{{playersInRoom}} / {{totalPlayers}}</td>\n          <td>{{friendsOnline}} / {{totalFriends}}</td>\n          <td>{{onlinePlayers}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  \x3c!-- Container for dynamic user tables --\x3e\n  <div class="CRABS_user-tables-container" id="CRABS_userTablesContainer" style="display: none;">\n    \x3c!-- Left Table --\x3e\n    <div class="CRABS_user-table CRABS_left" id="CRABS_leftUserTableContainer">\n      <table class="CRABS_room-users">\n        <tbody id="CRABS_leftUserBody">\n          {{leftUserRows}}\n        </tbody>\n      </table>\n    </div>\n\n    \x3c!-- Right Table (conditionally shown) --\x3e\n    <div class="CRABS_user-table CRABS_right" id="CRABS_rightUserTableContainer" style="display: none;">\n      <table class="CRABS_room-users">\n        <tbody id="CRABS_rightUserBody">\n          {{rightUserRows}}\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<hr>\n'.replace("{{adminsInRoom}}",`${admin_count}`).replace("{{totalAdmins}}",`${ChatRoomData.Admin.length}`).replace("{{playersInRoom}}",`${ChatRoomCharacter.length}`).replace("{{totalPlayers}}",`${ChatRoomData.Limit}`).replace("{{friendsOnline}}",null!==(_b=null===(_a=this.onlineFriends)||void 0===_a?void 0:_a.toString())&&void 0!==_b?_b:"...").replace("{{totalFriends}}",`${Player.FriendNames.size}`).replace("{{onlinePlayers}}",`${CurrentOnlinePlayers}`);output_html+='<table style="border: 0px;">',output_html=showme?output_html+me_output_html:output_html,output_html=showadmins?output_html+admin_output_html:output_html,output_html=showvip?output_html+vip_output_html:output_html,output_html=showplayers?output_html+player_output_html:output_html,output_html+="</table>",ChatRoomSendLocal(output_html)}}const CRABS=bcModSDK.registerMod({name:"CRABS",fullName:"Crazy Roster Add-on By Sin",version:"1.0.0.83 Alpha",repository:"https://github.com/sin-1337/CRABS"}),WHISPERPLUS=new WhisperPlus(25,25,CRABS),ROSTER=new Roster(25,25,CRABS);ChatRoomRegisterMessageHandler({Description:"Send room stats on entry.",Priority:0,Callback:data=>("Action"===data.Type&&"ServerEnter"===data.Content&&data.Sender===Player.MemberNumber&&setTimeout((()=>{if(null===Player.LastChatRoom)return!1;const currentPermissionText=`${TextGetInScope("Screens/Character/InformationSheet/Text_InformationSheet.csv","PermissionLevel"+Player.ItemPermission.toString())} (${Player.ItemPermission})`;ChatRoomSendLocal(`\n                  <hr>\n                  <div style="padding-left: 5px; padding-right-5px; padding-bottom: 1px; padding-top: 0;">\n                    <span style="display: inline; margin: 0; padding: 0; line-height: 1; color: #5BA3E0; font-weight: bold;">Player Item Permission: </span>\n                    <span style="display: inline; margin: 0; padding: 0; line-height: 1; color: ${Player.LabelColor}; font-weight: bold; text-shadow: 0 0 1px black;">${currentPermissionText}</span>\n                    <span style="display: inline; margin: 0; padding: 0; line-height: 1; color: #5BA3E0; font-weight: bold;">&nbsp;</span>\n                  </div>\n                `),ChatRoomSendLocal("<div>Room details for: "+ChatRoomData.Name+"</div>");for(const[_,COMMAND]of Commands.entries())if("players"===COMMAND.Tag){COMMAND.Action("count");break}ChatRoomSendLocal("<div>To see the full roster use /roster</div><hr>")}),3600),!1)}),CommandCombine([{Tag:"whisper+",Description:"Enables the /whisper+ command that does global whisper in a map room",Action:(args,command)=>{WHISPERPLUS.whisperplus(args,command)}}]),CommandCombine([{Tag:"w+",Description:"Enables the /w+ command that does global whisper in a map room",Action:(args,command)=>{WHISPERPLUS.whisperplus(args,command)}}]),CommandCombine([{Tag:"crabs",Description:"Show the player count, helpful in maps.",Action:args=>{ROSTER.displayroster(args)}}]),CommandCombine([{Tag:"roster",Description:"Show the player count, helpful in maps.",Action:args=>{ROSTER.displayroster(args)}}]),CommandCombine([{Tag:"players",Description:"Deprecated: Show the player count, helpful in maps.",Action:args=>{ROSTER.displayroster(args)}}])}();
//# sourceMappingURL=bundle.js.map
