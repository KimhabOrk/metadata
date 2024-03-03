'use strict';

var uuid = require('uuid');
var zod = require('zod');

var xe=(i=>(i.number="number",i.string="string",i.date="date",i))(xe||{});function Y(e){return e?typeof e=="string"?e:JSON.stringify(e):""}var Ee=zod.z.object({displayType:zod.z.string().nullable().optional().catch(null),traitType:zod.z.string().nullable().optional().catch(null),value:zod.z.unknown().transform(Y),key:zod.z.unknown().transform(Y)}),Pt=zod.z.object({version:zod.z.literal("1.0.0").describe("The metadata version.").catch("1.0.0"),metadata_id:zod.z.string({description:"The metadata id can be anything but if your uploading to ipfs you will want it to be random. Using uuid could be an option!"}).catch(()=>uuid.v4()),name:zod.z.string({description:"The display name for the profile."}).nullable().catch(null),bio:zod.z.string({description:"The bio for the profile."}).nullable().optional().catch(null),cover_picture:zod.z.string({description:"Cover picture."}).nullable().optional().catch(null),attributes:Ee.array().describe("A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard.").optional()}).passthrough();function S(e){return e.length>=2}function Ae(e){return e}var Ie=/^[a-z]{2}(?:-[a-zA-Z]{2})?$/,Ce=/^([a-z]{2})(?:-[A-Z0-9]{2,3})?$/i,ee=zod.z.string({description:"A Locale Identifier in the `[language]` OR `[language]-[region]` format (e.g. `en`, `en-GB`, `it`). [language] MUST be in the ISO 639-1 format. [region], if provided, MUST be in the ISO 3166-1 alpha-2 format."}).regex(Ie,"Should be a valid Locale Identifier. Expected `[language]` OR `[language]-[region]` format (e.g. `en`, `en-GB`, `it`). [language] MUST be in the ISO 639-1 format. [region], if provided, MUST be in the ISO 3166-1 alpha-2 format."),I=ee.catch(e=>{let n=Ce.exec(e.input);return n?n[1]:e.input}).superRefine((e,n)=>{let a=ee.safeParse(e);return a.success||a.error.issues.forEach(i=>{n.addIssue(i);}),zod.z.NEVER}).transform(Ae);function Oe(e){return e}function we(e){return e.every(n=>!n.success)}var Pe=zod.z.string().describe("An encrypted value.").regex(/^\S+$/,"Should be a valid encrypted value.").transform(Oe);function ne(e){let n=[e,Pe];return zod.z.union(n).catch(a=>a.input).superRefine((a,i)=>{let m=n.map(T=>T.safeParse(a));return we(m)&&i.addIssue({code:zod.z.ZodIssueCode.invalid_union,unionErrors:m.map(T=>T.error)}),zod.z.NEVER})}function ve(e){return zod.z.preprocess((n,a)=>{let i=zod.z.string().safeParse(n);return i.success?i.data.replace(/^[\u0000\u0007\u000e\u000f\u200b-\u200d\ufeff]*/,"").replace(/[\u0000\u0007\u000e\u000f\u200b-\u200d\ufeff]*$/,"").trim():(i.error.issues.forEach(m=>{a.addIssue(m);}),zod.z.NEVER)},e.min(1))}function d(e){return ve(zod.z.string({description:e}))}function x(e){return ne(d(e))}var R=zod.z.string().describe("An arbitrary tag.").min(1).max(50).transform(e=>e.toLowerCase());function N(e){return e}var oe=zod.z.string().describe("A DiGi App identifier.").min(1).max(200).transform(N);function Me(e){return e}zod.z.string().min(1).describe("A cryptographic signature of the DiGi metadata.").transform(Me);function C(e){return e}function k(e){return e.transform(C)}function Ne(e){return e}function O(e="A Uniform Resource Identifier. "){return zod.z.string({description:e}).min(6).url({message:"Should be a valid URI"}).transform(Ne)}var te=/^geo:(-?\d+\.?\d*),(-?\d+\.?\d*)$/,ie=zod.z.coerce.number({description:"The latitude."}).min(-90).max(90),ae=zod.z.coerce.number({description:"The longitude."}).min(-180).max(180);zod.z.string().describe("A Geographic coordinate as subset of Geo URI (RFC 5870). Currently only supports the `geo:lat,lng` format.").regex(te,"Should be a Geo URI. Expected `geo:lat,lng`.").superRefine((e,n)=>{let a=te.exec(e);if(!a)return zod.z.NEVER;let[,i="",m=""]=a,T=ie.safeParse(i);T.success||T.error.issues.forEach(M=>n.addIssue({...M,path:[...n.path,"lat"]}));let h=ae.safeParse(m);return h.success||h.error.issues.forEach(M=>n.addIssue({...M,path:[...n.path,"lng"]})),zod.z.NEVER});zod.z.object({lat:ie,lng:ae});zod.z.object({formatted:x("The full mailing address formatted for display.").optional(),streetAddress:x("The street address including house number, street name, P.O. Box, apartment or unit number and extended multi-line address information.").optional(),locality:x("The city or locality."),region:x("The state or region.").optional(),postalCode:x("The zip or postal code.").optional(),country:x("The country name component.")});function ke(e){return e}var z=zod.z.string().length(42).describe("An EVM compatible address.").transform(ke);function ze(e){return e}var Le=zod.z.number().positive().transform(ze),w=zod.z.object({chainId:Le,address:z},{description:"An EVM compatible address on a specific chain."});function De(e){return e}var re=zod.z.string().min(1).transform(De),Ve=zod.z.object({contract:w,decimals:zod.z.number({description:"The number of decimals of the asset."}).int().nonnegative()});var se=zod.z.object({asset:Ve,value:d("The amount in the smallest unit of the given asset (e.g. wei for ETH).")},{description:"An amount of a specific asset."});function Ze(e){return e}var L=zod.z.string().min(4).transform(Ze);function _e(e){return e}var ce=zod.z.string().min(9).transform(_e);var P=(a=>(a.ERC721="ERC721",a.ERC1155="ERC1155",a))(P||{});function Ue(e,n){e.contractType==="ERC1155"&&(e.tokenIds===void 0||e.tokenIds.length===0)&&n.addIssue({code:zod.z.ZodIssueCode.custom,message:"ERC1155 requires at least one token id.",path:[...n.path,"tokenIds"]});}var D=zod.z.object({type:zod.z.literal("NFT_OWNERSHIP"),contract:w,contractType:zod.z.nativeEnum(P),tokenIds:re.array().min(1).optional().describe("A list of token IDs you want to check ownership of. The list is optional for ERC721, you MUST provide a list of token IDs for ERC1155.")}),E=(h=>(h.EQUAL="EQUAL",h.NOT_EQUAL="NOT_EQUAL",h.GREATER_THAN="GREATER_THAN",h.GREATER_THAN_OR_EQUAL="GREATER_THAN_OR_EQUAL",h.LESS_THAN="LESS_THAN",h.LESS_THAN_OR_EQUAL="LESS_THAN_OR_EQUAL",h))(E||{}),V=zod.z.object({type:zod.z.literal("ERC20_OWNERSHIP"),amount:se,condition:zod.z.nativeEnum(E)}),Z=zod.z.object({type:zod.z.literal("EOA_OWNERSHIP"),address:z}),_=zod.z.object({type:zod.z.literal("PROFILE_OWNERSHIP"),profileId:L}),U=zod.z.object({type:zod.z.literal("FOLLOW"),follow:L}),F=zod.z.object({type:zod.z.literal("COLLECT"),publicationId:ce,thisPublication:zod.z.boolean().optional().default(!1)}),j=zod.z.object({type:zod.z.literal("ADVANCED_CONTRACT"),contract:w.describe("The contract address and chain id"),functionName:zod.z.string().min(1).describe("The name of the function you want to call"),abi:zod.z.string().min(1).describe("The contract ABI. Has to be in human readable single string format containing the signature of the function you want to call. See https://docs.ethers.org/v5/api/utils/abi/fragments/#human-readable-abi for more info"),params:zod.z.string().array().describe("The parameters to pass to the function. Must be exactly matching the function arguments. You *must* pass in the `:userAddress` parameter to represent the decrypter address. Any array or tuple arguments, must be stringified JSON arrays."),comparison:zod.z.nativeEnum(E).describe("The comparison operator to use. In case of boolean functions you can only use EQUAL or NOT_EQUAL"),value:zod.z.string().regex(/^(true|false|\d{1,70})$/).describe("The comparison value. Accepts 'true', 'false' or a number")});function Fe(e){return zod.z.object({type:zod.z.literal("AND"),criteria:zod.z.discriminatedUnion("type",e).array().max(5,"Should have at most 5 conditions").refine(S,"Should have at least 2 conditions")})}var je=Fe([D,V,Z,_,U,F,j]);function de(e){return zod.z.object({type:zod.z.literal("OR"),criteria:zod.z.discriminatedUnion("type",e).array().max(5,"Should have at most 5 conditions").refine(S,"Should have at least 2 conditions")})}var Ge=de([D,V,Z,_,U,F,j]);function pe(e,n){(e.type==="AND"||e.type==="OR")&&e.criteria.forEach((a,i)=>pe(a,{...n,path:[...n.path,"criteria",i]})),e.type==="NFT_OWNERSHIP"&&Ue(e,n);}var Be=de([je,F,j,Z,V,U,D,Ge,_]).superRefine((e,n)=>(e.criteria.forEach((a,i)=>{pe(a,{...n,path:[...n.path,"criteria",i]});}),zod.z.NEVER));function We(e){return e}var He=zod.z.string().describe("A symmetric encryption key.").length(368,"Encryption key should be 368 characters long.").transform(We),Ke=d("An encrypted path is a string of keys separated by . that describe a path to a value in a JSON object (e.g. digi.attachments.0.item.url, digi.content).").array().min(1),Je=zod.z.object({provider:zod.z.literal("LIT_PROTOCOL"),encryptionKey:He,accessCondition:Be,encryptedPaths:Ke},{description:"Publication encryption strategy powered by the LIT Protocol."}),le=zod.z.discriminatedUnion("provider",[Je]);var G=(i=>(i.NUMBER="number",i.STRING="string",i.DATE="date",i))(G||{}),B=zod.z.object({display_type:zod.z.nativeEnum(G).optional(),trait_type:d("The name of the trait.").optional(),value:zod.z.union([zod.z.string(),zod.z.number()]).optional()}).passthrough();zod.z.object({description:k(zod.z.string({description:"A human-readable description of the item. It could be plain text or markdown."})).optional(),external_url:O("This is the URL that will appear below the asset's image on OpenSea and others etc. and will allow users to leave OpenSea and view the item on the site.").optional(),name:zod.z.string({description:"Name of the NFT item."}).optional(),attributes:B.array().optional().describe("These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item."),image:O("Marketplaces will store any NFT image here.").optional(),animation_url:O("A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA. Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.").optional()});var $e=zod.z.object({type:zod.z.literal("Boolean"),key:d("The attribute's unique identifier."),value:zod.z.enum(["true","false"]).describe("A JS boolean value serialized as string. It's consumer responsibility to parse it.")}),qe=zod.z.object({type:zod.z.literal("Date"),key:d("The attribute's unique identifier."),value:zod.z.string().datetime().describe("A valid ISO 8601 date string.  It's consumer responsibility to parse it.")}),Qe=zod.z.object({type:zod.z.literal("Number"),key:d("The attribute's unique identifier."),value:d("A valid JS number serialized as string. It's consumer responsibility to parse it.")}),Xe=zod.z.object({type:zod.z.literal("String"),key:d("The attribute's unique identifier."),value:d("A string value.")}),Ye=zod.z.object({type:zod.z.literal("JSON"),key:d("The attribute's unique identifier."),value:d("A JSON string. It's consumer responsibility to validate and parse it.")}),ue=zod.z.discriminatedUnion("type",[$e,qe,Qe,Xe,Ye]);var v=(i=>(i.NSFW="NSFW",i.SENSITIVE="SENSITIVE",i.SPOILER="SPOILER",i))(v||{});zod.z.object({id:d("A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI. Use a UUID if unsure."),appId:oe.optional().describe("The App Id that this publication belongs to."),hideFromFeed:zod.z.boolean({description:"Determine if the publication should not be shown in any feed."}).optional(),attributes:ue.array().min(1).max(20).optional().describe("A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard. Over time, common attributes will be added to the standard and their usage as arbitrary attributes will be discouraged."),locale:I,encryptedWith:le.optional(),tags:zod.z.set(R).max(20).catch(e=>e.input).superRefine((e,n)=>{let a=zod.z.array(R).max(20).safeParse(e);if(a.success){let i=[...new Set(a.data)];return a.data.length>i.length&&n.addIssue({code:zod.z.ZodIssueCode.custom,fatal:!0,message:`Duplicate tags are not allowed: ${a.data.join(", ")}`}),zod.z.NEVER}a.error.issues.forEach(i=>{n.addIssue(i);});}).transform(e=>[...e]).optional().describe("An arbitrary list of tags."),contentWarning:zod.z.nativeEnum(v,{description:"Specify a content warning."}).optional()});var Q=(a=>(a.V1="1.0.0",a.V2="2.0.0",a))(Q||{}),p=(s=>(s[s.ARTICLE="ARTICLE"]="ARTICLE",s[s.AUDIO="AUDIO"]="AUDIO",s[s.EMBED="EMBED"]="EMBED",s[s.IMAGE="IMAGE"]="IMAGE",s[s.LINK="LINK"]="LINK",s[s.SHORT_VIDEO="SHORT_VIDEO"]="SHORT_VIDEO",s[s.TEXT_ONLY="TEXT_ONLY"]="TEXT_ONLY",s[s.VIDEO="VIDEO"]="VIDEO",s))(p||{}),he=(s=>(s.AAC="audio/aac",s.FLAC="audio/flac",s.MP3="audio/mpeg",s.MP4_AUDIO="audio/mp4",s.OGG_AUDIO="audio/ogg",s.WAV="audio/wav",s.WAV_VND="audio/vnd.wave",s.WEBM_AUDIO="audio/webm",s))(he||{}),tt=Object.values(he);function nt(e){return tt.includes(e)}var ye=(c=>(c.BMP="image/bmp",c.GIF="image/gif",c.HEIC="image/heic",c.JPEG="image/jpeg",c.JPG="image/jpg",c.PNG="image/png",c.SVG_XML="image/svg+xml",c.TIFF="image/tiff",c.WEBP="image/webp",c.X_MS_BMP="image/x-ms-bmp",c))(ye||{}),ot=Object.values(ye);function it(e){return ot.includes(e)}var fe=(c=>(c.GLTF="model/gltf+json",c.GLTF_BINARY="model/gltf-binary",c.WEBM="video/webm",c.MP4="video/mp4",c.M4V="video/x-m4v",c.OGV="video/ogv",c.OGG="video/ogg",c.MPEG="video/mpeg",c.QUICKTIME="video/quicktime",c.MOV="video/mov",c))(fe||{}),at=Object.values(fe);function rt(e){return at.includes(e)}var be=zod.z.string({description:"In spec for OpenSea and other providers - also used when using EMBED main publication focusA URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA. Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported."}),st=zod.z.object({description:zod.z.string({description:"A human-readable description of the item. It could be plain text or markdown."}).optional().nullable().catch(null),external_url:zod.z.string({description:"This is the URL that will appear below the asset's image on OpenSea and others etc. and will allow users to leave OpenSea and view the item on the site."}).optional().nullable(),name:zod.z.string({description:"Name of the NFT item."}),attributes:B.array().describe("These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item.").catch([]),image:zod.z.string({description:"Marketplaces will store any NFT image here."}).optional().nullable().catch(null),animation_url:be.optional().nullable(),version:zod.z.nativeEnum(Q)}).passthrough(),f=zod.z.object({item:d("Marketplaces will store any NFT image here."),altTag:zod.z.string().optional().nullable().describe("The alt tag for accessibility."),cover:zod.z.string().describe("The cover for any video or audio media.").optional().nullable().catch(null),type:zod.z.string().optional().nullable().describe("This is the mime type of the media.")}).passthrough(),A=zod.z.string({description:"The content of a publication."}).max(3e4);function X(e){return e==null}function ct(e){return X(e)||e.length===0}function dt(e){return X(e)||e.length===0}var ge=st.extend({metadata_id:zod.z.string({description:"The metadata_id can be anything but if your uploading to ipfs you will want it to be random. Using uuid could be an option!"}).catch(()=>uuid.v4()),content:A.transform(e=>e).optional().nullable(),media:f.array().catch(e=>e.input.filter(n=>f.safeParse(n).success)).optional().nullable().describe("This is digi supported attached media items to the publication."),appId:zod.z.string().max(200).transform(N).optional().nullable().describe("The App Id that this publication belongs to.")}),pt=ge.extend({version:zod.z.literal("1.0.0",{description:"The metadata version."})}).superRefine((e,n)=>{dt(e.content)&&X(e.image)&&ct(e.media)&&(n.addIssue({code:zod.z.ZodIssueCode.custom,path:["content"],message:"At least one between content, image, and media must be present. Content must be over 1 character."}),n.addIssue({code:zod.z.ZodIssueCode.custom,path:["image"],message:"At least one between content, image, and media must be present."}),n.addIssue({code:zod.z.ZodIssueCode.custom,path:["media"],message:"At least one between content, image, and media must be present."}));}),W=zod.z.object({collect:zod.z.object({publicationId:zod.z.string().nullable(),thisPublication:zod.z.boolean().nullable().optional()})}).strict(),H=zod.z.object({eoa:zod.z.object({address:zod.z.string()})}).strict(),K=zod.z.object({follow:zod.z.object({profileId:zod.z.string()})}).strict(),J=zod.z.object({nft:zod.z.object({contractAddress:zod.z.string(),chainID:zod.z.number(),contractType:zod.z.nativeEnum(P),tokenIds:zod.z.string().array().min(1).nullable().optional().catch(null)})}).strict(),$=zod.z.object({profile:zod.z.object({profileId:zod.z.string()})}).strict(),q=zod.z.object({token:zod.z.object({amount:zod.z.coerce.string(),chainID:zod.z.coerce.number(),condition:zod.z.nativeEnum(E),contractAddress:zod.z.string(),decimals:zod.z.coerce.number()})}).strict();function lt(e){return zod.z.object({and:zod.z.object({criteria:zod.z.union(e).array().max(5,"Invalid AND condition: should have at most 5 conditions").refine(S,"Invalid AND condition: should have at least 2 conditions")})}).strict()}function me(e){return zod.z.object({or:zod.z.object({criteria:zod.z.union(e).array().max(5,"Invalid OR condition: should have at most 5 conditions").refine(S,"Invalid OR condition: should have at least 2 conditions")})}).strict()}var ut=me([W,H,K,J,$,q,lt([W,H,K,J,$,q]),me([W,H,K,J,$,q])]),mt=zod.z.object({original:zod.z.object({url:d(),cover:zod.z.string().nullable().optional().catch(null),altTag:zod.z.string().nullable().optional().catch(null),mimeType:zod.z.string().nullable().optional().catch(null)})}).passthrough(),ht=zod.z.object({item:zod.z.string().describe("Marketplaces will store any NFT image here."),altTag:zod.z.string().optional().nullable().describe("The alt tag for accessibility."),cover:zod.z.string().describe("The cover for any video or audio media.").optional().nullable(),type:zod.z.string().optional().nullable().describe("This is the mime type of the media.")}).passthrough().catch(e=>{let n=mt.safeParse(e.input);return n.success?{item:n.data.original.url,altTag:n.data.original.altTag,cover:n.data.original.cover,type:n.data.original.mimeType}:e.input}),yt=zod.z.object({content:zod.z.string().optional().nullable(),media:ht.array().optional().nullable(),image:zod.z.string().optional().nullable(),animation_url:zod.z.string().optional().nullable(),external_url:zod.z.string().optional().nullable()}),ft=zod.z.object({accessCondition:ut,encryptedFields:yt,providerSpecificParams:zod.z.object({encryptionKey:zod.z.string().length(368,"Encryption key should be 368 characters long.")})}),g=ge.extend({version:zod.z.literal("2.0.0",{description:"The metadata version."}),locale:I,content:A.transform(C).optional().nullable(),contentWarning:zod.z.nativeEnum(v,{description:"Specify a content warning."}).optional().nullable().catch(null),mainContentFocus:zod.z.nativeEnum(p,{description:"Main content focus that for this publication."}),tags:zod.z.string().array().optional().nullable().describe("Ability to tag your publication."),encryptionParams:ft.optional()}),bt=g.extend({mainContentFocus:zod.z.literal(p.ARTICLE),content:A.min(1).transform(C)}),gt=g.extend({mainContentFocus:zod.z.literal(p.AUDIO),media:f.array().min(1).catch(e=>e.input.filter(n=>f.safeParse(n).success)).refine(e=>e.some(n=>nt(n?.type)),`Metadata ${p.AUDIO} requires an audio to be attached.`)}),Tt=g.extend({mainContentFocus:zod.z.literal(p.EMBED),animation_url:be.optional().nullable()}),St=g.extend({mainContentFocus:zod.z.literal(p.IMAGE),media:f.array().min(1).catch(e=>e.input.filter(n=>f.safeParse(n).success)).refine(e=>e.some(n=>it(n.type)),`Metadata ${p.IMAGE} requires an image to be attached.`)}),xt=g.extend({mainContentFocus:zod.z.literal(p.LINK),content:A.min(1).refine(e=>e.includes("https://"),`Metadata ${p.LINK} requires a valid https link`).transform(e=>e)}),Et=g.extend({mainContentFocus:zod.z.literal(p.TEXT_ONLY),content:A.min(1).transform(e=>e),media:zod.z.any().array().max(0,{message:"Metadata TEXT cannot have media"}).optional().nullable()}),Te=g.extend({mainContentFocus:zod.z.union([zod.z.literal(p.VIDEO),zod.z.literal(p.SHORT_VIDEO)]),media:f.array().min(1).catch(e=>e.input.filter(n=>f.safeParse(n).success)).refine(e=>e.some(n=>rt(n.type)),`Metadata ${p.VIDEO} requires an image to be attached.`)}),At=Te.extend({mainContentFocus:zod.z.literal(p.VIDEO)}),It=Te.extend({mainContentFocus:zod.z.literal(p.SHORT_VIDEO)}),Ct=zod.z.discriminatedUnion("mainContentFocus",[bt,gt,Tt,St,xt,Et,At,It]).transform(e=>e.mainContentFocus===p.VIDEO&&e.appId==="digitube-bytes"?{...e,mainContentFocus:p.SHORT_VIDEO}:e),On=zod.z.object({version:zod.z.nativeEnum(Q)}).passthrough().transform((e,n)=>{switch(e.version){case"1.0.0":let a=pt.safeParse(e);return a.success?a.data:(a.error.issues.forEach(m=>{n.addIssue(m);}),zod.z.NEVER);case"2.0.0":let i=Ct.safeParse(e);return i.success?i.data:(i.error.issues.forEach(m=>{n.addIssue(m);}),zod.z.NEVER)}return zod.z.NEVER});

exports.AudioMimeType = he;
exports.ConditionComparisonOperator = E;
exports.EncryptedMediaSchema = ht;
exports.EncryptionParamsSchema = ft;
exports.ImageMimeType = ye;
exports.MarketplaceMetadataAttributeDisplayType = G;
exports.MediaSchema = f;
exports.NftContractType = P;
exports.ProfileMetadataAttributeDisplayType = xe;
exports.ProfileMetadataSchema = Pt;
exports.PublicationContentWarning = v;
exports.PublicationMainFocus = p;
exports.PublicationMetadataSchema = On;
exports.PublicationMetadataV1Schema = pt;
exports.PublicationMetadataV2Schema = Ct;
exports.PublicationMetadataVersion = Q;
exports.VideoMimeType = fe;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map