import { E as EncryptableURI, M as MetadataAttribute, a as EncryptableString, b as MetadataAttributeType, U as URI, c as EncryptedString, P as PublicationMetadataCommon, d as PublicationMainFocus, e as EncryptableMarkdown, f as MarketplaceMetadata, S as Signature, g as Markdown, h as MarketplaceMetadataAttribute, i as EncryptableGeoURI, j as PhysicalAddress, k as EncryptableDateTime, A as AppId, l as ShapeCheck, C as ChainId, m as CollectCondition, n as EoaOwnershipCondition, o as ConditionComparisonOperator, N as NetworkAddressDetails, p as Erc20OwnershipCondition, q as NftOwnershipCondition, r as ProfileOwnershipCondition, F as FollowCondition, s as AdvancedContractCondition, t as SimpleCondition, u as AndCondition, O as OrCondition, v as AnyCondition, w as AccessCondition, B as Brand, x as Overwrite, y as Prettify } from './index-f5d7db1f.js';
export { b4 as AccessConditionSchema, b1 as AdvancedContractConditionSchema, aE as Amount, aG as AmountDetails, aF as AmountSchema, b2 as AndConditionSchema, a7 as AppIdSchema, aB as Asset, aC as AssetSchema, z as BooleanAttribute, G as BooleanAttributeSchema, av as ChainIdSchema, b0 as CollectConditionSchema, aV as ConditionType, H as DateAttribute, I as DateAttributeSchema, an as DateTime, D as DistributiveOmit, b8 as EncryptedPaths, _ as EncryptedStringSchema, aT as EncryptionProvider, aZ as EoaOwnershipConditionSchema, aY as Erc20OwnershipConditionSchema, ar as EvmAddress, at as EvmAddressSchema, a$ as FollowConditionSchema, ah as GeoPoint, ai as GeoPointSchema, af as GeoURI, ag as GeoURISchema, R as JSONAttribute, V as JSONAttributeSchema, b5 as LitEncryptionKey, b7 as LitEncryptionKeySchema, b9 as LitEncryptionStrategy, ba as LitEncryptionStrategySchema, X as Locale, Z as LocaleSchema, bd as MarketplaceMetadataAttributeDisplayType, be as MarketplaceMetadataAttributeSchema, bf as MarketplaceMetadataSchema, W as MetadataAttributeSchema, aw as NetworkAddress, ax as NetworkAddressSchema, aU as NftContractType, aX as NftOwnershipConditionSchema, J as NumberAttribute, K as NumberAttributeSchema, b3 as OrConditionSchema, am as PhysicalAddressSchema, aI as ProfileId, aK as ProfileIdSchema, a_ as ProfileOwnershipConditionSchema, aO as PublicationContentWarning, bb as PublicationEncryptionStrategy, bc as PublicationEncryptionStrategySchema, aL as PublicationId, aN as PublicationIdSchema, a9 as SignatureSchema, L as StringAttribute, Q as StringAttributeSchema, a3 as Tag, a5 as TagSchema, ay as TokenId, aA as TokenIdSchema, T as TwoAtLeastArray, aH as amount, aD as asset, ap as datetimeSchema, $ as encryptable, aq as encryptableDateTimeSchema, al as encryptableGeoUriSchema, a2 as encryptableStringSchema, ae as encryptableUriSchema, ak as geoPoint, aj as geoUri, aR as mainContentFocus, ab as markdown, aP as metadataDetailsWith, a0 as nonEmpty, a1 as nonEmptyStringSchema, aS as optionalContentSchema, aQ as publicationWith, aW as refineNftOwnershipCondition, a6 as toAppId, au as toChainId, ao as toDateTime, as as toEvmAddress, b6 as toLitEncryptionKey, Y as toLocale, aa as toMarkdown, aJ as toProfileId, aM as toPublicationId, a8 as toSignature, a4 as toTag, az as toTokenId, ac as toUri, ad as uriSchema } from './index-f5d7db1f.js';
import { z } from 'zod';

/**
 * The supported license types.
 */
declare enum MetadataLicenseType {
    CCO = "CCO",
    CC_BY = "CC BY",
    CC_BY_ND = "CC BY-ND",
    CC_BY_NC = "CC BY-NC",
    TBNL_C_D_PL_Legal = "TBNL-C-D-PL-Legal",
    TBNL_C_DT_PL_Legal = "TBNL-C-DT-PL-Legal",
    TBNL_C_ND_PL_Legal = "TBNL-C-ND-PL-Legal",
    TBNL_C_D_NPL_Legal = "TBNL-C-D-NPL-Legal",
    TBNL_C_DT_NPL_Legal = "TBNL-C-DT-NPL-Legal",
    TBNL_C_DTSA_PL_Legal = "TBNL-C-DTSA-PL-Legal",
    TBNL_C_DTSA_NPL_Legal = "TBNL-C-DTSA-NPL-Legal",
    TBNL_C_ND_NPL_Legal = "TBNL-C-ND-NPL-Legal",
    TBNL_C_D_PL_Ledger = "TBNL-C-D-PL-Ledger",
    TBNL_C_DT_PL_Ledger = "TBNL-C-DT-PL-Ledger",
    TBNL_C_ND_PL_Ledger = "TBNL-C-ND-PL-Ledger",
    TBNL_C_D_NPL_Ledger = "TBNL-C-D-NPL-Ledger",
    TBNL_C_DT_NPL_Ledger = "TBNL-C-DT-NPL-Ledger",
    TBNL_C_DTSA_PL_Ledger = "TBNL-C-DTSA-PL-Ledger",
    TBNL_C_DTSA_NPL_Ledger = "TBNL-C-DTSA-NPL-Ledger",
    TBNL_C_ND_NPL_Ledger = "TBNL-C-ND-NPL-Ledger",
    TBNL_NC_D_PL_Legal = "TBNL-NC-D-PL-Legal",
    TBNL_NC_DT_PL_Legal = "TBNL-NC-DT-PL-Legal",
    TBNL_NC_ND_PL_Legal = "TBNL-NC-ND-PL-Legal",
    TBNL_NC_D_NPL_Legal = "TBNL-NC-D-NPL-Legal",
    TBNL_NC_DT_NPL_Legal = "TBNL-NC-DT-NPL-Legal",
    TBNL_NC_DTSA_PL_Legal = "TBNL-NC-DTSA-PL-Legal",
    TBNL_NC_DTSA_NPL_Legal = "TBNL-NC-DTSA-NPL-Legal",
    TBNL_NC_ND_NPL_Legal = "TBNL-NC-ND-NPL-Legal",
    TBNL_NC_D_PL_Ledger = "TBNL-NC-D-PL-Ledger",
    TBNL_NC_DT_PL_Ledger = "TBNL-NC-DT-PL-Ledger",
    TBNL_NC_ND_PL_Ledger = "TBNL-NC-ND-PL-Ledger",
    TBNL_NC_D_NPL_Ledger = "TBNL-NC-D-NPL-Ledger",
    TBNL_NC_DT_NPL_Ledger = "TBNL-NC-DT-NPL-Ledger",
    TBNL_NC_DTSA_PL_Ledger = "TBNL-NC-DTSA-PL-Ledger",
    TBNL_NC_DTSA_NPL_Ledger = "TBNL-NC-DTSA-NPL-Ledger",
    TBNL_NC_ND_NPL_Ledger = "TBNL-NC-ND-NPL-Ledger"
}
/**
 * @internal
 */
declare const MetadataLicenseTypeSchema: z.ZodNativeEnum<typeof MetadataLicenseType>;

/**
 * The kind of audio media.
 */
declare enum MediaAudioKind {
    MUSIC = "MUSIC",
    PODCAST = "PODCAST",
    AUDIOBOOK = "AUDIOBOOK",
    VOICE_NOTE = "VOICE_NOTE",
    SOUND = "SOUND",
    OTHER = "OTHER"
}
/**
 * Audio mime type.
 */
declare enum MediaAudioMimeType {
    WAV = "audio/wav",
    WAV_VND = "audio/vnd.wave",
    MP3 = "audio/mpeg",
    OGG_AUDIO = "audio/ogg",
    MP4_AUDIO = "audio/mp4",
    AAC = "audio/aac",
    WEBM_AUDIO = "audio/webm",
    FLAC = "audio/flac"
}
type MediaAudio = {
    /**
     * The location of the file.
     */
    item: EncryptableURI;
    /**
     * A bag of attributes that can be used to store any kind
     * of metadata that is not currently supported by the standard.
     */
    attributes?: MetadataAttribute[];
    /**
     * The mime type of the audio.
     */
    type: MediaAudioMimeType;
    /**
     * The cover image for the audio.
     */
    cover?: EncryptableURI;
    /**
     * How long the the audio is in seconds.
     */
    duration?: number;
    /**
     * The license for the audio.
     */
    license?: MetadataLicenseType;
    /**
     * The credits for the audio.
     */
    credits?: EncryptableString;
    /**
     * The name of the artist.
     */
    artist?: EncryptableString;
    /**
     * The genre of the audio.
     */
    genre?: EncryptableString;
    /**
     * The record label for the audio.
     */
    recordLabel?: EncryptableString;
    /**
     * The type of audio.
     */
    kind?: MediaAudioKind;
    /**
     * The lyrics for the audio.
     */
    lyrics?: EncryptableURI;
};
/**
 * @internal
 */
declare const MediaAudioSchema: z.ZodObject<{
    attributes: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.BOOLEAN>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodEnum<["true", "false"]>;
    }, "strip", z.ZodTypeAny, {
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key: string;
    }, {
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.DATE>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.DATE;
        key: string;
    }, {
        value: string;
        type: MetadataAttributeType.DATE;
        key?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.NUMBER>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.NUMBER;
        key: string;
    }, {
        type: MetadataAttributeType.NUMBER;
        key?: unknown;
        value?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.STRING>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.STRING;
        key: string;
    }, {
        type: MetadataAttributeType.STRING;
        key?: unknown;
        value?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.JSON>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.JSON;
        key: string;
    }, {
        type: MetadataAttributeType.JSON;
        key?: unknown;
        value?: unknown;
    }>]>, "many">>;
    item: z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<URI, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, EncryptedString | URI, unknown>;
    type: z.ZodNativeEnum<typeof MediaAudioMimeType>;
    cover: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<URI, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, EncryptedString | URI, unknown>>;
    duration: z.ZodOptional<z.ZodNumber>;
    license: z.ZodOptional<z.ZodNativeEnum<typeof MetadataLicenseType>>;
    credits: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<string, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, string | EncryptedString, unknown>>;
    artist: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<string, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, string | EncryptedString, unknown>>;
    genre: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<string, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, string | EncryptedString, unknown>>;
    recordLabel: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<string, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, string | EncryptedString, unknown>>;
    kind: z.ZodOptional<z.ZodNativeEnum<typeof MediaAudioKind>>;
    lyrics: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<URI, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, EncryptedString | URI, unknown>>;
}, "strip", z.ZodTypeAny, {
    type: MediaAudioMimeType;
    item: (string & {
        __type__: "EncryptedValue";
    }) | (string & {
        __type__: "URI";
    });
    attributes?: ({
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.DATE;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.NUMBER;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.STRING;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.JSON;
        key: string;
    })[] | undefined;
    cover?: EncryptedString | URI | undefined;
    duration?: number | undefined;
    license?: MetadataLicenseType | undefined;
    credits?: string | EncryptedString | undefined;
    artist?: string | EncryptedString | undefined;
    genre?: string | EncryptedString | undefined;
    recordLabel?: string | EncryptedString | undefined;
    kind?: MediaAudioKind | undefined;
    lyrics?: EncryptedString | URI | undefined;
}, {
    type: MediaAudioMimeType;
    attributes?: ({
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key?: unknown;
    } | {
        value: string;
        type: MetadataAttributeType.DATE;
        key?: unknown;
    } | {
        type: MetadataAttributeType.NUMBER;
        key?: unknown;
        value?: unknown;
    } | {
        type: MetadataAttributeType.STRING;
        key?: unknown;
        value?: unknown;
    } | {
        type: MetadataAttributeType.JSON;
        key?: unknown;
        value?: unknown;
    })[] | undefined;
    item?: unknown;
    cover?: unknown;
    duration?: number | undefined;
    license?: MetadataLicenseType | undefined;
    credits?: unknown;
    artist?: unknown;
    genre?: unknown;
    recordLabel?: unknown;
    kind?: MediaAudioKind | undefined;
    lyrics?: unknown;
}>;
/**
 * Image mime type.
 */
declare enum MediaImageMimeType {
    BMP = "image/bmp",
    GIF = "image/gif",
    HEIC = "image/heic",
    JPEG = "image/jpeg",
    PNG = "image/png",
    SVG_XML = "image/svg+xml",
    TIFF = "image/tiff",
    WEBP = "image/webp",
    X_MS_BMP = "image/x-ms-bmp"
}
type MediaImage = {
    /**
     * The location of the file.
     */
    item: EncryptableURI;
    /**
     * A bag of attributes that can be used to store any kind
     * of metadata that is not currently supported by the standard.
     */
    attributes?: MetadataAttribute[];
    /**
     * The mime type of the image.
     */
    type: MediaImageMimeType;
    /**
     * The alt tag for accessibility.
     */
    altTag?: EncryptableString;
    /**
     * The license for the image.
     */
    license?: MetadataLicenseType;
};
/**
 * @internal
 */
declare const MediaImageSchema: z.ZodObject<{
    attributes: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.BOOLEAN>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodEnum<["true", "false"]>;
    }, "strip", z.ZodTypeAny, {
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key: string;
    }, {
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.DATE>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.DATE;
        key: string;
    }, {
        value: string;
        type: MetadataAttributeType.DATE;
        key?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.NUMBER>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.NUMBER;
        key: string;
    }, {
        type: MetadataAttributeType.NUMBER;
        key?: unknown;
        value?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.STRING>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.STRING;
        key: string;
    }, {
        type: MetadataAttributeType.STRING;
        key?: unknown;
        value?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.JSON>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.JSON;
        key: string;
    }, {
        type: MetadataAttributeType.JSON;
        key?: unknown;
        value?: unknown;
    }>]>, "many">>;
    item: z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<URI, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, EncryptedString | URI, unknown>;
    type: z.ZodNativeEnum<typeof MediaImageMimeType>;
    altTag: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<string, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, string | EncryptedString, unknown>>;
    license: z.ZodOptional<z.ZodNativeEnum<typeof MetadataLicenseType>>;
}, "strip", z.ZodTypeAny, {
    type: MediaImageMimeType;
    item: (string & {
        __type__: "EncryptedValue";
    }) | (string & {
        __type__: "URI";
    });
    attributes?: ({
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.DATE;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.NUMBER;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.STRING;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.JSON;
        key: string;
    })[] | undefined;
    altTag?: string | EncryptedString | undefined;
    license?: MetadataLicenseType | undefined;
}, {
    type: MediaImageMimeType;
    attributes?: ({
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key?: unknown;
    } | {
        value: string;
        type: MetadataAttributeType.DATE;
        key?: unknown;
    } | {
        type: MetadataAttributeType.NUMBER;
        key?: unknown;
        value?: unknown;
    } | {
        type: MetadataAttributeType.STRING;
        key?: unknown;
        value?: unknown;
    } | {
        type: MetadataAttributeType.JSON;
        key?: unknown;
        value?: unknown;
    })[] | undefined;
    item?: unknown;
    altTag?: unknown;
    license?: MetadataLicenseType | undefined;
}>;
/**
 * Video mime type.
 */
declare enum MediaVideoMimeType {
    GLTF = "model/gltf+json",
    GLTF_BINARY = "model/gltf-binary",
    M4V = "video/x-m4v",
    MOV = "video/mov",
    MP4 = "video/mp4",
    MPEG = "video/mpeg",
    OGG = "video/ogg",
    OGV = "video/ogv",
    QUICKTIME = "video/quicktime",
    WEBM = "video/webm"
}
type MediaVideo = {
    /**
     * The location of the file.
     */
    item: EncryptableURI;
    /**
     * A bag of attributes that can be used to store any kind
     * of metadata that is not currently supported by the standard.
     */
    attributes?: MetadataAttribute[];
    /**
     * The mime type of the video.
     */
    type: MediaVideoMimeType;
    /**
     * The alt tag for accessibility.
     */
    altTag?: string;
    /**
     * The cover image for the video.
     */
    cover?: EncryptableURI;
    /**
     * How long the the video is in seconds.
     */
    duration?: number;
    /**
     * The license for the video.
     */
    license?: MetadataLicenseType;
};
/**
 * @internal
 */
declare const MediaVideoSchema: z.ZodObject<{
    attributes: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.BOOLEAN>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodEnum<["true", "false"]>;
    }, "strip", z.ZodTypeAny, {
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key: string;
    }, {
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.DATE>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.DATE;
        key: string;
    }, {
        value: string;
        type: MetadataAttributeType.DATE;
        key?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.NUMBER>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.NUMBER;
        key: string;
    }, {
        type: MetadataAttributeType.NUMBER;
        key?: unknown;
        value?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.STRING>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.STRING;
        key: string;
    }, {
        type: MetadataAttributeType.STRING;
        key?: unknown;
        value?: unknown;
    }>, z.ZodObject<{
        type: z.ZodLiteral<MetadataAttributeType.JSON>;
        key: z.ZodType<string, z.ZodTypeDef, unknown>;
        value: z.ZodType<string, z.ZodTypeDef, unknown>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: MetadataAttributeType.JSON;
        key: string;
    }, {
        type: MetadataAttributeType.JSON;
        key?: unknown;
        value?: unknown;
    }>]>, "many">>;
    item: z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<URI, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, EncryptedString | URI, unknown>;
    type: z.ZodNativeEnum<typeof MediaVideoMimeType>;
    altTag: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<string, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, string | EncryptedString, unknown>>;
    cover: z.ZodOptional<z.ZodEffects<z.ZodCatch<z.ZodUnion<readonly [z.ZodType<URI, z.ZodTypeDef, unknown>, z.ZodEffects<z.ZodString, EncryptedString, string>]>>, EncryptedString | URI, unknown>>;
    duration: z.ZodOptional<z.ZodNumber>;
    license: z.ZodOptional<z.ZodNativeEnum<typeof MetadataLicenseType>>;
}, "strip", z.ZodTypeAny, {
    type: MediaVideoMimeType;
    item: (string & {
        __type__: "EncryptedValue";
    }) | (string & {
        __type__: "URI";
    });
    attributes?: ({
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.DATE;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.NUMBER;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.STRING;
        key: string;
    } | {
        value: string;
        type: MetadataAttributeType.JSON;
        key: string;
    })[] | undefined;
    altTag?: string | EncryptedString | undefined;
    cover?: EncryptedString | URI | undefined;
    duration?: number | undefined;
    license?: MetadataLicenseType | undefined;
}, {
    type: MediaVideoMimeType;
    attributes?: ({
        value: "true" | "false";
        type: MetadataAttributeType.BOOLEAN;
        key?: unknown;
    } | {
        value: string;
        type: MetadataAttributeType.DATE;
        key?: unknown;
    } | {
        type: MetadataAttributeType.NUMBER;
        key?: unknown;
        value?: unknown;
    } | {
        type: MetadataAttributeType.STRING;
        key?: unknown;
        value?: unknown;
    } | {
        type: MetadataAttributeType.JSON;
        key?: unknown;
        value?: unknown;
    })[] | undefined;
    item?: unknown;
    altTag?: unknown;
    cover?: unknown;
    duration?: number | undefined;
    license?: MetadataLicenseType | undefined;
}>;
/**
 * Any media type.
 */
type AnyMedia = MediaAudio | MediaImage | MediaVideo;
/**
 * @internal
 */
declare const AnyMediaSchema: z.ZodType<AnyMedia, z.ZodTypeDef, unknown>;

declare const timezones: readonly ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmera", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Buenos_Aires", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Catamarca", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Coral_Harbour", "America/Cordoba", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Jujuy", "America/Juneau", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Mendoza", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santa_Isabel", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Katmandu", "Asia/Khandyga", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Truk", "Pacific/Wake", "Pacific/Wallis"];
/**
 * Timezone ID
 */
type TimezoneId = (typeof timezones)[number];
/**
 * @internal
 */
declare const TimezoneIdSchema: z.ZodEnum<["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmera", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/La_Rioja", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Buenos_Aires", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Catamarca", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Coral_Harbour", "America/Cordoba", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Godthab", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indianapolis", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Jujuy", "America/Juneau", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Louisville", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Mendoza", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nipigon", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Ojinaga", "America/Panama", "America/Pangnirtung", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rainy_River", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santa_Isabel", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Thunder_Bay", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Calcutta", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Katmandu", "Asia/Khandyga", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Rangoon", "Asia/Riyadh", "Asia/Saigon", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faeroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Currie", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kiev", "Europe/Kirov", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Uzhgorod", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zaporozhye", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Easter", "Pacific/Efate", "Pacific/Enderbury", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Johnston", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Ponape", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Truk", "Pacific/Wake", "Pacific/Wallis"]>;

/**
 * A list of all the publication schema ids (past and present).
 */
declare enum PublicationSchemaId {
    THREE_D_LATEST = "https://json-schemas.digiv3rse.xyz/publications/3d/3.0.0.json",
    ARTICLE_LATEST = "https://json-schemas.digiv3rse.xyz/publications/article/3.0.0.json",
    AUDIO_LATEST = "https://json-schemas.digiv3rse.xyz/publications/audio/3.0.0.json",
    CHECKING_IN_LATEST = "https://json-schemas.digiv3rse.xyz/publications/checking-in/3.0.0.json",
    EMBED_LATEST = "https://json-schemas.digiv3rse.xyz/publications/embed/3.0.0.json",
    EVENT_LATEST = "https://json-schemas.digiv3rse.xyz/publications/event/3.0.0.json",
    IMAGE_LATEST = "https://json-schemas.digiv3rse.xyz/publications/image/3.0.0.json",
    LINK_LATEST = "https://json-schemas.digiv3rse.xyz/publications/link/3.0.0.json",
    LIVESTREAM_LATEST = "https://json-schemas.digiv3rse.xyz/publications/livestream/3.0.0.json",
    MINT_LATEST = "https://json-schemas.digiv3rse.xyz/publications/mint/3.0.0.json",
    SPACE_LATEST = "https://json-schemas.digiv3rse.xyz/publications/space/3.0.0.json",
    STORY_LATEST = "https://json-schemas.digiv3rse.xyz/publications/story/3.0.0.json",
    TRANSACTION_LATEST = "https://json-schemas.digiv3rse.xyz/publications/transaction/3.0.0.json",
    TEXT_ONLY_LATEST = "https://json-schemas.digiv3rse.xyz/publications/text-only/3.0.0.json",
    VIDEO_LATEST = "https://json-schemas.digiv3rse.xyz/publications/video/3.0.0.json"
}

/**
 * The 3D format type.
 */
declare enum ThreeDFormat {
    GLTF = "gLTF/GLB",
    FBX = "FBX",
    VRM = "VRM",
    OBJ = "OBJ"
}
/**
 * A 3D asset.
 */
type ThreeDAsset = {
    /**
     * The URI of the 3D asset zip file.
     */
    uri: URI;
    /**
     * The URL of the recommended web based 3D player to use to view the 3D asset.
     */
    playerUrl: URI;
    /**
     * The 3D format of the asset.
     */
    format: ThreeDFormat;
    /**
     * Path in extracted zip. Relative. 3D start point, MUST be 3D file type.
     */
    zipPath?: string;
    /**
     * The license regulating the use of the 3D asset.
     */
    license?: MetadataLicenseType;
};
/**
 * @internal
 */
declare const ThreeDAssetSchema: z.ZodType<ThreeDAsset, z.ZodTypeDef, object>;
type ThreeDMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.THREE_D;
    /**
     * The 3D items for the publication.
     */
    assets: ThreeDAsset[];
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to share a 3D piece of art.
 */
type ThreeDMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.THREE_D_LATEST;
    /**
     * The metadata details.
     */
    digi: ThreeDMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const ThreeDSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.THREE_D_LATEST>;
    digi: z.ZodType<ThreeDMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.THREE_D_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.THREE_D;
        /**
         * The 3D items for the publication.
         */
        assets: ThreeDAsset[];
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.THREE_D_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type ArticleMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.ARTICLE;
    /**
     * Markdown content.
     */
    content: EncryptableMarkdown;
    /**
     * The optional article title.
     */
    title?: string;
    /**
     * Any attachment you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this model an article-like publication (e.g. blog, news, etc.)
 */
type ArticleMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.ARTICLE_LATEST;
    /**
     * The metadata details.
     */
    digi: ArticleMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const ArticleSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.ARTICLE_LATEST>;
    digi: z.ZodType<ArticleMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.ARTICLE_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.ARTICLE;
        /**
         * Markdown content.
         */
        content: EncryptableMarkdown;
        /**
         * The optional article title.
         */
        title?: string | undefined;
        /**
         * Any attachment you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.ARTICLE_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type AudioMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.AUDIO;
    /**
     * The audio.
     */
    audio: MediaAudio;
    /**
     * The optional audio title.
     */
    title?: string;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to model a publication where an audio is the main focus.
 *
 * Use the `digi.attachments` to include more media.
 */
type AudioMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.AUDIO_LATEST;
    /**
     * The metadata details.
     */
    digi: AudioMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const AudioSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.AUDIO_LATEST>;
    digi: z.ZodType<AudioMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.AUDIO_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.AUDIO;
        /**
         * The audio.
         */
        audio: MediaAudio;
        /**
         * The optional audio title.
         */
        title?: string | undefined;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.AUDIO_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type CheckingInMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.CHECKING_IN;
    /**
     * Where you checking in from (free form text).
     */
    location: EncryptableString;
    /**
     * The optional geographic position of the location.
     */
    position?: EncryptableGeoURI;
    /**
     * The optional address of the location.
     */
    address?: PhysicalAddress;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to notify your community that you are checking in from a location.
 */
type CheckingInMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.CHECKING_IN_LATEST;
    /**
     * The metadata details.
     */
    digi: CheckingInMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const CheckingInSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.CHECKING_IN_LATEST>;
    digi: z.ZodType<CheckingInMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.CHECKING_IN_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.CHECKING_IN;
        /**
         * Where you checking in from (free form text).
         */
        location: EncryptableString;
        /**
         * The optional geographic position of the location.
         */
        position?: EncryptableGeoURI | undefined;
        /**
         * The optional address of the location.
         */
        address?: PhysicalAddress | undefined;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.CHECKING_IN_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type EmbedMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.EMBED;
    /**
     * The embed URL.
     */
    embed: EncryptableURI;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to model a publication that embeds a resource such as a micro-app, a game, etc.
 */
type EmbedMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.EMBED_LATEST;
    /**
     * The metadata details.
     */
    digi: EmbedMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const EmbedSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.EMBED_LATEST>;
    digi: z.ZodType<EmbedMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.EMBED_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.EMBED;
        /**
         * The embed URL.
         */
        embed: EncryptableURI;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.EMBED_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

/**
 * An object intended to help with future events scheduling adjustments.
 *
 * @see https://www.w3.org/International/wiki/WorkingWithTimeZones#Working_with_Future_and_Recurring_Events
 */
type SchedulingAdjustments = {
    /**
     * Indicates a reference timezone for the event start and end times.
     * If physical event, you could use the timezone of the event location. If virtual event, the timezone of the event organizer.
     */
    timezoneId: TimezoneId;
    /**
     * Indicates the reference timezone offset with respect to UTC timezone a the time of event creation.
     * The difference in minutes between the reference timezone time and UTC time (e.g. UTC+2 would be -120, UTC-5 would be 300, UTC would be 0).
     */
    timezoneOffset: number;
};
/**
 * @internal
 */
declare const SchedulingAdjustmentsSchema: z.ZodType<SchedulingAdjustments, z.ZodTypeDef, object>;
type EventMetadataDetails = PublicationMetadataCommon & {
    /**
     * The title of the event.
     */
    title?: string;
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.EVENT;
    location: EncryptableURI | EncryptableString;
    /**
     * The geographic position of the event.
     */
    position?: EncryptableGeoURI;
    /**
     * The address of the event.
     */
    address?: PhysicalAddress;
    /**
     * The event start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
     */
    startsAt: EncryptableDateTime;
    /**
     * The event end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
     */
    endsAt: EncryptableDateTime;
    /**
     * Captures extra criteria to recompute correctly future start and end times.
     *
     * @see https://www.w3.org/International/wiki/WorkingWithTimeZones#Working_with_Future_and_Recurring_Events
     */
    schedulingAdjustments?: SchedulingAdjustments;
    /**
     * The links you want to include with it.
     */
    links?: EncryptableURI[];
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to create an event, virtual or physical.
 */
type EventMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.EVENT_LATEST;
    /**
     * The metadata details.
     */
    digi: EventMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const EventSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.EVENT_LATEST>;
    digi: z.ZodType<EventMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.EVENT_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The title of the event.
         */
        title?: string | undefined;
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.EVENT;
        location: EncryptableURI | EncryptableString;
        /**
         * The geographic position of the event.
         */
        position?: EncryptableGeoURI | undefined;
        /**
         * The address of the event.
         */
        address?: PhysicalAddress | undefined;
        /**
         * The event start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
         */
        startsAt: EncryptableDateTime;
        /**
         * The event end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
         */
        endsAt: EncryptableDateTime;
        /**
         * Captures extra criteria to recompute correctly future start and end times.
         *
         * @see https://www.w3.org/International/wiki/WorkingWithTimeZones#Working_with_Future_and_Recurring_Events
         */
        schedulingAdjustments?: SchedulingAdjustments | undefined;
        /**
         * The links you want to include with it.
         */
        links?: EncryptableURI[] | undefined;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.EVENT_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type ImageMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.IMAGE;
    /**
     * The image.
     */
    image: MediaImage;
    /**
     * A title for the image.
     */
    title?: string;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to model a publication where an image is the main focus.
 *
 * Use the `digi.attachments` to include more images.
 */
type ImageMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.IMAGE_LATEST;
    /**
     * The metadata details.
     */
    digi: ImageMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const ImageSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.IMAGE_LATEST>;
    digi: z.ZodType<ImageMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.IMAGE_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.IMAGE;
        /**
         * The image.
         */
        image: MediaImage;
        /**
         * A title for the image.
         */
        title?: string | undefined;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.IMAGE_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type LinkMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.LINK;
    /**
     * The sharing link url.
     */
    sharingLink: EncryptableURI;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to share a link to something you want to share.
 */
type LinkMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.LINK_LATEST;
    /**
     * The metadata details.
     */
    digi: LinkMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const LinkSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.LINK_LATEST>;
    digi: z.ZodType<LinkMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.LINK_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.LINK;
        /**
         * The sharing link url.
         */
        sharingLink: EncryptableURI;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.LINK_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type LiveStreamMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.LIVESTREAM;
    /**
     * The livestream title.
     */
    title?: string;
    /**
     * The stream start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
     */
    startsAt: EncryptableDateTime;
    /**
     * The optional stream end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
     */
    endsAt?: EncryptableDateTime;
    /**
     * Some livestream platforms have the playback url as a separate url.
     * If not your case make sure `liveUrl` and `playbackUrl` are the same.
     */
    playbackUrl: EncryptableURI;
    /**
     * Some livestream platforms have the live url as a separate url.
     * If not your case make sure `liveUrl` and `playbackUrl` are the same.
     */
    liveUrl: EncryptableURI;
    /**
     * The data cannot be changed so you can put in an API endpoint to know if it is still live or not for clients to be able to check.
     *
     * Responses from this endpoint should conform to the following schema:
     *
     * ```json
     * {
     *   "$schema": "http://json-schema.org/draft-07/schema#",
     *   "type": "object",
     *   "properties": {
     *     "isLive": {
     *       "type": "boolean"
     *     }
     *   },
     *   "required": ["isLive"]
     * }
     * ```
     */
    checkLiveAPI?: EncryptableURI;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to notify your community of a livestream event.
 */
type LiveStreamMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.LIVESTREAM_LATEST;
    /**
     * The metadata details.
     */
    digi: LiveStreamMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const LiveStreamSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.LIVESTREAM_LATEST>;
    digi: z.ZodType<LiveStreamMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.LIVESTREAM_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.LIVESTREAM;
        /**
         * The livestream title.
         */
        title?: string | undefined;
        /**
         * The stream start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
         */
        startsAt: EncryptableDateTime;
        /**
         * The optional stream end time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
         */
        endsAt?: EncryptableDateTime | undefined;
        /**
         * Some livestream platforms have the playback url as a separate url.
         * If not your case make sure `liveUrl` and `playbackUrl` are the same.
         */
        playbackUrl: EncryptableURI;
        /**
         * Some livestream platforms have the live url as a separate url.
         * If not your case make sure `liveUrl` and `playbackUrl` are the same.
         */
        liveUrl: EncryptableURI;
        /**
         * The data cannot be changed so you can put in an API endpoint to know if it is still live or not for clients to be able to check.
         *
         * Responses from this endpoint should conform to the following schema:
         *
         * ```json
         * {
         *   "$schema": "http://json-schema.org/draft-07/schema#",
         *   "type": "object",
         *   "properties": {
         *     "isLive": {
         *       "type": "boolean"
         *     }
         *   },
         *   "required": ["isLive"]
         * }
         * ```
         */
        checkLiveAPI?: EncryptableURI | undefined;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.LIVESTREAM_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type MintMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.MINT;
    /**
     * The mint item it can be a URL of the known provider like opensea
     * https://opensea.io/assets/ethereum/0xfaa2471e93bd1cee3b0ab381c242ada8e1d1a759/299
     * or https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626.
     *
     * The DiGi API has an allow list of providers and if the domain does not match it will mark it as failed metadata
     */
    mintLink: EncryptableURI;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * Any attachment you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to share a link to mint an NFT.
 */
type MintMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.MINT_LATEST;
    /**
     * The metadata details.
     */
    digi: MintMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const MintSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.MINT_LATEST>;
    digi: z.ZodType<MintMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.MINT_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.MINT;
        /**
         * The mint item it can be a URL of the known provider like opensea
         * https://opensea.io/assets/ethereum/0xfaa2471e93bd1cee3b0ab381c242ada8e1d1a759/299
         * or https://zora.co/collect/0x9d90669665607f08005cae4a7098143f554c59ef/39626.
         *
         * The DiGi API has an allow list of providers and if the domain does not match it will mark it as failed metadata
         */
        mintLink: EncryptableURI;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * Any attachment you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.MINT_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

declare enum MirrorSchemaId {
    LATEST = "https://json-schemas.digiv3rse.xyz/publications/mirror/1.0.0.json"
}

type MirrorMetadataDetails = {
    /**
     * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
     *
     * Use a UUID if unsure.
     */
    id: string;
    /**
     * The App Id that this publication belongs to.
     */
    appId: AppId;
};
/**
 * A Mirror metadata object.
 */
type MirrorMetadata = ShapeCheck<{
    /**
     * The schema id.
     */
    $schema: MirrorSchemaId.LATEST;
    /**
     * The metadata details.
     */
    digi: MirrorMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
}>;
/**
 * Mirror metadata schema.
 *
 * @category Parse
 *
 * @example
 * with `parse`:
 * ```ts
 * MirrorMetadata.parse(valid); // => MirrorMetadata
 *
 * MirrorMetadata.parse(invalid); // => throws ZodError
 * ```
 *
 * @example
 * with `safeParse`:
 * ```ts
 * MirrorMetadata.safeParse(valid);
 * // => { success: true, data: MirrorMetadata }
 *
 * MirrorMetadata.safeParse(invalid);
 * // => { success: false, error: ZodError }
 * ```
 */
declare const MirrorMetadataSchema: z.ZodType<MirrorMetadata, z.ZodTypeDef, object>;

type SpaceMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.SPACE;
    /**
     * The space title.
     */
    title: string;
    /**
     * The space join link.
     */
    link: EncryptableURI;
    /**
     * The space start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
     */
    startsAt: EncryptableDateTime;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
declare const SpaceMetadataDetailsSchema: z.ZodType<SpaceMetadataDetails, z.ZodTypeDef, object>;
/**
 * Use this to notify your community about a space you are hosting.
 */
type SpaceMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.SPACE_LATEST;
    /**
     * The metadata details.
     */
    digi: SpaceMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const SpaceSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.SPACE_LATEST>;
    digi: z.ZodType<SpaceMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.SPACE_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.SPACE;
        /**
         * The space title.
         */
        title: string;
        /**
         * The space join link.
         */
        link: EncryptableURI;
        /**
         * The space start time (ISO 8601 `YYYY-MM-DDTHH:mm:ss.sssZ`).
         */
        startsAt: EncryptableDateTime;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.SPACE_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type StoryMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.STORY;
    /**
     * The story asset.
     */
    asset: AnyMedia;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
};
/**
 * Use this to model an Instagram-like story.
 */
type StoryMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.STORY_LATEST;
    /**
     * The metadata details.
     */
    digi: StoryMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const StorySchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.STORY_LATEST>;
    digi: z.ZodType<StoryMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.STORY_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.STORY;
        /**
         * The story asset.
         */
        asset: AnyMedia;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.STORY_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type TextOnlyMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.TEXT_ONLY;
    /**
     * The content for the publication as markdown.
     */
    content: EncryptableMarkdown;
};
/**
 * Use this for a text-only publication.
 *
 * Most comments will fall into this category.
 */
type TextOnlyMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.TEXT_ONLY_LATEST;
    /**
     * The metadata details.
     */
    digi: TextOnlyMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const TextOnlySchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.TEXT_ONLY_LATEST>;
    digi: z.ZodType<TextOnlyMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.TEXT_ONLY_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.TEXT_ONLY;
        /**
         * The content for the publication as markdown.
         */
        content: EncryptableMarkdown;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.TEXT_ONLY_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

/**
 * A way to classify the type of transaction.
 */
declare enum MetadataTransactionType {
    ERC721 = "ERC721",
    ERC20 = "ERC20",
    OTHER = "OTHER"
}
type TransactionMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.TRANSACTION;
    /**
     * The transaction hash.
     */
    txHash: EncryptableString;
    /**
     * The type of transaction.
     */
    type: MetadataTransactionType;
    /**
     * The Chain Id.
     */
    chainId: ChainId;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to model a publication where a transaction is the main focus.
 */
type TransactionMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.TRANSACTION_LATEST;
    /**
     * The metadata details.
     */
    digi: TransactionMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const TransactionSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.TRANSACTION_LATEST>;
    digi: z.ZodType<TransactionMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.TRANSACTION_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.TRANSACTION;
        /**
         * The transaction hash.
         */
        txHash: EncryptableString;
        /**
         * The type of transaction.
         */
        type: MetadataTransactionType;
        /**
         * The Chain Id.
         */
        chainId: ChainId;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.TRANSACTION_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

type VideoMetadataDetails = PublicationMetadataCommon & {
    /**
     * The main focus of the publication.
     */
    mainContentFocus: PublicationMainFocus.VIDEO | PublicationMainFocus.SHORT_VIDEO;
    /**
     * The video.
     */
    video: MediaVideo;
    /**
     * The optional video title.
     */
    title?: string;
    /**
     * Optional markdown content.
     */
    content?: EncryptableMarkdown;
    /**
     * The other attachments you want to include with it.
     */
    attachments?: AnyMedia[];
};
/**
 * Use this to model a publication where a video is the main focus.
 *
 * Use the `digi.attachments` to include more media.
 */
type VideoMetadata = MarketplaceMetadata & {
    /**
     * The schema id.
     */
    $schema: PublicationSchemaId.VIDEO_LATEST;
    /**
     * The metadata details.
     */
    digi: VideoMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * @internal
 */
declare const VideoSchema: z.ZodObject<{
    description: z.ZodOptional<z.ZodType<Markdown, z.ZodTypeDef, unknown>>;
    external_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    name: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodType<MarketplaceMetadataAttribute, z.ZodTypeDef, object>, "many">>;
    image: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    animation_url: z.ZodOptional<z.ZodType<URI, z.ZodTypeDef, unknown>>;
    signature: z.ZodOptional<z.ZodType<Signature, z.ZodTypeDef, unknown>>;
    $schema: z.ZodLiteral<PublicationSchemaId.VIDEO_LATEST>;
    digi: z.ZodType<VideoMetadataDetails, z.ZodTypeDef, object>;
}, "strip", z.ZodTypeAny, {
    $schema: PublicationSchemaId.VIDEO_LATEST;
    digi: PublicationMetadataCommon & {
        /**
         * The main focus of the publication.
         */
        mainContentFocus: PublicationMainFocus.VIDEO | PublicationMainFocus.SHORT_VIDEO;
        /**
         * The video.
         */
        video: MediaVideo;
        /**
         * The optional video title.
         */
        title?: string | undefined;
        /**
         * Optional markdown content.
         */
        content?: EncryptableMarkdown | undefined;
        /**
         * The other attachments you want to include with it.
         */
        attachments?: AnyMedia[] | undefined;
    };
    description?: Markdown | undefined;
    external_url?: URI | undefined;
    name?: string | undefined;
    attributes?: MarketplaceMetadataAttribute[] | undefined;
    image?: URI | undefined;
    animation_url?: URI | undefined;
    signature?: Signature | undefined;
}, {
    $schema: PublicationSchemaId.VIDEO_LATEST;
    digi: object;
    description?: unknown;
    external_url?: unknown;
    name?: string | undefined;
    attributes?: object[] | undefined;
    image?: unknown;
    animation_url?: unknown;
    signature?: unknown;
}>;

/**
 * `PublicationMetadata` is a discriminated union of all primary publication metadata.
 *
 * @example
 * Use the `$schema` property to narrow down the type of the metadata:
 * ```ts
 * const metadata: PublicationMetadata = ...
 *
 * if (metadata.$schema === PublicationSchemaId.ARTICLE_LATEST) {
 *   // metadata is ArticleMetadata
 *   metadata.content; // => always string, not undefined
 * }
 * ```
 *
 * @example
 * Use the `$schema` property to determine the type of the metadata in an exhaustive switch statement:
 * ```ts
 * const metadata: PublicationMetadata = ...
 *
 * switch (metadata.$schema) {
 *   case PublicationSchemaId.ARTICLE_LATEST:
 *     // metadata is ArticleMetadata
 *     break;
 *   case PublicationSchemaId.AUDIO_LATEST:
 *     // metadata is AudioMetadata
 *     break;
 *   case PublicationSchemaId.IMAGE_LATEST:
 *     // metadata is ImageMetadata
 *     break;
 *   case PublicationSchemaId.TEXT_ONLY_LATEST:
 *     // metadata is TextOnlyMetadata
 *     break;
 *   // ...
 * }
 * ```
 */
type PublicationMetadata = ShapeCheck<ArticleMetadata | AudioMetadata | CheckingInMetadata | EmbedMetadata | EventMetadata | ImageMetadata | LinkMetadata | LiveStreamMetadata | MintMetadata | SpaceMetadata | TextOnlyMetadata | StoryMetadata | TransactionMetadata | ThreeDMetadata | VideoMetadata>;
/**
 * A union of all publication metadata schemas.
 *
 * @category Parse
 *
 * @example
 * with `parse`:
 * ```ts
 * PublicationMetadataSchema.parse(valid); // => PublicationMetadata
 *
 * PublicationMetadataSchema.parse(invalid); // => throws ZodError
 * ```
 *
 * @example
 * with `safeParse`:
 * ```ts
 * PublicationMetadataSchema.safeParse(valid);
 * // => { success: true, data: PublicationMetadata }
 *
 * PublicationMetadataSchema.safeParse(invalid);
 * // => { success: false, error: ZodError }
 * ```
 */
declare const PublicationMetadataSchema: z.ZodType<PublicationMetadata, z.ZodTypeDef, object>;

type CollectConditionDetails = {
    /**
     * The Publication Id that needs to be collected to fulfill the condition.
     */
    publicationId: string;
    /**
     * If the Publication Id refers to the current publication.
     */
    thisPublication: boolean;
};
/**
 * Creates a Collect condition.
 *
 * @category Helpers
 */
declare function collectCondition(input: CollectConditionDetails): CollectCondition;
type EoaOwnershipConditionDetails = {
    /**
     * The EVM address to verify ownership of.
     */
    address: string;
};
/**
 * Creates an EOA ownership condition.
 *
 * @category Helpers
 */
declare function eoaOwnershipCondition(input: EoaOwnershipConditionDetails): EoaOwnershipCondition;
type Erc20OwnershipConditionDetails = {
    /**
     * The comparison operator to use to compare the ERC-20 token balance.
     */
    condition: ConditionComparisonOperator;
    /**
     * The ERC-20 token contract address details.
     */
    contract: NetworkAddressDetails;
    /**
     * The ERC-20 token decimals (e.g. 18 for GHO)
     */
    decimals: number;
    /**
     * The human readable amount to compare the ERC-20 token balance against using the comparison operator.
     *
     * @example
     * 1.5
     * 42
     * 0.000002
     */
    value: string;
};
/**
 * Creates an ERC-20 token ownership condition.
 *
 * @category Helpers
 * @param input - The ERC-20 token ownership condition details.
 */
declare function erc20OwnershipCondition({ condition, ...others }: Erc20OwnershipConditionDetails): Erc20OwnershipCondition;
type Erc721OwnershipConditionDetails = {
    /**
     * The NFT contract address details.
     */
    contract: NetworkAddressDetails;
    /**
     * The list of token ids to verify ownership of.
     */
    tokenIds?: string[];
};
/**
 * Creates an ERC-721 NFT ownership condition.
 *
 * @category Helpers
 */
declare function erc721OwnershipCondition(input: Erc721OwnershipConditionDetails): NftOwnershipCondition;
type Erc1155OwnershipConditionDetails = {
    /**
     * The NFT contract address details.
     */
    contract: NetworkAddressDetails;
    /**
     * The list of token ids to verify ownership of.
     */
    tokenIds: string[];
};
/**
 * Creates an ERC-1155 NFT ownership condition.
 *
 * @category Helpers
 */
declare function erc1155OwnershipCondition(input: Erc721OwnershipConditionDetails): NftOwnershipCondition;
type ProfileOwnershipConditionDetails = {
    profileId: string;
};
/**
 * Creates a DiGi Profile ownership condition.
 *
 * @category Helpers
 */
declare function profileOwnershipCondition(input: ProfileOwnershipConditionDetails): ProfileOwnershipCondition;
type FollowConditionDetails = {
    follow: string;
};
/**
 * Creates a follow DiGi Profile condition.
 *
 * @category Helpers
 */
declare function followCondition(input: FollowConditionDetails): FollowCondition;
type AdvancedContractConditionDetails = {
    /**
     * The contract information, including the chain id and the EVM address.
     */
    contract: NetworkAddressDetails;
    /**
     * The function name to call. Has to be exactly the same as in the ABI.
     */
    functionName: string;
    /**
     * The function ABI. Has to be in a human-readable string format, which you can convert using the ethers library.
     * See here for more info https://docs.ethers.io/v5/api/utils/abi/fragments/#human-readable-abi
     */
    abi: string;
    /**
     * The parameters to pass to the function. Has to be matching the arguments described in the ABI.
     * In case of tuples and arrays, you have to pass the values as a stringified JSON array.
     */
    params: string[];
    /**
     * The comparison operator to use to compare the result of the function call. In case of integer outputs
     * you can use any comparison operator. In case of boolean outputs, you can only use EQUAL and NOT_EQUAL.
     */
    comparison: ConditionComparisonOperator;
    /**
     * The value to compare the result of the function call against. Can be a boolean or a BigNumber in string format.
     */
    value: string;
};
/**
 * Creates an arbitrary on-chain condition based on the return value
 * of a given contract view function.
 *
 * @category Helpers
 * @experimental This feature is experimental and might change in the future.
 */
declare function advancedContractCondition(input: AdvancedContractConditionDetails): AdvancedContractCondition;
/**
 * Creates an AND condition between two or more conditions.
 *
 * @category Helpers
 */
declare function andCondition<T extends SimpleCondition[]>(criteria: T): AndCondition<T[number]>;
/**
 * Creates an OR condition between two or more conditions.
 *
 * @category Helpers
 */
declare function orCondition<T extends SimpleCondition[]>(criteria: T): OrCondition<T[number]>;
/**
 * Creates the access condition specification for a given publication.
 *
 * @internal
 */
declare function accessCondition(criteria: AnyCondition[]): AccessCondition;

/**
 * @internal
 */
type BrandOf<A> = [A] extends [Brand<unknown, infer R>] ? R : never;
/**
 * @internal
 */
type RecursiveUnbrand<T> = T extends Brand<infer R, BrandOf<T>> ? R : {
    [K in keyof T]: RecursiveUnbrand<T[K]>;
};
/**
 * @internal
 */
type ExtractDiGiSpec<T extends {
    digi: unknown;
}> = T['digi'];
/**
 * @internal
 */
type OmitInferredPublicationFields<T> = Omit<T, 'mainContentFocus'>;
/**
 * @internal
 */
type PublicationDefaults<Details extends ExtractDiGiSpec<PublicationMetadata>> = Overwrite<Details, {
    /**
     * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
     *
     * @defaultValue a UUID
     */
    id?: string;
    /**
     * The language of the publication.
     *
     * It's a locale string in the format of `<language>-<region>` or just `<language>`, where:
     * - `language` is a two-letter ISO 639-1 language code, e.g. `en` or `it`
     * - `region` is a two-letter ISO 3166-1 alpha-2 region code, e.g. `US` or `IT`
     *
     * You can just pass in the language tag if you do not know the region or don't need to be specific.
     *
     * @defaultValue `en`
     */
    locale?: string;
}>;
/**
 * @internal
 */
type InputForPublicationMetadataDetails<T extends PublicationMetadata['digi']> = RecursiveUnbrand<OmitInferredPublicationFields<PublicationDefaults<T>>>;

/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type MirrorDetails = Prettify<RecursiveUnbrand<Omit<MirrorMetadataDetails, 'id'>>>;
/**
 * All {@link MirrorMetadataDetails} fields with:
 * - `id` defaults to a UUID
 */
type MirrorOptions = MirrorDetails & {
    /**
     * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
     *
     * @defaultValue a UUID
     */
    id?: string;
};
/**
 * Creates a valid MirrorMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = mirror({
 *   appId: 'com.example.app',
 * });
 * ```
 */
declare function mirror({ id, ...others }: MirrorOptions): MirrorMetadata;

declare enum ModuleSchemaId {
    LATEST = "https://json-schemas.digiv3rse.xyz/modules/1.0.0.json"
}

/**
 * The metadata standard for DiGi Modules
 */
type ModuleMetadata = {
    /**
     * The name of the module.
     */
    name: string;
    /**
     * The human-friendly title for the module.
     */
    title: string;
    /**
     * Markdown formatted description of the module.
     *
     * It should explain what this module does, how to use it, examples just
     * like you would if you were building an NPM package.
     * The more detail the better to allow dApp to easily integrate it.
     */
    description: Markdown;
    /**
     * List of authors email addresses.
     */
    authors: string[];
    /**
     * The Solidity JSON ABI as JSON-string describing the initialization function calldata.
     *
     * This will be used to encode the calldata for the initialization function.
     *
     * It will also be used by the consumers of this module to decode the initialization
     * calldata so to infer the initialization criteria.
     */
    initializeCalldataABI: string;
    /**
     * The Solidity JSON ABI as JSON-string describing the initialization result data.
     *
     * This will be used by the consumers of this module to decode
     * the result data from the initialization function so to infer the
     * initialization result state.
     */
    initializeResultDataABI?: string;
    /**
     * The Solidity JSON ABI as JSON-string describing the process function calldata.
     *
     * This will be used to encode the calldata for the process function.
     *
     * Some modules might non need to return any initialization result data.
     */
    processCalldataABI: string;
    /**
     * An arbitrary bag of attributes you wish to add to the metadata.
     */
    attributes: MetadataAttribute[];
    /**
     * The schema ID.
     */
    $schema: ModuleSchemaId.LATEST;
};
declare const ModuleMetadataSchema: z.ZodType<ModuleMetadata, z.ZodTypeDef, object>;

/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type ModuleDetails = Prettify<RecursiveUnbrand<Omit<ModuleMetadata, '$schema'>>>;
/**
 * All {@link ModuleMetadata} fields without `$schema` a with:
 * - `attributes` defaults to an empty array
 */
type ModuleOptions = ModuleDetails & {
    /**
     * An arbitrary bag of attributes you wish to add to the metadata.
     */
    attributes?: MetadataAttribute[];
};
/**
 * Creates a valid ModuleMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = module({
 *   name: 'My Open Action',
 *   title: 'This is my Open Action',
 *   description: 'Get ready for the future of social interaction!',
 *   authors: ['awesome-dev@digi.xyz'],
 *   initializeCalldataABI: JSON.stringify([
 *     {
 *       type: 'address',
 *       name: 'address',
 *     },
 *     {
 *       type: 'uint256',
 *       name: 'price',
 *     },
 *   ]),
 *   processCalldataABI: JSON.stringify([
 *     {
 *       type: 'address',
 *       name: 'collector',
 *     },
 *   ]),
 * });
 * ```
 */
declare function module({ attributes, ...others }: ModuleOptions): ModuleMetadata;

declare enum ProfileSchemaId {
    LATEST = "https://json-schemas.digiv3rse.xyz/profile/2.0.0.json"
}

type ProfileMetadataDetails = {
    /**
     * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI. Use a UUID if unsure.
     */
    id: string;
    /**
     * The App Id that this Profile details are relevant for.
     *
     * If omitted the data is considered to be the global Profile data.
     */
    appId?: AppId;
    /**
     * The profile display name.
     */
    name?: string;
    /**
     * The profile bio as markdown.
     */
    bio?: Markdown;
    /**
     * The profile picture.
     */
    picture?: URI;
    /**
     * The profile cover picture.
     */
    coverPicture?: URI;
    /**
     * A bag of attributes that can be used to store any kind of metadata that is not currently supported by the standard.
     * Over time, common attributes will be added to the standard and their usage as arbitrary attributes will be discouraged.
     */
    attributes?: MetadataAttribute[];
};
/**
 * Use this to create Profile metadata objects.
 */
type ProfileMetadata = {
    /**
     * The schema id.
     */
    $schema: ProfileSchemaId.LATEST;
    /**
     * The metadata details.
     */
    digi: ProfileMetadataDetails;
    /**
     * A cryptographic signature of the `digi` data.
     *
     * @experimental DO NOT use yet
     */
    signature?: Signature;
};
/**
 * Profile Metadata schema.
 *
 * @category Parse
 *
 * @example
 * with `parse`:
 * ```ts
 * ProfileMetadataSchema.parse(valid); // => ProfileMetadata
 *
 * ProfileMetadataSchema.parse(invalid); // => throws ZodError
 * ```
 *
 * @example
 * with `safeParse`:
 * ```ts
 * ProfileMetadataSchema.safeParse(valid);
 * // => { success: true, data: ProfileMetadata }
 *
 * ProfileMetadataSchema.safeParse(invalid);
 * // => { success: false, error: ZodError }
 * ```
 */
declare const ProfileMetadataSchema: z.ZodType<ProfileMetadata, z.ZodTypeDef, object>;

/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type ProfileDetails = Prettify<RecursiveUnbrand<Omit<ProfileMetadataDetails, 'id'>>>;
/**
 * All {@link ProfileMetadataDetails} fields with:
 */
type ProfileOptions = ProfileDetails & {
    /**
     * A unique identifier that in storages like IPFS ensures the uniqueness of the metadata URI.
     *
     * @defaultValue a UUID
     */
    id?: string;
};
/**
 * Creates a valid ProfileMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * Global profile (no `appId`):
 * ```ts
 * const metadata = profile({
 *   name: 'John Doe',
 *   bio: `
 *   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
 *
 *   - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *   - Donec a diam lectus.
 *   `,
 * });
 * ```
 *
 * @example
 * App specific profile (with `appId`):
 * ```ts
 * const metadata = profile({
 *   appId: 'com.example.app',
 *   name: 'John Doe',
 * });
 * ```
 *
 * @example
 * With attributes:
 * ```ts
 * const metadata = profile({
 *   name: 'John Doe',
 *   picture: 'https://example.com/picture.png',
 *   attributes: [
 *     {
 *       key: 'twitter',
 *       type: MetadataAttributeType.STRING,
 *       value: 'https://twitter.com/johndoe',
 *     },
 *     {
 *       key: 'dob',
 *       type: MetadataAttributeType.DATE,
 *       value: '1990-01-01T00:00:00Z',
 *     },
 *     {
 *       key: 'enabled',
 *       type: MetadataAttributeType.BOOLEAN,
 *       value: 'true',
 *     },
 *     {
 *       key: 'height',
 *       type: MetadataAttributeType.NUMBER,
 *       value: '1.8',
 *     },
 *     {
 *       key: 'settings',
 *       type: MetadataAttributeType.JSON,
 *       value: '{"theme": "dark"}',
 *     },
 *   ],
 * });
 * ```
 */
declare function profile({ id, ...others }: ProfileOptions): ProfileMetadata;

/**
 * The default locale used by the builder helpers.
 */
declare const DEFAULT_LOCALE = "en";
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docsRemarks MUST stay very @private to produce usable docs
 */
type MarketplaceDetails = RecursiveUnbrand<MarketplaceMetadata>;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docsRemarks MUST stay very @private to produce usable docs
 */
type ArticleDetails = InputForPublicationMetadataDetails<ArticleMetadataDetails>;
/**
 * All {@link ArticleMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.ARTICLE_LATEST`
 */
type ArticleOptions = ArticleDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid ArticleMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = article({
 *   title: 'Great Question'
 *   content: `
 *     ## Heading
 *
 *     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.
 *
 *     ## Question
 *
 *     What is the answer to life, the universe and everything?
 *
 *     ## Answer
 *
 *     42
 *
 *     ![The answer](https://example.com/answer.png)
 *   `,
 *   tags: ['question', '42'],
 * });
 * ```
 */
declare function article({ marketplace, locale, id, ...others }: ArticleOptions): ArticleMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docsRemarks MUST stay very @private to produce usable docs
 */
type AudioDetails = InputForPublicationMetadataDetails<AudioMetadataDetails>;
/**
 * All {@link AudioMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.AUDIO_LATEST`
 */
type AudioOptions = AudioDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid AudioMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * Single track:
 * ```ts
 * const metadata = audio({
 *   title: 'Great song!',
 *   audio: {
 *     item: 'https://example.com/song.mp3',
 *     type: MediaAudioMimeType.MP3,
 *     artist: 'John Doe',
 *     cover: 'https://example.com/cover.png',
 *   },
 * });
 * ```
 *
 * @example
 * Album:
 * ```ts
 * const metadata = audio({
 *   title: 'Great song!',
 *   audio: {
 *     item: 'https://example.com/sample.mp3',
 *     type: MediaAudioMimeType.MP3,
 *     duration: 60,
 *     artist: 'John Doe',
 *     cover: 'https://example.com/cover.png',
 *   },
 *   attachments: [
 *     {
 *       item: 'https://example.com/song-1.mp3',
 *       type: MediaAudioMimeType.MP3,
 *       duration: 234,
 *     },
 *     {
 *       item: 'https://example.com/song-2.mp3',
 *       type: MediaAudioMimeType.MP3,
 *       duration: 345,
 *     },
 *   ],
 * });
 * ```
 */
declare function audio({ marketplace, locale, id, ...others }: AudioOptions): AudioMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docsRemarks MUST stay very @private to produce usable docs
 */
type CheckingInDetails = InputForPublicationMetadataDetails<CheckingInMetadataDetails>;
/**
 * All {@link CheckingInMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.CHECKING_IN_LATEST`
 */
type CheckingInOptions = CheckingInDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid CheckingInMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * With GPS coordinates:
 * ```ts
 * const metadata = checkingIn({
 *   location: 'The Moon',
 *   position: geoUri({
 *     lat: 40.6892,
 *     lng: -74.0444,
 *   }),
 * });
 * ```
 * See {@link geoUri} for more details.
 *
 * @example
 * With a physical address:
 * ```ts
 * const metadata = checkingIn({
 *   location: 'The Moon',
 *   address: {
 *     streetAddress: '1st Street',
 *     locality: 'New York',
 *     region: 'NY',
 *     postalCode: '10001',
 *     country: 'US',
 *   },
 * });
 * ```
 */
declare function checkingIn({ marketplace, locale, id, ...others }: CheckingInOptions): CheckingInMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type EmbedDetails = InputForPublicationMetadataDetails<EmbedMetadataDetails>;
/**
 * All {@link EmbedMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.EMBED_LATEST`
 */
type EmbedOptions = EmbedDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid EmbedMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = embed({
 *   embed: 'https://example.com/embed.html',
 * });
 * ```
 */
declare function embed({ marketplace, locale, id, ...others }: EmbedOptions): EmbedMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type EventDetails = InputForPublicationMetadataDetails<EventMetadataDetails>;
/**
 * All {@link EventMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.EVENT_LATEST`
 */
type EventOptions = EventDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid EventMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * With GPS coordinates:
 * ```ts
 * const metadata = event({
 *   location: 'The Moon',
 *   position: geoUri({
 *     lat: 40.6892,
 *     lng: -74.0444,
 *   }),
 *   startsAt: '2028-10-01T00:00:00Z',
 *   endsAt: '2028-10-01T01:00:00Z',
 *   links: ['https://example.com/tickets.html'],
 * });
 * ```
 *
 * @example
 * With a physical address:
 * ```ts
 * const metadata = event({
 *   location: 'The Moon',
 *   address: {
 *     streetAddress: '1st Street',
 *     locality: 'New York',
 *     region: 'NY',
 *     postalCode: '10001',
 *     country: 'US',
 *   },
 *   startsAt: '2028-10-01T00:00:00Z',
 *   endsAt: '2028-10-01T01:00:00Z',
 * });
 * ```
 */
declare function event({ marketplace, locale, id, ...others }: EventOptions): EventMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type ImageDetails = InputForPublicationMetadataDetails<ImageMetadataDetails>;
/**
 * All {@link ImageMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.IMAGE_LATEST`
 */
type ImageOptions = ImageDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid ImageMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * Single image:
 *
 * ```ts
 * const metadata = image({
 *   title: 'Touch grass',
 *   image: {
 *     item: 'https://example.com/image.png',
 *     type: MediaImageMimeType.PNG,
 *     altTag: 'Me touching grass',
 *     license: MetadataLicenseType.CCO,
 *   },
 * });
 * ```
 *
 * @example
 * A gallery:
 * ```ts
 * const metadata = image({
 *   title: 'Touch grass',
 *   image: {
 *     item: 'https://example.com/cover.png',
 *     type: MediaImageMimeType.PNG,
 *     altTag: 'A collage of me touching grass',
 *     license: MetadataLicenseType.CCO,
 *   },
 *   attachments: [
 *     {
 *       item: 'https://example.com/image-1.png',
 *       type: MediaImageMimeType.PNG,
 *       license: MetadataLicenseType.CC_BY_NC,
 *       altTag: 'Me touching a tree',
 *     },
 *     {
 *       item: 'https://example.com/image-2.png',
 *       type: MediaImageMimeType.PNG,
 *       license: MetadataLicenseType.CC_BY_NC,
 *       altTag: 'The tree touching me',
 *     },
 *   ],
 * });
 * ```
 */
declare function image({ marketplace, locale, id, ...others }: ImageOptions): ImageMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type LinkDetails = InputForPublicationMetadataDetails<LinkMetadataDetails>;
/**
 * All {@link LinkMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.LINK_LATEST`
 */
type LinkOptions = LinkDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid LinkMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = link({
 *   sharingLink: 'https://example.com/embed.html',
 *   content: 'Check out this cool website!',
 * });
 * ```
 */
declare function link({ marketplace, locale, id, ...others }: LinkOptions): LinkMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type LiveStreamDetails = InputForPublicationMetadataDetails<LiveStreamMetadataDetails>;
/**
 * All {@link LiveStreamMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.LIVESTREAM_LATEST`
 */
type LiveStreamOptions = LiveStreamDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid LivestreamMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = liveStream({
 *   title: 'Live stream #1',
 *   liveUrl: 'https://example.com/live.html',
 *   playbackUrl: 'https://example.com/playback.html',
 *   startsAt: '2028-10-01T00:00:00Z',
 * });
 * ```
 */
declare function liveStream({ marketplace, locale, id, ...others }: LiveStreamOptions): LiveStreamMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type MintDetails = InputForPublicationMetadataDetails<MintMetadataDetails>;
/**
 * All {@link MintMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.MINT_LATEST`
 */
type MintOptions = MintDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid MintMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = mint({
 *   content: 'Check out this NFT!',
 *   mintLink:
 *     'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/1234567890',
 * });
 * ```
 */
declare function mint({ marketplace, locale, id, ...others }: MintOptions): MintMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type SpaceDetails = InputForPublicationMetadataDetails<SpaceMetadataDetails>;
/**
 * All {@link SpaceMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.SPACE_LATEST`
 */
type SpaceOptions = SpaceDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid SpaceMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = space({
 *   title: 'Space #1',
 *   link: 'https://example.com/space.html',
 *   startsAt: '2028-10-01T00:00:00Z',
 * });
 * ```
 */
declare function space({ marketplace, locale, id, ...others }: SpaceOptions): SpaceMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type StoryDetails = InputForPublicationMetadataDetails<StoryMetadataDetails>;
/**
 * All {@link StoryMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.STORY_LATEST`
 */
type StoryOptions = StoryDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid StoryMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = story({
 *   asset: {
 *     item: 'https://example.com/story.mp4',
 *     type: MediaVideoMimeType.MP4,
 *     cover: 'https://example.com/thumbnail.png',
 *     duration: 123,
 *     altTag: 'The story of my life',
 *   },
 * });
 * ```
 */
declare function story({ marketplace, locale, id, ...others }: StoryOptions): StoryMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type TextOnlyDetails = InputForPublicationMetadataDetails<TextOnlyMetadataDetails>;
/**
 * All {@link TextOnlyMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.TEXT_ONLY_LATEST`
 */
type TextOnlyOptions = TextOnlyDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid TextOnlyMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = textOnly({
 *   content: `Nice question!`,
 * });
 * ```
 */
declare function textOnly({ marketplace, locale, id, ...others }: TextOnlyOptions): TextOnlyMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type ThreeDDetails = InputForPublicationMetadataDetails<ThreeDMetadataDetails>;
/**
 * All {@link ThreeDMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.THREE_D_LATEST`
 */
type ThreeDOptions = ThreeDDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid ThreeDMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = threeD({
 *   content: 'Check out this 3D model!',
 *   assets: [
 *     {
 *       format: ThreeDFormat.VRM,
 *       playerUrl: 'https://example.com/player.html',
 *       uri: 'https://example.com/model.zip',
 *       zipPath: 'foo/model.vrm',
 *     },
 *   ],
 *   tags: ['3d', 'vrm'],
 * });
 * ```
 */
declare function threeD({ marketplace, locale, id, ...others }: ThreeDOptions): ThreeDMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type TransactionDetails = InputForPublicationMetadataDetails<TransactionMetadataDetails>;
/**
 * All {@link TransactionMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.TRANSACTION_LATEST`
 */
type TransactionOptions = TransactionDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid TransactionMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = transaction({
 *   chainId: 1,
 *   txHash: '0x1234567890',
 *   content: 'Check out this transaction!',
 *   type: MetadataTransactionType.ERC20,
 * });
 * ```
 */
declare function transaction({ marketplace, locale, id, ...others }: TransactionOptions): TransactionMetadata;
/**
 * @private
 * @privateRemarks MUST stay very @private to produce usable docs
 */
type VideoDetails = InputForPublicationMetadataDetails<VideoMetadataDetails>;
/**
 * All {@link VideoMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.VIDEO_LATEST`
 */
type VideoOptions = VideoDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid VideoMetadata.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * Single video:
 * ```ts
 * const metadata = video({
 *   title: 'Great video!',
 *   video: {
 *     item: 'https://example.com/video.mp4',
 *     type: MediaVideoMimeType.MP4,
 *     cover: 'https://example.com/thumbnail.png',
 *     duration: 123,
 *     altTag: 'The video of my life',
 *     license: MetadataLicenseType.CCO,
 *   },
 *   content: `
 *   In this video I will show you how to make a great video.
 *
 *   And maybe I will show you how to make a great video about making a great video.
 *   `
 * });
 * ```
 *
 * @example
 * Video with attachments:
 * ```ts
 * const metadata = video({
 *   title: 'Great video!',
 *   video: {
 *     item: 'https://example.com/video.mp4',
 *     type: MediaVideoMimeType.MP4,
 *     cover: 'https://example.com/thumbnail.png',
 *     duration: 123,
 *     altTag: 'The video of my life',
 *     license: MetadataLicenseType.CCO,
 *   },
 *   attachments: [
 *     {
 *       item: 'https://example.com/soundtrack.mp3',
 *       type: MediaAudioMimeType.MP3,
 *       license: MetadataLicenseType.CCO,
 *     }
 *   ]
 * });
 * ```
 */
declare function video({ marketplace, locale, id, ...others }: VideoOptions): VideoMetadata;
/**
 * All {@link VideoMetadataDetails} fields with:
 * - `id` defaults to a UUID
 * - `locale` defaults to `en`
 * - `mainContentFocus` automatically set to `PublicationSchemaId.SHORT_VIDEO`
 */
type ShortVideoOptions = VideoDetails & {
    /**
     * All the {@link MarketplaceMetadata} fields.
     */
    marketplace?: MarketplaceDetails;
};
/**
 * Creates a valid VideoMetadata for a short.
 *
 * @category Compose
 * @param input - Use your IDE suggestions for an enhanced development experience
 *
 * @example
 * ```ts
 * const metadata = video({
 *   title: 'Great video!',
 *   video: {
 *     item: 'https://example.com/video.mp4',
 *     type: MediaVideoMimeType.MP4,
 *     cover: 'https://example.com/thumbnail.png',
 *     duration: 123,
 *     altTag: 'The video of my life',
 *     license: MetadataLicenseType.CCO,
 *   }
 * });
 * ```
 */
declare function shortVideo({ marketplace, locale, id, ...others }: ShortVideoOptions): VideoMetadata;

/**
 * An error that occurs when an object does not match the expected shape.
 */
declare class ValidationError extends Error {
    name: "ValidationError";
}

/**
 * @internal
 */
declare const SchemasRoot = "https://json-schemas.digiv3rse.xyz";

/**
 * Helper to extracts the version from the schema id of a metadata object.
 *
 * Most users will not need to use this function directly.
 *
 * @category Helpers
 * @experimental This function is experimental and may change or be removed in future versions.
 *
 * @example
 * Extract the version of a profile metadata object:
 * ```ts
 * const metadata = await ProfileMetadataSchema.parse(valid);
 *
 * const version = extractVersion(metadata); // '2.0.0'
 * ```
 *
 * @example
 * Extract the version of a mirror metadata object:
 * ```ts
 * const metadata = await MirrorMetadataSchema.parse(valid);
 *
 * const version = extractVersion(metadata); // '1.0.0'
 * ```
 *
 * @example
 * Extract the version of a publication metadata object:
 * ```ts
 * const metadata = await PublicationMetadataSchema.parse(valid);
 *
 * const version = extractVersion(metadata); // '3.0.0'
 * ```
 */
declare function extractVersion(metadata: MirrorMetadata | ProfileMetadata | PublicationMetadata): string;

/**
 * Formats a Zod parsing error into a human-readable string.
 *
 * The formatting is tailored to the DiGiV3rse Protocol Metadata use case. It may not be suitable for other use cases.
 *
 * @category Helpers
 *
 * @example
 * ```ts
 * const result = PublicationMetadataSchema.safeParse(invalid);
 *
 * if (!result.success) {
 *   throw new Error(formatZodError(result.error));
 * }
 * ```
 */
declare function formatZodError(zodError: z.ZodError): string;

export { AccessCondition, AdvancedContractCondition, AdvancedContractConditionDetails, AndCondition, AnyCondition, AnyMedia, AnyMediaSchema, AppId, ArticleMetadata, ArticleMetadataDetails, ArticleOptions, ArticleSchema, AudioMetadata, AudioMetadataDetails, AudioOptions, AudioSchema, Brand, ChainId, CheckingInMetadata, CheckingInMetadataDetails, CheckingInOptions, CheckingInSchema, CollectCondition, CollectConditionDetails, ConditionComparisonOperator, DEFAULT_LOCALE, EmbedMetadata, EmbedMetadataDetails, EmbedOptions, EmbedSchema, EncryptableDateTime, EncryptableGeoURI, EncryptableMarkdown, EncryptableString, EncryptableURI, EncryptedString, EoaOwnershipCondition, EoaOwnershipConditionDetails, Erc1155OwnershipConditionDetails, Erc20OwnershipCondition, Erc20OwnershipConditionDetails, Erc721OwnershipConditionDetails, EventMetadata, EventMetadataDetails, EventOptions, EventSchema, FollowCondition, FollowConditionDetails, ImageMetadata, ImageMetadataDetails, ImageOptions, ImageSchema, LinkMetadata, LinkMetadataDetails, LinkOptions, LinkSchema, LiveStreamMetadata, LiveStreamMetadataDetails, LiveStreamOptions, LiveStreamSchema, Markdown, MarketplaceMetadata, MarketplaceMetadataAttribute, MediaAudio, MediaAudioKind, MediaAudioMimeType, MediaAudioSchema, MediaImage, MediaImageMimeType, MediaImageSchema, MediaVideo, MediaVideoMimeType, MediaVideoSchema, MetadataAttribute, MetadataAttributeType, MetadataLicenseType, MetadataLicenseTypeSchema, MetadataTransactionType, MintMetadata, MintMetadataDetails, MintOptions, MintSchema, MirrorMetadata, MirrorMetadataDetails, MirrorMetadataSchema, MirrorOptions, MirrorSchemaId, ModuleMetadata, ModuleMetadataSchema, ModuleOptions, ModuleSchemaId, NetworkAddressDetails, NftOwnershipCondition, OrCondition, Overwrite, PhysicalAddress, Prettify, ProfileMetadata, ProfileMetadataDetails, ProfileMetadataSchema, ProfileOptions, ProfileOwnershipCondition, ProfileOwnershipConditionDetails, ProfileSchemaId, PublicationMainFocus, PublicationMetadata, PublicationMetadataCommon, PublicationMetadataSchema, PublicationSchemaId, SchedulingAdjustments, SchedulingAdjustmentsSchema, SchemasRoot, ShortVideoOptions, Signature, SimpleCondition, SpaceMetadata, SpaceMetadataDetails, SpaceMetadataDetailsSchema, SpaceOptions, SpaceSchema, StoryMetadata, StoryMetadataDetails, StoryOptions, StorySchema, TextOnlyMetadata, TextOnlyMetadataDetails, TextOnlyOptions, TextOnlySchema, ThreeDAsset, ThreeDAssetSchema, ThreeDFormat, ThreeDMetadata, ThreeDMetadataDetails, ThreeDOptions, ThreeDSchema, TimezoneId, TimezoneIdSchema, TransactionMetadata, TransactionMetadataDetails, TransactionOptions, TransactionSchema, URI, ValidationError, VideoMetadata, VideoMetadataDetails, VideoOptions, VideoSchema, accessCondition, advancedContractCondition, andCondition, article, audio, checkingIn, collectCondition, embed, eoaOwnershipCondition, erc1155OwnershipCondition, erc20OwnershipCondition, erc721OwnershipCondition, event, extractVersion, followCondition, formatZodError, image, link, liveStream, mint, mirror, module, orCondition, profile, profileOwnershipCondition, shortVideo, space, story, textOnly, threeD, timezones, transaction, video };
