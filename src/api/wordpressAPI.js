import axios from "axios";

const BASE_URL = "https://public-api.wordpress.com/wp/v2/sites/ncdbtest.wordpress.com";

export const fetchPageBySlug = async (slug) => {
  try {
    const res = await axios.get(`${BASE_URL}/pages?slug=${slug}`);
    return res.data.length > 0 ? res.data[0] : null;
  } catch (err) {
    console.error("Error fetching page:", err);
    return null;
  }
};

export const fetchPostsByCategory = async (categoryId) => {
  try {
    const res = await axios.get(`${BASE_URL}/posts?categories=${categoryId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching posts:", err);
    return [];
  }
};
