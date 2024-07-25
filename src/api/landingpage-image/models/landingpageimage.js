const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
  lifecycles: {
    async afterCreate(event) {
      const { result } = event;

      if (result.image && result.image.url) {
        const { url } = result.image;
        const { error } = await supabase
          .from("landingpage_images")
          .insert({ image_url: url, id: result.id });

        if (error) {
          console.error("Error inserting image URL into Supabase:", error);
        } else {
          console.log("Successfully inserted image URL into Supabase.");
        }
      }
    },
    async afterUpdate(event) {
      const { result } = event;

      if (result.image && result.image.url) {
        const { url } = result.image;
        const { error } = await supabase
          .from("landingpage_images")
          .update({ image_url: url })
          .eq("id", result.id);

        if (error) {
          console.error("Error updating image URL in Supabase:", error);
        } else {
          console.log("Successfully updated image URL in Supabase.");
        }
      }
    },
  },
};
