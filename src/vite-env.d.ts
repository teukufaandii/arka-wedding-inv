/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STATIC_SHARE_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.m4a' {
  const src: string;
  export default src;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

