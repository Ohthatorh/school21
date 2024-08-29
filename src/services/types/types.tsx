import { StaticImageData } from "next/image";
import { CSSProperties, FormEvent, ReactElement } from "react";

export interface IParams {
  params: {
    [N: string]: string;
  };
  searchParams: {
    [N: string]: string;
  };
}

export interface IIconComponent {
  className?: string;
  isActive?: boolean;
  fill?: string | false;
  stroke?: string;
  code?: string;
  name?: string;
  ticket?: string;
  size?: number;
}

export interface IModalComponent {
  children: ReactElement;
  className?: string;
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  isLoading?: boolean;
  goBack?: boolean;
  closeColor?: string;
}

export interface IGiveawayInfo {
  id: string;
  name: string;
  code: string;
  description: string;
  description_type: string;
  sort: string;
  uf_start_date: string;
  uf_end_date: string;
  uf_count_user: null;
  book:
    | {
        number: string;
      }
    | false;
  uf_product: {
    count: number;
    items: ICard[];
  };
}

export interface IPopup {
  isOpen?: boolean;
  onClose: () => void;
  warehouse?: number;
  store?: ICardStore[];
  category?: string | boolean;
  title?: string;
  text?: string;
  action?: () => void;
  id?: string;
  company?: string;
}

export type TModalCloseComponent = Omit<IModalComponent, "children" | "title">;

export type TModalOverlayComponent = Omit<
  IModalComponent,
  "children" | "title"
>;

export type TModalHeaderComponent = Omit<IModalComponent, "children">;

export interface IInputComponent {
  id: string;
  type?: string;
  className?: string;
  classNameWrap?: string;
  label: string;
  length?: number;
  required?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  icon?: ReactElement;
  ref?: any;
  children?: ReactElement;
}

export interface IButtonComponent {
  id?: string;
  children: ReactElement;
  className?: string;
  onClick?: (arg?: any) => void | any;
  type?: "button" | "submit" | "reset" | string;
  disabled?: boolean;
  active?: boolean;
  ref?: any;
  [key: string]: any;
}

export interface IVideoComponent {
  name: string;
  pic: StaticImageData;
  youtube: string;
}

export interface IDate {
  date: string;
  icon?: boolean;
  className?: string;
}

export interface ICrumb {
  text: string;
  link: string;
  isLast: boolean;
  index?: string;
  code?: string;
}

export interface IBreadcrumbs {
  breadcrumbs: ICrumb[];
}

export interface IBlogItem {
  id: string | number;
  name: string;
  date: string;
  description: string;
  code: string;
  tag: string;
  pic: string;
  youtube: string;
  is_article: string;
}

export interface IBlogItemMini {
  blog: IBlogItem;
  className?: string;
  visualProps?: string;
}

export interface IBlogSwiper {
  blogs: Array<IBlogItem>;
}

export interface IAccordionComponent {
  name: string;
  children: ReactElement;
}

export interface IAccordionItem {
  title: string;
  children: ReactElement;
}

export interface ISwiperComponent {
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  autoplay?: boolean;
  speed?: number;
  loop?: boolean;
  allowTouchMove?: boolean;
  delay?: number;
  disableOnInteraction?: boolean;
  children: ReactElement[];
}

export interface IHoverImage {
  hoveredImage: StaticImageData;
  image: StaticImageData;
  alt: string;
}

export interface IIconicItem {
  text: string;
  icon: StaticImageData;
}

export type TRequest = any;

export interface IVacancy {
  city: string;
  conditions: string;
  employment: string;
  experience: string;
  id: string;
  name: string;
  requirements: string;
  responsibilities: string;
  salary: string;
  shedule: string;
  urlvacancy: string;
}

export interface IVacancies {
  vacancies: IVacancy[];
  id: string;
}

export interface IContactsIconicItem {
  title: string;
  text: string;
  link: string;
  textLink: string;
  img: StaticImageData;
  onClick?: () => void;
}

interface IItemsShop {
  id: number;
  title: string;
  value: string;
  phone: string;
  commission: boolean;
  tradein: boolean;
  poroh: boolean;
  warranty: boolean;
  schedule: string;
  schedule_eng: string;
  ya_url_reviews: string | null;
  address: string;
  gps_n: string;
  gps_s: string;
  sort: string;
  items: Array<any>;
}

export interface IShop {
  title: string;
  value: string;
  phone: string;
  schedule: string;
  address: string;
  gps_n: string;
  gps_s: string;
  sort: string;
  items: Array<IItemsShop>;
  img?: string[];
  quantity?: string | number;
}

export interface IStore {
  lat: string;
  lon: string;
  name: string;
  items: IShop[];
}

export interface ICatalog {
  catalog: ICatalogMiniItem[];
}

export interface ICatalogMiniItem {
  id: string;
  name: string;
  code: string;
  depth_level: string;
  iblock_section_id: string | null;
  picture: string;
  sort: string;
  depths: { [key: string]: any };
}

export interface ILabel {
  text: string;
  label: string;
}

export interface ICardComponentLabels {
  labels: ICardLabels;
  isLicense: boolean;
  discount_percent: number;
}

export interface ICardArticle {
  productCode?: string;
}

export interface ICardPrice {
  price: number;
  priceDiscount: number;
}

export interface ICardStore {
  name: string;
  code: string;
  amount: number;
}

export interface ICardDelivery {
  isLicense: boolean;
  available: number;
  store: ICardStore[];
  quantity: number;
}

export interface ICard {
  comission: boolean;
  name: string;
  code: string;
  id: number;
  GUID: string;
  vendor_code: string;
  description: string;
  gold_warranty: boolean;
  available: number;
  quantity: number;
  breadcrumb: IBreadcrumb[];
  groups: string[];
  tree_groups: string[];
  prev_pic: string;
  sort: number;
  price_discount: number;
  price: number;
  discount_percent: number;
  labels: ICardLabels;
  properties: ICardProperty[];
  more_pic: string[];
  is_license: boolean;
  reviews_stars: string | number;
  store: ICardStore[];
  reviews: ICardReview[];
  cml2_traits: {
    value: string | number;
  };
  sizes: ICardSize[];
  clothes: boolean;
  shoes: boolean;
  is_preorder: boolean;
  is_bullet: any;
  diff_pack?: number;
  more_photo?: string[];
  preview_picture: string;
  city?: string | false;
  date_create?: string;
  correct_filters?: string[] | [] | false;
  delivery?: ICardDelivery | boolean;
}

export interface ICardSize {
  id: string;
  is_available: boolean;
  razmer: string;
  sort: number;
}

export interface IBreadcrumb {
  code: string;
  name: string;
}

export interface ICardLabels {
  new: string;
  bestseller: string;
  discount: string;
  spec: string;
  delivery: string;
}

export interface ICardProperty {
  name: string;
  code: string;
  value: ICardPropertyValue;
}

export interface ICardPropertyValue {
  code: string;
  name: string;
}

export interface ICardReview {
  date: string;
  author: string;
  stars: string;
  text: string;
  advantages: string;
  flaws: string;
  answer_store: string;
  picture: string[];
}

export interface ICatalogItem {
  id: string;
  name: string;
  code: string;
  depth_level: string;
  iblock_section_id: string | null;
  picture: string;
  sort: string;
  depths: { [key: string]: ICatalogChild };
}

export type ICatalogChild = Omit<ICatalogItem, "depths">;

export type TCardStats = Pick<
  ICard,
  "description" | "properties" | "breadcrumb"
>;

export interface ICardMini {
  id: number;
  name: string;
  preview_picture: string;
  property_is_available_value: string;
  property_is_available_value_id: string;
  labels: {
    bestseller: string;
    discount: string;
    new: string;
    spec: string;
    delivery: string;
  };
  diff_pack?: {
    value: string;
  };
  available: boolean;
  price_discount: number;
  price: number;
  reviews: number;
  discount_percent: number;
  comission: boolean;
  product_license?: boolean;
  not_delivery?: string[];
  [key: string]: string | number | string[] | boolean | undefined;
}

export interface ICheckbox {
  text: string;
  checked: boolean;
  value: string;
  className?: string;
  onClick?: any;
  style?: CSSProperties;
  filter?: string;
  name: string;
  href?: string | false;
  customChecked?: boolean;
  onChange?: () => void;
}

export interface IBrand {
  name: string;
  code: string;
}

export interface IBrandList {
  [N: string]: IBrand[];
}

export interface IBrands {
  code?: string;
  name?: string;
  preview_picture?: string;
}

export interface IBrandsPopular {
  [N: string]: IBrands[];
}

interface IFilter {}

export interface ICardProperty {
  name: string;
  code: string;
  value: {
    name: string;
    code: string;
  };
}

export interface ICardStats {
  properties: Array<ICardProperty>;
  breadcrumb: Array<{ name: string; code: string }>;
  correct_filters?: string[] | [] | false;
}

export interface ICardReviews {
  reviews?: Array<ICardReview>;
  count: number | string;
}

export interface IReviewRow {
  text: string;
  width: number;
  count: number;
}
export interface IReview {
  preview_text: string;
  item_id: string;
  author_name: string;
  author_contacts: string;
  ocenka: string;
  advantages: string;
  flaws: string;
  answer_store: null | string;
  status: string;
  product: IReviewProduct;
  picture: string[];
}

export interface IReviewProduct {
  name: string;
  id: number;
  preview_picture: string;
  price_discount: number;
  price: number;
  reviews: number;
  active: boolean;
}

export interface ITagsCloud {
  tags: Array<{
    text: string;
    url: string;
  }>;
}

export interface ILocation {
  id: number;
  title: string;
  value: string;
  phone: string;
  commission: boolean;
  tradein: boolean;
  poroh: boolean;
  warranty: boolean;
  schedule: string;
  schedule_eng: string;
  ya_url_reviews: string;
  address: string;
  gps_n: string;
  gps_s: string;
  sort: string;
}

export interface IStories {
  name: string;
  lat: string;
  lon: string;
  items: Array<ILocation>;
}

export interface ISearchCard {
  card: ICardMini;
  className?: string;
  bottomClasses?: string;
  customStyle?: boolean;
}
export interface IUserCard {
  product_id: number;
  quantity: number;
  isRemoved: boolean;
  old: number | false;
  new: number | false;
  selected: boolean;
  isChecked?: boolean;
}

export interface IUserSlice {
  user: {
    info: {
      cart: Array<IUserCard>;
      favourites: Array<any>;
      name: string;
      lastname: string;
      email: string;
      phone: string;
      address: string;
      userRequest: boolean;
      userRequestError: boolean;
      updateUserRequest: boolean;
      updateUserRequestError: boolean;
      personal_birthday?: string;
      level?: number;
    };
    auth: {
      isAuth: boolean;
      step: string;
      variant: "email" | "tel" | "qr";
      authRequest: boolean;
      authRequestError: boolean;
      codeRequest: boolean;
      codeRequestError: boolean;
      registerRequest: boolean;
      registerRequestError: boolean;
      timeStampCode: string;
      valueToSendCode: string;
      queryEmail: boolean;
      backUrl: string;
      uuid: string;
      connectVk: boolean;
      connectYandex: boolean;
      connectMailru: boolean;
    };
  };
}

export interface ICategory {
  category: {
    code: string;
    name: string;
    detail_picture: string | null;
  };
}

export interface IHitsItem {
  card: {
    id: number;
    name: string;
    preview_picture: string;
    discount_percent: number;
    price_discount: number;
    price: number;
    labels: {
      bestseller: string;
      discount: string;
    };
    reviews: number | string;
    available: boolean;
    diff_pack: number;
  };
}

export interface IHighlightBannerItems {
  name: string;
  link: string;
  desktop_img: string;
  mobile_img: string;
}

export interface ISalesItem {
  items: Array<{
    id: number;
    name: string;
    preview_picture: string;
    iblock_id: string;
    property_is_available_value: string;
    property_is_available_value_id: string;
    sort: string;
    price_1: string;
    price_5: string;
    price_13: string;
    comission: boolean;
    labels: any;
    available: boolean;
    price_discount: number;
    price: number;
    discount_percent: number;
    reviews: number;
  }>;
  name: string;
  code: string;
  active_to: string;
  preview_picture: string;
  id: string;
}

export interface IArrayOfStores {
  lat: string;
  lon: string;
  name: string;
  items: Array<IShop>;
}

export interface IStoriesElement {
  id: string;
  code: string;
  name: string;
  property_file_value: string;
  property_name_button_value: string;
  property_url_button_value: string;
  property_duration_value: string;
  video: boolean;
  preview_text: string;
}

export interface IAllStories {
  name: string;
  picture: string;
  id: string;
  sort: string;
}

export interface IAnswer {
  question: string;
  answer: string;
}

export interface IArticle {
  status: "published" | "rejected" | "moderation";
  id: string | number;
  name: string;
  active: "Y" | "N";
  preview_text: string;
  preview_picture: string;
  property_rejected_value: null | number;
  property_reject_text_value: null | { TEXT: string };
}

export interface ILngLat {
  lon: number;
  lat: number;
  alt?: number;
}
