import { useEffect, useMemo, useState } from "react";
import { Layout } from "./components/Layout";
import { NavigationProvider } from "./lib/navigation";
import { About } from "./pages/About";
import { Admissions } from "./pages/Admissions";
import { Contact } from "./pages/Contact";
import { Courses } from "./pages/Courses";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";
import { applySeo } from "./lib/seo";

const routes = {
  "/": Home,
  "/about": About,
  "/courses": Courses,
  "/admissions": Admissions,
  "/gallery": Gallery,
  "/contact": Contact,
};

type RoutePath = keyof typeof routes;

function normalizePath(pathname: string): RoutePath {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  return cleanPath in routes ? (cleanPath as RoutePath) : "/";
}

export default function App() {
  const [path, setPath] = useState<RoutePath>(() => normalizePath(window.location.pathname));

  useEffect(() => {
    function handlePopState() {
      setPath(normalizePath(window.location.pathname));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    applySeo(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [path]);

  const navigation = useMemo(
    () => ({
      path,
      navigate(to: string) {
        const nextPath = normalizePath(to);
        window.history.pushState(null, "", nextPath);
        setPath(nextPath);
      },
    }),
    [path],
  );

  const Page = routes[path];

  return (
    <NavigationProvider value={navigation}>
      <Layout>
        <Page />
      </Layout>
    </NavigationProvider>
  );
}
