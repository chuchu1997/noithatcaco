/** @format */

import { getCategoryWithSlug } from "@/actions/get-categories";
import { getProducts } from "@/actions/get-products";
import TileComponent from "@/components/layouts/TileComponent";
import ProductList from "@/components/product/product-list";
import BillboardLayout from "@/components/ui/billboard";
import CircleLoading from "@/components/ui/circle-loading";
import { Suspense } from "react";

interface DanhMucPageWithIdProps {
  params: Promise<{ slug: string }>;
}
const DanhMucPageWithID = async (props: DanhMucPageWithIdProps) => {
  const { params } = props;
  const { slug } = await params;

  const category = await getCategoryWithSlug(slug);

  const products = await getProducts({
    categoryId: category.id,
  });

  return (
    <div className="container mx-auto py-8">
      <Suspense fallback={<CircleLoading />}>
        <BillboardLayout data={category.billboard} />
        <section className="list-products">
          <TileComponent title="Sản phẩm thuộc category này" />
          <ProductList title="" products={products} />
        </section>
      </Suspense>
    </div>
  );
};
export default DanhMucPageWithID;
