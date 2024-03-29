import { z } from 'zod';
import { h as MarketplaceMetadataAttribute, A as AppId, g as Markdown, aU as NftContractType, o as ConditionComparisonOperator, X as Locale, aO as PublicationContentWarning } from '../index-f5d7db1f.js';
export { aE as Amount, aG as AmountDetails, aF as AmountSchema, a7 as AppIdSchema, aB as Asset, aC as AssetSchema, C as ChainId, av as ChainIdSchema, an as DateTime, k as EncryptableDateTime, i as EncryptableGeoURI, e as EncryptableMarkdown, a as EncryptableString, E as EncryptableURI, c as EncryptedString, _ as EncryptedStringSchema, ar as EvmAddress, at as EvmAddressSchema, ah as GeoPoint, ai as GeoPointSchema, af as GeoURI, ag as GeoURISchema, Z as LocaleSchema, f as MarketplaceMetadata, bd as MarketplaceMetadataAttributeDisplayType, aw as NetworkAddress, N as NetworkAddressDetails, ax as NetworkAddressSchema, j as PhysicalAddress, am as PhysicalAddressSchema, aI as ProfileId, aK as ProfileIdSchema, aL as PublicationId, aN as PublicationIdSchema, S as Signature, a9 as SignatureSchema, a3 as Tag, a5 as TagSchema, ay as TokenId, aA as TokenIdSchema, U as URI, aH as amount, aD as asset, ap as datetimeSchema, $ as encryptable, aq as encryptableDateTimeSchema, al as encryptableGeoUriSchema, a2 as encryptableStringSchema, ae as encryptableUriSchema, ak as geoPoint, aj as geoUri, ab as markdown, a0 as nonEmpty, a1 as nonEmptyStringSchema, a6 as toAppId, au as toChainId, ao as toDateTime, as as toEvmAddress, Y as toLocale, aa as toMarkdown, aJ as toProfileId, aM as toPublicationId, a8 as toSignature, a4 as toTag, az as toTokenId, ac as toUri, ad as uriSchema } from '../index-f5d7db1f.js';

declare enum ProfileMetadataAttributeDisplayType {
    number = "number",
    string = "string",
    date = "date"
}
declare const ProfileMetadataAttributeSchema: z.ZodObject<{
    displayType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    traitType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    value: z.ZodEffects<z.ZodUnknown, string, unknown>;
    key: z.ZodEffects<z.ZodUnknown, string, unknown>;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
    displayType?: string | null | undefined;
    traitType?: string | null | undefined;
}, {
    displayType?: unknown;
    traitType?: unknown;
    value?: unknown;
    key?: unknown;
}>;
type ProfileMetadataAttribute = z.infer<typeof ProfileMetadataAttributeSchema>;
/**
 * Profile Metadata schema.
 *
 * @category Parse
 *
 * @example
 * with `parse`:
 * ```ts
 * legacy.ProfileMetadataSchema.parse(valid); // => legacy.ProfileMetadata
 *
 * legacy.ProfileMetadataSchema.parse(invalid); // => throws ZodError
 * ```
 *
 * @example
 * with `safeParse`:
 * ```ts
 * legacy.ProfileMetadataSchema.safeParse(valid);
 * // => { success: true, data: legacy.ProfileMetadata }
 *
 * legacy.ProfileMetadataSchema.safeParse(invalid);
 * // => { success: false, error: ZodError }
 * ```
 */
declare const ProfileMetadataSchema: z.ZodObject<{
    version: z.ZodCatch<z.ZodLiteral<"1.0.0">>;
    metadata_id: z.ZodCatch<z.ZodString>;
    name: z.ZodCatch<z.ZodNullable<z.ZodString>>;
    bio: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cover_picture: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        traitType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        value: z.ZodEffects<z.ZodUnknown, string, unknown>;
        key: z.ZodEffects<z.ZodUnknown, string, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        displayType?: string | null | undefined;
        traitType?: string | null | undefined;
    }, {
        displayType?: unknown;
        traitType?: unknown;
        value?: unknown;
        key?: unknown;
    }>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodCatch<z.ZodLiteral<"1.0.0">>;
    metadata_id: z.ZodCatch<z.ZodString>;
    name: z.ZodCatch<z.ZodNullable<z.ZodString>>;
    bio: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cover_picture: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        traitType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        value: z.ZodEffects<z.ZodUnknown, string, unknown>;
        key: z.ZodEffects<z.ZodUnknown, string, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        displayType?: string | null | undefined;
        traitType?: string | null | undefined;
    }, {
        displayType?: unknown;
        traitType?: unknown;
        value?: unknown;
        key?: unknown;
    }>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodCatch<z.ZodLiteral<"1.0.0">>;
    metadata_id: z.ZodCatch<z.ZodString>;
    name: z.ZodCatch<z.ZodNullable<z.ZodString>>;
    bio: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    cover_picture: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        displayType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        traitType: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        value: z.ZodEffects<z.ZodUnknown, string, unknown>;
        key: z.ZodEffects<z.ZodUnknown, string, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        key: string;
        displayType?: string | null | undefined;
        traitType?: string | null | undefined;
    }, {
        displayType?: unknown;
        traitType?: unknown;
        value?: unknown;
        key?: unknown;
    }>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
type ProfileMetadata = z.infer<typeof ProfileMetadataSchema>;

declare enum PublicationMetadataVersion {
    V1 = "1.0.0",
    V2 = "2.0.0"
}
declare enum PublicationMainFocus {
    ARTICLE = "ARTICLE",
    AUDIO = "AUDIO",
    EMBED = "EMBED",
    IMAGE = "IMAGE",
    LINK = "LINK",
    SHORT_VIDEO = "SHORT_VIDEO",
    TEXT_ONLY = "TEXT_ONLY",
    VIDEO = "VIDEO"
}
declare enum AudioMimeType {
    AAC = "audio/aac",
    FLAC = "audio/flac",
    MP3 = "audio/mpeg",
    MP4_AUDIO = "audio/mp4",
    OGG_AUDIO = "audio/ogg",
    WAV = "audio/wav",
    WAV_VND = "audio/vnd.wave",
    WEBM_AUDIO = "audio/webm"
}
declare enum ImageMimeType {
    BMP = "image/bmp",
    GIF = "image/gif",
    HEIC = "image/heic",
    JPEG = "image/jpeg",
    JPG = "image/jpg",
    PNG = "image/png",
    SVG_XML = "image/svg+xml",
    TIFF = "image/tiff",
    WEBP = "image/webp",
    X_MS_BMP = "image/x-ms-bmp"
}
declare enum VideoMimeType {
    GLTF = "model/gltf+json",
    GLTF_BINARY = "model/gltf-binary",
    WEBM = "video/webm",
    MP4 = "video/mp4",
    M4V = "video/x-m4v",
    OGV = "video/ogv",
    OGG = "video/ogg",
    MPEG = "video/mpeg",
    QUICKTIME = "video/quicktime",
    MOV = "video/mov"
}
/**
 * @internal
 */
declare const MediaSchema: z.ZodObject<{
    item: z.ZodType<string, z.ZodTypeDef, unknown>;
    altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    item: z.ZodType<string, z.ZodTypeDef, unknown>;
    altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    item: z.ZodType<string, z.ZodTypeDef, unknown>;
    altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
type Media = z.infer<typeof MediaSchema>;
/**
 * @deprecated Use `Media` instead.
 */
type PublicationMetadataMedia = Media;
/**
 * @internal
 */
declare const PublicationMetadataV1Schema: z.ZodEffects<z.ZodObject<{
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    version: z.ZodLiteral<PublicationMetadataVersion.V1>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    version: z.ZodLiteral<PublicationMetadataVersion.V1>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    version: z.ZodLiteral<PublicationMetadataVersion.V1>;
}, z.ZodTypeAny, "passthrough">>, z.objectOutputType<{
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    version: z.ZodLiteral<PublicationMetadataVersion.V1>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    version: z.ZodLiteral<PublicationMetadataVersion.V1>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV1 = z.infer<typeof PublicationMetadataV1Schema>;
declare const CollectConditionSchema: z.ZodObject<{
    collect: z.ZodObject<{
        publicationId: z.ZodNullable<z.ZodString>;
        thisPublication: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    }, {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    collect: {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    };
}, {
    collect: {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    };
}>;
type CollectCondition = z.infer<typeof CollectConditionSchema>;
declare const EoaOwnershipSchema: z.ZodObject<{
    eoa: z.ZodObject<{
        address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        address: string;
    }, {
        address: string;
    }>;
}, "strict", z.ZodTypeAny, {
    eoa: {
        address: string;
    };
}, {
    eoa: {
        address: string;
    };
}>;
type EoaOwnership = z.infer<typeof EoaOwnershipSchema>;
declare const FollowConditionSchema: z.ZodObject<{
    follow: z.ZodObject<{
        profileId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        profileId: string;
    }, {
        profileId: string;
    }>;
}, "strict", z.ZodTypeAny, {
    follow: {
        profileId: string;
    };
}, {
    follow: {
        profileId: string;
    };
}>;
type FollowCondition = z.infer<typeof FollowConditionSchema>;
declare const NftOwnershipSchema: z.ZodObject<{
    nft: z.ZodObject<{
        contractAddress: z.ZodString;
        chainID: z.ZodNumber;
        contractType: z.ZodNativeEnum<typeof NftContractType>;
        tokenIds: z.ZodCatch<z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString, "many">>>>;
    }, "strip", z.ZodTypeAny, {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: string[] | null | undefined;
    }, {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: unknown;
    }>;
}, "strict", z.ZodTypeAny, {
    nft: {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: string[] | null | undefined;
    };
}, {
    nft: {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: unknown;
    };
}>;
type NftOwnership = z.infer<typeof NftOwnershipSchema>;
declare const ProfileOwnershipSchema: z.ZodObject<{
    profile: z.ZodObject<{
        profileId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        profileId: string;
    }, {
        profileId: string;
    }>;
}, "strict", z.ZodTypeAny, {
    profile: {
        profileId: string;
    };
}, {
    profile: {
        profileId: string;
    };
}>;
type ProfileOwnership = z.infer<typeof ProfileOwnershipSchema>;
declare const Erc20OwnershipSchema: z.ZodObject<{
    token: z.ZodObject<{
        amount: z.ZodString;
        chainID: z.ZodNumber;
        condition: z.ZodNativeEnum<typeof ConditionComparisonOperator>;
        contractAddress: z.ZodString;
        decimals: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    }, {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    }>;
}, "strict", z.ZodTypeAny, {
    token: {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    };
}, {
    token: {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    };
}>;
type Erc20Ownership = z.infer<typeof Erc20OwnershipSchema>;
type AndCondition<T> = {
    and: {
        criteria: [T, T, ...T[]];
    };
};
type OrCondition<T> = {
    or: {
        criteria: [T, T, ...T[]];
    };
};
declare const AccessConditionSchema: z.ZodType<OrCondition<{
    collect: {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    };
} | {
    eoa: {
        address: string;
    };
} | {
    follow: {
        profileId: string;
    };
} | {
    nft: {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: string[] | null | undefined;
    };
} | {
    profile: {
        profileId: string;
    };
} | {
    token: {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    };
} | AndCondition<{
    collect: {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    };
} | {
    eoa: {
        address: string;
    };
} | {
    follow: {
        profileId: string;
    };
} | {
    nft: {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: string[] | null | undefined;
    };
} | {
    profile: {
        profileId: string;
    };
} | {
    token: {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    };
}> | OrCondition<{
    collect: {
        publicationId: string | null;
        thisPublication?: boolean | null | undefined;
    };
} | {
    eoa: {
        address: string;
    };
} | {
    follow: {
        profileId: string;
    };
} | {
    nft: {
        contractType: NftContractType;
        contractAddress: string;
        chainID: number;
        tokenIds?: string[] | null | undefined;
    };
} | {
    profile: {
        profileId: string;
    };
} | {
    token: {
        decimals: number;
        amount: string;
        condition: ConditionComparisonOperator;
        contractAddress: string;
        chainID: number;
    };
}>>, z.ZodTypeDef, object>;
type AccessCondition = z.infer<typeof AccessConditionSchema>;
/**
 * @internal
 */
declare const EncryptedMediaSchema: z.ZodCatch<z.ZodObject<{
    item: z.ZodString;
    altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    item: z.ZodString;
    altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    item: z.ZodString;
    altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>>;
type EncryptedMedia = z.infer<typeof EncryptedMediaSchema>;
declare const EncryptedFieldsSchema: z.ZodObject<{
    content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
        item: z.ZodString;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodString;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodString;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>>, "many">>>;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    content?: string | null | undefined;
    media?: z.objectOutputType<{
        item: z.ZodString;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[] | null | undefined;
    image?: string | null | undefined;
    animation_url?: string | null | undefined;
    external_url?: string | null | undefined;
}, {
    content?: string | null | undefined;
    media?: unknown[] | null | undefined;
    image?: string | null | undefined;
    animation_url?: string | null | undefined;
    external_url?: string | null | undefined;
}>;
type EncryptedFields = z.infer<typeof EncryptedFieldsSchema>;
/**
 * @internal
 */
declare const EncryptionParamsSchema: z.ZodObject<{
    accessCondition: z.ZodType<OrCondition<{
        collect: {
            publicationId: string | null;
            thisPublication?: boolean | null | undefined;
        };
    } | {
        eoa: {
            address: string;
        };
    } | {
        follow: {
            profileId: string;
        };
    } | {
        nft: {
            contractType: NftContractType;
            contractAddress: string;
            chainID: number;
            tokenIds?: string[] | null | undefined;
        };
    } | {
        profile: {
            profileId: string;
        };
    } | {
        token: {
            decimals: number;
            amount: string;
            condition: ConditionComparisonOperator;
            contractAddress: string;
            chainID: number;
        };
    } | AndCondition<{
        collect: {
            publicationId: string | null;
            thisPublication?: boolean | null | undefined;
        };
    } | {
        eoa: {
            address: string;
        };
    } | {
        follow: {
            profileId: string;
        };
    } | {
        nft: {
            contractType: NftContractType;
            contractAddress: string;
            chainID: number;
            tokenIds?: string[] | null | undefined;
        };
    } | {
        profile: {
            profileId: string;
        };
    } | {
        token: {
            decimals: number;
            amount: string;
            condition: ConditionComparisonOperator;
            contractAddress: string;
            chainID: number;
        };
    }> | OrCondition<{
        collect: {
            publicationId: string | null;
            thisPublication?: boolean | null | undefined;
        };
    } | {
        eoa: {
            address: string;
        };
    } | {
        follow: {
            profileId: string;
        };
    } | {
        nft: {
            contractType: NftContractType;
            contractAddress: string;
            chainID: number;
            tokenIds?: string[] | null | undefined;
        };
    } | {
        profile: {
            profileId: string;
        };
    } | {
        token: {
            decimals: number;
            amount: string;
            condition: ConditionComparisonOperator;
            contractAddress: string;
            chainID: number;
        };
    }>>, z.ZodTypeDef, object>;
    encryptedFields: z.ZodObject<{
        content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
            item: z.ZodString;
            altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            item: z.ZodString;
            altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            item: z.ZodString;
            altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">>>, "many">>>;
        image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        content?: string | null | undefined;
        media?: z.objectOutputType<{
            item: z.ZodString;
            altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">[] | null | undefined;
        image?: string | null | undefined;
        animation_url?: string | null | undefined;
        external_url?: string | null | undefined;
    }, {
        content?: string | null | undefined;
        media?: unknown[] | null | undefined;
        image?: string | null | undefined;
        animation_url?: string | null | undefined;
        external_url?: string | null | undefined;
    }>;
    providerSpecificParams: z.ZodObject<{
        encryptionKey: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        encryptionKey: string;
    }, {
        encryptionKey: string;
    }>;
}, "strip", z.ZodTypeAny, {
    accessCondition: OrCondition<{
        collect: {
            publicationId: string | null;
            thisPublication?: boolean | null | undefined;
        };
    } | {
        eoa: {
            address: string;
        };
    } | {
        follow: {
            profileId: string;
        };
    } | {
        nft: {
            contractType: NftContractType;
            contractAddress: string;
            chainID: number;
            tokenIds?: string[] | null | undefined;
        };
    } | {
        profile: {
            profileId: string;
        };
    } | {
        token: {
            decimals: number;
            amount: string;
            condition: ConditionComparisonOperator;
            contractAddress: string;
            chainID: number;
        };
    } | AndCondition<{
        collect: {
            publicationId: string | null;
            thisPublication?: boolean | null | undefined;
        };
    } | {
        eoa: {
            address: string;
        };
    } | {
        follow: {
            profileId: string;
        };
    } | {
        nft: {
            contractType: NftContractType;
            contractAddress: string;
            chainID: number;
            tokenIds?: string[] | null | undefined;
        };
    } | {
        profile: {
            profileId: string;
        };
    } | {
        token: {
            decimals: number;
            amount: string;
            condition: ConditionComparisonOperator;
            contractAddress: string;
            chainID: number;
        };
    }> | OrCondition<{
        collect: {
            publicationId: string | null;
            thisPublication?: boolean | null | undefined;
        };
    } | {
        eoa: {
            address: string;
        };
    } | {
        follow: {
            profileId: string;
        };
    } | {
        nft: {
            contractType: NftContractType;
            contractAddress: string;
            chainID: number;
            tokenIds?: string[] | null | undefined;
        };
    } | {
        profile: {
            profileId: string;
        };
    } | {
        token: {
            decimals: number;
            amount: string;
            condition: ConditionComparisonOperator;
            contractAddress: string;
            chainID: number;
        };
    }>>;
    encryptedFields: {
        content?: string | null | undefined;
        media?: z.objectOutputType<{
            item: z.ZodString;
            altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.ZodTypeAny, "passthrough">[] | null | undefined;
        image?: string | null | undefined;
        animation_url?: string | null | undefined;
        external_url?: string | null | undefined;
    };
    providerSpecificParams: {
        encryptionKey: string;
    };
}, {
    accessCondition: object;
    encryptedFields: {
        content?: string | null | undefined;
        media?: unknown[] | null | undefined;
        image?: string | null | undefined;
        animation_url?: string | null | undefined;
        external_url?: string | null | undefined;
    };
    providerSpecificParams: {
        encryptionKey: string;
    };
}>;
type EncryptionParams = z.infer<typeof EncryptionParamsSchema>;
declare const PublicationMetadataV2ArticleSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2Article = z.infer<typeof PublicationMetadataV2ArticleSchema>;
declare const PublicationMetadataV2AudioSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2Audio = z.infer<typeof PublicationMetadataV2AudioSchema>;
declare const PublicationMetadataV2EmbedSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2Embed = z.infer<typeof PublicationMetadataV2EmbedSchema>;
declare const PublicationMetadataV2ImageSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2Image = z.infer<typeof PublicationMetadataV2ImageSchema>;
declare const PublicationMetadataV2LinkSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2Link = z.infer<typeof PublicationMetadataV2LinkSchema>;
declare const PublicationMetadataV2TextOnlySchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2TextOnly = z.infer<typeof PublicationMetadataV2TextOnlySchema>;
declare const PublicationMetadataV2VideoSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, z.ZodTypeAny, "passthrough">>;
declare const PublicationMetadataV2ShortVideoSchema: z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2Video = z.infer<typeof PublicationMetadataV2VideoSchema> | z.infer<typeof PublicationMetadataV2ShortVideoSchema>;
/**
 * @internal
 */
declare const PublicationMetadataV2Schema: z.ZodEffects<z.ZodDiscriminatedUnion<"mainContentFocus", [z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, z.ZodTypeAny, "passthrough">>]>, z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, z.ZodTypeAny, "passthrough"> | z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough"> | z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, z.ZodTypeAny, "passthrough"> | z.objectOutputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, z.ZodTypeAny, "passthrough"> | {
    mainContentFocus: PublicationMainFocus;
    version: PublicationMetadataVersion.V2;
    metadata_id: string;
    name: string;
    attributes: MarketplaceMetadataAttribute[];
    locale: string & {
        __type__: "Locale";
    };
    media: z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[];
    description?: string | null | undefined;
    external_url?: string | null | undefined;
    image?: string | null | undefined;
    animation_url?: string | null | undefined;
    appId?: AppId | null | undefined;
    tags?: string[] | null | undefined;
    contentWarning?: PublicationContentWarning | null | undefined;
    content?: Markdown | null | undefined;
    encryptionParams?: {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    } | undefined;
}, z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.ARTICLE>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.AUDIO>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.EMBED>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.IMAGE>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.LINK>;
    content: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, Markdown, string>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.TEXT_ONLY>;
    content: z.ZodEffects<z.ZodString, Markdown, string>;
    media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodAny, "many">>>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.VIDEO>;
}, z.ZodTypeAny, "passthrough"> | z.objectInputType<{
    version: z.ZodLiteral<PublicationMetadataVersion.V2>;
    metadata_id: z.ZodCatch<z.ZodString>;
    description: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    name: z.ZodString;
    attributes: z.ZodCatch<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    appId: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, AppId, string>>>;
    locale: z.ZodType<Locale, z.ZodTypeDef, unknown>;
    tags: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    contentWarning: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodNativeEnum<typeof PublicationContentWarning>>>>;
    content: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodString, Markdown, string>>>;
    media: z.ZodEffects<z.ZodCatch<z.ZodArray<z.ZodObject<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">>, "many">>, z.objectOutputType<{
        item: z.ZodType<string, z.ZodTypeDef, unknown>;
        altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        cover: z.ZodCatch<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
        type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, z.ZodTypeAny, "passthrough">[], unknown>;
    encryptionParams: z.ZodOptional<z.ZodObject<{
        accessCondition: z.ZodType<OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>, z.ZodTypeDef, object>;
        encryptedFields: z.ZodObject<{
            content: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodCatch<z.ZodObject<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">>>, "many">>>;
            image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            animation_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            external_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }, {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        }>;
        providerSpecificParams: z.ZodObject<{
            encryptionKey: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            encryptionKey: string;
        }, {
            encryptionKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        accessCondition: OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        } | AndCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }> | OrCondition<{
            collect: {
                publicationId: string | null;
                thisPublication?: boolean | null | undefined;
            };
        } | {
            eoa: {
                address: string;
            };
        } | {
            follow: {
                profileId: string;
            };
        } | {
            nft: {
                contractType: NftContractType;
                contractAddress: string;
                chainID: number;
                tokenIds?: string[] | null | undefined;
            };
        } | {
            profile: {
                profileId: string;
            };
        } | {
            token: {
                decimals: number;
                amount: string;
                condition: ConditionComparisonOperator;
                contractAddress: string;
                chainID: number;
            };
        }>>;
        encryptedFields: {
            content?: string | null | undefined;
            media?: z.objectOutputType<{
                item: z.ZodString;
                altTag: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                cover: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                type: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            }, z.ZodTypeAny, "passthrough">[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }, {
        accessCondition: object;
        encryptedFields: {
            content?: string | null | undefined;
            media?: unknown[] | null | undefined;
            image?: string | null | undefined;
            animation_url?: string | null | undefined;
            external_url?: string | null | undefined;
        };
        providerSpecificParams: {
            encryptionKey: string;
        };
    }>>;
    mainContentFocus: z.ZodLiteral<PublicationMainFocus.SHORT_VIDEO>;
}, z.ZodTypeAny, "passthrough">>;
type PublicationMetadataV2 = z.infer<typeof PublicationMetadataV2Schema>;
type PublicationMetadata = PublicationMetadataV1 | PublicationMetadataV2;
/**
 * A union of Publication Metadata v1 ad v2.
 *
 * @example
 * with `parse`:
 * ```ts
 * legacy.PublicationMetadataSchema.parse(valid); // => legacy.PublicationMetadata
 *
 * legacy.PublicationMetadataSchema.parse(invalid); // => throws ZodError
 * ```
 *
 * @example
 * with `safeParse`:
 * ```ts
 * legacy.PublicationMetadataSchema.safeParse(valid);
 * // => { success: true, data: legacy.PublicationMetadata }
 *
 * legacy.PublicationMetadataSchema.safeParse(invalid);
 * // => { success: false, error: ZodError }
 * ```
 */
declare const PublicationMetadataSchema: z.ZodType<PublicationMetadata, z.ZodTypeDef, object>;

export { AccessCondition, AndCondition, AppId, AudioMimeType, CollectCondition, ConditionComparisonOperator, EncryptedFields, EncryptedMedia, EncryptedMediaSchema, EncryptionParams, EncryptionParamsSchema, EoaOwnership, Erc20Ownership, FollowCondition, ImageMimeType, Locale, Markdown, MarketplaceMetadataAttribute, Media, MediaSchema, NftContractType, NftOwnership, OrCondition, ProfileMetadata, ProfileMetadataAttribute, ProfileMetadataAttributeDisplayType, ProfileMetadataSchema, ProfileOwnership, PublicationContentWarning, PublicationMainFocus, PublicationMetadata, PublicationMetadataMedia, PublicationMetadataSchema, PublicationMetadataV1, PublicationMetadataV1Schema, PublicationMetadataV2, PublicationMetadataV2Article, PublicationMetadataV2Audio, PublicationMetadataV2Embed, PublicationMetadataV2Image, PublicationMetadataV2Link, PublicationMetadataV2Schema, PublicationMetadataV2TextOnly, PublicationMetadataV2Video, PublicationMetadataVersion, VideoMimeType };
