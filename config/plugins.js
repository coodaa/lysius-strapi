module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: env("NETLIFY_ACCESS_TOKEN"),
      sites: [
        {
          name: "meek-pixie-fd1a94", // Ihr Site-Name
          id: env("NETLIFY_SITE_ID"),
          buildHook: env("NETLIFY_BUILD_HOOK"),
        },
      ],
    },
  },
});
