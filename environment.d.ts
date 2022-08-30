declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SUPABASE_URL: string;
      SUPABASE_KEY: string;
      SUPABASE_AUTH_KEY: string;
    }
  }
}

export {};
