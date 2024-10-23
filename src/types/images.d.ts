declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.webp" {
  const src: string;
  export default src;
}
