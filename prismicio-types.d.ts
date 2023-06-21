// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Header documents */
interface HeaderDocumentData {
  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * Menu field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  menu: prismic.GroupField<Simplify<HeaderDocumentDataMenuItem>>;
}
/**
 * Item in Header → Menu
 *
 */
export interface HeaderDocumentDataMenuItem {
  /**
   * MenuText field in *Header → Menu*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[].menutext
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  menutext: prismic.RichTextField;
  /**
   * MenuLink field in *Header → Menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[].menulink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  menulink: prismic.LinkField;
}
/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, "header", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | HeroSlice
  | DivulgacionSlice
  | InvestigacionSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = never;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = HeaderDocument | HomepageDocument | PageDocument;
/**
 * Primary content in Divulgacion → Primary
 *
 */
interface DivulgacionSliceDefaultPrimary {
  /**
   * Titulo field in *Divulgacion → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: divulgacion.primary.titulo
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  titulo: prismic.RichTextField;
  /**
   * Descripcion field in *Divulgacion → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: divulgacion.primary.descripcion
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  descripcion: prismic.RichTextField;
  /**
   * Tarjeta Imagen field in *Divulgacion → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: divulgacion.primary.tarjeta_imagen
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  tarjeta_imagen: prismic.ImageField<never>;
  /**
   * Tarjeta Texto field in *Divulgacion → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: divulgacion.primary.tarjeta_texto
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tarjeta_texto: prismic.RichTextField;
  /**
   * Titulo Grilla field in *Divulgacion → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: divulgacion.primary.titulo_actividades
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  titulo_actividades: prismic.RichTextField;
}
/**
 * Item in Divulgacion → Items
 *
 */
export interface DivulgacionSliceDefaultItem {
  /**
   * Imagenes Grilla field in *Divulgacion → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: divulgacion.items[].imagenes_actividades
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imagenes_actividades: prismic.ImageField<never>;
}
/**
 * Default variation for Divulgacion Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DivulgacionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<DivulgacionSliceDefaultPrimary>,
  Simplify<DivulgacionSliceDefaultItem>
>;
/**
 * Slice variation for *Divulgacion*
 *
 */
type DivulgacionSliceVariation = DivulgacionSliceDefault;
/**
 * Divulgacion Shared Slice
 *
 * - **API ID**: `divulgacion`
 * - **Description**: `Divulgacion`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type DivulgacionSlice = prismic.SharedSlice<
  "divulgacion",
  DivulgacionSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * TestText field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.testtext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  testtext: prismic.KeyTextField;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
  /**
   * HeroImage field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].heroimage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  heroimage: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Investigacion → Primary
 *
 */
interface InvestigacionSliceDefaultPrimary {
  /**
   * Titulo field in *Investigacion → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: investigacion.primary.titulo
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  titulo: prismic.RichTextField;
  /**
   * Descripcion field in *Investigacion → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: investigacion.primary.descripcion
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  descripcion: prismic.RichTextField;
}
/**
 * Item in Investigacion → Items
 *
 */
export interface InvestigacionSliceDefaultItem {
  /**
   * Tarjeta Imagen field in *Investigacion → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: investigacion.items[].tarjeta_imagen
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  tarjeta_imagen: prismic.ImageField<never>;
  /**
   * Tarjeta Titulo field in *Investigacion → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: investigacion.items[].tarjeta_titulo
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tarjeta_titulo: prismic.RichTextField;
  /**
   * Tarjeta Link field in *Investigacion → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: investigacion.items[].tarjeta_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  tarjeta_link: prismic.LinkField;
}
/**
 * Default variation for Investigacion Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InvestigacionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InvestigacionSliceDefaultPrimary>,
  Simplify<InvestigacionSliceDefaultItem>
>;
/**
 * Slice variation for *Investigacion*
 *
 */
type InvestigacionSliceVariation = InvestigacionSliceDefault;
/**
 * Investigacion Shared Slice
 *
 * - **API ID**: `investigacion`
 * - **Description**: `Investigacion`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InvestigacionSlice = prismic.SharedSlice<
  "investigacion",
  InvestigacionSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HeaderDocumentData,
      HeaderDocumentDataMenuItem,
      HeaderDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      AllDocumentTypes,
      DivulgacionSliceDefaultPrimary,
      DivulgacionSliceDefaultItem,
      DivulgacionSliceDefault,
      DivulgacionSliceVariation,
      DivulgacionSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      InvestigacionSliceDefaultPrimary,
      InvestigacionSliceDefaultItem,
      InvestigacionSliceDefault,
      InvestigacionSliceVariation,
      InvestigacionSlice,
    };
  }
}
