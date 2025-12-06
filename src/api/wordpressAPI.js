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

export const fetchAllPosts = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/posts`);
    return res.data;
  } catch (err) {
    console.error("Error fetching all posts:", err);
    return [];
  }
};

export const fetchAllCategories = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/categories`);
    return res.data;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const res = await axios.get(`${BASE_URL}/posts?slug=${slug}`);
    return res.data.length > 0 ? res.data[0] : null;
  } catch (err) {
    console.error("Error fetching post:", err);
    return null;
  }
};

export const fetchMedia = async (mediaId) => {
  try {
    const res = await axios.get(`${BASE_URL}/media/${mediaId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching media:", err);
    return null;
  }
};