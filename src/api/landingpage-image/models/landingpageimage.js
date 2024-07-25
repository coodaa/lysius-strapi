"use strict";

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
  lifecycles: {
    async afterCreate(event) {
      const { result } = event;

      if (result.Bilder && result.Bilder.url) {
        const { url } = result.Bilder;
        const { error } = await supabase
          .from("landingpage_images")
          .update({ image_url: url })
          .eq("id", result.id);

        if (error) {
          console.error("Error inserting image URL into Supabase:", error);
        }
      }
    },
    async afterUpdate(event) {
      const { result } = event;

      if (result.Bilder && result.Bilder.url) {
        const { url } = result.Bilder;
        const { error } = await supabase
          .from("landingpage_images")
          .update({ image_url: url })
          .eq("id", result.id);

        if (error) {
          console.error("Error updating image URL in Supabase:", error);
        }
      }
    },
  },
};
