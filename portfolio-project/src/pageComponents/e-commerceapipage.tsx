import ecommerceapi1 from "@/assets/ECOMMERCEAPI1.png";
import ecommerceapi2 from "@/assets/ECOMMERCEAPI2.png";
import ecommerceapi3 from "@/assets/ECOMMERCEAPI3.png";
import ProjectShowcasePage from "./projectShowcasePage";

export default function EcommerceApiPage() {
  return (
    <ProjectShowcasePage
      title="ECOMMERCE API"
      subtitle="Reusable commerce backend starter"
      description="A ready-to-use NestJS backend starter for storefronts and admin tooling, shipping with authentication, roles, product flows, carts, orders, MongoDB persistence, Redis caching, Swagger docs, Docker setup, and seeded data for quick setup."
      tech={["NestJS", "Redis", "Docker", "MongoDB", "Paystack", "Swagger"]}
      links={[{ label: "View Code", href: "https://github.com/iyanu752/e-commerce-api-template" }]}
      images={[ecommerceapi1, ecommerceapi2, ecommerceapi3]}
    />
  );
}
