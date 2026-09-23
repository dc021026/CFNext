const _0x40b3d2=_0x150d;(function(_0xaa1e97,_0x316338){const _0x4c9522=_0x150d,_0x367eed=_0xaa1e97();while(!![]){try{const _0x378e1b=-parseInt(_0x4c9522(0x380))/0x1*(-parseInt(_0x4c9522(0x2c3))/0x2)+-parseInt(_0x4c9522(0x3ef))/0x3+parseInt(_0x4c9522(0x289))/0x4*(parseInt(_0x4c9522(0x2ed))/0x5)+parseInt(_0x4c9522(0x3fd))/0x6*(-parseInt(_0x4c9522(0x1e7))/0x7)+parseInt(_0x4c9522(0x412))/0x8*(-parseInt(_0x4c9522(0x432))/0x9)+parseInt(_0x4c9522(0x1e3))/0xa+parseInt(_0x4c9522(0x41d))/0xb;if(_0x378e1b===_0x316338)break;else _0x367eed['push'](_0x367eed['shift']());}catch(_0x3d4d28){_0x367eed['push'](_0x367eed['shift']());}}}(_0x3786,0xe674f));const _0x1f36bd=(function(){let _0x114922=!![];return function(_0x3ef90d,_0x19340b){const _0x17ca30=_0x114922?function(){const _0xbe9b57=_0x150d;if(_0x19340b){const _0x32fda3=_0x19340b[_0xbe9b57(0x3ae)](_0x3ef90d,arguments);return _0x19340b=null,_0x32fda3;}}:function(){};return _0x114922=![],_0x17ca30;};}()),_0x3dd06e=_0x1f36bd(this,function(){const _0x91568a=_0x150d;return _0x3dd06e[_0x91568a(0x3fc)]()[_0x91568a(0x16e)](_0x91568a(0x3af))[_0x91568a(0x3fc)]()['constructor'](_0x3dd06e)[_0x91568a(0x16e)](_0x91568a(0x3af));});_0x3dd06e();const _0x1f376d=(function(){let _0x1a70da=!![];return function(_0x47c8e9,_0x10179c){const _0x527041=_0x1a70da?function(){const _0x169ca1=_0x150d;if(_0x10179c){const _0x3af75b=_0x10179c[_0x169ca1(0x3ae)](_0x47c8e9,arguments);return _0x10179c=null,_0x3af75b;}}:function(){};return _0x1a70da=![],_0x527041;};}()),_0x35aa26=_0x1f376d(this,function(){const _0x1dec28=_0x150d,_0x2b70ca=function(){const _0x395ed2=_0x150d;let _0xf41b9b;try{_0xf41b9b=Function(_0x395ed2(0x246)+_0x395ed2(0x183)+');')();}catch(_0x6e970f){_0xf41b9b=window;}return _0xf41b9b;},_0x154f70=_0x2b70ca(),_0x59e997=_0x154f70[_0x1dec28(0x318)]=_0x154f70[_0x1dec28(0x318)]||{},_0x16fa17=[_0x1dec28(0x3b7),'warn',_0x1dec28(0x3ed),'error','exception',_0x1dec28(0x225),'trace'];for(let _0x262cc8=0x0;_0x262cc8<_0x16fa17['length'];_0x262cc8++){const _0x56c16f=_0x1f376d[_0x1dec28(0x170)][_0x1dec28(0x11e)][_0x1dec28(0x376)](_0x1f376d),_0x1b792=_0x16fa17[_0x262cc8],_0x2717b5=_0x59e997[_0x1b792]||_0x56c16f;_0x56c16f[_0x1dec28(0x372)]=_0x1f376d[_0x1dec28(0x376)](_0x1f376d),_0x56c16f[_0x1dec28(0x3fc)]=_0x2717b5[_0x1dec28(0x3fc)][_0x1dec28(0x376)](_0x2717b5),_0x59e997[_0x1b792]=_0x56c16f;}});_0x35aa26();import{connect}from'cloudflare:sockets';const VERSION=_0x40b3d2(0x3a4),DEPLOY_EDITION='混淆版';function deployKind(){const _0x254560=_0x40b3d2;try{return DEPLOY_EDITION===_0x254560(0x2bc)?_0x254560(0x39f):_0x254560(0x10f);}catch(_0x177d12){return _0x254560(0x10f);}}const UPDATE_REPO='PAICNI/CFNext';let UPDATE_CACHE=null;function parseVer(_0x9427cc){const _0x12efa5=_0x40b3d2,_0x12f62c=String(_0x9427cc||'')[_0x12efa5(0x132)](/(\d+)\.(\d+)\.(\d+)/);return _0x12f62c?[parseInt(_0x12f62c[0x1],0xa),parseInt(_0x12f62c[0x2],0xa),parseInt(_0x12f62c[0x3],0xa)]:null;}function cmpVer(_0x42a079,_0x5524a1){const _0x2d3356=parseVer(_0x42a079),_0x344209=parseVer(_0x5524a1);if(!_0x2d3356||!_0x344209)return 0x0;for(let _0x282d3b=0x0;_0x282d3b<0x3;_0x282d3b++){if(_0x2d3356[_0x282d3b]!==_0x344209[_0x282d3b])return _0x2d3356[_0x282d3b]<_0x344209[_0x282d3b]?-0x1:0x1;}return 0x0;}function extractVersion(_0x1aff34){const _0x2fbed1=_0x40b3d2,_0xc3e5d8=_0x1aff34[_0x2fbed1(0x132)](/const\s+VERSION\s*=\s*['"]([^'"]+)['"]/);return _0xc3e5d8?_0xc3e5d8[0x1]:null;}async function checkUpdate(_0x2fae8f){const _0x34f322=_0x40b3d2,_0x2fde43=Date[_0x34f322(0x25b)]();if(UPDATE_CACHE&&_0x2fde43-UPDATE_CACHE['t']<0xea60)return UPDATE_CACHE['r'];const _0x5438cf=deployKind()===_0x34f322(0x39f)?'混淆':'明文';let _0x5c30a0=null,_0x7fca17='',_0x1c7de8='';const _0x45ae4d=_0x34f322(0x3f2)+UPDATE_REPO+_0x34f322(0x2da)+encodeURIComponent('CFNext\x20明文版.js');try{const _0x106391=await fetch(_0x45ae4d,{'headers':{'User-Agent':_0x34f322(0x253)}});if(_0x106391['ok']){const _0x40cebd=await _0x106391[_0x34f322(0x244)](),_0x1f2a10=extractVersion(_0x40cebd);if(_0x1f2a10)_0x5c30a0=_0x1f2a10;}}catch(_0x2545c0){_0x1c7de8=_0x2545c0&&_0x2545c0['message']||String(_0x2545c0);}if(_0x5c30a0){const _0x54e83c=_0x5438cf==='混淆'?_0x34f322(0x3f3):_0x34f322(0x3d3),_0x90ca6c=_0x34f322(0x3f2)+UPDATE_REPO+'/main/'+encodeURIComponent(_0x54e83c);try{const _0x440ea2=await fetch(_0x90ca6c,{'headers':{'User-Agent':_0x34f322(0x253)}});if(_0x440ea2['ok'])_0x7fca17=await _0x440ea2['text']();}catch(_0x17db59){}return UPDATE_CACHE={'t':_0x2fde43,'r':{'current':VERSION,'kind':_0x5438cf,'latest':_0x5c30a0,'hasUpdate':cmpVer(_0x5c30a0,VERSION)>0x0,'code':_0x7fca17,'checkedAt':_0x2fde43}},UPDATE_CACHE['r'];}const _0x1ea765=_0x34f322(0x3f2)+UPDATE_REPO+_0x34f322(0x2da)+encodeURIComponent(_0x34f322(0x3f3));try{const _0xf4dace=await fetch(_0x1ea765,{'headers':{'User-Agent':'Mozilla/5.0\x20(CFNext)'}});if(_0xf4dace['ok']){const _0x3fefa6=await _0xf4dace[_0x34f322(0x244)](),_0x89cec7=extractVersion(_0x3fefa6);if(_0x89cec7)_0x5c30a0=_0x89cec7;}}catch(_0x1032b5){_0x1c7de8=_0x1032b5&&_0x1032b5[_0x34f322(0x226)]||String(_0x1032b5);}if(_0x5c30a0)return UPDATE_CACHE={'t':_0x2fde43,'r':{'current':VERSION,'kind':_0x5438cf,'latest':_0x5c30a0,'hasUpdate':cmpVer(_0x5c30a0,VERSION)>0x0,'code':'','checkedAt':_0x2fde43}},UPDATE_CACHE['r'];return{'current':VERSION,'kind':_0x5438cf,'latest':null,'hasUpdate':![],'code':'','error':_0x1c7de8||_0x34f322(0x1cd)};}const CLASH_TEMPLATE=_0x40b3d2(0x3db),CLOUDFLARE_CIDRS=[_0x40b3d2(0x3de),_0x40b3d2(0x228),_0x40b3d2(0x27f),_0x40b3d2(0x1d4),'141.101.64.0/18',_0x40b3d2(0x11d),_0x40b3d2(0x31b),_0x40b3d2(0x3a9),_0x40b3d2(0x2a6),'198.41.128.0/17',_0x40b3d2(0x2fa),_0x40b3d2(0x37a),_0x40b3d2(0x403),'172.64.0.0/13',_0x40b3d2(0x145)],REACHABLE_CIDRS=[_0x40b3d2(0x37a),'104.24.0.0/14',_0x40b3d2(0x34d),_0x40b3d2(0x2fa),_0x40b3d2(0x3a9)],CLOUDFLARE_CIDRS_V6=['2400:cb00::/32','2606:4700::/32',_0x40b3d2(0x378),_0x40b3d2(0x16b),_0x40b3d2(0x251),_0x40b3d2(0x249),_0x40b3d2(0x36f)],REACHABLE_CIDRS_V6=[_0x40b3d2(0x3e0),_0x40b3d2(0x1ce),_0x40b3d2(0x378),_0x40b3d2(0x249),_0x40b3d2(0x36f)];let OFFICIAL_V6_CIDRS=CLOUDFLARE_CIDRS_V6['slice'](),OFFICIAL_V6_CIDRS_T=0x0;async function refreshOfficialV6CIDRs(){const _0xca77b5=_0x40b3d2,_0x50d967=Date[_0xca77b5(0x25b)]();if(OFFICIAL_V6_CIDRS_T&&_0x50d967-OFFICIAL_V6_CIDRS_T<0x6*0x3c*0x3c*0x3e8)return;try{const _0x32008c=await fetch(_0xca77b5(0x13b),{'signal':AbortSignal[_0xca77b5(0x16d)](0x2710)});if(!_0x32008c['ok'])return;const _0x37912d=await _0x32008c[_0xca77b5(0x244)](),_0x2b21dc=String(_0x37912d)[_0xca77b5(0x420)]('\x0a')[_0xca77b5(0x114)](_0x5c7b26=>_0x5c7b26[_0xca77b5(0x283)]())[_0xca77b5(0x1b7)](_0x105a46=>/^[0-9a-fA-F:.]+\/\d+$/[_0xca77b5(0x1ee)](_0x105a46)&&_0x105a46['indexOf'](':')>=0x0);_0x2b21dc[_0xca77b5(0x41b)]>=0x3&&(OFFICIAL_V6_CIDRS=_0x2b21dc,OFFICIAL_V6_CIDRS_T=_0x50d967);}catch(_0xc01436){}}function ipInCidrV6(_0x579585,_0x423b9a){const _0xebcc4=_0x40b3d2,[_0x25a6f9,_0x293920]=_0x423b9a[_0xebcc4(0x420)]('/'),_0x38893a=parseInt(_0x293920,0xa),_0x4858f9=_0x47ae5f=>{const _0x26d16c=_0xebcc4,_0x1d352a=_0x47ae5f['indexOf']('::');let _0xa78c01;if(_0x1d352a>=0x0){const _0x350f70=_0x47ae5f[_0x26d16c(0x27e)](0x0,_0x1d352a)[_0x26d16c(0x420)](':')[_0x26d16c(0x1b7)](Boolean),_0x5ab33f=_0x47ae5f[_0x26d16c(0x27e)](_0x1d352a+0x2)[_0x26d16c(0x420)](':')[_0x26d16c(0x1b7)](Boolean),_0x411992=0x8-_0x350f70[_0x26d16c(0x41b)]-_0x5ab33f[_0x26d16c(0x41b)];_0xa78c01=[..._0x350f70,...Array(_0x411992)[_0x26d16c(0x1c6)]('0'),..._0x5ab33f];}else _0xa78c01=_0x47ae5f[_0x26d16c(0x420)](':');return _0xa78c01[_0x26d16c(0x114)](_0x137472=>_0x137472['padStart'](0x4,'0'));},_0x123b7e=_0x2038f6=>_0x2038f6[_0xebcc4(0x114)](_0x41f276=>parseInt(_0x41f276,0x10)[_0xebcc4(0x3fc)](0x2)['padStart'](0x10,'0'))[_0xebcc4(0x40a)]('');return _0x123b7e(_0x4858f9(_0x579585))['slice'](0x0,_0x38893a)===_0x123b7e(_0x4858f9(_0x25a6f9))[_0xebcc4(0x27e)](0x0,_0x38893a);}function isCloudflareIP(_0x54fd33){const _0x2e97f9=_0x40b3d2;_0x54fd33=String(_0x54fd33||'');if(!isValidIp(_0x54fd33))return![];if(_0x54fd33[_0x2e97f9(0x179)](':')>=0x0)return CLOUDFLARE_CIDRS_V6[_0x2e97f9(0x28c)](_0x94bf20=>ipInCidrV6(_0x54fd33,_0x94bf20));const _0x1db1a9=_0x54fd33[_0x2e97f9(0x420)]('.')[_0x2e97f9(0x114)](Number),_0x1502e7=(_0x1db1a9[0x0]<<0x18|_0x1db1a9[0x1]<<0x10|_0x1db1a9[0x2]<<0x8|_0x1db1a9[0x3])>>>0x0;return CLOUDFLARE_RANGES['some'](([_0x4cc141,_0xdcbd58])=>_0x1502e7>=_0x4cc141&&_0x1502e7<=_0xdcbd58);}const REGION_CN={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':_0x40b3d2(0x29f),'US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':_0x40b3d2(0x383),'AU':_0x40b3d2(0x36a),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':'意大利','ES':_0x40b3d2(0x23a),'PT':_0x40b3d2(0x3d9),'IE':_0x40b3d2(0x209),'BE':_0x40b3d2(0x390),'AT':'奥地利','PL':'波兰','CZ':'捷克','RO':_0x40b3d2(0x392),'HU':'匈牙利','GR':'希腊','RU':_0x40b3d2(0x150),'TR':_0x40b3d2(0x272),'UA':_0x40b3d2(0x2c5),'IN':'印度','TH':'泰国','MY':_0x40b3d2(0x416),'VN':'越南','PH':'菲律宾','ID':'印尼','BR':'巴西','MX':_0x40b3d2(0x322),'AR':_0x40b3d2(0x1ed),'CL':'智利','ZA':'南非','EG':'埃及','AE':_0x40b3d2(0x42e),'IL':_0x40b3d2(0x1a7),'NZ':'新西兰','KZ':_0x40b3d2(0x1bd),'SA':'沙特'},DEFAULT_REGION_POOLS=[_0x40b3d2(0x2e0),_0x40b3d2(0x35f),_0x40b3d2(0x37e),_0x40b3d2(0x349),'https://bestcf.pages.dev/random-region/US/100.txt',_0x40b3d2(0x405)][_0x40b3d2(0x40a)]('\x0a'),TRUSTED_REGION_POOL_RE=/random-region\/[A-Z]{2,}\/\d+\.txt/i;function isTrustedRegionPool(_0x4287ab){const _0x4fbfae=_0x40b3d2;return TRUSTED_REGION_POOL_RE[_0x4fbfae(0x1ee)](String(_0x4287ab||''));}const DEFAULT_CONFIG={'uuid':'','path':'','admin':'','host':'','enableVless':!![],'enableTrojan':![],'trojanPassword':'','enableXhttp':![],'alpn':'','ech':![],'echHost':_0x40b3d2(0x3e7),'echDns':'','tlsOnly':![],'nodeLimit':!![],'nodeLimitCount':0x1f4,'polling':![],'probeAlive':!![],'cfAccountId':'','cfApiToken':'','quotaAuto':![],'proxyIP':'','outboundProxy':'','outboundMode':'','preferredDomains':'https://bestcf.pages.dev/random-region/HK/100.txt\x0ahttps://bestcf.pages.dev/random-region/TW/100.txt\x0ahttps://bestcf.pages.dev/random-region/JP/100.txt\x0ahttps://bestcf.pages.dev/random-region/SG/100.txt\x0ahttps://bestcf.pages.dev/random-region/US/100.txt\x0ahttps://bestcf.pages.dev/random-region/KR/100.txt','preferredIPs':[],'optimizer':{'source':'wetest_v4','sourceURL':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!![],'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':![]},'filter':{'region':'all','ipType':[_0x40b3d2(0x1d2),'IPv6'],'isp':['移动','联通','电信']}},BUILTIN_OFFICIAL_DOMAINS=[_0x40b3d2(0x1b0),'www.cloudflare.com',_0x40b3d2(0x21f)],BUILTIN_STABLE_IPS=['104.16.128.11',_0x40b3d2(0x26f),'104.17.201.77',_0x40b3d2(0x370),_0x40b3d2(0x1d1),_0x40b3d2(0x3ab),'104.17.2.7',_0x40b3d2(0x174),_0x40b3d2(0x191),'104.18.7.34','104.19.191.31','104.19.1.1',_0x40b3d2(0x1d9),_0x40b3d2(0x1ab),_0x40b3d2(0x45b),_0x40b3d2(0x3da),'104.24.12.10',_0x40b3d2(0x379),_0x40b3d2(0x367),_0x40b3d2(0x2a9)],BESTCF_REGION_URLS=[{'label':'香港','region':'HK','url':_0x40b3d2(0x2e0),'count':0xc},{'label':'日本','region':'JP','url':_0x40b3d2(0x37e),'count':0xc},{'label':'美国','region':'US','url':_0x40b3d2(0x2d3),'count':0xc},{'label':'新加坡','region':'SG','url':'https://bestcf.pages.dev/random-region/SG/100.txt','count':0xc},{'label':'台湾','region':'TW','url':_0x40b3d2(0x35f),'count':0xc}],BUILTIN_PREFERRED_IPS=[_0x40b3d2(0x1bf),_0x40b3d2(0x263),_0x40b3d2(0x396),_0x40b3d2(0x3ff),'104.16.126.96#优选IP-005',_0x40b3d2(0x3ad),_0x40b3d2(0x232),'104.16.248.248#优选IP-008',_0x40b3d2(0x2c1),_0x40b3d2(0x423),_0x40b3d2(0x117),_0x40b3d2(0x287),'188.114.99.52#优选IP-013',_0x40b3d2(0x35a),_0x40b3d2(0x368),_0x40b3d2(0x26d),_0x40b3d2(0x353),_0x40b3d2(0x3df),_0x40b3d2(0x258),_0x40b3d2(0x45a),'172.67.64.12#优选IP-021',_0x40b3d2(0x115),_0x40b3d2(0x17d),_0x40b3d2(0x336),_0x40b3d2(0x213),_0x40b3d2(0x28d),_0x40b3d2(0x1e4),'172.64.146.15#优选IP-028','104.17.185.207#优选IP-029','104.17.101.139#优选IP-030',_0x40b3d2(0x2bd),'162.159.44.214#优选IP-032',_0x40b3d2(0x38c),_0x40b3d2(0x227),_0x40b3d2(0x419),'162.159.137.205#优选IP-036',_0x40b3d2(0x204),_0x40b3d2(0x210),_0x40b3d2(0x361),_0x40b3d2(0x1a3),_0x40b3d2(0x410),_0x40b3d2(0x431),_0x40b3d2(0x208),_0x40b3d2(0x2ca),_0x40b3d2(0x277),'188.114.98.144#优选IP-046',_0x40b3d2(0x42d),_0x40b3d2(0x1d7),'162.159.4.175#优选IP-049',_0x40b3d2(0x3f6),_0x40b3d2(0x3f0),_0x40b3d2(0x461),_0x40b3d2(0x2fd),'188.114.96.116#优选IP-054',_0x40b3d2(0x1e5),_0x40b3d2(0x131),'104.25.101.186#优选IP-057',_0x40b3d2(0x10a),_0x40b3d2(0x1e1),_0x40b3d2(0x238),_0x40b3d2(0x38f),_0x40b3d2(0x126),'104.27.40.81#优选IP-063',_0x40b3d2(0x177),_0x40b3d2(0x341),_0x40b3d2(0x42a),'162.159.46.167#优选IP-067','104.18.84.180#优选IP-068','104.18.196.199#优选IP-069','104.24.155.234#优选IP-070',_0x40b3d2(0x417),'162.159.235.27#优选IP-072',_0x40b3d2(0x12c),'104.19.168.107#优选IP-074',_0x40b3d2(0x20d),_0x40b3d2(0x35e),'104.24.2.253#优选IP-077',_0x40b3d2(0x11f),_0x40b3d2(0x286),_0x40b3d2(0x12f),_0x40b3d2(0x2bf),_0x40b3d2(0x3a7),_0x40b3d2(0x125),_0x40b3d2(0x34a),_0x40b3d2(0x196),_0x40b3d2(0x31f),_0x40b3d2(0x1fa),'172.64.145.202#优选IP-088','104.19.78.30#优选IP-089',_0x40b3d2(0x3d5),'104.17.13.179#优选IP-091','172.65.35.169#优选IP-092',_0x40b3d2(0x29c),_0x40b3d2(0x1c7),_0x40b3d2(0x3d2),_0x40b3d2(0x453),'104.24.58.243#优选IP-097',_0x40b3d2(0x2b9),_0x40b3d2(0x279),_0x40b3d2(0x3cf),'104.27.113.151#优选IP-101','104.24.230.144#优选IP-102',_0x40b3d2(0x153),_0x40b3d2(0x11c),_0x40b3d2(0x360),'104.16.108.18#优选IP-106','172.64.233.36#优选IP-107',_0x40b3d2(0x2f3),_0x40b3d2(0x1b1),_0x40b3d2(0x21e),'104.27.72.4#优选IP-111','104.21.57.47#优选IP-112',_0x40b3d2(0x38e),'172.67.255.83#优选IP-114',_0x40b3d2(0x18c),_0x40b3d2(0x39a),_0x40b3d2(0x404),'172.67.103.87#优选IP-118',_0x40b3d2(0x3d7),_0x40b3d2(0x241),_0x40b3d2(0x1fb),_0x40b3d2(0x3e4),'104.24.184.158#优选IP-123',_0x40b3d2(0x2cd),_0x40b3d2(0x288),_0x40b3d2(0x2db),_0x40b3d2(0x342),_0x40b3d2(0x176),_0x40b3d2(0x268),_0x40b3d2(0x15f),_0x40b3d2(0x26c),_0x40b3d2(0x17b),_0x40b3d2(0x3ba),_0x40b3d2(0x223),_0x40b3d2(0x302),_0x40b3d2(0x42f),_0x40b3d2(0x413),'104.24.51.58#优选IP-138',_0x40b3d2(0x445),_0x40b3d2(0x261),_0x40b3d2(0x37d),_0x40b3d2(0x1e2),_0x40b3d2(0x1a6),_0x40b3d2(0x242),_0x40b3d2(0x3b2),'188.114.96.141#优选IP-146','104.19.247.23#优选IP-147',_0x40b3d2(0x2f1),_0x40b3d2(0x32b),_0x40b3d2(0x27a),_0x40b3d2(0x3ee),_0x40b3d2(0x27c),'104.16.68.175#优选IP-153',_0x40b3d2(0x24e),_0x40b3d2(0x167),_0x40b3d2(0x362),'162.159.143.225#优选IP-157',_0x40b3d2(0x17e),_0x40b3d2(0x32e),_0x40b3d2(0x317),_0x40b3d2(0x21a),'172.67.82.86#优选IP-162','104.16.11.246#优选IP-163',_0x40b3d2(0x2e3),'104.17.240.245#优选IP-165','172.66.157.150#优选IP-166',_0x40b3d2(0x321),'104.18.26.28#优选IP-168',_0x40b3d2(0x33a),'104.25.124.155#优选IP-170',_0x40b3d2(0x255),_0x40b3d2(0x39d),_0x40b3d2(0x1dd),_0x40b3d2(0x3fa),_0x40b3d2(0x202),_0x40b3d2(0x166),'104.25.251.220#优选IP-177',_0x40b3d2(0x316),_0x40b3d2(0x22b),_0x40b3d2(0x45f),_0x40b3d2(0x43a),_0x40b3d2(0x31d),_0x40b3d2(0x332),_0x40b3d2(0x12d),'104.18.63.107#优选IP-185','104.19.69.150#优选IP-186',_0x40b3d2(0x2af),_0x40b3d2(0x275),_0x40b3d2(0x386),_0x40b3d2(0x1aa),_0x40b3d2(0x201),_0x40b3d2(0x168),'104.18.211.8#优选IP-193',_0x40b3d2(0x359),_0x40b3d2(0x148),_0x40b3d2(0x199),_0x40b3d2(0x293),_0x40b3d2(0x41e),'162.159.6.246#优选IP-199',_0x40b3d2(0x436),_0x40b3d2(0x3f4),'188.114.97.80#优选IP-202','188.114.97.108#优选IP-203',_0x40b3d2(0x22a),_0x40b3d2(0x393),_0x40b3d2(0x3b9),_0x40b3d2(0x1df),_0x40b3d2(0x155),'104.25.181.74#优选IP-209',_0x40b3d2(0x3c1),_0x40b3d2(0x1ac),_0x40b3d2(0x2f0),_0x40b3d2(0x122),_0x40b3d2(0x16f),_0x40b3d2(0x40b),_0x40b3d2(0x203),_0x40b3d2(0x406),_0x40b3d2(0x3bf),_0x40b3d2(0x2a2),_0x40b3d2(0x221),_0x40b3d2(0x2e6),_0x40b3d2(0x15a),_0x40b3d2(0x428),_0x40b3d2(0x346),'172.65.118.105#优选IP-225',_0x40b3d2(0x344),_0x40b3d2(0x1a9),'104.18.194.107#优选IP-228',_0x40b3d2(0x1b2),'162.159.9.18#优选IP-230',_0x40b3d2(0x452),_0x40b3d2(0x308),_0x40b3d2(0x14c),'104.17.0.4#优选IP-234',_0x40b3d2(0x355),_0x40b3d2(0x1bb),_0x40b3d2(0x1c9),_0x40b3d2(0x3e5),_0x40b3d2(0x299),_0x40b3d2(0x3a0),_0x40b3d2(0x3e2),_0x40b3d2(0x1b9),_0x40b3d2(0x21c),_0x40b3d2(0x28e),_0x40b3d2(0x1e8),_0x40b3d2(0x147),_0x40b3d2(0x267),_0x40b3d2(0x426),_0x40b3d2(0x13c),_0x40b3d2(0x414),_0x40b3d2(0x3e9),_0x40b3d2(0x415),'162.159.90.82#优选IP-253','172.65.50.167#优选IP-254',_0x40b3d2(0x2ae),_0x40b3d2(0x19d),'104.17.151.244#优选IP-257','104.17.121.245#优选IP-258',_0x40b3d2(0x395),'162.159.228.231#优选IP-260',_0x40b3d2(0x44a),_0x40b3d2(0x36c),_0x40b3d2(0x137),'104.20.17.160#优选IP-264','104.25.62.39#优选IP-265',_0x40b3d2(0x26e),_0x40b3d2(0x3ea),'104.19.83.33#优选IP-268','188.114.96.238#优选IP-269','162.159.42.67#优选IP-270',_0x40b3d2(0x402),_0x40b3d2(0x2dd),_0x40b3d2(0x3d6),_0x40b3d2(0x40f),_0x40b3d2(0x30b),_0x40b3d2(0x108),_0x40b3d2(0x324),_0x40b3d2(0x460),'104.24.34.149#优选IP-279',_0x40b3d2(0x25e),'162.159.10.243#优选IP-281','104.27.96.232#优选IP-282','172.65.78.200#优选IP-283',_0x40b3d2(0x29e),_0x40b3d2(0x3a3),_0x40b3d2(0x195),'104.16.45.249#优选IP-287',_0x40b3d2(0x26a),'104.24.18.62#优选IP-289',_0x40b3d2(0x230),_0x40b3d2(0x408),_0x40b3d2(0x32d),'162.159.43.85#优选IP-293','172.67.71.106#优选IP-294',_0x40b3d2(0x142),_0x40b3d2(0x296),_0x40b3d2(0x35c),_0x40b3d2(0x351),'104.24.49.39#优选IP-299',_0x40b3d2(0x305)],DEFAULT_PREFERRED_DOMAINS=[_0x40b3d2(0x194),_0x40b3d2(0x1a4),'freeyx.cloudflare88.eu.org',_0x40b3d2(0x2ad),_0x40b3d2(0x14e),_0x40b3d2(0x1f8),_0x40b3d2(0x352),_0x40b3d2(0x160),_0x40b3d2(0x26b),_0x40b3d2(0x2b3),_0x40b3d2(0x3c7),_0x40b3d2(0x1b6),'cnamefuckxxs.yuchen.icu',_0x40b3d2(0x3be),_0x40b3d2(0x33e),_0x40b3d2(0x2ec),_0x40b3d2(0x41a),_0x40b3d2(0x30a),'cdn.tzpro.xyz','cf.877771.xyz',_0x40b3d2(0x40c),_0x40b3d2(0x1cf),_0x40b3d2(0x1e0),_0x40b3d2(0x463),_0x40b3d2(0x3f9)][_0x40b3d2(0x40a)]('\x0a'),HTTP_PORTS=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),OPTIMIZE_SOURCES={'wetest_v4':{'label':_0x40b3d2(0x18f),'url':_0x40b3d2(0x16a)},'wetest_v6':{'label':_0x40b3d2(0x44d),'url':_0x40b3d2(0x23d)},'bestcf':{'label':'优选\x20IP\x20列表','url':'https://cf.090227.xyz/ip.164746.xyz'},'hostmonit':{'label':_0x40b3d2(0x1f5),'url':'https://stock.hostmonit.com/CloudFlareYes'},'wetest_cname':{'label':'微测网\x20优选域名','url':_0x40b3d2(0x435)}},TE=new TextEncoder(),TD=new TextDecoder();function b64FromBytes(_0x4ac976){const _0xdbc1b9=_0x40b3d2;let _0xb6a25f='';const _0x28bd7f=0x8000;for(let _0x5e60c5=0x0;_0x5e60c5<_0x4ac976['length'];_0x5e60c5+=_0x28bd7f){_0xb6a25f+=String['fromCharCode'](..._0x4ac976[_0xdbc1b9(0x398)](_0x5e60c5,_0x5e60c5+_0x28bd7f));}return btoa(_0xb6a25f);}const MD5_S=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],MD5_K=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function rotl32(_0x2aee3a,_0x56e3e7){return(_0x2aee3a<<_0x56e3e7|_0x2aee3a>>>0x20-_0x56e3e7)>>>0x0;}function md5hex(_0x52ea01){const _0x12f1c7=_0x40b3d2,_0x53b498=TE['encode'](String(_0x52ea01)),_0x46770c=_0x53b498['length']*0x8,_0x4174eb=(_0x53b498[_0x12f1c7(0x41b)]+0x8>>0x6)+0x1<<0x6,_0x529c54=new Uint8Array(_0x4174eb);_0x529c54['set'](_0x53b498),_0x529c54[_0x53b498[_0x12f1c7(0x41b)]]=0x80;const _0x4b2576=new DataView(_0x529c54[_0x12f1c7(0x215)]);_0x4b2576[_0x12f1c7(0x409)](_0x4174eb-0x8,_0x46770c>>>0x0,!![]),_0x4b2576[_0x12f1c7(0x409)](_0x4174eb-0x4,Math[_0x12f1c7(0x239)](_0x46770c/0x100000000),!![]);let _0x19f216=0x67452301,_0x2e17bf=0xefcdab89,_0x191d7c=0x98badcfe,_0x255ebc=0x10325476;for(let _0x1c86cf=0x0;_0x1c86cf<_0x4174eb;_0x1c86cf+=0x40){const _0xa1078c=new Uint32Array(0x10);for(let _0x1bb9ba=0x0;_0x1bb9ba<0x10;_0x1bb9ba++)_0xa1078c[_0x1bb9ba]=_0x4b2576[_0x12f1c7(0x34e)](_0x1c86cf+_0x1bb9ba*0x4,!![]);let _0x49dd9a=_0x19f216,_0x150947=_0x2e17bf,_0x4f7dbd=_0x191d7c,_0x323ca9=_0x255ebc;for(let _0x195560=0x0;_0x195560<0x40;_0x195560++){let _0x3b0222,_0xf55199;if(_0x195560<0x10)_0x3b0222=_0x150947&_0x4f7dbd|~_0x150947&_0x323ca9,_0xf55199=_0x195560;else{if(_0x195560<0x20)_0x3b0222=_0x323ca9&_0x150947|~_0x323ca9&_0x4f7dbd,_0xf55199=(0x5*_0x195560+0x1)%0x10;else _0x195560<0x30?(_0x3b0222=_0x150947^_0x4f7dbd^_0x323ca9,_0xf55199=(0x3*_0x195560+0x5)%0x10):(_0x3b0222=_0x4f7dbd^(_0x150947|~_0x323ca9),_0xf55199=0x7*_0x195560%0x10);}const _0x47337f=_0x49dd9a+_0x3b0222+MD5_K[_0x195560]+_0xa1078c[_0xf55199]>>>0x0,_0x4c5276=_0x150947+rotl32(_0x47337f,MD5_S[_0x195560])>>>0x0;_0x49dd9a=_0x323ca9,_0x323ca9=_0x4f7dbd,_0x4f7dbd=_0x150947,_0x150947=_0x4c5276;}_0x19f216=_0x19f216+_0x49dd9a>>>0x0,_0x2e17bf=_0x2e17bf+_0x150947>>>0x0,_0x191d7c=_0x191d7c+_0x4f7dbd>>>0x0,_0x255ebc=_0x255ebc+_0x323ca9>>>0x0;}let _0x439793='';for(const _0x4eafb9 of[_0x19f216,_0x2e17bf,_0x191d7c,_0x255ebc]){_0x439793+=(_0x4eafb9&0xff)[_0x12f1c7(0x3fc)](0x10)[_0x12f1c7(0x30e)](0x2,'0'),_0x439793+=(_0x4eafb9>>>0x8&0xff)[_0x12f1c7(0x3fc)](0x10)['padStart'](0x2,'0'),_0x439793+=(_0x4eafb9>>>0x10&0xff)[_0x12f1c7(0x3fc)](0x10)[_0x12f1c7(0x30e)](0x2,'0'),_0x439793+=(_0x4eafb9>>>0x18&0xff)[_0x12f1c7(0x3fc)](0x10)[_0x12f1c7(0x30e)](0x2,'0');}return _0x439793;}function uuidv4(){const _0x1c416d=_0x40b3d2;if(crypto[_0x1c416d(0x298)])return crypto['randomUUID']();const _0x3b1543=crypto['getRandomValues'](new Uint8Array(0x10));return _0x3b1543[0x6]=_0x3b1543[0x6]&0xf|0x40,_0x3b1543[0x8]=_0x3b1543[0x8]&0x3f|0x80,[..._0x3b1543]['map']((_0x23c400,_0x2169bf)=>(_0x2169bf===0x4||_0x2169bf===0x6||_0x2169bf===0x8||_0x2169bf===0xa?'-':'')+_0x23c400[_0x1c416d(0x3fc)](0x10)['padStart'](0x2,'0'))[_0x1c416d(0x40a)]('');}function isUUID(_0x5714f5){const _0x5356d0=_0x40b3d2;return/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[_0x5356d0(0x1ee)](_0x5714f5||'');}function parseHostPort(_0x5b23ca,_0x361c03=0x1bb){const _0x138ee0=_0x40b3d2;_0x5b23ca=String(_0x5b23ca||'')['trim']();if(!_0x5b23ca)return{'host':'','port':_0x361c03};if(_0x5b23ca[_0x138ee0(0x371)]('[')){const _0x4702ab=_0x5b23ca['match'](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':_0x4702ab?_0x4702ab[0x1]:_0x5b23ca[_0x138ee0(0x3c2)](/^\[|\]$/g,''),'port':_0x4702ab&&_0x4702ab[0x2]?parseInt(_0x4702ab[0x2]):_0x361c03};}const _0x1743dc=_0x5b23ca[_0x138ee0(0x37f)](':');if(_0x1743dc>0x0&&/^\d+$/[_0x138ee0(0x1ee)](_0x5b23ca[_0x138ee0(0x27e)](_0x1743dc+0x1)))return{'host':_0x5b23ca['slice'](0x0,_0x1743dc),'port':parseInt(_0x5b23ca[_0x138ee0(0x27e)](_0x1743dc+0x1))};return{'host':_0x5b23ca,'port':_0x361c03};}function isValidIp(_0x13d7f1){const _0x589ad4=_0x40b3d2;_0x13d7f1=String(_0x13d7f1||'')[_0x589ad4(0x283)]();if(!_0x13d7f1)return![];const _0x5afc66=_0x13d7f1[_0x589ad4(0x132)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(_0x5afc66)return _0x5afc66[_0x589ad4(0x27e)](0x1)[_0x589ad4(0x1a0)](_0x2a889f=>Number(_0x2a889f)<=0xff);if(!/^[0-9a-fA-F:]+$/['test'](_0x13d7f1))return![];if((_0x13d7f1[_0x589ad4(0x132)](/::/g)||[])[_0x589ad4(0x41b)]>0x1)return![];const _0x20ca72=_0x13d7f1[_0x589ad4(0x269)]('::'),_0x8bc18b=_0x13d7f1[_0x589ad4(0x3c2)](/::/g,':')['split'](':')[_0x589ad4(0x1b7)](Boolean);if(!_0x20ca72&&_0x8bc18b[_0x589ad4(0x41b)]!==0x8)return![];if(_0x20ca72&&(_0x8bc18b[_0x589ad4(0x41b)]<0x1||_0x8bc18b[_0x589ad4(0x41b)]>0x7))return![];return _0x8bc18b['every'](_0x12b1b0=>/^[0-9a-fA-F]{1,4}$/[_0x589ad4(0x1ee)](_0x12b1b0));}function formatIPv6(_0x180df7){const _0x2d5274=_0x40b3d2,_0x3b8b9d=[];for(let _0xf62f94=0x0;_0xf62f94<0x10;_0xf62f94+=0x2)_0x3b8b9d['push']((_0x180df7[_0xf62f94]<<0x8|_0x180df7[_0xf62f94+0x1])['toString'](0x10));let _0x3be11b=-0x1,_0x440598=0x0,_0x1ff1c3=-0x1,_0x4357e3=0x0;for(let _0x197e34=0x0;_0x197e34<0x8;_0x197e34++){if(_0x3b8b9d[_0x197e34]==='0'){if(_0x1ff1c3<0x0)_0x1ff1c3=_0x197e34,_0x4357e3=0x1;else _0x4357e3++;_0x4357e3>_0x440598&&(_0x440598=_0x4357e3,_0x3be11b=_0x1ff1c3);}else _0x1ff1c3=-0x1,_0x4357e3=0x0;}if(_0x440598>=0x2){const _0x353553=_0x3b8b9d[_0x2d5274(0x27e)](0x0,_0x3be11b)[_0x2d5274(0x40a)](':'),_0x18f337=_0x3b8b9d[_0x2d5274(0x27e)](_0x3be11b+_0x440598)[_0x2d5274(0x40a)](':');return(_0x353553?_0x353553+'::':'::')+_0x18f337;}return _0x3b8b9d[_0x2d5274(0x40a)](':');}function cidrToRange(_0x580ff7){const _0x149a58=_0x40b3d2,[_0x149da1,_0x22bf4d]=_0x580ff7[_0x149a58(0x420)]('/'),_0x4d37a6=_0x149da1[_0x149a58(0x420)]('.')[_0x149a58(0x114)](Number),_0x4b02d3=(_0x4d37a6[0x0]<<0x18|_0x4d37a6[0x1]<<0x10|_0x4d37a6[0x2]<<0x8|_0x4d37a6[0x3])>>>0x0,_0x389c64=_0x22bf4d>=0x20?0x0:0xffffffff<<0x20-_0x22bf4d>>>0x0,_0x59c612=(_0x4b02d3&_0x389c64)>>>0x0,_0x35fc87=(_0x4b02d3|~_0x389c64>>>0x0)>>>0x0;return[_0x59c612,_0x35fc87];}const CLOUDFLARE_RANGES=CLOUDFLARE_CIDRS[_0x40b3d2(0x114)](cidrToRange),_rangeCache=new Map();function cidrRangeCached(_0x5c71b0){const _0x65e5e8=_0x40b3d2;let _0x4f2562=_rangeCache[_0x65e5e8(0x335)](_0x5c71b0);return!_0x4f2562&&(_0x4f2562=cidrToRange(_0x5c71b0),_rangeCache[_0x65e5e8(0x2cb)](_0x5c71b0,_0x4f2562)),_0x4f2562;}function randomIPFromCidr(_0x4516bb){const _0x9f1e18=_0x40b3d2;if(String(_0x4516bb)['indexOf'](':')>=0x0)return randomIP6FromCidr(_0x4516bb);const [_0x493dec,_0x2b8e1b]=cidrRangeCached(_0x4516bb),_0x1d3b5a=_0x493dec+Math[_0x9f1e18(0x239)](Math['random']()*(_0x2b8e1b-_0x493dec>>>0x0));return(_0x1d3b5a>>>0x18&0xff)+'.'+(_0x1d3b5a>>>0x10&0xff)+'.'+(_0x1d3b5a>>>0x8&0xff)+'.'+(_0x1d3b5a&0xff);}function randomIP6FromCidr(_0x2084be){const _0x29870c=_0x40b3d2,[_0x2fa3de,_0x2e3cc7]=_0x2084be[_0x29870c(0x420)]('/'),_0x3024b1=parseInt(_0x2e3cc7,0xa)||0x0,_0x572978=_0x73d9dc=>{const _0x354cc9=_0x29870c,_0xd47a1c=_0x73d9dc[_0x354cc9(0x179)]('::');let _0x36fd02;if(_0xd47a1c>=0x0){const _0x46fd19=_0x73d9dc[_0x354cc9(0x27e)](0x0,_0xd47a1c)['split'](':')['filter'](Boolean),_0x38b4c3=_0x73d9dc[_0x354cc9(0x27e)](_0xd47a1c+0x2)[_0x354cc9(0x420)](':')[_0x354cc9(0x1b7)](Boolean),_0x5998cd=0x8-_0x46fd19[_0x354cc9(0x41b)]-_0x38b4c3[_0x354cc9(0x41b)];_0x36fd02=[..._0x46fd19,...Array(_0x5998cd)['fill']('0'),..._0x38b4c3];}else _0x36fd02=_0x73d9dc['split'](':');return _0x36fd02['map'](_0x2efccc=>_0x2efccc['padStart'](0x4,'0'));},_0x484a04=_0x572978(_0x2fa3de)[_0x29870c(0x114)](_0x4e5148=>parseInt(_0x4e5148,0x10));let _0x3a9bda=0x0;for(let _0x4d4f95=0x0;_0x4d4f95<0x8;_0x4d4f95++)for(let _0x893afe=0xf;_0x893afe>=0x0;_0x893afe--){if(_0x3a9bda>=_0x3024b1)_0x484a04[_0x4d4f95]|=(Math['random']()<0.5?0x1:0x0)<<_0x893afe;_0x3a9bda++;}return _0x484a04[_0x29870c(0x114)](_0x6b02b2=>_0x6b02b2[_0x29870c(0x3fc)](0x10))[_0x29870c(0x40a)](':');}function ipv4ToEmbeddedV6(_0x29d6bd){const _0x539364=_0x40b3d2,_0x52cf05=String(_0x29d6bd||'')[_0x539364(0x420)]('.')[_0x539364(0x114)](_0x1502f3=>parseInt(_0x1502f3,0xa)[_0x539364(0x3fc)](0x10)[_0x539364(0x30e)](0x2,'0'));if(_0x52cf05[_0x539364(0x41b)]!==0x4||_0x52cf05[_0x539364(0x28c)](_0x5de843=>_0x5de843===_0x539364(0x256)))return null;return _0x539364(0x1a5)+_0x52cf05[0x0]+_0x52cf05[0x1]+':'+_0x52cf05[0x2]+_0x52cf05[0x3];}function randomIPsFromCidrs(_0x373ef4,_0x2028fa){const _0x2ef4ce=_0x40b3d2,_0x41a51b=new Set(),_0x2100e9=[];let _0xba8584=0x0;while(_0x2100e9['length']<_0x2028fa&&_0xba8584++<_0x2028fa*0x14){const _0x107bc3=randomIPFromCidr(_0x373ef4[Math[_0x2ef4ce(0x239)](Math[_0x2ef4ce(0x2d1)]()*_0x373ef4[_0x2ef4ce(0x41b)])]);!_0x41a51b[_0x2ef4ce(0x314)](_0x107bc3)&&(_0x41a51b[_0x2ef4ce(0x121)](_0x107bc3),_0x2100e9[_0x2ef4ce(0x32a)](_0x107bc3));}return _0x2100e9;}function parseIPList(_0x32faca){const _0xd61755=_0x40b3d2,_0x3b4a10=[],_0x112f47=new Set();return String(_0x32faca||'')[_0xd61755(0x420)](/[\n,;]+/)[_0xd61755(0x114)](_0x121ad0=>_0x121ad0[_0xd61755(0x283)]())[_0xd61755(0x1b7)](Boolean)['forEach'](_0x2c98e9=>{const _0x58ec30=_0xd61755;let _0x512af6='';if(_0x2c98e9[_0x58ec30(0x269)]('#')){const [_0xee8eff,_0x157fd7]=_0x2c98e9[_0x58ec30(0x420)]('#');_0x2c98e9=_0xee8eff,_0x512af6=_0x157fd7;}const {host:_0x276521,port:_0x577e78}=parseHostPort(_0x2c98e9,0x1bb);_0x276521&&isValidIp(_0x276521)&&!_0x112f47[_0x58ec30(0x314)](_0x276521)&&(_0x112f47['add'](_0x276521),_0x3b4a10[_0x58ec30(0x32a)]({'ip':_0x276521,'port':_0x577e78,'name':_0x512af6}));}),_0x3b4a10;}function parseProxyAddress(_0x428cd6){const _0x26c870=_0x40b3d2;if(!_0x428cd6)return null;let _0x325ad0=_0x26c870(0x127),_0x2ab9ce=String(_0x428cd6)[_0x26c870(0x283)]();const _0x46a61f=_0x2ab9ce[_0x26c870(0x132)](/^(socks5|http|https|ss):\/\/(.+)$/i);_0x46a61f&&(_0x325ad0=_0x46a61f[0x1][_0x26c870(0x1da)](),_0x2ab9ce=_0x46a61f[0x2]);if(_0x325ad0==='ss')return parseSsProxy(_0x2ab9ce);let _0x435710='',_0x4a7234='';if(_0x2ab9ce['includes']('@')){const [_0x456ca3,_0x4d56dc]=_0x2ab9ce['split']('@'),_0xe9f0ba=_0x2ba8d1=>{try{return decodeURIComponent(_0x2ba8d1);}catch(_0x359bff){return _0x2ba8d1;}},_0xc3d76d=_0x456ca3[_0x26c870(0x179)](':');if(_0xc3d76d>=0x0)_0x435710=_0xe9f0ba(_0x456ca3[_0x26c870(0x27e)](0x0,_0xc3d76d)),_0x4a7234=_0xe9f0ba(_0x456ca3[_0x26c870(0x27e)](_0xc3d76d+0x1));else _0x435710=_0xe9f0ba(_0x456ca3);_0x2ab9ce=_0x4d56dc;}const _0x2e248a=_0x325ad0===_0x26c870(0x356)?0x50:_0x325ad0===_0x26c870(0x3d0)?0x1bb:0x438,{host:_0x3ddde6,port:_0x49eb1f}=parseHostPort(_0x2ab9ce,_0x2e248a);return{'type':_0x325ad0,'host':_0x3ddde6,'port':_0x49eb1f,'user':_0x435710,'pass':_0x4a7234};}function parseSsProxy(_0x808df0){const _0x35bff8=_0x40b3d2;let _0x24f16f=_0x808df0,_0x270249='';const _0x3369de=_0x808df0[_0x35bff8(0x179)]('#');if(_0x3369de>=0x0)_0x24f16f=_0x808df0['slice'](0x0,_0x3369de);const _0x5b168e=_0x24f16f[_0x35bff8(0x37f)]('@');if(_0x5b168e>=0x0)_0x270249=_0x24f16f['slice'](0x0,_0x5b168e),_0x24f16f=_0x24f16f['slice'](_0x5b168e+0x1);else{const _0x550532=b64ToUtf8(_0x24f16f);if(_0x550532&&_0x550532['includes']('@')){const _0x293f32=_0x550532[_0x35bff8(0x37f)]('@');_0x270249=_0x550532['slice'](0x0,_0x293f32),_0x24f16f=_0x550532[_0x35bff8(0x27e)](_0x293f32+0x1);}}let _0x48c91d='',_0x46fe6c='';if(_0x270249){let _0x23221d=b64ToUtf8(_0x270249)||_0x270249;try{_0x23221d=decodeURIComponent(_0x23221d);}catch(_0x3fec70){}const _0x558c25=_0x23221d[_0x35bff8(0x179)](':');if(_0x558c25>0x0)_0x48c91d=_0x23221d['slice'](0x0,_0x558c25),_0x46fe6c=_0x23221d[_0x35bff8(0x27e)](_0x558c25+0x1);else _0x48c91d=_0x23221d;}const {host:_0x14cbbb,port:_0x462af8}=parseHostPort(_0x24f16f,0x20c4);return{'type':'ss','host':_0x14cbbb,'port':_0x462af8,'method':_0x48c91d,'password':_0x46fe6c};}function b64ToUtf8(_0x4391e1){const _0x103e4b=_0x40b3d2;try{const _0x731c20=atob(String(_0x4391e1)[_0x103e4b(0x3c2)](/-/g,'+')[_0x103e4b(0x3c2)](/_/g,'/')),_0x2f1400=new Uint8Array(_0x731c20[_0x103e4b(0x41b)]);for(let _0x8b4b1f=0x0;_0x8b4b1f<_0x731c20['length'];_0x8b4b1f++)_0x2f1400[_0x8b4b1f]=_0x731c20['charCodeAt'](_0x8b4b1f);return new TextDecoder(_0x103e4b(0x40d))[_0x103e4b(0x20c)](_0x2f1400);}catch(_0x2e11cb){return null;}}function json(_0x37d36d,_0x353002){const _0x21ad15=_0x40b3d2;return new Response(JSON[_0x21ad15(0x1f9)](_0x37d36d),{'status':_0x353002||0xc8,'headers':{'Content-Type':_0x21ad15(0x3a8)}});}async function kvGetConfigCached(_0x5d0341){const _0x53b332=_0x40b3d2;try{return await _0x5d0341['K']['get'](_0x53b332(0x300),{'cacheTtl':0x1e});}catch(_0xa8b86d){return null;}}function invalidateConfigCache(){}async function loadConfig(_0x4030de){const _0x447607=_0x40b3d2,_0x42865f=JSON[_0x447607(0x25f)](JSON[_0x447607(0x1f9)](DEFAULT_CONFIG));let _0x2a759a=![];if(_0x4030de['U'])_0x42865f[_0x447607(0x119)]=String(_0x4030de['U'])[_0x447607(0x1da)]();if(_0x4030de['D']||_0x4030de[_0x447607(0x271)])_0x42865f['path']=String(_0x4030de['D']||_0x4030de[_0x447607(0x271)]);if(_0x4030de[_0x447607(0x2ff)]||_0x4030de['admin'])_0x42865f[_0x447607(0x36d)]=String(_0x4030de['ADMIN']||_0x4030de['admin']);if(_0x4030de[_0x447607(0x2f5)])_0x42865f['host']=String(_0x4030de[_0x447607(0x2f5)])[_0x447607(0x3c2)](/^https?:\/\//,'')['split']('/')[0x0];if(_0x4030de[_0x447607(0x2fc)])_0x42865f['proxyIP']=String(_0x4030de[_0x447607(0x2fc)]);if(_0x4030de['S']||_0x4030de['OUTBOUND'])_0x42865f[_0x447607(0x197)]=String(_0x4030de['S']||_0x4030de['OUTBOUND']);if(_0x4030de[_0x447607(0x320)]===_0x447607(0x3dc)||_0x4030de['ECH']==='1')_0x42865f[_0x447607(0x161)]=!![];if(_0x4030de[_0x447607(0x14f)]===_0x447607(0x3dc)||_0x4030de['TROJAN']==='1')_0x42865f[_0x447607(0x198)]=!![];if(_0x4030de[_0x447607(0x284)])_0x42865f[_0x447607(0x165)]=String(_0x4030de[_0x447607(0x284)]);if(_0x4030de['ALPN'])_0x42865f['alpn']=String(_0x4030de[_0x447607(0x19c)]);if(_0x4030de['YX'])_0x42865f[_0x447607(0x2ba)]=parseIPList(_0x4030de['YX']);if(_0x4030de['YXURL'])_0x42865f[_0x447607(0x2e9)][_0x447607(0x448)]=String(_0x4030de[_0x447607(0x1db)]);if(_0x4030de[_0x447607(0x118)]==='1'||_0x4030de[_0x447607(0x118)]==='true')_0x42865f[_0x447607(0x24f)]=!![];if(_0x4030de[_0x447607(0x118)]==='0'||_0x4030de[_0x447607(0x118)]===_0x447607(0x329))_0x42865f[_0x447607(0x24f)]=![];if(_0x4030de['K']&&typeof _0x4030de['K'][_0x447607(0x335)]===_0x447607(0x243))try{const _0x3ec514=await kvGetConfigCached(_0x4030de);if(_0x3ec514){const _0x6d4910=JSON[_0x447607(0x25f)](_0x3ec514);if(_0x6d4910[_0x447607(0x363)]!==undefined)_0x2a759a=!![];Object['assign'](_0x42865f,_0x6d4910);if(_0x6d4910[_0x447607(0x2e9)])_0x42865f['optimizer']=Object[_0x447607(0x444)](JSON[_0x447607(0x25f)](JSON[_0x447607(0x1f9)](DEFAULT_CONFIG[_0x447607(0x2e9)])),_0x6d4910[_0x447607(0x2e9)]);if(_0x6d4910[_0x447607(0x2ba)]&&Array['isArray'](_0x6d4910[_0x447607(0x2ba)]))_0x42865f[_0x447607(0x2ba)]=_0x6d4910['preferredIPs'];if(_0x6d4910[_0x447607(0x36d)])_0x42865f[_0x447607(0x36d)]=String(_0x6d4910['admin']);if(_0x6d4910[_0x447607(0x119)])_0x42865f[_0x447607(0x119)]=String(_0x6d4910[_0x447607(0x119)])[_0x447607(0x1da)]();}}catch(_0x35abd9){}delete _0x42865f[_0x447607(0x15d)],delete _0x42865f[_0x447607(0x182)],setProbeAlive(!!_0x42865f[_0x447607(0x24f)]),_0x42865f[_0x447607(0x119)]=String(_0x42865f[_0x447607(0x119)]||'')[_0x447607(0x1da)]();if(!isUUID(_0x42865f['uuid']))_0x42865f[_0x447607(0x119)]=uuidv4();if(!_0x42865f['path']||_0x42865f['path']==='/'||_0x42865f[_0x447607(0x20f)]==='')_0x42865f['path']=_0x42865f[_0x447607(0x119)];if(!Array[_0x447607(0x45c)](_0x42865f[_0x447607(0x2ba)]))_0x42865f[_0x447607(0x2ba)]=parseIPList(_0x42865f[_0x447607(0x2ba)]);if(!_0x2a759a){const _0x3395d5=Boolean(_0x42865f[_0x447607(0x13d)]&&_0x42865f[_0x447607(0x384)]||_0x4030de['CF_ACCOUNT_ID']&&_0x4030de[_0x447607(0x140)]);if(_0x3395d5)_0x42865f[_0x447607(0x363)]=!![];}return _0x42865f;}async function saveConfig(_0x28dfb0,_0x19caa0){const _0x5e5f0b=_0x40b3d2;if(!_0x28dfb0['K']||typeof _0x28dfb0['K'][_0x5e5f0b(0x120)]!==_0x5e5f0b(0x243))return![];const _0x20341b=JSON[_0x5e5f0b(0x25f)](JSON[_0x5e5f0b(0x1f9)](_0x19caa0));if(_0x20341b[_0x5e5f0b(0x36d)])_0x20341b['admin']=String(_0x20341b[_0x5e5f0b(0x36d)]);return await _0x28dfb0['K'][_0x5e5f0b(0x120)]('config',JSON['stringify'](_0x20341b)),invalidateConfigCache(),!![];}let QUOTA_CACHE=null,QUOTA_BACKOFF=0x0;const QUOTA_LIMIT=0x186a0,QUOTA_TTL=0x493e0,QUOTA_BACKOFF_TTL=0xdbba0;async function getQuota(_0x2d0db3,_0x530d80){const _0x28d2d2=_0x40b3d2,_0x2bbe1d=String(_0x2d0db3['CF_ACCOUNT_ID']||_0x530d80&&_0x530d80[_0x28d2d2(0x13d)]||'')[_0x28d2d2(0x283)](),_0x46b39a=String(_0x2d0db3[_0x28d2d2(0x140)]||_0x530d80&&_0x530d80[_0x28d2d2(0x384)]||'')['trim']();if(!_0x2bbe1d||!_0x46b39a)return{'configured':![]};const _0x1544ad=Date[_0x28d2d2(0x25b)]();if(_0x1544ad<QUOTA_BACKOFF){if(QUOTA_CACHE&&QUOTA_CACHE[_0x28d2d2(0x407)])return Object[_0x28d2d2(0x444)]({},QUOTA_CACHE[_0x28d2d2(0x407)],{'stale':!![],'error':_0x28d2d2(0x14a)});return{'configured':!![],'error':'CF\x20API\x20限流(429)，请\x2015\x20分钟后再试'};}if(QUOTA_CACHE&&QUOTA_CACHE['at']&&_0x1544ad-QUOTA_CACHE['at']<QUOTA_TTL)return QUOTA_CACHE[_0x28d2d2(0x407)];try{const _0x3b5deb=new Date();_0x3b5deb[_0x28d2d2(0x33f)](0x0,0x0,0x0,0x0);const _0x43e89a=new Date(),_0x157d68={'query':'query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','variables':{'accountId':_0x2bbe1d,'filter':{'datetime_geq':_0x3b5deb[_0x28d2d2(0x3ce)](),'datetime_leq':_0x43e89a[_0x28d2d2(0x3ce)]()}}},_0x5af6ef=await fetch(_0x28d2d2(0x139),{'method':_0x28d2d2(0x2c0),'headers':{'Content-Type':_0x28d2d2(0x1b4),'Authorization':'Bearer\x20'+_0x46b39a},'body':JSON[_0x28d2d2(0x1f9)](_0x157d68)});if(!_0x5af6ef['ok'])throw new Error('CF\x20API\x20HTTP\x20'+_0x5af6ef[_0x28d2d2(0x458)]);const _0x24c515=await _0x5af6ef['json']();if(_0x24c515['errors']&&_0x24c515[_0x28d2d2(0x443)][_0x28d2d2(0x41b)])throw new Error(_0x28d2d2(0x181)+JSON[_0x28d2d2(0x1f9)](_0x24c515[_0x28d2d2(0x443)])[_0x28d2d2(0x27e)](0x0,0xc8));const _0x4869b7=_0x24c515&&_0x24c515[_0x28d2d2(0x407)]&&_0x24c515[_0x28d2d2(0x407)]['viewer']&&_0x24c515[_0x28d2d2(0x407)]['viewer'][_0x28d2d2(0x112)]||[];if(!_0x4869b7[_0x28d2d2(0x41b)])throw new Error(_0x28d2d2(0x2f7));const _0x1526bd=_0x4869b7[0x0],_0x3064f5=(_0x1526bd[_0x28d2d2(0x1eb)]||[])[0x0]||{},_0x161d14=(_0x1526bd[_0x28d2d2(0x247)]||[])['reduce']((_0x20dab8,_0x584e4e)=>_0x20dab8+(_0x584e4e&&_0x584e4e['sum']&&_0x584e4e[_0x28d2d2(0x2a4)]['requests']||0x0),0x0),_0x4d982a=(_0x3064f5[_0x28d2d2(0x2a4)]&&_0x3064f5[_0x28d2d2(0x2a4)][_0x28d2d2(0x2f4)]||0x0)+_0x161d14,_0x52ffb5=_0x3064f5[_0x28d2d2(0x358)]&&_0x3064f5[_0x28d2d2(0x358)][_0x28d2d2(0x33d)]||0x0,_0x1bd7a4=_0x3064f5[_0x28d2d2(0x2a4)]&&_0x3064f5[_0x28d2d2(0x2a4)][_0x28d2d2(0x33b)]||0x0,_0x28cfe1=QUOTA_LIMIT>0x0?Math['round'](_0x4d982a/QUOTA_LIMIT*0x3e8)/0xa:0x0,_0x1fb4d5={'configured':!![],'limit':QUOTA_LIMIT,'today':{'requests':_0x4d982a,'cpuTime':_0x52ffb5,'subrequests':_0x1bd7a4},'percent':_0x28cfe1,'remaining':Math['max'](0x0,QUOTA_LIMIT-_0x4d982a),'updatedAt':_0x43e89a[_0x28d2d2(0x3ce)]()};return QUOTA_CACHE={'at':_0x1544ad,'data':_0x1fb4d5},_0x1fb4d5;}catch(_0x139cba){const _0x3a2169=_0x139cba&&_0x139cba[_0x28d2d2(0x226)]||String(_0x139cba);if(_0x3a2169[_0x28d2d2(0x179)]('429')>=0x0){QUOTA_BACKOFF=_0x1544ad+QUOTA_BACKOFF_TTL;if(QUOTA_CACHE&&QUOTA_CACHE[_0x28d2d2(0x407)])return Object['assign']({},QUOTA_CACHE[_0x28d2d2(0x407)],{'stale':!![],'error':'CF\x20API\x20限流(429)，显示缓存数据（可能滞后）'});return{'configured':!![],'error':_0x28d2d2(0x273)};}return{'configured':!![],'error':_0x3a2169};}}function readAddress(_0x2a6b04,_0x4b8555,_0x14d82d,_0x3deaa1){const _0x4f5719=_0x40b3d2;if(_0x3deaa1===0x1)return{'addr':_0x4b8555[_0x4f5719(0x280)](_0x14d82d)+'.'+_0x4b8555['getUint8'](_0x14d82d+0x1)+'.'+_0x4b8555['getUint8'](_0x14d82d+0x2)+'.'+_0x4b8555[_0x4f5719(0x280)](_0x14d82d+0x3),'len':0x4};if(_0x3deaa1===0x2){const _0x13b0fa=_0x4b8555[_0x4f5719(0x280)](_0x14d82d),_0x3966f9=_0x2a6b04['subarray'](_0x14d82d+0x1,_0x14d82d+0x1+_0x13b0fa);return{'addr':TD['decode'](_0x3966f9),'len':0x1+_0x13b0fa};}if(_0x3deaa1===0x3){const _0x18f8bc=_0x2a6b04[_0x4f5719(0x398)](_0x14d82d,_0x14d82d+0x10);return{'addr':formatIPv6(_0x18f8bc),'len':0x10};}throw new Error(_0x4f5719(0x32f));}function parseVlessHeader(_0x5b45a1){const _0x4b6eae=_0x40b3d2;if(!_0x5b45a1||_0x5b45a1[_0x4b6eae(0x282)]<0x1)throw new Error(_0x4b6eae(0x401));const _0x58d7a5=new DataView(_0x5b45a1[_0x4b6eae(0x215)],_0x5b45a1[_0x4b6eae(0x212)],_0x5b45a1[_0x4b6eae(0x282)]);let _0x4fc1f7=0x0;if(_0x58d7a5[_0x4b6eae(0x280)](0x0)!==0x0)throw new Error(_0x4b6eae(0x369));_0x4fc1f7+=0x1+0x10;if(_0x4fc1f7>=_0x5b45a1[_0x4b6eae(0x282)])throw new Error(_0x4b6eae(0x401));const _0x520dc2=_0x58d7a5[_0x4b6eae(0x280)](_0x4fc1f7);_0x4fc1f7+=0x1,_0x4fc1f7+=_0x520dc2;if(_0x4fc1f7+0x3>_0x5b45a1[_0x4b6eae(0x282)])throw new Error('VLESS\x20头部过短');const _0x5e485e=_0x58d7a5[_0x4b6eae(0x280)](_0x4fc1f7);_0x4fc1f7+=0x1;const _0x4d3087=_0x58d7a5['getUint16'](_0x4fc1f7);_0x4fc1f7+=0x2;const _0x2d9019=_0x58d7a5[_0x4b6eae(0x280)](_0x4fc1f7);_0x4fc1f7+=0x1;const {addr:_0x2e5950,len:_0x8c7900}=readAddress(_0x5b45a1,_0x58d7a5,_0x4fc1f7,_0x2d9019);return _0x4fc1f7+=_0x8c7900,{'command':_0x5e485e,'port':_0x4d3087,'addr':_0x2e5950,'headerLength':_0x4fc1f7,'earlyData':_0x5b45a1[_0x4b6eae(0x398)](_0x4fc1f7)};}function parseTrojanHeader(_0x192276){const _0x82c8e0=_0x40b3d2;if(!_0x192276||_0x192276[_0x82c8e0(0x282)]<0x3a+0x8)throw new Error(_0x82c8e0(0x129));const _0x2db062=new DataView(_0x192276[_0x82c8e0(0x215)],_0x192276[_0x82c8e0(0x212)],_0x192276[_0x82c8e0(0x282)]);let _0x5e0b94=0x3a;const _0x257f3e=_0x2db062[_0x82c8e0(0x280)](_0x5e0b94);_0x5e0b94+=0x1;const _0x3e6013=_0x2db062[_0x82c8e0(0x280)](_0x5e0b94);_0x5e0b94+=0x1;let _0x5e5aaf,_0x227b53;if(_0x3e6013===0x1)_0x5e5aaf=_0x2db062[_0x82c8e0(0x280)](_0x5e0b94)+'.'+_0x2db062[_0x82c8e0(0x280)](_0x5e0b94+0x1)+'.'+_0x2db062[_0x82c8e0(0x280)](_0x5e0b94+0x2)+'.'+_0x2db062['getUint8'](_0x5e0b94+0x3),_0x227b53=0x4;else{if(_0x3e6013===0x3){const _0x590345=_0x2db062['getUint8'](_0x5e0b94);_0x5e5aaf=TD[_0x82c8e0(0x20c)](_0x192276[_0x82c8e0(0x398)](_0x5e0b94+0x1,_0x5e0b94+0x1+_0x590345)),_0x227b53=0x1+_0x590345;}else{if(_0x3e6013===0x4)_0x5e5aaf=formatIPv6(_0x192276['subarray'](_0x5e0b94,_0x5e0b94+0x10)),_0x227b53=0x10;else throw new Error(_0x82c8e0(0x32f));}}_0x5e0b94+=_0x227b53;const _0x36cd94=_0x2db062[_0x82c8e0(0x319)](_0x5e0b94);return _0x5e0b94+=0x2,_0x5e0b94+=0x2,{'command':_0x257f3e,'port':_0x36cd94,'addr':_0x5e5aaf,'password':TD[_0x82c8e0(0x20c)](_0x192276[_0x82c8e0(0x398)](0x0,0x38)),'headerLength':_0x5e0b94};}const SHA256_K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];function sha224hex(_0x2b5b28){const _0x400a0e=_0x40b3d2,_0x451c1c=TE[_0x400a0e(0x2a3)](String(_0x2b5b28)),_0x4f2deb=_0x451c1c[_0x400a0e(0x41b)]*0x8,_0x5d4158=(_0x451c1c[_0x400a0e(0x41b)]+0x8>>0x6)+0x1<<0x6,_0x29cb9e=new Uint8Array(_0x5d4158);_0x29cb9e[_0x400a0e(0x2cb)](_0x451c1c),_0x29cb9e[_0x451c1c[_0x400a0e(0x41b)]]=0x80;const _0x252236=new DataView(_0x29cb9e[_0x400a0e(0x215)]);_0x252236[_0x400a0e(0x409)](_0x5d4158-0x8,Math[_0x400a0e(0x239)](_0x4f2deb/0x100000000),![]),_0x252236[_0x400a0e(0x409)](_0x5d4158-0x4,_0x4f2deb>>>0x0,![]);let _0x3946d0=0xc1059ed8,_0xd87d5f=0x367cd507,_0x3ab7f0=0x3070dd17,_0x2ec16a=0xf70e5939,_0x9ef193=0xffc00b31,_0x48a5d9=0x68581511,_0x2f804b=0x64f98fa7,_0x2c05be=0xbefa4fa4;const _0x3c6358=(_0x51202f,_0x3633fc)=>_0x51202f>>>_0x3633fc|_0x51202f<<0x20-_0x3633fc;for(let _0x377f3c=0x0;_0x377f3c<_0x5d4158;_0x377f3c+=0x40){const _0x139a3b=new Uint32Array(0x40);for(let _0x9fb303=0x0;_0x9fb303<0x10;_0x9fb303++)_0x139a3b[_0x9fb303]=_0x252236['getUint32'](_0x377f3c+_0x9fb303*0x4,![]);for(let _0x3a6169=0x10;_0x3a6169<0x40;_0x3a6169++){const _0x7ad85d=_0x3c6358(_0x139a3b[_0x3a6169-0xf],0x7)^_0x3c6358(_0x139a3b[_0x3a6169-0xf],0x12)^_0x139a3b[_0x3a6169-0xf]>>>0x3,_0x28ddd7=_0x3c6358(_0x139a3b[_0x3a6169-0x2],0x11)^_0x3c6358(_0x139a3b[_0x3a6169-0x2],0x13)^_0x139a3b[_0x3a6169-0x2]>>>0xa;_0x139a3b[_0x3a6169]=_0x139a3b[_0x3a6169-0x10]+_0x7ad85d+_0x139a3b[_0x3a6169-0x7]+_0x28ddd7>>>0x0;}let _0x2866d1=_0x3946d0,_0x2154a1=_0xd87d5f,_0x42e3eb=_0x3ab7f0,_0x3c193a=_0x2ec16a,_0x436d97=_0x9ef193,_0x5b3266=_0x48a5d9,_0x5c0ff1=_0x2f804b,_0x116169=_0x2c05be;for(let _0x3ecb83=0x0;_0x3ecb83<0x40;_0x3ecb83++){const _0xb8012=_0x3c6358(_0x436d97,0x6)^_0x3c6358(_0x436d97,0xb)^_0x3c6358(_0x436d97,0x19),_0x3ec1af=_0x436d97&_0x5b3266^~_0x436d97&_0x5c0ff1,_0x1be110=_0x116169+_0xb8012+_0x3ec1af+SHA256_K[_0x3ecb83]+_0x139a3b[_0x3ecb83]>>>0x0,_0x32ef8d=_0x3c6358(_0x2866d1,0x2)^_0x3c6358(_0x2866d1,0xd)^_0x3c6358(_0x2866d1,0x16),_0x1bd096=_0x2866d1&_0x2154a1^_0x2866d1&_0x42e3eb^_0x2154a1&_0x42e3eb,_0x5d21d4=_0x32ef8d+_0x1bd096>>>0x0;_0x116169=_0x5c0ff1,_0x5c0ff1=_0x5b3266,_0x5b3266=_0x436d97,_0x436d97=_0x3c193a+_0x1be110>>>0x0,_0x3c193a=_0x42e3eb,_0x42e3eb=_0x2154a1,_0x2154a1=_0x2866d1,_0x2866d1=_0x1be110+_0x5d21d4>>>0x0;}_0x3946d0=_0x3946d0+_0x2866d1>>>0x0,_0xd87d5f=_0xd87d5f+_0x2154a1>>>0x0,_0x3ab7f0=_0x3ab7f0+_0x42e3eb>>>0x0,_0x2ec16a=_0x2ec16a+_0x3c193a>>>0x0,_0x9ef193=_0x9ef193+_0x436d97>>>0x0,_0x48a5d9=_0x48a5d9+_0x5b3266>>>0x0,_0x2f804b=_0x2f804b+_0x5c0ff1>>>0x0,_0x2c05be=_0x2c05be+_0x116169>>>0x0;}let _0x40762c='';for(const _0xf21d56 of[_0x3946d0,_0xd87d5f,_0x3ab7f0,_0x2ec16a,_0x9ef193,_0x48a5d9,_0x2f804b]){_0x40762c+=(_0xf21d56>>>0x18&0xff)[_0x400a0e(0x3fc)](0x10)['padStart'](0x2,'0'),_0x40762c+=(_0xf21d56>>>0x10&0xff)[_0x400a0e(0x3fc)](0x10)[_0x400a0e(0x30e)](0x2,'0'),_0x40762c+=(_0xf21d56>>>0x8&0xff)[_0x400a0e(0x3fc)](0x10)[_0x400a0e(0x30e)](0x2,'0'),_0x40762c+=(_0xf21d56&0xff)[_0x400a0e(0x3fc)](0x10)[_0x400a0e(0x30e)](0x2,'0');}return _0x40762c;}let _trojanPassC='',_trojanHashC='';function trojanPasswordHash(_0x39fa1d){return _0x39fa1d!==_trojanPassC&&(_trojanPassC=_0x39fa1d,_trojanHashC=sha224hex(_0x39fa1d)),_trojanHashC;}function detectTrojan(_0x4b0a16,_0x5f249c){const _0x51a9a1=_0x40b3d2;if(!_0x5f249c[_0x51a9a1(0x198)]||!_0x4b0a16||_0x4b0a16['byteLength']<0x3a)return![];const _0x483f47=_0x4b0a16['subarray'](0x0,0x38);if(TD[_0x51a9a1(0x20c)](_0x483f47)[_0x51a9a1(0x1da)]()===trojanPasswordHash(_0x5f249c[_0x51a9a1(0x165)]||_0x5f249c[_0x51a9a1(0x119)]))return!![];if(_0x4b0a16[0x38]===0xd&&_0x4b0a16[0x39]===0xa){for(let _0x117c08=0x0;_0x117c08<0x38;_0x117c08++){const _0x5d005c=_0x483f47[_0x117c08];if(!(_0x5d005c>=0x30&&_0x5d005c<=0x39||_0x5d005c>=0x61&&_0x5d005c<=0x66||_0x5d005c>=0x41&&_0x5d005c<=0x46))return![];}return!![];}return![];}const DOH_ENDPOINTS=[_0x40b3d2(0x23c),_0x40b3d2(0x2a8),_0x40b3d2(0x2cc),_0x40b3d2(0x128),_0x40b3d2(0x259),_0x40b3d2(0x429)];function ipv6ToBytes(_0x180623){const _0x5e70a3=_0x40b3d2,_0x51a689=String(_0x180623)[_0x5e70a3(0x420)]('::'),_0x48c292=_0x51a689[0x0]?_0x51a689[0x0][_0x5e70a3(0x420)](':')[_0x5e70a3(0x1b7)](Boolean):[],_0x31fb4f=_0x51a689[0x1]?_0x51a689[0x1][_0x5e70a3(0x420)](':')[_0x5e70a3(0x1b7)](Boolean):[],_0x2d49af=[..._0x48c292,...Array(Math[_0x5e70a3(0x3cc)](0x0,0x8-_0x48c292[_0x5e70a3(0x41b)]-_0x31fb4f['length']))[_0x5e70a3(0x1c6)]('0'),..._0x31fb4f],_0x142bcb=new Uint8Array(0x10);return _0x2d49af[_0x5e70a3(0x1d0)]((_0x73cee6,_0x4cc3c7)=>{const _0x1ed32d=parseInt(_0x73cee6,0x10)||0x0;_0x142bcb[_0x4cc3c7*0x2]=_0x1ed32d>>0x8&0xff,_0x142bcb[_0x4cc3c7*0x2+0x1]=_0x1ed32d&0xff;}),_0x142bcb;}async function dnsToDoH(_0x5a81bc){const _0xed145f=_0x40b3d2;if(!_0x5a81bc||_0x5a81bc[_0xed145f(0x282)]<0x11)return null;const _0x4567a0=new DataView(_0x5a81bc[_0xed145f(0x215)],_0x5a81bc[_0xed145f(0x212)],_0x5a81bc[_0xed145f(0x282)]),_0x22ccc1=_0x4567a0[_0xed145f(0x319)](0x0);if(_0x4567a0['getUint16'](0x2)&0x8000)return null;if(_0x4567a0[_0xed145f(0x319)](0x4)!==0x1)return null;let _0x403cd5=0xc,_0x589b70=[];while(_0x403cd5<_0x5a81bc[_0xed145f(0x282)]){const _0x39d554=_0x4567a0[_0xed145f(0x280)](_0x403cd5);if(_0x39d554===0x0){_0x403cd5++;break;}if((_0x39d554&0xc0)===0xc0){_0x403cd5+=0x2;break;}if(_0x403cd5+0x1+_0x39d554>_0x5a81bc['byteLength'])return null;_0x589b70[_0xed145f(0x32a)](TD[_0xed145f(0x20c)](_0x5a81bc[_0xed145f(0x398)](_0x403cd5+0x1,_0x403cd5+0x1+_0x39d554))),_0x403cd5+=0x1+_0x39d554;}if(_0x403cd5+0x4>_0x5a81bc['byteLength']||_0x589b70['length']===0x0)return null;const _0x40914e=_0x4567a0['getUint16'](_0x403cd5),_0x25a559=_0x4567a0[_0xed145f(0x319)](_0x403cd5+0x2),_0x10911c=_0x403cd5+0x4;if(_0x40914e!==0x1&&_0x40914e!==0x1c)return null;const _0x50fb2a=_0x589b70[_0xed145f(0x40a)]('.'),_0x4082ad=_0x5a81bc[_0xed145f(0x398)](0xc,_0x10911c);let _0x4ff861=null;for(const _0x6b6393 of DOH_ENDPOINTS){try{const _0x124a1f=await fetchTimeout(_0x6b6393+_0xed145f(0x388)+encodeURIComponent(_0x50fb2a)+'&type='+_0x40914e,{'headers':{'accept':_0xed145f(0x2c6)}},0x1388);if(!_0x124a1f||!_0x124a1f['ok'])continue;const _0x2a38a9=await _0x124a1f[_0xed145f(0x1af)]();if(!_0x2a38a9||_0x2a38a9['Status']!==0x0)continue;const _0x66f583=(_0x2a38a9['Answer']||[])[_0xed145f(0x1b7)](_0x1ffe1b=>_0x1ffe1b[_0xed145f(0x457)]===_0x40914e&&(_0x1ffe1b[_0xed145f(0x457)]===0x1?isValidIp(String(_0x1ffe1b[_0xed145f(0x407)])):/^[0-9a-fA-F:]+$/['test'](String(_0x1ffe1b['data']))));if(_0x66f583[_0xed145f(0x41b)]){_0x4ff861=_0x66f583;break;}}catch(_0x499f80){}}if(!_0x4ff861)return null;const _0xa12c3c=new Uint8Array(0xc),_0x263c98=new DataView(_0xa12c3c[_0xed145f(0x215)]);_0x263c98[_0xed145f(0x292)](0x0,_0x22ccc1),_0x263c98[_0xed145f(0x292)](0x2,0x8180),_0x263c98[_0xed145f(0x292)](0x4,0x1),_0x263c98[_0xed145f(0x292)](0x6,_0x4ff861[_0xed145f(0x41b)]);const _0x5bfc6c=[_0xa12c3c,_0x4082ad];for(const _0x5e711d of _0x4ff861){const _0x1ec391=String(_0x5e711d[_0xed145f(0x407)]),_0x3d53a9=_0x5e711d[_0xed145f(0x457)]===0x1?Uint8Array['from'](_0x1ec391['split']('.')[_0xed145f(0x114)](Number)):ipv6ToBytes(_0x1ec391);if(_0x3d53a9[_0xed145f(0x41b)]!==(_0x5e711d[_0xed145f(0x457)]===0x1?0x4:0x10))continue;const _0x650e33=new Uint8Array(0xa),_0x1f1d3d=new DataView(_0x650e33['buffer']);_0x1f1d3d[_0xed145f(0x292)](0x0,0xc00c),_0x1f1d3d['setUint16'](0x2,_0x5e711d[_0xed145f(0x457)]),_0x1f1d3d['setUint16'](0x4,_0x25a559===0x0?0x1:_0x25a559),_0x1f1d3d['setUint32'](0x6,Number(_0x5e711d[_0xed145f(0x21d)])||0x12c),_0x5bfc6c[_0xed145f(0x32a)](_0x650e33,new Uint8Array([_0x3d53a9[_0xed145f(0x41b)]>>0x8&0xff,_0x3d53a9['length']&0xff]),_0x3d53a9);}let _0x381f1c=0x0;_0x5bfc6c['forEach'](_0x4628bf=>_0x381f1c+=_0x4628bf[_0xed145f(0x282)]);const _0x178930=new Uint8Array(_0x381f1c);let _0xb0b689=0x0;for(const _0x1019ac of _0x5bfc6c){_0x178930['set'](_0x1019ac,_0xb0b689),_0xb0b689+=_0x1019ac['byteLength'];}return _0x178930;}function withTimeout(_0x448caa,_0x348ff6,_0xd98546){return Promise['race']([_0x448caa,new Promise((_0x5d901f,_0x36bae7)=>setTimeout(()=>_0x36bae7(new Error(_0xd98546||'操作超时')),_0x348ff6||0x1770))]);}async function connectWithTimeout(_0x56949e,_0x6d1fc9,_0x1e1f9e){const _0x51a791=_0x40b3d2,_0x2b54a3=connect({'hostname':_0x56949e,'port':_0x6d1fc9});try{await withTimeout(_0x2b54a3['opened'],_0x1e1f9e||0x1770,'连接超时（SYN\x20被静默丢弃）');}catch(_0x4465fa){try{_0x2b54a3[_0x51a791(0x451)]();}catch(_0x551cbf){}throw _0x4465fa;}return _0x2b54a3;}async function connectDirect(_0x4c0fd9,_0x3edd13){const _0x40a1ae=_0x40b3d2;return connectWithTimeout(_0x4c0fd9[_0x40a1ae(0x2e1)],_0x4c0fd9[_0x40a1ae(0x3c4)],_0x3edd13||0x1770);}async function connectViaSocks5(_0x3047c0,_0xf2e500){const _0x2ed09c=_0x40b3d2,_0x411847=await connectWithTimeout(_0x3047c0[_0x2ed09c(0x19e)],_0x3047c0[_0x2ed09c(0x3c4)],0x1770),_0x847ae4=_0x411847[_0x2ed09c(0x374)][_0x2ed09c(0x184)](),_0x445117=_0x411847[_0x2ed09c(0x218)][_0x2ed09c(0x350)]();let _0x1aeaff=new Uint8Array(0x0);const _0x50c9c1=async _0x49f6e2=>{const _0x1928e9=_0x2ed09c;while(_0x1aeaff['length']<_0x49f6e2){const {done:_0x9c0a16,value:_0x4816a2}=await _0x445117[_0x1928e9(0x3b0)]();if(_0x9c0a16)throw new Error(_0x1928e9(0x25c));_0x1aeaff=concatBytes(_0x1aeaff,_0x4816a2);}const _0x52d31d=_0x1aeaff[_0x1928e9(0x27e)](0x0,_0x49f6e2);return _0x1aeaff=_0x1aeaff[_0x1928e9(0x398)](_0x49f6e2),_0x52d31d;},_0x165620=_0x3047c0['user']?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await _0x847ae4[_0x2ed09c(0x3aa)](new Uint8Array(_0x165620));const _0x3cd59f=await _0x50c9c1(0x2);if(_0x3cd59f[0x0]!==0x5||_0x3cd59f[0x1]===0xff)throw new Error('SOCKS5\x20握手失败');if(_0x3cd59f[0x1]===0x2){if(!_0x3047c0['user'])throw new Error(_0x2ed09c(0x39e));const _0x147eeb=TE[_0x2ed09c(0x2a3)](_0x3047c0[_0x2ed09c(0x29a)]),_0x21d75f=TE[_0x2ed09c(0x2a3)](_0x3047c0[_0x2ed09c(0x2d0)]),_0x42192b=new Uint8Array([0x1,_0x147eeb[_0x2ed09c(0x41b)],..._0x147eeb,_0x21d75f[_0x2ed09c(0x41b)],..._0x21d75f]);await _0x847ae4[_0x2ed09c(0x3aa)](_0x42192b);const _0x36f07a=await _0x50c9c1(0x2);if(_0x36f07a[0x1]!==0x0)throw new Error(_0x2ed09c(0x1c8));}else{if(_0x3cd59f[0x1]!==0x0)throw new Error(_0x2ed09c(0x3ec)+_0x3cd59f[0x1]);}const _0x3ff6f4=TE[_0x2ed09c(0x2a3)](_0xf2e500[_0x2ed09c(0x2e1)]);let _0x49d24a;/^\d+\.\d+\.\d+\.\d+$/[_0x2ed09c(0x1ee)](_0xf2e500[_0x2ed09c(0x2e1)])?_0x49d24a=new Uint8Array([0x5,0x1,0x0,0x1,..._0xf2e500[_0x2ed09c(0x2e1)][_0x2ed09c(0x420)]('.')['map'](Number),_0xf2e500[_0x2ed09c(0x3c4)]>>0x8&0xff,_0xf2e500['port']&0xff]):_0x49d24a=new Uint8Array([0x5,0x1,0x0,0x3,_0x3ff6f4[_0x2ed09c(0x41b)],..._0x3ff6f4,_0xf2e500['port']>>0x8&0xff,_0xf2e500['port']&0xff]);await _0x847ae4['write'](_0x49d24a);const _0x2a9809=await _0x50c9c1(0x4);if(_0x2a9809[0x1]!==0x0)throw new Error('SOCKS5\x20连接失败\x20码'+_0x2a9809[0x1]);if(_0x2a9809[0x3]===0x1)await _0x50c9c1(0x6);else{if(_0x2a9809[0x3]===0x3){const _0x2e182b=(await _0x50c9c1(0x1))[0x0];await _0x50c9c1(_0x2e182b+0x2);}else{if(_0x2a9809[0x3]===0x4)await _0x50c9c1(0x12);}}if(_0x1aeaff['byteLength']>0x0)_0x411847[_0x2ed09c(0x248)]=_0x1aeaff;return _0x847ae4[_0x2ed09c(0x2bb)](),_0x445117['releaseLock'](),_0x411847;}async function connectViaHttpProxy(_0xc4afe1,_0xfd9990){const _0x2f9f26=_0x40b3d2,_0x1b814a=await connectWithTimeout(_0xc4afe1['host'],_0xc4afe1[_0x2f9f26(0x3c4)],0x1770),_0x4c4712=_0x1b814a[_0x2f9f26(0x374)]['getWriter'](),_0xe0db70=_0x1b814a['readable']['getReader']();let _0x3bc3cd='';if(_0xc4afe1[_0x2f9f26(0x29a)])_0x3bc3cd=_0x2f9f26(0x192)+b64FromBytes(TE[_0x2f9f26(0x2a3)](_0xc4afe1[_0x2f9f26(0x29a)]+':'+_0xc4afe1[_0x2f9f26(0x2d0)]))+'\x0d\x0a';const _0x34a38b=_0x2f9f26(0x12a)+_0xfd9990[_0x2f9f26(0x2e1)]+':'+_0xfd9990[_0x2f9f26(0x3c4)]+_0x2f9f26(0x234)+_0xfd9990[_0x2f9f26(0x2e1)]+':'+_0xfd9990[_0x2f9f26(0x3c4)]+'\x0d\x0a'+_0x3bc3cd+'\x0d\x0a';await _0x4c4712['write'](TE[_0x2f9f26(0x2a3)](_0x34a38b));const {head:_0x3a06e5,leftover:_0x386145}=await readUntilCRLFCRLF(_0xe0db70);if(!/^HTTP\/\d\.\d\s+2\d\d/i[_0x2f9f26(0x1ee)](_0x3a06e5))throw new Error(_0x2f9f26(0x1be)+_0x3a06e5[_0x2f9f26(0x420)]('\x0d\x0a')[0x0]);if(_0x386145&&_0x386145[_0x2f9f26(0x282)]>0x0)_0x1b814a[_0x2f9f26(0x248)]=_0x386145;return _0x4c4712['releaseLock'](),_0xe0db70[_0x2f9f26(0x2bb)](),_0x1b814a;}function ssCipherAlgo(_0x2f3f43){const _0x2c37e0=_0x40b3d2,_0x3f9e1e=String(_0x2f3f43||'')[_0x2c37e0(0x1da)]()['replace'](/_/g,'-');if(_0x3f9e1e===_0x2c37e0(0x17c)||_0x3f9e1e===_0x2c37e0(0x31c))return{'name':_0x2c37e0(0x3c5),'keyLen':0x10};if(_0x3f9e1e==='aes-256-gcm'||_0x3f9e1e==='aes-256gcm')return{'name':'AES-GCM','keyLen':0x20};if(_0x3f9e1e===_0x2c37e0(0x1ff)||_0x3f9e1e===_0x2c37e0(0x1de)||_0x3f9e1e===_0x2c37e0(0x123))return{'name':_0x2c37e0(0x459),'keyLen':0x20};return null;}function _0x3786(){const _0xe9137c=['104.17.234.5#优选IP-018','2606:4700::/32','importKey','172.65.167.52#优选IP-241','latest','172.65.11.191#优选IP-122','104.25.33.126#优选IP-238','race','cloudflare-ech.com','检测失败:\x20','172.66.164.60#优选IP-251','172.65.118.85#优选IP-267','🎯\x20全球直连','SOCKS5\x20不支持的认证方法\x20','info','104.25.36.200#优选IP-151','4912614eSMWzB','172.65.173.221#优选IP-051','&path=','https://raw.githubusercontent.com/','CFNext\x20混淆版.js','104.17.87.46#优选IP-201','digest','104.18.255.187#优选IP-050','subIncludeDefault','AAAA','saas.sin.fan','104.17.153.58#优选IP-174','Answer','toString','8922PTmmxd','tag','104.16.125.96#优选IP-004','ws-opts','VLESS\x20头部过短','104.27.46.114#优选IP-271','104.24.0.0/14','162.159.197.16#优选IP-117','https://bestcf.pages.dev/random-region/KR/100.txt','104.17.169.109#优选IP-217','data','104.25.169.144#优选IP-291','setUint32','join','104.19.181.118#优选IP-215','xn--b6gac.eu.org','utf-8','proxyip.vultr.cmliussss.net','104.24.46.107#优选IP-274','104.18.185.40#优选IP-041','ceil','9822008Oztxpu','172.67.229.44#优选IP-137','172.65.45.102#优选IP-250','162.159.26.248#优选IP-252','马来西亚','162.159.228.244#优选IP-071','FRA','104.18.184.243#优选IP-035','f3058171cad.002404.xyz','length','SS\x20AEAD\x20数据过短','32494891ipTHHU','104.25.18.216#优选IP-198','#\x20CFNext\x20订阅\x0atest-url:\x20\x27http://www.gstatic.com/generate_204\x27\x0aproxies:\x0a','split','shadowrocket','CF_ACCOUNT_ID','162.159.0.1#优选IP-010','proxyip.de.cmliussss.net','surfboard','172.67.131.200#优选IP-248','resolve','188.114.96.151#优选IP-223','https://cloudflare-dns.com/dns-query','104.25.44.144#优选IP-066','outboundMode','block','188.114.99.18#优选IP-047','阿联酋','162.159.14.18#优选IP-136','from','104.25.141.168#优选IP-042','9zVgwVR','proxyip.hk.cmliussss.net','no-store','https://www.wetest.vip/page/cloudflare/cname.html','104.24.46.127#优选IP-200','kind','BER','custom','172.65.3.67#优选IP-181','list','\x20\x20\x20\x20\x20\x20enable:\x20','🐟\x20漏网之鱼','empty','ipv4_only','password','done','保存失败:\x20','errors','assign','104.19.97.238#优选IP-139','quota','tlsOnly','sourceURL','\x20\x20\x20\x20port:\x20','104.17.100.40#优选IP-261',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax',',\x20obfs=','微测网\x20IPv6','body','domains','ipType','close','104.18.41.168#优选IP-231','104.19.115.243#优选IP-096','customPref','127.0.0.1:9090','configured','type','status','CHACHA20-POLY1305','172.67.64.211#优选IP-020','104.21.23.1','isArray','geosite-youtube','🌍\x20国外媒体','104.25.129.238#优选IP-180','104.27.124.239#优选IP-278','104.18.176.111#优选IP-052','trojan://','fn.130519.xyz','162.159.137.71#优选IP-276','threads','172.64.81.44#优选IP-058','https://cloudflare-dns.com/dns-query?name=','BESTIP_AUTO','geosite-openai','accept','plain',',\x20obfs=wss,\x20obfs-host=','send','accounts','|raw','map','104.18.43.224#优选IP-022','geosite-microsoft','188.114.96.1#优选IP-011','PROBE_ALIVE','uuid','🍎\x20苹果服务','remote','188.114.96.94#优选IP-104','108.162.192.0/18','prototype','104.21.61.179#优选IP-078','put','add','104.17.97.72#优选IP-213','chacha20poly1305','subUrl','104.25.245.147#优选IP-083','104.16.113.211#优选IP-062','socks5','https://8.8.8.8/dns-query','Trojan\x20头部过短','CONNECT\x20','Mozilla/5.0','104.19.214.25#优选IP-073','104.19.78.144#优选IP-184','limit','188.114.98.53#优选IP-080','prefDomain','104.16.223.195#优选IP-056','match','未知\x20API:\x20','doh\x20fail',',\x20obfs-uri=','&fp=chrome','162.159.199.220#优选IP-263',',\x20username=','https://api.cloudflare.com/client/v4/graphql','proxyip.se.cmliussss.net','https://www.cloudflare.com/ips-v6/','162.159.135.234#优选IP-249','cfAccountId','超时/网络错误','next','CF_API_TOKEN','优选IP-','162.159.228.164#优选IP-295','prefIp','flatMap','131.0.72.0/22','&type=xhttp&mode=stream-one','104.17.76.49#优选IP-246','162.159.6.39#优选IP-195','\x20\x20\x20\x20ws-opts:','CF\x20API\x20限流(429)，显示缓存数据（可能滞后）','source','162.159.240.54#优选IP-233','enqueue','cdn.2020111.xyz','TROJAN','俄罗斯','pathname','query-server-name','172.65.134.100#优选IP-103','_quotaCap','162.159.10.45#优选IP-208','presetErr','find','下载速度','enable','162.159.2.86#优选IP-222','isp','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','fragment','polling','104.24.168.96#优选IP-130','cf.090227.xyz','ech','command','SEL','数据中心','trojanPassword','172.67.174.143#优选IP-176','104.16.218.231#优选IP-155','104.19.32.220#优选IP-192','&fp=chrome&host=','https://www.wetest.vip/page/cloudflare/address_v4.html','2405:b500::/32','nodeLimit','timeout','search','104.16.77.112#优选IP-214','constructor','https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/','label','signal','104.17.44.9','AMS','172.67.64.94#优选IP-128','188.114.98.91#优选IP-064','geosite-disney','indexOf','&type=ws','172.67.173.89#优选IP-132','aes-128-gcm','104.18.40.93#优选IP-023','162.159.19.201#优选IP-158','url','any','GraphQL:\x20','fragmentParam','{}.constructor(\x22return\x20this\x22)(\x20)','getWriter','raw','已保存并生效','&type=','vless','\x20\x20\x20\x20xhttp-opts:','relay',',\x20tls-verification=true,\x20tls13=true','172.67.189.246#优选IP-115','dns-out','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','微测网\x20IPv4','seal','104.18.34.34','Proxy-Authorization:\x20Basic\x20','_skipIssued','cloudflare.182682.xyz','104.25.238.237#优选IP-286','104.18.133.24#优选IP-085','outboundProxy','enableTrojan','162.159.43.223#优选IP-196','|rf','colo','ALPN','104.19.143.220#优选IP-256','host','SHA-256','every','object','tun-in','162.159.136.73#优选IP-040','speed.marisalnc.com','2606:4700::','104.17.99.0#优选IP-143','以色列','没有可测的\x20IP','162.159.134.174#优选IP-227','172.65.202.216#优选IP-190','104.20.1.1','188.114.96.164#优选IP-211','decrypt','then','json','cloudflare.com','104.24.230.213#优选IP-109','188.114.97.21#优选IP-229','🚀\x20节点选择','application/json','\x20=\x20vless,\x20','cfip.1323123.xyz','filter','\x20\x20\x20\x20\x20\x20host:\x20','172.67.159.243#优选IP-242','CF优选\x20','104.27.97.130#优选IP-236','KIX','哈萨克斯坦','HTTP\x20代理\x20CONNECT\x20失败:\x20','104.17.127.180#优选IP-001','xPaddingPlacement','重置失败:\x20','encryption=none','&type=A','geosite-apple','fillCount','fill','104.16.238.98#优选IP-094','SOCKS5\x20认证失败','172.67.127.122#优选IP-237','name','http/1.1','tcp\x20timeout','未在仓库中找到版本信息','2400:cb00::/32','bestcf.030101.xyz','forEach','104.16.88.7','IPv4','security=tls&sni=','103.31.4.0/22','preferredDomains','version','104.17.127.106#优选IP-048','security=none&host=','104.20.15.15','toLowerCase','YXURL','boolean','104.17.46.187#优选IP-173','chacha20-poly1305','104.19.68.127#优选IP-207','cdns.doon.eu.org','104.25.143.238#优选IP-059','172.67.161.136#优选IP-142','12634470XRGTnX','172.64.144.49#优选IP-027','104.25.214.211#优选IP-055','https://223.5.5.5/dns-query','5271ytbBnm','162.159.198.200#优选IP-245','loon','://','workersInvocationsAdaptive','ARN','阿根廷','test','hasUpdate','enableVless','proxyIP','\x20\x20\x20\x20server:\x20','User-Agent','&alpn=','HostMonit\x20优选','未绑定\x20KV\x20命名空间，无需重置','MB/s','cfip.cfcdn.vip','stringify','172.64.34.109#优选IP-087','104.18.141.27#优选IP-121','sub://','servername','CHINAMOBILE','chacha20-ietf-poly1305','network','172.65.21.190#优选IP-191','188.114.96.89#优选IP-175','172.67.165.245#优选IP-216','172.65.64.7#优选IP-037','echDns','customErr','size','104.25.246.123#优选IP-043','爱尔兰','redirect','dns-direct','decode','104.24.244.237#优选IP-075','sort','path','104.25.45.44#优选IP-038',',\x20tls-verification=true,\x20tag=','byteOffset','104.18.47.234#优选IP-025','protocol','buffer','Ⓜ️\x20微软服务','dns-remote','readable','region','104.16.91.33#优选IP-161','sub','104.25.113.22#优选IP-243','TTL','104.19.106.1#优选IP-110','speed.cloudflare.com','latency','172.65.47.182#优选IP-220',';\x20charset=utf-8','188.114.97.91#优选IP-134','login','table','message','172.65.127.225#优选IP-034','103.21.244.0/22','count','162.159.241.11#优选IP-204','162.159.153.10#优选IP-179','string','\x20\x20\x20\x20uuid:\x20','geosite-category-ads-all',',\x20obfs-host=','172.65.45.248#优选IP-290','MAN','104.16.132.229#优选IP-007','内置·保底-','\x20HTTP/1.1\x0d\x0aHost:\x20','server','min','security=none','188.114.99.114#优选IP-060','floor','西班牙','.top','https://doh.pub/dns-query','https://www.wetest.vip/page/cloudflare/address_v6.html','，请换一个数据源','values','sing-box','104.25.193.135#优选IP-120','104.25.100.203#优选IP-144','function','text','仅支持\x20POST','return\x20(function()\x20','pagesFunctionsInvocationsAdaptiveGroups','_preamble','2a06:98c0::/29','addr','&ech=',',\x20tls=false','@edtunnel','188.114.98.19#优选IP-154','probeAlive',',\x20ws-headers=Host:','2405:8100::/32','\x20\x20\x20\x20\x20\x20mode:\x20','Mozilla/5.0\x20(CFNext)','vless://','188.114.96.64#优选IP-171','NaN','所有出站方式均失败','104.16.245.187#优选IP-019','https://dns.google/dns-query','attachment;\x20filename=\x22CFNext\x22;\x20filename*=utf-8\x27\x27CFNext','now','连接被关闭','all','104.19.246.234#优选IP-280','parse','STR','104.25.161.217#优选IP-140','[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','104.16.123.96#优选IP-002','xPaddingMethod','trojan','\x20\x20\x20\x20client-fingerprint:\x20chrome','104.21.215.255#优选IP-247','104.27.94.231#优选IP-129','includes','104.16.234.241#优选IP-288','cf.zhetengsha.eu.org','104.18.173.224#优选IP-131','104.18.119.34#优选IP-016','104.27.20.220#优选IP-266','172.67.72.4','delete','PATH','土耳其','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','arrayBuffer','172.67.195.152#优选IP-188','域名-','104.19.123.4#优选IP-045','vless=','104.21.192.230#优选IP-099','104.27.23.242#优选IP-150','subtle','104.17.195.133#优选IP-152','surge','slice','103.22.200.0/22','getUint8','subMode','byteLength','trim','TROJAN_PASSWORD','alpn','104.21.114.216#优选IP-079','104.17.24.252#优选IP-012','104.27.4.144#优选IP-125','495332TSDXwX','SS\x20连接被关闭','unreachable','some','104.18.42.54#优选IP-026','188.114.98.27#优选IP-244','nodeLimitCount','wss','addEventListener','setUint16','104.21.224.5#优选IP-197','keys','waitUntil','104.24.250.89#优选IP-296','mixed-in','randomUUID','104.25.223.90#优选IP-239','user','OSA','104.16.0.133#优选IP-093','charCodeAt','104.24.25.178#优选IP-284','新加坡','chrome','https://stock.hostmonit.com/CloudFlareYes','188.114.97.63#优选IP-219','encode','sum','clash','197.234.240.0/22','xPaddingKey','https://dns.alidns.com/resolve','162.159.128.1','订阅生成失败:\x20','\x20\x20\x20\x20\x20\x20path:\x20','endsWith','bestcf.top','162.159.236.19#优选IP-255','104.25.73.92#优选IP-187','Not\x20Found','stream-one','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','cloudflare.9jy.cc','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','[general]\x0anetwork_check_url=http://www.gstatic.com/generate_204\x0aserver_check_url=http://www.gstatic.com/generate_204\x0adns_exclusion_list=*.cmpassport.com,\x20*.qq.com,\x20*.weibo.com,\x20*.icloud.com\x0a[dns]\x0aserver=223.5.5.5\x0aserver=119.29.29.29\x0a[server_local]\x0a','stash','已重置：KV\x20已清空，面板还原为初始部署状态',',\x20tag=','104.27.207.36#优选IP-098','preferredIPs','releaseLock','混淆版','162.159.44.215#优选IP-031','stats','172.65.145.187#优选IP-081','POST','104.16.249.249#优选IP-009','exec','670yryWYq','application/octet-stream','乌克兰','application/dns-json','\x20=\x20','getRandomValues','xhttp\x20代理错误:\x20','104.24.54.254#优选IP-044','set','https://1.1.1.1/dns-query','188.114.97.52#优选IP-124','xPaddingHeader','url:','pass','random','href','https://bestcf.pages.dev/random-region/US/100.txt','enableXhttp','HEL','method','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','cidr','ech-opts','/main/','104.25.93.154#优选IP-126','\x20=\x20trojan,\x20','104.25.126.144#优选IP-272','headerLength','geosite-cn','https://bestcf.pages.dev/random-region/HK/100.txt','hostname',',\x20ws=true,\x20ws-path=','188.114.97.61#优选IP-164','&extra=','_ctx','104.17.245.237#优选IP-221','tun0','IP地址','optimizer','xhttp','proxy\x20timeout','cname.xirancdn.us','5noMcYX','TXT','searchParams','104.24.41.240#优选IP-212','104.25.24.66#优选IP-148','geosite-twitter','172.67.163.14#优选IP-108','requests','HOST','🌐\x20谷歌服务','未找到账户数据（检查账户\x20ID\x20与令牌权限）','GET','unknown','162.158.0.0/15','nekoray','PROXYIP','104.25.122.6#优选IP-053','encrypt','ADMIN','config','\x0a[policy]\x0astatic=🚀\x20节点选择,\x20','104.17.195.184#优选IP-135','\x20\x20\x20\x20\x20\x20headers:','x-padding-obfs-mode','172.67.85.54#优选IP-300','自定义源:\x20','quanx','162.159.192.111#优选IP-232','http://','8.889288.xyz','104.25.109.0#优选IP-275','mixed','value','padStart','TYO','tokenish','candidates','#原生地址','today','has','原生地址','104.27.195.79#优选IP-178','104.16.201.45#优选IP-160','console','getUint16','线路名称','190.93.240.0/20','aes-128gcm','172.67.232.109#优选IP-182','DUS','188.114.99.155#优选IP-086','ECH','104.17.25.173#优选IP-167','墨西哥','round','104.25.238.28#优选IP-277','\x20\x20\x20\x20\x20\x20query-server-name:\x20','geosite-netflix','binaryType','IPv6','false','push','104.16.123.26#优选IP-149','issued','104.27.27.106#优选IP-292','104.25.166.112#优选IP-159','无法识别的地址类型','extra','<tr','104.18.178.193#优选IP-183','GET\x20/\x20HTTP/1.1\x0d\x0aHost:\x20','error','get','104.18.37.92#优选IP-024','\x20\x20\x20\x20servername:\x20','v2ray','wetest_cname','104.18.123.15#优选IP-169','subrequests','text/html;\x20charset=utf-8','cpuTimeP50','115155.xyz','setUTCHours','090227','162.159.236.5#优选IP-065','172.66.199.166#优选IP-127','未授权（需要管理密码）','104.21.7.133#优选IP-226','HTTP\x20','172.65.139.108#优选IP-224','\x20\x20\x20\x20alpn:\x20[http/1.1]','&security=none','https://bestcf.pages.dev/random-region/SG/100.txt','172.66.161.31#优选IP-084','https://','bestcf','172.64.0.0/13','getUint32',',\x20tls=true,\x20skip-cert-verify=true,\x20sni=','getReader','104.27.21.175#优选IP-298','cf.0sm.com','104.21.213.24#优选IP-017','reset','104.25.86.143#优选IP-235','http','x-padding-header','quantiles','104.17.160.131#优选IP-194','162.159.94.229#优选IP-014','\x20\x20\x20\x20alpn:\x20[h2]','104.18.185.26#优选IP-297','ss-subkey','104.27.66.179#优选IP-076','https://bestcf.pages.dev/random-region/TW/100.txt','104.25.197.107#优选IP-105','104.19.88.253#优选IP-039','104.18.28.48#优选IP-156','quotaAuto','catch','ips','current','104.26.1.1','162.159.5.175#优选IP-015','不支持的\x20VLESS\x20版本','澳大利亚','xhttp-opts','104.27.116.114#优选IP-262','admin','opened','2c0f:f248::/32','104.16.66.7','startsWith','__proto__','text/plain','writable','queryInHeader','bind','\x20\x20\x20\x20password:\x20','2803:f800::/32','104.25.0.1','104.16.0.0/13','proxyip.multacom.cmliussss.net','proxyip.kr.cmliussss.net','104.17.146.117#优选IP-141','https://bestcf.pages.dev/random-region/JP/100.txt','lastIndexOf','1754koFxzD','\x20\x20\x20\x20\x20\x20x-padding-obfs-mode:\x20','security','加拿大','cfApiToken','密码错误','172.65.184.114#优选IP-189','text/yaml','?name=','direct','echHost','SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）','104.18.217.109#优选IP-033','proxyip.sg.cmliussss.net','172.65.162.213#优选IP-113','104.19.169.53#优选IP-061','比利时','xPaddingObfsMode','罗马尼亚','188.114.97.0#优选IP-205','ICN','104.18.144.168#优选IP-259','104.16.124.96#优选IP-003','dns','subarray','selector','162.159.230.149#优选IP-116','tls','🤖\x20OpenAI','104.18.18.214#优选IP-172','SOCKS5\x20服务器要求认证但未提供凭据','obfuscated','104.25.123.130#优选IP-240','/login?next=','ms\x20','104.24.84.86#优选IP-285','2.0.0','luma_auth=','172.19.0.1/30','188.114.96.255#优选IP-082','application/json;\x20charset=utf-8','188.114.96.0/20','write','104.16.98.7','code','104.16.127.96#优选IP-006','apply','(((.+)+)+)+$','read','data-label','104.19.23.222#优选IP-145','shift','\x20\x20\x20\x20ech-opts:','src','SS\x20分片长度非法\x20','log','update','188.114.99.14#优选IP-206','104.17.107.217#优选IP-133','Sec-WebSocket-Protocol','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','open','cloudflare-ip.mofashi.ltd','172.65.44.103#优选IP-218','\x20\x20-\x20name:\x20','104.24.178.200#优选IP-210','replace','headers','port','AES-GCM',',\x20password=','cf.zerone-cdn.pp.ua','x-padding-key','&type=ws&path=','keyLen','trojan=','max','abort','toISOString','104.25.20.146#优选IP-100','https','\x0d\x0aUser-Agent:\x20Mozilla/5.0\x0d\x0aConnection:\x20close\x0d\x0a\x0d\x0a','104.18.28.140#优选IP-095','CFNext\x20明文版.js','findIndex','104.17.118.180#优选IP-090','104.25.173.14#优选IP-273','162.159.237.243#优选IP-119','toUpperCase','葡萄牙','104.21.2.1','\x0a#\x20====================\x20锚点配置\x20====================\x0a#\x20代理提供者模板\x20-\x20订阅源基础配置\x0a\x0a#\x20节点筛选正则表达式\x20-\x20仅保留常用地区\x0aFilterHK:\x20&FilterHK\x20\x27^(?=.*(?i)(港|🇭🇰|HK|Hong|HKG))(?!.*5x).*$\x27\x0aFilterSG:\x20&FilterSG\x20\x27^(?=.*(?i)(坡|🇸🇬|SG|Sing|SIN|XSP))(?!.*5x).*$\x27\x0aFilterJP:\x20&FilterJP\x20\x27^(?=.*(?i)(日|🇯🇵|JP|Japan|NRT|HND|KIX|CTS|FUK))(?!.*(尼日利亚|5x)).*$\x27\x0aFilterUS:\x20&FilterUS\x20\x27^(?=.*(?i)(美|🇺🇸|US|USA|JFK|SJC|LAX|ORD|ATL|DFW|SFO|MIA|SEA|IAD))(?!.*(Plus|Australia|5x)).*$\x27\x0a#\x20注意：🇼🇸\x20是萨摩亚旗帜，不是台湾，已移除，避免误匹配\x0aFilterTW:\x20&FilterTW\x20\x27^(?=.*(?i)(台|🇹🇼|TW|tai|TPE|TSA|KHH))(?!.*5x).*$\x27\x0a\x0a#\x20====================\x20监听器\x20====================\x0alisteners:\x0a\x20\x20#\x20Shadowsocks监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）\x0a\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20shadowsocks,\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20udp:\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20aes-256-gcm}\x0a\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地浏览器插件或手机APP配置代理，实现分地区访问\x0a\x20\x20-\x20{name:\x20MIXED-SG,\x20type:\x20mixed,\x20port:\x2050000,\x20proxy:\x20新加坡节点}\x0a\x20\x20-\x20{name:\x20MIXED-US,\x20type:\x20mixed,\x20port:\x2050001,\x20proxy:\x20美国节点}\x0a\x20\x20-\x20{name:\x20MIXED-TW,\x20type:\x20mixed,\x20port:\x2050002,\x20proxy:\x20台湾节点}\x0a\x20\x20-\x20{name:\x20MIXED-HK,\x20type:\x20mixed,\x20port:\x2050003,\x20proxy:\x20香港节点}\x0a\x20\x20-\x20{name:\x20MIXED-JP,\x20type:\x20mixed,\x20port:\x2050004,\x20proxy:\x20日本节点}\x0a\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20一键连接}\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0aredir-port:\x207892\x0amixed-port:\x207893\x0atproxy-port:\x207895\x0aipv6:\x20true\x0aallow-lan:\x20true\x0aunified-delay:\x20true\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20mihomo:yyds666\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20zashboard\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20yyds666\x20\x20\x20\x20#\x20请修改为自定义密钥\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-network:\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20流量嗅探\x0asniffer:\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20TLS:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20dns-hijack:\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a#\x20====================\x20DNS\x20配置\x20====================\x0a#\x20防泄露要点：\x0a#\x20\x20\x201)\x20respect-rules:\x20true：DNS\x20服务器连接遵循路由规则（国外\x20DoH\x20走代理隧道、国内\x20DoH\x20直连），\x0a#\x20\x20\x20\x20\x20\x20解析行为与规则分流一致，避免“规则走代理、解析却直连”的泄露。\x0a#\x20\x20\x202)\x20默认\x20nameserver\x20用国内\x20DoH；只有“将走代理”的规则集才用国外\x20DoH，\x0a#\x20\x20\x20\x20\x20\x20且其域名在\x20rules\x20中显式固定走代理。\x0a#\x20\x20\x203)\x20fake-ip-filter\x20补齐系统连通性检测\x20/\x20时间同步\x20/\x20运营商登录等域名，防止系统误判断网而回退运营商\x20DNS。\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msftconnecttest.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22connectivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20rule-set:Direct\x0a\x20\x20\x20\x20-\x20rule-set:Private\x0a\x20\x20\x20\x20-\x20rule-set:China\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析：未命中\x20nameserver-policy\x20的域名（国内\x20DoH，直连）\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20直连出口的解析\x0a\x20\x20direct-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析代理节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20proxy-server-nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20nameserver-policy:\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22rule-set:Advertising,AWAvenueAds\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20直连类：国内\x20DoH（微软已并入直连，微软域名走国内解析后直连）\x0a\x20\x20\x20\x20\x22rule-set:Direct,Private,China,Microsoft\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20走代理类：国外\x20DoH（连接本身经代理隧道，不直连暴露查询）\x0a\x20\x20\x20\x20\x22rule-set:AI,Telegram,Twitter,SocialMedia,Netflix,YouTube,Spotify,TikTok,disney,Google,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.google/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://cloudflare-dns.com/dns-query\x22\x0a\x0a#\x20====================\x20代理策略组（9\x20个可见\x20+\x206\x20个隐藏自动子组）\x20====================\x0aproxy-groups:\x0a\x20\x20#\x20主入口：默认自动选择，可手动切换各地区\x20/\x20故障转移\x20/\x20全部节点\x20/\x20直接连接\x0a\x20\x20-\x20{name:\x20一键连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[自动选择,\x20故障转移,\x20香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点,\x20直接连接],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Static.png}\x0a\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点；故障转移：按序自动切换\x0a\x20\x20-\x20{name:\x20自动选择,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20hidden:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20故障转移,\x20\x20\x20\x20\x20type:\x20fallback,\x20proxies:\x20[香港节点,\x20台湾节点,\x20日本节点,\x20美国节点,\x20新加坡节点,\x20全部节点],\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/ULB.png}\x0a\x20\x20#\x20常用地区节点组（select：默认选中“XX自动”=自动优选该地区最快节点，也可手动指定单个节点）\x0a\x20\x20-\x20{name:\x20香港节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20proxies:\x20[香港自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Hong_Kong.png}\x0a\x20\x20-\x20{name:\x20台湾节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20proxies:\x20[台湾自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Taiwan.png}\x0a\x20\x20-\x20{name:\x20日本节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20proxies:\x20[日本自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Japan.png}\x0a\x20\x20-\x20{name:\x20美国节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20proxies:\x20[美国自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/United_States.png}\x0a\x20\x20-\x20{name:\x20新加坡节点,\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20proxies:\x20[新加坡自动],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Singapore.png}\x0a\x20\x20#\x20全部节点（手动挑选任意节点；首个选项“自动选择”=全部节点中最快）\x0a\x20\x20-\x20{name:\x20全部节点,\x20\x20\x20\x20\x20type:\x20select,\x20include-all:\x20true,\x20proxies:\x20[自动选择],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Global.png}\x0a\x20\x20#\x20各地区自动优选子组（隐藏，作为各地区分组内的“自动选择”选项）\x0a\x20\x20-\x20{name:\x20香港自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterHK,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20台湾自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterTW,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20日本自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterJP,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20美国自动,\x20\x20\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterUS,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20-\x20{name:\x20新加坡自动,\x20\x20\x20type:\x20url-test,\x20include-all:\x20true,\x20filter:\x20*FilterSG,\x20url:\x20\x27https://www.google.com/generate_204\x27,\x20interval:\x20200,\x20lazy:\x20true,\x20empty-fallback:\x20REJECT,\x20hidden:\x20true,\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Auto.png}\x0a\x20\x20#\x20直连分组（放在最下方）\x0a\x20\x20-\x20{name:\x20直接连接,\x20\x20\x20\x20\x20type:\x20select,\x20proxies:\x20[DIRECT],\x20icon:\x20https://github.com/Koolson/Qure/raw/master/IconSet/Color/Direct.png}\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为一键连接）\x0a\x20\x20-\x20RULE-SET,Tracking,REJECT\x0a\x20\x20-\x20RULE-SET,AWAvenueAds,REJECT\x0a\x20\x20-\x20RULE-SET,Advertising,REJECT\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直接连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直接连接\x0a\x20\x20-\x20DOMAIN,dns.google,一键连接\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,一键连接\x0a\x0a\x20\x20#\x20大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\x0a\x20\x20-\x20RULE-SET,Private,直接连接\x0a\x20\x20-\x20RULE-SET,Direct,直接连接\x0a\x20\x20-\x20RULE-SET,Download,直接连接\x0a\x20\x20-\x20RULE-SET,AppleCN,直接连接\x0a\x20\x20-\x20RULE-SET,Microsoft,直接连接\x20\x20\x20\x20\x20\x20\x20\x20#\x20微软全家桶直连（Office\x20/\x20OneDrive\x20/\x20Windows\x20更新\x20/\x20Teams\x20/\x20Xbox\x20等）\x0a\x20\x20-\x20RULE-SET,China,直接连接\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20国内域名直连\x0a\x20\x20#\x20阻止走代理的\x20QUIC（强制回退\x20TCP，避免\x20QUIC\x20绕过代理\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC（大陆\x20/\x20微软\x20/\x20苹果）不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走一键连接）\x0a\x20\x20-\x20RULE-SET,AI,一键连接\x0a\x20\x20-\x20RULE-SET,Telegram,一键连接\x0a\x20\x20-\x20RULE-SET,Twitter,一键连接\x0a\x20\x20-\x20RULE-SET,SocialMedia,一键连接\x0a\x20\x20-\x20RULE-SET,Netflix,一键连接\x0a\x20\x20-\x20RULE-SET,YouTube,一键连接\x0a\x20\x20-\x20RULE-SET,Spotify,一键连接\x0a\x20\x20-\x20RULE-SET,TikTok,一键连接\x0a\x20\x20-\x20RULE-SET,disney,一键连接\x0a\x20\x20-\x20RULE-SET,Google,一键连接\x0a\x20\x20-\x20RULE-SET,github,一键连接\x0a\x20\x20-\x20RULE-SET,Proxy,一键连接\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20RULE-SET,PrivateIP,直接连接,no-resolve\x0a\x20\x20-\x20RULE-SET,TelegramIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ProxyIP,一键连接,no-resolve\x0a\x20\x20-\x20RULE-SET,ChinaIP,直接连接,no-resolve\x0a\x0a\x20\x20#\x20大陆\x20IP\x20兜底直连：覆盖规则集未收录的域名\x20/\x20纯\x20IP\x20连接的大陆应用（GEOIP\x20库覆盖面更全）\x0a\x20\x20-\x20GEOIP,CN,直接连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：其余（国外）走一键连接\x0a\x20\x20-\x20MATCH,一键连接\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x203600,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0aBehaviorCL:\x20&BehaviorCL\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x2086400,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x20\x20\x20#\x20经典规则集（blackmatrix7\x20等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\x0a\x0a#\x20规则提供者（仅保留常用）\x0arule-providers:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Advertising.mrs}\x0a\x20\x20AWAvenueAds:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml}\x20\x20\x20#\x20大陆直连全量：ChinaMaxNoIP（11万+\x20域名，含大陆可达国际服务），每日更新\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Netflix.mrs}\x0a\x20\x20YouTube:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/YouTube.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml}\x20\x20\x20#\x20微软全家桶全量：blackmatrix7（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure\x20等）\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/domain/Proxy.mrs}\x0a\x20\x20#\x20媒体（DustinWin）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tiktok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20https://rule.kelee.one/Clash/GitHub.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Private.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Telegram.mrs}\x0a\x20\x20ProxyIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/Proxy.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20https://github.com/666OS/rules/raw/release/mihomo/ip/China.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a','true','native','173.245.48.0/20'];_0x3786=function(){return _0xe9137c;};return _0x3786();}function sha1Bytes(_0xb424d4){const _0x588a22=_0x40b3d2,_0xfa2fa9=_0xb424d4 instanceof Uint8Array?_0xb424d4:new Uint8Array(_0xb424d4),_0x26de97=_0xfa2fa9[_0x588a22(0x41b)],_0x5c18ac=_0x26de97*0x8,_0x548cca=new Uint8Array((_0x26de97+0x8>>0x6)+0x1<<0x6);_0x548cca[_0x588a22(0x2cb)](_0xfa2fa9),_0x548cca[_0x26de97]=0x80;const _0x1d5465=new DataView(_0x548cca[_0x588a22(0x215)]);_0x1d5465[_0x588a22(0x409)](_0x548cca[_0x588a22(0x41b)]-0x8,Math[_0x588a22(0x239)](_0x5c18ac/0x100000000),![]),_0x1d5465[_0x588a22(0x409)](_0x548cca[_0x588a22(0x41b)]-0x4,_0x5c18ac>>>0x0,![]);let _0x1a832b=0x67452301,_0x1597b5=0xefcdab89,_0x124c06=0x98badcfe,_0x1ae6b7=0x10325476,_0x30c6a8=0xc3d2e1f0;const _0x59ef40=new Uint32Array(0x50);for(let _0x1ab385=0x0;_0x1ab385<_0x548cca[_0x588a22(0x41b)];_0x1ab385+=0x40){for(let _0x5c82ef=0x0;_0x5c82ef<0x10;_0x5c82ef++)_0x59ef40[_0x5c82ef]=_0x1d5465['getUint32'](_0x1ab385+_0x5c82ef*0x4,![]);for(let _0x1e9e40=0x10;_0x1e9e40<0x50;_0x1e9e40++)_0x59ef40[_0x1e9e40]=rotl32(_0x59ef40[_0x1e9e40-0x3]^_0x59ef40[_0x1e9e40-0x8]^_0x59ef40[_0x1e9e40-0xe]^_0x59ef40[_0x1e9e40-0x10],0x1);let _0xf1f5b5=_0x1a832b,_0x103047=_0x1597b5,_0x514b6c=_0x124c06,_0x1935f7=_0x1ae6b7,_0x2d21c3=_0x30c6a8;for(let _0x3a195e=0x0;_0x3a195e<0x50;_0x3a195e++){let _0x2aa9d2,_0x1cdc35;if(_0x3a195e<0x14)_0x2aa9d2=_0x103047&_0x514b6c|~_0x103047&_0x1935f7,_0x1cdc35=0x5a827999;else{if(_0x3a195e<0x28)_0x2aa9d2=_0x103047^_0x514b6c^_0x1935f7,_0x1cdc35=0x6ed9eba1;else _0x3a195e<0x3c?(_0x2aa9d2=_0x103047&_0x514b6c|_0x103047&_0x1935f7|_0x514b6c&_0x1935f7,_0x1cdc35=0x8f1bbcdc):(_0x2aa9d2=_0x103047^_0x514b6c^_0x1935f7,_0x1cdc35=0xca62c1d6);}const _0x1bfb4e=rotl32(_0xf1f5b5,0x5)+_0x2aa9d2+_0x2d21c3+_0x1cdc35+_0x59ef40[_0x3a195e]>>>0x0;_0x2d21c3=_0x1935f7,_0x1935f7=_0x514b6c,_0x514b6c=rotl32(_0x103047,0x1e),_0x103047=_0xf1f5b5,_0xf1f5b5=_0x1bfb4e;}_0x1a832b=_0x1a832b+_0xf1f5b5>>>0x0,_0x1597b5=_0x1597b5+_0x103047>>>0x0,_0x124c06=_0x124c06+_0x514b6c>>>0x0,_0x1ae6b7=_0x1ae6b7+_0x1935f7>>>0x0,_0x30c6a8=_0x30c6a8+_0x2d21c3>>>0x0;}const _0x1ee4c8=new Uint8Array(0x14),_0x3efe09=new DataView(_0x1ee4c8[_0x588a22(0x215)]);return _0x3efe09[_0x588a22(0x409)](0x0,_0x1a832b,![]),_0x3efe09['setUint32'](0x4,_0x1597b5,![]),_0x3efe09[_0x588a22(0x409)](0x8,_0x124c06,![]),_0x3efe09[_0x588a22(0x409)](0xc,_0x1ae6b7,![]),_0x3efe09[_0x588a22(0x409)](0x10,_0x30c6a8,![]),_0x1ee4c8;}function hmacSha1(_0x309d8d,_0x352846){const _0x27a2dc=_0x40b3d2,_0x40ba04=0x40;let _0x2719c4=_0x309d8d;if(_0x2719c4['length']>_0x40ba04)_0x2719c4=sha1Bytes(_0x2719c4);const _0x523883=new Uint8Array(_0x40ba04),_0x35dd36=new Uint8Array(_0x40ba04);for(let _0x5c4ae2=0x0;_0x5c4ae2<_0x40ba04;_0x5c4ae2++){_0x523883[_0x5c4ae2]=(_0x5c4ae2<_0x2719c4[_0x27a2dc(0x41b)]?_0x2719c4[_0x5c4ae2]:0x0)^0x36,_0x35dd36[_0x5c4ae2]=(_0x5c4ae2<_0x2719c4[_0x27a2dc(0x41b)]?_0x2719c4[_0x5c4ae2]:0x0)^0x5c;}return sha1Bytes(concatBytes(_0x35dd36,sha1Bytes(concatBytes(_0x523883,_0x352846))));}function hkdfSha1(_0x3ec3e9,_0x53db2c,_0x232dc2){const _0x408813=_0x40b3d2,_0x4b6c8d=hmacSha1(_0x53db2c&&_0x53db2c['length']?_0x53db2c:new Uint8Array(0x14),_0x3ec3e9);let _0x8b1b04=new Uint8Array(0x0),_0x12465b=new Uint8Array(0x0);for(let _0x5cc6fe=0x1;_0x12465b['length']<_0x232dc2;_0x5cc6fe++){const _0x3c6d08=new Uint8Array([_0x5cc6fe]);_0x8b1b04=hmacSha1(_0x4b6c8d,concatBytes(concatBytes(_0x8b1b04,TE[_0x408813(0x2a3)](_0x408813(0x35d))),_0x3c6d08)),_0x12465b=concatBytes(_0x12465b,_0x8b1b04);}return _0x12465b['slice'](0x0,_0x232dc2);}function chacha20Block(_0x7b5765,_0x384f9a,_0x2a4610){const _0x1c66c1=_0x40b3d2,_0x583d7b=new Uint32Array(0x10);_0x583d7b[0x0]=0x61707865,_0x583d7b[0x1]=0x3320646e,_0x583d7b[0x2]=0x79622d32,_0x583d7b[0x3]=0x6b206574;const _0x148f23=new DataView(_0x7b5765['buffer'],_0x7b5765['byteOffset'],0x20);for(let _0x463c0b=0x0;_0x463c0b<0x8;_0x463c0b++)_0x583d7b[0x4+_0x463c0b]=_0x148f23[_0x1c66c1(0x34e)](_0x463c0b*0x4,!![]);_0x583d7b[0xc]=_0x384f9a>>>0x0;const _0x4aaa0d=new DataView(_0x2a4610['buffer'],_0x2a4610[_0x1c66c1(0x212)],0xc);_0x583d7b[0xd]=_0x4aaa0d[_0x1c66c1(0x34e)](0x0,!![]),_0x583d7b[0xe]=_0x4aaa0d[_0x1c66c1(0x34e)](0x4,!![]),_0x583d7b[0xf]=_0x4aaa0d[_0x1c66c1(0x34e)](0x8,!![]);const _0x32b7e2=_0x583d7b[_0x1c66c1(0x27e)](),_0x5d9c35=(_0x5ae2e5,_0x21f97e,_0x479fd2,_0x395a2f)=>{_0x32b7e2[_0x5ae2e5]=_0x32b7e2[_0x5ae2e5]+_0x32b7e2[_0x21f97e]>>>0x0,_0x32b7e2[_0x395a2f]=rotl32(_0x32b7e2[_0x395a2f]^_0x32b7e2[_0x5ae2e5],0x10),_0x32b7e2[_0x479fd2]=_0x32b7e2[_0x479fd2]+_0x32b7e2[_0x395a2f]>>>0x0,_0x32b7e2[_0x21f97e]=rotl32(_0x32b7e2[_0x21f97e]^_0x32b7e2[_0x479fd2],0xc),_0x32b7e2[_0x5ae2e5]=_0x32b7e2[_0x5ae2e5]+_0x32b7e2[_0x21f97e]>>>0x0,_0x32b7e2[_0x395a2f]=rotl32(_0x32b7e2[_0x395a2f]^_0x32b7e2[_0x5ae2e5],0x8),_0x32b7e2[_0x479fd2]=_0x32b7e2[_0x479fd2]+_0x32b7e2[_0x395a2f]>>>0x0,_0x32b7e2[_0x21f97e]=rotl32(_0x32b7e2[_0x21f97e]^_0x32b7e2[_0x479fd2],0x7);};for(let _0x4f41fe=0x0;_0x4f41fe<0xa;_0x4f41fe++){_0x5d9c35(0x0,0x4,0x8,0xc),_0x5d9c35(0x1,0x5,0x9,0xd),_0x5d9c35(0x2,0x6,0xa,0xe),_0x5d9c35(0x3,0x7,0xb,0xf),_0x5d9c35(0x0,0x5,0xa,0xf),_0x5d9c35(0x1,0x6,0xb,0xc),_0x5d9c35(0x2,0x7,0x8,0xd),_0x5d9c35(0x3,0x4,0x9,0xe);}const _0x57b6c6=new Uint8Array(0x40),_0x599b54=new DataView(_0x57b6c6[_0x1c66c1(0x215)]);for(let _0x5025ef=0x0;_0x5025ef<0x10;_0x5025ef++){_0x32b7e2[_0x5025ef]=_0x32b7e2[_0x5025ef]+_0x583d7b[_0x5025ef]>>>0x0,_0x599b54[_0x1c66c1(0x409)](_0x5025ef*0x4,_0x32b7e2[_0x5025ef],!![]);}return _0x57b6c6;}function chacha20Xor(_0x2a8396,_0x524913,_0x2d35a8,_0x3d76b9){const _0x2ebe33=_0x40b3d2,_0x30af74=_0x3d76b9[_0x2ebe33(0x27e)](),_0x5e244d=Math['ceil'](_0x3d76b9['length']/0x40);for(let _0x21aabf=0x0;_0x21aabf<_0x5e244d;_0x21aabf++){const _0xa9c420=chacha20Block(_0x2a8396,_0x2d35a8+_0x21aabf,_0x524913),_0x23e676=_0x21aabf*0x40,_0x5bb07a=Math[_0x2ebe33(0x236)](0x40,_0x30af74['length']-_0x23e676);for(let _0x5e0487=0x0;_0x5e0487<_0x5bb07a;_0x5e0487++)_0x30af74[_0x23e676+_0x5e0487]^=_0xa9c420[_0x5e0487];}return _0x30af74;}function poly1305(_0x2a8aaa,_0x1e1372){const _0x579227=_0x40b3d2;let _0x5cdd75=0x0n,_0xdc1d54=0x0n;for(let _0x222fb8=0x0;_0x222fb8<0x10;_0x222fb8++){_0x5cdd75|=BigInt(_0x2a8aaa[_0x222fb8])<<BigInt(0x8*_0x222fb8),_0xdc1d54|=BigInt(_0x2a8aaa[0x10+_0x222fb8])<<BigInt(0x8*_0x222fb8);}_0x5cdd75&=0xffffffc0ffffffc0ffffffc0fffffffn;let _0x290ee6=0x0n;const _0x19fbf2=(0x1n<<0x82n)-0x5n;for(let _0x50ebf7=0x0;_0x50ebf7<_0x1e1372[_0x579227(0x41b)];_0x50ebf7+=0x10){const _0x150fa8=Math[_0x579227(0x236)](0x10,_0x1e1372[_0x579227(0x41b)]-_0x50ebf7);let _0xb925ec=0x1n;for(let _0x2e36a2=_0x150fa8-0x1;_0x2e36a2>=0x0;_0x2e36a2--)_0xb925ec=_0xb925ec<<0x8n|BigInt(_0x1e1372[_0x50ebf7+_0x2e36a2]);_0x290ee6=(_0x290ee6+_0xb925ec)*_0x5cdd75%_0x19fbf2;}_0x290ee6=_0x290ee6+_0xdc1d54&(0x1n<<0x80n)-0x1n;const _0x41cfc0=new Uint8Array(0x10);for(let _0x32c6ed=0x0;_0x32c6ed<0x10;_0x32c6ed++)_0x41cfc0[_0x32c6ed]=Number(_0x290ee6>>BigInt(0x8*_0x32c6ed)&0xffn);return _0x41cfc0;}function chacha20Poly1305Seal(_0x1af3ae,_0x1dec7b,_0x54ff70,_0x460459){const _0x3b8118=_0x40b3d2,_0x481017=_0x460459||new Uint8Array(0x0),_0x9b3b4d=chacha20Xor(_0x1af3ae,_0x1dec7b,0x0,new Uint8Array(0x20)),_0x3e17b6=chacha20Xor(_0x1af3ae,_0x1dec7b,0x1,_0x54ff70),_0x76cfb8=_0x5b3937=>new Uint8Array((0x10-_0x5b3937%0x10)%0x10),_0x2a7d25=_0x4ec6b1=>{const _0x14f443=_0x150d,_0x25487a=new Uint8Array(0x8),_0x280e26=new DataView(_0x25487a[_0x14f443(0x215)]);return _0x280e26[_0x14f443(0x409)](0x0,_0x4ec6b1>>>0x0,!![]),_0x280e26[_0x14f443(0x409)](0x4,Math['floor'](_0x4ec6b1/0x100000000),!![]),_0x25487a;},_0x5036de=concatBytes(_0x481017,concatBytes(_0x76cfb8(_0x481017[_0x3b8118(0x41b)]),concatBytes(_0x3e17b6,concatBytes(_0x76cfb8(_0x3e17b6[_0x3b8118(0x41b)]),concatBytes(_0x2a7d25(_0x481017['length']),_0x2a7d25(_0x3e17b6[_0x3b8118(0x41b)])))))),_0x25b29e=poly1305(_0x9b3b4d,_0x5036de);return concatBytes(_0x3e17b6,_0x25b29e);}function chacha20Poly1305Open(_0x530114,_0x5842ca,_0x1b8d8a,_0x3ca8dd){const _0xe057ef=_0x40b3d2;if(_0x1b8d8a[_0xe057ef(0x41b)]<0x10)throw new Error(_0xe057ef(0x41c));const _0x55fe76=_0x1b8d8a[_0xe057ef(0x398)](0x0,_0x1b8d8a[_0xe057ef(0x41b)]-0x10),_0x549188=_0x1b8d8a[_0xe057ef(0x398)](_0x1b8d8a[_0xe057ef(0x41b)]-0x10),_0x428df3=_0x3ca8dd||new Uint8Array(0x0),_0x58f5dc=chacha20Xor(_0x530114,_0x5842ca,0x0,new Uint8Array(0x20)),_0x50e7f4=_0x19db8b=>new Uint8Array((0x10-_0x19db8b%0x10)%0x10),_0x3d2ad6=_0xe24698=>{const _0x5bea53=_0xe057ef,_0xe9b16d=new Uint8Array(0x8),_0x443740=new DataView(_0xe9b16d[_0x5bea53(0x215)]);return _0x443740[_0x5bea53(0x409)](0x0,_0xe24698>>>0x0,!![]),_0x443740[_0x5bea53(0x409)](0x4,Math[_0x5bea53(0x239)](_0xe24698/0x100000000),!![]),_0xe9b16d;},_0x26affc=concatBytes(_0x428df3,concatBytes(_0x50e7f4(_0x428df3['length']),concatBytes(_0x55fe76,concatBytes(_0x50e7f4(_0x55fe76[_0xe057ef(0x41b)]),concatBytes(_0x3d2ad6(_0x428df3[_0xe057ef(0x41b)]),_0x3d2ad6(_0x55fe76[_0xe057ef(0x41b)])))))),_0x54f4b2=poly1305(_0x58f5dc,_0x26affc);let _0x400337=0x0;for(let _0x8b7b4b=0x0;_0x8b7b4b<0x10;_0x8b7b4b++)_0x400337|=_0x54f4b2[_0x8b7b4b]^_0x549188[_0x8b7b4b];if(_0x400337!==0x0)return null;return chacha20Xor(_0x530114,_0x5842ca,0x1,_0x55fe76);}async function newSsAead(_0x4fbd33,_0x34cc7f){const _0x2cd1ee=_0x40b3d2,_0x1b7630=new Uint8Array(0xc),_0x120736=()=>{const _0x50f176=_0x150d,_0xb01f18=_0x1b7630[_0x50f176(0x27e)]();for(let _0x5b6688=0xb;_0x5b6688>=0x0;_0x5b6688--){_0xb01f18[_0x5b6688]++;if(_0xb01f18[_0x5b6688]!==0x0)break;}return _0xb01f18;};if(_0x4fbd33===_0x2cd1ee(0x459))return{'seal'(_0x1e28b2){return chacha20Poly1305Seal(_0x34cc7f,_0x120736(),_0x1e28b2);},'open'(_0x11b24a){const _0xd603eb=chacha20Poly1305Open(_0x34cc7f,_0x120736(),_0x11b24a);if(!_0xd603eb)throw new Error('SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）');return _0xd603eb;}};const _0x33b873=await crypto[_0x2cd1ee(0x27b)][_0x2cd1ee(0x3e1)](_0x2cd1ee(0x185),_0x34cc7f,{'name':_0x4fbd33},![],[_0x2cd1ee(0x2fe),_0x2cd1ee(0x1ad)]);return{async 'seal'(_0x46c4b8){return new Uint8Array(await crypto['subtle']['encrypt']({'name':_0x4fbd33,'iv':_0x120736()},_0x33b873,_0x46c4b8));},async 'open'(_0x520ff7){const _0x5cf64b=_0x2cd1ee;try{return new Uint8Array(await crypto[_0x5cf64b(0x27b)][_0x5cf64b(0x1ad)]({'name':_0x4fbd33,'iv':_0x120736()},_0x33b873,_0x520ff7));}catch(_0x431d58){throw new Error(_0x5cf64b(0x38b));}}};}async function ssSealChunk(_0x3491b8,_0x2e711a){const _0xcf7c2a=_0x40b3d2,_0x333911=new Uint8Array([_0x2e711a[_0xcf7c2a(0x41b)]>>0x8&0xff,_0x2e711a[_0xcf7c2a(0x41b)]&0xff]);return concatBytes(await _0x3491b8[_0xcf7c2a(0x190)](_0x333911),await _0x3491b8[_0xcf7c2a(0x190)](_0x2e711a));}async function connectViaShadowsocks(_0x3f1e7f,_0x15e7a9){const _0x536602=_0x40b3d2,_0x3ec069=ssCipherAlgo(_0x3f1e7f['method']);if(!_0x3ec069)throw new Error('不支持的\x20SS\x20加密方式:\x20'+(_0x3f1e7f[_0x536602(0x2d6)]||'（未指定）'));if(!_0x3f1e7f[_0x536602(0x440)])throw new Error('SS\x20出站缺少密码');const _0x2a4add=await connectWithTimeout(_0x3f1e7f['host'],_0x3f1e7f[_0x536602(0x3c4)],0x1770),_0x18d7cb=_0x2a4add['writable'][_0x536602(0x184)](),_0x2091bd=_0x2a4add[_0x536602(0x218)][_0x536602(0x350)]();let _0x240b18=new Uint8Array(0x0);const _0x96c12a=async _0x578d0f=>{const _0x57fe56=_0x536602;while(_0x240b18[_0x57fe56(0x41b)]<_0x578d0f){const {done:_0x45d0cc,value:_0x2de781}=await _0x2091bd[_0x57fe56(0x3b0)]();if(_0x45d0cc)throw new Error(_0x57fe56(0x28a));_0x240b18=concatBytes(_0x240b18,_0x2de781);}const _0x189331=_0x240b18[_0x57fe56(0x27e)](0x0,_0x578d0f);return _0x240b18=_0x240b18[_0x57fe56(0x398)](_0x578d0f),_0x189331;},_0x7ce946=new Uint8Array(await crypto[_0x536602(0x27b)][_0x536602(0x3f5)](_0x536602(0x19f),TE[_0x536602(0x2a3)](_0x3f1e7f['password']))),_0x446653=crypto[_0x536602(0x2c8)](new Uint8Array(0x10)),_0x471035=await newSsAead(_0x3ec069[_0x536602(0x1ca)],await hkdfSha1(_0x7ce946,_0x446653,_0x3ec069[_0x536602(0x3ca)]));await _0x18d7cb['write'](_0x446653),await _0x18d7cb[_0x536602(0x3aa)](await ssSealChunk(_0x471035,new Uint8Array(0x0)));const _0x5b3f57=new ReadableStream({async 'start'(_0x53a32b){const _0x5a4fa4=_0x536602;try{const _0x3c2ec3=await _0x96c12a(0x10),_0x394654=await newSsAead(_0x3ec069[_0x5a4fa4(0x1ca)],await hkdfSha1(_0x7ce946,_0x3c2ec3,_0x3ec069[_0x5a4fa4(0x3ca)]));while(!![]){const _0x49ffbf=await _0x394654[_0x5a4fa4(0x3bd)](await _0x96c12a(0x12)),_0x255f6d=_0x49ffbf[0x0]<<0x8|_0x49ffbf[0x1];if(_0x255f6d>0x4000)throw new Error(_0x5a4fa4(0x3b6)+_0x255f6d);const _0xbebb04=await _0x394654[_0x5a4fa4(0x3bd)](await _0x96c12a(_0x255f6d+0x10));if(_0x255f6d>0x0)_0x53a32b[_0x5a4fa4(0x14d)](_0xbebb04);}}catch(_0x542f04){try{_0x53a32b[_0x5a4fa4(0x334)](_0x542f04);}catch(_0x279904){}}}}),_0x31c72f=new WritableStream({async 'write'(_0x393fd0){const _0x321e35=_0x536602,_0x5be627=_0x393fd0 instanceof Uint8Array?_0x393fd0:new Uint8Array(_0x393fd0);for(let _0x1e3eda=0x0;_0x1e3eda<_0x5be627['length'];_0x1e3eda+=0x4000){await _0x18d7cb[_0x321e35(0x3aa)](await ssSealChunk(_0x471035,_0x5be627[_0x321e35(0x398)](_0x1e3eda,Math[_0x321e35(0x236)](_0x5be627['length'],_0x1e3eda+0x4000))));}},'close'(){const _0x41cc28=_0x536602;try{_0x18d7cb[_0x41cc28(0x451)]();}catch(_0x3c92cb){}},'abort'(){const _0x1ad40d=_0x536602;try{_0x18d7cb[_0x1ad40d(0x3cd)]();}catch(_0x1befd8){}}});return{'readable':_0x5b3f57,'writable':_0x31c72f,'close'(){const _0x414474=_0x536602;try{_0x2a4add[_0x414474(0x451)]();}catch(_0x2b5b9c){}}};}async function readN(_0x5ad56a,_0x1db217){const _0x3fbbad=_0x40b3d2,_0xc4bc1=new Uint8Array(_0x1db217);let _0x24e914=0x0;while(_0x24e914<_0x1db217){const {done:_0x3dd6eb,value:_0x19bca7}=await _0x5ad56a['read']();if(_0x3dd6eb)throw new Error(_0x3fbbad(0x25c));const _0x2e4107=_0x1db217-_0x24e914;_0xc4bc1[_0x3fbbad(0x2cb)](_0x19bca7['subarray'](0x0,Math[_0x3fbbad(0x236)](_0x2e4107,_0x19bca7[_0x3fbbad(0x41b)])),_0x24e914),_0x24e914+=Math[_0x3fbbad(0x236)](_0x2e4107,_0x19bca7[_0x3fbbad(0x41b)]);}return _0xc4bc1;}async function readUntilCRLFCRLF(_0x534372){const _0x67349a=_0x40b3d2;let _0x29c8d2=new Uint8Array(0x0);while(_0x29c8d2[_0x67349a(0x41b)]<0x10000){const {done:_0x164634,value:_0x5c6cfa}=await _0x534372[_0x67349a(0x3b0)]();if(_0x164634)break;_0x29c8d2=concatBytes(_0x29c8d2,_0x5c6cfa);const _0x5cba51=findBytes(_0x29c8d2,[0xd,0xa,0xd,0xa]);if(_0x5cba51>=0x0)return{'head':TD['decode'](_0x29c8d2[_0x67349a(0x398)](0x0,_0x5cba51)),'leftover':_0x29c8d2[_0x67349a(0x398)](_0x5cba51+0x4)};}return{'head':TD[_0x67349a(0x20c)](_0x29c8d2),'leftover':new Uint8Array(0x0)};}function concatBytes(_0x3ae8ed,_0x137044){const _0x983f76=_0x40b3d2,_0x113abe=new Uint8Array(_0x3ae8ed[_0x983f76(0x41b)]+_0x137044['length']);return _0x113abe['set'](_0x3ae8ed,0x0),_0x113abe[_0x983f76(0x2cb)](_0x137044,_0x3ae8ed[_0x983f76(0x41b)]),_0x113abe;}function findBytes(_0x3cddfb,_0x5d0e9c){const _0x4fcf8e=_0x40b3d2;_0x485086:for(let _0x170e73=0x0;_0x170e73<=_0x3cddfb['length']-_0x5d0e9c[_0x4fcf8e(0x41b)];_0x170e73++){for(let _0xdad44b=0x0;_0xdad44b<_0x5d0e9c[_0x4fcf8e(0x41b)];_0xdad44b++)if(_0x3cddfb[_0x170e73+_0xdad44b]!==_0x5d0e9c[_0xdad44b])continue _0x485086;return _0x170e73;}return-0x1;}const RELAY_DOMAINS={'HK':_0x40b3d2(0x433),'US':'proxyip.us.cmliussss.net','SG':_0x40b3d2(0x38d),'JP':'proxyip.jp.cmliussss.net','KR':_0x40b3d2(0x37c),'DE':_0x40b3d2(0x424),'SE':_0x40b3d2(0x13a),'NL':'proxyip.nl.cmliussss.net','FI':'proxyip.fi.cmliussss.net','GB':'proxyip.gb.cmliussss.net','Oracle':'proxyip.oracle.cmliussss.net','DigitalOcean':'proxyip.digitalocean.cmliussss.net','Vultr':_0x40b3d2(0x40e),'Multacom':_0x40b3d2(0x37b)};function selectRelayRegion(_0x4f33a6){const _0x42b9b2=_0x40b3d2,_0x5730c0=(_0x4f33a6||'')['toUpperCase']();if(_0x5730c0[_0x42b9b2(0x371)]('HKG')||_0x5730c0['startsWith']('HK'))return'HK';if(_0x5730c0[_0x42b9b2(0x371)]('SIN')||_0x5730c0[_0x42b9b2(0x371)]('SG'))return'SG';if(_0x5730c0[_0x42b9b2(0x371)]('NRT')||_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x1bc))||_0x5730c0['startsWith'](_0x42b9b2(0x30f))||_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x29b))||_0x5730c0[_0x42b9b2(0x371)]('JP'))return'JP';if(_0x5730c0['startsWith'](_0x42b9b2(0x394))||_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x163))||_0x5730c0[_0x42b9b2(0x371)]('KR'))return'KR';if(/^(HKG|SIN|NRT|KIX|ICN|TYO|OSA|SEL|HK|SG|JP|KR|SJC)/[_0x42b9b2(0x1ee)](_0x5730c0))return'HK';if(_0x5730c0['startsWith'](_0x42b9b2(0x418))||_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x438))||_0x5730c0['startsWith']('MUC')||_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x31e))||_0x5730c0[_0x42b9b2(0x371)]('HAM')||_0x5730c0['startsWith'](_0x42b9b2(0x260))||_0x5730c0[_0x42b9b2(0x371)]('DE'))return'DE';if(_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x1ec))||_0x5730c0[_0x42b9b2(0x371)]('SE'))return'SE';if(_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x175))||_0x5730c0[_0x42b9b2(0x371)]('NL'))return'NL';if(_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x2d5))||_0x5730c0[_0x42b9b2(0x371)]('FI'))return'FI';if(_0x5730c0['startsWith']('LHR')||_0x5730c0[_0x42b9b2(0x371)](_0x42b9b2(0x231))||_0x5730c0['startsWith']('GB')||_0x5730c0['startsWith']('UK'))return'GB';if(/^(FRA|ARN|AMS|HEL|LHR|MAN|CDG|MAD|VIE|ZRH|MXP|PRG|WAW|BER|MUC|DUS|HAM|STR|DE|SE|NL|FI|GB|UK|FR|ES|AT|CH|IT|CZ|PL)/['test'](_0x5730c0))return'DE';return'US';}const PROXYIP_CACHE=new Map();async function resolveProxyIPs(_0x31548a,_0x4bf0f0){const _0x45f351=_0x40b3d2;_0x4bf0f0=_0x4bf0f0||0x1bb;if(isValidIp(_0x31548a))return[{'hostname':_0x31548a,'port':_0x4bf0f0}];const _0x283622=_0x31548a+':'+_0x4bf0f0,_0x4b9759=Date[_0x45f351(0x25b)](),_0x3ce9e4=PROXYIP_CACHE[_0x45f351(0x335)](_0x283622);if(_0x3ce9e4&&_0x4b9759-_0x3ce9e4['t']<0x5*0x3c*0x3e8)return _0x3ce9e4['ips'];const _0x40d601=[_0x45f351(0x429),'https://dns.alidns.com/resolve',_0x45f351(0x23c)],_0x494acf=async(_0x798fc2,_0x383ede)=>{const _0x749fad=_0x45f351,_0x36059d=_0x40d601[_0x749fad(0x114)](async _0xfe0ca5=>{const _0x46d991=_0x749fad,_0x2005a4=await fetchTimeout(_0xfe0ca5+_0x46d991(0x388)+encodeURIComponent(_0x31548a)+_0x46d991(0x187)+_0x798fc2,{'headers':{'accept':_0x46d991(0x2c6)}},0xfa0);if(!_0x2005a4||!_0x2005a4['ok'])throw new Error(_0x46d991(0x134));const _0x14b554=await _0x2005a4[_0x46d991(0x1af)]();return(_0x14b554[_0x46d991(0x3fb)]||[])['filter'](_0x4f465d=>_0x4f465d['type']===_0x383ede)[_0x46d991(0x114)](_0x1ae093=>_0x1ae093[_0x46d991(0x407)]);});try{return await Promise[_0x749fad(0x180)](_0x36059d);}catch(_0x5a9f91){return[];}},[_0x8a1439,_0x480bb1]=await Promise['all']([_0x494acf(_0x45f351(0x2ee),0x10),_0x494acf('A',0x1)]);let _0x5b25b6=[];for(const _0x5d4ebd of _0x8a1439){const _0x3265a7=String(_0x5d4ebd)['replace'](/^"|"$/g,'')[_0x45f351(0x3c2)](/\\010/g,',')[_0x45f351(0x3c2)](/\n/g,',')[_0x45f351(0x283)]();if(!_0x3265a7)continue;if(_0x3265a7===_0x45f351(0x24d)){_0x5b25b6=_0x480bb1[_0x45f351(0x1b7)](_0x58e942=>/^\d+\.\d+\.\d+\.\d+$/['test'](_0x58e942))[_0x45f351(0x114)](_0x50a45c=>({'hostname':_0x50a45c,'port':_0x4bf0f0}));break;}const _0x16d964=_0x3265a7[_0x45f351(0x420)](/[,;\s]+/)[_0x45f351(0x114)](_0x56093a=>_0x56093a[_0x45f351(0x283)]())[_0x45f351(0x1b7)](Boolean),_0x301526=[];for(const _0x3074f4 of _0x16d964){const {host:_0x2c816d,port:_0x528799}=parseHostPort(_0x3074f4,_0x4bf0f0);if(isValidIp(_0x2c816d))_0x301526[_0x45f351(0x32a)]({'hostname':_0x2c816d,'port':_0x528799});}if(_0x301526[_0x45f351(0x41b)]){_0x5b25b6=_0x301526;break;}}!_0x5b25b6[_0x45f351(0x41b)]&&(_0x5b25b6=_0x480bb1[_0x45f351(0x1b7)](_0x3e121d=>/^\d+\.\d+\.\d+\.\d+$/[_0x45f351(0x1ee)](_0x3e121d))['map'](_0x7e3b2=>({'hostname':_0x7e3b2,'port':_0x4bf0f0})));if(!_0x5b25b6[_0x45f351(0x41b)]){const _0x284e53=await _0x494acf(_0x45f351(0x3f8),0x1c);_0x5b25b6=_0x284e53[_0x45f351(0x1b7)](_0x40c525=>isValidIp(_0x40c525))[_0x45f351(0x114)](_0x445f1d=>({'hostname':_0x445f1d,'port':_0x4bf0f0}));}const _0x2279d0=new Set(),_0x126ad1=_0x5b25b6[_0x45f351(0x1b7)](_0x277cde=>{const _0x195b1f=_0x45f351,_0x33e34a=_0x277cde[_0x195b1f(0x2e1)]+':'+_0x277cde['port'];if(_0x2279d0['has'](_0x33e34a))return![];return _0x2279d0[_0x195b1f(0x121)](_0x33e34a),!![];});if(_0x126ad1[_0x45f351(0x41b)])PROXYIP_CACHE[_0x45f351(0x2cb)](_0x283622,{'t':_0x4b9759,'ips':_0x126ad1});return _0x126ad1;}async function openOutbound(_0x502ac9,_0x29fb4c,_0x4233f1,_0x5cefc8){const _0x411fcf=_0x40b3d2,_0x1d8caf=parseProxyAddress(_0x29fb4c[_0x411fcf(0x197)]),_0x591639=_0x29fb4c[_0x411fcf(0x42b)]||'',_0x3c27=_0x1d8caf?_0x1d8caf[_0x411fcf(0x457)]===_0x411fcf(0x356)||_0x1d8caf['type']==='https'?_0x57a80a=>connectViaHttpProxy(_0x1d8caf,_0x57a80a):_0x1d8caf[_0x411fcf(0x457)]==='ss'?_0x543132=>connectViaShadowsocks(_0x1d8caf,_0x543132):_0x295cbe=>connectViaSocks5(_0x1d8caf,_0x295cbe):null,_0x9b45d9=(_0x8bc213,_0x5567da)=>{const _0x76bb07=_0x411fcf,_0x2df98d=[];if(_0x591639==='only')_0x2df98d[_0x76bb07(0x32a)](_0x3c27?()=>_0x3c27(_0x8bc213):()=>connectDirect(_0x8bc213,_0x5567da));else{if(_0x591639==='no'){_0x2df98d['push'](()=>connectDirect(_0x8bc213,_0x5567da));if(_0x3c27)_0x2df98d['push'](()=>_0x3c27(_0x8bc213));}else{if(_0x3c27)_0x2df98d[_0x76bb07(0x32a)](()=>_0x3c27(_0x8bc213));_0x2df98d[_0x76bb07(0x32a)](()=>connectDirect(_0x8bc213,_0x5567da));}}return _0x2df98d;};let _0x3bdd2b;const _0x2f0df1=async(_0x4ce141,_0x5a9d93)=>{for(const _0x4a2482 of _0x9b45d9(_0x4ce141,_0x5a9d93)){try{return await _0x4a2482();}catch(_0x406d48){_0x3bdd2b=_0x406d48;}}return null;},_0x2a2f65=_0x29fb4c[_0x411fcf(0x1f1)]?parseHostPort(_0x29fb4c[_0x411fcf(0x1f1)],0x1bb):null;if(_0x2a2f65&&_0x2a2f65['host']){let _0x1e46f3=await resolveProxyIPs(_0x2a2f65[_0x411fcf(0x19e)],_0x2a2f65[_0x411fcf(0x3c4)]);if(!_0x1e46f3[_0x411fcf(0x41b)])_0x1e46f3=[{'hostname':_0x2a2f65[_0x411fcf(0x19e)],'port':_0x2a2f65[_0x411fcf(0x3c4)]}];for(const _0x652912 of _0x1e46f3){const _0x2d6eed=await _0x2f0df1(_0x652912,0x1770);if(_0x2d6eed)return _0x2d6eed;}}const _0x26353d=await _0x2f0df1({'hostname':_0x502ac9[_0x411fcf(0x24a)],'port':_0x502ac9['port']},0x1770);if(_0x26353d)return _0x26353d;{const _0x51655e=selectRelayRegion(_0x4233f1),_0x25eaeb=[_0x51655e,...Object[_0x411fcf(0x294)](RELAY_DOMAINS)['filter'](_0x36e9f4=>_0x36e9f4!==_0x51655e)]['slice'](0x0,0x3);for(const _0x49cc20 of _0x25eaeb){const _0x1d7f69=RELAY_DOMAINS[_0x49cc20];if(!_0x1d7f69)continue;let _0x36a6bc=[];try{_0x36a6bc=await resolveProxyIPs(_0x1d7f69,0x1bb);}catch(_0x565fb4){}if(!_0x36a6bc[_0x411fcf(0x41b)])continue;for(const _0x4bada6 of _0x36a6bc){const _0x270b64=await _0x2f0df1(_0x4bada6,0x1388);if(_0x270b64)return _0x270b64;}}}throw _0x3bdd2b||new Error(_0x411fcf(0x257));}async function pumpToReader(_0x3f2eb8,_0x2d8c02,_0x72e3b5){const _0x49c37a=_0x40b3d2;try{while(!![]){const {done:_0x454378,value:_0xebba85}=await _0x3f2eb8[_0x49c37a(0x3b0)]();if(_0x454378)break;_0x2d8c02(_0xebba85);}}catch(_0x971a8){}try{if(_0x72e3b5)_0x72e3b5();}catch(_0x5da339){}}async function handleWebSocketProxy(_0x50bea8,_0x641107){const _0x17b17c=_0x40b3d2,_0x30f8be=new WebSocketPair(),[_0x474746,_0x407d23]=Object[_0x17b17c(0x23f)](_0x30f8be);try{_0x407d23[_0x17b17c(0x10e)]({'allowHalfOpen':!![]});}catch(_0x3376f0){_0x407d23[_0x17b17c(0x10e)]();}_0x407d23[_0x17b17c(0x327)]='arraybuffer';let _0x11a613=null,_0x3ca2a3=null,_0x1cb608=![],_0x4278fe=null;const _0x2d6a87=_0x3d9670=>{const _0x2f500e=_0x17b17c;try{_0x407d23[_0x2f500e(0x111)](_0x3d9670);}catch(_0x1eb871){}};_0x407d23[_0x17b17c(0x291)]('message',async _0x59b169=>{const _0x3310b4=_0x17b17c;try{const _0x45079c=typeof _0x59b169['data']===_0x3310b4(0x22c)?TE[_0x3310b4(0x2a3)](_0x59b169[_0x3310b4(0x407)]):new Uint8Array(_0x59b169[_0x3310b4(0x407)]);if(!_0x1cb608){_0x4278fe=_0x4278fe?concatBytes(_0x4278fe,_0x45079c):_0x45079c;let _0xdfb7a1,_0x196679;try{let _0x195c84=detectTrojan(_0x4278fe,_0x641107);if(!_0x195c84&&_0x4278fe[_0x3310b4(0x282)]>0x0&&_0x4278fe[0x0]!==0x0&&_0x4278fe['byteLength']<0x3a)return;_0x196679=!_0x195c84,_0xdfb7a1=_0x195c84?parseTrojanHeader(_0x4278fe):parseVlessHeader(_0x4278fe);}catch(_0x55b32f){if(/头部过短/['test'](_0x55b32f[_0x3310b4(0x226)]||''))return;throw _0x55b32f;}_0x1cb608=!![];if(_0xdfb7a1[_0x3310b4(0x162)]===0x2){try{const _0x3b5cfe=_0x4278fe['subarray'](_0xdfb7a1['headerLength']);if(_0xdfb7a1[_0x3310b4(0x3c4)]===0x35&&_0x3b5cfe['byteLength']>=0xc){const _0x3d3edc=await dnsToDoH(_0x3b5cfe);if(_0x3d3edc)_0x2d6a87(_0x3d3edc);}}catch(_0x5e7998){}try{_0x407d23[_0x3310b4(0x451)](0x3e8);}catch(_0x939ee){}return;}const _0x3ea7f9=await openOutbound(_0xdfb7a1,_0x641107,_0x50bea8['cf']&&_0x50bea8['cf'][_0x3310b4(0x19b)],_0x196679);_0x11a613=_0x3ea7f9,_0x3ca2a3=_0x3ea7f9[_0x3310b4(0x374)][_0x3310b4(0x184)]();if(_0x196679)_0x2d6a87(new Uint8Array([0x0,0x0]));if(_0x3ea7f9[_0x3310b4(0x248)]&&_0x3ea7f9['_preamble'][_0x3310b4(0x282)]>0x0)_0x2d6a87(_0x3ea7f9[_0x3310b4(0x248)]);if(_0x4278fe&&_0x4278fe[_0x3310b4(0x282)]>_0xdfb7a1[_0x3310b4(0x2de)])await _0x3ca2a3[_0x3310b4(0x3aa)](_0x4278fe[_0x3310b4(0x398)](_0xdfb7a1['headerLength']));_0x4278fe=null,pumpToReader(_0x3ea7f9[_0x3310b4(0x218)]['getReader'](),_0x2d6a87,()=>{const _0x18cdd9=_0x3310b4;try{_0x407d23[_0x18cdd9(0x451)](0x3e8);}catch(_0x7e8159){}});}else{if(_0x3ca2a3)await _0x3ca2a3[_0x3310b4(0x3aa)](_0x45079c);else _0x4278fe=_0x4278fe?concatBytes(_0x4278fe,_0x45079c):_0x45079c;}}catch(_0x5ba854){try{_0x407d23[_0x3310b4(0x451)](0x3f3,String(_0x5ba854&&_0x5ba854[_0x3310b4(0x226)]||_0x5ba854));}catch(_0x3418cd){}}});const _0x4d201d=()=>{const _0x2b79ae=_0x17b17c;if(_0x11a613){try{_0x11a613[_0x2b79ae(0x451)]();}catch(_0x11a098){}_0x11a613=null;}};return _0x407d23[_0x17b17c(0x291)](_0x17b17c(0x451),_0x4d201d),_0x407d23[_0x17b17c(0x291)](_0x17b17c(0x334),_0x4d201d),new Response(null,{'status':0x65,'webSocket':_0x474746});}async function handleXhttpProxy(_0x33a54c,_0x1d9c79){const _0x4991da=_0x40b3d2,_0x5a5641=_0x33a54c[_0x4991da(0x44e)][_0x4991da(0x350)](),_0x54c231=await _0x5a5641[_0x4991da(0x3b0)]();if(_0x54c231[_0x4991da(0x441)])return new Response(_0x4991da(0x43e),{'status':0x190});const _0xa475f0=parseVlessHeader(_0x54c231['value']),_0x5216cb=await openOutbound(_0xa475f0,_0x1d9c79,_0x33a54c['cf']&&_0x33a54c['cf'][_0x4991da(0x19b)],!![]),_0xcbb1ef=_0x5216cb['writable'][_0x4991da(0x184)]();await _0xcbb1ef['write'](_0x54c231['value']['subarray'](_0xa475f0[_0x4991da(0x2de)])),((async()=>{const _0x7669d=_0x4991da;try{while(!![]){const {done:_0x43dc22,value:_0x5c0c53}=await _0x5a5641['read']();if(_0x43dc22)break;await _0xcbb1ef['write'](_0x5c0c53);}}catch(_0x645727){}try{await _0xcbb1ef[_0x7669d(0x451)]();}catch(_0x31e406){}})());const _0xa453b3=new ReadableStream({async 'start'(_0x31c329){const _0x4013e0=_0x4991da;_0x31c329[_0x4013e0(0x14d)](new Uint8Array([0x0,0x0]));if(_0x5216cb[_0x4013e0(0x248)]&&_0x5216cb['_preamble'][_0x4013e0(0x282)]>0x0)_0x31c329[_0x4013e0(0x14d)](_0x5216cb[_0x4013e0(0x248)]);const _0xe24561=_0x5216cb[_0x4013e0(0x218)]['getReader']();try{while(!![]){const {done:_0x8e9c10,value:_0x549c7c}=await _0xe24561['read']();if(_0x8e9c10)break;_0x31c329[_0x4013e0(0x14d)](_0x549c7c);}}catch(_0x1715cc){}try{_0x31c329[_0x4013e0(0x451)]();}catch(_0x59b442){}try{_0x5216cb['close']();}catch(_0x50af00){}},'cancel'(){const _0x25ffcf=_0x4991da;try{_0x5216cb[_0x25ffcf(0x451)]();}catch(_0x32f4bd){}}});return new Response(_0xa453b3,{'status':0xc8,'headers':{'content-type':_0x4991da(0x2c4),'x-accel-buffering':'no','cache-control':_0x4991da(0x434)}});}function decodeUtf8OrGbk(_0x34ab89){const _0x269d5a=_0x40b3d2,_0x2e879e=_0x34ab89 instanceof Uint8Array?_0x34ab89:new Uint8Array(_0x34ab89);try{const _0x423387=new TextDecoder(_0x269d5a(0x40d))['decode'](_0x2e879e);if(!_0x423387[_0x269d5a(0x269)](' '))return _0x423387;}catch(_0x342421){}try{return new TextDecoder('gbk')[_0x269d5a(0x20c)](_0x2e879e);}catch(_0x39dede){}return new TextDecoder()[_0x269d5a(0x20c)](_0x2e879e);}function extractCandidates(_0x562859){const _0x3bb661=_0x40b3d2,_0x36a35b=new Set(),_0x2e642f=[],_0xc699a7=(_0x559f2a,_0x5be4e7,_0x5dfd26)=>{const _0x1cb022=_0x150d;if(!isValidIp(_0x559f2a))return;if(_0x36a35b['has'](_0x559f2a))return;_0x36a35b[_0x1cb022(0x121)](_0x559f2a),_0x2e642f[_0x1cb022(0x32a)]({'ip':_0x559f2a,'port':_0x5be4e7||0x1bb,'name':_0x5dfd26||''});};parseIPList(_0x562859)['forEach'](_0x234473=>_0xc699a7(_0x234473['ip'],_0x234473[_0x3bb661(0x3c4)],_0x234473[_0x3bb661(0x1ca)]));const _0xaa51dc=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let _0x4ebb87;while(_0x4ebb87=_0xaa51dc[_0x3bb661(0x2c2)](_0x562859)){const {host:_0x364c67,port:_0x142d87}=parseHostPort(_0x4ebb87[0x0],0x1bb);if(_0x364c67)_0xc699a7(_0x364c67,_0x142d87,'');}const _0xd20a4c=/[0-9a-fA-F:]+/g;while(_0x4ebb87=_0xd20a4c[_0x3bb661(0x2c2)](_0x562859)){const _0x357478=_0x4ebb87[0x0];if(_0x357478[_0x3bb661(0x269)](':')&&_0x357478['split'](':')['length']>=0x3&&isValidIp(_0x357478))_0xc699a7(_0x357478,0x1bb,'');}return _0x2e642f;}function extractDomains(_0x1021e3){const _0x5ddd80=_0x40b3d2,_0x19e74e=new Set(),_0x3fd18b=[],_0x30c4f3=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let _0x3b8998;while(_0x3b8998=_0x30c4f3[_0x5ddd80(0x2c2)](_0x1021e3)){const _0x4ee80c=_0x3b8998[0x0]['toLowerCase']();!_0x19e74e[_0x5ddd80(0x314)](_0x4ee80c)&&(_0x4ee80c[_0x5ddd80(0x269)]('cloudflare')||_0x4ee80c[_0x5ddd80(0x269)](_0x5ddd80(0x34c))||_0x4ee80c[_0x5ddd80(0x269)]('182682')||_0x4ee80c[_0x5ddd80(0x269)](_0x5ddd80(0x340))||_0x4ee80c[_0x5ddd80(0x2ac)]('.xyz')||_0x4ee80c[_0x5ddd80(0x2ac)](_0x5ddd80(0x23b)))&&(_0x19e74e[_0x5ddd80(0x121)](_0x4ee80c),_0x3fd18b[_0x5ddd80(0x32a)](_0x4ee80c));}return _0x3fd18b[_0x5ddd80(0x27e)](0x0,0xa);}const SUBPREF_CACHE={'t':0x0,'ips':null};async function fetchLatestPreferredIPs(_0x189f21){const _0x6a2db9=_0x40b3d2;_0x189f21=Math['max'](0x1,parseInt(_0x189f21)||0x96);if(Date[_0x6a2db9(0x25b)]()-SUBPREF_CACHE['t']<0xa*0x3c*0x3e8)return SUBPREF_CACHE['ips'];const _0x41c5f8=await fetchTimeout(_0x6a2db9(0x2a1),{'headers':{'User-Agent':_0x6a2db9(0x12b)}},0x1770);if(_0x41c5f8&&_0x41c5f8['ok']){const _0x31c7fb=extractCandidates(await _0x41c5f8['text']())[_0x6a2db9(0x1b7)](_0x3934e8=>_0x3934e8['ip']&&isCloudflareIP(_0x3934e8['ip'])),_0x5dd440=new Set(),_0x3a7fa5=[];for(const _0x266aa3 of _0x31c7fb){if(_0x5dd440[_0x6a2db9(0x314)](_0x266aa3['ip']))continue;_0x5dd440['add'](_0x266aa3['ip']),_0x3a7fa5['push'](_0x266aa3);if(_0x3a7fa5[_0x6a2db9(0x41b)]>=_0x189f21)break;}return SUBPREF_CACHE['t']=Date[_0x6a2db9(0x25b)](),SUBPREF_CACHE[_0x6a2db9(0x365)]=_0x3a7fa5,_0x3a7fa5;}return null;}async function collectCandidates(_0x316598){const _0x2cd60c=_0x40b3d2;_0x316598=_0x316598||{};const _0x1c6cf4=[],_0x5176ee={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},_0x2d215b=_0x33cde5=>{const _0x245eaa=_0x150d;if(_0x33cde5&&_0x33cde5['ip']&&isCloudflareIP(_0x33cde5['ip']))_0x1c6cf4[_0x245eaa(0x32a)]({'ip':_0x33cde5['ip'],'port':_0x316598['port']||_0x33cde5[_0x245eaa(0x3c4)]||0x1bb,'name':_0x33cde5[_0x245eaa(0x1ca)]||''});};if(_0x316598[_0x2cd60c(0x14b)]&&OPTIMIZE_SOURCES[_0x316598[_0x2cd60c(0x14b)]]){const _0x1dad4c=await fetchTimeout(OPTIMIZE_SOURCES[_0x316598['source']]['url'],{'headers':{'User-Agent':_0x2cd60c(0x12b)}},0x1770);if(_0x1dad4c&&_0x1dad4c['ok']){const _0x3f28b0=extractCandidates(await _0x1dad4c['text']());_0x3f28b0[_0x2cd60c(0x1d0)](_0x2d215b),_0x5176ee['preset']=_0x3f28b0[_0x2cd60c(0x41b)];}else _0x5176ee[_0x2cd60c(0x156)]=_0x1dad4c?_0x2cd60c(0x345)+_0x1dad4c[_0x2cd60c(0x458)]:'超时/网络错误';}if(_0x316598['sourceURL']){const _0x43eaa7=await fetchTimeout(_0x316598[_0x2cd60c(0x448)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1770);if(_0x43eaa7&&_0x43eaa7['ok']){const _0x2f4df4=extractCandidates(await _0x43eaa7[_0x2cd60c(0x244)]());_0x2f4df4[_0x2cd60c(0x1d0)](_0x2d215b),_0x5176ee[_0x2cd60c(0x439)]=_0x2f4df4[_0x2cd60c(0x41b)];}else _0x5176ee[_0x2cd60c(0x206)]=_0x43eaa7?_0x2cd60c(0x345)+_0x43eaa7[_0x2cd60c(0x458)]:_0x2cd60c(0x13e);}const _0x1c3492=new Set(),_0x4a639b=[];for(const _0x19bf8d of _0x1c6cf4){if(_0x1c3492['has'](_0x19bf8d['ip']))continue;_0x1c3492['add'](_0x19bf8d['ip']),_0x4a639b[_0x2cd60c(0x32a)](_0x19bf8d);}if(_0x4a639b['length']<(_0x316598['count']||0x14)){let _0x53409f=(_0x316598[_0x2cd60c(0x229)]||0x14)-_0x4a639b[_0x2cd60c(0x41b)];try{const _0x290691=await fetchBestcfPool();for(const _0x25d833 of _0x290691){if(_0x53409f<=0x0)break;if(_0x1c3492[_0x2cd60c(0x314)](_0x25d833['ip']))continue;if(!isCloudflareIP(_0x25d833['ip']))continue;_0x1c3492[_0x2cd60c(0x121)](_0x25d833['ip']),_0x4a639b['push']({'ip':_0x25d833['ip'],'port':_0x316598[_0x2cd60c(0x3c4)]||_0x25d833[_0x2cd60c(0x3c4)]||0x1bb,'name':_0x25d833[_0x2cd60c(0x1ca)]||''}),_0x53409f--;}}catch(_0xd8c1b6){}_0x5176ee[_0x2cd60c(0x34c)]=(_0x316598['count']||0x14)-_0x4a639b[_0x2cd60c(0x41b)]-_0x53409f;}if(_0x316598['useCidr']!==![]&&_0x4a639b['length']<(_0x316598[_0x2cd60c(0x229)]||0x14)){const _0x3ac1ae=(_0x316598[_0x2cd60c(0x229)]||0x14)-_0x4a639b[_0x2cd60c(0x41b)],_0xb43da8=randomIPsFromCidrs(CLOUDFLARE_CIDRS,_0x3ac1ae*0x3);let _0x2419a0=0x0;for(const _0x2d7114 of _0xb43da8){if(_0x2419a0>=_0x3ac1ae)break;if(_0x1c3492[_0x2cd60c(0x314)](_0x2d7114))continue;_0x1c3492[_0x2cd60c(0x121)](_0x2d7114),_0x4a639b[_0x2cd60c(0x32a)]({'ip':_0x2d7114,'port':_0x316598[_0x2cd60c(0x3c4)]||0x1bb,'name':''}),_0x2419a0++;}_0x5176ee[_0x2cd60c(0x2d8)]=_0x2419a0;}return{'candidates':_0x4a639b,'stats':_0x5176ee};}function testOneLatency(_0x3d42e3,_0x2380c2,_0x1b6522){return new Promise(_0x2a38b1=>{const _0x204283=_0x150d,_0x1176c9=Date[_0x204283(0x25b)]();let _0xbf58a3,_0x431c09=![];const _0x4cf65e=(_0x266d38,_0x3d47d5)=>{const _0x1fb0b3=_0x204283;if(_0x431c09)return;_0x431c09=!![],clearTimeout(_0x1066d8);try{if(_0xbf58a3)_0xbf58a3[_0x1fb0b3(0x451)]();}catch(_0x19dd43){}_0x2a38b1({'ip':_0x3d42e3,'port':_0x2380c2,'ok':_0x266d38,'latency':_0x3d47d5});},_0x1066d8=setTimeout(()=>_0x4cf65e(![],-0x1),_0x1b6522);try{_0xbf58a3=connect({'hostname':_0x3d42e3,'port':_0x2380c2});}catch(_0x2c8744){return _0x4cf65e(![],-0x1);}_0xbf58a3[_0x204283(0x36e)][_0x204283(0x1ae)](()=>_0x4cf65e(!![],Date[_0x204283(0x25b)]()-_0x1176c9))[_0x204283(0x364)](()=>_0x4cf65e(![],-0x1));});}async function runLatencyTest(_0x260028,_0x25597a,_0x526d24){const _0x41402b=_0x40b3d2;_0x25597a=Math[_0x41402b(0x3cc)](0x1,Math['min'](0x32,Number(_0x25597a)||0x5)),_0x526d24=Math[_0x41402b(0x3cc)](0x1f4,Number(_0x526d24)||0x1388);const _0x3db712=[];let _0x5ce4dc=0x0;async function _0x2ddc2c(){const _0x21eeba=_0x41402b;while(_0x5ce4dc<_0x260028['length']){const _0x58f79c=_0x260028[_0x5ce4dc++],_0x5a7dbd=await testOneLatency(_0x58f79c['ip'],_0x58f79c['port'],_0x526d24);_0x3db712[_0x21eeba(0x32a)](_0x5a7dbd);}}return await Promise[_0x41402b(0x25d)](Array[_0x41402b(0x430)]({'length':_0x25597a},_0x2ddc2c)),_0x3db712[_0x41402b(0x20e)]((_0x4f36af,_0x1f8d73)=>(_0x4f36af[_0x41402b(0x220)]<0x0?0x3b9aca00:_0x4f36af[_0x41402b(0x220)])-(_0x1f8d73[_0x41402b(0x220)]<0x0?0x3b9aca00:_0x1f8d73['latency'])),_0x3db712;}function xhttpPadding(_0x17ae49){const _0x2bace6=_0x40b3d2,_0x4c7478=_0x17ae49[_0x2bace6(0x119)]||'';return{'xPaddingObfsMode':!![],'xPaddingMethod':_0x2bace6(0x310),'xPaddingPlacement':_0x2bace6(0x375),'xPaddingHeader':_0x4c7478[_0x2bace6(0x27e)](0x1,0x7),'xPaddingKey':'_'+_0x4c7478[_0x2bace6(0x27e)](0x19,0x1f)};}function vlessNode(_0x2ae973,_0x222dd9,_0x1fbab2,_0x46d197,_0x556c3b={}){const _0x1e82b8=_0x40b3d2,_0x4409af=_0x2ae973[_0x1e82b8(0x19e)],_0x34e0a0=_0x222dd9[_0x1e82b8(0x269)](':')&&!_0x222dd9[_0x1e82b8(0x371)]('[')?'['+_0x222dd9+']':_0x222dd9,_0x1e3e98=!HTTP_PORTS[_0x1e82b8(0x314)](Number(_0x1fbab2)),_0x1e78c0=encodeURIComponent;let _0x279d3d=_0x1e82b8(0x1c2);if(_0x1e3e98)_0x279d3d+='&security=tls&sni='+_0x1e78c0(_0x4409af)+_0x1e82b8(0x136);else _0x279d3d+=_0x1e82b8(0x348);_0x279d3d+='&host='+_0x1e78c0(_0x4409af);if(_0x556c3b[_0x1e82b8(0x457)]===_0x1e82b8(0x2ea)&&_0x1e3e98)_0x279d3d+=_0x1e82b8(0x146),_0x279d3d+=_0x1e82b8(0x2e4)+_0x1e78c0(JSON[_0x1e82b8(0x1f9)](xhttpPadding(_0x2ae973)));else _0x279d3d+=_0x1e82b8(0x17a);_0x279d3d+=_0x1e82b8(0x3f1)+_0x1e78c0('/'+_0x2ae973[_0x1e82b8(0x20f)]);if(_0x2ae973['alpn'])_0x279d3d+='&alpn='+_0x1e78c0(_0x2ae973['alpn']);return _0x2ae973[_0x1e82b8(0x161)]&&(_0x279d3d+=_0x1e82b8(0x24b)+_0x1e78c0((_0x2ae973[_0x1e82b8(0x38a)]||_0x1e82b8(0x3e7))+'+'+(_0x2ae973[_0x1e82b8(0x205)]||_0x1e82b8(0x1e6)))),'vless://'+_0x2ae973['uuid']+'@'+_0x34e0a0+':'+_0x1fbab2+'?'+_0x279d3d+'#'+encodeURIComponent(_0x46d197);}function trojanNode(_0x317121,_0x4a4306,_0x44b99d,_0x36d5a6){const _0x265964=_0x40b3d2,_0x5290c6=_0x317121[_0x265964(0x19e)],_0xfb167e=_0x4a4306[_0x265964(0x269)](':')&&!_0x4a4306[_0x265964(0x371)]('[')?'['+_0x4a4306+']':_0x4a4306,_0x51cbfe=encodeURIComponent,_0x192a0e=!HTTP_PORTS[_0x265964(0x314)](Number(_0x44b99d));let _0x2790f1=_0x192a0e?_0x265964(0x1d3)+_0x51cbfe(_0x5290c6)+_0x265964(0x169)+_0x51cbfe(_0x5290c6)+_0x265964(0x3c9)+_0x51cbfe('/'+_0x317121[_0x265964(0x20f)]):_0x265964(0x1d8)+_0x51cbfe(_0x5290c6)+_0x265964(0x3c9)+_0x51cbfe('/'+_0x317121[_0x265964(0x20f)]);if(_0x317121['alpn']&&_0x192a0e)_0x2790f1+=_0x265964(0x1f4)+_0x51cbfe(_0x317121[_0x265964(0x285)]);if(_0x317121[_0x265964(0x161)]&&_0x192a0e)_0x2790f1+=_0x265964(0x24b)+_0x51cbfe((_0x317121[_0x265964(0x38a)]||_0x265964(0x3e7))+'+'+(_0x317121[_0x265964(0x205)]||_0x265964(0x1e6)));return'trojan://'+(_0x317121[_0x265964(0x165)]||_0x317121[_0x265964(0x119)])+'@'+_0xfb167e+':'+_0x44b99d+'?'+_0x2790f1+'#'+encodeURIComponent(_0x36d5a6);}const DNH_CACHE=new Map();function fetchTimeout(_0xbcaa03,_0x259870,_0x25d377){return new Promise(_0x4f672e=>{const _0x71e27e=_0x150d,_0x504583=new AbortController(),_0x5d0f9d=setTimeout(()=>_0x504583['abort'](),_0x25d377);fetch(_0xbcaa03,Object['assign']({},_0x259870,{'signal':_0x504583[_0x71e27e(0x173)]}))['then'](_0x61c216=>{clearTimeout(_0x5d0f9d),_0x4f672e(_0x61c216);})[_0x71e27e(0x364)](()=>{clearTimeout(_0x5d0f9d),_0x4f672e(null);});});}async function resolvePreferredDomains(_0x309d80,_0x3d382d=0x64,_0xe801ec=0x12c,_0x4b314b=![],_0x1953d5=!![],_0x548edc=![]){const _0x5782f3=_0x40b3d2,_0x3b55fe=String(_0x309d80||'')[_0x5782f3(0x420)](/[\n,;]+/)[_0x5782f3(0x114)](_0x17507a=>_0x17507a[_0x5782f3(0x283)]()['replace'](/^\*\./,''))[_0x5782f3(0x1b7)](Boolean),_0x80e289=Date['now'](),_0x4eb254=['https://cloudflare-dns.com/dns-query',_0x5782f3(0x2a8)],_0x181d31=async(_0x559257,_0x5b895e,_0x3531e8)=>{const _0x4129c9=_0x5782f3,_0x23764b=_0x4eb254['map'](async _0x1cbe4b=>{const _0x3c8763=_0x150d,_0x435c5e=await fetchTimeout(_0x1cbe4b+_0x3c8763(0x388)+encodeURIComponent(_0x559257)+_0x3c8763(0x187)+_0x5b895e,{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x435c5e||!_0x435c5e['ok'])throw new Error('doh\x20unavailable');const _0x134baa=await _0x435c5e[_0x3c8763(0x1af)](),_0x4e8c38=(_0x134baa[_0x3c8763(0x3fb)]||[])['filter'](_0x1e1170=>_0x1e1170['type']===_0x3531e8&&(_0x5b895e==='A'?/^\d+\.\d+\.\d+\.\d+$/['test'](_0x1e1170[_0x3c8763(0x407)]):/^[0-9a-fA-F:]+$/[_0x3c8763(0x1ee)](_0x1e1170[_0x3c8763(0x407)])))[_0x3c8763(0x114)](_0x3d749b=>_0x3d749b[_0x3c8763(0x407)]);if(!_0x4e8c38[_0x3c8763(0x41b)])throw new Error('no\x20answer');return _0x4e8c38;});try{return await Promise[_0x4129c9(0x180)](_0x23764b);}catch(_0x160a6b){return[];}},_0x2710fa=await Promise[_0x5782f3(0x25d)](_0x3b55fe['map'](async _0x18816e=>{const _0x89bb73=_0x5782f3;if(_0x18816e[_0x89bb73(0x269)](_0x89bb73(0x1ea))){if(_0x18816e[_0x89bb73(0x371)](_0x89bb73(0x1fc))){let _0xdf9ac4=_0x18816e[_0x89bb73(0x27e)](0x6);if(/^[A-Za-z0-9+/=]+$/[_0x89bb73(0x1ee)](_0xdf9ac4)&&_0xdf9ac4[_0x89bb73(0x41b)]%0x4===0x0)try{const _0x32a89f=atob(_0xdf9ac4);if(/^https?:\/\//i[_0x89bb73(0x1ee)](_0x32a89f))_0xdf9ac4=_0x32a89f;}catch(_0x2a0c33){}if(!/^https?:\/\//i[_0x89bb73(0x1ee)](_0xdf9ac4))_0xdf9ac4=_0x89bb73(0x34b)+_0xdf9ac4;_0x18816e=_0xdf9ac4;}const _0x5e629f=_0x89bb73(0x2cf)+_0x18816e+(_0x4b314b?_0x89bb73(0x19a):'')+(_0x1953d5?'':_0x89bb73(0x113)),_0x267ce6=DNH_CACHE[_0x89bb73(0x335)](_0x5e629f);if(_0x267ce6&&_0x80e289-_0x267ce6['t']<0xa*0x3c*0x3e8)return _0x267ce6['ips']['slice'](0x0,_0x3d382d);try{const _0x3d7cfc=await fetchTimeout(_0x18816e,{},0x1770);if(!_0x3d7cfc||!_0x3d7cfc['ok'])throw new Error(_0x89bb73(0x28b));const _0x3c3403=decodeUtf8OrGbk(await _0x3d7cfc[_0x89bb73(0x274)]());let _0x377762=_0x3c3403;if(/^[A-Za-z0-9+/=\s]{40,}$/[_0x89bb73(0x1ee)](_0x377762[_0x89bb73(0x27e)](0x0,0x7d0))&&_0x377762[_0x89bb73(0x3c2)](/\s+/g,'')[_0x89bb73(0x41b)]%0x4===0x0)try{const _0x4528d8=atob(_0x377762[_0x89bb73(0x3c2)](/\s+/g,''));_0x377762=decodeUtf8OrGbk(Uint8Array[_0x89bb73(0x430)](_0x4528d8,_0x418bb3=>_0x418bb3[_0x89bb73(0x29d)](0x0)));}catch(_0x59bf4f){}const _0x425ae1=new Set(),_0x2d9d47={},_0x599145=[],_0x1bd561=isTrustedRegionPool(_0x18816e),_0x1efe97=_0x41f7f4=>!_0x1953d5||isCloudflareIP(_0x41f7f4)||_0x1bd561,_0x34598f=_0x377762['trim']()['split'](/\r?\n/)[_0x89bb73(0x114)](_0x77ad7b=>_0x77ad7b[_0x89bb73(0x283)]())['filter'](Boolean);if(_0x34598f[_0x89bb73(0x41b)]>0x1&&_0x34598f[0x0][_0x89bb73(0x269)](',')){const _0xc5eaf6=_0x34598f[0x0]['split'](',')['map'](_0x383b6b=>_0x383b6b[_0x89bb73(0x283)]()),_0x1d6fdd=_0xc5eaf6[_0x89bb73(0x269)](_0x89bb73(0x2e8))&&_0xc5eaf6[_0x89bb73(0x269)]('端口'),_0x261668=_0xc5eaf6[_0x89bb73(0x28c)](_0xb12c4a=>_0xb12c4a[_0x89bb73(0x269)]('IP'))&&_0xc5eaf6['some'](_0x6db840=>_0x6db840[_0x89bb73(0x269)]('延迟'))&&_0xc5eaf6['some'](_0x42d62a=>_0x42d62a[_0x89bb73(0x269)](_0x89bb73(0x158)));if(_0x1d6fdd||_0x261668){const _0xeb365c=_0xc5eaf6[_0x89bb73(0x3d4)](_0xbe9392=>_0xbe9392[_0x89bb73(0x269)]('IP')),_0x48be5c=_0xc5eaf6['indexOf']('端口'),_0x3d973a=_0xc5eaf6[_0x89bb73(0x3d4)](_0x2d341f=>_0x2d341f[_0x89bb73(0x269)]('延迟')),_0x3fb468=_0xc5eaf6[_0x89bb73(0x3d4)](_0x652622=>_0x652622[_0x89bb73(0x269)](_0x89bb73(0x158))),_0x17fe66=_0xc5eaf6[_0x89bb73(0x179)]('国家')>-0x1?_0xc5eaf6['indexOf']('国家'):_0xc5eaf6[_0x89bb73(0x179)]('城市')>-0x1?_0xc5eaf6[_0x89bb73(0x179)]('城市'):_0xc5eaf6[_0x89bb73(0x179)](_0x89bb73(0x164)),_0x1882c0=_0xc5eaf6[_0x89bb73(0x179)]('TLS');for(const _0x23eb6b of _0x34598f[_0x89bb73(0x27e)](0x1)){if(_0x599145[_0x89bb73(0x41b)]>=_0x3d382d)break;const _0xbcb22a=_0x23eb6b[_0x89bb73(0x420)](',')[_0x89bb73(0x114)](_0x1340fe=>_0x1340fe['trim']());if(_0x1882c0!==-0x1&&_0xbcb22a[_0x1882c0]&&_0xbcb22a[_0x1882c0][_0x89bb73(0x1da)]()!==_0x89bb73(0x3dc))continue;const _0x320390=_0xbcb22a[_0xeb365c]||'',_0x3d57c9=_0x320390[_0x89bb73(0x132)](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!_0x3d57c9)continue;const _0x121a50=_0x3d57c9[0x1][_0x89bb73(0x3c2)](/^\[|\]$/g,''),_0x31b0b5=_0x48be5c!==-0x1&&_0xbcb22a[_0x48be5c]?parseInt(_0xbcb22a[_0x48be5c]):0x1bb,_0x41e1f6=_0x121a50+':'+_0x31b0b5;if(_0x425ae1[_0x89bb73(0x314)](_0x41e1f6))continue;if(!_0x1efe97(_0x121a50))continue;_0x425ae1['add'](_0x41e1f6);let _0x5e2ebb=_0x17fe66!==-0x1&&_0xbcb22a[_0x17fe66]?_0xbcb22a[_0x17fe66]:'';if(!_0x5e2ebb&&_0x3d973a!==-0x1&&_0x3fb468!==-0x1)_0x5e2ebb=_0x89bb73(0x1ba)+(_0xbcb22a[_0x3d973a]||'')+_0x89bb73(0x3a2)+(_0xbcb22a[_0x3fb468]||'')+_0x89bb73(0x1f7);if(_0x5e2ebb)_0x2d9d47[_0x5e2ebb]=(_0x2d9d47[_0x5e2ebb]||0x0)+0x1,_0x599145[_0x89bb73(0x32a)]({'ip':_0x121a50,'port':_0x31b0b5,'name':_0x5e2ebb+'-'+String(_0x2d9d47[_0x5e2ebb])[_0x89bb73(0x30e)](0x2,'0'),..._0x1bd561?{'relay':!![]}:{}});else _0x599145['push']({'ip':_0x121a50,'port':_0x31b0b5,'name':'',..._0x1bd561?{'relay':!![]}:{}});}return DNH_CACHE[_0x89bb73(0x2cb)](_0x5e629f,{'t':_0x80e289,'ips':_0x599145}),_0x599145[_0x89bb73(0x27e)]();}}if(_0x377762[_0x89bb73(0x269)](_0x89bb73(0x331))&&_0x377762[_0x89bb73(0x269)](_0x89bb73(0x3b1))){for(const _0x11f6d4 of _0x377762[_0x89bb73(0x132)](/<tr[\s\S]*?<\/tr>/g)||[]){if(_0x599145[_0x89bb73(0x41b)]>=_0x3d382d)break;const _0xfb403c={};for(const _0x26fbf7 of _0x11f6d4[_0x89bb73(0x132)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const _0x4dd6f0=_0x26fbf7[_0x89bb73(0x132)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);if(_0x4dd6f0)_0xfb403c[_0x4dd6f0[0x1]]=_0x4dd6f0[0x2]['replace'](/<[^>]+>/g,'')[_0x89bb73(0x283)]();}const _0x1cdb57=(_0xfb403c['优选地址']||'')['match'](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!_0x1cdb57)continue;const _0x2395cb=_0x1cdb57[0x1],_0x581532=_0x1cdb57[0x2]?parseInt(_0x1cdb57[0x2]):0x1bb,_0x543cf6=_0x2395cb+':'+_0x581532;if(_0x425ae1[_0x89bb73(0x314)](_0x543cf6))continue;if(!_0x1efe97(_0x2395cb))continue;_0x425ae1['add'](_0x543cf6);const _0x295fdc=(_0xfb403c[_0x89bb73(0x31a)]||_0xfb403c[_0x89bb73(0x164)]||'线路')[_0x89bb73(0x283)]();if(_0x295fdc)_0x2d9d47[_0x295fdc]=(_0x2d9d47[_0x295fdc]||0x0)+0x1,_0x599145[_0x89bb73(0x32a)]({'ip':_0x2395cb,'port':_0x581532,'name':_0x295fdc+'-'+String(_0x2d9d47[_0x295fdc])[_0x89bb73(0x30e)](0x2,'0'),..._0x1bd561?{'relay':!![]}:{}});else _0x599145[_0x89bb73(0x32a)]({'ip':_0x2395cb,'port':_0x581532,'name':'',..._0x1bd561?{'relay':!![]}:{}});}return DNH_CACHE['set'](_0x5e629f,{'t':_0x80e289,'ips':_0x599145}),_0x599145[_0x89bb73(0x27e)]();}for(const _0x1c4244 of _0x377762[_0x89bb73(0x420)](/\r?\n/)){if(_0x599145['length']>=_0x3d382d)break;const _0x5dc829=_0x1c4244[_0x89bb73(0x132)](/(?:vless|trojan):\/\/[^@\s/]+@(\[[0-9a-fA-F:]+\]|[A-Za-z0-9.-]+)(?::(\d{1,5}))?/);if(!_0x5dc829)continue;const _0x4d9745=_0x5dc829[0x1][_0x89bb73(0x3c2)](/^\[|\]$/g,''),_0x572836=_0x5dc829[0x2]?parseInt(_0x5dc829[0x2]):0x1bb,_0x410a9c=_0x4d9745+':'+_0x572836;if(_0x425ae1['has'](_0x410a9c))continue;if(!_0x1efe97(_0x4d9745))continue;_0x425ae1[_0x89bb73(0x121)](_0x410a9c);let _0x1d6048='';const _0x391cdd=_0x1c4244[_0x89bb73(0x179)]('#');if(_0x391cdd>=0x0)try{_0x1d6048=decodeURIComponent(_0x1c4244[_0x89bb73(0x27e)](_0x391cdd+0x1)['trim']());}catch(_0x3dba7f){_0x1d6048=_0x1c4244[_0x89bb73(0x27e)](_0x391cdd+0x1)[_0x89bb73(0x283)]();}if(_0x1d6048)_0x2d9d47[_0x1d6048]=(_0x2d9d47[_0x1d6048]||0x0)+0x1,_0x599145[_0x89bb73(0x32a)]({'ip':_0x4d9745,'port':_0x572836,'name':_0x1d6048+'-'+String(_0x2d9d47[_0x1d6048])[_0x89bb73(0x30e)](0x2,'0'),..._0x1bd561?{'relay':!![]}:{}});else _0x599145[_0x89bb73(0x32a)]({'ip':_0x4d9745,'port':_0x572836,'name':'',..._0x1bd561?{'relay':!![]}:{}});}for(const _0xa94d1d of _0x377762[_0x89bb73(0x420)](/\r?\n/)){if(_0x599145[_0x89bb73(0x41b)]>=_0x3d382d)break;const _0x24b46b=_0xa94d1d[_0x89bb73(0x132)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!_0x24b46b)continue;const _0x157a6f=_0x24b46b[0x1],_0x333ff6=_0x24b46b[0x2]?parseInt(_0x24b46b[0x2]):0x1bb,_0x38660e=_0x157a6f+':'+_0x333ff6;if(_0x425ae1[_0x89bb73(0x314)](_0x38660e))continue;if(!_0x1efe97(_0x157a6f))continue;_0x425ae1[_0x89bb73(0x121)](_0x38660e);const _0x3b8217=(_0x24b46b[0x3]||'')[_0x89bb73(0x283)]();if(_0x3b8217&&!/[\u4e00-\u9fa5]/[_0x89bb73(0x1ee)](_0x3b8217)&&!_0x3b8217[_0x89bb73(0x269)]('|')){_0x599145[_0x89bb73(0x32a)]({'ip':_0x157a6f,'port':_0x333ff6,'name':_0x3b8217,..._0x1bd561?{'relay':!![]}:{}});continue;}let _0x2e3015='';if(_0x24b46b[0x3]){const _0x12289b=_0x24b46b[0x3][_0x89bb73(0x132)](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(_0x12289b){const _0x3451ed=_0x12289b[0x0][_0x89bb73(0x132)](/[\u4e00-\u9fa5]{2,5}/);if(_0x3451ed)_0x2e3015=_0x3451ed[0x0];}else{const _0x4e0ff3=_0x24b46b[0x3]['split']('|')[_0x89bb73(0x114)](_0x4c34d3=>_0x4c34d3['trim']()),_0x175727=_0x4e0ff3['find'](_0x3e8b23=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[_0x89bb73(0x1ee)](_0x3e8b23));if(_0x175727){const _0x386dbe=_0x175727[_0x89bb73(0x132)](/[\u4e00-\u9fa5]{2,5}/);if(_0x386dbe)_0x2e3015=_0x386dbe[0x0];}else{const _0x28de63=_0x4e0ff3[_0x89bb73(0x157)](_0x54df81=>/^[\u4e00-\u9fa5]{2,5}$/[_0x89bb73(0x1ee)](_0x54df81)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/[_0x89bb73(0x1ee)](_0x54df81));if(_0x28de63)_0x2e3015=_0x28de63;else{const _0x5ad70e=_0x24b46b[0x3]['match'](/\b([A-Z]{2})\b/);if(_0x5ad70e)_0x2e3015=REGION_CN[_0x5ad70e[0x1]]||_0x5ad70e[0x1];}}}}if(_0x2e3015)_0x2d9d47[_0x2e3015]=(_0x2d9d47[_0x2e3015]||0x0)+0x1,_0x599145[_0x89bb73(0x32a)]({'ip':_0x157a6f,'port':_0x333ff6,'name':_0x2e3015+'-'+String(_0x2d9d47[_0x2e3015])[_0x89bb73(0x30e)](0x2,'0'),..._0x1bd561?{'relay':!![]}:{}});else _0x599145[_0x89bb73(0x32a)]({'ip':_0x157a6f,'port':_0x333ff6,'name':'',..._0x1bd561?{'relay':!![]}:{}});}if(!_0x599145[_0x89bb73(0x41b)]&&_0x4b314b){const _0x434c3e=(String(_0x18816e)[_0x89bb73(0x132)](/\/([A-Z]{2})\//)||[])[0x1]||String(_0x18816e)[_0x89bb73(0x3c2)](/^https?:\/\//,'')[_0x89bb73(0x420)]('.')[0x0];if(REGION_CN[_0x434c3e]){const _0x14fd62=randomIPsFromCidrs(_0x548edc?REACHABLE_CIDRS_V6:REACHABLE_CIDRS,_0x3d382d);_0x14fd62[_0x89bb73(0x1d0)]((_0x4b29cb,_0x16c45c)=>_0x599145[_0x89bb73(0x32a)]({'ip':_0x4b29cb,'port':0x1bb,'name':REGION_CN[_0x434c3e]+'-'+String(_0x16c45c+0x1)[_0x89bb73(0x30e)](0x2,'0')}));}}return DNH_CACHE[_0x89bb73(0x2cb)](_0x5e629f,{'t':_0x80e289,'ips':_0x599145}),_0x599145['slice']();}catch(_0x35ab1a){const _0xee85df=DNH_CACHE['get'](_0x5e629f);if(_0xee85df&&_0xee85df['ips']&&_0xee85df[_0x89bb73(0x365)]['length'])return _0xee85df[_0x89bb73(0x365)][_0x89bb73(0x27e)](0x0,_0x3d382d);return[];}}if(!_0x18816e['includes'](_0x89bb73(0x1ea))&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](_0x18816e)){const _0x3f2d65=_0x18816e[_0x89bb73(0x132)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!_0x3f2d65)return[];const _0x5d9511=_0x3f2d65[0x1][_0x89bb73(0x3c2)](/^\[|\]$/g,''),_0x522c22=_0x3f2d65[0x2]?parseInt(_0x3f2d65[0x2]):0x1bb,_0x39c7aa=(_0x3f2d65[0x3]||'')[_0x89bb73(0x283)](),_0x1f5680=isValidIp(_0x5d9511);if(!_0x1f5680&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[_0x89bb73(0x1ee)](_0x5d9511))return[];if(_0x1953d5&&_0x1f5680&&!isCloudflareIP(_0x5d9511))return[];if(_0x39c7aa)return[{'ip':_0x5d9511,'port':_0x522c22,'name':_0x39c7aa}];if(_0x1f5680)return[{'ip':_0x5d9511,'port':_0x522c22,'name':''}];}const _0x109b0b=DNH_CACHE[_0x89bb73(0x335)](_0x18816e);if(_0x109b0b&&_0x80e289-_0x109b0b['t']<0xa*0x3c*0x3e8)return _0x109b0b['ips'][_0x89bb73(0x27e)](0x0,_0x3d382d)[_0x89bb73(0x114)]((_0x2ada58,_0x35668d)=>({'ip':_0x2ada58,'port':0x1bb,'name':_0x18816e+'-'+(_0x35668d+0x1)}));const _0x35986c=await _0x181d31(_0x18816e,'A',0x1);let _0x3c1bd3=_0x1953d5?_0x35986c['filter'](isCloudflareIP):_0x35986c;if(_0x548edc){const _0x47c1d0=await _0x181d31(_0x18816e,'AAAA',0x1c);_0x3c1bd3=[...new Set(_0x35986c['concat'](_0x47c1d0))][_0x89bb73(0x1b7)](_0x2ada89=>_0x1953d5?isCloudflareIP(_0x2ada89):!![]);}_0x3c1bd3=_0x3c1bd3['slice'](0x0,_0x3d382d);if(!_0x3c1bd3[_0x89bb73(0x41b)]){if(_0x109b0b&&_0x109b0b[_0x89bb73(0x365)]&&_0x109b0b['ips']['length'])return _0x109b0b['ips'][_0x89bb73(0x27e)](0x0,_0x3d382d)[_0x89bb73(0x114)]((_0x448f0b,_0x127f3d)=>({'ip':_0x448f0b,'port':0x1bb,'name':_0x18816e+'-'+(_0x127f3d+0x1)}));return[];}return DNH_CACHE['set'](_0x18816e,{'t':_0x80e289,'ips':_0x3c1bd3}),_0x3c1bd3[_0x89bb73(0x114)]((_0x4832fd,_0x107e98)=>({'ip':_0x4832fd,'port':0x1bb,'name':_0x18816e+'-'+(_0x107e98+0x1)}));})),_0x2d77b4=[];let _0x535cc6=0x0;while(_0x535cc6<_0xe801ec){let _0x4ef7e2=![];for(const _0x331407 of _0x2710fa){if(_0x535cc6>=_0xe801ec)break;_0x331407['length']&&(_0x2d77b4[_0x5782f3(0x32a)](_0x331407['shift']()),_0x535cc6++,_0x4ef7e2=!![]);}if(!_0x4ef7e2)break;}return _0x2d77b4;}async function buildNodes(_0x4e66a6,_0x55a7ad=0x320,_0x460c67=null){const _0x5457b6=_0x40b3d2,_0x5635c7=[],_0x560973=new Set(),_0x20c102=_0x4e66a6[_0x5457b6(0x2e9)]&&_0x4e66a6[_0x5457b6(0x2e9)]['subMode']||'',_0xd49bfe=_0x4e66a6['filter']&&_0x4e66a6[_0x5457b6(0x1b7)][_0x5457b6(0x450)]||[],_0x424c97=_0xd49bfe[_0x5457b6(0x269)](_0x5457b6(0x328)),_0x50177a=_0xd49bfe[_0x5457b6(0x41b)]===0x1&&_0xd49bfe[0x0]===_0x5457b6(0x328),_0x4e9ce5=_0x50177a?OFFICIAL_V6_CIDRS:_0x424c97?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x33bf10=_0x20c102===_0x5457b6(0x439)&&!(_0x4e66a6[_0x5457b6(0x2e9)]&&_0x4e66a6['optimizer'][_0x5457b6(0x3f7)]),_0x2c6599=_0x20c102===_0x5457b6(0x439)||_0x20c102==='random',_0x192260=(_0x1dbe2b,_0x105f9a,_0x29163e,_0x53f09a)=>{const _0x46c3b9=_0x5457b6;if(_0x5635c7[_0x46c3b9(0x41b)]>=_0x55a7ad)return;if(isValidIp(_0x1dbe2b)&&!isCloudflareIP(_0x1dbe2b)&&!_0x33bf10&&!_0x53f09a)return;const _0x37c3e3=_0x1dbe2b+':'+_0x105f9a;if(_0x560973[_0x46c3b9(0x314)](_0x37c3e3))return;_0x560973['add'](_0x37c3e3);const _0x755966=!HTTP_PORTS[_0x46c3b9(0x314)](Number(_0x105f9a));if(_0x4e66a6[_0x46c3b9(0x447)]&&!_0x755966)return;const _0x56df10=Number(_0x105f9a);if(_0x4e66a6[_0x46c3b9(0x1f0)])_0x5635c7['push'](vlessNode(_0x4e66a6,_0x1dbe2b,_0x56df10,_0x29163e));if(_0x4e66a6['enableTrojan'])_0x5635c7['push'](trojanNode(_0x4e66a6,_0x1dbe2b,_0x755966?_0x56df10:Number(_0x105f9a),_0x29163e));if(_0x4e66a6['enableXhttp']&&_0x755966)_0x5635c7['push'](vlessNode(_0x4e66a6,_0x1dbe2b,_0x56df10,_0x29163e,{'type':'xhttp'}));},_0x553c04=(_0x1ae935,_0x174cf2,_0x4bea92,_0x4a1284)=>{_0x192260(_0x1ae935,Number(_0x174cf2)||0x1bb,_0x4bea92,_0x4a1284);};if(_0x20c102===_0x5457b6(0x2d1)){let _0x2e07e0=Math[_0x5457b6(0x236)](Math[_0x5457b6(0x3cc)](parseInt(_0x4e66a6[_0x5457b6(0x2e9)]['subRandomCount'])||0x10,0x1),Math[_0x5457b6(0x236)](0x63,_0x55a7ad));if(_0x4e66a6[_0x5457b6(0x16c)]){const _0x43d3e1=parseInt(_0x4e66a6[_0x5457b6(0x28f)])||0x0;if(_0x43d3e1>0x0)_0x2e07e0=Math[_0x5457b6(0x236)](Math[_0x5457b6(0x3cc)](_0x2e07e0,_0x43d3e1),_0x55a7ad);}const _0xf69e8a=(_0x4e66a6['enableVless']?0x1:0x0)+(_0x4e66a6['enableTrojan']?0x1:0x0)+(_0x4e66a6[_0x5457b6(0x2d4)]?0x1:0x0)||0x1;let _0x4cf168=0x0;const _0xd31d30=randomIPsFromCidrs(_0x4e9ce5,Math[_0x5457b6(0x411)](_0x2e07e0/_0xf69e8a)*0x3);let _0x120635=_0xd31d30;if(_0x460c67){const _0xffdacb=_0xd31d30[_0x5457b6(0x1b7)](_0x587a3a=>!_0x460c67[_0x5457b6(0x314)](_0x587a3a)),_0x4b4ab6=_0xd31d30['filter'](_0x2d03ca=>_0x460c67[_0x5457b6(0x314)](_0x2d03ca));_0x120635=[..._0xffdacb,..._0x4b4ab6];}for(const _0x523740 of _0x120635){if(_0x4cf168>=_0x2e07e0)break;_0x4e66a6[_0x5457b6(0x1f0)]&&(_0x5635c7[_0x5457b6(0x32a)](vlessNode(_0x4e66a6,_0x523740,0x1bb,_0x5457b6(0x141)+String(_0x4cf168+0x1)[_0x5457b6(0x30e)](0x2,'0'))),_0x4cf168++);if(_0x4cf168>=_0x2e07e0)break;_0x4e66a6[_0x5457b6(0x198)]&&(_0x5635c7['push'](trojanNode(_0x4e66a6,_0x523740,0x1bb,'优选IP-'+String(_0x4cf168+0x1)['padStart'](0x2,'0'))),_0x4cf168++);if(_0x4cf168>=_0x2e07e0)break;_0x4e66a6['enableXhttp']&&(_0x5635c7['push'](vlessNode(_0x4e66a6,_0x523740,0x1bb,'优选IP-'+String(_0x4cf168+0x1)[_0x5457b6(0x30e)](0x2,'0'),{'type':_0x5457b6(0x2ea)})),_0x4cf168++);}return _0x5635c7;}const _0x32837d=String(_0x4e66a6[_0x5457b6(0x1d5)]||'')[_0x5457b6(0x420)](/[\n,;]+/)[_0x5457b6(0x114)](_0x4da2d8=>_0x4da2d8[_0x5457b6(0x283)]())['filter'](_0x3c9160=>_0x3c9160&&!_0x3c9160[_0x5457b6(0x269)](_0x5457b6(0x1ea)));_0x32837d[_0x5457b6(0x1d0)]((_0x268ea7,_0x155569)=>{const _0xf8b557=_0x5457b6,_0x48080b=_0x268ea7[_0xf8b557(0x179)]('#'),_0x38b23c=(_0x48080b>=0x0?_0x268ea7['slice'](0x0,_0x48080b):_0x268ea7)['trim'](),_0x142990=(_0x48080b>=0x0?_0x268ea7[_0xf8b557(0x27e)](_0x48080b+0x1):'')[_0xf8b557(0x283)](),_0x4483ee=parseHostPort(_0x38b23c,0x1bb);if(_0x4483ee['host'][_0xf8b557(0x371)]('*.'))return;_0x553c04(_0x4483ee['host'],_0x4483ee[_0xf8b557(0x3c4)],_0x142990||_0xf8b557(0x141)+String(_0x155569+0x1)[_0xf8b557(0x30e)](0x2,'0'));});let _0x5da4ce=_0x4e66a6[_0x5457b6(0x2ba)]||[];if(_0x424c97&&!_0x50177a&&_0x5da4ce['length']>0x1){const _0x5c3461=[],_0x1d6900=[];for(const _0x528720 of _0x5da4ce)(String(_0x528720['ip'])[_0x5457b6(0x179)](':')>=0x0?_0x1d6900:_0x5c3461)[_0x5457b6(0x32a)](_0x528720);const _0x5a7875=[],_0x2753df=Math[_0x5457b6(0x3cc)](_0x5c3461[_0x5457b6(0x41b)],_0x1d6900[_0x5457b6(0x41b)]);for(let _0x49cece=0x0;_0x49cece<_0x2753df;_0x49cece++){if(_0x49cece<_0x5c3461[_0x5457b6(0x41b)])_0x5a7875[_0x5457b6(0x32a)](_0x5c3461[_0x49cece]);if(_0x49cece<_0x1d6900[_0x5457b6(0x41b)])_0x5a7875['push'](_0x1d6900[_0x49cece]);}_0x5da4ce=_0x5a7875;}_0x5da4ce['forEach']((_0x232cc1,_0x32d6b5)=>{const _0x50df42=_0x5457b6;_0x553c04(_0x232cc1['ip'],_0x232cc1[_0x50df42(0x3c4)]||0x1bb,_0x232cc1[_0x50df42(0x1ca)]||'优选IP-'+String(_0x32d6b5+0x1)[_0x50df42(0x30e)](0x2,'0'),_0x232cc1[_0x50df42(0x18a)]===!![]);});if(_0x20c102===_0x5457b6(0x439)&&!(_0x4e66a6[_0x5457b6(0x2e9)]&&_0x4e66a6[_0x5457b6(0x2e9)]['subIncludeDefault']))return _0x5635c7;!_0x32837d['length']&&!(_0x4e66a6[_0x5457b6(0x2ba)]||[])[_0x5457b6(0x41b)]&&(parseIPList(BUILTIN_PREFERRED_IPS[_0x5457b6(0x40a)]('\x0a'))[_0x5457b6(0x1d0)](_0x3a8061=>_0x553c04(_0x3a8061['ip'],_0x3a8061['port']||0x1bb,_0x3a8061[_0x5457b6(0x1ca)]||'0')),BUILTIN_OFFICIAL_DOMAINS[_0x5457b6(0x1d0)]((_0x292667,_0x35a391)=>_0x553c04(_0x292667,0x1bb,_0x5457b6(0x276)+String(_0x35a391+0x1)[_0x5457b6(0x30e)](0x2,'0'))));const _0x4f56f7=Math[_0x5457b6(0x236)](Math[_0x5457b6(0x3cc)](parseInt(_0x4e66a6[_0x5457b6(0x2e9)]&&_0x4e66a6[_0x5457b6(0x2e9)]['fillCount']||0x0)||0x0,0x0),0x1388),_0x244957=Math[_0x5457b6(0x236)](_0x4f56f7,_0x55a7ad)-_0x560973[_0x5457b6(0x207)];if(_0x244957>0x0){const _0x5b3ccf=_0x460c67?BUILTIN_STABLE_IPS[_0x5457b6(0x1b7)](_0x3214b2=>!_0x460c67[_0x5457b6(0x314)](_0x3214b2)):BUILTIN_STABLE_IPS[_0x5457b6(0x27e)](),_0x45b3c0=randomIPsFromCidrs(_0x4e9ce5,_0x244957*0x3),_0x24eccf=_0x460c67?_0x45b3c0[_0x5457b6(0x1b7)](_0x38b693=>!_0x460c67[_0x5457b6(0x314)](_0x38b693)):_0x45b3c0;let _0x4aec3d=[..._0x5b3ccf,..._0x24eccf];if(_0x4aec3d['length']<_0x244957)_0x4aec3d=[...BUILTIN_STABLE_IPS,..._0x45b3c0];if(_0x4aec3d[_0x5457b6(0x41b)]>0x0){const _0x588436=Math[_0x5457b6(0x236)](_0x4aec3d[_0x5457b6(0x41b)],Math[_0x5457b6(0x3cc)](_0x244957,0x14),0x3c),_0x24bfcd=_0x4aec3d[_0x5457b6(0x27e)](0x0,_0x588436),_0x112c96=_0x2c6599?_0x24bfcd[_0x5457b6(0x114)](()=>!![]):await probeAll(_0x24bfcd,_0x53e862=>testProxyAlive(_0x53e862,0x1bb,0x5dc)),_0x55b992=_0x24bfcd[_0x5457b6(0x1b7)]((_0x3472b5,_0x4015b5)=>_0x112c96[_0x4015b5]),_0x3aaa5b=_0x4aec3d[_0x5457b6(0x27e)](_0x588436);_0x4aec3d=[..._0x55b992,..._0x3aaa5b][_0x5457b6(0x27e)](0x0,_0x244957);}let _0x162f6c=0x0;for(const _0x1c0f5f of _0x4aec3d){if(_0x5635c7[_0x5457b6(0x41b)]>=_0x55a7ad)break;_0x162f6c++,_0x553c04(_0x1c0f5f,0x1bb,_0x5457b6(0x141)+String(_0x162f6c)[_0x5457b6(0x30e)](0x3,'0'));}}return _0x5635c7;}function parseNodeServer(_0x12e6fc){const _0x1a616f=_0x40b3d2,_0x2688bf=_0x12e6fc[_0x1a616f(0x179)]('@'),_0x583b9e=_0x12e6fc[_0x1a616f(0x179)]('?',_0x2688bf),_0x4106d6=_0x583b9e>_0x2688bf&&_0x2688bf>=0x0?_0x12e6fc[_0x1a616f(0x27e)](_0x2688bf+0x1,_0x583b9e):_0x12e6fc['slice'](_0x2688bf+0x1);if(_0x4106d6[_0x1a616f(0x371)]('[')){const _0x4bdb95=_0x4106d6[_0x1a616f(0x179)](']'),_0xaf8e32=_0x4bdb95>0x0?_0x4106d6['slice'](0x1,_0x4bdb95):_0x4106d6,_0x2750d7=_0x4106d6['slice'](_0x4bdb95+0x1),_0x2ae4b8=_0x2750d7[_0x1a616f(0x371)](':')?parseInt(_0x2750d7[_0x1a616f(0x27e)](0x1)):0x1bb;return{'host':_0xaf8e32,'port':isNaN(_0x2ae4b8)?0x1bb:_0x2ae4b8};}const _0x31385b=_0x4106d6[_0x1a616f(0x37f)](':');if(_0x31385b>0x0){const _0x539cbc=parseInt(_0x4106d6[_0x1a616f(0x27e)](_0x31385b+0x1));return{'host':_0x4106d6[_0x1a616f(0x27e)](0x0,_0x31385b),'port':isNaN(_0x539cbc)?0x1bb:_0x539cbc};}return{'host':_0x4106d6,'port':0x1bb};}function getParam(_0x518a0e,_0x17f4ba){const _0x309039=_0x40b3d2,_0xeed99c=_0x518a0e['indexOf']('?');if(_0xeed99c<0x0)return null;const _0x31a46b=_0x518a0e[_0x309039(0x179)]('#',_0xeed99c),_0xe868c=_0x31a46b>_0xeed99c?_0x518a0e[_0x309039(0x27e)](_0xeed99c+0x1,_0x31a46b):_0x518a0e[_0x309039(0x27e)](_0xeed99c+0x1);for(const _0x5964a4 of _0xe868c[_0x309039(0x420)]('&')){const _0x5602f0=_0x5964a4[_0x309039(0x179)]('='),_0x144cd4=_0x5602f0>0x0?_0x5964a4[_0x309039(0x27e)](0x0,_0x5602f0):_0x5964a4;if(_0x144cd4===_0x17f4ba)return _0x5602f0>0x0?decodeURIComponent(_0x5964a4[_0x309039(0x27e)](_0x5602f0+0x1)):'';}return null;}function parseShareNode(_0xf38180,_0x58f285){const _0x483263=_0x40b3d2,{host:_0x30f6c5,port:_0x432b73}=parseNodeServer(_0xf38180),_0x593653=_0x30f6c5,_0x4ef3c3=_0xf38180[_0x483263(0x179)]('#');let _0x2d692b='节点'+(_0x58f285+0x1);if(_0x4ef3c3>=0x0)try{_0x2d692b=decodeURIComponent(_0xf38180[_0x483263(0x27e)](_0x4ef3c3+0x1))||_0x2d692b;}catch(_0x229b15){}const _0x416752=_0xf38180[_0x483263(0x179)]('@');let _0x120739='';if(_0x416752>=0x0){const _0x41a1ea=_0xf38180[_0x483263(0x179)](_0x483263(0x1ea)),_0x2386ea=_0x41a1ea>=0x0?_0x41a1ea+0x3:0x0;try{_0x120739=decodeURIComponent(_0xf38180['slice'](_0x2386ea,_0x416752));}catch(_0x195e4e){_0x120739=_0xf38180['slice'](_0x2386ea,_0x416752);}}const _0x1c9b63=_0xf38180[_0x483263(0x371)](_0x483263(0x462)),_0x58082d=_0x1c9b63||(getParam(_0xf38180,'security')||'tls')===_0x483263(0x39b);return{'srv':_0x593653,'prt':_0x432b73,'name':_0x2d692b,'user':_0x120739,'isTrojan':_0x1c9b63,'tls':_0x58082d};}const REGION_TAGS={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG','新加坡'],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},ISP_TAGS={'移动':['移动','CM',_0x40b3d2(0x1fe)],'联通':['联通','CU','UNICOM'],'电信':['电信','CT','CHINATELECOM']},FILTER_ISPS=['移动','联通','电信'],FILTER_IPTYPES=['IPv4',_0x40b3d2(0x328)];function filterNodes(_0x301532,_0xb07130){const _0x3ee211=_0x40b3d2;if(!_0xb07130||!_0xb07130[_0x3ee211(0x219)]&&!_0xb07130[_0x3ee211(0x450)]&&!_0xb07130[_0x3ee211(0x15b)])return _0x301532;const _0x146a84=_0xb07130[_0x3ee211(0x219)]||_0x3ee211(0x25d),_0x1ccd9e=_0xb07130[_0x3ee211(0x450)]||FILTER_IPTYPES,_0x208ca4=_0xb07130[_0x3ee211(0x15b)]||FILTER_ISPS,_0x4f2245=_0x301532['map'](_0x5b548e=>{const _0x4b7d0c=_0x3ee211,{host:_0x19b923}=parseNodeServer(_0x5b548e);let _0x594b88='';try{const _0x13c5aa=_0x5b548e[_0x4b7d0c(0x179)]('#');if(_0x13c5aa>=0x0)_0x594b88=decodeURIComponent(_0x5b548e['slice'](_0x13c5aa+0x1)||'');}catch(_0x2f25f1){_0x594b88='';}return{'host':_0x19b923,'name':_0x594b88,'up':_0x594b88[_0x4b7d0c(0x3d8)]()};}),_0x1fab63=_0x4f2245[_0x3ee211(0x28c)](_0x326cad=>_0x326cad['up']&&Object[_0x3ee211(0x294)](ISP_TAGS)[_0x3ee211(0x28c)](_0x19c516=>(ISP_TAGS[_0x19c516]||[_0x19c516])['some'](_0x193ef2=>_0x326cad['up'][_0x3ee211(0x269)](_0x193ef2[_0x3ee211(0x3d8)]())))),_0x5d37ee=(_0x31e02e,_0x48b7a4,_0x36b427)=>{const _0x410d8d=_0x3ee211,_0xdd25d7=Array[_0x410d8d(0x45c)](_0x31e02e)?_0x31e02e[_0x410d8d(0x41b)]===0x0||_0x31e02e[_0x410d8d(0x269)](_0x410d8d(0x25d))?null:_0x31e02e[_0x410d8d(0x144)](_0x459197=>REGION_TAGS[_0x459197]||[]):_0x31e02e!==_0x410d8d(0x25d)?REGION_TAGS[_0x31e02e]||[]:null,_0x15a333=_0x36b427[_0x410d8d(0x41b)]>0x0&&_0x36b427[_0x410d8d(0x41b)]<FILTER_ISPS[_0x410d8d(0x41b)];return _0x301532[_0x410d8d(0x1b7)]((_0x57ba60,_0x1067ad)=>{const _0x1938ce=_0x410d8d,_0x3f2baa=_0x4f2245[_0x1067ad],_0x402787=_0x3f2baa[_0x1938ce(0x19e)][_0x1938ce(0x179)](':')>=0x0;if(!_0x3f2baa[_0x1938ce(0x1ca)])return![];if(_0xdd25d7&&!_0xdd25d7[_0x1938ce(0x28c)](_0x2aacbe=>_0x3f2baa['up'][_0x1938ce(0x269)](_0x2aacbe[_0x1938ce(0x3d8)]()))){if(!/^(优选IP|域名)-\d+/['test'](_0x3f2baa[_0x1938ce(0x1ca)])&&_0x3f2baa['name']!==_0x1938ce(0x315))return![];}if(_0x48b7a4[_0x1938ce(0x41b)]===0x1){if(_0x48b7a4[0x0]===_0x1938ce(0x1d2)&&_0x402787)return![];if(_0x48b7a4[0x0]===_0x1938ce(0x328)&&!_0x402787)return![];}if(_0x15a333&&_0x1fab63&&!_0x36b427[_0x1938ce(0x28c)](_0x5c604f=>(ISP_TAGS[_0x5c604f]||[_0x5c604f])[_0x1938ce(0x28c)](_0x1d9b31=>_0x3f2baa['up']['includes'](_0x1d9b31['toUpperCase']()))))return![];return!![];});};let _0x257cb1=_0x5d37ee(_0x146a84,_0x1ccd9e,_0x208ca4);if(!_0x257cb1['length'])_0x257cb1=_0x5d37ee(_0x146a84,_0x1ccd9e,FILTER_ISPS);if(!_0x257cb1['length'])_0x257cb1=_0x5d37ee(_0x146a84,FILTER_IPTYPES,FILTER_ISPS);if(!_0x257cb1[_0x3ee211(0x41b)])_0x257cb1=_0x5d37ee(_0x3ee211(0x25d),FILTER_IPTYPES,FILTER_ISPS);return _0x257cb1;}function yamlVal(_0x3c592e){const _0x244e9f=_0x40b3d2;if(typeof _0x3c592e===_0x244e9f(0x1dc)||typeof _0x3c592e==='number')return String(_0x3c592e);const _0x248327=String(_0x3c592e);return/^[\w.\-/\u4e00-\u9fa5]+$/[_0x244e9f(0x1ee)](_0x248327)?_0x248327:JSON[_0x244e9f(0x1f9)](_0x248327);}function _0x150d(_0xdc0f4b,_0x30ab0e){const _0x292944=_0x3786();return _0x150d=function(_0x35aa26,_0x1f376d){_0x35aa26=_0x35aa26-0x108;let _0x309946=_0x292944[_0x35aa26];return _0x309946;},_0x150d(_0xdc0f4b,_0x30ab0e);}function clashProxyYaml(_0x5b81e2){const _0x38221b=_0x40b3d2,_0x26dbde=[];_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x3c0)+yamlVal(_0x5b81e2[_0x38221b(0x1ca)])),_0x26dbde[_0x38221b(0x32a)]('\x20\x20\x20\x20type:\x20'+_0x5b81e2['type']),_0x26dbde['push'](_0x38221b(0x1f2)+yamlVal(_0x5b81e2[_0x38221b(0x235)])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x449)+_0x5b81e2['port']);if(_0x5b81e2[_0x38221b(0x457)]===_0x38221b(0x188))_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x22d)+yamlVal(_0x5b81e2[_0x38221b(0x119)]));else _0x26dbde[_0x38221b(0x32a)](_0x38221b(0x377)+yamlVal(_0x5b81e2[_0x38221b(0x440)]));_0x26dbde['push']('\x20\x20\x20\x20network:\x20'+_0x5b81e2[_0x38221b(0x200)]),_0x26dbde[_0x38221b(0x32a)]('\x20\x20\x20\x20udp:\x20true');if(_0x5b81e2[_0x38221b(0x39b)]){_0x26dbde['push']('\x20\x20\x20\x20tls:\x20true'),_0x26dbde[_0x38221b(0x32a)]('\x20\x20\x20\x20skip-cert-verify:\x20true'),_0x26dbde['push'](_0x5b81e2[_0x38221b(0x200)]===_0x38221b(0x2ea)?_0x38221b(0x35b):_0x38221b(0x347)),_0x26dbde['push'](_0x38221b(0x337)+yamlVal(_0x5b81e2[_0x38221b(0x1fd)]));if(_0x5b81e2[_0x38221b(0x457)]===_0x38221b(0x265))_0x26dbde['push']('\x20\x20\x20\x20sni:\x20'+yamlVal(_0x5b81e2[_0x38221b(0x1fd)]));_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x266)),_0x5b81e2['ech-opts']&&(_0x26dbde['push'](_0x38221b(0x3b4)),_0x26dbde['push'](_0x38221b(0x43c)+yamlVal(_0x5b81e2[_0x38221b(0x2d9)][_0x38221b(0x159)])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x325)+yamlVal(_0x5b81e2[_0x38221b(0x2d9)][_0x38221b(0x152)])));}if(_0x5b81e2[_0x38221b(0x200)]==='ws')_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x149)),_0x26dbde['push'](_0x38221b(0x2ab)+yamlVal(_0x5b81e2['ws-opts']['path'])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x303)),_0x26dbde[_0x38221b(0x32a)]('\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20'+yamlVal(_0x5b81e2[_0x38221b(0x400)][_0x38221b(0x3c3)]['Host']));else{if(_0x5b81e2[_0x38221b(0x200)]==='xhttp'){const _0x281e5c=_0x5b81e2[_0x38221b(0x36b)];_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x189)),_0x26dbde['push']('\x20\x20\x20\x20\x20\x20path:\x20'+yamlVal(_0x281e5c['path'])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x252)+yamlVal(_0x281e5c['mode'])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x1b8)+yamlVal(_0x281e5c[_0x38221b(0x19e)])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x381)+yamlVal(_0x281e5c[_0x38221b(0x304)])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x2b2)+yamlVal(_0x281e5c['x-padding-method'])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x18e)+yamlVal(_0x281e5c['x-padding-placement'])),_0x26dbde[_0x38221b(0x32a)]('\x20\x20\x20\x20\x20\x20x-padding-header:\x20'+yamlVal(_0x281e5c[_0x38221b(0x357)])),_0x26dbde[_0x38221b(0x32a)](_0x38221b(0x2b4)+yamlVal(_0x281e5c[_0x38221b(0x3c8)]));}}return _0x26dbde[_0x38221b(0x40a)]('\x0a');}function generateClash(_0x3e411a,_0x5c69a7){const _0x34e2a9=_0x40b3d2,_0x26aab3=_0x3e411a['host'],_0x32c4c4='/'+_0x3e411a[_0x34e2a9(0x20f)],_0xc7048d=new Set(),_0x4b1621=_0x5c69a7['map'](_0x4e9685=>{const _0x1ecabe=_0x34e2a9,{user:_0x252ed8,srv:_0x26226b,prt:_0x2bf997,name:_0x30e66f,isTrojan:_0x42f541,tls:_0x3d8b55}=parseShareNode(_0x4e9685,0x0);let _0x304b6b=_0x30e66f;const _0x482da9=getParam(_0x4e9685,_0x1ecabe(0x457))||'ws';if(_0xc7048d['has'](_0x304b6b)){const _0x20f695=_0x42f541?'T':_0x482da9===_0x1ecabe(0x2ea)?'X':'W';let _0x23a710=_0x304b6b+'·'+_0x20f695,_0x32e235=0x2;while(_0xc7048d[_0x1ecabe(0x314)](_0x23a710)){_0x23a710=_0x304b6b+'·'+_0x20f695+_0x32e235,_0x32e235++;}_0x304b6b=_0x23a710;}_0xc7048d[_0x1ecabe(0x121)](_0x304b6b);const _0x1d85d3={'name':_0x304b6b,'server':_0x26226b,'port':_0x2bf997,'udp':!![],..._0x3d8b55?{'tls':!![],'skip-cert-verify':!![],'servername':_0x26aab3,'client-fingerprint':_0x1ecabe(0x2a0),'alpn':['http/1.1']}:{},..._0x3e411a[_0x1ecabe(0x161)]&&_0x3d8b55?{'ech-opts':{'enable':!![],'query-server-name':_0x3e411a['echHost']||_0x1ecabe(0x3e7)}}:{}};if(_0x42f541)return{..._0x1d85d3,'type':_0x1ecabe(0x265),'password':_0x252ed8,'network':'ws','ws-opts':{'path':_0x32c4c4,'headers':{'Host':_0x26aab3}}};if(_0x482da9===_0x1ecabe(0x2ea)){let _0x309121={};try{_0x309121=JSON['parse'](getParam(_0x4e9685,_0x1ecabe(0x330))||'{}');}catch(_0x45cece){}return{..._0x1d85d3,'type':_0x1ecabe(0x188),'uuid':_0x252ed8,'network':_0x1ecabe(0x2ea),'alpn':['h2'],'xhttp-opts':{'path':_0x32c4c4,'mode':_0x1ecabe(0x2b1),'host':_0x26aab3,'x-padding-obfs-mode':_0x309121[_0x1ecabe(0x391)]!==undefined?_0x309121[_0x1ecabe(0x391)]:!![],'x-padding-method':_0x309121[_0x1ecabe(0x264)]||'tokenish','x-padding-placement':_0x309121[_0x1ecabe(0x1c0)]||'queryInHeader','x-padding-header':_0x309121[_0x1ecabe(0x2ce)]||'','x-padding-key':_0x309121[_0x1ecabe(0x2a7)]||''}};}return{..._0x1d85d3,'type':_0x1ecabe(0x188),'uuid':_0x252ed8,'network':'ws','ws-opts':{'path':_0x32c4c4,'headers':{'Host':_0x26aab3}}};});_0x4b1621[_0x34e2a9(0x20e)]((_0x23f842,_0x2d33f2)=>(_0x23f842[_0x34e2a9(0x3c4)]===0x1bb?0x0:0x1)-(_0x2d33f2['port']===0x1bb?0x0:0x1));const _0x9ee85c=_0x34e2a9(0x41f)+_0x4b1621['map'](_0x20ca95=>clashProxyYaml(_0x20ca95))[_0x34e2a9(0x40a)]('\x0a')+'\x0a'+CLASH_TEMPLATE+'\x0a';return _0x9ee85c;}function generateSurfboard(_0x3f29e4,_0x1cc494){const _0x3f66bd=_0x40b3d2,_0x1fedcb=_0x3f29e4[_0x3f66bd(0x19e)],_0x5f7f31='/'+_0x3f29e4[_0x3f66bd(0x20f)],_0x4837e4=[];for(const _0x1009b1 of _0x1cc494){if(_0x1009b1[_0x3f66bd(0x371)](_0x3f66bd(0x462))&&_0x1009b1['indexOf'](_0x3f66bd(0x237))<0x0)_0x4837e4[_0x3f66bd(0x32a)](_0x1009b1);else{if(_0x1009b1[_0x3f66bd(0x371)](_0x3f66bd(0x254))&&_0x1009b1[_0x3f66bd(0x179)]('type=xhttp')<0x0&&_0x1009b1[_0x3f66bd(0x179)]('security=none')<0x0)_0x4837e4['push'](_0x1009b1[_0x3f66bd(0x3c2)](/^vless:\/\//,_0x3f66bd(0x462))[_0x3f66bd(0x3c2)]('encryption=none&',''));}}const _0x3fb3e9=_0x4837e4[_0x3f66bd(0x114)]((_0x308852,_0x41bc15)=>{const _0x5d96f9=_0x3f66bd,{user:_0x5bcccb,srv:_0x19313a,prt:_0x2aff1a,name:_0x40be79}=parseShareNode(_0x308852,_0x41bc15);return _0x40be79+_0x5d96f9(0x2dc)+_0x19313a+',\x20'+_0x2aff1a+',\x20password='+_0x5bcccb+_0x5d96f9(0x2e2)+_0x5f7f31+_0x5d96f9(0x250)+_0x1fedcb+_0x5d96f9(0x34f)+_0x1fedcb;});return _0x3f66bd(0x2d7)+_0x3fb3e9['join']('\x0a')+_0x3f66bd(0x3bc)+_0x3fb3e9[_0x3f66bd(0x114)](_0x396c8c=>_0x396c8c[_0x3f66bd(0x420)](_0x3f66bd(0x2c7))[0x0])[_0x3f66bd(0x40a)](',\x20')+_0x3f66bd(0x15c);}function generateSingbox(_0x1a58cf,_0x5d16e4){const _0x1ad372=_0x40b3d2,_0x4d82f6=_0x1a58cf['host'],_0x4c28ba='/'+_0x1a58cf[_0x1ad372(0x20f)],_0x46a375=_0x5d16e4[_0x1ad372(0x114)]((_0x506656,_0x57b069)=>{const _0x69f40e=_0x1ad372,{user:_0x397c9a,srv:_0x4d8c01,prt:_0x38bcf0,name:_0x850876,isTrojan:_0x209967,tls:_0x3edd75}=parseShareNode(_0x506656,_0x57b069),_0xe2929e=getParam(_0x506656,'type')||'ws',_0xa03199=_0x3edd75?_0xe2929e==='xhttp'?{'enabled':!![],'server_name':_0x4d82f6,'insecure':!![],'alpn':['h2']}:{'enabled':!![],'server_name':_0x4d82f6,'insecure':!![],'alpn':[_0x69f40e(0x1cb)],'utls':{'enabled':!![],'fingerprint':_0x69f40e(0x2a0)}}:{'enabled':![]},_0x25873a=_0xe2929e===_0x69f40e(0x2ea)?{'type':_0x69f40e(0x2ea),'mode':'stream-one','path':_0x4c28ba}:_0x3edd75?{'type':'ws','path':_0x4c28ba,'headers':{'Host':_0x4d82f6},'max_early_data':0x800,'early_data_header_name':_0x69f40e(0x3bb)}:{'type':'ws','path':_0x4c28ba,'headers':{'Host':_0x4d82f6}};if(_0x209967)return{'type':_0x69f40e(0x265),'tag':_0x850876,'server':_0x4d8c01,'server_port':_0x38bcf0,'password':_0x397c9a,'tls':_0xa03199,'transport':_0x25873a};return{'type':'vless','tag':_0x850876,'server':_0x4d8c01,'server_port':_0x38bcf0,'uuid':_0x397c9a,'packet_encoding':'xudp','tls':_0xa03199,'transport':_0x25873a};}),_0x178877=_0x46a375['map'](_0x4c2a97=>_0x4c2a97[_0x1ad372(0x3fe)]),_0x176d02=[[_0x1ad372(0x2df),'🎯\x20全球直连'],['geosite-google',_0x1ad372(0x2f6)],[_0x1ad372(0x1c4),_0x1ad372(0x11a)],[_0x1ad372(0x116),_0x1ad372(0x216)],[_0x1ad372(0x10d),'🤖\x20OpenAI'],['geosite-spotify',_0x1ad372(0x45e)],[_0x1ad372(0x45d),'🌍\x20国外媒体'],[_0x1ad372(0x326),_0x1ad372(0x45e)],[_0x1ad372(0x178),'🌍\x20国外媒体'],[_0x1ad372(0x2f2),'🌍\x20国外媒体'],['geosite-telegram',_0x1ad372(0x45e)],['geosite-github','🌍\x20国外媒体'],[_0x1ad372(0x22e),_0x1ad372(0x42c)]],_0x494b5b={'log':{'level':_0x1ad372(0x3ed)},'dns':{'servers':[{'tag':_0x1ad372(0x217),'address':'https://1.1.1.1/dns-query'},{'tag':_0x1ad372(0x20b),'address':'udp://223.5.5.5'}],'strategy':_0x1ad372(0x43f),'independent_cache':!![],'fakeip':{'enabled':!![],'inet4_range':'198.18.0.0/15','store_fakeip':!![]}},'inbounds':[{'type':'mixed','tag':_0x1ad372(0x297),'listen':'127.0.0.1','listen_port':0x820,'sniff':!![],'sniff_override_destination':!![]},{'type':'tun','tag':_0x1ad372(0x1a2),'interface_name':_0x1ad372(0x2e7),'inet4_address':[_0x1ad372(0x3a6)],'mtu':0x2328,'auto_route':!![],'strict_route':!![],'stack':_0x1ad372(0x30c),'sniff':!![],'sniff_override_destination':!![]}],'outbounds':[..._0x46a375,{'type':_0x1ad372(0x389),'tag':_0x1ad372(0x389)},{'type':_0x1ad372(0x42c),'tag':_0x1ad372(0x42c)},{'type':_0x1ad372(0x397),'tag':_0x1ad372(0x18d)},{'type':_0x1ad372(0x399),'tag':_0x1ad372(0x1b3),'outbounds':_0x178877},{'type':'selector','tag':_0x1ad372(0x3eb),'outbounds':[_0x1ad372(0x389)]},{'type':_0x1ad372(0x399),'tag':_0x1ad372(0x43d),'outbounds':[_0x1ad372(0x1b3),_0x1ad372(0x3eb)]},{'type':'selector','tag':_0x1ad372(0x45e),'outbounds':['🚀\x20节点选择']},{'type':_0x1ad372(0x399),'tag':_0x1ad372(0x2f6),'outbounds':['🚀\x20节点选择']},{'type':_0x1ad372(0x399),'tag':_0x1ad372(0x39c),'outbounds':[_0x1ad372(0x1b3)]},{'type':_0x1ad372(0x399),'tag':'🍎\x20苹果服务','outbounds':[_0x1ad372(0x3eb)]},{'type':_0x1ad372(0x399),'tag':_0x1ad372(0x216),'outbounds':['🎯\x20全球直连']}],'route':{'rules':[{'protocol':_0x1ad372(0x397),'outbound':_0x1ad372(0x18d)},{'ip_is_private':!![],'outbound':'direct'},..._0x176d02[_0x1ad372(0x114)](([_0x3f2105,_0x287594])=>({'rule_set':[_0x3f2105],'outbound':_0x287594})),{'geoip':['cn'],'outbound':_0x1ad372(0x389)},{'ip_is_private':!![],'outbound':_0x1ad372(0x42c)}],'rule_set':_0x176d02['map'](([_0x531573])=>({'type':_0x1ad372(0x11b),'tag':_0x531573,'format':_0x1ad372(0x14b),'url':_0x1ad372(0x171)+_0x531573+'.list'})),'final':'🐟\x20漏网之鱼','auto_detect_interface':!![],'default_domain_resolver':{'server':'dns-remote'}},'experimental':{'clash_api':{'external_controller':_0x1ad372(0x455)}}};return JSON['stringify'](_0x494b5b,null,0x2);}function generateSurge(_0x1122df,_0x37f6b1){const _0x58744f=_0x40b3d2,_0x509bb8=_0x1122df[_0x58744f(0x19e)],_0x3bb05b='/'+_0x1122df[_0x58744f(0x20f)],_0xe70646=_0x37f6b1[_0x58744f(0x114)]((_0x751e04,_0x1ed52e)=>{const _0x163e5e=_0x58744f,{user:_0x1a6a01,srv:_0x7fd28d,prt:_0x853dd,name:_0x4be98f,isTrojan:_0x19d544,tls:_0xa3756e}=parseShareNode(_0x751e04,_0x1ed52e),_0x3663f9=_0xa3756e?_0x163e5e(0x34f)+_0x509bb8:_0x163e5e(0x24c);return _0x19d544?_0x4be98f+_0x163e5e(0x2dc)+_0x7fd28d+',\x20'+_0x853dd+_0x163e5e(0x3c6)+_0x1a6a01+_0x163e5e(0x2e2)+_0x3bb05b+_0x163e5e(0x250)+_0x509bb8+_0x3663f9:_0x4be98f+_0x163e5e(0x1b5)+_0x7fd28d+',\x20'+_0x853dd+_0x163e5e(0x138)+_0x1a6a01+_0x163e5e(0x2e2)+_0x3bb05b+_0x163e5e(0x250)+_0x509bb8+_0x3663f9;});return _0x58744f(0x2d7)+_0xe70646[_0x58744f(0x40a)]('\x0a')+_0x58744f(0x3bc)+_0xe70646['map'](_0x193c96=>_0x193c96['split'](_0x58744f(0x2c7))[0x0])['join'](',\x20')+_0x58744f(0x15c);}function generateLoon(_0x1dc9f2,_0x945efb){const _0x420486=_0x40b3d2,_0x1461f6=_0x1dc9f2[_0x420486(0x19e)],_0x236462='/'+_0x1dc9f2['path'],_0x251d99=_0x945efb[_0x420486(0x114)]((_0x73f4a6,_0x474a97)=>{const _0x200162=_0x420486,{user:_0x3e2f02,srv:_0x3e946d,prt:_0x2273d7,name:_0x2cfd48,isTrojan:_0x52f278,tls:_0x404bf1}=parseShareNode(_0x73f4a6,_0x474a97),_0x3706bc=_0x404bf1?_0x200162(0x34f)+_0x1461f6:',\x20tls=false';return _0x52f278?_0x2cfd48+_0x200162(0x2dc)+_0x3e946d+',\x20'+_0x2273d7+_0x200162(0x3c6)+_0x3e2f02+_0x200162(0x2e2)+_0x236462+_0x200162(0x250)+_0x1461f6+_0x3706bc:_0x2cfd48+_0x200162(0x1b5)+_0x3e946d+',\x20'+_0x2273d7+',\x20username='+_0x3e2f02+_0x200162(0x2e2)+_0x236462+',\x20ws-headers=Host:'+_0x1461f6+_0x3706bc;}),_0x20eb77=_0x251d99['map'](_0x3c3052=>_0x3c3052['split'](_0x420486(0x2c7))[0x0])['join'](',\x20');return _0x420486(0x262)+_0x251d99[_0x420486(0x40a)]('\x0a')+'\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20'+_0x20eb77+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20'+_0x20eb77+'\x0a\x0a[Rule]\x0aGEOIP,CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a';}function generateQuanX(_0x431c03,_0x3492c4){const _0x32bd17=_0x40b3d2,_0x102368=_0x431c03[_0x32bd17(0x19e)],_0x1e3bb7='/'+_0x431c03[_0x32bd17(0x20f)],_0x15e811=_0x4aab4c=>_0x4aab4c[_0x32bd17(0x179)](':')>=0x0?'['+_0x4aab4c+']':_0x4aab4c,_0x2c0695=_0x3492c4['map']((_0x43c217,_0x32417d)=>{const _0x135b3d=_0x32bd17,{user:_0xfcf77f,srv:_0xd43a62,prt:_0x31ade4,name:_0x1097e7}=parseShareNode(_0x43c217,_0x32417d);if(_0x43c217['startsWith'](_0x135b3d(0x462)))return _0x135b3d(0x3cb)+_0x15e811(_0xd43a62)+':'+_0x31ade4+',\x20password='+_0xfcf77f+',\x20over-tls=true,\x20tls-host='+_0x102368+_0x135b3d(0x110)+_0x102368+_0x135b3d(0x135)+_0x1e3bb7+_0x135b3d(0x211)+_0x1097e7;const _0x1e2895=(getParam(_0x43c217,_0x135b3d(0x382))||_0x135b3d(0x39b))===_0x135b3d(0x39b);return _0x135b3d(0x278)+_0x15e811(_0xd43a62)+':'+_0x31ade4+',\x20method=none,\x20password='+_0xfcf77f+_0x135b3d(0x44c)+(_0x1e2895?_0x135b3d(0x290):'ws')+_0x135b3d(0x22f)+_0x102368+_0x135b3d(0x135)+_0x1e3bb7+(_0x1e2895?_0x135b3d(0x18b):'')+_0x135b3d(0x2b8)+_0x1097e7;}),_0x3369b4=_0x3492c4[_0x32bd17(0x114)]((_0x362d4d,_0xc0502)=>{const _0x1569bc=_0x32bd17,_0xcf8388=_0x362d4d[_0x1569bc(0x179)]('#');if(_0xcf8388<0x0)return'节点'+(_0xc0502+0x1);try{return decodeURIComponent(_0x362d4d[_0x1569bc(0x27e)](_0xcf8388+0x1))||'节点'+(_0xc0502+0x1);}catch(_0x5436d0){return'节点'+(_0xc0502+0x1);}})[_0x32bd17(0x40a)](',\x20');return _0x32bd17(0x2b5)+_0x2c0695['join']('\x0a')+_0x32bd17(0x301)+_0x3369b4+',\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png\x0astatic=🌐\x20全球直连,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png\x0astatic=🐟\x20漏网之鱼,\x20🚀\x20节点选择,\x20direct,\x20img-url=https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png\x0a[filter_local]\x0ageoip,\x20cn,\x20🌐\x20全球直连\x0afinal,\x20🐟\x20漏网之鱼\x0a';}let PROBE_ALIVE_ENABLED=![];function setProbeAlive(_0x33b5ac){const _0x19ed15=_0x40b3d2;PROBE_ALIVE_ENABLED=_0x33b5ac===!![]||_0x33b5ac===_0x19ed15(0x3dc)||_0x33b5ac==='1'||_0x33b5ac===0x1;}const PROBE_CONCURRENCY=0x4;let probeRunning=0x0;const probeWaiters=[];function probeLimit(){const _0x3c916c=_0x40b3d2;if(probeRunning<PROBE_CONCURRENCY)return probeRunning++,Promise[_0x3c916c(0x427)]();return new Promise(_0x2bb1ed=>probeWaiters['push'](_0x2bb1ed));}function probeRelease(){const _0x4ceb1e=_0x40b3d2,_0x4fc43e=probeWaiters[_0x4ceb1e(0x3b3)]();if(_0x4fc43e)_0x4fc43e();else probeRunning--;}async function probeAll(_0x51ef79,_0x45ccbb){const _0x21d27c=_0x40b3d2,_0xa6c41c=[];let _0x49db39=0x0;const _0x2d3e35=Array[_0x21d27c(0x430)]({'length':Math[_0x21d27c(0x236)](PROBE_CONCURRENCY,_0x51ef79['length'])},async()=>{while(_0x49db39<_0x51ef79['length']){const _0x432228=_0x49db39++;await probeLimit();try{_0xa6c41c[_0x432228]=await _0x45ccbb(_0x51ef79[_0x432228],_0x432228);}catch(_0x4ec583){_0xa6c41c[_0x432228]=![];}finally{probeRelease();}}});return await Promise[_0x21d27c(0x25d)](_0x2d3e35),_0xa6c41c;}async function testProxyAlive(_0x43d83c,_0xdb2918,_0x4efc7a){const _0x472ce4=_0x40b3d2;if(!PROBE_ALIVE_ENABLED)return!![];const _0x3debf9=_0x4efc7a||0x7d0;try{const _0x2fb775=connect({'hostname':_0x43d83c,'port':_0xdb2918});await Promise[_0x472ce4(0x3e6)]([_0x2fb775[_0x472ce4(0x36e)],new Promise((_0x404518,_0x7b522)=>setTimeout(()=>_0x7b522(new Error(_0x472ce4(0x2eb))),_0x3debf9))]);try{_0x2fb775['close']();}catch(_0x54942c){}return!![];}catch(_0x237648){return![];}}async function testRelayAlive(_0x51766f,_0xad14e7,_0x1cddfa){if(!PROBE_ALIVE_ENABLED)return!![];return testRelayAliveRaw(_0x51766f,_0xad14e7,_0x1cddfa);}async function testRelayAliveRaw(_0x12d8a2,_0x1f26ab,_0x30bb00){const _0x28b754=_0x40b3d2,_0x3e2927=_0x30bb00||0x9c4;try{const _0x513f49=connect({'hostname':_0x12d8a2,'port':_0x1f26ab});await Promise['race']([_0x513f49[_0x28b754(0x36e)],new Promise((_0x1810ab,_0x53355c)=>setTimeout(()=>_0x53355c(new Error(_0x28b754(0x1cc))),_0x3e2927))]);const _0x1b0171=_0x513f49[_0x28b754(0x374)][_0x28b754(0x184)](),_0x3d53c1=_0x513f49['readable'][_0x28b754(0x350)]();await _0x1b0171[_0x28b754(0x3aa)](new TextEncoder()[_0x28b754(0x2a3)](_0x28b754(0x333)+_0x12d8a2+_0x28b754(0x3d1)));const _0x399d95=await Promise[_0x28b754(0x3e6)]([_0x3d53c1[_0x28b754(0x3b0)](),new Promise((_0xb46e65,_0x4c457c)=>setTimeout(()=>_0x4c457c(new Error('http\x20timeout')),_0x3e2927))]);try{_0x513f49[_0x28b754(0x451)]();}catch(_0x2e749e){}const _0x58ca6c=new TextDecoder()['decode'](_0x399d95[_0x28b754(0x30d)]||new Uint8Array(0x0));return/^HTTP\/1\\.[01] (200|204)/[_0x28b754(0x1ee)](_0x58ca6c);}catch(_0x1aa401){return![];}}async function dohFirstCF(_0x421ba1){const _0x4ff8f3=_0x40b3d2;try{const _0x4943b6=await fetchTimeout(_0x4ff8f3(0x10b)+encodeURIComponent(_0x421ba1)+_0x4ff8f3(0x1c3),{'headers':{'accept':'application/dns-json'}},0xfa0);if(!_0x4943b6||!_0x4943b6['ok'])return null;const _0x235dfb=await _0x4943b6[_0x4ff8f3(0x1af)](),_0x5ab798=(_0x235dfb[_0x4ff8f3(0x3fb)]||[])['filter'](_0x3f9797=>_0x3f9797[_0x4ff8f3(0x457)]===0x1&&/^\d+\.\d+\.\d+\.\d+$/['test'](_0x3f9797[_0x4ff8f3(0x407)]))[_0x4ff8f3(0x114)](_0x365bdc=>_0x365bdc[_0x4ff8f3(0x407)]);return _0x5ab798[_0x4ff8f3(0x1b7)](isCloudflareIP)[0x0]||null;}catch(_0x53594d){return null;}}const DOMAIN_ALIVE_CACHE={'t':0x0,'list':null};async function filterAliveDomains(_0x4722a6){const _0x2f545f=_0x40b3d2;if(!PROBE_ALIVE_ENABLED)return String(_0x4722a6||'')[_0x2f545f(0x420)](/[\n,;]+/)['map'](_0x537d1b=>_0x537d1b['trim']()['replace'](/^\*\./,''))[_0x2f545f(0x1b7)](Boolean)[_0x2f545f(0x40a)]('\x0a');if(Date[_0x2f545f(0x25b)]()-DOMAIN_ALIVE_CACHE['t']<0xa*0x3c*0x3e8&&DOMAIN_ALIVE_CACHE[_0x2f545f(0x43b)]!==null)return DOMAIN_ALIVE_CACHE[_0x2f545f(0x43b)];const _0x1f6a0f=String(_0x4722a6||'')['split'](/[\n,;]+/)[_0x2f545f(0x114)](_0x2504aa=>_0x2504aa['trim']()[_0x2f545f(0x3c2)](/^\*\./,''))[_0x2f545f(0x1b7)](Boolean),_0x59b865=await probeAll(_0x1f6a0f,async _0x3223c8=>{const _0x4e8d7d=await dohFirstCF(_0x3223c8);if(!_0x4e8d7d||!isCloudflareIP(_0x4e8d7d))return{'d':_0x3223c8,'ok':![]};return{'d':_0x3223c8,'ok':await testProxyAlive(_0x4e8d7d,0x1bb)};}),_0x2b93f6=_0x59b865[_0x2f545f(0x114)]((_0x2559fd,_0x3e92b9)=>_0x2559fd&&_0x2559fd['ok']?_0x1f6a0f[_0x3e92b9]:null)[_0x2f545f(0x1b7)](Boolean);return DOMAIN_ALIVE_CACHE['t']=Date[_0x2f545f(0x25b)](),DOMAIN_ALIVE_CACHE['list']=_0x2b93f6[_0x2f545f(0x40a)]('\x0a'),DOMAIN_ALIVE_CACHE[_0x2f545f(0x43b)];}const bestcfCache={'list':null,'at':0x0};async function fetchBestcfPool(){const _0x47de5f=_0x40b3d2;if(bestcfCache[_0x47de5f(0x43b)]&&Date[_0x47de5f(0x25b)]()-bestcfCache['at']<0xa*0x3c*0x3e8)return bestcfCache[_0x47de5f(0x43b)];const _0x5c4d7b=[],_0x508df3=BESTCF_REGION_URLS['map'](async _0x4f766b=>{const _0x3f6389=_0x47de5f;try{const _0x2119f0=await fetchTimeout(_0x4f766b[_0x3f6389(0x17f)],{'headers':{'User-Agent':'Mozilla/5.0'}},0x1f40);if(!_0x2119f0['ok'])return;const _0x1b3442=await _0x2119f0[_0x3f6389(0x244)](),_0x1eef3e=[];for(const _0x33191f of _0x1b3442['split'](/[\r\n]+/)){const _0xf0cd60=_0x33191f[_0x3f6389(0x283)]()['match'](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);if(_0xf0cd60&&_0x1eef3e[_0x3f6389(0x41b)]<_0x4f766b[_0x3f6389(0x229)])_0x1eef3e[_0x3f6389(0x32a)]({'ip':_0xf0cd60[0x1],'port':_0xf0cd60[0x2]?parseInt(_0xf0cd60[0x2],0xa):0x1bb,'name':_0x4f766b[_0x3f6389(0x172)]+'-'+String(_0x1eef3e['length']+0x1)[_0x3f6389(0x30e)](0x2,'0')});}_0x1eef3e[_0x3f6389(0x1d0)](_0x7bf18=>_0x5c4d7b[_0x3f6389(0x32a)](_0x7bf18));}catch(_0x59b6e0){}});return await Promise[_0x47de5f(0x25d)](_0x508df3),bestcfCache[_0x47de5f(0x43b)]=_0x5c4d7b,bestcfCache['at']=Date[_0x47de5f(0x25b)](),_0x5c4d7b;}function appendStableNodes(_0x41a56c,_0x169083,_0x417098){const _0x322732=_0x40b3d2;if(_0x41a56c[_0x322732(0x41b)]>=_0x417098)return;const _0xb09c33=new Set();for(const _0x12f033 of _0x41a56c){try{_0xb09c33[_0x322732(0x121)](parseNodeServer(_0x12f033)['host']);}catch(_0x24b4ce){}}let _0x4db70f=0x0;for(const _0xb3e819 of BUILTIN_STABLE_IPS){if(_0x41a56c['length']>=_0x417098)break;if(_0xb09c33[_0x322732(0x314)](_0xb3e819))continue;_0xb09c33[_0x322732(0x121)](_0xb3e819),_0x4db70f++;const _0x309656=_0x322732(0x233)+String(_0x4db70f)[_0x322732(0x30e)](0x2,'0');if(_0x169083[_0x322732(0x1f0)])_0x41a56c['push'](vlessNode(_0x169083,_0xb3e819,0x1bb,_0x309656));if(_0x41a56c[_0x322732(0x41b)]>=_0x417098)break;if(_0x169083[_0x322732(0x198)])_0x41a56c[_0x322732(0x32a)](trojanNode(_0x169083,_0xb3e819,0x1bb,_0x309656));if(_0x41a56c[_0x322732(0x41b)]>=_0x417098)break;if(_0x169083[_0x322732(0x2d4)])_0x41a56c['push'](vlessNode(_0x169083,_0xb3e819,0x1bb,_0x309656,{'type':_0x322732(0x2ea)}));}}function appendFallbackNodes(_0x33493c,_0x548e0e,_0x5a4e69,_0x49d616){const _0x28f3bb=_0x40b3d2;if(_0x33493c[_0x28f3bb(0x41b)]>=_0x5a4e69)return;const _0x20d5c2=new Set();for(const _0x8bf38e of _0x33493c){try{_0x20d5c2[_0x28f3bb(0x121)](parseNodeServer(_0x8bf38e)[_0x28f3bb(0x19e)]);}catch(_0x1f4631){}}const _0x2aacf0=(_0x25d3ba,_0x28170b)=>{const _0x2281fa=_0x28f3bb;if(_0x33493c[_0x2281fa(0x41b)]>=_0x5a4e69)return;if(_0x20d5c2['has'](_0x25d3ba))return;_0x20d5c2[_0x2281fa(0x121)](_0x25d3ba);if(_0x548e0e['enableVless'])_0x33493c['push'](vlessNode(_0x548e0e,_0x25d3ba,0x1bb,_0x28170b));if(_0x548e0e[_0x2281fa(0x198)])_0x33493c['push'](trojanNode(_0x548e0e,_0x25d3ba,0x1bb,_0x28170b));if(_0x548e0e[_0x2281fa(0x2d4)])_0x33493c['push'](vlessNode(_0x548e0e,_0x25d3ba,0x1bb,_0x28170b,{'type':'xhttp'}));};_0x548e0e[_0x28f3bb(0x3b5)]&&_0x548e0e[_0x28f3bb(0x3b5)][_0x28f3bb(0x3dd)]===!![]&&_0x2aacf0(_0x548e0e[_0x28f3bb(0x19e)],_0x28f3bb(0x315));}async function generateSubscription(_0x25e0c0,_0x34cd95,_0x335ac0,_0x3b3616,_0x251cbe){const _0x58f705=_0x40b3d2;if(!_0x25e0c0['path']||_0x25e0c0[_0x58f705(0x20f)]==='/'||_0x25e0c0['path']==='')_0x25e0c0['path']=_0x25e0c0['uuid'];const _0x445b36=_0x25e0c0[_0x58f705(0x1b7)]&&_0x25e0c0['filter']['ipType']||[];if(_0x445b36[_0x58f705(0x269)](_0x58f705(0x328)))await refreshOfficialV6CIDRs();const _0x2f1f5c=_0x25e0c0[_0x58f705(0x2e9)]&&_0x25e0c0['optimizer'][_0x58f705(0x281)]||'';if(_0x2f1f5c===''&&(!_0x25e0c0[_0x58f705(0x2ba)]||_0x25e0c0[_0x58f705(0x2ba)]['length']<0x50))try{const [_0x533fe9,_0x441c3b,_0x2147ba]=await Promise[_0x58f705(0x25d)]([fetchBestcfPool()[_0x58f705(0x364)](()=>[]),fetchLatestPreferredIPs(0xc8)['catch'](()=>null),Promise['resolve'](parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a')))]),_0x144216=[],_0x37e477=[],_0x32aac3=new Set((_0x25e0c0['preferredIPs']||[])[_0x58f705(0x114)](_0x4cb7d1=>_0x4cb7d1['ip']));for(const _0x3cf4ea of[..._0x25e0c0[_0x58f705(0x2ba)]||[],..._0x533fe9||[],..._0x441c3b||[],..._0x2147ba]){if(!_0x3cf4ea||!_0x3cf4ea['ip']||_0x32aac3[_0x58f705(0x314)](_0x3cf4ea['ip']))continue;_0x32aac3['add'](_0x3cf4ea['ip']);const _0x4bc8f1={'ip':_0x3cf4ea['ip'],'port':_0x3cf4ea[_0x58f705(0x3c4)]||0x1bb,'name':_0x3cf4ea['name']||'','relay':!!_0x3cf4ea[_0x58f705(0x18a)]};if(_0x4bc8f1[_0x58f705(0x18a)]||!isCloudflareIP(_0x4bc8f1['ip']))_0x37e477[_0x58f705(0x32a)](_0x4bc8f1);else _0x144216[_0x58f705(0x32a)](_0x4bc8f1);}const _0x2813e9=_0x37e477[_0x58f705(0x27e)](0x0,0x64),_0x21c70b=_0x144216[_0x58f705(0x27e)](0x0,0x96),[_0x1e7576,_0x5b066d]=await Promise[_0x58f705(0x25d)]([probeAll(_0x2813e9,_0x51fd39=>testRelayAlive(_0x51fd39['ip'],_0x51fd39[_0x58f705(0x3c4)]||0x1bb,0x9c4)),probeAll(_0x21c70b,_0x5c49a3=>testProxyAlive(_0x5c49a3['ip'],_0x5c49a3['port']||0x1bb,0x9c4))]),_0x1716ac=_0x2813e9[_0x58f705(0x1b7)]((_0x18d0d8,_0x5ee11d)=>_0x1e7576[_0x5ee11d]),_0x1c2d48=_0x21c70b[_0x58f705(0x1b7)]((_0x5233dd,_0x150782)=>_0x5b066d[_0x150782]),_0x17796e=_0x1c2d48[_0x58f705(0x27e)](0x0,0xd2),_0xc7ccd2=_0x1716ac[_0x58f705(0x27e)](0x0,0x28);_0x25e0c0[_0x58f705(0x2ba)]=[..._0x25e0c0[_0x58f705(0x2ba)]||[],..._0x17796e,..._0xc7ccd2][_0x58f705(0x27e)](0x0,0xfa);}catch(_0x242440){}const _0x31077b=!/\.workers\.dev$/i[_0x58f705(0x1ee)](new URL(_0x34cd95)[_0x58f705(0x2e1)]),_0x26e1c5=Object[_0x58f705(0x444)]({},_0x25e0c0,{'host':_0x25e0c0[_0x58f705(0x19e)]||new URL(_0x34cd95)[_0x58f705(0x2e1)]});_0x31077b&&(_0x26e1c5[_0x58f705(0x447)]=!![]);const _0x1d62ad=_0x25e0c0[_0x58f705(0x2e9)]&&_0x25e0c0[_0x58f705(0x2e9)][_0x58f705(0x281)]||'';let _0x510aa9=[];const _0x4ed882=_0x25e0c0[_0x58f705(0x1b7)]&&_0x25e0c0[_0x58f705(0x1b7)][_0x58f705(0x450)]||[],_0x22c39f=_0x4ed882['includes']('IPv6'),_0x224a75=_0x4ed882[_0x58f705(0x41b)]===0x1&&_0x4ed882[0x0]===_0x58f705(0x328),_0x457f1d=_0x224a75?OFFICIAL_V6_CIDRS:_0x22c39f?[...REACHABLE_CIDRS,...OFFICIAL_V6_CIDRS]:REACHABLE_CIDRS,_0x51567e=parseIPList(BUILTIN_PREFERRED_IPS['join']('\x0a'))[_0x58f705(0x114)](_0x10174e=>({'ip':_0x10174e['ip'],'port':_0x10174e['port']||0x1bb,'name':_0x10174e[_0x58f705(0x1ca)]||_0x58f705(0x141)+String(BUILTIN_PREFERRED_IPS[_0x58f705(0x179)](_0x10174e)+0x1)[_0x58f705(0x30e)](0x2,'0')}));if(_0x1d62ad==='custom'){const _0x3d03f4=!!(_0x25e0c0[_0x58f705(0x2e9)]&&_0x25e0c0[_0x58f705(0x2e9)][_0x58f705(0x3f7)]),_0x4d4c99=!_0x3d03f4;_0x510aa9=await resolvePreferredDomains(_0x25e0c0[_0x58f705(0x1d5)]||'',_0x4d4c99?0xc8:0x28,_0x4d4c99?0x7d0:0x12c,_0x3d03f4,_0x3d03f4,_0x22c39f);if(_0x3d03f4){const _0x4ad6ca=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x28,0xf0,![],!![],_0x22c39f),_0x1934e4=new Set(_0x4ad6ca['map'](_0x5a5f47=>_0x5a5f47['ip']));_0x510aa9=[..._0x4ad6ca,..._0x510aa9[_0x58f705(0x1b7)](_0x47158e=>!_0x1934e4[_0x58f705(0x314)](_0x47158e['ip']))],_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x51567e];if(!_0x26e1c5[_0x58f705(0x2e9)])_0x26e1c5[_0x58f705(0x2e9)]={};_0x26e1c5[_0x58f705(0x2e9)][_0x58f705(0x1c5)]=Math['max'](parseInt(_0x26e1c5[_0x58f705(0x2e9)][_0x58f705(0x1c5)])||0x0,0x320);}}else{if(_0x1d62ad===''){const _0x399ecc=_0x25e0c0['src']||{},_0x30e203=_0x399ecc['native']===!![],_0x2b0531=_0x399ecc[_0x58f705(0x130)]!==![],_0x3f42ad=_0x399ecc[_0x58f705(0x143)]!==![],_0x2e41c3=_0x399ecc[_0x58f705(0x454)]===!![];_0x30e203&&!_0x224a75&&(_0x26e1c5[_0x58f705(0x1d5)]=(_0x26e1c5[_0x58f705(0x1d5)]?_0x26e1c5['preferredDomains']+'\x0a':'')+_0x26e1c5[_0x58f705(0x19e)]+_0x58f705(0x312));if(!_0x2e41c3)_0x26e1c5[_0x58f705(0x2ba)]=[];const _0x436f58=_0x25e0c0['filter']||{},_0x5bf87b=_0x436f58[_0x58f705(0x219)],_0x152c52=Array[_0x58f705(0x45c)](_0x5bf87b)?_0x5bf87b[_0x58f705(0x41b)]===0x0||_0x5bf87b[_0x58f705(0x269)](_0x58f705(0x25d)):!_0x5bf87b||_0x5bf87b===_0x58f705(0x25d);if(_0x152c52){_0x510aa9=[];if(_0x2b0531&&!_0x224a75){const _0x27c875=await filterAliveDomains(DEFAULT_PREFERRED_DOMAINS);if(_0x27c875)_0x26e1c5[_0x58f705(0x1d5)]=(_0x26e1c5['preferredDomains']?_0x26e1c5[_0x58f705(0x1d5)]+'\x0a':'')+_0x27c875;}if(_0x3f42ad&&!_0x224a75){const _0x294b5d=await fetchLatestPreferredIPs(0x96);if(_0x294b5d&&_0x294b5d[_0x58f705(0x41b)])_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x294b5d];try{const _0x3d5bca=await resolvePreferredDomains(DEFAULT_REGION_POOLS,0x64,0x258,!![],!![],![]);if(_0x3d5bca&&_0x3d5bca[_0x58f705(0x41b)])_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x3d5bca];}catch(_0x1f43c8){}}if(_0x22c39f&&_0x2b0531)try{const _0x59bacb=DEFAULT_PREFERRED_DOMAINS+(_0x224a75?'\x0a'+BUILTIN_OFFICIAL_DOMAINS['join']('\x0a'):''),_0x3f262d=await resolvePreferredDomains(_0x59bacb,0x28,_0x224a75?0x320:0xf0,![],!![],!![]);if(_0x3f262d&&_0x3f262d[_0x58f705(0x41b)])_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x3f262d];}catch(_0x52b3f3){}}else _0x2b0531&&(_0x510aa9=await resolvePreferredDomains(DEFAULT_PREFERRED_DOMAINS,0x64,0x12c,![],!![],_0x22c39f));if(_0x3f42ad){if(_0x224a75){const _0x270220=_0x51567e[_0x58f705(0x114)](_0x2c1ba5=>({'ip':ipv4ToEmbeddedV6(_0x2c1ba5['ip']),'port':_0x2c1ba5[_0x58f705(0x3c4)]||0x1bb,'name':_0x2c1ba5['name']}))[_0x58f705(0x1b7)](_0x3b91e8=>_0x3b91e8['ip']);_0x26e1c5['preferredIPs']=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x270220];}else{if(_0x22c39f){const _0x410a7c=_0x51567e[_0x58f705(0x114)](_0x17eeb6=>({'ip':ipv4ToEmbeddedV6(_0x17eeb6['ip']),'port':_0x17eeb6[_0x58f705(0x3c4)]||0x1bb,'name':_0x17eeb6[_0x58f705(0x1ca)]}))[_0x58f705(0x1b7)](_0x5438c9=>_0x5438c9['ip']);_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5['preferredIPs']||[],..._0x51567e,..._0x410a7c];}else _0x26e1c5['preferredIPs']=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x51567e];}}if(!_0x30e203&&!_0x2b0531&&!_0x3f42ad&&!_0x2e41c3){if(_0x224a75){const _0x5c69ef=_0x51567e['map'](_0x19b010=>({'ip':ipv4ToEmbeddedV6(_0x19b010['ip']),'port':_0x19b010[_0x58f705(0x3c4)]||0x1bb,'name':_0x19b010[_0x58f705(0x1ca)]}))[_0x58f705(0x1b7)](_0x4952f9=>_0x4952f9['ip']);_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x5c69ef];}else _0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5['preferredIPs']||[],..._0x51567e];}if(_0x224a75&&_0x26e1c5['preferredIPs'])_0x26e1c5[_0x58f705(0x2ba)]=_0x26e1c5[_0x58f705(0x2ba)][_0x58f705(0x1b7)](_0x201340=>String(_0x201340['ip'])[_0x58f705(0x179)](':')>=0x0);if(!_0x26e1c5[_0x58f705(0x2e9)])_0x26e1c5['optimizer']={};_0x26e1c5[_0x58f705(0x2e9)][_0x58f705(0x1c5)]=Math[_0x58f705(0x3cc)](parseInt(_0x26e1c5[_0x58f705(0x2e9)][_0x58f705(0x1c5)])||0x0,_0x224a75?0x0:0x3e8);if(_0x26e1c5[_0x58f705(0x2ba)]&&_0x26e1c5[_0x58f705(0x2ba)]['length']){const _0x11ce9c=BUILTIN_STABLE_IPS[_0x58f705(0x114)]((_0x317336,_0x29849d)=>({'ip':_0x317336,'port':0x1bb,'name':'优选IP-S'+String(_0x29849d+0x1)[_0x58f705(0x30e)](0x2,'0')})),_0xbff375=new Set(_0x11ce9c['map'](_0x15fb9d=>_0x15fb9d['ip']));_0x26e1c5[_0x58f705(0x2ba)]=[..._0x11ce9c,..._0x26e1c5[_0x58f705(0x2ba)][_0x58f705(0x1b7)](_0x4e042e=>!_0xbff375[_0x58f705(0x314)](_0x4e042e['ip']))];}}}const _0x35c29a=_0x25e0c0[_0x58f705(0x193)]&&_0x25e0c0[_0x58f705(0x193)][_0x58f705(0x207)]?_0x25e0c0[_0x58f705(0x193)]:null;if(_0x510aa9[_0x58f705(0x41b)]){let _0x421e22=_0x510aa9;if(_0x35c29a){const _0x10e04d=_0x510aa9[_0x58f705(0x1b7)](_0x38e091=>!_0x35c29a[_0x58f705(0x314)](_0x38e091['ip'])),_0x5033a2=_0x510aa9[_0x58f705(0x1b7)](_0x1bb946=>_0x35c29a[_0x58f705(0x314)](_0x1bb946['ip']));_0x421e22=[..._0x10e04d,..._0x5033a2];}const _0x1ccf24=(_0x26e1c5[_0x58f705(0x2ba)]||[])[_0x58f705(0x41b)];_0x421e22=_0x421e22[_0x58f705(0x114)]((_0x3c0544,_0xd7c4bc)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[_0x58f705(0x1ee)](_0x3c0544[_0x58f705(0x1ca)]||'')?Object[_0x58f705(0x444)]({},_0x3c0544,{'name':'优选IP-'+String(_0x1ccf24+_0xd7c4bc+0x1)[_0x58f705(0x30e)](0x2,'0')}):_0x3c0544),_0x26e1c5[_0x58f705(0x2ba)]=[..._0x26e1c5[_0x58f705(0x2ba)]||[],..._0x421e22];}if(_0x224a75&&_0x26e1c5['preferredIPs'])_0x26e1c5[_0x58f705(0x2ba)]=_0x26e1c5['preferredIPs'][_0x58f705(0x1b7)](_0xdb733c=>String(_0xdb733c['ip'])[_0x58f705(0x179)](':')>=0x0);_0x3b3616=(_0x3b3616||'')[_0x58f705(0x1da)]();const _0x1967a5=(_0x335ac0||'')[_0x58f705(0x1da)](),_0x409a43=[_0x58f705(0x2a5),'singbox',_0x58f705(0x240),'surge',_0x58f705(0x425),_0x58f705(0x1e9),_0x58f705(0x307),'quantumultx'][_0x58f705(0x269)](_0x1967a5)||/clash|singbox|sing-box|surge|surfboard|loon|quantumult/[_0x58f705(0x1ee)](_0x3b3616);let _0x4ad6b2=_0x409a43?0x12c:0x320;if(_0x1d62ad==='custom'&&_0x25e0c0['optimizer']&&_0x25e0c0[_0x58f705(0x2e9)][_0x58f705(0x3f7)])_0x4ad6b2=_0x409a43?Math[_0x58f705(0x3cc)](_0x4ad6b2,0x12c):Math[_0x58f705(0x3cc)](_0x4ad6b2,0x320);if(_0x1d62ad==='custom'&&!(_0x25e0c0['optimizer']&&_0x25e0c0[_0x58f705(0x2e9)][_0x58f705(0x3f7)]))_0x4ad6b2=_0x409a43?Math[_0x58f705(0x3cc)](_0x4ad6b2,0x320):Math[_0x58f705(0x3cc)](_0x4ad6b2,0x7d0);if(_0x25e0c0[_0x58f705(0x15e)]===![])_0x4ad6b2=0x2710;if(_0x25e0c0[_0x58f705(0x16c)]){const _0x5f5ce6=parseInt(_0x25e0c0[_0x58f705(0x28f)])||0x0;if(_0x5f5ce6>0x0)_0x4ad6b2=Math[_0x58f705(0x236)](_0x5f5ce6,0x3e8);}if(_0x25e0c0[_0x58f705(0x154)])_0x4ad6b2=Math['min'](_0x4ad6b2,_0x25e0c0[_0x58f705(0x154)]);const _0x5cf39a=_0x1d62ad===_0x58f705(0x2d1)?Object[_0x58f705(0x444)]({},_0x25e0c0[_0x58f705(0x1b7)],{'region':_0x58f705(0x25d)}):_0x25e0c0['filter'];let _0x56439c=filterNodes(await buildNodes(_0x26e1c5,_0x4ad6b2,_0x35c29a),_0x5cf39a);const _0x4ae47a=_0x1d62ad==='custom'&&!(_0x25e0c0[_0x58f705(0x2e9)]&&_0x25e0c0[_0x58f705(0x2e9)][_0x58f705(0x3f7)]);if(!_0x4ae47a&&!_0x224a75)appendFallbackNodes(_0x56439c,_0x26e1c5,_0x4ad6b2,_0x251cbe);if(!_0x224a75&&!(_0x4ae47a&&_0x56439c['length']>0x0))appendStableNodes(_0x56439c,_0x26e1c5,_0x4ad6b2);if(_0x25e0c0['nodeLimit']&&_0x1d62ad&&!_0x4ae47a&&_0x56439c[_0x58f705(0x41b)]<_0x4ad6b2){const _0x45cf2a=_0x4ad6b2-_0x56439c[_0x58f705(0x41b)],_0x215e04=new Set();for(const _0x408d7c of _0x56439c){try{_0x215e04[_0x58f705(0x121)](parseNodeServer(_0x408d7c)[_0x58f705(0x19e)]);}catch(_0xe43b87){}}const _0x5a4010=(_0x58d78f,_0x345572,_0x4b0522)=>{const _0x52af73=_0x58f705;if(_0x56439c[_0x52af73(0x41b)]>=_0x4ad6b2)return;if(_0x215e04[_0x52af73(0x314)](_0x58d78f))return;_0x215e04[_0x52af73(0x121)](_0x58d78f),_0x56439c[_0x52af73(0x32a)](vlessNode(_0x26e1c5,_0x58d78f,_0x345572||0x1bb,_0x4b0522));};let _0x1b6b7b=0x0;try{const _0x2674da=await fetchBestcfPool(),_0x500b60=_0x35c29a?_0x2674da['filter'](_0x5edea5=>!_0x35c29a[_0x58f705(0x314)](_0x5edea5['ip'])):_0x2674da,_0x44f7fc=_0x500b60[_0x58f705(0x41b)]>=_0x45cf2a?_0x500b60:_0x2674da;for(const _0x11cb91 of _0x44f7fc){_0x5a4010(_0x11cb91['ip'],_0x11cb91[_0x58f705(0x3c4)],_0x11cb91[_0x58f705(0x1ca)]||_0x58f705(0x141)+String(_0x11cb91['port']));if(_0x56439c[_0x58f705(0x41b)]>=_0x4ad6b2)break;}}catch(_0x538ec9){}if(_0x56439c['length']<_0x4ad6b2){const _0x58b14f=_0x4ad6b2-_0x56439c['length'],_0x5e3351=OFFICIAL_V6_CIDRS,_0x5dc178=_0x224a75?_0x5e3351:_0x22c39f?[...REACHABLE_CIDRS,..._0x5e3351]:REACHABLE_CIDRS,_0x3b468f=randomIPsFromCidrs(_0x5dc178,_0x58b14f*0x3),_0x5390c8=_0x35c29a?_0x3b468f[_0x58f705(0x1b7)](_0x113698=>!_0x35c29a[_0x58f705(0x314)](_0x113698)):_0x3b468f,_0x3794be=_0x5390c8['length']>=_0x58b14f?_0x5390c8:_0x3b468f;for(const _0x155b0f of _0x3794be){if(_0x56439c['length']>=_0x4ad6b2)break;_0x1b6b7b++,_0x5a4010(_0x155b0f,0x1bb,_0x58f705(0x141)+String(_0x1b6b7b)['padStart'](0x3,'0'));}}}if(_0x56439c[_0x58f705(0x41b)]>_0x4ad6b2)_0x56439c[_0x58f705(0x41b)]=_0x4ad6b2;const _0x53af02=[],_0x13c5b6=new Set();for(const _0x514616 of _0x56439c){try{const {host:_0x315a22}=parseNodeServer(_0x514616);isValidIp(_0x315a22)&&!_0x13c5b6[_0x58f705(0x314)](_0x315a22)&&(_0x13c5b6['add'](_0x315a22),_0x53af02['push'](_0x315a22));}catch(_0x22fcdf){}}let _0x2d134e,_0x841760;if(_0x1967a5===_0x58f705(0x2a5))_0x2d134e=_0x58f705(0x387),_0x841760=generateClash(_0x26e1c5,_0x56439c);else{if(_0x1967a5==='singbox'||_0x1967a5===_0x58f705(0x240))_0x2d134e=_0x58f705(0x1b4),_0x841760=generateSingbox(_0x26e1c5,_0x56439c);else{if(_0x1967a5===_0x58f705(0x27d))_0x2d134e='text/plain',_0x841760=generateSurge(_0x26e1c5,_0x56439c);else{if(_0x1967a5===_0x58f705(0x425))_0x2d134e=_0x58f705(0x373),_0x841760=generateSurfboard(_0x26e1c5,_0x56439c);else{if(_0x1967a5==='loon')_0x2d134e='text/plain',_0x841760=generateLoon(_0x26e1c5,_0x56439c);else{if(_0x1967a5==='quanx'||_0x1967a5==='quantumultx')_0x2d134e='text/plain',_0x841760=generateQuanX(_0x26e1c5,_0x56439c);else{if(_0x1967a5===_0x58f705(0x10f)||_0x1967a5===_0x58f705(0x185))_0x2d134e=_0x58f705(0x373),_0x841760=_0x56439c[_0x58f705(0x40a)]('\x0a');else{if(_0x1967a5===_0x58f705(0x338)||_0x1967a5==='v2rayn'||_0x1967a5===_0x58f705(0x421)||_0x1967a5===_0x58f705(0x2fb)||_0x1967a5===_0x58f705(0x2b6))_0x2d134e=_0x58f705(0x373),_0x841760=_0x56439c[_0x58f705(0x40a)]('\x0a');else{if(_0x3b3616[_0x58f705(0x269)](_0x58f705(0x2a5))||_0x3b3616[_0x58f705(0x269)]('stash'))_0x2d134e=_0x58f705(0x387),_0x841760=generateClash(_0x26e1c5,_0x56439c);else{if(_0x3b3616[_0x58f705(0x269)](_0x58f705(0x240)))_0x2d134e=_0x58f705(0x1b4),_0x841760=generateSingbox(_0x26e1c5,_0x56439c);else{if(_0x3b3616[_0x58f705(0x269)](_0x58f705(0x27d)))_0x2d134e=_0x58f705(0x373),_0x841760=generateSurge(_0x26e1c5,_0x56439c);else{if(_0x3b3616['includes'](_0x58f705(0x425)))_0x2d134e=_0x58f705(0x373),_0x841760=generateSurfboard(_0x26e1c5,_0x56439c);else{if(_0x3b3616['includes']('loon'))_0x2d134e=_0x58f705(0x373),_0x841760=generateLoon(_0x26e1c5,_0x56439c);else _0x3b3616[_0x58f705(0x269)]('quantumult')?(_0x2d134e='text/plain',_0x841760=generateQuanX(_0x26e1c5,_0x56439c)):(_0x2d134e='text/plain',_0x841760=_0x56439c[_0x58f705(0x40a)]('\x0a'));}}}}}}}}}}}}return{'type':_0x2d134e,'body':_0x841760,'issued':_0x53af02};}const PANEL_HTML=String['raw']`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CFNext · Cloudflare 隧道面板</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0b0f14;--bg2:#0f141b;--card:#131a23;--card2:#182130;--border:#243041;
  --text:#e8eef6;--dim:#8fa3ba;--faint:#5c6f86;
  --accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);
  --ok:#34c98e;--ok-dim:rgba(52,201,142,.13);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13);--warn:#ffb454;
  --sb-bg:#0d131b;--sb-text:#9fb0c5;--sb-dim:#5c6f86;--sb-border:#1c2737;
  --sb-active-bg:rgba(246,130,31,.13);--sb-active-text:#ffa14d;--sb-active-bar:#f6821f;
  --shadow:0 10px 30px rgba(0,0,0,.28);
}
[data-theme="light"]{
  --bg:#f3f5f9;--bg2:#e9edf3;--card:#ffffff;--card2:#f6f8fb;--border:#dde4ee;
  --text:#1b2634;--dim:#5d6b7d;--faint:#93a1b3;
  --accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);
  --ok:#1f9d6a;--ok-dim:rgba(31,157,106,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--warn:#c07c1e;
  --sb-bg:#ffffff;--sb-text:#5d6b7d;--sb-dim:#a2aec0;--sb-border:#e7ebf2;
  --sb-active-bg:rgba(232,114,14,.09);--sb-active-text:#c96408;--sb-active-bar:#e8720e;
  --shadow:0 10px 28px rgba(30,45,70,.10);
}
html,body{height:100%}
body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.55}
.app{display:flex;min-height:100vh}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}

/* ===== 侧边栏 ===== */
.sidebar{width:236px;flex:0 0 236px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:0;height:100vh;z-index:50;transition:background .25s,border-color .25s}
.brand{display:flex;align-items:center;gap:10px;padding:18px 18px 14px}
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.brand .bt{display:flex;flex-direction:column;line-height:1.2}
.brand .bt b{font-size:15px;letter-spacing:.3px;color:var(--text)}
.brand .bt span{font-size:11px;color:var(--sb-dim)}
.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}
.nav-item{display:flex;align-items:center;gap:10px;padding:9px 12px;margin:2px 0;border-radius:8px;color:var(--sb-text);cursor:pointer;border:none;background:transparent;width:100%;text-align:left;font-size:13.5px;position:relative;transition:background .15s,color .15s}
.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor}
.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}
.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}
.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}
.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}
.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent;cursor:pointer;transition:border-color .15s,color .15s,background .15s}
.ver-chip:hover{color:var(--accent);border-color:var(--accent)}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}

/* ===== 主区 ===== */
.main{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{display:flex;align-items:center;gap:14px;padding:14px 26px;border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:0;z-index:40}
.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}
.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 10px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}
.pill.off{background:var(--err-dim);color:var(--err)}
.pill .dot{width:6px;height:6px;border-radius:50%;background:currentColor}
.icon-btn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.icon-btn:hover{border-color:var(--accent);color:var(--accent)}
.icon-btn svg{width:16px;height:16px;stroke:currentColor}
.hamb{display:none}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}

.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
.view{display:none}
.view.on{display:block;animation:fade .18s ease}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}

/* ===== 卡片 ===== */
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills{display:flex;flex-wrap:wrap;gap:8px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card);transition:border-color .15s,color .15s,background .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px;margin-bottom:16px}
.card h3{font-size:14px;font-weight:600;margin-bottom:14px;display:flex;align-items:center;gap:8px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.card .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}
.kv{display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px dashed var(--border);font-size:13px}
.kv:last-child{border-bottom:none}
.kv .k{color:var(--dim);white-space:nowrap}
.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}

/* ===== 表单 ===== */
.field{margin-bottom:12px}
.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}
input[type=text],input[type=password],input[type=number],select,textarea{
  width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);
  border-radius:8px;padding:8px 11px;font-size:13.5px;outline:none;transition:border-color .15s,box-shadow .15s;
  font-family:inherit;
}
input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}
textarea{resize:vertical;line-height:1.5;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
select{cursor:pointer;-webkit-appearance:none;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238fa3ba' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;padding-right:30px}
[data-theme="light"] select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%235d6b7d' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")}
input[type=checkbox]{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.hint{font-size:12px;color:var(--dim);margin-top:6px;line-height:1.6}
.inrow{display:flex;gap:8px;align-items:flex-start}
.inrow>div{flex:1}
.inrow .btn{margin-top:1px;white-space:nowrap}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}

/* 开关 */
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:background .18s}
.sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}

/* 按钮 */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:8px;padding:8px 14px;font-size:13px;cursor:pointer;transition:border-color .15s,background .15s,transform .05s;font-family:inherit;white-space:nowrap}
.btn:hover{border-color:var(--accent);color:var(--accent)}
.btn:active{transform:translateY(1px)}
.btn:disabled{opacity:.55;cursor:not-allowed}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn.sm{padding:4px 10px;font-size:12px;border-radius:6px}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.row .grow{flex:1;min-width:140px}

/* 表格 */
.tbl-wrap{overflow-x:auto}
table{width:100%;border-collapse:collapse;table-layout:fixed}
th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--border);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}
td .ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}

/* 消息与提示 */
.msg{display:none;margin-top:12px;padding:9px 12px;border-radius:8px;font-size:12.5px;line-height:1.6}
.msg.show{display:block}
.msg.ok{background:var(--ok-dim);color:var(--ok)}
.msg.err{background:var(--err-dim);color:var(--err)}
.msg.info{background:var(--accent-dim);color:var(--accent2)}
[data-theme="light"] .msg.info{color:#c96408}
pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;overflow:auto;max-height:260px;white-space:pre-wrap;word-break:break-all;color:var(--dim)}

/* 悬浮操作栏 */
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(80px);background:var(--card);border:1px solid var(--border);color:var(--text);padding:10px 20px;border-radius:10px;font-size:13px;opacity:0;transition:all .25s;z-index:100;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast.ok{border-color:var(--ok);color:var(--ok)}
.toast.err{border-color:var(--err);color:var(--err)}
.toast.warn{border-color:var(--warn);color:var(--warn)}

/* 分区 */
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.steps{list-style:none;counter-reset:st}
.steps li{counter-increment:st;position:relative;padding:0 0 14px 34px;font-size:13px;color:var(--dim)}
.steps li::before{content:counter(st);position:absolute;left:0;top:0;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent2);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}
[data-theme="light"] .steps li::before{color:#c96408}
.steps li b{color:var(--text)}

/* ===== 响应式 ===== */
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
@media (max-width:960px){
  .sidebar{position:fixed;left:0;top:0;transform:translateX(-100%);transition:transform .22s ease;box-shadow:var(--shadow)}
  .sidebar.open{transform:translateX(0)}
  .hamb{display:flex}
  .content{padding:16px 16px 96px}
  .topbar{padding:12px 16px}
  .grid2,.grid3{grid-template-columns:1fr}
}
@media (max-width:560px){
  th,td{padding:8px 8px}
}
</style>
</head>
<body>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>CFNext</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar">
    <button class="icon-btn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="icon-btn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="content" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源），默认已配好大陆直连分流（大陆应用、微软、苹果直连，国外服务走代理）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（自定义订阅模式内置常用订阅源，可自行增删，可追加内置优选池与默认节点）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置 Cloudflare 账户 ID 与 API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="clash">Clash / Mihomo</option>
              <option value="singbox">Sing-box</option>
              <option value="surge">Surge</option>
              <option value="surfboard">Surfboard</option>
              <option value="loon">Loon</option>
              <option value="quanx">Quantumult X</option>
              <option value="v2ray">v2rayN / Shadowrocket</option>
              <option value="stash">Stash</option>
              <option value="plain">明文 vless</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6" checked><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">筛选按 地区 → IP 类型 → 运营商 逐级放宽，任一维度无节点时自动放宽，保证订阅始终非空。「运营商偏好」按节点名称中的运营商标记过滤（移动=移动/CM/CHINAMOBILE、联通=联通/CU/UNICOM、电信=电信/CT/CHINATELECOM），三个全选或节点池无任何运营商标记时不生效。「节点地区」支持多选，仅剔除明确标记为其它地区的节点。「地址来源」控制下发节点的来源：原生地址（工作器域名）、优选域名（第三方优选域名列表）、优选 IP（内置与实时拉取的优选 IP）、自定义优选（「优选配置」保存的优选列表）、随机优选（「优选配置」随机优选模式，与自定义优选互斥）。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控选项后即可在此查看当日用量；详细策略与自动调节见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>代理协议、TLS/ECH、节点测活与落地出站（保存后立即生效）</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-vless" checked><span class="sl"></span></label><span>VLESS 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-trojan"><span class="sl"></span></label><span>Trojan 协议（支持Mihomo内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-xhttp"><span class="sl"></span></label><span>XHTTP 协议（支持Mihomo内核，须绑定自定义域名并开启gRPC）</span></div>
          <div class="field" style="margin-top:12px"><label>Trojan 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="Trojan 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>ALPN 协商（h2 / http/1.1，逗号分隔）</label><input type="text" id="alpn" placeholder="留空自动，如 h2,http/1.1" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）在开启「仅 TLS」后将从订阅中剔除。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>节点测活</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-probe-on"><span class="sl"></span></label><span>节点测活（TCP 探测）</span></div>
          <p class="hint" style="margin-top:12px">关闭：不做任何 TCP 握手 / HTTP 探测与剔除，节点的下发策略、出入站方式、ProxyIP 等节点相关均按 V1.x版本处理方式处理——按数据源原始顺序全量下发，客户端自行择优。<br>开启：对候选地址做 TCP 探测并剔除判死项（含精选池 / 优选 IP / 域名预检 / ProxyIP 兜底），但 Cloudflare 运行时禁止出站连接 CF IP 段，对 CF 段 IP 的探测恒判死，内置精选池（实测 97% 可用）会被整体清空，订阅只能用随机 CF IP 补足，自定义订阅 / 随机优选模式不测活。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点将附带 ech 参数与 alpn 协商，客户端需支持 ECH 才能生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地 IP（填写后作为固定出口优先使用；留空则直连失败后由内置地区反代兜底，格式 host 或 host:port）</label><input type="text" id="s-proxyIP" placeholder="留空则直连失败后走内置地区反代" autocomplete="off"></div>
        <div class="field"><label>出站代理（可选）</label><input type="text" id="s-outbound" placeholder="socks5://user:pass@1.2.3.4:1080 或 ss://chacha20-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 socks5://（可带 user:pass@）、http(s)://、ss:// 或 host:port（默认按 socks5，端口 1080）。SS 加密支持 aes-128-gcm / aes-256-gcm / chacha20-ietf-poly1305。</p>
        <div class="field" style="margin-bottom:0"><label>出站方式</label>
          <select id="s-outmode">
            <option value="">默认（优先代理，失败直连）</option>
            <option value="no">直连优先（no）</option>
            <option value="only">仅走代理（only）</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">所有配置修改后点击右下角「保存全部」才会写入 KV 并生效，保存成功后订阅地址与节点构成立即更新；「重置」将清空 KV 中全部数据并还原为初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="bestcf">优选 IP 列表（bestcf）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>测速端口</label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none"><label>自定义数据源 URL</label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>自定义模式下追加默认节点</label>
            <select id="o-subinc">
              <option value="0">关闭（仅自定义节点）</option>
              <option value="1">开启（追加内置优选池与默认地区源）</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IP 格式 IP:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://bestcf.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为可用 IP 下发。测速结果里的「加入优选」会把最优 IP 写入此列表，保存全部后生效。</div>
          <button class="btn sm" style="margin-top:8px" onclick="fetchDomains()">拉取微测网优选域名</button>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量的优选节点直接下发，不经域名解析。</div>
        </div>
      </div>
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);overflow:hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：当日用量达到免费额度 60% 后，节点上限按比例收缩（基准上限 1000 条）——60% 时下发 1000 条、70% 时 750 条、80% 时 500 条、90% 时 250 条、100% 时 100 条（保底下限），用量越高下发越少，保护账户免费额度。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>精确节点上限（1-1000）</label><input type="number" id="q-nl-count" min="1" max="1000" value="500"></div>
          <p class="hint">默认开启：所有格式订阅精确下发到设定数量（默认 500，范围 1-1000），替代原轮询模式的 300/800 分档上限；勾选三种协议时节点总数仍为设定值（不再按协议 3 倍膨胀）。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>轮询换新</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-poll-on"><span class="sl"></span></label><span>启用轮询（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：一次性下发全部节点，不受 300/800 上限限制；开启后按格式上限轮换下发新 IP（200 条去重窗口，避免重复下发）；端口固定 443（1.0.6 机制），换新通过 IP 轮换实现。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点测活</span><span class="v" id="qProbe">—</span></div><div class="kv"><span class="k">轮询换新机制</span><span class="v" id="qPoll">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">行式格式上限</span><span class="v">800 节点</span></div><div class="kv"><span class="k">结构化格式上限</span><span class="v">300 节点</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求都会消耗 Worker 的 CPU 时间（免费计划 10ms/请求）。面板按「免费额度 → 格式 → 节点数」逐层设防，保证稳定运行。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">四道防线（按生效优先级从高到低）：① 用量监控——查看当日请求量，为自动调节提供数据；② 自动调节——用量 ≥60% 时按比例收缩节点上限，位于计算链末端以 min 收敛，只收紧、永不放大，优先级最高且与轮询状态无关；③ 数量上限（下发控制）——按设定值精确限制，全局生效（轮询开/关均受限）；④ 格式分档与轮询去重——结构化/行式格式上限与轮询去重换新。各层上限冲突时取较小值，让订阅生成的 CPU 消耗始终处于免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>部署基础信息：UUID、面板路径、管理密码与绑定域名</p></div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>面板路径（访问入口，留空用 UUID）</label><input type="text" id="a-path" placeholder="留空自动使用 UUID" autocomplete="off"></div>
        <div class="field"><label>自定义订阅路径（只填 UUID/别名段，如 AAZ；留空用面板路径）</label><input type="text" id="a-suburl" placeholder="AAZ" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <div class="field" style="margin-bottom:0"><label>绑定域名（留空使用 *.workers.dev）</label><input type="text" id="a-host" placeholder="node.example.com" autocomplete="off"></div>
        <p class="hint" style="margin-top:10px">「绑定域名」仅用于订阅节点主机名（XHTTP 协议要求绑定自定义域名），不负责域名解析。自定义域名访问面板需先在 Cloudflare 面板 → Workers 与 Pages → 该 Worker → Domains &amp; Routes 添加自定义域名（DNS 由 Cloudflare 托管，证书自动签发），此字段留空即使用 *.workers.dev。KV 未绑定时配置只在内存中生效，重置后回到默认值。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项（可选）</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（<b>不是邮箱</b>），打开并登录Cloudflare账户后，点击「左侧栏」→「管理账户」→「帐户 API 令牌」→「创建令牌」。查询失败提示 401 时请检查这两项是否填错。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 格式导出全部面板设置（含协议、优选、筛选、配额监控），可保存到本地或迁移到其他部署；导入后请点右下角「保存全部」生效。</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">导出配置</button>
          <button class="btn" onclick="$('importFile').click()">导入配置</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>
        <div class="kv"><span class="k">轮询窗口</span><span class="v">最近 200 条</span></div>
        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>CFNext — Cloudflare 全新代理管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">YouTube @数字派：<a href="https://www.youtube.com/@PAI_CN" target="_blank" rel="noopener">youtube.com/@PAI_CN</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://t.me/SZ_PAI" target="_blank" rel="noopener">t.me/SZ_PAI</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">本面板为全新独立设计/全新编写：后端代理、订阅与优选逻辑参考以下开源项目的功能清单</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>参考仓库</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>cmliu/edgetunnel</td><td><a href="https://github.com/cmliu/edgetunnel" target="_blank" rel="noopener">github.com/cmliu/edgetunnel</a></td></tr>
            <tr><td>zizifn/edgetunnel</td><td><a href="https://github.com/zizifn/edgetunnel" target="_blank" rel="noopener">github.com/zizifn/edgetunnel</a></td></tr>
            <tr><td>6Kmfi6HP/EDtunnel</td><td><a href="https://github.com/6Kmfi6HP/EDtunnel" target="_blank" rel="noopener">github.com/6Kmfi6HP/EDtunnel</a></td></tr>
            <tr><td>IonRh/Cloudflare-BestIP</td><td><a href="https://github.com/IonRh/Cloudflare-BestIP" target="_blank" rel="noopener">github.com/IonRh/Cloudflare-BestIP</a></td></tr>
            <tr><td>zvos/CF-Workers-Monitor</td><td><a href="https://github.com/zvos/CF-Workers-Monitor" target="_blank" rel="noopener">github.com/zvos/CF-Workers-Monitor</a></td></tr>
            <tr><td>MetaCubeX/meta-rules-dat</td><td><a href="https://github.com/MetaCubeX/meta-rules-dat" target="_blank" rel="noopener">github.com/MetaCubeX/meta-rules-dat</a></td></tr>
            <tr><td>666OS/rules</td><td><a href="https://github.com/666OS/rules" target="_blank" rel="noopener">github.com/666OS/rules</a></td></tr>
            <tr><td>DustinWin/ruleset_geodata</td><td><a href="https://github.com/DustinWin/ruleset_geodata" target="_blank" rel="noopener">github.com/DustinWin/ruleset_geodata</a></td></tr>
            <tr><td>blackmatrix7/ios_rule_script</td><td><a href="https://github.com/blackmatrix7/ios_rule_script" target="_blank" rel="noopener">github.com/blackmatrix7/ios_rule_script</a></td></tr>
            <tr><td>TG-Twilight/AWAvenue-Ads-Rule</td><td><a href="https://github.com/TG-Twilight/AWAvenue-Ads-Rule" target="_blank" rel="noopener">github.com/TG-Twilight/AWAvenue-Ads-Rule</a></td></tr>
            <tr><td>Koolson/Qure</td><td><a href="https://github.com/Koolson/Qure" target="_blank" rel="noopener">github.com/Koolson/Qure</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.090227.xyz/ip.164746.xyz</td></tr>
            <tr><td>bestcf 地区优选池</td><td class="mono">bestcf.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/PAICNI/CFNext/...</td></tr>
            <tr><td>远程规则集（sing-box / Clash）</td><td class="mono">raw.githubusercontent.com/MetaCubeX/meta-rules-dat/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(fallbackCopy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(fallbackCopy(t)); });
      setTimeout(function(){ fin(fallbackCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(fallbackCopy(t));
  }
}
function fallbackCopy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };
function buildNav(){
  var html = '';
  NAV.forEach(function(n){
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('sidebar').classList.remove('open');
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); });

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){
  var sv = $('sideVer');
  if (sv.classList.contains('checking')) return;
  sv.classList.add('checking');
  sv.textContent = '检测中…';
  api('update').then(function(r){
    sv.classList.remove('checking');
    if (!r || !r.ok || !r.data) { sv.textContent = topVerText; toast('检测更新失败，请稍后重试', 'err'); return; }
    var d = r.data;
    var kindName = (d.kind === '混淆') ? '混淆版' : '明文版';
    topVerText = 'v' + d.current + ' ' + kindName;
    sv.textContent = topVerText;
    if (d.hasUpdate && d.code) {
      sv.classList.add('has-update');
      var kind = (d.kind === '混淆') ? '混淆' : '明文';
      copyClipboard(d.code).then(function(copied){
        toast(copied ? '检测到更新，已复制最新' + kind + '代码到剪贴板' : '检测到更新（v' + d.latest + '），复制失败，请前往仓库获取', copied ? 'ok' : 'err');
      });
    } else if (d.hasUpdate) {
      toast('检测到更新（v' + d.latest + '），但未能获取代码', 'err');
    } else if (d.latest) {
      sv.classList.remove('has-update');
      toast('已是最新版本（v' + d.current + ' ' + kindName + '）', 'ok');
    } else {
      toast('检测更新失败：' + (d.error || '仓库暂不可达'), 'err');
    }
  }).catch(function(){
    sv.classList.remove('checking');
    sv.textContent = topVerText;
    toast('检测更新失败，请稍后重试', 'err');
  });
}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  if (/\.workers\.dev$/i.test(location.hostname)) $('wdwarn').style.display = 'block';
  api('status').then(function(r){
    if (r && r.ok) renderStatus(r.data);
  }).catch(function(){});
  api('config').then(function(r){
    if (r && r.ok){
      CFG = r.data;
      fillForm();
      renderAll();
      makeSub(false);
      setConn(true);
      refreshQuota();
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.href = '/login?next=' + encodeURIComponent(APIPATH);
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || '');
  var wd = !!(d.workersDev) || /\.workers\.dev$/i.test(location.hostname);
  $('wdwarn').style.display = wd ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '当前为 *.workers.dev 域名：Cloudflare 可能限制该域名直连，若客户端更新订阅失败（提示无效订阅），请在客户端开启系统代理或「更新订阅使用代理」后重试；节点连接不受影响（直连优选 IP）。'
    : '';
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '混淆版') ? '混淆版' : '明文版';   // 部署形态（明文版 / 混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enableVless !== false) a.push('VLESS');
  if (CFG.enableTrojan) a.push('Trojan');
  if (CFG.enableXhttp) a.push('XHTTP');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 500) + ' 节点' : '—';
  var po = !(CFG && CFG.polling === false);
  $('qPoll').textContent = po ? '已开启（每轮换新 IP）' : '关闭（每次下发全部）';
  $('qPoll').className = 'v ' + (po ? 'ok' : '');
  // 节点测活：开启 = 红字提醒（会误杀 CF 段精选池），关闭 = 绿字（推荐状态，对齐 V1.0.6）
  var pa = !!(CFG && CFG.probeAlive);
  $('qProbe').textContent = pa ? '已开启（剔除死节点，体感更快）' : '关闭（不测活，按 V1.x 原序下发）';
  $('qProbe').className = 'v ' + (pa ? 'warn' : 'ok');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-vless').checked = CFG.enableVless !== false;
  $('en-trojan').checked = !!CFG.enableTrojan;
  $('tp-pass').value = CFG.trojanPassword || '';
  $('en-xhttp').checked = !!CFG.enableXhttp;
  $('tls-only').checked = !!CFG.tlsOnly;
  $('alpn').value = CFG.alpn || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4', 'IPv6'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 500;
  $('q-poll-on').checked = CFG.polling !== false;
  $('q-probe-on').checked = !!CFG.probeAlive;
  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('a-uuid').value = CFG.uuid || '';
  $('a-path').value = CFG.path || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-host').value = CFG.host || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('s-proxyIP').value = CFG.proxyIP || '';
  $('s-outbound').value = CFG.outboundProxy || '';
  $('s-outmode').value = CFG.outboundMode || '';
  renderPreferred();
  bindRegionPills();
  onSubMode();
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  String($('f-preferred').value).split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (parseIps(s).length) ipLines.push(s); else domLines.push(s);
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  return {
    uuid: $('a-uuid').value.trim(),
    path: $('a-path').value.trim() || $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    host: $('a-host').value.trim(),
    alpn: $('alpn').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 500,
    polling: $('q-poll-on').checked,
    probeAlive: $('q-probe-on').checked,
    cfAccountId: $('a-cfid').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    enableVless: $('en-vless').checked,
    enableTrojan: $('en-trojan').checked,
    trojanPassword: $('tp-pass').value,
    enableXhttp: $('en-xhttp').checked,
    proxyIP: $('s-proxyIP').value.trim(),
    outboundProxy: $('s-outbound').value.trim(),
    outboundMode: $('s-outmode').value,
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效', 'ok');
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.reload(); }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
// 备份：把当前面板表单值收集成 JSON 下载（与保存配置同一套字段，恢复后可直接保存）
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = 'cfnext-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('配置已导出为 JSON', 'ok');
  } catch (e) { toast('导出失败：' + e.message, 'err'); }
}
// 恢复：读取 JSON 填充表单，标记未保存，由用户点「保存全部」写盘
function importConfig(input){
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    try {
      var data = JSON.parse(reader.result);
      CFG = Object.assign({}, CFG, data);
      fillForm();
      renderAll();
      markDirty();
      toast('配置已导入，请点「保存全部」生效', 'ok');
    } catch (e) { toast('导入失败：JSON 格式不正确', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  // 自定义订阅路径优先：自动保留当前域名（location.origin），只替换路径段；
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用面板路径。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（clash/singbox 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/sub$/, '').replace(/\/+$/, '') : '';
  var base = custom ? (location.origin + '/' + custom) : (location.origin + APIPATH);
  var u = base + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// Clash/Mihomo、Stash → clash://install-config（FlyClash / Clash Verge / Stash 扫码装订阅，配置名取订阅响应头 filename=CFNext）
// Sing-box → sing-box://import-remote-profile?url=...#CFNext（官方 scheme，# 后为配置文件名称）
// Surge → surge:///install-config（Surge 官方 scheme）
// auto / v2rayN+Shadowrocket / Loon / Quantumult X / 明文 → 直接使用订阅链接（Shadowrocket / Loon / QuanX 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === 'clash' || fmt === 'stash') return 'clash://install-config?url=' + enc;
  if (fmt === 'singbox') return 'sing-box://import-remote-profile?url=' + enc + '#CFNext';
  if (fmt === 'surge') return 'surge:///install-config?url=' + enc;
  return url;
}
function downloadSub(){
  var fmt = $('subFmt').value;
  var a = document.createElement('a');
  a.href = subUrlOf(fmt === 'auto' ? '' : fmt);
  a.download = 'cfnext-sub.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/clash|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(vless|trojan|ss|xhttp):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(vless|trojan|ss|xhttp):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function onSubMode(){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
}
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速中…', 'info');
      localTest(cands, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + '#优选' + (i + 1)); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();
</script>
</body>
</html>

`,loginHTML='\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>CFNext\x20·\x20登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0b0f14;--card:#131a23;--border:#243041;--text:#e8eef6;--dim:#8fa3ba;--accent:#f6821f;--accent2:#ff9a3d;--accent-dim:rgba(246,130,31,.14);--err:#ff5c5c;--err-dim:rgba(255,92,92,.13)}\x0a[data-theme=\x22light\x22]{--bg:#f3f5f9;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#e8720e;--accent2:#f6821f;--accent-dim:rgba(232,114,14,.10);--err:#d94848;--err-dim:rgba(217,72,72,.10)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}\x0a.box{width:340px;max-width:100%;background:var(--card);border:1px\x20solid\x20var(--border);border-radius:16px;padding:30px\x2028px;box-shadow:0\x2018px\x2050px\x20rgba(0,0,0,.25)}\x0a[data-theme=\x22light\x22]\x20.box{box-shadow:0\x2014px\x2040px\x20rgba(30,45,70,.10)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#0d131b}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--bg);border:1px\x20solid\x20var(--border);color:var(--text);border-radius:9px;padding:10px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit}\x0ainput:focus{border-color:var(--accent);box-shadow:0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,var(--accent),var(--accent2));border:none;color:#201308;border-radius:9px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit}\x0abutton:hover{filter:brightness(1.06)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CFNext</b><span>Cloudflare\x20全新代理管理面板</span></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20\x27/\x27;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(\x27/login\x27,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a';function isBrowserUA(_0x34ebaa){const _0x536bb4=_0x40b3d2;return(_0x34ebaa||'')[_0x536bb4(0x1da)]()[_0x536bb4(0x269)]('mozilla');}async function requireAuth(_0x18f568,_0x57584f){const _0x135b01=_0x40b3d2;if(!_0x57584f['admin'])return!![];const _0x2ee0a6=_0x18f568[_0x135b01(0x3c3)]['get']('Cookie')||'',_0x1a464d=_0x2ee0a6[_0x135b01(0x132)](/(?:^|;\s*)luma_auth=([^;]+)/);return!!(_0x1a464d&&_0x1a464d[0x1]===md5hex(String(_0x57584f[_0x135b01(0x36d)])));}async function handleRequest(_0x49cbb8,_0xd15edb){const _0x3abc41=_0x40b3d2,_0x34cc54=new URL(_0x49cbb8[_0x3abc41(0x17f)]),_0x270d09=_0x49cbb8[_0x3abc41(0x3c3)][_0x3abc41(0x335)](_0x3abc41(0x1f3))||'',_0x2d6386=(_0x49cbb8[_0x3abc41(0x3c3)][_0x3abc41(0x335)]('Upgrade')||'')['toLowerCase']();if(_0x34cc54[_0x3abc41(0x214)]==='http:')return Response[_0x3abc41(0x20a)](_0x34cc54[_0x3abc41(0x2d2)]['replace'](_0x3abc41(0x309),_0x3abc41(0x34b)),0x12d);const _0xd62f23=await loadConfig(_0xd15edb),_0x40e30a=_0xd62f23[_0x3abc41(0x20f)]||_0xd62f23[_0x3abc41(0x119)],_0x44002c=_0x34cc54[_0x3abc41(0x151)][_0x3abc41(0x3c2)](/^\/+|\/+$/g,''),_0x32aef1=_0x44002c[_0x3abc41(0x420)]('/');if(_0x32aef1[0x0]===_0x3abc41(0x1d6))return json({'version':VERSION});if(_0x32aef1[0x0]===_0x3abc41(0x224)){if(_0x49cbb8[_0x3abc41(0x2d6)]==='POST'){const _0x334b49=await _0x49cbb8[_0x3abc41(0x244)](),_0x2ad1de=new URLSearchParams(_0x334b49);if(_0x2ad1de[_0x3abc41(0x335)](_0x3abc41(0x440))===_0xd62f23['admin']){const _0xd84762=md5hex(String(_0xd62f23[_0x3abc41(0x36d)]));return new Response(JSON[_0x3abc41(0x1f9)]({'ok':!![],'next':_0x2ad1de['get'](_0x3abc41(0x13f))||'/'}),{'status':0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8','Set-Cookie':_0x3abc41(0x3a5)+_0xd84762+_0x3abc41(0x44b)}});}return json({'ok':![],'msg':_0x3abc41(0x385)},0x193);}if(_0xd62f23[_0x3abc41(0x36d)])return new Response(loginHTML,{'status':0xc8,'headers':{'Content-Type':_0x3abc41(0x33c)}});return Response[_0x3abc41(0x20a)](new URL('/'+_0x40e30a,_0x49cbb8[_0x3abc41(0x17f)])[_0x3abc41(0x2d2)],0x12e);}const _0x463f37=String(_0xd62f23[_0x3abc41(0x124)]||'')[_0x3abc41(0x283)]()[_0x3abc41(0x3c2)](/^\/+/,'')[_0x3abc41(0x3c2)](/\/+$/,''),_0x43345d=_0x32aef1[0x0]===_0x40e30a||!!_0x463f37&&_0x32aef1[0x0]===_0x463f37;if(_0x32aef1[0x0]===''&&isBrowserUA(_0x270d09))return Response[_0x3abc41(0x20a)](new URL('/'+_0x40e30a,_0x49cbb8['url'])['href'],0x12e);if(_0x43345d&&_0x32aef1[_0x3abc41(0x41b)]===0x1){if(_0x2d6386==='websocket')return handleWebSocketProxy(_0x49cbb8,_0xd62f23);if(_0x49cbb8[_0x3abc41(0x2d6)]===_0x3abc41(0x2c0)){if(_0xd62f23[_0x3abc41(0x2d4)])try{return await handleXhttpProxy(_0x49cbb8,_0xd62f23);}catch(_0x1b1fdb){return json({'ok':![],'msg':_0x3abc41(0x2c9)+(_0x1b1fdb[_0x3abc41(0x226)]||_0x1b1fdb)},0x1f4);}}}if(_0x43345d&&(_0x32aef1[0x1]===_0x3abc41(0x21b)||_0x32aef1['length']===0x1&&!isBrowserUA(_0x270d09)&&!_0x270d09[_0x3abc41(0x371)]('luma'))){const _0x4a9214=_0x32aef1[_0x3abc41(0x41b)]>=0x3?_0x32aef1[0x2]:'';try{let _0x64807a=null;if(_0xd62f23[_0x3abc41(0x15e)]!==![]&&_0xd15edb['K']&&typeof _0xd15edb['K'][_0x3abc41(0x335)]==='function')try{const _0x34076d=await _0xd15edb['K'][_0x3abc41(0x335)]('issued');if(_0x34076d){const _0x2aa136=JSON['parse'](_0x34076d);if(Array['isArray'](_0x2aa136[_0x3abc41(0x365)])&&_0x2aa136['ips'][_0x3abc41(0x41b)])_0x64807a=new Set(_0x2aa136['ips']);}}catch(_0x1dbef6){}const _0x4ceeed=_0x64807a?Object[_0x3abc41(0x444)]({},_0xd62f23,{'_skipIssued':_0x64807a}):_0xd62f23;if(_0xd62f23[_0x3abc41(0x363)])try{const _0x2b4a83=await getQuota(_0xd15edb,_0xd62f23);if(_0x2b4a83[_0x3abc41(0x456)]&&_0x2b4a83['today']&&_0x2b4a83[_0x3abc41(0x313)][_0x3abc41(0x2f4)]>=Math['round'](QUOTA_LIMIT*0.6)){const _0x2be657=_0x2b4a83['today'][_0x3abc41(0x2f4)]/_0x2b4a83[_0x3abc41(0x12e)],_0x1d1bc9=Math[_0x3abc41(0x3cc)](0.1,(0x1-_0x2be657)/0.4);_0x4ceeed[_0x3abc41(0x154)]=Math[_0x3abc41(0x3cc)](0x14,Math[_0x3abc41(0x323)](0x3e8*_0x1d1bc9));}}catch(_0x381907){}const _0x431521=await generateSubscription(_0x4ceeed,_0x49cbb8[_0x3abc41(0x17f)],_0x4a9214,_0x270d09,_0x49cbb8['cf']&&_0x49cbb8['cf'][_0x3abc41(0x19b)]);if(_0xd62f23['polling']!==![]&&_0xd15edb['K']&&typeof _0xd15edb['K']['put']===_0x3abc41(0x243)&&_0x431521[_0x3abc41(0x32c)]&&_0x431521['issued']['length']){const _0x29ea2e=_0x64807a?Array['from'](_0x64807a):[],_0x430993=[...new Set([..._0x431521[_0x3abc41(0x32c)],..._0x29ea2e])][_0x3abc41(0x27e)](0x0,0xc8),_0x20477b=_0x430993['length']!==_0x29ea2e[_0x3abc41(0x41b)]||_0x430993['some']((_0x453264,_0x55d4ba)=>_0x453264!==_0x29ea2e[_0x55d4ba]);if(_0x20477b){const _0x169ea9=JSON[_0x3abc41(0x1f9)]({'t':Date[_0x3abc41(0x25b)](),'ips':_0x430993});if(_0xd15edb[_0x3abc41(0x2e5)]&&typeof _0xd15edb[_0x3abc41(0x2e5)][_0x3abc41(0x295)]==='function')_0xd15edb['_ctx'][_0x3abc41(0x295)](_0xd15edb['K']['put']('issued',_0x169ea9)[_0x3abc41(0x364)](()=>{}));else await _0xd15edb['K'][_0x3abc41(0x120)](_0x3abc41(0x32c),_0x169ea9)[_0x3abc41(0x364)](()=>{});}}return new Response(_0x431521['body'],{'status':0xc8,'headers':{'Content-Type':_0x431521[_0x3abc41(0x457)]+_0x3abc41(0x222),'Cache-Control':'no-store','Content-Disposition':_0x3abc41(0x25a)}});}catch(_0x4943df){return new Response(_0x3abc41(0x2aa)+(_0x4943df&&_0x4943df[_0x3abc41(0x226)]||_0x4943df),{'status':0x1f4,'headers':{'Content-Type':'text/plain;\x20charset=utf-8'}});}}if(_0x43345d&&_0x32aef1['length']===0x1&&isBrowserUA(_0x270d09)){if(!await requireAuth(_0x49cbb8,_0xd62f23))return Response['redirect'](new URL(_0x3abc41(0x3a1)+encodeURIComponent('/'+_0x40e30a),_0x49cbb8[_0x3abc41(0x17f)])[_0x3abc41(0x2d2)],0x12e);return new Response(PANEL_HTML,{'status':0xc8,'headers':{'Content-Type':_0x3abc41(0x33c)}});}if(_0x43345d&&_0x32aef1[0x1]==='api'){const _0x4e13e9=_0x32aef1[0x2]||'',_0x41e61d=await requireAuth(_0x49cbb8,_0xd62f23);if(!_0x41e61d)return json({'ok':![],'status':0x193,'msg':_0x3abc41(0x343)},0x193);if(_0x4e13e9===_0x3abc41(0x300)){if(_0x49cbb8['method']===_0x3abc41(0x2f8))return json({'ok':!![],'data':Object['assign']({},_0xd62f23,{'version':VERSION})});if(_0x49cbb8[_0x3abc41(0x2d6)]==='POST')try{const _0x21b31c=await _0x49cbb8['json']();let _0x5b263b=![];if(_0xd15edb['K']&&typeof _0xd15edb['K'][_0x3abc41(0x335)]===_0x3abc41(0x243))try{const _0x28511d=await _0xd15edb['K'][_0x3abc41(0x335)](_0x3abc41(0x300),{'cacheTtl':0x1e});if(_0x28511d){const _0x293660=JSON[_0x3abc41(0x25f)](_0x28511d);if(_0x293660[_0x3abc41(0x363)]!==undefined)_0x5b263b=!![];}}catch(_0x2206d9){}const _0x2303af=Object[_0x3abc41(0x444)](JSON[_0x3abc41(0x25f)](JSON[_0x3abc41(0x1f9)](_0xd62f23)),_0x21b31c);if(!_0x5b263b&&_0x2303af[_0x3abc41(0x363)]===![]){const _0x44dbe6=Boolean(_0x2303af[_0x3abc41(0x13d)]&&_0x2303af[_0x3abc41(0x384)]||_0xd15edb[_0x3abc41(0x422)]&&_0xd15edb[_0x3abc41(0x140)]);if(_0x44dbe6)_0x2303af[_0x3abc41(0x363)]=!![];}if(_0x21b31c[_0x3abc41(0x2e9)]&&typeof _0x21b31c[_0x3abc41(0x2e9)]===_0x3abc41(0x1a1))_0x2303af[_0x3abc41(0x2e9)]=Object[_0x3abc41(0x444)](_0x2303af[_0x3abc41(0x2e9)],_0x21b31c['optimizer']);if(_0x21b31c[_0x3abc41(0x2ba)]&&Array[_0x3abc41(0x45c)](_0x21b31c[_0x3abc41(0x2ba)]))_0x2303af[_0x3abc41(0x2ba)]=_0x21b31c['preferredIPs'];await saveConfig(_0xd15edb,_0x2303af);const _0xdefa97=await loadConfig(_0xd15edb,_0x49cbb8[_0x3abc41(0x17f)]);return json({'ok':!![],'data':Object[_0x3abc41(0x444)]({},_0xdefa97,{'version':VERSION}),'msg':_0x3abc41(0x186)});}catch(_0x504d7b){return json({'ok':![],'msg':_0x3abc41(0x442)+(_0x504d7b['message']||_0x504d7b)},0x1f4);}}if(_0x4e13e9===_0x3abc41(0x354)){if(_0x49cbb8[_0x3abc41(0x2d6)]!==_0x3abc41(0x2c0))return json({'ok':![],'msg':_0x3abc41(0x245)},0x195);try{if(!_0xd15edb['K']||typeof _0xd15edb['K'][_0x3abc41(0x270)]!==_0x3abc41(0x243))return json({'ok':![],'msg':_0x3abc41(0x1f6)},0x190);return await _0xd15edb['K']['delete'](_0x3abc41(0x300)),await _0xd15edb['K']['delete'](_0x3abc41(0x32c)),invalidateConfigCache(),json({'ok':!![],'msg':_0x3abc41(0x2b7)});}catch(_0x2d1e9c){return json({'ok':![],'msg':_0x3abc41(0x1c1)+(_0x2d1e9c['message']||_0x2d1e9c)},0x1f4);}}if(_0x4e13e9===_0x3abc41(0x458))return json({'ok':!![],'data':{'version':VERSION,'kind':deployKind()===_0x3abc41(0x39f)?_0x3abc41(0x2bc):'明文版','host':_0x34cc54[_0x3abc41(0x2e1)],'path':_0x40e30a,'region':_0x49cbb8['cf']&&_0x49cbb8['cf'][_0x3abc41(0x19b)]||_0x3abc41(0x2f9),'kv':!!(_0xd15edb['K']&&typeof _0xd15edb['K'][_0x3abc41(0x335)]===_0x3abc41(0x243)),'workersDev':/\.workers\.dev$/i['test'](_0x34cc54[_0x3abc41(0x2e1)])}});if(_0x4e13e9===_0x3abc41(0x3b8))try{const _0x1128f5=await checkUpdate(_0xd15edb),_0x100d24={'current':_0x1128f5[_0x3abc41(0x366)],'latest':_0x1128f5[_0x3abc41(0x3e3)],'hasUpdate':_0x1128f5[_0x3abc41(0x1ef)],'kind':_0x1128f5[_0x3abc41(0x437)],'error':_0x1128f5['error']||''};if(_0x1128f5['hasUpdate']&&_0x1128f5[_0x3abc41(0x3ac)])_0x100d24[_0x3abc41(0x3ac)]=_0x1128f5[_0x3abc41(0x3ac)];return json({'ok':!![],'data':_0x100d24});}catch(_0x407aa6){return json({'ok':![],'msg':_0x3abc41(0x3e8)+(_0x407aa6[_0x3abc41(0x226)]||_0x407aa6)},0x1f4);}if(_0x4e13e9===_0x3abc41(0x446))try{const _0x446e87=await getQuota(_0xd15edb,_0xd62f23);return json({'ok':!![],'data':_0x446e87});}catch(_0x34ee34){return json({'ok':![],'msg':'查询失败:\x20'+(_0x34ee34[_0x3abc41(0x226)]||_0x34ee34)},0x1f4);}if(_0x4e13e9===_0x3abc41(0x21b)){const _0xf33849=_0x34cc54['searchParams'][_0x3abc41(0x335)]('fmt')||'';try{const _0x4d58b1=await generateSubscription(_0xd62f23,_0x49cbb8[_0x3abc41(0x17f)],_0xf33849,_0x270d09,_0x49cbb8['cf']&&_0x49cbb8['cf'][_0x3abc41(0x19b)]);return json({'ok':!![],'type':_0x4d58b1[_0x3abc41(0x457)],'body':_0x4d58b1[_0x3abc41(0x44e)]});}catch(_0x447707){return json({'ok':![],'msg':_0x3abc41(0x2aa)+(_0x447707[_0x3abc41(0x226)]||_0x447707)},0x1f4);}}if(_0x4e13e9===_0x3abc41(0x311)){if(_0x49cbb8[_0x3abc41(0x2d6)]!==_0x3abc41(0x2c0))return json({'ok':![],'msg':'仅支持\x20POST'},0x195);try{const _0x18fc17=await _0x49cbb8[_0x3abc41(0x1af)]()[_0x3abc41(0x364)](()=>({})),_0x2e9f2a=await collectCandidates(Object[_0x3abc41(0x444)]({},_0xd62f23[_0x3abc41(0x2e9)],_0x18fc17));if(!_0x2e9f2a[_0x3abc41(0x311)][_0x3abc41(0x41b)]){const _0x5a9405=_0x2e9f2a[_0x3abc41(0x2be)]||{},_0x5c5963=[_0x5a9405[_0x3abc41(0x156)]&&'预设源:\x20'+_0x5a9405[_0x3abc41(0x156)],_0x5a9405[_0x3abc41(0x206)]&&_0x3abc41(0x306)+_0x5a9405[_0x3abc41(0x206)]][_0x3abc41(0x1b7)](Boolean)[_0x3abc41(0x40a)]('；');return json({'ok':![],'msg':_0x3abc41(0x1a8)+(_0x5c5963?'（'+_0x5c5963+'）':_0x3abc41(0x23e))},0x190);}return json({'ok':!![],'data':_0x2e9f2a[_0x3abc41(0x311)],'stats':_0x2e9f2a['stats']});}catch(_0x4df425){return json({'ok':![],'msg':'拉取失败:\x20'+(_0x4df425[_0x3abc41(0x226)]||_0x4df425)},0x1f4);}}if(_0x4e13e9===_0x3abc41(0x44f))try{const _0x512169=OPTIMIZE_SOURCES[_0x34cc54[_0x3abc41(0x2ef)][_0x3abc41(0x335)](_0x3abc41(0x14b))||_0x3abc41(0x339)]||OPTIMIZE_SOURCES['wetest_cname'],_0x240cf3=await fetch(_0x512169['url'],{'headers':{'User-Agent':_0x3abc41(0x12b)}});if(!_0x240cf3['ok'])return json({'ok':![],'msg':'拉取失败\x20HTTP\x20'+_0x240cf3[_0x3abc41(0x458)]});const _0x19a135=extractDomains(await _0x240cf3[_0x3abc41(0x244)]());return json({'ok':!![],'data':_0x19a135});}catch(_0x390b26){return json({'ok':![],'msg':'拉取失败:\x20'+(_0x390b26[_0x3abc41(0x226)]||_0x390b26)},0x1f4);}return json({'ok':![],'msg':_0x3abc41(0x133)+_0x4e13e9},0x194);}return new Response(_0x3abc41(0x2b0),{'status':0x194});}async function handleScheduled(_0x100630,_0x408304,_0x28443c){const _0x5523ec=_0x40b3d2,_0x2cc007=String(_0x408304[_0x5523ec(0x10c)]||'')[_0x5523ec(0x1da)]();if(_0x2cc007!=='1'&&_0x2cc007!==_0x5523ec(0x3dc))return;try{const _0x1e06ca=await loadConfig(_0x408304),_0x25a7ea=await collectCandidates(_0x1e06ca[_0x5523ec(0x2e9)]),_0x562a78=_0x25a7ea[_0x5523ec(0x311)]||[];if(!_0x562a78['length'])return;const _0x1bb466=await runLatencyTest(_0x562a78,_0x1e06ca[_0x5523ec(0x2e9)][_0x5523ec(0x109)]||0x5,0x1388),_0x41c4f1=_0x1bb466[_0x5523ec(0x1b7)](_0x545f74=>_0x545f74['ok'])[_0x5523ec(0x27e)](0x0,_0x1e06ca['optimizer'][_0x5523ec(0x229)]||0x14);if(!_0x41c4f1[_0x5523ec(0x41b)])return;_0x1e06ca['preferredIPs']=_0x41c4f1[_0x5523ec(0x114)](_0x334e7a=>({'ip':_0x334e7a['ip'],'port':_0x334e7a[_0x5523ec(0x3c4)]||0x1bb,'name':''})),await saveConfig(_0x408304,_0x1e06ca);}catch(_0x38ec59){}}export default{async 'fetch'(_0x504b29,_0x2400d7,_0x5dad0b){const _0x57fc60=_0x40b3d2;return handleRequest(_0x504b29,Object[_0x57fc60(0x444)]({},_0x2400d7,{'_ctx':_0x5dad0b}));},async 'scheduled'(_0x8a85f0,_0x594ce7,_0x130654){return handleScheduled(_0x8a85f0,_0x594ce7,_0x130654);}};