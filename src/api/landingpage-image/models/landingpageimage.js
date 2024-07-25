"use strict";

console.log("landingpageimage.js file is loaded");

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_API_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = {
  lifecycles: {
    async afterCreate(event) {
      console.log("Lifecycle afterCreate triggered");
      const { result } = event;
      console.log("Event result afterCreate:", result);
    },
    async afterUpdate(event) {
      console.log("Lifecycle afterUpdate triggered");
      const { result } = event;
      console.log("Event result afterUpdate:", result);
    },
  },
};
