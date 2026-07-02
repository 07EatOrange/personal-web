import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import HomePage from "@/pages/HomePage/HomePage";
import BlogListPage from "@/pages/BlogListPage/BlogListPage";
import BlogDetailPage from "@/pages/BlogDetailPage/BlogDetailPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="blog" element={<BlogListPage />} />
        <Route path="blog/:id" element={<BlogDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
