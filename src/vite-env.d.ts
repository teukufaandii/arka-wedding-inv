/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STATIC_SHARE_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
